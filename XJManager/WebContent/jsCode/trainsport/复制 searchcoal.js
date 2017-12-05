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
	///////////////////////////////////////////////////////////////////////
	/******************************筛选相关开始**********************/
	/////////////////////////////////////////////////////
	var searchFormpanel = Ext.create('Ext.form.Panel', {
		region: 'west',
		plain: true,
		border: 0,
		borderColor: 'red',
		bodyPadding: 1,
		width: 390,

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
				fieldLabel: '发站',
			}, {
				xtype: 'datefield',
				fieldLabel: '发车起始日期',
			}, {
				xtype: 'datefield',
				fieldLabel: '发车截止截止日期',
			}, {
				xtype: 'textfield',
				fieldLabel: '记录表编号',
			}, {
				xtype: 'textfield',
				fieldLabel: '机车编号',
			}, {
				xtype: 'textfield',
				fieldLabel: '批次',
			}, {
				xtype: 'textfield',
				fieldLabel: '状态',
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
		///////////////////////////////////////////////////////
		/******************************筛选相关结束**********************/
		// register model
		//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
			name: 'ahTime',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'ahId',
			type: 'string'
		}, {
			name: 'ahNum',
			type: 'string'
		}, {
			name: 'ahStart',
			type: 'string'
		}, {
			name: 'ahReceivetime',
			type: 'string'
		}, {
			name: 'ahWagonnum',
			type: 'integer'
		}, {
			name: 'ahWeight',
			type: 'Long'
		}, {
			name: 'ahRoaduser',
			type: 'string'
		}, {
			name: 'ahDispatcher',
			type: 'string'
		}, {
			name: 'ahIsdepart',
			type: 'byte'
		}]
	});
	//定义数据源将被引入到对应的列中
	var myData = [
		['9/1 12:00', 'xxx', 'xxx', 'xxx', 'xxx', 99, 66666, 'xx', 'xxx', 0]

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
		title: '查询商品煤发运记录',
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
				dataIndex: 'ahTime',
				width: 75,
			}, {
				text: '记录表编号',
				sortable: true,
				/*renderer: Ext.util.Format.usMoney,*/
				dataIndex: 'ahId',
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
				text: '批次',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahNum',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '发站',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahStart',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '接通知时间',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahReceivetime',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '进矿时间',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahIntime',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '车皮数',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahWagonnum',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '总发运量',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahWeight',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '路矿办值班员',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahRoaduser',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '厂调度',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahDispatcher',
				flex: 0,
				width: 75,
			}, {
				text: '状态',
				sortable: true,
				dataIndex: 'ahIsdepart',
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
					text: '筛选',
					iconCls: 'search',
					listeners: {
						'click': function() {
							panelnew.show();
						}
					}
				}, {
					text: '打印',
					iconCls: 'print'
				}, '-', {
					text: '详细信息',
					iconCls: 'detailed',
					listeners: {
						click: function() { ////////////////////////////////////////////
							var win
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
											fieldLabel: '记录表编号',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '发站',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '批次',
											readOnly: true,
											value: '出卖方测试',
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '车皮数',
											value: '北京市丰台区万达广场',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '总发运量',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '路矿办值班',
											value: '万达',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '厂调度',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '销售部值班',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '接通知时间',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '进矿时间',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '开装时间',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '装完时间',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '通知车站时间',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '挂车时间',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '矿别',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '装车队',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '机车编号',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '煤质要求',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '煤质预计值',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '煤质化验值',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定人',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '指定单位',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定日期',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '状态',
											readOnly: true,
											width: 300
										}, {
											xtype: 'textarea',
											fieldLabel: '进矿说明',
											readOnly: true,
											disabled: true,
											width: 900
										}, {
											xtype: 'textarea',
											fieldLabel: '备注',
											readOnly: true,
											disabled: true,
											width: 900
										}, ],
									},
									//////////////////////////////////////////////////////////////////////

								],

							});
							///////////////大票信息/////////////////////////////
							var gridCP = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								//autoScroll: true,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
										id: 'sourceId',
										text: '序号',
										sortable: true,
										//与定义的类中的属性匹配
										dataIndex: 'cName',
										flex: 0,
										width: 75,
									}, {
										text: '装车日期',
										sortable: true,
										dataIndex: 'sourceName',
										width: 75,
									}, {
										text: '机车车号',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									}, {
										text: '发站',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									}, {
										text: '到站',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									}, {
										text: '结算单位',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									}, {
										text: '收货单位',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									}, {
										text: '产品名称',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									}, {
										text: '载重',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									}, {
										text: '自重',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									}, {
										text: '毛重',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									}, {
										text: '净重',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									}, {
										text: '超亏',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									}, {
										text: '称重时间',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									}, {
										text: '大票号码',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									},{
										text: '运费总额',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									},{
										text: '杂费总额',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									},{
										text: '合计金额',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									},{
										text: '计费重量',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									},{
										text: '计划号码或运输号码',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									},{
										text: '装车人',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									},{
										text: '经由',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									},{
										text: '运价里程',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									},{
										text: '保价金额',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									},{
										text: '托运人名称',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									},{
										text: '托运人地址',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									},{
										text: '发站承运人',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									},{
										text: '受理人',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									},{
										text: '制票人',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									},{
										text: '复核人',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									},{
										text: '验收人',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 75,
									},

								],
								// 保存和取消按钮
								dockedItems: [
									//各种按钮布局
									{
										xtype: 'toolbar',
										items: [{
												text: 'xx',
												tooltip: 'add',
												iconCls: 'add',
												listeners: {}

											}, {
												text: 'xx',
												tooltip: '',
												iconCls: 'edit',

												listeners: {
													click: function() {}
												}
											}, {

												text: 'xx',
												tooltip: '',
												iconCls: 'delete',

												listeners: {
													click: function() {

													}
												}

											}

										]
									}
								],

								//table边框的设定
								stripeRows: true,
								height: '100%',
								width: 2300,
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
							////////////////其它费用信息////////////////////////////////////////////
							var gridOther = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								selModel: sm,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
										id: '',
										text: '费用项名称',
										sortable: true,
										width: 225,
										//与定义的类中的属性匹配
										dataIndex: 'cName',
										flex: 0,
									}, {
										text: '费用金额',
										sortable: true,
										width: 225,
										dataIndex: 'sourceName',
									}, {
										text: '费用类型',
										sortable: true,
										width: 225,
										dataIndex: 'sourceName',
									}, 
									{
										text: '备注',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 260,
									},

								],

								// 保存和取消按钮
								//dockedItems: [],

								//table边框的设定
								stripeRows: true,
								height: '100%',
								width: 'auto',
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
									title: '车皮信息',
									activeTab: 0,
									padding: 5,
									border: true,
									plain: true,
									//autoScroll: true,
									defaults: {
										padding: 10
									},
									items: [{
										title: '车皮',
										autoScroll: true,
										items: [gridCP],
										//autoScroll: true,
									}],
									listeners: {
										tabchange: onTabChange
									}
								}, {
									xtype: 'tabpanel',
									title: '运杂费信息',
									activeTab: 0,
									padding: 5,
									border: true,
									plain: true,
									defaults: {
										padding: 10
									},
									items: [{
										title: '运杂费',
										items: [gridOther],
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
							var i = 1;
							win = Ext
								.create(
									"Ext.window.Window", {
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
											height: 200,
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
																	Ext.getCmp('xiangqing').setHeight(396);
																	i++;
																} else {
																	Ext.getCmp('xiangqing').setHeight(200);
																	i = 1;
																}

															}
														}
													}, {
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