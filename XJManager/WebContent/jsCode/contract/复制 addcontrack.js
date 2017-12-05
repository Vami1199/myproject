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
	Ext.define('addcompany', {
				extend: 'Ext.data.Model',
				idProperty: '',
				fields: [{
						name: 'coId',
						type: 'string'
					},
					{
						name: 'coShort',
						type: 'string'
					},
					{
						name: 'coName',
						type: 'string'
					},
					{
						name: 'coPhone',
						type: 'string'
					},
					{
						name: 'coPostcode',
						type: 'integer'
					},
					{
						name: 'coFax',
						type: 'string'
					},
					{
						name: 'coLeader',
						type: 'string'
					},
					{
						name: 'coAddress',
						type: 'string'
					},
					{
						name: 'coLinkman',
						type: 'string'
					}
				]
			});
	Ext.define('Customer', {
				extend: 'Ext.data.Model',
				idProperty: '',
				fields: [{
						name: 'customer.cId',
						type: 'Integer'
					}, {
						name: 'provinceName',
						type: 'String'
					},
					{
						name: 'customer.cName',
						type: 'string'
					},
					{
						name: 'customer.cShort',
						type: 'string'
					},
					{
						name: 'customer.cIselectricity',
						type: 'Byte'
					},
					{
						name: 'customer.cCompanytype',
						type: 'Byte '
					},
					{
						name: 'customer.cType',
						type: 'Byte'
					},
					{
						name: 'customer.cIid',
						type: 'Integer'
					},
					{
						name: 'customer.cDepartment',
						type: 'Byte'
					},
					{
						name: 'customer.cIdentifying',
						type: 'Byte'
					},
					{
						name: 'customer.cState',
						type: 'Byte'
					},
					{
						name: 'customer.cScope',
						type: 'String'
					},
					{
						name: 'customer.cLegal',
						type: 'String'
					},
					{
						name: 'customer.cConsignor',
						type: 'String'
					},
					{
						name: 'customer.cBank',
						type: 'String'
					},
					{
						name: 'customer.cAccount',
						type: 'String'
					},
					{
						name: 'customer.cCredit',
						type: 'byte'
					},
					{
						name: 'customer.cLimit',
						type: 'BigDecimal'
					},
					{
						name: 'customer.cRegisteredcapital',
						type: 'BigDecimal'
					},
					{
						name: 'customer.cTaxnumber',
						type: 'String'
					},
					{
						name: 'customer.cSid',
						type: 'String'
					},
					{
						name: 'customer.cPostcode',
						type: 'String'
					},
					{
						name: 'customer.cLinkman',
						type: 'String'
					},
					{
						name: 'customer.cPhone',
						type: 'String'
					},
					{
						name: 'customer.cFax',
						type: 'String'
					},
					{
						name: 'customer.cHomepage',
						type: 'String'
					},
					{
						name: 'customer.cEmail',
						type: 'String'
					},
					{
						name: 'customer.cCountry',
						type: 'String'
					},
					{
						name: 'customer.cProvince',
						type: 'String'
					},
					{
						name: 'customer.cCityaddress',
						type: 'String'
					},
					{
						name: 'customer.cInnername',
						type: 'String'
					},
					{
						name: 'customer.cInnerid',
						type: 'String'
					},
					{
						name: 'customer.cRemark',
						type: 'String'
					},
					{
						name: 'customer.cQuality',
						type: 'String'
					},
					{
						name: 'customer.cCreditdeclare',
						type: 'String'
					}
				]
			});
															

	/////////////////////////////////////////////////////
	var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
	var requiredimportant = '<span style="color:red;font-weight:bold" data-qtip="Required">***</span>';
	/////////////////////////////////////////////////////////
	Ext.define('SalesContract', {
		extend: 'Ext.data.Model',
		fields: [
			{
				name: 'salesContract.scId',
				type: 'String'
			},
			{
				name: 'salesContract.scSellerid',
				type: 'String'
			},
			{
				name: 'salesContract.scSelleraddress',
				type: 'String'
			},
			{
				name: 'salesContract.scSellercorporaterepresentative',
				type: 'String'
			},
			{
				name: 'salesContract.scSelleragent',
				type: 'String'
			},
			{
				name: 'salesContract.scSelleropeningbank',
				type: 'String'
			},
			{
				name: 'salesContract.scSelleraccountnnmber',
				type: 'String'
			},
			{
				name: 'salesContract.scSellerdutyparagraph',
				type: 'String'
			},
			{
				name: 'salesContract.scSellertelephone',
				type: 'String'
			},
			{
				name: 'salesContract.scSellerfax',
				type: 'String'
			},
			{
				name: 'salesContract.scSellerzipcode',
				type: 'Integer'
			},
			{
				name: 'salesContract.scSellertelegraph',
				type: 'String'
			}, 
			{
				name: 'salesContract.scBuyer',
				type: 'Integer'
			}, 
			{
				name: 'salesContract.scBuyeraddress',
				type: 'String'
			},
			{
				name: 'salesContract.scBuyercorporaterepresentative',
				type: 'String'
			},
			{
				name: 'salesContract.scBuyeragent',
				type: 'String'
			}, 
			{
				name: 'salesContract.scBuyeropeningbank',
				type: 'String'
			},
			{
				name: 'salesContract.scBuyeraccountnumber',
				type: 'String'
			}, 
			{
				name: 'salesContract.scBuyerdutyparagraph',
				type: 'String'
			}, 
			{
				name: 'salesContract.scBuyertelephone',
				type: 'String'
			}, 
			{
				name: 'salesContract.scBuyerfax',
				type: 'String'
			},
			{
				name: 'salesContract.scBuyerzipcode',
				type: 'String'
			}, 
			{
				name: 'salesContract.scBuyertelegraph',
				type: 'String'
			}, 
			{
				name: 'salesContract.scYear',
				type: 'date',
				mapping : 'salesContract.scYear.time',
				dateFormat : 'time'
			}, 
			{
				name: 'salesContract.scStartingtime',
				type: 'date',
				mapping : 'salesContract.scStartingtime.time',
				dateFormat : 'time'
			}, 
			{
				name: 'salesContract.scDeadline',
				mapping : 'salesContract.scDeadline.time',
				dateFormat : 'time'
			}, 
			{
				name: 'salesContract.scOperator',
				type: 'String'
			},
			{
				name: 'salesContract.scSigningtime',
				mapping : 'salesContract.scSigningtime.time',
				dateFormat : 'time'
			},
			{
				name: 'salesContract.scSigningplace',
				type: 'String'
			},
			{
				name: 'salesContract.scAgreedcycle',
				type: 'String'
			},
			{
				name: 'salesContract.scWeeklyleast',
				type: 'Integer'
			}, 
			{
				name: 'salesContract.scCustomerdustry',
				type: 'Integer'
			}, 
			{
				name: 'salesContract.scCustomerservicedepartment',
				type: 'Integer'
			}, 
			{
				name: 'salesContract.scContracttype',
				type: 'Integer'
			}, 
			{
				name: 'salesContract.scQualityprice',
				type: 'Integer'
			}, 
			{
				name: 'salesContract.scDeliverymode',
				type: 'String'
			}, 
			{
				name: 'salesContract.scExecutableunit',
				type: 'String'
			},
			{
				name: 'salesContract.scMeteringmethod',
				type: 'String'
			}, 
			{
				name: 'salesContract.scShippingtype',
				type: 'Integer'
			},
			{
				name: 'salesContract.scFreightburden',
				type: 'String'
			}, 
			{
				name: 'salesContract.scCoalunitprice',
				type: 'Long'
			}, 
			{
				name: 'salesContract.scPricedescription',
				type: 'String'
			}, 
			{
				name: 'salesContract.scSettlementmethod',
				type: 'Integer'
			},
			{
				name: 'salesContract.scSettlementstatement',
				type: 'String'
			},
			{
				name: 'salesContract.scNotaryunit',
				type: 'String'
			}, 
			{
				name: 'salesContract.scNotarialopinions',
				type: 'String'
			}, 
			{
				name: 'salesContract.scMastercontractid',
				type: 'String'
			}, 
			{
				name: 'salesContract.scSettlementunit',
				type: 'Integer'
			}, 
			{
				name: 'salesContract.scStatus',
				type: 'Integer'
			}, 
			{
				name: 'salesContract.scContractmark',
				type: 'Integer'
			},
			{
				name: 'salesContract.scContractamount',
				type: 'Long'
			}, 
			{
				name: 'salesContract.scCashrate',
				type: 'Long'
			}, 
			{
				name: 'salesContract.scIschange',
				type: 'Byte'
			},
			{
				name: 'salesContract.scQualityquantityacceptancecriteriamethods',
				type: 'String'
			},
			{
				name: 'salesContract.scResponsibilitybreach',
				type: 'String'
			}, 
			{
				name: 'salesContract.scDisputesettlement',
				type: 'String'
			}, 
			{
				name: 'salesContract.scRemark',
				type: 'String'
			},{
				name: 'salesContract.scIsmain',
				type: 'Integer'
			}
		
		]
	});
	//////////////////////////////////////////////////////
	var formxqtj = Ext.create('Ext.form.Panel', {
		region: 'west',
		plain: true,
		border: 0,
		bodyPadding: 0,
		autoScroll: true,
		width: 1000,
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
					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "收货单位",
						afterLabelTextTpl: required,
						width: 210,
						flex: 0,
						/*layout: 'column',*/
						value: '',
						//必填项
						//pProductionunit
						name: 'scContractid',
						allowBlank: false,
					}, {
						xtype: "button",
						icon: '../../common/shared/icons/fam/search.png',
						/************创建单位搜索框开始***********/
						listeners: {
							click: function() {
								Ext.create("Ext.window.Window", {
									title: '搜索',
									closable: true,
									closeAction: 'hide',
									width: 900,
									minWidth: 350,
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
										region: 'west',
										title: '客户搜索',
										items: [searchFormkh],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [agridkh],
										width: 200,
										split: true,
										floatable: false,
										autoScroll: true
									}]
								}).show();
							}
						}
						/************创建单位搜索框结束***********/
					}]

				}, {

					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: ['coal'],
						data: [
							['张集'],
							['颍上'],
						]
					}),
					name: 'sourceName',
					hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					valueField: '',
					displayField: 'coal',
					fieldLabel: '&nbsp&nbsp发站',
					width: 210,
					queryMode: 'local', //数据模式,local代表本地数据模式
					selectOnTab: false,
					typeAhead: false,
					editable: false,
					onReplicate: function() {
						this.getStore().clearFilter();
					}

				}, {

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "&nbsp&nbsp到站",
						width: 210,
						flex: 1,
						/*layout: 'column',*/
						value: '',
						//必填项
						afterLabelTextTpl: required,
						//pProductionunit
						name: 'pProductionunit',
						allowBlank: false,
					}, {
						xtype: "button",
						icon: '../../common/shared/icons/fam/search.png',
						/************创建单位搜索框开始***********/
						listeners: {
							click: function() {
								//创建一个搜索表单
								var searchFormcz = Ext.create('Ext.form.Panel', {
									region: 'west',
									plain: true,
									border: 0,
									bodyPadding: 5,
									width: 200,
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
										fieldLabel: '车站编号',
									}, {
										xtype: 'textfield',
										fieldLabel: '车站名称',
									}, {
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
										valueField: '',
										displayField: 'coal',
										fieldLabel: '是否发站',
										queryMode: 'local', //数据模式,local代表本地数据模式
										selectOnTab: false,
										typeAhead: false,
										editable: false,
										onReplicate: function() {
											this.getStore().clearFilter();
										}
									}, {
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
										fieldLabel: '是否火车站',
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
										xtype: 'combo',
										store: Ext.create('Ext.data.ArrayStore', {
											fields: ['coal'],
											data: [
												['北京'],
												['天津'],
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
										fieldLabel: '省',
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
										xtype: 'textfield',
										fieldLabel: '市县',
									}, {
										xtype: 'textfield',
										fieldLabel: '机构传真',
									}, {
										xtype: 'textfield',
										fieldLabel: '车站简称',
									}],

									buttons: [{
										text: "搜索",
										iconCls: "btn-save",
										handler: function() {}
									}, {
										text: "重置",
										iconCls: "reset",
										handler: function() {}
									}]
								});
								//创建一个grid
								Ext.define('companycz', {
									extend: 'Ext.data.Model',
									idProperty: '',
									//定义类的属性
									fields: [{
										name: 'coId',
										type: 'string'
									}, {
										name: 'coShort',
										type: 'string'
									}, {
										name: 'coName',
										type: 'string'
									}, {
										name: 'coPhone',
										type: 'string'
									}, {
										name: 'coPostcode',
										type: 'integer'
									}, {
										name: 'coFax',
										type: 'string'
									}, {
										name: 'coLeader',
										type: 'string'
									}, {
										name: 'coAddress',
										type: 'string'
									}, {
										name: 'coLinkman',
										type: 'string'
									}]
								});
								//初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
								Ext.tip.QuickTipManager.init();
								//想当于一个仓库 存储各种对像的
								var storecz = Ext.create('Ext.data.Store', {
									model: 'companycz',
									remoteSort: true,
									//每页显示的数据
									pageSize: 5,
									proxy: {
										type: 'pagingmemory',
										//引入数据源
										reader: {
											type: 'array'
										}
									}
								});
								//定义grid
								var agridcz = Ext.create('Ext.grid.Panel', {
									id: '',
									region: 'east',
									//grid 的标题
									title: '列表',
									//引入仓库
									store: storecz,
									//定义列
									columns: [{
										id: '',
										text: '车站编号',
										sortable: true,
										//与定义的类中的属性匹配
										dataIndex: 'coId',
										flex: 0,
										width: 75,
									}, {
										text: '车站姓名',
										sortable: true,
										dataIndex: 'coShort',
										width: 75
									}, {
										text: '是否发站',
										sortable: true,
										dataIndex: 'coName',
										width: 75
									}, {
										text: '省份',
										sortable: true,
										dataIndex: 'coPhone',
										width: 75
									}, {
										text: '市县',
										sortable: true,
										dataIndex: 'coPostcode',
										width: 75
									}, {
										text: '铁路局',
										sortable: true,
										dataIndex: 'coFax',
										width: 75
									}],
									stripeRows: true,
									height: 520,
									width: 1200,
									frame: false,
								});
								Ext.create("Ext.window.Window", {
									title: '搜索',
									closable: true,
									closeAction: 'hide',
									width: 700,
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
										region: 'west',
										title: '搜索条件',
										items: [searchFormcz],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [agridcz],
										width: 200,
										split: true,
										floatable: false,
										autoScroll: true
									}]
								}).show();
							}
						}
						/************创建单位搜索框结束***********/
					}]

				}, {

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						flex: 1,
						fieldLabel: '&nbsp&nbsp产品名称',
						wiedth: 210,
						readOnly: 'true',
						value: '',
						//必填项
						afterLabelTextTpl: required,
						//pProductionunit
						name: 'coName',
						allowBlank: false,
					}, {
						xtype: "button",
						icon: '../../common/shared/icons/fam/search.png',
						/************创建单位搜索框开始***********/
						listeners: {
							click: function() {
								//创建一个grid
								Ext.define(
										'addcompanycp', {
											extend: 'Ext.data.Model',
											idProperty: '',
											//定义类的属性
											fields: [{
												name: 'coId',
												type: 'string'
											}, {
												name: 'coShort',
												type: 'string'
											}, {
												name: 'coName',
												type: 'string'
											}, {
												name: 'coPhone',
												type: 'string'
											}, {
												name: 'coPostcode',
												type: 'integer'
											}, {
												name: 'coFax',
												type: 'string'
											}, {
												name: 'coLeader',
												type: 'string'
											}, {
												name: 'coAddress',
												type: 'string'
											}, {
												name: 'coLinkman',
												type: 'string'
											}]
										});
								var addStorecp = Ext.create('Ext.data.Store', {
											model: 'addcompanycp',
											remoteSort: true,
											getMethod: function() {
												return 'POST';
											}, //亮点，设置请求方式,默认为GET         
											//每页显示的数据
											pageSize: 5,
											proxy: {
												type: "ajax",
												url: '',
												reader: {
													type: "json",
													root: "coPostcode"
												}
											},
											autoLoad: true
										});
								//定义grid
								var agridcp = Ext.create('Ext.grid.Panel', {
											region: 'east',
											//grid 的标题
											title: '单位列表',
												//引入仓库
											store: addStorecp,
											loadMask: true,
											listeners: {
												itemdblclick: function(
													dataview,
													record,
													item,
													index,
													e) {
													proForm
														.getForm()
														.loadRecord(
															record);
													newWin
														.hide();
												}
											},
											//定义列
											columns: [{
												id: '',
												text: '产品编号',
												sortable: true,
												//与定义的类中的属性匹配
												dataIndex: 'coId',
												flex: 0,
												width: 75,
											}, {
												text: '产品名称',
												sortable: true,
												dataIndex: 'coShort',
												width: 75
											}, {
												text: '煤种',
												sortable: true,
												dataIndex: 'coName',
												width: 75
											}, {
												text: '品种',
												sortable: true,
												dataIndex: 'coPhone',
												width: 75
											}, {
												text: '计量单位',
												sortable: true,
												dataIndex: 'coPostcode',
												width: 75
											}, {
												text: '生产单位',
												sortable: true,
												dataIndex: 'coFax',
												width: 75
											}, {
												text: '适用范围',
												sortable: true,
												dataIndex: 'coLeader',
												width: 75
											}, {
												text: '是否可用',
												sortable: true,
												dataIndex: 'coAddress',
												width: 75
											}],
											stripeRows: true,
											height: 320,
											width: 1200,
											frame: false,
										});
								//创建一个搜索表单
								var searchFormcp = Ext.create(
										'Ext.form.Panel', {
											region: 'west',
											plain: true,
											border: 0,
											bodyPadding: 5,
											width: 200,
											//表单发送的到的action路径
											url: '/XJManager/base/companyList.do',
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
												id: '',
												xtype: 'textfield',
												fieldLabel: '产品编号',
												name: 'coId'
											}, {
												id: '',
												xtype: 'textfield',
												fieldLabel: '产品名称',
												name: 'coId'
											}, {
												xtype: 'combo',
												store: Ext.create('Ext.data.ArrayStore', {
													fields: ['coal'],
													data: [
														['烟煤'],
														['烟煤'],
														['烟煤']
													]
												}),
												//pCoaltype
												name: '',
												hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
												emptyText: '-----请选择-----',
												//map中的键
												valueField: '',
												//map中的值 
												displayField: 'coal',
												//选中下拉框后再点击面板就会多出一行,不知道有卵子用
												/*plugins: [ Ext.ux.FieldReplicator ],*/
												fieldLabel: '煤种',
												queryMode: 'local', //数据模式,local代表本地数据模式
												//tab键是否可以选择当前突出项
												selectOnTab: false,
												/****下拉框不可编辑*****/
												typeAhead: false,
												editable: false,
												onReplicate: function() {
													this.getStore().clearFilter();
												}
											}, {

												xtype: 'combo',
												store: Ext.create('Ext.data.ArrayStore', {
													fields: ['coal'],
													data: [
														['烟煤'],
														['烟煤'],
														['烟煤']
													]
												}),
												//pCoaltype
												name: '',
												hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
												emptyText: '-----请选择-----',
												//map中的键
												valueField: '',
												//map中的值 
												displayField: 'coal',
												//选中下拉框后再点击面板就会多出一行,不知道有卵子用
												/*plugins: [ Ext.ux.FieldReplicator ],*/
												fieldLabel: '品种',
												queryMode: 'local', //数据模式,local代表本地数据模式
												//tab键是否可以选择当前突出项
												selectOnTab: false,
												/****下拉框不可编辑*****/
												typeAhead: false,
												editable: false,
												onReplicate: function() {
													this.getStore().clearFilter();
												}

											}, {

												xtype: 'combo',
												store: Ext.create('Ext.data.ArrayStore', {
													fields: ['coal'],
													data: [
														['烟煤'],
														['烟煤'],
														['烟煤']
													]
												}),
												//pCoaltype
												name: '',
												hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
												emptyText: '-----请选择-----',
												//map中的键
												valueField: '',
												//map中的值 
												displayField: 'coal',
												//选中下拉框后再点击面板就会多出一行,不知道有卵子用
												/*plugins: [ Ext.ux.FieldReplicator ],*/
												fieldLabel: '适用范围',
												queryMode: 'local', //数据模式,local代表本地数据模式
												//tab键是否可以选择当前突出项
												selectOnTab: false,
												/****下拉框不可编辑*****/
												typeAhead: false,
												editable: false,
												onReplicate: function() {
													this.getStore().clearFilter();
												}

											}, {

												xtype: 'combo',
												store: Ext.create('Ext.data.ArrayStore', {
													fields: ['coal'],
													data: [
														['烟煤'],
														['烟煤'],
														['烟煤']
													]
												}),
												//pCoaltype
												name: '',
												hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
												emptyText: '-----请选择-----',
												//map中的键
												valueField: '',
												//map中的值 
												displayField: 'coal',
												//选中下拉框后再点击面板就会多出一行,不知道有卵子用
												/*plugins: [ Ext.ux.FieldReplicator ],*/
												fieldLabel: '是否可用',
												queryMode: 'local', //数据模式,local代表本地数据模式
												//tab键是否可以选择当前突出项
												selectOnTab: false,
												/****下拉框不可编辑*****/
												typeAhead: false,
												editable: false,
												onReplicate: function() {
													this.getStore().clearFilter();
												}

											}],

											buttons: [{
												text: "搜索",
												iconCls: "btn-save",
												handler: function() {
													var url = '/XJManager/base/companyList.do?1=1'
													var id = Ext
														.getCmp(
															'id')
														.getValue();
													var short = Ext
														.getCmp(
															'short')
														.getValue();
													var phone = Ext
														.getCmp(
															'phone')
														.getValue();
													var fax = Ext
														.getCmp(
															'fax')
														.getValue();
													var postcode = Ext
														.getCmp(
															'postcode')
														.getValue();
													var leader = Ext
														.getCmp(
															'leader')
														.getValue();
													if(id != '') {
														url = url +
															'&coId=' +
															id;
													}
													if(short != '') {
														url = url +
															'&coShort=' +
															short;
													}
													if(phone != '') {
														phone = url +
															'&coPhone=' +
															phone;
													}
													if(fax != '') {
														url = url +
															'&coFax=' +
															fax;
													}
													if(postcode != '') {
														url = url +
															'&coPostcode=' +
															postcode;
													}
													if(leader != '') {
														url = url +
															'&coLeader=' +
															leader;
													}

													addStore
														.getProxy().url = url;
													addStore
														.load();
												}
											}, {
												text: "重置",
												iconCls: "reset",
												handler: function() {
													this
														.up(
															'form')
														.getForm()
														.reset();
												}
											}]
										});

								var newWincp = Ext.create("Ext.window.Window", {
											title: '搜索',
											closable: true,
											closeAction: 'hide',
											width: 800,
											minWidth: 350,
											height: 320,
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
												region: 'west',
												title: '部门搜索',
												items: [searchFormcp],
												width: 200,
												split: true,
												//是否可缩小
												collapsible: true,
												floatable: false
											}, {
												region: 'center',
												items: [agridcp],
												width: 200,
												split: true,
												floatable: false,
												autoScroll: true
											}]
										})
									.show();

							}
						}
						/************创建单位搜索框结束***********/
					}]

				}, {
					xtype: 'textfield',
					fieldLabel: '质量标准',
					afterLabelTextTpl: required,
					width: 232,
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp单价',
					afterLabelTextTpl: required,
					width: 210,
				}, {

					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: ['coal'],
						data: [
							['行业'],
							['其他'],
						]
					}),
					//pCoaltype
					name: 'sourceName',
					hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					//map中的键
					valueField: '',
					//map中的值 
					displayField: 'coal',
					//选中下拉框后再点击面板就会多出一行,不知道有卵子用
					/*plugins: [ Ext.ux.FieldReplicator ],*/
					fieldLabel: '&nbsp&nbsp指标类型',
					width: 232,
					/*afterLabelTextTpl: required,*/
					queryMode: 'local', //数据模式,local代表本地数据模式
					//tab键是否可以选择当前突出项
					selectOnTab: false,
					/****下拉框不可编辑*****/
					typeAhead: false,
					editable: false,
					onReplicate: function() {
						this.getStore().clearFilter();
					}

				}, {

					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: ['coal'],
						data: [
							['电力'],
							['化工'],
							['建材']
						]
					}),
					//pCoaltype
					name: 'sourceName',
					hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					//map中的键
					valueField: '',
					//map中的值 
					displayField: 'coal',
					//选中下拉框后再点击面板就会多出一行,不知道有卵子用
					/*plugins: [ Ext.ux.FieldReplicator ],*/
					fieldLabel: '&nbsp&nbsp指标名称',
					width: 278,
					/*afterLabelTextTpl: required,*/
					queryMode: 'local', //数据模式,local代表本地数据模式
					//tab键是否可以选择当前突出项
					selectOnTab: false,
					/****下拉框不可编辑*****/
					typeAhead: false,
					editable: false,
					onReplicate: function() {
						this.getStore().clearFilter();
					}

				}, {

					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: ['coal'],
						data: [
							['地销'],
							['铁运'],
						]
					}),
					name: 'sourceName',
					hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					valueField: '',
					displayField: 'coal',
					fieldLabel: '运输方式',
					width: 232,
					queryMode: 'local', //数据模式,local代表本地数据模式
					selectOnTab: false,
					typeAhead: false,
					editable: false,
					onReplicate: function() {
						this.getStore().clearFilter();
					}

				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp计量单位',
					width: 210,
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp发热量',
					afterLabelTextTpl: required,
					width: 232,
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp全水份',
					width: 278,
				}, {
					xtype: 'textfield',
					fieldLabel: '挥发份',
					width: 232,
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp供货总量',
					afterLabelTextTpl: required,
					width: 210,
				}, {
					xtype: 'textarea',
					fieldLabel: '备注',
					width: 950,
				},

				{
					xtype: 'textfield',
					fieldLabel: '一月',
					width: 230,
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp二月',
					width: 230,
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp三月',
					width: 240,
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp四月',
					width: 250,
				}, {
					xtype: 'textfield',
					fieldLabel: '五月',
					width: 230,
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp六月',
					width: 230,
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp七月',
					width: 240,
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp八月',
					width: 250,
				}, {
					xtype: 'textfield',
					fieldLabel: '九月',
					width: 230,
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp十月',
					width: 230,
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp十一月',
					width: 240,
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp十二月',
					width: 250,
				},

			],
		}, ],
	});
	////////////////////////////////////////////////////////
	var htxzWin = new Ext.Window({
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
	////////////////////////////////////////////////////////
	var addContantForm = Ext.create('Ext.form.Panel', {
		region: 'west',
		plain: true,
		border: 0,
		bodyPadding: 0,
		autoScroll: true,
		width: 1000,
		layout: 'form',
		url: '',
		fieldDefaults: {
			anchor: '100%'
		},
		items: [
				{
				layout: 'column',
				frame: true,
				items: [{
						xtype: "fieldcontainer",
						fieldLabel: '出卖方信息',
						afterLabelTextTpl: requiredimportant,
						width: 900,
					}, {
						xtype: "fieldcontainer",
						layout: "hbox",
						items: [
						{
							xtype: "textfield",
							name: 'salesContract.scSellerid',
							hidden:true
						},{
							xtype: "textfield",
							fieldLabel: "出卖方",
							afterLabelTextTpl: required,
							width: 178,
							flex: 0,
							name: 'companyName',
							readOnly:true,
							allowBlank: false,
						}, {
							xtype: "button",
							icon: '../../common/shared/icons/fam/search.png',
							listeners: {
								click: function() {
									/*******************创建内部单位搜索框开始***************/
									var companyStore = Ext.create('Ext.data.Store', {
										model: 'addcompany',
										remoteSort: true,
										getMethod: function() {
											return 'POST';
										},
										//亮点，设置请求方式,默认为GET         
										//每页显示的数据
										pageSize: 5,
										proxy: {
											type: "ajax",
											url: '',
											reader: {
												type: "json",
												root: "coPostcode"
											}
										},
										autoLoad: true
									});
									var companyGrid = Ext.create('Ext.grid.Panel', {
										id: 'agrid',
										region: 'east',
										title: '单位列表',
										store: companyStore,
										loadMask: true,
										columns: [{
												text: '机构编号',
												sortable: true,
												dataIndex: 'coId',
												flex: 0,
												width: 75,
											},
											{
												text: '机构简称',
												sortable: true,
												dataIndex: 'coShort',
												width: 75
											},
											{
												text: '机构全称',
												sortable: true,
												dataIndex: 'coName',
												width: 75
											},
											{
												text: '联系电话',
												sortable: true,
												dataIndex: 'coPhone',
												width: 75
											},
											{
												text: '邮政编码',
												sortable: true,
												dataIndex: 'coPostcode',
												width: 75
											},
											{
												text: '传真',
												sortable: true,
												dataIndex: 'coFax',
												width: 75
											},
											{
												text: '负责人',
												sortable: true,
												dataIndex: 'coLeader',
												width: 75
											},
											{
												text: '地址',
												sortable: true,
												dataIndex: 'coAddress',
												width: 75
											},
											{
												text: '联系人',
												sortable: true,
												dataIndex: 'coLinkman',
												width: 75
											}
										],
										stripeRows: true,
										height: 320,
										width: 1200,
										frame: false,
									});
									var companyForm = Ext.create('Ext.form.Panel', {
										region: 'west',
										plain: true,
										border: 0,
										bodyPadding: 5,
										width: 200,
										//表单发送的到的action路径
										url: '/XJManager/base/companyList.do',
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
												fieldLabel: '机构编号',
												name: 'coId'
											},
											{
												xtype: 'textfield',
												fieldLabel: '机构简称',
												name: 'coShort',
								
											},
											{
												xtype: 'textfield',
												fieldLabel: '机构电话',
												name: 'coPhone',
											},
											{
												xtype: 'textfield',
												fieldLabel: '机构传真',
												name: 'coFax',
											},
											{
												xtype: 'textfield',
												fieldLabel: '机构邮编',
												name: 'coPostcode',
											},
											{
												xtype: 'textfield',
												fieldLabel: '机构负责人',
												name: 'coLeader',
											}
										],
								
										buttons: [{
												text: "搜索",
												iconCls: "btn-save",
												handler: function() {
													var all = companyForm.getForm().getValues();
													var url = '/XJManager/base/companyList.do?1=1';
													var id = all['coId'];
													var short = all['coShort'];
													var phone = all['coPhone'];
													var fax = all['coFax'];
													var postcode = all['coPostcode'];
													var leader = all['coLeader'];
													if(id != '') {
														url = url + '&coId=' + id;
													}
													if(short != '') {
														url = url + '&coShort=' + short;
													}
													if(phone != '') {
														url = url + '&coPhone=' + phone;
													}
													if(fax != '') {
														url = url + '&coFax=' + fax;
													}
													if(postcode != '') {
														url = url + '&coPostcode=' + postcode;
													}
													if(leader != '') {
														url = url + '&coLeader=' + leader;
													}
													companyStore.getProxy().url = url;
													companyStore.load();
												}
											},
											{
												text: "重置",
												iconCls: "reset",
												handler: function() {
													this.up('form').getForm().reset();
												}
											}
										]
									});
									var companyWin = Ext.create("Ext.window.Window", {
												title: '搜索',
												closeAction: 'hide',
												closable: true,
												width: 600,
												minWidth: 350,
												height: 320,
												tools: [{
													type: 'pin'
												}],
												layout: {
													type: 'border',
													padding: 5
												},
												constrain: true,
												modal: true,
												plain: true,
												autoScroll: true,
												items: [{
														region: 'west',
														title: '部门搜索',
														items: [companyForm],
														width: 200,
														split: true,
														//是否可缩小
														collapsible: true,
														floatable: false
													},
													{
														region: 'center',
														items: [companyGrid],
														width: 200,
														split: true,
														floatable: false,
														autoScroll: true
													}
												]
											});
									/********************创建内部单位搜索结束**************/
									companyGrid.addListener('itemdblclick',function(dataview, record, item, index, e) {
									if(record.get('coId')!=null){
										addContantForm.getForm().findField('salesContract.scSellerid').setValue(record.get('coId'));
									}
									if(record.get('coName')!=null){
										addContantForm.getForm().findField('companyName').setValue(record.get('coName'));
									}
									if(record.get('coAddress')!=null){
										addContantForm.getForm().findField('salesContract.scSelleraddress').setValue(record.get('coAddress'));
									}
									if(record.get('coPostcode')!=null){
										addContantForm.getForm().findField('salesContract.scSellerzipcode').setValue(record.get('coPostcode'));
									}
									if(record.get('coFax')!=null){
										addContantForm.getForm().findField('salesContract.scSellerfax').setValue(record.get('coFax'));
									}
									if(record.get('coPhone')!=null){
										addContantForm.getForm().findField('salesContract.scSellertelephone').setValue(record.get('coPhone'));
									}
									companyWin.hide();
								});
									companyWin.show();
								}
							}
						}]
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp地址',
						name: 'salesContract.scSelleraddress',
						width: 400
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp法人代表',
						name: 'salesContract.scSellercorporaterepresentative',
						width: 200
					}, {
						xtype: 'textfield',
						fieldLabel: '委托代理人',
						name: 'salesContract.scSelleragent',
						width: 200
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp开户银行',
						name: 'salesContract.scSelleropeningbank',
						width: 200
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp账号',
						name: 'salesContract.scSelleraccountnnmber',
						width: 200
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp税号',
						name: 'salesContract.scSellerdutyparagraph',
						width: 200
					}, {
						xtype: 'textfield',
						fieldLabel: '电话',
						name: 'salesContract.scSellertelephone',
						width: 200
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp传真',
						name: 'salesContract.scSellerfax',
						width: 200
					}, {
						xtype: 'numberfield',
						fieldLabel: '&nbsp&nbsp邮编',
						name: 'salesContract.scSellerzipcode',
						width: 200
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp电报',
						name: 'salesContract.scSellertelegraph',
						width: 200
					},
					{
						xtype: "fieldcontainer",
						fieldLabel: '买受方信息',
						afterLabelTextTpl: requiredimportant,
						width: 900,
					}, {
						xtype: "fieldcontainer",
						layout: "hbox",
						items: [
						{
							xtype: "textfield",
							name: 'salesContract.scBuyer',
							hidden:true
						},{
							xtype: "textfield",
							fieldLabel: "买受方",
							width: 178,
							flex: 0,
							name: 'customerName',
							allowBlank: false,
							readOnly:true
						}, {
							xtype: "button",
							icon: '../../common/shared/icons/fam/search.png',
							listeners: {
								click: function() {
									/***************查询客户信息开始*****************/
									var customerStore = Ext.create('Ext.data.Store', {
										model: 'Customer',
										remoteSort: true,
										//每页显示的数据
										pageSize: 5,
										proxy: {
											type: "ajax",
											url: '/XJManager/base/customerList.do',
											reader: {
												type: "json",
												root: "queryList",
												totalProperty: 'totalCount'
											}
										}
									});
									var customerSearchForm = Ext.create('Ext.form.Panel', {
										region: 'west',
										plain: true,
										border: 0,
										bodyPadding: 5,
										width: 200,
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
												xtype: 'numberfield',
												fieldLabel: '客户编号',
												afterLabelTextTpl: required,
												name: 'customer.cId',
												width: 200
											},
											{
												xtype: 'textfield',
												fieldLabel: '客户简称',
												afterLabelTextTpl: required,
												name: 'customer.cShort',
												width: 400
											},
											{
												xtype: 'textfield',
												fieldLabel: '联系人',
												width: 200,
												name: 'customer.cLinkman'
											},
											{
												xtype: 'combo',
												store: Ext.create('Ext.data.ArrayStore', {
													fields: [{
															name: 'companyKey',
															type: 'Integer'
														},
														{
															name: 'companyValue',
															type: 'String'
														}
													],
													data: [
														[1, '股份制有限公司'],
														[2, '国有'],
														[3, '国有股份制'],
														[4, '合资公司'],
														[5, '集体'],
														[6, '民营'],
														[7, '私营'],
														[8, '有限公司'],
														[9, '有限责任公司'],
														[10, '中外合资公司'],
													]
												}),
												name: 'customer.cCompanytype',
												hiddenName: 'customer.cCompanytype',
												valueField: 'companyKey',
												displayField: 'companyValue',
												fieldLabel: '企业性质',
												width: 200,
												queryMode: 'local',
												selectOnTab: false,
												typeAhead: false,
												editable: false,
												onReplicate: function() {
													this.getStore().clearFilter();
												}
											},
											{
												xtype: 'combo',
												store: Ext.create('Ext.data.ArrayStore', {
													fields: [{
															name: 'typeKEY',
															type: 'Integer'
														},
														{
															name: 'typeValue',
															type: 'String'
														}
													],
													data: [
														[1, '一般客户'],
														[2, '重点客户'],
													]
												}),
												name: 'customer.cType',
												hiddenName: 'customer.cType',
												valueField: 'typeKEY',
												displayField: 'typeValue',
												fieldLabel: '客户类型',
												width: 200,
												queryMode: 'local',
												//数据模式,local代表本地数据模式
												selectOnTab: false,
												typeAhead: false,
												editable: false,
												onReplicate: function() {
													this.getStore().clearFilter();
												}
											},
											{
												xtype: 'combo',
												store: Ext.create('Ext.data.ArrayStore', {
													fields: [{
															name: 'iKey',
															type: 'Integer'
														},
														{
															name: 'iValue',
															type: 'String'
														}
													],
													data: [
														[1, '电力'],
														[2, '化工'],
														[3, '建材'],
														[4, '商业'],
														[5, '石化'],
														[6, '冶金'],
														[7, '其他'],
													]
												}),
												name: 'customer.cIid',
												hiddenName: 'customer.cIid',
												// 提交到后台的input的name ，对应下面store里的''id，必须要填
												emptyText: '-----请选择-----',
												valueField: 'iKey',
												displayField: 'iValue',
												fieldLabel: '所属行业',
												width: 200,
												queryMode: 'local',
												//数据模式,local代表本地数据模式
												selectOnTab: false,
												typeAhead: false,
												editable: false,
												onReplicate: function() {
													this.getStore().clearFilter();
												}
								
											},
											{
												xtype: 'combo',
												store: Ext.create('Ext.data.ArrayStore', {
													fields: [{
															name: 'departmentKey',
															type: 'Integer'
														},
														{
															name: 'departmentValue',
															type: 'String'
														}
													],
													data: [
														[1, '大唐'],
														[2, '国电'],
														[3, '国资委'],
														[4, '华电'],
														[5, '华能'],
														[6, '化工部'],
														[7, '省电燃'],
														[8, '铁道部'],
														[9, '皖能'],
														[10, '冶金部'],
														[11, '中电投'],
														[12, '中石化'],
														[13, '其他'],
													]
												}),
												name: 'customer.cDepartment',
												hiddenName: 'customer.cDepartment',
												emptyText: '-----请选择-----',
												valueField: 'departmentKey',
												displayField: 'departmentValue',
												fieldLabel: '部别',
												width: 200,
												queryMode: 'local',
												selectOnTab: false,
												typeAhead: false,
												editable: false,
												onReplicate: function() {
													this.getStore().clearFilter();
												}
								
											},
										],
										buttons: [{
												text: "搜索",
												iconCls: "btn-save",
												handler: function() {
													var url = '/XJManager/base/customerList.do?1=1';
													var all = customerSearchForm.getForm().getValues();
													var cusIdSearch = all['customer.cId'];
													var shortSearch = all['customer.cShort'];
													var linkmanSearch = all['customer.cLinkman'];
													var comtypeSearch = all['customer.cCompanytype'];
													var typeSearch = all['customer.cType'];
													var cIidSearch = all['customer.cIid'];
													var depSearch = all['customer.cDepartment'];
													if(cusIdSearch != '' && cusIdSearch != null) {
														url = url + '&customer.cId=' + cusIdSearch;
													}
													if(shortSearch != '' && shortSearch != null) {
														url = url + '&customer.cShort=' + shortSearch;
													}
													if(linkmanSearch != null && linkmanSearch != '') {
														url = url + '&customer.cLinkman=' + linkmanSearch;
													}
													if(comtypeSearch != '' && comtypeSearch != null) {
														url = url + '&customer.cCompanytype=' + comtypeSearch;
													}
													if(typeSearch != '' && typeSearch != null) {
														url = url + '&customer.cType=' + typeSearch;
													}
													if(cIidSearch != '' && cIidSearch != null) {
														url = url + '&customer.cIid=' + cIidSearch;
													}
													if(depSearch != '' && depSearch != null) {
														url = url + '&customer.cDepartment=' + depSearch;
													}
													customerStore.getProxy().url = url;
													customerStore.load();
												}
											},
											{
												text: "重置",
												iconCls: "reset",
												handler: function() {
													this.up('form').getForm().reset();
												}
											}
										]
									});
									var customerGrid = Ext.create('Ext.grid.Panel', {
										region: 'east',
										store: customerStore,
										selModel: Ext.create('Ext.selection.CheckboxModel'),
										columns: [{
												text: '客户编号',
												sortable: true,
												dataIndex: 'customer.cId',
												flex: 0,
												width: 75,
											},
											{
												text: '客户简称',
												sortable: true,
												dataIndex: 'customer.cShort',
												width: 75,
											},
											{
												text: '客户全称',
												sortable: true,
												dataIndex: 'customer.cName',
												width: 75,
											},
											{
												text: '企业性质',
												sortable: true,
												dataIndex: 'customer.cCompanytype',
												width: 75,
												renderer: function(value) {
													if(value == 1) {
														return "股份制有限公司";
													} else if(value == 2) {
														return "国有";
													} else if(value == 3) {
														return "国有股份制";
													} else if(value == 4) {
														return "合资公司";
													} else if(value == 5) {
														return "集体";
													} else if(value == 6) {
														return "民营";
													} else if(value == 7) {
														return "私营";
													} else if(value == 8) {
														return "有限公司";
													} else if(value == 9) {
														return "有限责任公司";
													} else if(value == 10) {
														return "中外合资公司";
													}
												}
											},
											{
												text: '客户类型',
												sortable: true,
												dataIndex: 'customer.cType',
												width: 75,
												renderer: function(value) {
													if(value == 1) {
														return "一般客户";
													} else {
														return "重点客户";
													}
												}
											},
											{
												text: '所属行业',
												sortable: true,
												dataIndex: 'customer.cIid',
												width: 75,
												renderer: function(value) {
													if(value == 1) {
														return "电力";
													} else if(value == 2) {
														return "化工";
													} else if(value == 3) {
														return "建材";
													} else if(value == 4) {
														return "商业";
													} else if(value == 5) {
														return "石化";
													} else if(value == 6) {
														return "冶金";
													} else if(value == 7) {
														return "其他";
													}
												}
											},
											{
												text: '部别',
												sortable: true,
												dataIndex: 'customer.cDepartment',
												width: 75,
												renderer: function(value) {
													if(value == 1) {
														return "大唐";
													} else if(value == 2) {
														return "国电";
													} else if(value == 3) {
														return "国资委";
													} else if(value == 4) {
														return "华电";
													} else if(value == 5) {
														return "华能";
													} else if(value == 6) {
														return "化工部";
													} else if(value == 7) {
														return "省电燃";
													} else if(value == 8) {
														return "铁道部";
													} else if(value == 9) {
														return "皖能";
													} else if(value == 10) {
														return "冶金部";
													} else if(value == 11) {
														return "中电投";
													} else if(value == 12) {
														return "中石化";
													} else if(value == 13) {
														return "其他";
													}
												}
											},
										],
										stripeRows: true,
										height: 250,
										width: 'auto',
										bbar: Ext.create('Ext.PagingToolbar', {
											pageSize: 10,
											store: customerStore,
											displayInfo: true,
											plugins: Ext.create('Ext.ux.ProgressBarPager', {})
										})
									});
									var customerWin = Ext.create("Ext.window.Window", {
										title: '搜索',
										closable: true,
										closeAction: 'hide',
										width: 600,
										minWidth: 350,
										height: 320,
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
												region: 'west',
												title: '客户搜索',
												items: [customerSearchForm],
												width: 200,
												split: true,
												//是否可缩小
												collapsible: true,
												floatable: false
											},
											{
												region: 'center',
												items: [customerGrid],
												width: 200,
												split: true,
												floatable: false,
												autoScroll: true
											}
										]
									});
									/***************查询客户信息结束*****************/
									customerGrid.addListener('itemdblclick',function(dataview, record, item, index, e) {
									if(record.get('customer.cId')!=null){
										addContantForm.getForm().findField('salesContract.scBuyer').setValue(record.get('customer.cId'));
									}
									if(record.get('customer.cName')!=null){
										addContantForm.getForm().findField('customerName').setValue(record.get('customer.cName'));
									}
									if(record.get('customer.cCityaddress')!=null){
										addContantForm.getForm().findField('salesContract.scBuyeraddress').setValue(record.get('customer.cCityaddress'));
									}
									if(record.get('customer.cLegal')!=null){
										addContantForm.getForm().findField('salesContract.scBuyercorporaterepresentative').setValue(record.get('customer.cLegal'));
									}
									if(record.get('customer.cBank')!=null){
										addContantForm.getForm().findField('salesContract.scBuyeropeningbank').setValue(record.get('customer.cBank'));
									}
									if(record.get('customer.cAccount')!=null){
										addContantForm.getForm().findField('salesContract.scBuyeraccountnumber').setValue(record.get('customer.cAccount'));
									}
									if(record.get('customer.cTaxnumber')!=null){
										addContantForm.getForm().findField('salesContract.scBuyerdutyparagraph').setValue(record.get('customer.cTaxnumber'));
									}
									if(record.get('customer.cPhone')!=null){
										addContantForm.getForm().findField('salesContract.scBuyertelephone').setValue(record.get('customer.cPhone'));
									}
									if(record.get('customer.cFax')!=null){
										addContantForm.getForm().findField('salesContract.scBuyerfax').setValue(record.get('customer.cFax'));
									}
									if(record.get('customer.cPostcode')!=null){
										addContantForm.getForm().findField('salesContract.scBuyerzipcode').setValue(record.get('customer.cPostcode'));
									}
									if(record.get('customer.cDepartment')!=null){
										addContantForm.getForm().findField('salesContract.scCustomerservicedepartment').setValue(record.get('customer.cDepartment'));
									}
									customerWin.hide();
								});
									customerWin.show();
								}
							}
						}]
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp地址',
						name: 'salesContract.scBuyeraddress',
						width: 400
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp法人代表',
						name: 'salesContract.scBuyercorporaterepresentative',
						width: 200
					}, {
						xtype: 'textfield',
						fieldLabel: '委托代理人',
						name: 'salesContract.scBuyeragent',
						width: 200
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp开户银行',
						name: 'salesContract.scBuyeropeningbank',
						width: 200
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp账号',
						name: 'salesContract.scBuyeraccountnumber',
						width: 200
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp税号',
						name: 'salesContract.scBuyerdutyparagraph',
						width: 200
					}, {
						xtype: 'textfield',
						fieldLabel: '电话',
						name: 'salesContract.scBuyertelephone',
						width: 200
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp传真',
						name: 'salesContract.scBuyerfax',
						width: 200
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp邮编',
						name: 'salesContract.scBuyerzipcode',
						width: 200
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp电报',
						name: 'salesContract.scBuyertelegraph',
						width: 200
					},
					{
						xtype: "fieldcontainer",
						fieldLabel: '其他信息',
						afterLabelTextTpl: requiredimportant,
						width: 900,
					}, {
						xtype: 'datefield',
						fieldLabel: '年份',
						afterLabelTextTpl: required,
						name: 'year',
						width: 200
					}, {
						xtype: 'datefield',
						fieldLabel: '&nbsp&nbsp起始时间',
						afterLabelTextTpl: required,
						name: 'startDate',
						width: 200
					}, {
						xtype: 'datefield',
						fieldLabel: '&nbsp&nbsp结束时间',
						name: 'endDate',
						afterLabelTextTpl: required,
						width: 200
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp经办人',
						name: 'salesContract.scOperator',
						afterLabelTextTpl: required,
						width: 200
					}, {
						xtype: 'datefield',
						fieldLabel: '签定时间',
						afterLabelTextTpl: required,
						name: 'makeTime',
						width: 200
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp签定地点',
						name: 'salesContract.scSigningplace',
						width: 200
					}, {
						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [{
								name: 'cycleKey',
								type: 'Integer'
							},
							{
								name: 'cycleValue',
								type: 'String'
							}],
							data: [
								[0,'不选择'],
								[1,'年'],
								[2,'季'],
								[3,'月']
							]
						}),
						name: 'salesContract.scAgreedcycle',
						hiddenName: 'salesContract.scAgreedcycle', // 提交到后台的input的name ，对应下面store里的''id，必须要填
						valueField: 'cycleKey',
						displayField: 'cycleValue',
						fieldLabel: '&nbsp&nbsp约定周期',
						width: 200,
						afterLabelTextTpl: required,
						queryMode: 'local', //数据模式,local代表本地数据模式
						selectOnTab: false,
						typeAhead: false,
						editable: false,
						onReplicate: function() {
							this.getStore().clearFilter();
						}

					}, {
						xtype: 'numberfield',
						fieldLabel: '&nbsp每周期最少量',
						name: 'salesContract.scWeeklyleast',
						afterLabelTextTpl: required,
						width: 200
					}, {
						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [{
									name: 'iKey',
									type: 'Integer'
								},
								{
									name: 'iValue',
									type: 'String'
								}
							],
							data: [
								[0,'不选择'],
								[1, '电力'],
								[2, '化工'],
								[3, '建材'],
								[4, '商业'],
								[5, '石化'],
								[6, '冶金'],
								[7, '其他'],
							]
						}),
						name: 'salesContract.scCustomerdustry',
						hiddenName: 'salesContract.scCustomerdustry', // 提交到后台的input的name ，对应下面store里的''id，必须要填
						valueField: 'iKey',
						displayField: 'iValue',
						fieldLabel: '客户行业',
						width: 200,
						queryMode: 'local', //数据模式,local代表本地数据模式
						selectOnTab: false,
						typeAhead: false,
						editable: false,
						onReplicate: function() {
							this.getStore().clearFilter();
						}

					}, {
						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [{
									name: 'departmentKey',
									type: 'Integer'
									},
									{
									name: 'departmentValue',
									type: 'String'
									}
							],
							data: [
								[0,'不选择'],
								[1, '大唐'],
								[2, '国电'],
								[3, '国资委'],
								[4, '华电'],
								[5, '华能'],
								[6, '化工部'],
								[7, '省电燃'],
								[8, '铁道部'],
								[9, '皖能'],
								[10, '冶金部'],
								[11, '中电投'],
								[12, '中石化'],
								[13, '其他'],
							]
						}),
						name: 'salesContract.scCustomerservicedepartment',
						hiddenName: 'salesContract.scCustomerservicedepartment', // 提交到后台的input的name ，对应下面store里的''id，必须要填
						valueField: 'departmentKey',
						displayField: 'departmentValue',
						fieldLabel: '&nbsp&nbsp客户部别',
						width: 200,
						queryMode: 'local', //数据模式,local代表本地数据模式
						selectOnTab: false,
						typeAhead: false,
						editable: false,
						onReplicate: function() {
							this.getStore().clearFilter();
						}

					}, {
						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [{
										name: 'ctKey',
										type: 'Integer'
									},{
										name: 'ctValue',
										type: 'String'
									}],
							data: [
								[0,'不选择'],
								[1,'一般合同'],
								[2,'重点合同'],
									]
						}),
						name: 'salesContract.scContracttype',
						hiddenName: 'salesContract.scContracttype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
						valueField: 'ctKey',
						displayField: 'ctValue',
						fieldLabel: '&nbsp&nbsp合同类型',
						afterLabelTextTpl: required,
						width: 200,
						queryMode: 'local', //数据模式,local代表本地数据模式
						selectOnTab: false,
						typeAhead: false,
						editable: false,
						onReplicate: function() {
							this.getStore().clearFilter();
						}

					}, {
						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [{
										name: 'QualityKey',
										type: 'Integer'
									},{
										name: 'QualityValue',
										type: 'String'
									}],
							data: [
								[0,'不选择'],
								[1,'是'],
								[2,'否'],
							]
						}),
						name: 'salesContract.scQualityprice',
						hiddenName: 'salesContract.scQualityprice', // 提交到后台的input的name ，对应下面store里的''id，必须要填
						valueField: 'QualityKey',
						displayField: 'QualityValue',
						fieldLabel: '&nbsp&nbsp以质论价',
						width: 200,
						queryMode: 'local', //数据模式,local代表本地数据模式
						selectOnTab: false,
						typeAhead: false,
						editable: false,
						onReplicate: function() {
							this.getStore().clearFilter();
						}

					}, {
						xtype: 'textfield',
						fieldLabel: '交货方式',
						name: 'salesContract.scDeliverymode',
						width: 200
					}, {
						xtype: "fieldcontainer",
						layout: "hbox",
						items: [
						{
							xtype: "textfield",
							name: 'salesContract.scExecutableunit',
							hidden:true
						},{
							xtype: "textfield",
							fieldLabel: "&nbsp&nbsp执行单位",
							width: 178,
							flex: 0,
							name: 'ExecuteName',
							allowBlank: false,
							readOnly:true
						}, {
							xtype: "button",
							icon: '../../common/shared/icons/fam/search.png',
							listeners: {
								click: function() {
									/*******************创建内部单位搜索框开始***************/
									var companyStore = Ext.create('Ext.data.Store', {
										model: 'addcompany',
										remoteSort: true,
										getMethod: function() {
											return 'POST';
										},
										//亮点，设置请求方式,默认为GET         
										//每页显示的数据
										pageSize: 5,
										proxy: {
											type: "ajax",
											url: '',
											reader: {
												type: "json",
												root: "coPostcode"
											}
										},
										autoLoad: true
									});
									var companyGrid = Ext.create('Ext.grid.Panel', {
										id: 'agrid',
										region: 'east',
										title: '单位列表',
										store: companyStore,
										loadMask: true,
										columns: [{
												text: '机构编号',
												sortable: true,
												dataIndex: 'coId',
												flex: 0,
												width: 75,
											},
											{
												text: '机构简称',
												sortable: true,
												dataIndex: 'coShort',
												width: 75
											},
											{
												text: '机构全称',
												sortable: true,
												dataIndex: 'coName',
												width: 75
											},
											{
												text: '联系电话',
												sortable: true,
												dataIndex: 'coPhone',
												width: 75
											},
											{
												text: '邮政编码',
												sortable: true,
												dataIndex: 'coPostcode',
												width: 75
											},
											{
												text: '传真',
												sortable: true,
												dataIndex: 'coFax',
												width: 75
											},
											{
												text: '负责人',
												sortable: true,
												dataIndex: 'coLeader',
												width: 75
											},
											{
												text: '地址',
												sortable: true,
												dataIndex: 'coAddress',
												width: 75
											},
											{
												text: '联系人',
												sortable: true,
												dataIndex: 'coLinkman',
												width: 75
											}
										],
										stripeRows: true,
										height: 320,
										width: 1200,
										frame: false,
									});
									var companyForm = Ext.create('Ext.form.Panel', {
										region: 'west',
										plain: true,
										border: 0,
										bodyPadding: 5,
										width: 200,
										//表单发送的到的action路径
										url: '/XJManager/base/companyList.do',
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
												fieldLabel: '机构编号',
												name: 'coId'
											},
											{
												xtype: 'textfield',
												fieldLabel: '机构简称',
												name: 'coShort',
								
											},
											{
												xtype: 'textfield',
												fieldLabel: '机构电话',
												name: 'coPhone',
											},
											{
												xtype: 'textfield',
												fieldLabel: '机构传真',
												name: 'coFax',
											},
											{
												xtype: 'textfield',
												fieldLabel: '机构邮编',
												name: 'coPostcode',
											},
											{
												xtype: 'textfield',
												fieldLabel: '机构负责人',
												name: 'coLeader',
											}
										],
								
										buttons: [{
												text: "搜索",
												iconCls: "btn-save",
												handler: function() {
													var all = companyForm.getForm().getValues();
													var url = '/XJManager/base/companyList.do?1=1';
													var id = all['coId'];
													var short = all['coShort'];
													var phone = all['coPhone'];
													var fax = all['coFax'];
													var postcode = all['coPostcode'];
													var leader = all['coLeader'];
													if(id != '') {
														url = url + '&coId=' + id;
													}
													if(short != '') {
														url = url + '&coShort=' + short;
													}
													if(phone != '') {
														url = url + '&coPhone=' + phone;
													}
													if(fax != '') {
														url = url + '&coFax=' + fax;
													}
													if(postcode != '') {
														url = url + '&coPostcode=' + postcode;
													}
													if(leader != '') {
														url = url + '&coLeader=' + leader;
													}
													companyStore.getProxy().url = url;
													companyStore.load();
												}
											},
											{
												text: "重置",
												iconCls: "reset",
												handler: function() {
													this.up('form').getForm().reset();
												}
											}
										]
									});
									var companyWin = Ext.create("Ext.window.Window", {
												title: '搜索',
												closeAction: 'hide',
												closable: true,
												width: 600,
												minWidth: 350,
												height: 320,
												tools: [{
													type: 'pin'
												}],
												layout: {
													type: 'border',
													padding: 5
												},
												constrain: true,
												modal: true,
												plain: true,
												autoScroll: true,
												items: [{
														region: 'west',
														title: '部门搜索',
														items: [companyForm],
														width: 200,
														split: true,
														//是否可缩小
														collapsible: true,
														floatable: false
													},
													{
														region: 'center',
														items: [companyGrid],
														width: 200,
														split: true,
														floatable: false,
														autoScroll: true
													}
												]
											});
									/********************创建内部单位搜索结束**************/
									companyGrid.addListener('itemdblclick',function(dataview, record, item, index, e) {
										if(record.get('coId')!=null){
											addContantForm.getForm().findField('salesContract.scExecutableunit').setValue(record.get('coId'));
										}
										if(record.get('coName')!=null){
											addContantForm.getForm().findField('ExecuteName').setValue(record.get('coName'));
										}
									companyWin.hide();
									});
								companyWin.show();
							}
						}
					}]
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp计量方法',
						name: 'salesContract.scMeteringmethod',
						width: 200,
					}, {
						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [
									{
										name: 'shipKey',
										type: 'Integer'
									},{
										name: 'shipValue',
										type: 'String'
									}],
							data: [
								[0,'不选择'],
								[1,'地销'],
								[2,'铁运'],
								[3,'水运']
							]
						}),
						name: 'salesContract.scShippingtype',
						hiddenName: 'salesContract.scShippingtype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
						valueField: 'shipKey',
						displayField: 'shipValue',
						fieldLabel: '&nbsp&nbsp运输方式',
						width: 200,
						queryMode: 'local', //数据模式,local代表本地数据模式
						selectOnTab: false,
						typeAhead: false,
						editable: false,
						onReplicate: function() {
							this.getStore().clearFilter();
						}

					}, {
						xtype: 'textfield',
						fieldLabel: '运费负担',
						width: 200,
						name: 'salesContract.scFreightburden'
					}, {
						xtype: 'textfield',
						fieldLabel: '质量数量验收标准及方法',
						name: 'salesContract.scQualityquantityacceptancecriteriamethods',
						width: 200
					}, {
						xtype: 'numberfield',
						fieldLabel: '&nbsp&nbsp煤炭单价（元）',
						afterLabelTextTpl: required,
						name: 'salesContract.scCoalunitprice',
						width: 200
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp价格说明',
						name: 'salesContract.scPricedescription',
						width: 200
					}, {
						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [
									{
										name: 'payKey',
										type: 'Integer'
									},{
										name: 'payValue',
										type: 'String'
									}],
							data: [
								[0,'不选择'],
								[1,'现金'],
								[2,'货到付款'],
								[3,'银行承兑汇票'],
								[4,'支票'],
								[5,'银行汇票']
								
							]
						}),
						name: 'salesContract.scSettlementmethod',
						hiddenName: 'salesContract.scSettlementmethod', // 提交到后台的input的name ，对应下面store里的''id，必须要填
						valueField: 'payKey',
						displayField: 'payValue',
						fieldLabel: '&nbsp&nbsp结算方式',
						width: 200,
						afterLabelTextTpl: required,
						queryMode: 'local', //数据模式,local代表本地数据模式
						selectOnTab: false,
						typeAhead: false,
						editable: false,
						onReplicate: function() {
							this.getStore().clearFilter();
						}

					}, {
						xtype: 'textfield',
						fieldLabel: '结算说明',
						name: 'salesContract.scSettlementstatement',
						width: 200
					},
					{
						xtype: "fieldcontainer",
						layout: "hbox",
						items: [{
							xtype: "textfield",
							fieldLabel: "&nbsp&nbsp主合同编号",
							flex: 1,
							width: 178,
							name: 'salesContract.scMastercontractid',
							readOnly:true,
							allowBlank: false
						}, {
							xtype: "button",
							icon: '../../common/shared/icons/fam/search.png',
							listeners: {
								click: function() {
									/********************主合同搜索开始*********************/
									var mainContractForm = Ext.create('Ext.form.Panel', {
																		region: 'west',
																		plain: true,
																		border: 0,
																		bodyPadding: 5,
																		width: 200,
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
																			fieldLabel: '合同编号',
																			name:'salesContract.scId'
																		}, {
																			xtype: 'combo',
																			store: Ext.create('Ext.data.ArrayStore', {
																				fields: [{
																							name: 'ctKey',
																							type: 'Integer'
																						},{
																							name: 'ctValue',
																							type: 'String'
																						}],
																				data:[
																					[1,'一般合同'],
																					[2,'重点合同']
																					]
																			}),
																				name: 'salesContract.scContracttype',
																				hiddenName: 'salesContract.scContracttype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
																				valueField: 'ctKey',
																				displayField: 'ctValue',
																				fieldLabel: '合同类型',
																				afterLabelTextTpl: required,
																				width: 200,
																				queryMode: 'local', //数据模式,local代表本地数据模式
																				selectOnTab: false,
																				typeAhead: false,
																				editable: false,
																				onReplicate: function() {
																					this.getStore().clearFilter();
																				}
																		}, {
																			xtype: 'datefield',
																			fieldLabel: '合同年份起:',
																			editable : false,
																			name:'startDate'
																		}, {
																			xtype: 'datefield',
																			fieldLabel: '合同年份止:',
																			editable : false,
																			name:'endDate'
																		}, {
																			xtype: 'textfield',
																			fieldLabel: '客户简称',
																			name:'customerShort'
																		}, {
																			xtype: 'combo',
																			store: Ext.create('Ext.data.ArrayStore', {
																				fields: [
																						{
																							name: 'shipKey',
																							type: 'Integer'
																						},{
																							name: 'shipValue',
																							type: 'String'
																						}],
																				data: [
																					[1,'地销'],
																					[2,'铁运'],
																					[3,'水运']
																				]
																			}),
																			name: 'salesContract.scShippingtype',
																			hiddenName: 'salesContract.scShippingtype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
																			valueField: 'shipKey',
																			displayField: 'shipValue',
																			fieldLabel: '运输方式',
																			width: 200,
																			queryMode: 'local', //数据模式,local代表本地数据模式
																			selectOnTab: false,
																			typeAhead: false,
																			editable: false,
																			onReplicate: function() {
																				this.getStore().clearFilter();
																			}
													
																		}],
																		buttons: [{
																			text: "搜索",
																			iconCls: "btn-save",
																			handler: function() {
																					var all = mainContractForm.getForm().getValues();
																					var url = '/XJManager/contract/contractList.do?1=1';
																					var conId = all['salesContract.scId'];
																					var conType = all['salesContract.scContracttype'];
																					var conStart = all['startDate'];
																					var conEnd = all['salesContract.scDeadline'];
																					var cusShort = all['customerShort'];
																					var conShippingtype = all['salesContract.scShippingtype'];
																					if(conId != '' && conId != null) {
																						url = url + '&salesContract.scId=' + conId;
																					}
																					if(conType != '' && conType != null) {
																						url = url + '&salesContract.scContracttype=' + conType;
																					}
																					if(conStart != '' && conStart != null) {
																						url = url + '&startDate=' + conStart;
																					}
																					if(conEnd != '' && conEnd != null) {
																						url = url + '&endDate=' + conEnd;
																					}
																					if(cusShort != '' && cusShort != null) {
																						url = url + '&customerShort=' + cusShort;
																					}
																					if(conShippingtype != '' && conShippingtype != null) {
																						url = url + '&salesContract.scShippingtype=' + conShippingtype;
																					}
																					mainContractStore.getProxy().url = url;
																					mainContractStore.load();
																			}
																		}, {
																			text: "重置",
																			iconCls: "reset",
																			handler: function() {
																					this.up('form').getForm().reset();
																			}
																		}]
																	});
									var mainContractStore = Ext.create('Ext.data.Store', {
										model: 'SalesContract',
										remoteSort: true,
										//每页显示的数据
										pageSize: 10,
										proxy: {
											type: "ajax",
											url: '/XJManager/contract/contractList.do', 
											reader: {
												type: "json",
												root: "queryList",
												totalProperty: 'totalCount'
											}
										}
									});
									var mainContractGrid = Ext.create('Ext.grid.Panel', {
										region: 'east',
										//grid 的标题
										title: '列表',
										//引入仓库
										store: mainContractStore,
										//定义列
										columns: [{
												text: '合同年份',
												sortable: true,
												//格式化日期
												renderer: Ext.util.Format.dateRenderer('m/d/Y'),
												dataIndex: 'salesContract.scYear',
												width: 75,
											}, {
												text: '合同编号',
												sortable: true,
												dataIndex: 'salesContract.scId',
												flex: 0,
												width: 75,
											}, {
												text: '合同类别',
												sortable: true,
												dataIndex: 'salesContract.scContracttype',
												width: 75,
												renderer: function(value) {
													if(value == 1) {
														return "一般合同";
													} else if(value == 2) {
														return "重点合同";
													} 
												}
											}, {
												text: '合同总量',
												sortable: true,
												dataIndex: 'salesContract.scContractamount',
												width: 75,
											}, {
												text: '实发总量',
												sortable: true,
												dataIndex: '实发总量',
												width: 75,
											}, {
												text: '所属行业',
												sortable: true,
												dataIndex: 'salesContract.scCustomerdustry',
												width: 75,
												renderer: function(value) {
													if(value == 1) {
														return "电力";
													} else if(value == 2) {
														return "化工";
													} else if(value == 3) {
														return "建材";
													} else if(value == 4) {
														return "商业";
													} else if(value == 5) {
														return "石化";
													} else if(value == 6) {
														return "冶金";
													} else if(value == 7) {
														return "其他";
													}
												}
											}, {
												text: '运输方式',
												sortable: true,
												dataIndex: 'salesContract.scShippingtype',
												width: 75,
												renderer: function(value) {
													if(value == 1) {
														return "地销";
													} else if(value == 2) {
														return "铁运";
													} else if(value == 3) {
														return "水运";
													} 
												}
											}, {
												text: '是否变更',
												sortable: true,
												dataIndex: 'salesContract.scIschange',
												width: 75,
												renderer: function(value) {
													if(value == 0) {
														return "否";
													} else if(value == 1) {
														return "是";
													}
												}
											}, { 
												text: '合同标记',
												sortable: true,
												dataIndex: 'salesContract.scContractmark',
												width: 75,
												renderer: function(value) {
													if(value == 0) {
														return "正常";
													} else if(value == 1) {
														return "异常";
													}
												}
											}, {
												text: '经办人',
												sortable: true,
												dataIndex: 'salesContract.scOperator',
												width: 75,
											}, {
												text: '状态',
												sortable: true,
												dataIndex: 'salesContract.scStatus',
												width: 75,
												renderer: function(value) {
													if(value == 0) {
														return '<span style="color:orange;">草拟</span>';
													} else if(value == 1) {
														return '<span style="color:blue;">审核中</span>';
													} else if(value == 2) {
														return '<span style="color:green;">已审核</span>';
													} else if(value == 3) {
														return '<span style="color:red;">驳回</span>';
													}
												}
											}
										],
										stripeRows: true,
										height: 520,
										width: 1200,
										frame: false,
										bbar: Ext.create('Ext.PagingToolbar', {
											pageSize: 10,
											store: mainContractStore,
											displayInfo: true,
											plugins: Ext.create('Ext.ux.ProgressBarPager', {})
										})
									});
									/********************合同搜索结束*********************/
									var mainContractWin = Ext.create("Ext.window.Window", {
										title: '搜索',
										closable: true,
										closeAction: 'hide',
										width: 700,
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
										modal: true,
										plain: true,
										autoScroll: true,
										items: [{
											region: 'west',
											title: '搜索条件',
											items: [mainContractForm],
											width: 200,
											split: true,
											collapsible: true,
											floatable: false
										}, {
											region: 'center',
											items: [mainContractGrid],
											width: 200,
											split: true,
											floatable: false,
											autoScroll: true
										}]
									}).show();
									mainContractGrid.addListener('itemdblclick',function(dataview, record, item, index, e) {
										if(record.get('salesContract.scSellerid')!=null){
											addContantForm.getForm().findField('salesContract.scMastercontractid').setValue(record.get('salesContract.scSellerid'));
										}
									mainContractWin.hide();
									});
								}
							}
						}]
					}, {
						xtype: "fieldcontainer",
						layout: "hbox",
						items: [
						{
							xtype: "textfield",
							name: 'salesContract.scSettlementunit',
							hidden:true
						},{
							xtype: "textfield",
							fieldLabel: "&nbsp&nbsp结算单位",
							width: 178,
							flex: 0,
							name: 'payCustomerName',
							allowBlank: false,
						}, {
							xtype: "button",
							icon: '../../common/shared/icons/fam/search.png',
							listeners: {
								click: function() {
										/***************查询客户信息开始*****************/
										var customerStore = Ext.create('Ext.data.Store', {
											model: 'Customer',
											remoteSort: true,
											//每页显示的数据
											pageSize: 5,
											proxy: {
												type: "ajax",
												url: '/XJManager/base/customerList.do',
												reader: {
													type: "json",
													root: "queryList",
													totalProperty: 'totalCount'
												}
											}
										});
										var customerSearchForm = Ext.create('Ext.form.Panel', {
											region: 'west',
											plain: true,
											border: 0,
											bodyPadding: 5,
											width: 200,
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
													xtype: 'numberfield',
													fieldLabel: '客户编号',
													afterLabelTextTpl: required,
													name: 'customer.cId',
													width: 200
												},
												{
													xtype: 'textfield',
													fieldLabel: '客户简称',
													afterLabelTextTpl: required,
													name: 'customer.cShort',
													width: 400
												},
												{
													xtype: 'textfield',
													fieldLabel: '联系人',
													width: 200,
													name: 'customer.cLinkman'
												},
												{
													xtype: 'combo',
													store: Ext.create('Ext.data.ArrayStore', {
														fields: [{
																name: 'companyKey',
																type: 'Integer'
															},
															{
																name: 'companyValue',
																type: 'String'
															}
														],
														data: [
															[1, '股份制有限公司'],
															[2, '国有'],
															[3, '国有股份制'],
															[4, '合资公司'],
															[5, '集体'],
															[6, '民营'],
															[7, '私营'],
															[8, '有限公司'],
															[9, '有限责任公司'],
															[10, '中外合资公司'],
														]
													}),
													name: 'customer.cCompanytype',
													hiddenName: 'customer.cCompanytype',
													// 提交到后台的input的name ，对应下面store里的''id，必须要填
													emptyText: '-----请选择-----',
													valueField: 'companyKey',
													displayField: 'companyValue',
													fieldLabel: '企业性质',
													width: 200,
													queryMode: 'local',
													//数据模式,local代表本地数据模式
													selectOnTab: false,
													typeAhead: false,
													editable: false,
													onReplicate: function() {
														this.getStore().clearFilter();
													}
												},
												{
													xtype: 'combo',
													store: Ext.create('Ext.data.ArrayStore', {
														fields: [{
																name: 'typeKEY',
																type: 'Integer'
															},
															{
																name: 'typeValue',
																type: 'String'
															}
														],
														data: [
															[1, '一般客户'],
															[2, '重点客户'],
														]
													}),
													name: 'customer.cType',
													hiddenName: 'customer.cType',
													// 提交到后台的input的name ，对应下面store里的''id，必须要填
													emptyText: '-----请选择-----',
													valueField: 'typeKEY',
													displayField: 'typeValue',
													fieldLabel: '客户类型',
													width: 200,
													queryMode: 'local',
													//数据模式,local代表本地数据模式
													selectOnTab: false,
													typeAhead: false,
													editable: false,
													onReplicate: function() {
														this.getStore().clearFilter();
													}
												},
												{
													xtype: 'combo',
													store: Ext.create('Ext.data.ArrayStore', {
														fields: [{
																name: 'iKey',
																type: 'Integer'
															},
															{
																name: 'iValue',
																type: 'String'
															}
														],
														data: [
															[1, '电力'],
															[2, '化工'],
															[3, '建材'],
															[4, '商业'],
															[5, '石化'],
															[6, '冶金'],
															[7, '其他'],
														]
													}),
													name: 'customer.cIid',
													hiddenName: 'customer.cIid',
													// 提交到后台的input的name ，对应下面store里的''id，必须要填
													emptyText: '-----请选择-----',
													valueField: 'iKey',
													displayField: 'iValue',
													fieldLabel: '所属行业',
													width: 200,
													queryMode: 'local',
													//数据模式,local代表本地数据模式
													selectOnTab: false,
													typeAhead: false,
													editable: false,
													onReplicate: function() {
														this.getStore().clearFilter();
													}
									
												},
												{
													xtype: 'combo',
													store: Ext.create('Ext.data.ArrayStore', {
														fields: [{
																name: 'departmentKey',
																type: 'Integer'
															},
															{
																name: 'departmentValue',
																type: 'String'
															}
														],
														data: [
															[1, '大唐'],
															[2, '国电'],
															[3, '国资委'],
															[4, '华电'],
															[5, '华能'],
															[6, '化工部'],
															[7, '省电燃'],
															[8, '铁道部'],
															[9, '皖能'],
															[10, '冶金部'],
															[11, '中电投'],
															[12, '中石化'],
															[13, '其他'],
														]
													}),
													name: 'customer.cDepartment',
													hiddenName: 'customer.cDepartment',
													// 提交到后台的input的name ，对应下面store里的''id，必须要填
													emptyText: '-----请选择-----',
													valueField: 'departmentKey',
													displayField: 'departmentValue',
													fieldLabel: '部别',
													width: 200,
													queryMode: 'local',
													//数据模式,local代表本地数据模式
													selectOnTab: false,
													typeAhead: false,
													editable: false,
													onReplicate: function() {
														this.getStore().clearFilter();
													}
									
												},
											],
											buttons: [{
													text: "搜索",
													iconCls: "btn-save",
													handler: function() {
														var url = '/XJManager/base/customerList.do?1=1';
														var all = customerSearchForm.getForm().getValues();
														var cusIdSearch = all['customer.cId'];
														var shortSearch = all['customer.cShort'];
														var linkmanSearch = all['customer.cLinkman'];
														var comtypeSearch = all['customer.cCompanytype'];
														var typeSearch = all['customer.cType'];
														var cIidSearch = all['customer.cIid'];
														var depSearch = all['customer.cDepartment'];
														if(cusIdSearch != '' && cusIdSearch != null) {
															url = url + '&customer.cId=' + cusIdSearch;
														}
														if(shortSearch != '' && shortSearch != null) {
															url = url + '&customer.cShort=' + shortSearch;
														}
														if(linkmanSearch != null && linkmanSearch != '') {
															url = url + '&customer.cLinkman=' + linkmanSearch;
														}
														if(comtypeSearch != '' && comtypeSearch != null) {
															url = url + '&customer.cCompanytype=' + comtypeSearch;
														}
														if(typeSearch != '' && typeSearch != null) {
															url = url + '&customer.cType=' + typeSearch;
														}
														if(cIidSearch != '' && cIidSearch != null) {
															url = url + '&customer.cIid=' + cIidSearch;
														}
														if(depSearch != '' && depSearch != null) {
															url = url + '&customer.cDepartment=' + depSearch;
														}
														customerStore.getProxy().url = url;
														customerStore.load();
													}
												},
												{
													text: "重置",
													iconCls: "reset",
													handler: function() {
														this.up('form').getForm().reset();
													}
												}
											]
										});
										var customerGrid = Ext.create('Ext.grid.Panel', {
											region: 'east',
											store: customerStore,
											selModel: Ext.create('Ext.selection.CheckboxModel'),
											columns: [{
													text: '客户编号',
													sortable: true,
													dataIndex: 'customer.cId',
													flex: 0,
													width: 75,
												},
												{
													text: '客户简称',
													sortable: true,
													dataIndex: 'customer.cShort',
													width: 75,
												},
												{
													text: '客户全称',
													sortable: true,
													dataIndex: 'customer.cName',
													width: 75,
												},
												{
													text: '企业性质',
													sortable: true,
													dataIndex: 'customer.cCompanytype',
													width: 75,
													renderer: function(value) {
														if(value == 1) {
															return "股份制有限公司";
														} else if(value == 2) {
															return "国有";
														} else if(value == 3) {
															return "国有股份制";
														} else if(value == 4) {
															return "合资公司";
														} else if(value == 5) {
															return "集体";
														} else if(value == 6) {
															return "民营";
														} else if(value == 7) {
															return "私营";
														} else if(value == 8) {
															return "有限公司";
														} else if(value == 9) {
															return "有限责任公司";
														} else if(value == 10) {
															return "中外合资公司";
														}
													}
												},
												{
													text: '客户类型',
													sortable: true,
													dataIndex: 'customer.cType',
													width: 75,
													renderer: function(value) {
														if(value == 1) {
															return "一般客户";
														} else {
															return "重点客户";
														}
													}
												},
												{
													text: '所属行业',
													sortable: true,
													dataIndex: 'customer.cIid',
													width: 75,
													renderer: function(value) {
														if(value == 1) {
															return "电力";
														} else if(value == 2) {
															return "化工";
														} else if(value == 3) {
															return "建材";
														} else if(value == 4) {
															return "商业";
														} else if(value == 5) {
															return "石化";
														} else if(value == 6) {
															return "冶金";
														} else if(value == 7) {
															return "其他";
														}
													}
												},
												{
													text: '部别',
													sortable: true,
													dataIndex: 'customer.cDepartment',
													width: 75,
													renderer: function(value) {
														if(value == 1) {
															return "大唐";
														} else if(value == 2) {
															return "国电";
														} else if(value == 3) {
															return "国资委";
														} else if(value == 4) {
															return "华电";
														} else if(value == 5) {
															return "华能";
														} else if(value == 6) {
															return "化工部";
														} else if(value == 7) {
															return "省电燃";
														} else if(value == 8) {
															return "铁道部";
														} else if(value == 9) {
															return "皖能";
														} else if(value == 10) {
															return "冶金部";
														} else if(value == 11) {
															return "中电投";
														} else if(value == 12) {
															return "中石化";
														} else if(value == 13) {
															return "其他";
														}
													}
												},
											],
											stripeRows: true,
											height: 250,
											width: 'auto',
											bbar: Ext.create('Ext.PagingToolbar', {
												pageSize: 10,
												store: customerStore,
												displayInfo: true,
												plugins: Ext.create('Ext.ux.ProgressBarPager', {})
											})
										});
										var customerWin = Ext.create("Ext.window.Window", {
											title: '搜索',
											closable: true,
											closeAction: 'hide',
											width: 600,
											minWidth: 350,
											height: 320,
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
													region: 'west',
													title: '客户搜索',
													items: [customerSearchForm],
													width: 200,
													split: true,
													//是否可缩小
													collapsible: true,
													floatable: false
												},
												{
													region: 'center',
													items: [customerGrid],
													width: 200,
													split: true,
													floatable: false,
													autoScroll: true
												}
											]
										});
										/***************查询客户信息结束*****************/
										customerGrid.addListener('itemdblclick',function(dataview, record, item, index, e) {
										if(record.get('customer.cId')!=null){
											addContantForm.getForm().findField('salesContract.scSettlementunit').setValue(record.get('customer.cId'));
										}
										if(record.get('customer.cName')!=null){
											addContantForm.getForm().findField('payCustomerName').setValue(record.get('customer.cName'));
										}
										customerWin.hide();
									});
										customerWin.show();
								}
							}
						}]

					},

					{
						xtype: 'textfield',
						fieldLabel: '纠纷处理',
						width: 400,
						name: 'salesContract.scDisputesettlement'
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp公正单位',
						width: 200,
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp公证意见',
						width: 200,
					},

					{
						xtype: 'textarea',
						fieldLabel: '违约责任',
						width: 400,
						name: 'salesContract.scResponsibilitybreach',
						heigh: 45
					}, {
						xtype: 'textarea',
						fieldLabel: '&nbsp&nbsp备注',
						width: 400,
						name: 'salesContract.scRemark',
						heigh: 45
					},

				],
			},

		],
	});

	var addContantWin = new Ext.Window({
		autoHight: true,
		modal: true,
		autoscroll: true,
		items: [],
		// 这里面放你的表单。 
		closeAction: 'close',
		//这里写成 'hide' 
		buttons: [{
			text: "保存",
			iconCls: "btn-save",
			handler: function() {
				if(!addContantForm.isValid()){
					Ext.Msg.alert('请完善信息', '有必填项没有输入,请仔细检查!');
					return;
				}
				addContantForm.submit({
					success: function() {
						addContantWin.hide();
						store.reload();
					},
					failure: function() {
						Ext.Msg.alert('添加失败', '添加失败,请重试!');
					}
				});
			}
		}, {
			text: "重置",
			iconCls: "reset",
			handler: function() {
				addContantForm.form().reset();
			}
		}]
	});
	//////////////////////////////////////////////////////////
	var store = Ext.create('Ext.data.Store', {
		model: 'SalesContract',
		remoteSort: true,
		//每页显示的数据
		pageSize: 10,
		proxy: {
			type: "ajax",
			url: '/XJManager/contract/contractList.do', 
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
	var grid = Ext.create('Ext.grid.Panel', {
		//grid 的标题
		title: '制定销售合同',
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
				dataIndex: 'salesContract.scYear',
				width: 75,
			}, {
				text: '合同编号',
				sortable: true,
				dataIndex: 'salesContract.scId',
				flex: 0,
				width: 75,
			}, {
				text: '合同类别',
				sortable: true,
				dataIndex: 'salesContract.scContracttype',
				width: 75,
				renderer: function(value) {
					if(value == 1) {
						return "一般合同";
					} else if(value == 2) {
						return "重点合同";
					} 
				}
			}, {
				text: '合同总量',
				sortable: true,
				dataIndex: 'salesContract.scContractamount',
				width: 75,
			}, {
				text: '实发总量',
				sortable: true,
				dataIndex: '实发总量',
				width: 75,
			}, {
				text: '所属行业',
				sortable: true,
				dataIndex: 'salesContract.scCustomerdustry',
				width: 75,
				renderer: function(value) {
					if(value == 1) {
						return "电力";
					} else if(value == 2) {
						return "化工";
					} else if(value == 3) {
						return "建材";
					} else if(value == 4) {
						return "商业";
					} else if(value == 5) {
						return "石化";
					} else if(value == 6) {
						return "冶金";
					} else if(value == 7) {
						return "其他";
					}
				}
			}, {
				text: '运输方式',
				sortable: true,
				dataIndex: 'salesContract.scShippingtype',
				width: 75,
				renderer: function(value) {
					if(value == 1) {
						return "地销";
					} else if(value == 2) {
						return "铁运";
					} else if(value == 3) {
						return "水运";
					} 
				}
			}, {
				text: '是否变更',
				sortable: true,
				dataIndex: 'salesContract.scIschange',
				width: 75,
				renderer: function(value) {
					if(value == 0) {
						return "否";
					} else if(value == 1) {
						return "是";
					}
				}
			}, { 
				text: '合同标记',
				sortable: true,
				dataIndex: 'salesContract.scContractmark',
				width: 75,
				renderer: function(value) {
					if(value == 0) {
						return "正常";
					} else if(value == 1) {
						return "异常";
					}
				}
			}, {
				text: '经办人',
				sortable: true,
				dataIndex: 'salesContract.scOperator',
				width: 75,
			}, {
				text: '状态',
				sortable: true,
				dataIndex: 'salesContract.scStatus',
				width: 75,
				renderer: function(value) {
					if(value == 0) {
						return '<span style="color:orange;">草拟</span>';
					} else if(value == 1) {
						return '<span style="color:blue;">审核中</span>';
					} else if(value == 2) {
						return '<span style="color:green;">已审核</span>';
					} else if(value == 3) {
						return '<span style="color:red;">驳回</span>';
					}
				}
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
						text: '添加',
						tooltip: '',
						iconCls: 'add',
						listeners: {
							'click': function() {
								addContantForm.form.reset();
								addContantForm.getForm().findField('salesContract.scAgreedcycle').setValue(1);
								addContantForm.getForm().findField('salesContract.scCustomerdustry').setValue(1);
								addContantForm.getForm().findField('salesContract.scCustomerservicedepartment').setValue(1);
								addContantForm.getForm().findField('salesContract.scContracttype').setValue(1);
								addContantForm.getForm().findField('salesContract.scQualityprice').setValue(1);
								addContantForm.getForm().findField('salesContract.scShippingtype').setValue(1);
								addContantForm.getForm().findField('salesContract.scSettlementmethod').setValue(1);
								addContantForm.getForm().url = '/XJManager/contract/addContract.do';
								addContantWin.add(addContantForm);
								addContantWin.show();
							}
						}
					}, {
						text: '修改',
						tooltip: '',
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
								c.add(addContantForm);
								c.show();
								addContantForm.getForm().loadRecord(record[0]);
								Ext.getCmp('formpid').readOnly = true;
								addContantForm.getForm().url = '/XJManager/base/updateProduct.do';
								grid.getSelectionModel().clearSelections();
								grid.getView().refresh();
							}

						}
					}, {
						text: '删除',
						tooltip: '',
						iconCls: 'remove',
						listeners: {
							'click': function() {

							}
						}
					}, {
						text: '送审',
						tooltip: '',
						iconCls: 'songshen',
						listeners: {
							'click': function() {
								////////////////////////////////////////////
								var winss
									/////////////////////////////////////////////////////////
								var gridss2 = Ext.create('Ext.grid.Panel', {
									//grid 的标题
									//引入仓库
									store: null,
									//引入选择框
									//定义列
									columns: [{
										id: '',
										text: '流程模板编号',
										sortable: true,
										//与定义的类中的属性匹配
										dataIndex: 'scContractid',
										width: 180

										//鼠标点击时能够编辑
									}, {
										text: '流程模板名称',
										sortable: true,
										dataIndex: '',
										width: 180
									}, {
										text: '对应单据名称',
										sortable: true,
										dataIndex: 'sourceName',
										width: 180
									}, {
										text: '创建人',
										sortable: true,
										dataIndex: 'sourceName',
										width: 180
									}, {
										text: '创建日期',
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
										store: null,
										displayInfo: true,
										plugins: Ext.create('Ext.ux.ProgressBarPager', {})
									}),

								});
								/////////////////////////////////////////////////////////
								var gridss1 = Ext.create('Ext.grid.Panel', {
									//grid 的标题
									autoScroll: true,
									//引入仓库
									store: null,
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
										text: '审批权限',
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
										text: '是否终节点',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '备注',
										sortable: true,
										dataIndex: 'sourceName',
										width: 300
											//鼠标点击时能够编辑
									}],

									//table边框的设定
									stripeRows: true,
									height: 200,
									width: 940,
									frame: false,

									bbar: Ext.create('Ext.PagingToolbar', {
										pageSize: 10,
										store: null,
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
								var tabss = Ext
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
													title: '模板节点信息',
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
														items: [gridss1],
													}],

												},

											],

										});
								//////////////////////////////////////////////////////////////      

								winss = Ext
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
												items: [gridss2],
												height: 200,
												//autoScroll: true
											}, {
												region: 'north',
												items: [tabss],
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
					}, {
						text: '审批意见',
						tooltip: '',
						iconCls: 'songshen',
						listeners: {
							'click': function() {
								////////////////////////////////////////////
								var winyj
									/////////////////////////////////////////////////////////
								var gridshenpi2 = Ext.create('Ext.grid.Panel', {
									//grid 的标题
									//引入仓库
									store: null,
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
										store: null,
										displayInfo: true,
										plugins: Ext.create('Ext.ux.ProgressBarPager', {})
									}),

								});
								/////////////////////////////////////////////////////////
								var gridshenpi1 = Ext.create('Ext.grid.Panel', {
									//grid 的标题
									autoScroll: true,
									//引入仓库
									store: null,
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
										store: null,
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
					}, {
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
								var gridcontantxq = Ext.create('Ext.grid.Panel', {
									//grid 的标题
									title: '销售合同明细',
									selModel:sm,
									//autoScroll: true,
									//引入仓库
									store: null,
									//引入选择框
									//定义列
									columns: [{
											id: '',
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
									dockedItems: [
										//各种按钮布局
										{
											xtype: 'toolbar',
											items: [{
													text: '新增',
													tooltip: '',
													iconCls: 'add',
													listeners: {
														click: function() {

															htxzWin.add(formxqtj);
															htxzWin.show();

														}

													}

												}, {
													text: '修改',
													tooltip: ' 修改一条数据',
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
															htxzWin.add(formxqtj);
															htxzWin.show();
															formxqtj.getForm().loadRecord(record[0]);
															//Ext.getCmp('formpid').readOnly = true;
															//formxqtj.getForm().url = '/XJManager/base/updateProduct.do';
															gridcontantxq.getSelectionModel().clearSelections();
															gridcontantxq.getView().refresh();
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
										store: null,
										displayInfo: true,
										plugins: Ext.create('Ext.ux.ProgressBarPager', {})
									}),

								});
								////////////////////////////////////////////////////////////
								Ext.History.init();
								////////////////////////////////////////////////////////////////  

								var i = 1;
								xqWin = Ext.create(
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
																			Ext.getCmp('xiangqingz').setHeight(716);
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
					}, {
						text: '上传',
						tooltip: '',
						iconCls: '',
						listeners: {
							'click': function() {
								//////////////////////////////////////////////////////
								var formsc = Ext.create('Ext.form.Panel', {
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
											xtype: 'fileuploadfield',
											fieldLabel: '上传',
											afterLabelTextTpl: required,
											width: 400,
										}, ],
									}, ],
								});
								////////////////////////////////////////////////////////
								var scWin = new Ext.Window({
									autoHight: true,
									modal: true,
									/*closeAction:hide,*/
									items: [formsc], // 这里面放你的表单。 
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

								////////////////////////////////////////////
								var winfj;
									/////////////////////////////////////////////////////////
								var gridfj = Ext.create('Ext.grid.Panel', {
									//grid 的标题
									//引入仓库
									store: null,
									//引入选择框
									//定义列
									columns: [{
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
									dockedItems: [{
										xtype: 'toolbar',
										dock: 'bottom',
										ui: 'footer',
										layout: {
											pack: 'center'
										},
										items: [{

											minWidth: 80,
											text: '上传',
											listeners: {
												'click': function() {
													scWin.show();
												}
											}
										}, {
											minWidth: 80,
											text: '取消'
										}]
									}, ],
									//table边框的设定
									stripeRows: true,
									height: 200,
									width: 700,
									frame: false,

									bbar: Ext.create('Ext.PagingToolbar', {
										pageSize: 10,
										store: null,
										displayInfo: true,
										plugins: Ext.create('Ext.ux.ProgressBarPager', {})
									}),

								});
								////////////////////////////////////////////
								Ext.History.init();
								winfj = Ext.create("Ext.window.Window", {
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
												region: 'north',
												title: '',
												items: [gridfj],
												height: 220,
												//autoScroll: true
											}]
										}).show();
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
