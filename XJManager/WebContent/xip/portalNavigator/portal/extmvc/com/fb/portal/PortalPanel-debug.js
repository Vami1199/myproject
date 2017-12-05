/**
 * 定义布局的外框，最外层定义为一个panel，在此panel中实现拖拽功能
 * 采用column布局方式,引用PortalDropZone类，此组件的子组件默认形式为列对象 引用PortalColumn类 参数列表
 */
Ext.define("com.fb.portal.PortalPanel", {
	extend : "Ext.panel.Panel",
	alias : "myPortalpanel",// 别名，可用xtpe:'myPortalpanel',使用该组件
	cls : "x-portal",
	bodyCls : "x-portal-body",
    autoScroll: true,
    manageHeight: false,
	defaultType : "myPortalcolumn",// 默认子组件类型
	border : false,
	//height:800,
	autoScroll : true,
	//LayoutContainer中显示调用了initData的方法
	initData : function(data) {
		// 初始化的时候清空,清除控件
		this.removeAll(true);
		this.addPortalColumn(data);
	},
	initComponent : function() {
		var me = this;
		me.layout = {
            type : 'column'
        };
		me.callParent();
		me.addEvents({
					validatedrop : true,
					beforedragover : true,
					dragover : true,
					beforedrop : true,
					drop : true
				});
	    /*
	     *drop事件
	     *参数：b(类型为json，包含如下内容，详情请见 com.fb.portal.PortalDropZone---->createEvent方法)
	     *panel------>被拖拽的 portlet
	     *column----->portlet将要被拖拽到的portletColumn
	     *position----->portlet被拖到portletColumn上的位置(从0开始) 
	     *columnIndex --->portlet将要被拖拽到的portletColumn序号(从0开始)
	     *data----->被拖拽portlet的data 
	     */
		me.on('drop', function(b) {
					var me=this;
					var objectColumnId = b.column.portalColId;
					var objectPortletId = b.panel.portletId;
					var objectPosition = b.position;
					//处理组件的位置问题，插入到第一个位置position为0，依次类推，修改组件所属位置和顺序之前，让该列下面所有序号大于等于position的组件序号+1即可
					Wb.request({
						url:'m?xwl=xip/pub/navigator/portalNavigator/data/dragPortletUnit',
						params:{'COMPONENT_ID':objectColumnId,'UNIT_ID':objectPortletId,'UNIT_ORDER':objectPosition}
					});
				});
	},
	/*
	 *widthArray:portalColumn列的具体列宽的数值
	 *给portalPanel中每一列设置具体的值后，重新doLayout
	 */
	setDetailColWidth:function(widthArray){
		for(var x=0;x<this.getColumns().length;x++){
			this.getColumns()[x].columnWeight = parseFloat(widthArray[x]);
		}
		this.doLayout();
	},
	/*
	 *动态改变布局，设置列的宽度。 
	 */
	setColumnsWidth : function(layoutstyle) {
		var myColumnIds = new Array();
		for (var m = 0; m < this.getColumns().length; m++) {
			myColumnIds[m] = this.getColumns()[m].columnId;
		}
		var myColumnIdsStr = myColumnIds.join("-");
		if (parseInt(layoutstyle / 10) == 2) {
			if (parseInt(layoutstyle) % 10 == 1) {
				this.getColumns()[0].columnWeight = 0.5;
				this.getColumns()[1].columnWeight = 0.5;
			} else if (parseInt(layoutstyle) % 10 == 2) {
				this.getColumns()[0].columnWeight = 0.333;
				this.getColumns()[1].columnWeight = 0.666;
			} else {
				this.getColumns()[0].columnWeight = 0.666;
				this.getColumns()[1].columnWeight = 0.333;
			}
		} else if (parseInt(parseInt(layoutstyle) / 10) == 3) {
			if (parseInt(layoutstyle) % 10 == 1) {
				this.getColumns()[0].columnWeight = 0.333;
				this.getColumns()[1].columnWeight = 0.333;
				this.getColumns()[2].columnWeight = 0.333;
			} else {
				this.getColumns()[0].columnWeight = 0.25;
				this.getColumns()[1].columnWeight = 0.5;
				this.getColumns()[2].columnWeight = 0.25;
			}
		} else if (parseInt(parseInt(layoutstyle) / 10) == 1) {
			this.getColumns()[0].columnWeight = 1;
		} else {
			this.getColumns()[0].columnWeight = 0.25;
			this.getColumns()[1].columnWeight = 0.25;
			this.getColumns()[2].columnWeight = 0.25;
			this.getColumns()[3].columnWeight = 0.25;
		}
	},
	changeColumns : function(layoutstyle) {
		// 增加列的操作相对比较简单，只需要网xip_portal_compenent表中添加记录即可
	    // 减少一列的话要从数据库中删除，增加一列的话要往数据库中添加，这样的话这个函数内就有很多的Ajax请求了
		// 这边的逻辑有点复杂，需要知道原先有几列，最后要变成有几列
		var me = this;
		var originColumnNum = me.getColumns().length;
		if (layoutstyle / 10> originColumnNum) {
			var addNum = parseInt(layoutstyle / 10) - originColumnNum;
			//这个for循环可以在存储方法调用返回是执行
			for (var i = 0; i < addNum; i++) {
				var tempColumn = Ext.create('myPortalcolumn');
				tempColumn.setHeight('100%');
				me.add(tempColumn);
			}
			me.setColumnsWidth(layoutstyle);
			me.doLayout();
		} else if (parseInt(layoutstyle / 10) == originColumnNum) {
			me.setColumnsWidth(layoutstyle);
			me.doLayout();
		} else {// 如果是减少列数的话
			// for循环中一定不要写Ajax，会产生异步的问题
			var delNum = originColumnNum - parseInt(layoutstyle / 10);
			var portlets = new Array();
			var delcolumnIds = new Array();
			for (var i = 0; i < delNum; i++) {
				var delColumn = this.getColumns()[i];
				// 通过一次循环拿出要被删除的列的所有的portlets
				delcolumnIds[i] = delColumn.columnId;
				for (var j = 0; j < delColumn.getPortlets().length; j++) {
					var portlet = delColumn.getPortlets()[j].getData();
					portlet.height = delColumn.getPortlets()[j].getHeight();
					portlets.push(portlet);
				}
			}
			//下边两个循环也可以在存储方法返回时执行
			for (var p = 0; p < delNum; p++){
					me.remove(me.getColumns()[0]);
			}
			for (var p = 0; p < portlets.length; p++) {
					me.addNewWidget(portlets[p]);// 在这个add中把columnId传递给portlet
					me.setColumnsWidth(layoutstyle);
			}
			me.doLayout();

		}
	},
	/**
	 *columns:要创建组件的一些属性信息
	 *columns[i].portlets为要创建区域中的单元数
	 */
	addPortalColumn : function(columns) {
		var me=this;
		if (!columns || columns.length == 0) {
			return;
		}
		//根据初始化json记录数，动态创建portalColumn数量
		for (var i = 0; i < columns.length; i++) {
			// 创建新的列
			var columnTemp = Ext.create('com.fb.portal.PortalColumn');
			columnTemp.setHeight('100%');
			// 定义宽度，设置columnWeigth属性，在beforeLayout事件中，将该值设置到columnWidth中去
			columnTemp.columnWeight = columns[i].columnWeight;
			//定义每一列panel的标记，对应组件表的主键，用于保存组件的添加
			columnTemp.portalColId =  columns[i].portalColId;
			// 初始化列对象
			columnTemp.initPortlet(columns[i].portlets);
			me.add(columnTemp);
		}
	},
	// 添加新的Widget,根据当前列的包含portlet的数量情况,添加到相对个数较少的列
	// 必须是主页所定义的列不为空的情况下才添加
	addNewWidget : function(portlet) {
		var me=this;
		var myColumns = this.getColumns();
		if (myColumns != null) {
			for (var i = myColumns.length - 1; i >= 0; i--) {
				// 从最后一列开始遍历，假如当前列已经是第一列，或者当前列的前一列比当前列长，则添加到当前列
				if (i == 0|| myColumns[i].getPortlets().length < myColumns[i - 1].getPortlets().length) {
					//这只portalColumn的widgetCompId
					portlet.widgetCompId = myColumns[i].portalColId;
					var widgetId = portlet.widgetId;
					var columnId = myColumns[i].columnId;
					var columnHeight = portlet.height;
					//************************************************************
					//==========动态添加组件时，将要添加的组件信息保存到数据库中==================
					//************************************************************
					Wb.request({
						url:'m?xwl=xip/pub/navigator/portalNavigator/data/addUnitToPortal',
						params:portlet,
						success:function(response){
							var returnPortlet = Wb.decode(response.responseText);
							portlet.portletId = returnPortlet.PORTLET_ID;
							myColumns[i].addPortlet(portlet);
							//Wb.info('添加成功！');
						},
						failure:function(){
							Wb.warn(XipLang.chart_add_unit_error);
						}
					});
					break;
				}
			}
		}
	},
	// 得到所有的portlet数量
	getPortletsNumber : function() {
		var myColumns = this.getColumns();
		var sum = 0;
		if (myColumns != null) {
			for (var i = 0; i <= myColumns.length - 1; i++) {
				sum += myColumns[i].getPortlets().length;
			}
		}
		return sum;
	},

	// 得到所包含的列
	getColumns : function() {
		if (this.items) {
			return this.items.items;
		}
		return null;
	},
	// 覆盖beforeLaout方法在每次渲染时候调用，计算每列的宽度
	 beforeLayout: function() {
        var items = this.getColumns(),
            len = items.length;

        for (var i = 0; i < len; i++) {
            var item = items[i];
            item.columnWidth =item.columnWeight;
        }

        return this.callParent(arguments);
    },
	initEvents : function() {
		this.callParent();
		// 附件拖拽效果
		this.dd = Ext.create("com.fb.portal.PortalDropZone", this,
				this.dropConfig);
	},
	// 删除时，从可拖拽队列中注销
	beforeDestroy : function() {
		if (this.dd) {
			this.dd.unreg();
		}
		this.callParent();
	}
});