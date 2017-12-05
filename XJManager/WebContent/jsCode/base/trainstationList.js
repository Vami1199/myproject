Ext.Loader.setConfig({enabled: true});

//设置路径
Ext.Loader.setPath('Ext.ux', '../../common/ux/');

//定义需要的插件
Ext.require([
    'Ext.data.*',
    'Ext.grid.*',
    'Ext.util.*',
    'Ext.tip.QuickTipManager',
    'Ext.ux.data.PagingMemoryProxy',
    'Ext.ux.ProgressBarPager',
    'Ext.selection.CheckboxModel',
    'Ext.ux.RowExpander',
    'Ext.selection.CellModel',
    'Ext.ux.CheckColumn',
    'Ext.state.*',
    'Ext.form.*'
]);

Ext.onReady(function(){
	// register model
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [
		         {name: 'subbureauId' ,type: 'String'},
		         {name: 'subbureauName', type: 'string'},
		         {name: 'subbureauAdminid', type: 'Integer'},
		         {name: 'subbureauIskey', type: 'Byte'}
		         ]        
	});

    //定义数据源将被引入到对应的列中
    var myData = [
        ['xxx',1999,999,'xxx',0,0,888,'xxx','9/1 12:00']
 
    ];
    
    //初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
    Ext.tip.QuickTipManager.init();
    
    //想当于一个仓库 存储各种对像的
    var store = Ext.create('Ext.data.Store', {
        model: 'PMonthrequest',
        remoteSort: true,
        //每页显示的数据
        pageSize: 5,
        proxy: {
            type: 'pagingmemory',
            //引入数据源
            data: myData,
            reader: {
                type: 'array'
            }
        }
    });
    
    //定义编辑属性
    var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
    	//鼠标点击两次 出现编辑
        clicksToEdit: 2
    });
    
    //定义选择框
    var sm = Ext.create('Ext.selection.CheckboxModel');
    
    /*********************创建window弹窗表单开始***********************/
	var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
	var c = new Ext.Window({
		autoHight : true,
		modal : true,
		/*closeAction:hide,*/
		items : [], // 这里面放你的表单。 
		closeAction : 'close',//这里写成 'hide' 
		/***********************表单设计结束*********************/
		buttons : [ {
			text : "保存",
			iconCls : "btn-save",
			handler : function() {
			}
		}, {
			text : "重置",
			iconCls : "reset",
			handler : function() {
			}
		} ]
	});
	/***********************表单设计开始*********************/
	var proForm = Ext.create('Ext.form.Panel', {
		plain : true,
		border : 0,
		bodyPadding : 5,
		width : 420,
		title : '添加',
		//表单发送的到的action路径
		url : '/base/productList.do',
		//默认设置
		fieldDefaults : {
			labelWidth : 70,
			anchor : '100%'
		},
		//布局,vbox是竖排,hbox是横排
		layout : {
			type : 'vbox',
			align : 'stretch' // Child items are stretched to full width
		},

		items : [ {
			xtype : "fieldcontainer",
			layout : "hbox",
			items : [ {
				xtype : "textfield",
				fieldLabel : "发站",
				flex : 1,
				/*layout: 'column',*/
				value : '',
				//必填项
				afterLabelTextTpl : required,
				//pProductionunit
				name : 'pProductionunit',
				allowBlank : false,
			}]
		},
		{
             xtype: 'combo',
             store: Ext.create('Ext.data.ArrayStore', {
          	   fields: [ 'coal' ],
                 data: [
                     ['是'],
                     ['否'],
                     ['其他']
                 ]
             }),
             name: '',
             hiddenName : 'id',// 提交到后台的input的name ，对应下面store里的''id，必须要填
             emptyText : '-----请选择-----',
             //map中的键
             valueField:'',
             //map中的值 
             displayField: 'coal',
             //选中下拉框后再点击面板就会多出一行,不知道有卵子用
             /*plugins: [ Ext.ux.FieldReplicator ],*/
             fieldLabel: '是否发站',
             queryMode: 'local',//数据模式,local代表本地数据模式
             //tab键是否可以选择当前突出项
             selectOnTab: false,
             /****下拉框不可编辑*****/
  		   typeAhead:false,
  		   editable:false, 
  		   /****下拉框不可编辑*****/	                 
             onReplicate: function(){
                 this.getStore().clearFilter();
             }
         },  
		{
			xtype : 'textfield',
			fieldLabel : '单位简称',
			//必填项
			afterLabelTextTpl : required,
			//pName
			name : 'pName',
			allowBlank : false,
			tooltip : '填入产品编号'
		}, {
			xtype : 'textfield',
			fieldLabel : '单位全称',
			//必填项
			afterLabelTextTpl : required,
			//pName
			name : 'pName',
			allowBlank : false,
			tooltip : '填入产品编号'
		}, {
			xtype : 'textarea',
			fieldLabel : '备注',
			hideLabel : false,
			name : 'remark',
			style : 'margin:0', // Remove default margin
			flex : 1
		// Take up all *remaining* vertical space
		} ]

	})

	///////////////////////////////////////////////////////////////
    //定义grid
    var grid = Ext.create('Ext.grid.Panel', {
    	//grid 的标题
        title:'铁路分局管理',
        //引入仓库
        store: store,
        //引入选择框
        selModel: sm,
        //定义列
      /*  {name: 'subbureauId' ,type: 'String'},
        {name: 'subbureauName', type: 'string'},
        {name: 'subbureauAdminid', type: 'Integer'},
        {name: 'subbureauIskey', type: 'Byte'},*/
        columns:[{
            id:'subbureauId',
            text: '铁路分局编号',
            sortable: true,
            //与定义的类中的属性匹配
            dataIndex: 'subbureauId',
            flex: 0,
            width: 75,
            //鼠标点击时能够编辑
            editor: {
                allowBlank: false
            }
        },{
            text: '铁路分局名称',
            sortable: true,
            dataIndex: 'subbureauName',
            width: 75,
            //鼠标点击时能够编辑
            editor: {
                allowBlank: false
            }
        },{
            text: '铁路局',
            sortable: true,
            dataIndex: 'subbureauAdminid',
            width: 75,
            editor: {
                allowBlank: false
            }
        },
        {
            text: '是否关键分局',
            sortable: true,
            dataIndex: 'subbureauIskey',
            width: 75,
            editor: {
                allowBlank: false
            }
        },{
            	//定义每列数据删除按钮
            		text: '快速删除',
                    xtype: 'actioncolumn',
                    title:'快速删除',
                    width:75,
                    sortable: false,
                    items: [{
                        icon: '../../common/shared/icons/fam/delete.gif',
                        tooltip: 'Delete Plant',
                        handler: function(grid, rowIndex, colIndex) {
         					Ext.MessageBox.confirm(   
         					 "请确认"  
         					  ,"确定删除吗？"  
         					  ,function( button,text ){  
         						 if( button == 'yes'){  
         					      store.removeAt(rowIndex); 
         						 }  
         					  }   
         					);        
                        }
                    }]
                }
           
            
            ],
            
        // 保存和取消按钮
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'center'
            },
            items: [{
            	
                minWidth: 80,
                text: '保存'
            },{
                minWidth: 80,
                text: '取消'
            }]
        }, 
        //各种按钮布局
        {
            xtype: 'toolbar',
            items: [{
            	text:'筛选',
            	tooltip:'search',
            	iconCls:'search'
            },{
            	text:'添加',
            	tooltip:'add',
            	iconCls:'add',
            	listeners : {
					'click' : function() {
						c.add(proForm);
						c.show();
					}
				}
            }, '-',{
                text:'修改',
                tooltip:' edit',
                iconCls:'edit'
            },'-',{
                itemId: 'removeButton',
                text:'删除',
                tooltip:'remove',
                iconCls:'remove',
                disabled: true
            },'-', {
                text:'详细信息',
                tooltip:'detailed',
                iconCls:'detailed'
            }
            ]
       }],
       
       //table边框的设定
        stripeRows: true,
        height:320,
        width:1200,
        frame:false,
        
        /*resizable: {
           handles: 's',
           minHeight: 100
        },*/
        
        bbar: Ext.create('Ext.PagingToolbar', {
            pageSize: 10,
            store: store,
            displayInfo: true,
            plugins: Ext.create('Ext.ux.ProgressBarPager', {})
        }),
        tbar: [{
            text: '快速添加',
            handler : function(){
                // 将匹配的类加载到新建的行中
                var r = Ext.create('PMonthrequest', {
                	mId: 'xxxx',
                	mYear: '1991',
                	mMonth: '01',
                	mDate: '9/9 12:00',
                	mFlag:'xxx',
                	mAdminid:99,
                	mUser:'xx',
                	mTrains:88,
                	mWeight:'xx',
                	createby:'xxx',
                	modifyby:'xxx',
                	createdate:'9/9 12:00',
                	mRemark:'xx',
                    indoor: false
                });
                store.insert(0, r);
                cellEditing.startEditByPosition({row: 0, column: 0});
            }
        }],
        //引入编辑功能
        plugins: [cellEditing]
    });

    //将table放入制定的div中
    grid.render('grid-example');
    //重新提交新的参数请求数据；
    store.load();
});



















/***********************************************************************************************/
/***********************************************************************************************/

/*// example of custom renderer function
function change(val){
	if(val > 0){
		return '<span style="color:green;">' + val + '</span>';
	}else if(val < 0){
		return '<span style="color:red;">' + val + '</span>';
	}
	return val;
}

// example of custom renderer function
function pctChange(val){
if(val > 0){
	return '<span style="color:green;">' + val + '%</span>';
}else if(val < 0){
	return '<span style="color:red;">' + val + '%</span>';
}
return val;
}*/
