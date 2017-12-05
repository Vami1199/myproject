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
	var requiredimportant = '<span style="color:red;font-weight:bold" data-qtip="Required">***</span>';
	var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';

	// register model
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
				name: 'scYear',
				type: 'date',
				dateFormat: 'n/j h:i'
			}, {
				name: 'scContractid',
				type: 'string'
			}, {
				name: 'scMastercontractid',
				type: 'integer'
			}, {
				name: 'scCustomername',
				type: 'string'
			}, {
				name: 'scContractamount',
				type: 'long'
			}, {
				name: '实发总量',
				type: 'long'
			}, {
				name: 'scCustomerdustry',
				type: 'integer'
			}, {
				name: 'scShippingtype',
				type: 'integer'
			}, {
				name: '是否变更',
				type: 'integer'
			}, {
				name: 'scContractmark',
				type: 'integer'
			}, {
				name: 'scOperator',
				type: 'string'
			}, {
				name: 'scStatus',
				type: 'integer'
			}

		]
	});
	//定义数据源将被引入到对应的列中
	var myData = [
		['9/1 12:00', 'xxx', 66, 'xxx', 99999, 888888, 1, 0, 1, 0, 'xxx', 1]

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
		title: '审批销售合同',
		//引入仓库
		store: store,
		//引入选择框
		selModel: sm,
		//定义列
		columns: [{
				text: '合同年份',
				sortable: true,
				//格式化日期
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				dataIndex: 'scYear',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '合同编号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'scContractid',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				text: '合同类别',
				sortable: true,
				dataIndex: 'scMastercontractid',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '客户名称',
				sortable: true,
				dataIndex: 'scCustomername',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '合同总量',
				sortable: true,
				dataIndex: 'scContractamount',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '实发总量',
				sortable: true,
				dataIndex: '实发总量',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '所属行业',
				sortable: true,
				dataIndex: 'scCustomerdustry',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '运输方式',
				sortable: true,
				dataIndex: 'scShippingtype',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '是否变更',
				sortable: true,
				dataIndex: '是否变更',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '合同标记',
				sortable: true,
				dataIndex: 'scContractmark',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '经办人',
				sortable: true,
				dataIndex: 'scOperator',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '状态',
				sortable: true,
				dataIndex: 'scStatus',
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
		dockedItems: [
			//各种按钮布局
			{
				xtype: 'toolbar',
				items: [{
					text: '详细信息',
					tooltip: 'detailed',
					iconCls: 'detailed',
					listeners: {
						click: function() { ////////////////////////////////////////////
							var shenpiForm = Ext.create('Ext.form.Panel', {
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
										width:50,
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
							var searchForm1 = Ext.create('Ext.form.Panel', {
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
											fieldLabel: '合同年份',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '合同编号',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '合同类型',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '客户名称',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '所属行业',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '客户所属部别',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '运输方式',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '合同总量',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '经办人',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方信息',
											afterLabelTextTpl: requiredimportant,
											value: '',
											readOnly: true,
											width: 900
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方人代表',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方单位地址',
											readOnly: true,
											value: '出卖方测试',
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方传真',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方电话',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方账号',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方开户银行',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方邮编',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方税号',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方电报挂号',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方信息',
											afterLabelTextTpl: requiredimportant,
											value: '',
											readOnly: true,
											width: 900
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方法人代表',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方单位地址',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方电话',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方委托代理人',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方开户行',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方传真',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买方邮编',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方账号',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方税号',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方电报挂号',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '其他信息',
											afterLabelTextTpl: requiredimportant,
											value: '',
											readOnly: true,
											width: 900
										}, {
											xtype: 'displayfield',
											fieldLabel: '合同有效起始时间',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '合同有效截止时间',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '约定时间',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '签定时间',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '本期内最少发货量',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '签定地点',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '是否以质论价',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '交提货方式',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '执行单位',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '运费负担',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '煤炭单价',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '数量质量验收标准及方法',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '结算方式',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '价格说明',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '计量方法',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '结算说明',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '公证意见',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '公证说明',
											readOnly: true,
											width: 300
										}, {
											xtype: 'textfield',
											fieldLabel: '纠纷处理',
											value: '测试',
											readOnly: true,
											width: 450
										}, {
											xtype: 'textfield',
											fieldLabel: '&nbsp;&nbsp;违约责任',
											readOnly: true,
											width: 450
										}, {
											xtype: 'displayfield',
											fieldLabel: '实发总量',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方委托代理人',
											readOnly: true,
											width: 300
										}, {
											xtype: 'textfield',
											fieldLabel: '出卖方委托代理人',
											readOnly: true,
											width: 900
										}, {
											xtype: 'displayfield',
											fieldLabel: '是否变更',
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
											readOnly: true,
											width: 900
										}, ],
									},
									//////////////////////////////////////////////////////////////////////

								],

							});
							/////////////////////////////////////////////////////////
							var gridcontantmx = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								autoScroll: true,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
										id: 'sourceId',
										text: '收货单位名称',
										sortable: true,
										//与定义的类中的属性匹配
										dataIndex: 'scContractid',
										flex: 0,
										//鼠标点击时能够编辑
									}, {
										text: '发站',
										sortable: true,
										dataIndex: 'sourceName',
										//width: 290,
										//鼠标点击时能够编辑
									}, {
										text: '到站',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '运输方式',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '产品名称',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '质量标准',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '产品名称',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '质量标准',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '单价',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '计量单位',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '总量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '指标类型',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '指标名称',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '1月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '2月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '3月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '4月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '5月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '6月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '7月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '8月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '9月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '10月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '11月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '12月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									},

									{
										text: '备注',
										sortable: true,
										dataIndex: 'sourceCompanyid',
									}

								],

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
							var win = Ext.create("Ext.window.Window", {
								closable: false,
								closeAction: 'close',
								autoScroll: true,
								width: 950,
								height: 550,
								items: [{
									id: 'xiangqing',
									region: 'north',
									title: '详细信息',
									items: [searchForm1],
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
																Ext.getCmp('xiangqing').setHeight(710);
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
														win.removeAll();
														win.close();
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
									items: [gridcontantmx],
									//width: 200,
									layout: 'fit',
									height: 300,
									split: true,
									floatable: false,
									autoScroll: true
								}, {

									region: 'north',
									title: '',
									items: [shenpiForm],
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
					text: '审批',
					tooltip: '',
					iconCls: 'songshen',
					listeners:{
						
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
										width:50,
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
											fieldLabel: '合同年份',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '合同编号',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '合同类型',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '客户名称',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '所属行业',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '客户所属部别',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '运输方式',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '合同总量',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '经办人',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方信息',
											afterLabelTextTpl: requiredimportant,
											value: '',
											readOnly: true,
											width: 900
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方人代表',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方单位地址',
											readOnly: true,
											value: '出卖方测试',
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方传真',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方电话',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方账号',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方开户银行',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方邮编',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方税号',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方电报挂号',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方信息',
											afterLabelTextTpl: requiredimportant,
											value: '',
											readOnly: true,
											width: 900
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方法人代表',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方单位地址',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方电话',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方委托代理人',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方开户行',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方传真',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买方邮编',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方账号',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方税号',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '买受方电报挂号',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '其他信息',
											afterLabelTextTpl: requiredimportant,
											value: '',
											readOnly: true,
											width: 900
										}, {
											xtype: 'displayfield',
											fieldLabel: '合同有效起始时间',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '合同有效截止时间',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '约定时间',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '签定时间',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '本期内最少发货量',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '签定地点',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '是否以质论价',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '交提货方式',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '执行单位',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '运费负担',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '煤炭单价',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '数量质量验收标准及方法',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '结算方式',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '价格说明',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '计量方法',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '结算说明',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '公证意见',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '公证说明',
											readOnly: true,
											width: 300
										}, {
											xtype: 'textfield',
											fieldLabel: '纠纷处理',
											value: '测试',
											readOnly: true,
											width: 450
										}, {
											xtype: 'textfield',
											fieldLabel: '&nbsp;&nbsp;违约责任',
											readOnly: true,
											width: 450
										}, {
											xtype: 'displayfield',
											fieldLabel: '实发总量',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '出卖方委托代理人',
											readOnly: true,
											width: 300
										}, {
											xtype: 'textfield',
											fieldLabel: '出卖方委托代理人',
											readOnly: true,
											width: 900
										}, {
											xtype: 'displayfield',
											fieldLabel: '是否变更',
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
											readOnly: true,
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
										text: '收货单位名称',
										sortable: true,
										//与定义的类中的属性匹配
										dataIndex: 'scContractid',
										flex: 0,
										//鼠标点击时能够编辑
									}, {
										text: '发站',
										sortable: true,
										dataIndex: 'sourceName',
										//width: 290,
										//鼠标点击时能够编辑
									}, {
										text: '到站',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '运输方式',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '产品名称',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '质量标准',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '产品名称',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '质量标准',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '单价',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '计量单位',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '总量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '指标类型',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '指标名称',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '1月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '2月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '3月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '4月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '5月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '6月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '7月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '8月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '9月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '10月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '11月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '12月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									},

									{
										text: '备注',
										sortable: true,
										dataIndex: 'sourceCompanyid',
									}

								],

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
																Ext.getCmp('xiangqing').setHeight(710);
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

						click: function() { ////////////////////////////////////////////
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
									width: 180
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
							// Needed if you want to handle history for multiple components 												in the same page.
							// Should be something that won't be in component ids.
							////////////////////////////////////////////////////////////
							////////////////////////////////////////////////////////////////  
							var tabshenpi = Ext
								.create(
									'Ext.TabPanel', {
										id: '',
										height: 400,
										//width: 900,
										activeTab: 0,
										defaults: {
											padding: 10
										},

										items: [{
												xtype: 'tabpanel',
												title: '流程节点信息',
												activeTab: 0,
												padding: 5,
												autoScroll: true,
												border: true,
												plain: true,
												defaults: {
													padding: 10
												},
												items: [{
													title: '信息',
													//autoScroll: true,
													items: [gridshenpi1],
												}],

											},

										],

									});
							//////////////////////////////////////////////////////////////      

							winyj = Ext.create(
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
											items: [tabshenpi],
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
					text: '查看附件',
					tooltip: '',
					iconCls: 'edit',
					listeners: {

						click: function() { ////////////////////////////////////////////
							var win
								/////////////////////////////////////////////////////////
							var gridshenpi2 = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
										id: '',
										text: '文件名称',
										sortable: true,
										//与定义的类中的属性匹配
										dataIndex: 'scContractid',
										width: 370
									}, {
										text: '下载',
										xtype: 'actioncolumn',
										title: '下载',
										width: 330,
										sortable: false,
										items: [{
											icon: '../../common/shared/icons/fam/down.gif',
											tooltip: '下载',
											handler: function(grid, rowIndex, colIndex) {}
										}]

									}

								],

								//table边框的设定
								stripeRows: true,
								height: 200,
								width: 700,
								frame: false,

								bbar: Ext.create('Ext.PagingToolbar', {
									pageSize: 10,
									store: store,
									displayInfo: true,
									plugins: Ext.create('Ext.ux.ProgressBarPager', {})
								}),

							});
							////////////////////////////////////////////
							Ext.History.init();
							win = Ext
								.create(
									"Ext.window.Window", {
										/*title:'搜索', */
										closable: true,
										closeAction: 'hide',
										//autoScroll: true,
										width: 720,
										height: 280,
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
											height: 220,
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