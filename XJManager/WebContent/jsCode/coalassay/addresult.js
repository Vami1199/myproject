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

	var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
	/***********************详情修改开始********************************/
	var formEdit = Ext.create('Ext.form.Panel', {
		bodyStyle: {
			background: '#DFE9F6',
			padding: '5px',
			border: 1
		},

		region: 'west',
		plain: true,
		border: 0,
		bodyPadding: 0,
		autoScroll: true,
		width: 520,
		layout: 'form',
		//表单发送的到的action路径
		url: '',
		//默认设置
		fieldDefaults: {
			anchor: '100%'
		},
		//布局,vbox是竖排,hbox是横排

		items: [{
			layout: 'column',
			frame: true,
			items: [{
					xtype: 'textfield',
					fieldLabel: '化验项目',
					width: 490,
					name: 'yYear',
				}, {
					xtype: 'datefield',
					fieldLabel: '化验接样时间',
					afterLabelTextTpl: required,
					width: 490,
				}, {
					xtype: 'datefield',
					fieldLabel: '化验结束时间',
					afterLabelTextTpl: required,
					width: 490,
				}, {
					xtype: 'textfield',
					fieldLabel: '化验结果',
					width: 490,
				}, {
					xtype: 'textfield',
					fieldLabel: '化验员',
					width: 490,
				}

			],
		}, ],
	});
	var editWin = new Ext.Window({
		autoHight: true,
		modal: true,
		/*closeAction:hide,*/
		items: [], // 这里面放你的表单。 
		closeAction: 'close', //这里写成 'hide' 
		/***********************表单设计结束*********************/
		buttons: [{
			text: "保存",
			iconCls: "btn-save",
			handler: function() {}
		}, {
			text: "重置",
			iconCls: "reset",
			handler: function() {}
		}]
	});
	/***********************详情修改结束********************************/
	//////////////修改相关开始///////////////////////////////////////
	var formAdd = Ext.create('Ext.form.Panel', {
		bodyStyle: {
			background: '#DFE9F6',
			padding: '5px',
			border: 1
		},
		region: 'west',
		plain: true,
		border: 0,
		bodyPadding: 0,
		autoScroll: true,
		width: 750,
		layout: 'form',
		//表单发送的到的action路径
		url: '',
		//默认设置
		fieldDefaults: {
			anchor: '100%'
		},
		//布局,vbox是竖排,hbox是横排

		items: [{
			layout: 'column',
			frame: true,
			items: [{
				xtype: 'textfield',
				fieldLabel: '煤样编号',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'textfield',
				fieldLabel: '&nbsp&nbsp矿别',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'textfield',
				fieldLabel: '产品名称',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'textfield',
				fieldLabel: '&nbsp&nbsp批次',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'textfield',
				fieldLabel: '采样地',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'textfield',
				fieldLabel: '&nbsp&nbsp吨数',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'textfield',
				fieldLabel: '车数',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'textfield',
				fieldLabel: '&nbsp&nbsp含矸率（%）',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'textfield',
				fieldLabel: '用户名称',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'datefield',
				fieldLabel: '&nbsp&nbsp采样开始时间',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'datefield',
				fieldLabel: '采样结束时间',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'textfield',
				fieldLabel: '&nbsp&nbsp采样人',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'datefield',
				fieldLabel: '制样接样时间',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'datefield',
				fieldLabel: '&nbsp&nbsp制样结束时间',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'datefield',
				fieldLabel: '制样人',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'displayfield',
				fieldLabel: '',
				width: 720,
			}, {
				xtype: 'datefield',
				fieldLabel: '填化验单时间',
				afterLabelTextTpl: required,
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'textfield',
				fieldLabel: '&nbsp&nbsp填单人',
				width: 360,
				afterLabelTextTpl: required,
				name: 'yYear',
			}, {
				xtype: 'datefield',
				fieldLabel: '审核时间',
				width: 360,
				afterLabelTextTpl: required,
				name: 'yYear',
			}, {
				xtype: 'textfield',
				fieldLabel: '&nbsp&nbsp审核人',
				afterLabelTextTpl: required,
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'datefield',
				fieldLabel: '取（送）单时间',
				afterLabelTextTpl: required,
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'textfield',
				fieldLabel: '取（送）单人',
				afterLabelTextTpl: required,
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'textfield',
				fieldLabel: '制定人',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'datefield',
				fieldLabel: '&nbsp&nbsp制定日期',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'textarea',
				fieldLabel: '备注',
				width: 720,
				name: 'yYear',
			}],
		}, ],
	});
	var winAdd = new Ext.Window({

		autoHight: true,
		modal: true,
		/*closeAction:hide,*/
		items: [], // 这里面放你的表单。 
		closeAction: 'close', //这里写成 'hide' 
		/***********************表单设计结束*********************/
		buttons: [{
			text: "保存",
			iconCls: "btn-save",
			handler: function() {}
		}, {
			text: "重置",
			iconCls: "reset",
			handler: function() {}
		}]
	});
	///////////////修改相关结束//////////////////////////////////////////////////////
	// register model
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
			name: 'spId',
			type: 'string'
		}, {
			name: 'spSource',
			type: 'string'
		}, {
			name: 'spProduct',
			type: 'string'
		}, {
			name: 'spBatch',
			type: 'string'
		}, {
			name: 'spAddress',
			type: 'string'
		}, {
			name: 'spDepartment',
			type: 'string'
		}, {
			name: 'spClasses',
			type: 'byte'
		}, {
			name: 'spMain',
			type: 'string'
		}, {
			name: 'spReciever',
			type: 'string'
		}, {
			name: 'spCollecter',
			type: 'string'
		}, {
			name: 'spProducer',
			type: 'string'
		}, {
			name: 'spCstart',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'spCend',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'spPstart',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'spPend',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'spFlag',
			type: 'byte'
		}, {
			name: 'spState',
			type: 'byte'
		}]
	});
	//定义数据源将被引入到对应的列中
	var myData = [
		['xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 1, 'xxx', 'xxx', 'xxx', 'xxx', '9/1 12:00', '9/1 12:00', '9/1 12:00', '9/1 12:00', 1, 2],
		['xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 1, 'xxx', 'xxx', 'xxx', 'xxx', '9/1 12:00', '9/1 12:00', '9/1 12:00', '9/1 12:00', 1, 2]


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
	//定义选择框
	var sm = Ext.create('Ext.selection.CheckboxModel');
	//定义grid
	var grid = Ext.create('Ext.grid.Panel', {
		//grid 的标题
		title: '维护煤样化验结果 ',
		//引入仓库
		store: store,
		//引入选择框
		selModel: sm,
		//定义列
		columns: [{
				text: '煤样编号',
				sortable: true,
				flex: 0,
				width: 75,

			}, {
				text: '矿别',
				sortable: true,
				dataIndex: 'spSource',
				flex: 0,
				width: 75,
			}, {
				text: '产品名称',
				sortable: true,
				dataIndex: 'spProduct',
				flex: 0,
				width: 75,
			}, {
				text: '批次',
				sortable: true,
				dataIndex: 'spBatch',
				flex: 0,
				width: 75,
			}, {
				text: '采样地',
				sortable: true,
				dataIndex: 'spAddress',
				flex: 0,
				width: 75,
			}, {
				text: '生产单位',
				sortable: true,
				dataIndex: 'spDepartment',
				flex: 0,
				width: 75,
			}, {
				text: '班次',
				sortable: true,
				dataIndex: 'spClasses',
				flex: 0,
				width: 75,
			}, {
				text: '主采煤层',
				sortable: true,
				dataIndex: 'spMain',
				flex: 0,
				width: 75,
			}, {
				text: '收货单位',
				sortable: true,
				dataIndex: 'spReciever',
				flex: 0,
				width: 75,
			}, {
				text: '采样人',
				sortable: true,
				dataIndex: 'spCollecter',
				flex: 0,
				width: 75,
			}, {

				text: '制样人',
				sortable: true,
				dataIndex: 'spProducer',
				flex: 0,
				width: 75,
			}, {

				text: '采样开始时间',
				sortable: true,
				dataIndex: 'spCstart',
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				flex: 0,
				width: 75,
			}, {

				text: '采样结束时间',
				sortable: true,
				dataIndex: 'spCend',
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				flex: 0,
				width: 75,
			}, {

				text: '制样结束时间',
				sortable: true,
				dataIndex: 'spPend',
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				flex: 0,
				width: 75,
			}, {

				text: '煤样标记',
				sortable: true,
				dataIndex: 'spFlag',
				flex: 0,
				width: 75,
			}, {

				text: '状态',
				sortable: true,
				dataIndex: 'spState',
				flex: 0,
				width: 75,
			}, {
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
		dockedItems: [
			//各种按钮布局
			{
				xtype: 'toolbar',
				items: [{
					text: '修改',
					iconCls: 'edit',
					listeners: {
						'click': function() {
							var record = grid.getSelectionModel().getSelection();
							if(record == undefined || record == '') {
								Ext.Msg.alert('信息', '请选择一条数据');
								return;
							}
							if(record.length >= 2) {
								Ext.Msg.alert('信息', '只可以选择一条数据');
								return;
							}
							winAdd.add(formAdd);
							winAdd.show();
							formAdd.getForm().loadRecord(record[0]);
							Ext.getCmp('formpid').readOnly = true;
							//addContantForm.getForm().url = '/XJManager/base/updateProduct.do';
							grid.getSelectionModel().clearSelections();
							grid.getView().refresh();
						}

					}
				}, '-', {
					text: '确认',
					iconCls: 'ok'
				}, '-', {
					text: '详细信息',
					tooltip: 'detailed',
					iconCls: 'detailed',
					listeners: {
						'click': function() {
							////////////////////////////////////////////
							var xqWin;
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
										items: [{
											xtype: 'displayfield',
											fieldLabel: '煤样编号',
											value: 'xxx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '矿别',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '产品名称',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '批次',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '吨数',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '车数',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '采样地',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '生产单位',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '班次',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '主采煤层',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '含矸率（%）',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '收货单位',
											readOnly: true,
											value: '出卖方测试',
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '采样人',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '采样开始时间',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '采样结束时间',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制样人',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制样开始时间',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制样结束时间',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '填化验单时间',
											readOnly: true,
											width: 450
										}, {
											xtype: 'displayfield',
											fieldLabel: '填单人',
											readOnly: true,
											width: 450
										}, {
											xtype: 'displayfield',
											fieldLabel: '审核时间',
											readOnly: true,
											width: 450
										}, {
											xtype: 'displayfield',
											fieldLabel: '审核人',
											readOnly: true,
											width: 450
										}, {
											xtype: 'displayfield',
											fieldLabel: '取送单时间',
											readOnly: true,
											width: 450
										}, {
											xtype: 'displayfield',
											fieldLabel: '取送单人',
											readOnly: true,
											width: 450
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定人',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定日期',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定机构',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '状态',
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
							/////////详情grid////////////////////////////////////////////////
							var gridcontantxq = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								title: '煤样化验结果',
								selModel: sm,
								//autoScroll: true,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
									id: '',
									text: '化验项目',
									sortable: true,
									//与定义的类中的属性匹配
									dataIndex: 'yYear',
									flex: 0,
									//鼠标点击时能够编辑
								}, {
									text: '化验接样时间',
									sortable: true,
									dataIndex: 'sourceName',
									//width: 290,
									//鼠标点击时能够编辑
								}, {
									text: '化验结束时间',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '化验结果',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '化验员',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}],

								// 保存和取消按钮
								dockedItems: [
									//各种按钮布局
									{
										xtype: 'toolbar',
										items: [{
												text: '刷新',
												iconCls: 'add',
												listeners: {
													click: function() {

													}
												}
											}, {
												text: '修改',
												tooltip: ' 修改一条数据',
												iconCls: 'edit',
												listeners: {
													'click': function() {
														var record = gridcontantxq.getSelectionModel().getSelection();
														if(record == undefined || record == '') {
															Ext.Msg.alert('信息', '请选择一条数据');
															return;
														}
														if(record.length >= 2) {
															Ext.Msg.alert('信息', '只可以选择一条数据');
															return;
														}
														editWin.add(formEdit);
														editWin.show();
														formEdit.getForm().loadRecord(record[0]);
														//Ext.getCmp('formpid').readOnly = true;
														//formxqtj.getForm().url = '/XJManager/base/updateProduct.do';
														gridcontantxq.getSelectionModel().clearSelections();
														gridcontantxq.getView().refresh();
													}

												}
											}, {
												text: '批次修改',
												tooltip: '',
												iconCls: 'edit',
												listeners: {
													click: function() {
														var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
															clicksToMoveEditor: 1,
															autoCancel: false
														});
														var gridpcxg = Ext.create('Ext.grid.Panel', {
															frame: true,
															store: store,
															columnLines: true,
															columns: [
															{
																text: '化验项目' + required,
																width: 150,
																sortable: true,
																renderer: function() {
																	return '挥发份Vdaf（%）';
																},
																dataIndex: 'price',
																editor: {
																	xtype: 'textfield',
																	value: '挥发份Vdaf（%）'
																}
															}, {
																text: '化验接样时间' + required,
																width: 150,
																sortable: true,
																renderer: function() {
																	return '2017-11-25';
																},
																dataIndex: 'price',
																editor: {
																	xtype: 'datefield',
																	value: '2017-11-25'
																}
															},{
																text: '化验结束时间' + required,
																width: 150,
																sortable: true,
																renderer: function() {
																	return '2017-11-25';
																},
																dataIndex: 'price',
																editor: {
																	xtype: 'datefield',
																	value: '2017-11-25'
																}
															},{
																text: '化验结果',
																width: 150,
																sortable: true,
																renderer: function() {
																	return '';
																},
																dataIndex: 'price',
																editor: {
																	xtype: 'textfield',
																	value: ''
																}
															},{
																text: '化验员',
																width: 150,
																sortable: true,
																renderer: function() {
																	return '';
																},
																dataIndex: 'price',
																editor: {
																	xtype: 'textfield',
																	value: ''
																}
															},
															],
															selModel: sm,
															height: 300,
															width: 800,

															title: '',
															autoScroll: true,
															viewConfig: {
																stripeRows: true
															},
															bbar: Ext.create('Ext.PagingToolbar', {
																pageSize: 10,
																store: store,
																displayInfo: true,
																plugins: Ext.create('Ext.ux.ProgressBarPager', {})
															}),
															plugins: [rowEditing]
														});
														/////////////////////////////////
														Ext.create("Ext.window.Window", {
															title: '搜索',
															closable: true,
															closeAction: 'hide',
															width: 800,
															minWidth: 350,
															height: 420,
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
															//模态窗体  
															plain: true,
															//滚动条设置  
															autoScroll: true,
															items: [{
																region: 'center',
																title: '搜索条件',
																items: [gridpcxg],
																width: 700,
																split: true,
																//是否可缩小
																//collapsible: true,
																floatable: false
															}]
														}).show();
													}

												}

											}, {
												text: '删除',
												tooltip: '',
												iconCls: 'remove',
												listeners: {
													click: function() {

													}

												}

											},

										]
									}
								],

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
																		Ext.getCmp('xiangqingz').setHeight(375);
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
		width: 'auto',
		frame: false,

		bbar: Ext.create('Ext.PagingToolbar', {
			pageSize: 10,
			store: store,
			displayInfo: true,
			plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		}),

	});

	//将table放入制定的div中
	grid.render('grid-example');
	//重新提交新的参数请求数据；
	store.load();
});