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
	var sm = Ext.create('Ext.selection.CheckboxModel');
	var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
	var requiredimportant = '<span style="color:red;font-weight:bold" data-qtip="Required">***</span>';
	/********************************添加相关******************************/
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
		width: 500,
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
					xtype: 'datefield',
					fieldLabel: '日期',
					afterLabelTextTpl: required,
					width: 480,
					name: 'mId',
				}, {
					xtype: 'textfield',
					fieldLabel: '交班',
					afterLabelTextTpl: required,
					width: 480,
				}, {
					xtype: 'textfield',
					fieldLabel: '值班',
					afterLabelTextTpl: required,
					width: 480,
				}, {
					xtype: 'textarea',
					fieldLabel: '备注',
					width: 480,
				},

			],
		}, ],
	});
	////////////////////////////////////////////////////////
	var AddWin = new Ext.Window({
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
	/********************************添加相关结束******************************/

	// register model
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
			name: 'wDate',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'wTurner',
			type: 'string'
		}, {
			name: 'wOnwork',
			type: 'string'
		}, {
			name: 'ahUser',
			type: 'string'
		}, {
			name: 'ahDepartment',
			type: 'string'
		}, {
			name: 'ahSettime',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'wcState',
			type: 'byte'
		}]
	});
	//定义数据源将被引入到对应的列中
	var myData = [
		['9/1 12:00', 'xxx', 'xxx', 'xxx', 'xxx', '9/10 12:00', 1]

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
		title: '维护铁运值班记录',
		//引入仓库
		store: store,
		//引入选择框
		selModel: sm,
		//定义列
		columns: [{
				text: '日期',
				sortable: true,
				//格式化日期
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				dataIndex: 'wDate',
				width: 75,
			}, {
				text: '交班',
				sortable: true,
				/*renderer: Ext.util.Format.usMoney,*/
				dataIndex: 'wTurner',
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
				id: '',
				text: '值班',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'wOnwork',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '制定人',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahUser',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '制定单位',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahDepartment',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '制定日期',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahSettime',
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '状态',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'wcState',
				flex: 0,
				width: 75,
			},

			{
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
		dockedItems: [
			//各种按钮布局
			{
				xtype: 'toolbar',
				items: [{
					text: '添加',
					tooltip: 'add',
					iconCls: 'add',
					listeners: {
						click: function() {
							formAdd.form.reset();
							AddWin.add(formAdd);
							AddWin.show();

						}

					}
				},
				{
					text: '修改',
					iconCls: 'edit',
					listeners: {
						click: function() {
							var record = grid.getSelectionModel().getSelection();
							if(record == undefined || record == '') {
								Ext.Msg.alert('信息', '请选择一条数据');
								return;
							}
							if(record.length >= 2) {
								Ext.Msg.alert('信息', '只可以选择一条数据');
								return;
							}
							AddWin.add(formAdd);
							AddWin.show();
							formAdd.getForm().loadRecord(record[0]);
							Ext.getCmp('formpid').readOnly = true;
							//addContantForm.getForm().url = '/XJManager/base/updateProduct.do';
							grid.getSelectionModel().clearSelections();
							grid.getView().refresh();
						

						}

					}
				},
				{
					text: '删除',
					iconCls: 'remove',
					listeners: {
						click: function() {
							
							
						}

					}
				},
				{
					text: '确认',
					iconCls: 'ok',
					listeners: {
						click: function() {

						}

					}
				},
				{
					text: '刷新',
					iconCls: 'create',
					listeners: {
						click: function() {

						}

					}
				},
				{
					text: '打印',
					iconCls: 'print',
					listeners: {
						click: function() {

						}

					}
				},
				{
					text: '详细信息',
					iconCls: 'detailed',
					listeners: {
						click: function() {
							///////////////详情form展示/////////////////////////////
							var showForm = Ext.create('Ext.form.Panel', {
								region: '',
								plain: true,
								border: false,
								bodyPadding: false,
								width: 1000,
								layout: 'form',
								//height:100,
								url: '',
								fieldDefaults: {
									anchor: '100%'
								},

								items: [
									//////////////////////////////////////////////////////////////////////
									{
										layout: 'column',
										frame: true,
										items: [{
											xtype: 'displayfield',
											fieldLabel: '日期',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '交班',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '值班',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '状态',
											readOnly: true,
											value: '出卖方测试',
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '总车数',
											value: '北京市丰台区',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '总吨数',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '电煤总车数',
											value: '万达',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '电煤总吨数',
											readOnly: true,
											width: 300
										}],
									},
									//////////////////////////////////////////////////////////////////////

								],

							});
							///////////////车皮信息/////////////////////////////
							var gridchepi = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								//autoScroll: true,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
									id: 'sourceId',
									text: 'x',
									sortable: true,
									//与定义的类中的属性匹配
									dataIndex: 'cName',
									flex: 0,
									width: 75,
								}, {
									text: 'x',
									sortable: true,
									dataIndex: 'sourceName',
									width: 75,
								}, {
									text: 'x',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
								}, {
									text: 'x',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
								}, {
									text: 'x',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
								}, {
									text: 'x',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
								}, {
									text: 'x',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
								}, {
									text: 'x',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
								}, {
									text: 'x',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
								}, {
									text: 'x',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
								}, {
									text: 'x',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
								}, {
									text: 'x',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
									width: 200,
								}],
								stripeRows: true,
								height: '100%',
								width: 'auto',
								autoScroll: true,
								frame: false,
								//autoScroll: true,
								bbar: Ext.create('Ext.PagingToolbar', {
									pageSize: 5,
									store: store,
									displayInfo: true,
									plugins: Ext.create('Ext.ux.ProgressBarPager', {})
								}),

							});
							////////////////实际发车信息////////////////////////////////////////////
							var gridfache = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								selModel: sm,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
										id: '',
										text: '批次',
										sortable: true,
										//与定义的类中的属性匹配
										dataIndex: 'cName',
										flex: 0,
									}, {
										text: '发站',
										sortable: true,
										dataIndex: 'sourceName',
									}, {
										text: '到站',
										sortable: true,
										dataIndex: 'sourceName',
									}, {
										text: '收货单位',
										sortable: true,
										dataIndex: 'sourceCompanyid',
									}, {
										text: '结算单位',
										sortable: true,
										dataIndex: 'sourceCompanyid',
									}, {
										text: '矿别',
										sortable: true,
										dataIndex: 'sourceCompanyid',
									}, {
										text: '总车数',
										sortable: true,
										dataIndex: 'sourceCompanyid',
									}, {
										text: '总吨数',
										sortable: true,
										dataIndex: 'sourceCompanyid',
									}, {
										text: '局别',
										sortable: true,
										
										dataIndex: 'sourceCompanyid',
									},
									{
										text: '省别',
										sortable: true,
										
										dataIndex: 'sourceCompanyid',
									},
									{
										text: '煤种',
										sortable: true,
										
										dataIndex: 'sourceCompanyid',
									},
									{
										text: 'K型车车数',
										sortable: true,
										
										dataIndex: 'sourceCompanyid',
									},
									{
										text: '吨数',
										sortable: true,
										
										dataIndex: 'sourceCompanyid',
									},
									{
										text: '自备车车数',
										sortable: true,
										
										dataIndex: 'sourceCompanyid',
									},
									{
										text: '吨数',
										sortable: true,
										
										dataIndex: 'sourceCompanyid',
									},
									{
										text: '路用车车数',
										sortable: true,
										
										dataIndex: 'sourceCompanyid',
									},
									{
										text: '吨数',
										sortable: true,
										
										dataIndex: 'sourceCompanyid',
									},
									{
										text: '其它车数',
										sortable: true,
										
										dataIndex: 'sourceCompanyid',
									},
									{
										text: '吨数',
										sortable: true,
										
										dataIndex: 'sourceCompanyid',
									},
									{
										text: '核票标记',
										sortable: true,
										
										dataIndex: 'sourceCompanyid',
									},
									{
										text: '核票人',
										sortable: true,
										
										dataIndex: 'sourceCompanyid',
									},
									{
										text: '核票日期',
										sortable: true,
										
										dataIndex: 'sourceCompanyid',
									},
								],

								// 保存和取消按钮
								//dockedItems: [],

								//table边框的设定
								stripeRows: true,
								height: '100%',
								width: 2200,
								frame: false,
								autoScroll: true,
								bbar: Ext.create('Ext.PagingToolbar', {
									pageSize: 5,
									store: store,
									displayInfo: true,
									plugins: Ext.create('Ext.ux.ProgressBarPager', {})
								}),

							});
							//////////////////////////////////////////////////////////////
							Ext.History.init();
							////////////////////////////////////////////////////////////////  
							var tab = Ext.create('Ext.TabPanel', {
								id: 'main-tabs',
								height: 300,
								width: 1000,
								activeTab: 0,
								//autoScroll: true,
								defaults: {
									padding: 10
								},

								items: [{
									xtype: 'tabpanel',
									title: '实际发车信息',
									activeTab: 0,
									padding: 5,
									border: true,
									plain: true,
									//autoScroll: true,
									defaults: {
										padding: 10
									},
									items: [{
										title: '发车',
										autoScroll: true,
										items: [gridfache],
										//autoScroll: true,
									}],
									listeners: {
										tabchange: onTabChange
									}
								}, {
									xtype: 'tabpanel',
									title: '车皮信息',
									activeTab: 0,
									padding: 5,
									border: true,
									plain: true,
									defaults: {
										padding: 10
									},
									items: [{
										title: '车皮',
										items: [gridchepi],
									}],
									listeners: {
										tabchange: onTabChange
									}
								}],
								listeners: {
									tabchange: onTabChange,
									afterrender: onAfterRender
								}
							});
							//////////////////////////////////////////////////////////////      
							var tokenDelimiter = ':';

							function onTabChange(
								tabPanel, tab) {
								var tabs = [],
									ownerCt = tabPanel.ownerCt,
									oldToken, newToken;

								tabs.push(tab.id);
								tabs
									.push(tabPanel.id);

								while(ownerCt &&
									ownerCt
									.is('tabpanel')) {
									tabs
										.push(ownerCt.id);
									ownerCt = ownerCt.ownerCt;
								}

								newToken = tabs
									.reverse()
									.join(
										tokenDelimiter);

								oldToken = Ext.History
									.getToken();

								if(oldToken === null ||
									oldToken
									.search(newToken) === -1) {
									Ext.History
										.add(newToken);
								}
							}

							function onAfterRender() {
								Ext.History
									.on(
										'change',
										function(
											token) {
											var parts, tabPanel, length, i;

											if(token) {
												parts = token
													.split(tokenDelimiter);
												length = parts.length;

												// setActiveTab in all nested tabs
												for(i = 0; i < length - 1; i++) {
													Ext
														.getCmp(
															parts[i])
														.setActiveTab(
															Ext
															.getCmp(parts[i + 1]));
												}
											}
										});

								// This is the initial default state.  Necessary if you navigate starting from the
								// page without any existing history token params and go back to the start state.
								var activeTab1 = Ext
									.getCmp(
										'main-tabs')
									.getActiveTab(),
									activeTab2 = activeTab1
									.getActiveTab();

								onTabChange(
									activeTab1,
									activeTab2);
							}
							var win = Ext.create("Ext.window.Window", {
									/*title:'搜索', */
									closable: false,
									closeAction: 'hide',
									width: 1000,
									height: 500,
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
										id: 'xiangqing',
										region: 'north',
										title: '详细信息',
										items: [showForm],
										height: 130,
										dockedItems: [
											//各种按钮布局

											{
												xtype: 'toolbar',
												items: [{
													text: '概要信息',
													iconCls: 'detailed',
													handler: function() {
														win.removeAll();
														win.close();
													}
												}]
											}
										],

									}, {
										region: 'north',
										items: [tab],
										//width: 200,
										split: true,
										floatable: false,
										//autoScroll: true
									}]
								})
								.show();
						}

					}
				}
				
				]
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

