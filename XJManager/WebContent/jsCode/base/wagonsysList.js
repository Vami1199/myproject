Ext.Loader.setConfig({
	enabled: true
});

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

Ext.onReady(function() {
	// register model
	//相当于定义了一个company 类
	Ext.define('Wagonsys', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
			name: 'rwId',
			type: 'String'
		},{
			name: 'rwType',
			type: 'Byte'
		}, {
			name: 'rwStart',
			type: 'Integer'
		}, {
			name: 'rwSnum',
			type: 'Integer'
		}, {
			name: 'rwWeight',
			type: 'Integer'
		}, {
			name: 'rwSelf',
			type: 'Integer'
		}]
	});


	///////////添加///////////////////////////////////////////////////
	
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

                proForm.submit({
                    success: function() {
                        proForm.hide();
                        c.hide();
                        wsStore.reload();
                    },
                    failure: function(proForm, action) {
                    	var data = Ext.decode(action.response.responseText);
                        Ext.Msg.alert('失败',data.msg);
                    }
                });
			}
		}, {
			text : "重置",
			iconCls : "reset",
			handler : function() {
				proForm.getForm().reset();
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
				fieldLabel : "车皮编号前缀",
				flex : 1,
				value : '',
				afterLabelTextTpl : required,
				name : 'rwStart',
				allowBlank : false,
			}]
		},
		{
			xtype : 'textfield',
			fieldLabel : '前缀位数',
			//必填项
			afterLabelTextTpl : required,
			//pName
			name : 'rwSnum',
			allowBlank : false,
			tooltip : '填入产品编号'
		},{
		xtype : "textfield",
		name : 'rwId',
		hidden:true
		},{
             xtype: 'combo',
             store: Ext.create('Ext.data.ArrayStore', {
          	   fields: [ {name:'typeKey',type:'Integer'},{name:'typeValue',type:'String'} ],
                 data: [
                     [0,'K型车'],
                     [1,'普快'],
                     [2,'其他']
                 ]
             }),
             id:'typeId',
             name: 'rwType',
             hiddenName : 'rwType',// 提交到后台的input的name ，对应下面store里的''id，必须要填
             emptyText : '-----请选择-----',
             valueField:'typeKey',
             displayField: 'typeValue',
             fieldLabel: '车皮类型',
             afterLabelTextTpl : required,
             queryMode: 'local',//数据模式,local代表本地数据模式
             selectOnTab: false,
             typeAhead:false,
             editable:false, 
             onReplicate: function(){
                 this.getStore().clearFilter();
             }
         },  
		{
			xtype : 'textfield',
			fieldLabel : '载重',
			afterLabelTextTpl : required,
			name : 'rwWeight',
			allowBlank : false,
			tooltip : '填入产品编号'
		}, {
			xtype : 'textfield',
			fieldLabel : '自重',
			afterLabelTextTpl : required,
			name : 'rwSelf',
			allowBlank : false,
			tooltip : '填入产品编号'
		}, {
			xtype : 'textarea',
			fieldLabel : '备注',
			hideLabel : false,
			name : 'rwRemark',
			style : 'margin:0', 
			flex : 1
		} ]
	});

	


	//初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
	Ext.tip.QuickTipManager.init();

	//想当于一个仓库 存储各种对像的
	var wsStore = Ext.create('Ext.data.Store', {
		model: 'Wagonsys',
		remoteSort: true,
		//每页显示的数据
		pageSize: 5,
		proxy: {
            type: "ajax",
            url: '/XJManager/base/wagonsysList.do',
            reader: {
                type: "json",
                root: "queryList",
                totalProperty: 'totalCount'
            }
        }
	});
	//定义选择框
	var sm = Ext.create('Ext.selection.CheckboxModel');
	//定义grid
	var wsGrid = Ext.create('Ext.grid.Panel', {
		//grid 的标题
		title: '车皮系统参数',
		//引入仓库
		store: wsStore,
		//引入选择框
		selModel: sm,
		//定义列
		columns: [{
				text: '车皮类型',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'rwType',
				flex: 0,
				width: 75,
				renderer:function(value){
                    if(value == 0){
                           return "K型车";
                    }else if(value==1){
                           return "H型车";
                    }else if(value==2){
                    	   return "其他";
                    }
				}
			},{
				text: '车皮编号信息',
				sortable: true,
				dataIndex: 'rwStart',
				width: 75,
			},{
				sortable: true,
				dataIndex: 'rwId',
				hidden:true
			}, {
				text: '前缀位数',
				sortable: true,
				dataIndex: 'rwSnum',
				width: 75,
			}, {
				text: '载重',
				sortable: true,
				dataIndex: 'rwWeight',
				width: 75,
			}, {
				text: '自重',
				sortable: true,
				dataIndex: 'rwSelf',
				width: 75,
			}, {
				//定义每列数据删除按钮
				text: '快速删除',
				xtype: 'actioncolumn',
				title: '快速删除',
				width: 75,
				sortable: false,
				items: [{
					icon: '../../common/shared/icons/fam/delete.gif',
					tooltip: 'Delete Plant',
					handler: function(grid, rowIndex, colIndex) {
	                    Ext.MessageBox.confirm("请确认", "确定删除吗？",
	                            function(button, text) {
	                                if (button == 'yes') {
	                                    //获取对应行的节点
	                                    var node = grid.getNode(rowIndex);
	                                    //获取对应节点的数据model
	                                    var rec = grid.getRecord(node);
	                                    //获取选中行的pid属性
	                                    var id = rec.get('rwId');
	                                    Ext.Ajax.request({
	                                        url: '/XJManager/base/deleteWagonsys.do',
	                                        params: {
	                                            'ids': id
	                                        },
	                                        method: 'POST',
	                                        success: function(response, options) {
	                                            Ext.MessageBox.alert('成功', '删除成功');
	                                        },
	                                        failure: function(response, options) {
	                                            Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
	                                        }
	                                    });
	                                    wsStore.removeAt(rowIndex);
	                                }
	                            });
	                        }
				}]
			}

		],

		// 保存和取消按钮
		dockedItems: [
			//各种按钮布局
			{
				xtype: 'toolbar',
				items: [{
					text: '添加',
					tooltip: 'add',
					iconCls: 'add',
					listeners: {
						'click': function() {
	                         c.add(proForm);
	                         proForm.show();
	                         proForm.getForm().reset();
	                         Ext.getCmp('typeId').setValue(0);
	                         proForm.getForm().url = '/XJManager/base/addWagonsys.do';
	                         c.show();
						}
					}

				}, '-', {
					text: '修改',
					tooltip: ' edit',
					iconCls: 'edit',
					listeners : {
                    'click' : function() {
							var record = wsGrid.getSelectionModel().getSelection();
							if(record == undefined || record == '') {
								Ext.Msg.alert('信息', '请选择一条数据');
								return;
							}
							if(record.length >= 2) {
								Ext.Msg.alert('信息', '只可以选择一条数据');
								return;
							}
							c.add(proForm);
							proForm.show();
							c.show();
							proForm.getForm().loadRecord(record[0]);
	                        proForm.getForm().url = '/XJManager/base/updateWagonsys.do';
							wsGrid.getSelectionModel().clearSelections();
							wsGrid.getView().refresh();
					}
                    	
                }
				}, '-', {
					itemId: 'removeButton',
					text: '删除',
					tooltip: 'remove',
					iconCls: 'remove',
					listeners: {
	                    'click': function() {
	                        var record = wsGrid.getSelectionModel().getSelection();
	                        if (record == undefined || record == '') {
	                            Ext.Msg.alert("错误", "请选择至少一条数据");
	                            return;
	                        } else {
	                            Ext.MessageBox.confirm("请确认", "确定删除吗？",
	                            function(button, text) {
	                                if (button == 'yes') {
	                                    var url = "/XJManager/base/deleteWagonsys.do";
	                                    var param = "";
	                                    for (var i = 0; i < record.length; i++) {
	                                        param = param + record[i].get("rwId") + "-";
	                                    }
	                                    Ext.Ajax.request({
	                                        url: url,
	                                        params: {
	                                            'ids': param
	                                        },
	                                        method: 'POST',
	                                        success: function(response, options) {
	                                        	wsStore.load();
	                                            Ext.MessageBox.alert('成功', '删除成功');
	                                        },
	                                        failure: function(response, options) {
	                                            Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
	                                        }
	                                    });
	                                }
	                            });

	                        }
	                    }
	                }
				}, ]
			}
		],

		//table边框的设定
		stripeRows: true,
		height: 320,
		width: 1200,
		frame: false,

		bbar: Ext.create('Ext.PagingToolbar', {
			pageSize: 10,
			store: wsStore,
			displayInfo: true,
			plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		}),
	});

	//将table放入制定的div中
	wsGrid.render('grid-example');
	//重新提交新的参数请求数据；
	wsStore.load();
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