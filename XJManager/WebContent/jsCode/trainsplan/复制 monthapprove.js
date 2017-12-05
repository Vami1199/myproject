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
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
				name: 'mId',
				type: 'string'
			}, {
				name: 'mYear',
				type: 'string'
			}, {
				name: 'mMonth',
				type: 'string'
			}, {
				name: 'mDate',
				type: 'date',
				dateFormat: 'n/j h:i'
			}, {
				name: 'mFlag',
				type: 'byte'
			}, {
				name: 'mAdminid',
				type: 'integer'
			}, {
				name: 'mUser',
				type: 'string'
			}, {
				name: 'mTrains',
				type: 'Integer'
			}, {
				name: 'mWeight',
				type: 'long'
			}, {
				name: 'createby',
				type: 'string'
			}, {
				name: 'modifyby',
				type: 'string'
			}, {
				name: 'createdate',
				type: 'date',
				dateFormat: 'n/j h:i'
			}, {
				name: 'mRemark',
				type: 'string'
			}

		]
	});
	//定义数据源将被引入到对应的列中
	var myData = [
		['xxx', '1991', 'xxx', '9/1 12:00', 'xxx', 66, 'xx', 66, 'xx', 'xxx', 'xxx', '9/10 12:00', 'xxx']

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
		title: '审批月度请车计划',
		//引入仓库
		store: store,
		//引入选择框
		selModel: sm,
		//定义列
		columns: [{
				id: '',
				text: '计划编号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'mId',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
			}, {
				text: '年份',
				sortable: true,
				/*renderer: Ext.util.Format.usMoney,*/
				dataIndex: 'mYear',
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
				text: '月份',
				sortable: true,
				dataIndex: 'mMonth',
				width: 75,
			}, {
				text: '申请日期',
				sortable: true,
				//格式化日期
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				dataIndex: 'mDate',
				width: 75,
			}, {
				text: '计划标志',
				sortable: true,
				dataIndex: 'mFlag',
				width: 75,
			}, {
				text: '单位名称',
				sortable: true,
				dataIndex: 'mAdminid',
				width: 75,
			}, {
				text: '铁路局',
				sortable: true,
				dataIndex: 'mUser',
				width: 75,
			}, {
				text: '申请车数',
				sortable: true,
				dataIndex: 'mTrains',
				width: 75,
			}, {
				text: '申请吨数',
				sortable: true,
				dataIndex: 'mWeight',
				width: 75,
			}, {
				text: '计划员',
				sortable: true,
				dataIndex: 'createby',
				width: 75,
			}, {
				text: '制定人',
				sortable: true,
				dataIndex: 'modifyby',
				width: 75,
			}, {
				text: '制定日期',
				sortable: true,
				dataIndex: 'createdate',
				width: 75,
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
			}, {
				text: '制定单位',
				sortable: true,
				dataIndex: 'mRemark',
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
					text: '审批',
					tooltip: 'submit for censorship',
					iconCls: 'songshen',
					listeners: {

						click: function() { ////////////////////////////////////////////
							var shenpi = Ext.create('Ext.form.Panel', {
								region: 'west',
								plain: true,
								border: 0,
								borderColor: 'red',
								bodyPadding: 1,
								width: 250,

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
										xtype: 'combo',
										store: Ext.create('Ext.data.ArrayStore', {
											fields: ['coal'],
											data: [
												['是'],
												['否'],
												['其他']
											]
										}),
										name: '',
										hiddenName: 'id', // 提交到后台的input的name ，对应下面store里的''id，必须要填
										emptyText: '-----请选择-----',
										//map中的键
										valueField: '',
										//map中的值 
										displayField: 'coal',
										//选中下拉框后再点击面板就会多出一行,不知道有卵子用
										/*plugins: [ Ext.ux.FieldReplicator ],*/
										fieldLabel: '是否通过',
										width: 50,
										queryMode: 'local', //数据模式,local代表本地数据模式
										//tab键是否可以选择当前突出项
										selectOnTab: false,
										/****下拉框不可编辑*****/
										typeAhead: false,
										editable: false,
										/****下拉框不可编辑*****/
										onReplicate: function() {
											this.getStore().clearFilter();
										}
									}, {
										xtype: 'textarea',
										fieldLabel: '审批意见',
									},

								],
								dockedItems: [{}]

							});
							/////////////////////////////////////////////////////////
							var searchshenpi = Ext.create('Ext.form.Panel', {
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
											fieldLabel: '计划编号',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '年份',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '月份',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '申请日期',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '计划标志',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '单位名称',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '铁路局',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '申请车数',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '申请吨数',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定人',
											value: '测试',
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
											value: '出卖方测试',
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '计划员',
											value: '',
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
											width: 900
										}, ],
									},
									//////////////////////////////////////////////////////////////////////

								],

							});
							/////////////////////////////////////////////////////////
							var gridshenpi = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								autoScroll: true,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
									id: 'sourceId',
									text: '发站',
									sortable: true,
									//与定义的类中的属性匹配
									dataIndex: 'scContractid',
									flex: 0,
									//鼠标点击时能够编辑
								}, {
									text: '到站',
									sortable: true,
									dataIndex: 'sourceName',
									//width: 290,
									//鼠标点击时能够编辑
								}, {
									text: '到站局别',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '省份',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '收货单位',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '结算单位',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '申请车数',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '所属行业',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '运输起始日期',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '运输截止日期',
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
								height: 200,
								width: 900,
								frame: false,

								bbar: Ext.create('Ext.PagingToolbar', {
									pageSize: 10,
									store: store,
									displayInfo: true,
									plugins: Ext.create('Ext.ux.ProgressBarPager', {})
								}),

							});
							////////////////////////////////////////////
							var i = 1;
							var shenpiwin = Ext.create("Ext.window.Window", {
								closable: false,
								closeAction: 'close',
								autoScroll: true,
								width: 950,
								height: 550,
								items: [{
									id: 'xiangqing',
									region: 'north',
									title: '详细信息',
									items: [searchshenpi],
									height: 130,
									dockedItems: [
										//各种按钮布局
										{
											xtype: 'toolbar',
											items: [{

													text: '确定',
													iconCls: 'ok',

												}, {
													text: '更多信息',
													tooltip: '',
													iconCls: 'detailed',
													listeners: {
														'click': function() {
															if(i == 1) {
																Ext.getCmp('xiangqing').setHeight(240);
																i++;
															} else {
																Ext.getCmp('xiangqing').setHeight(130);
																i = 1;
															}

														}
													}
												}, {
													text: '概要信息',
													iconCls: 'detailed',
													handler: function() {
														shenpiwin.removeAll();
														shenpiwin.close();
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
									title: '销售合同明细',
									items: [gridshenpi],
									//width: 200,
									layout: 'fit',
									height: 300,
									split: true,
									floatable: false,
									autoScroll: true
								}, {

									region: 'north',
									title: '',
									items: [shenpi],
									width: 920,
									layout: 'fit',
									height: 150,
									split: true,
									floatable: false,
									autoScroll: true
								}]
							}).show();
						}

					}
				}, '-', {
					text: '审批意见',
					tooltip: 'Approval opinions',
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
					tooltip: 'detailed',
					iconCls: 'detailed',
					listeners: {

						click: function() { ////////////////////////////////////////////
							var shenpi = Ext.create('Ext.form.Panel', {
								region: 'west',
								plain: true,
								border: 0,
								borderColor: 'red',
								bodyPadding: 1,
								width: 250,

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
										xtype: 'combo',
										store: Ext.create('Ext.data.ArrayStore', {
											fields: ['coal'],
											data: [
												['是'],
												['否'],
												['其他']
											]
										}),
										name: '',
										hiddenName: 'id', // 提交到后台的input的name ，对应下面store里的''id，必须要填
										emptyText: '-----请选择-----',
										//map中的键
										valueField: '',
										//map中的值 
										displayField: 'coal',
										//选中下拉框后再点击面板就会多出一行,不知道有卵子用
										/*plugins: [ Ext.ux.FieldReplicator ],*/
										fieldLabel: '是否通过',
										width: 50,
										queryMode: 'local', //数据模式,local代表本地数据模式
										//tab键是否可以选择当前突出项
										selectOnTab: false,
										/****下拉框不可编辑*****/
										typeAhead: false,
										editable: false,
										/****下拉框不可编辑*****/
										onReplicate: function() {
											this.getStore().clearFilter();
										}
									}, {
										xtype: 'textarea',
										fieldLabel: '审批意见',
									},

								],
								dockedItems: [{}]

							});
							/////////////////////////////////////////////////////////
							var searchshenpi = Ext.create('Ext.form.Panel', {
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
											fieldLabel: '计划编号',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '年份',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '月份',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '申请日期',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '计划标志',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '单位名称',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '铁路局',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '申请车数',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '申请吨数',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定人',
											value: '测试',
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
											value: '出卖方测试',
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '计划员',
											value: '',
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
											width: 900
										}, ],
									},
									//////////////////////////////////////////////////////////////////////

								],

							});
							/////////////////////////////////////////////////////////
							var gridshenpi = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								autoScroll: true,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
									id: 'sourceId',
									text: '发站',
									sortable: true,
									//与定义的类中的属性匹配
									dataIndex: 'scContractid',
									flex: 0,
									//鼠标点击时能够编辑
								}, {
									text: '到站',
									sortable: true,
									dataIndex: 'sourceName',
									//width: 290,
									//鼠标点击时能够编辑
								}, {
									text: '到站局别',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '省份',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '收货单位',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '结算单位',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '申请车数',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '所属行业',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '运输起始日期',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '运输截止日期',
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
								height: 200,
								width: 900,
								frame: false,

								bbar: Ext.create('Ext.PagingToolbar', {
									pageSize: 10,
									store: store,
									displayInfo: true,
									plugins: Ext.create('Ext.ux.ProgressBarPager', {})
								}),

							});
							////////////////////////////////////////////
							var i = 1;
							var shenpiwin = Ext.create("Ext.window.Window", {
								closable: false,
								closeAction: 'close',
								autoScroll: true,
								width: 950,
								height: 550,
								items: [{
									id: 'xiangqing',
									region: 'north',
									title: '详细信息',
									items: [searchshenpi],
									height: 130,
									dockedItems: [
										//各种按钮布局
										{
											xtype: 'toolbar',
											items: [{

													text: '确定',
													iconCls: 'ok',

												}, {
													text: '更多信息',
													tooltip: '',
													iconCls: 'detailed',
													listeners: {
														'click': function() {
															if(i == 1) {
																Ext.getCmp('xiangqing').setHeight(240);
																i++;
															} else {
																Ext.getCmp('xiangqing').setHeight(130);
																i = 1;
															}

														}
													}
												}, {
													text: '概要信息',
													iconCls: 'detailed',
													handler: function() {
														shenpiwin.removeAll();
														shenpiwin.close();
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
									title: '销售合同明细',
									items: [gridshenpi],
									//width: 200,
									layout: 'fit',
									height: 300,
									split: true,
									floatable: false,
									autoScroll: true
								}, {

									region: 'north',
									title: '',
									items: [shenpi],
									width: 920,
									layout: 'fit',
									height: 150,
									split: true,
									floatable: false,
									autoScroll: true
								}]
							}).show();
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