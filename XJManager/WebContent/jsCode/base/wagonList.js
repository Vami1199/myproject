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
	//////////////////////////////////////////////////////
	var searchFormx = Ext.create('Ext.form.Panel', {
		region: 'west',
		plain: true,
		border: 0,
		bodyPadding: 5,
		width: 400,
		//表单发送的到的action路径
		url: '',
		//默认设置
		fieldDefaults: {
			labelWidth: 70,
			anchor: '100%'
		},
		//布局,vbox是竖排,hbox是横排
		layout: {
			type: 'vbox',
			align: 'stretch' // Child items are stretched to full width
		},

		items: [{
				xtype: 'textfield',
				fieldLabel: '车皮编号',
				name:'csId'
			}, {
				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: [{name:'typekey',type:'Integer'},
					         {name:'typeValue',type:'String'}],
					data: [
						[0,'k型车'],
						[1,'h型车'],
						[2,'其他']
					]
				}),
				name: 'csType',
				hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				valueField: 'typekey',
				displayField: 'typeValue',
				fieldLabel: '车皮类型',
				afterLabelTextTpl: required,
				queryMode: 'local', 
				selectOnTab: false,
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}
			},

		],
		dockedItems: [{
			xtype: 'toolbar',
			dock: 'bottom',
			ui: 'footer',
			layout: {
				pack: 'center'
			},
			items: [{
				minWidth: 80,
				text: '搜索',
				handler:function(){
          		      	var url = '/XJManager/base/wagonList.do?1=1';
                        var all = searchFormx.getForm().getValues();
                        var searchId = all['csId'];
                        var searchName = all['csType'];
                        if (searchId != null) {
                            url = url + '&csId=' + searchId;
                        }
                        if (searchName != null) {
                            url = url + '&csType=' + searchName;
                        }
                        wStore.getProxy().url = url;
                        wStore.load();
                        panelnew.hide();
                    }
			}, {
				minWidth: 80,
				text: '取消',
				handler:function(){
      		      	searchFormx.getForm().reset();
                    panelnew.hide();
                }
					
			}]
		}]

	});
	//////////////////////////////////////////////////////
	var panelnew = Ext.create("Ext.panel.Panel", {
			floating: true,
			title: '筛选',
			closable: true,
			closeAction: 'hide',
			width: 410,
			height: 200,
			tools: [{
				type: 'pin'
			}],
			layout: {
				type: 'border',
				padding: 5
			},
			constrain: true,
			modal: true,
			hidden: true,
			plain: true,
			autoScroll: true,
			items: [{
					region: 'north',
					items: [searchFormx],
					width: 200,
					split: true,
					//是否可缩小
					floatable: false,
				},

			]
		});
		////////////////////////////////////////////////////////////////////
		// register model
		//相当于定义了一个company 类
	Ext.define('Wagon', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
			name: 'csId',
			type: 'Integer'
		}, {
			name: 'csType',
		}, {
			name: 'csLoad',
			type: 'Integer'
		}, {
			name: 'csDeadload',
			type: 'Integer'
		}]
	});
	//初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
	Ext.tip.QuickTipManager.init();

	//想当于一个仓库 存储各种对像的
	var wStore = Ext.create('Ext.data.Store', {
		model: 'Wagon',
		remoteSort: true,
		//每页显示的数据
		pageSize: 5,
		proxy: {
            type: "ajax",
            url: '/XJManager/base/wagonList.do',
            reader: {
                type: "json",
                root: "queryList",
                totalProperty: 'totalCount'
            }
        }
	});


	//定义选择框
	var sm = Ext.create('Ext.selection.CheckboxModel');

	////////////////////////////////////////////////////////////////

	/*********************创建window弹窗表单开始***********************/
	var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
	var c = new Ext.Window({
		autoHight: true,
		modal: true,
		/*closeAction:hide,*/
		items: [], // 这里面放你的表单。 
		closeAction: 'close', //这里写成 'hide' 
		/***********************表单设计结束*********************/
		buttons: [{
			text: "保存",
			iconCls: "btn-save",
			handler: function() {

                proForm.submit({
                    success: function() {
                        proForm.hide();
                        c.hide();
                        wStore.reload();
                    },
                    failure: function(proForm, action) {
                    	var data = Ext.decode(action.response.responseText);
                        Ext.Msg.alert('失败',data.msg);
                    }
                });
            
			
			}
		}, {
			text: "重置",
			iconCls: "reset",
			handler: function() {
				proForm.getForm().reset();
			}
		}]
	});
	/***********************表单设计开始*********************/
	var proForm = Ext.create('Ext.form.Panel', {
		plain: true,
		border: 0,
		bodyPadding: 5,
		width: 420,
		title: '添加',
		//表单发送的到的action路径
		url: '/base/productList.do',
		//默认设置
		fieldDefaults: {
			labelWidth: 70,
			anchor: '100%'
		},
		layout: {
			type: 'vbox',
			align: 'stretch' // Child items are stretched to full width
		},

		items: [{
			xtype: "fieldcontainer",
			layout: "hbox",
			items: [{
				xtype: "numberfield",
				id:'formCsId',
				fieldLabel: "车皮编号",
				flex: 1,
				afterLabelTextTpl: required,
				name: 'csId',
				allowBlank: false,
			}]
		}, {
			xtype: 'combo',
			store: Ext.create('Ext.data.ArrayStore', {
				fields: [{name:'typekey',value:'Integer'},
				         {name:'typeValue',value:'String'}],
				data: [
					[0,'k型车'],
					[1,'h型车'],
					[2,'其他']
				]
			}),
			id:'typeId',
			name: 'csType',
			hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
			emptyText: '-----请选择-----',
			valueField: 'typekey',
			displayField: 'typeValue',
			fieldLabel: '车皮类型',
			afterLabelTextTpl: required,
			queryMode: 'local', 
			selectOnTab: false,
			typeAhead: false,
			editable: false,
			onReplicate: function() {
				this.getStore().clearFilter();
			}
		}, {
			xtype: 'numberfield',
			fieldLabel: '载重',
			afterLabelTextTpl: required,
			name: 'csLoad',
			allowBlank: false,
			tooltip: '填入产品编号'
		}, {
			xtype: 'numberfield',
			fieldLabel: '自重',
			afterLabelTextTpl: required,
			name: 'csDeadload',
			allowBlank: false,
			tooltip: '填入产品编号'
		}]

	});

	////////////////////////////////////////////////////////////////
	//定义grid
	var wGrid = Ext.create('Ext.grid.Panel', {
		//grid 的标题
		title: '车皮管理',
		//引入仓库
		store: wStore,
		//引入选择框
		selModel: sm,
		//定义列
		columns: [{
				id: 'gridCsId',
				text: '车皮编号',
				sortable: true,
				dataIndex: 'csId',
				flex: 0,
				width: 75,
			}, {
				text: '车皮类型',
				id:'GridcsType',
				sortable: true,
				dataIndex: 'csType',
				renderer:function(value){
                    if(value == 0){
                           return "K型车";
                    }else if(value==1){
                           return "H型车";
                    }else if(value==2){
                    	   return "其他";
                    }
             },
				width: 75,
			}, {
				text: '载重',
				sortable: true,
				dataIndex: 'csLoad',
				width: 75,
			}, {
				text: '自重',
				sortable: true,
				dataIndex: 'csDeadload',
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
	                                    var id = rec.get('csId');
	                                    Ext.Ajax.request({
	                                        url: '/XJManager/base/deleteWagon.do',
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
	                                    wStore.removeAt(rowIndex);
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
						text: '筛选',
						tooltip: 'search',
						iconCls: 'search',
						listeners: {
							'click': function() {
								searchFormx.getForm().reset();
								panelnew.show();
							}
						}
					}, {
						text: '添加',
						tooltip: 'add',
						iconCls: 'add',
						listeners: {
							'click': function() {
								 Ext.getCmp('formCsId').setReadOnly(false);
		                         proForm.show();
		                         c.add(proForm);
		                         proForm.getForm().reset();
		                         Ext.getCmp('typeId').setValue(0);
		                         proForm.getForm().url = '/XJManager/base/addWagon.do';
		                         c.show();
							}
						}
					}, '-', {
						text: '修改',
						tooltip: ' edit',
						iconCls: 'edit',
						listeners: {
							'click': function() {
								var record = wGrid.getSelectionModel().getSelection();
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
								Ext.getCmp('formCsId').setReadOnly(true);
		                        proForm.getForm().url = '/XJManager/base/updateWagon.do';
								wGrid.getSelectionModel().clearSelections();
								wGrid.getView().refresh();
							}

						}
					}, '-', {
						itemId: 'removeButton',
						text: '删除',
						tooltip: 'remove',
						iconCls: 'remove',
						listeners: {
		                    'click': function() {
		                        var record = wGrid.getSelectionModel().getSelection();
		                        if (record == undefined || record == '') {
		                            Ext.Msg.alert("错误", "请选择至少一条数据");
		                            return;
		                        } else {
		                            Ext.MessageBox.confirm("请确认", "确定删除吗？",
		                            function(button, text) {
		                                if (button == 'yes') {
		                                    var url = "/XJManager/base/deleteWagon.do";
		                                    var param = "";
		                                    for (var i = 0; i < record.length; i++) {
		                                        param = param + record[i].get("csId") + "-";
		                                    }
		                                    Ext.Ajax.request({
		                                        url: url,
		                                        params: {
		                                            'ids': param
		                                        },
		                                        method: 'POST',
		                                        success: function(response, options) {
		                                            Ext.MessageBox.alert('成功', '删除成功');
		                                        },
		                                        failure: function(response, options) {
		                                            Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
		                                        }
		                                    });
		                                    wStore.reload();
		                                }
		                            });
									
		                        }
		                    }
		                }
					}
				]
			}
		],

		//table边框的设定
		stripeRows: true,
		height: 320,
		width: 1200,
		frame: false,

		bbar: Ext.create('Ext.PagingToolbar', {
			pageSize: 10,
			store: wStore,
			displayInfo: true,
			plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		}),
	});
	//将table放入制定的div中
	wGrid.render('grid-example');
	//重新提交新的参数请求数据；
	wStore.load();
});

/***********************************************************************************************/
/***********************************************************************************************/
