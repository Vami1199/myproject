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
	var searchFormpanel = Ext.create('Ext.form.Panel', {
		region: 'west',
		plain: true,
		border: 0,
		borderColor: 'red',
		bodyPadding: 1,
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
				fieldLabel: '编号',
			}, {
				xtype: 'textfield',
				fieldLabel: '年份',
			}, {
				xtype: 'textfield',
				fieldLabel: '制定单位',
			}, {
				xtype: 'textfield',
				fieldLabel: '制定人',
			}, {
				xtype: 'datefield',
				fieldLabel: '起始制定日期',
			}, {
				xtype: 'datefield',
				fieldLabel: '终止制定日期',
			}

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
				text: '保存'
			}, {
				minWidth: 80,
				text: '取消'
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
			height: 400,
			tools: [{
				type: 'pin'
			}],
			layout: {
				type: 'border',
				padding: 5
			},
			constrain: true,
			//模态窗体  
			modal: true,
			hidden: true,
			//模态窗体  
			plain: true,
			//滚动条设置  
			autoScroll: true,
			items: [{
					region: 'north',
					items: [searchFormpanel],
					width: 200,
					split: true,
					//是否可缩小
					floatable: false,
				},

			]
		})
		////////////////////////////////////////////////////////////////////
		// register model
		//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
			name: 'yId',
			type: 'string'
		}, {
			name: 'yYear',
			type: 'Integer'
		}, {
			name: 'yPlan',
			type: 'Integer'
		}, {
			name: 'yUser',
			type: 'string'
		}, {
			name: 'yDate',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'yDepartment',
			type: 'string'
		}, {
			name: 'yState',
			type: 'byte'
		}]
	});
	//定义数据源将被引入到对应的列中
	var myData = [
		['xxx', 1999, 999, 'xxx', '9/1 12:00', 'xxx', 1]

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
	//定义grid
	var grid = Ext.create('Ext.grid.Panel', {
		//grid 的标题
		title: '查询年度销售计划',
		//引入仓库
		store: store,
		//引入选择框
		selModel: sm,
		//定义列
		columns: [{
				id: '',
				text: '年销售计划编号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'yId',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				text: '年度',
				sortable: true,
				/*renderer: Ext.util.Format.usMoney,*/
				dataIndex: 'yYear',
				width: 75,
				//鼠标点击时出现下拉框选择编辑的内容
				editor: new Ext.form.field.ComboBox({
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: [
						['1991', '1991'],
						['1992', '1992'],
						['1993', '1993'],
						['1994', '1994'],
						['1995', '1995']
					],
					lazyRender: true,
					listClass: 'x-combo-list-small'
				})
			}, {
				text: '计划销量',
				sortable: true,
				dataIndex: 'yPlan',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '创建人',
				sortable: true,
				dataIndex: 'yUser',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '制定日期',
				sortable: true,
				//格式化日期
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				dataIndex: 'yDate',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '制定单位',
				sortable: true,
				dataIndex: 'yDepartment',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '状态',
				sortable: true,
				dataIndex: 'yState',
				width: 75,
				editor: {
					allowBlank: false
				}
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
						Ext.MessageBox.confirm(
							"请确认", "确定删除吗？",
							function(button, text) {
								if(button == 'yes') {
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
				}, {
					minWidth: 80,
					text: '取消'
				}]
			},
			//各种按钮布局
			{
				xtype: 'toolbar',
				items: [{
					text: '筛选',
					tooltip: '',
					iconCls: 'search',
					listeners: {
						'click': function() {
							panelnew.show();
						}
					}
				}, '-', {
					text: '审批意见',
					tooltip: '',
					iconCls: 'shenpiyijian',
					listeners: {
						'click': function() {
							////////////////////////////////////////////
							var winyj
								/////////////////////////////////////////////////////////
							var gridshenpi2 = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
									id: '',
									text: '创建人员',
									sortable: true,
									//与定义的类中的属性匹配
									dataIndex: 'scContractid',
									width: 180

									//鼠标点击时能够编辑
								}, {
									text: '创建日期',
									sortable: true,
									dataIndex: '',
									width: 180
								}, {
									text: '当前状态',
									sortable: true,
									dataIndex: 'sourceName',
									width: 180
								}, {
									text: '模板编号',
									sortable: true,
									dataIndex: 'sourceName',
									width: 180
								}, {
									text: '模板名称',
									sortable: true,
									dataIndex: 'sourceName',
									width: 200
								}, ],

								//table边框的设定
								stripeRows: true,
								height: 200,
								width: 940,
								frame: false,

								bbar: Ext.create('Ext.PagingToolbar', {
									pageSize: 10,
									store: store,
									displayInfo: true,
									plugins: Ext.create('Ext.ux.ProgressBarPager', {})
								}),

							});
							/////////////////////////////////////////////////////////
							var gridshenpi1 = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								title: '流程节点信息',
								autoScroll: true,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
									id: '',
									text: '层号',
									sortable: true,
									//与定义的类中的属性匹配
									dataIndex: 'scContractid',
									flex: 0,
									//鼠标点击时能够编辑
								}, {
									text: '序号',
									sortable: true,
									dataIndex: 'sourceName',
									//width: 290,
									//鼠标点击时能够编辑
								}, {
									text: '角色名称',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '角色所属机构',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '审批人',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '审批结果',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '审批日期',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '是否终节点',
									sortable: true,
									dataIndex: 'sourceName',
									width: 220
										//鼠标点击时能够编辑
								}, ],

								//table边框的设定
								stripeRows: true,
								height: 200,
								width: 940,
								frame: false,

								bbar: Ext.create('Ext.PagingToolbar', {
									pageSize: 10,
									store: store,
									displayInfo: true,
									plugins: Ext.create('Ext.ux.ProgressBarPager', {})
								}),

							});
							////////////////////////////////////////////////////////////
							////////////////////////////////////////////
							Ext.History.init();
							///////////////////////////////////////////
							winyj = Ext
								.create(
									"Ext.window.Window", {
										/*title:'搜索', */
										closable: true,
										closeAction: 'hide',
										autoScroll: true,
										width: 950,
										height: 480,
										tools: [{
											type: 'pin'
										}],
										layout: {
											type: 'border',
											padding: false
										},
										constrain: true,
										//模态窗体  
										modal: true,
										//模态窗体  
										plain: true,
										//滚动条设置  
										items: [{
											id: '',
											region: 'north',
											title: '',
											items: [gridshenpi2],
											height: 200,
											//autoScroll: true
										}, {
											region: 'north',
											items: [gridshenpi1],
											//width: 200,
											height: 400,
											split: true,
											floatable: false,
											//autoScroll: true
										}]
									})
								.show();

						}
					}
				}, '-', {
					text: '详细信息',
					tooltip: '',
					iconCls: 'detailed',
					listeners: {
						'click': function() {
							////////////////////////////////////////////
							var xqWin
								/////////////////////////////////////////////////////////
							var Formxq = Ext.create('Ext.form.Panel', {
								region: 'west',
								plain: true,
								border: false,
								bodyPadding: false,
								/*autoScroll: true,*/
								width: 1000,
								layout: 'form',
								//表单发送的到的action路径
								url: '',
								//默认设置
								fieldDefaults: {
									anchor: '100%'
								},
								//布局,vbox是竖排,hbox是横排

								items: [
									//////////////////////////////////////////////////////////////////////
									{
										layout: 'column',
										frame: true,
										items: [
										
										{
											xtype: 'displayfield',
											fieldLabel: '编号',
											value: 'xxx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '年份',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '计划销量',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '一月',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '二月',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '三月',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '四月',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '五月',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '六月',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '七月',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '八月',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '九月',
											readOnly: true,
											value: '出卖方测试',
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '十月',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '十一月',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '十二月',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定人',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定日期',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定单位',
											readOnly: true,
											width: 300
										}, {
											xtype: 'textarea',
											fieldLabel: '备注',
											disabled: true,
											readOnly: true,
											width: 850
										}],
									},
									//////////////////////////////////////////////////////////////////////

								],

							});
							/////////////////////////////////////////////////////////
							var gridcontantxq = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								title: '明细信息',
								selModel: sm,
								//autoScroll: true,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [
								{
									id: '',
									text: '年销售计划标识',
									sortable: true,
									//与定义的类中的属性匹配
									dataIndex: 'yYear',
									flex: 0,
									//鼠标点击时能够编辑
								},
								{
									id: '',
									text: '客户名称',
									sortable: true,
									//与定义的类中的属性匹配
									dataIndex: 'yYear',
									flex: 0,
									//鼠标点击时能够编辑
								}, {
									text: '客户类别',
									sortable: true,
									dataIndex: 'sourceName',
									//width: 290,
									//鼠标点击时能够编辑
								}, {
									text: '产品名称',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '运输方式',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '责任人类型',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '责任人',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '计划销量',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '一月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '二月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '三月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '四月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '五月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '六月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '七月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '八月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '九月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '十月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '十一月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '十二月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '备注',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}],

								// 保存和取消按钮
								dockedItems: [],

								//table边框的设定
								stripeRows: true,
								height: 275,
								width: 940,
								frame: false,

								bbar: Ext.create('Ext.PagingToolbar', {
									pageSize: 10,
									store: store,
									displayInfo: true,
									plugins: Ext.create('Ext.ux.ProgressBarPager', {})
								}),

							});
							////////////////////////////////////////////////////////////
							Ext.History.init();
							////////////////////////////////////////////////////////////////  

							var i = 1;
							xqWin = Ext
								.create(
									"Ext.window.Window", {
										/*title:'搜索', */
										closable: false,
										closeAction: 'hide',
										autoScroll: true,
										width: 950,
										height: 500,
										tools: [{
											type: 'pin'
										}],
										layout: {
											type: 'border',
											padding: false
										},
										constrain: true,
										//模态窗体  
										modal: true,
										//模态窗体  
										plain: true,
										//滚动条设置  
										items: [{
											id: 'xiangqingz',
											region: 'north',
											title: '详细信息',
											items: [Formxq],
											height: 130,
											dockedItems: [
												//各种按钮布局
												{
													xtype: 'toolbar',
													items: [{
															text: '更多信息',
															tooltip: '',
															iconCls: 'detailed',
															listeners: {
																'click': function() {
																	if(i == 1) {
																		Ext.getCmp('xiangqingz').setHeight(266);
																		i++;
																	} else {
																		Ext.getCmp('xiangqingz').setHeight(130);
																		i = 1;
																	}

																}
															}
														}, {
															text: '概要信息',
															iconCls: 'detailed',
															handler: function() {
																xqWin.removeAll();
																xqWin.close();
															}
														}, {
															text: '上一条',
															iconCls: 'foward',
														}, {
															text: '下一条',
															iconCls: 'next',
														}

													]
												}
											],

										}, {
											region: 'north',
											items: [gridcontantxq],
											//width: 200,
											layout: 'fit',
											height: 300,
											split: true,
											floatable: false,
											autoScroll: true
										}]
									})
								.show();

						}
					}
				}]
			}
		],

		//table边框的设定
		stripeRows: true,
		height: 320,
		width: 1200,
		frame: false,

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
		//快速添加列功能 
		tbar: [{
			text: '快速添加',
			handler: function() {
				// 将匹配的类加载到新建的行中
				var r = Ext.create('PMonthrequest', {
					mId: 'xxxx',
					mYear: '1991',
					mMonth: '01',
					mDate: '9/9 12:00',
					mFlag: 'xxx',
					mAdminid: 99,
					mUser: 'xx',
					mTrains: 88,
					mWeight: 'xx',
					createby: 'xxx',
					modifyby: 'xxx',
					createdate: '9/9 12:00',
					mRemark: 'xx',
					indoor: false
				});
				store.insert(0, r);
				cellEditing.startEditByPosition({
					row: 0,
					column: 0
				});
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