Ext.Loader.setConfig({
	enabled: true
});

//设置路径
Ext.Loader.setPath('Ext.ux', '../../common/ux/');

//定义需要的插件
Ext.require(['Ext.data.*', 'Ext.grid.*', 'Ext.util.*', 'Ext.tip.QuickTipManager', 'Ext.ux.data.PagingMemoryProxy', 'Ext.ux.ProgressBarPager', 'Ext.selection.CheckboxModel', 'Ext.ux.RowExpander', 'Ext.selection.CellModel', 'Ext.ux.CheckColumn', 'Ext.state.*', 'Ext.form.*']);
 
Ext.onReady(function() {
	var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
	var requiredimportant = '<span style="color:red;font-weight:bold" data-qtip="Required">***</span>';
	var sm = Ext.create('Ext.selection.CheckboxModel');
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
	/////////////////////////////////////////////////////////
	/*********************客户收货单位**********************************/
	//定义一个全局变量,用来接收详细信息主面板的客户id,在打开详细信息面板后会给这个变量赋值,然后那些在全局定义的,在详细面板中打开的一些控件就可以使用这个变量
	var customerId;
	//查询单位用到的store
	var reciveStore = Ext.create('Ext.data.Store', {
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
	//列表store
	var reStore = Ext.create('Ext.data.Store', {
		model: 'Customer',
		remoteSort: true,
		//每页显示的数据
		pageSize: 5,
		proxy: {
			type: "ajax",
			url: '',
			reader: {
				type: "json",
				root: "queryList",
				totalProperty: 'totalCount'
			}
		}
	});
	var searchFormkh = Ext.create('Ext.form.Panel', {
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
					var all = searchFormkh.getForm().getValues();
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
					reciveStore.getProxy().url = url;
					reciveStore.load();
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
	var agridkh = Ext.create('Ext.grid.Panel', {
		region: 'east',
		//grid 的标题
		//引入仓库
		store: reciveStore,
		selModel: Ext.create('Ext.selection.CheckboxModel'),
		//定义列
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
		dockedItems: [{
			xtype: 'toolbar',
			items: [{
				text: '保存',
				iconCls: 'ok',
				listeners: {
					'click': function() {
						var record = agridkh.getSelectionModel().getSelection();
						var arr = new Array();
						for(var i = 0; i < record.length; i++) {
							arr[i] = record[i].get('customer.cId');
						}
						Ext.Ajax.request({
							url: '/XJManager/base/customer/addRecive.do',
							params: {
								'cusId': customerId,
								'recCusId': arr.join("-")
							},
							method: 'POST',
							success: function(response, options) {
								Ext.MessageBox.alert('成功', '添加成功');
							},
							failure: function(response, options) {
								Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
							}
						});
					}
				}
			}]
		}],
		bbar: Ext.create('Ext.PagingToolbar', {
			pageSize: 10,
			store: reciveStore,
			displayInfo: true,
			plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		})
	});
	var addWinshdw = Ext.create("Ext.window.Window", {
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
				items: [searchFormkh],
				width: 200,
				split: true,
				//是否可缩小
				collapsible: true,
				floatable: false
			},
			{
				region: 'center',
				items: [agridkh],
				width: 200,
				split: true,
				floatable: false,
				autoScroll: true
			}
		]
	});
	/*********************客户收货单位结束**********************************/
	/****************************车站**************************************/
	Ext.define('Station', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
				name: 'station.sId',
				type: 'Integer'
			},
			{
				name: 'station.sName',
				type: 'string'
			},
			{
				name: 'station.sSort',
				type: 'string'
			},
			{
				name: 'station.sProvince',
				type: 'Integer'
			},
			{
				name: 'station.sCity',
				type: 'String'
			},
			{
				name: 'station.sRailwaystation',
				type: 'Integer'
			},
			{
				name: 'station.sRailwaysbureau',
				type: 'integer'
			},
			{
				name: 'station.sDeparturestation',
				type: 'integer'
			},
			{
				name: 'stationadmin.adminName',
				type: 'String'
			},
			{
				name: 'province.pName',
				type: 'String'
			},
		]
	});
	var staStore = Ext.create('Ext.data.Store', {
		model: 'Station',
		remoteSort: true,
		//每页显示的数据
		pageSize: 10,
		getMethod: function() {
			return 'POST';
		},
		proxy: {
			type: "ajax",
			url: '/XJManager/base/stationList.do',
			reader: {
				type: "json",
				root: "queryList",
				totalProperty: 'totalCount'
			}
		}
	});
	var searchForm = Ext.create('Ext.form.Panel', {
		region: 'west',
		plain: true,
		border: 0,
		bodyPadding: 5,
		width: 200,
		url: '',
		fieldDefaults: {
			labelWidth: 70,
			anchor: '100%'
		},
		layout: {
			type: 'vbox',
			align: 'stretch' // Child items are stretched to full width
		},
		items: [{
				xtype: 'textfield',
				fieldLabel: '车站编号',
				name: 'station.sSort'
			},
			{
				xtype: 'textfield',
				fieldLabel: '车站名称',
				name: 'station.sName'
			},
			{
				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: [{
							name: 'startKey',
							type: 'Integer'
						},
						{
							name: 'startValue',
							type: 'String'
						}
					],
					data: [
						[1, '是'],
						[0, '否'],
					]
				}),
				name: 'station.sRailwaysbureau',
				hiddenName: 'station.sRailwaysbureau',
				// 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				valueField: 'startKey',
				displayField: 'startValue',
				fieldLabel: '是否发站',
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
							name: 'stationKey',
							type: 'Integer'
						},
						{
							name: 'stationValue',
							type: 'String'
						}
					],
					data: [
						[1, '是'],
						[0, '否'],
					]
				}),
				name: 'station.sDeparturestation',
				hiddenName: 'station.sDeparturestation',
				// 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				valueField: 'stationKey',
				displayField: 'stationValue',
				fieldLabel: '是否火车站',
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
							name: 'pId',
							type: 'Integer'
						},
						{
							name: 'pName',
							type: 'String'
						}
					],
					autoload: true,
					proxy: {
						type: "ajax",
						url: '/XJManager/base/provinceList.do',
						reader: {
							type: "json"
						}
					}
				}),
				name: 'station.sProvince',
				hiddenName: 'station.sProvince',
				emptyText: '-----请选择-----',
				valueField: 'pId',
				displayField: 'pName',
				fieldLabel: '省',
				selectOnTab: false,
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}
			},
			{
				xtype: 'textfield',
				fieldLabel: '市县',
				name: 'station.sCity'
			}
		],

		buttons: [{
				text: "搜索",
				iconCls: "btn-save",
				handler: function() {
					var url = '/XJManager/base/stationList.do?1=1';
					var all = searchForm.getForm().getValues();
					var staId = all['station.sSort'];
					var staName = all['station.sName'];
					var staIsSb = all['station.sRailwaysbureau'];
					var staIsDe = all['station.sDeparturestation'];
					var staPro = all['station.sProvince'];
					var staCity = all['station.sCity'];
					if(staId != '') {
						url = url + '&station.sSort=' + staId;
					}
					if(staName != '') {
						url = url + '&station.sName=' + staName;
					}
					if(staIsSb != null) {
						url = url + '&station.sRailwaysbureau=' + staIsSb;
					}
					if(staIsDe != '') {
						url = url + '&station.sDeparturestation=' + staIsDe;
					}
					if(staPro != '') {
						url = url + '&station.sProvince=' + staPro;
					}
					if(staCity != '') {
						url = url + '&station.sCity=' + staCity;
					}
					staStore.getProxy().url = url;
					staStore.load();
				}
			},
			{
				text: "取消",
				iconCls: "reset",
				handler: function() {
					staWin.hide();
					searchForm.getForm().reset();
				}
			}
		]
	});
	var staGrid = Ext.create('Ext.grid.Panel', {
		region: 'east',
		//grid 的标题
		title: '列表',
		//引入仓库
		store: staStore,
		loadMask: true,
		listeners: {
			itemdblclick: function(dataview, record, item, index, e) {
				addkhForm.getForm().loadRecord(record);
				staWin.hide();
			}
		},
		//定义列
		columns: [{
				dataIndex: 'station.sId',
				hidden: true
			},
			{
				text: '车站编号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'station.sSort',
				flex: 0,
				width: 75,
			},
			{
				text: '车站姓名',
				sortable: true,
				dataIndex: 'station.sName',
				width: 75
			},
			{
				text: '是否发站',
				sortable: true,
				dataIndex: 'station.sRailwaysbureau',
				width: 75
			},
			{
				text: '省份',
				sortable: true,
				dataIndex: 'province.pName',
				width: 75
			},
			{
				text: '市县',
				sortable: true,
				dataIndex: 'station.sCity',
				width: 75
			},
			{
				text: '铁路局',
				sortable: true,
				dataIndex: 'stationadmin.adminName',
				width: 75
			}
		],
		stripeRows: true,
		height: 520,
		width: 1200,
		frame: false,
	});
	var staWin = Ext.create("Ext.window.Window", {
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
				items: [searchForm],
				width: 200,
				split: true,
				//是否可缩小
				collapsible: true,
				floatable: false
			},
			{
				region: 'center',
				items: [staGrid],
				width: 200,
				split: true,
				floatable: false,
				autoScroll: true
			}
		]
	});
	var stationForm = Ext.create('Ext.form.Panel', {
		region: '',
		plain: true,
		border: 0,
		bodyPadding: 5,
		width: 460,
		url: '',
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
				xtype: "textfield",
				fieldLabel: "车站编号",
				flex: 0,
				value: '',
				width: 430,
				name: 'pProductionunit',
				allowBlank: false,
			}, {
				xtype: "button",
				icon: '../../commond/icons/search.png',
				/************创建单位搜索框开始***********/
				listeners: {
					click: function() {
						staWin.show();
					}
				}
				/************创建单位搜索框结束***********/
			}]

		}, {
			xtype: 'textfield',
			fieldLabel: '是否默认到站',
		}, {
			xtype: 'textarea',
			fieldLabel: '备注',
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
	var stationWin = Ext.create("Ext.window.Window", {
		title: '搜索',
		closable: true,
		closeAction: 'hide',
		width: 500,
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
			region: '',
			title: '搜索条件',
			items: [stationForm],
			width: 500,
			split: true,
			//是否可缩小
			//collapsible: true,
			floatable: false
		}]
	})
	/*********************车站结束********************/
	var addFormgm = Ext.create('Ext.form.Panel', {
		region: '',
		plain: true,
		border: 0,
		bodyPadding: 5,
		width: 420,
		//表单发送的到的action路径
		//url: '/XJManager/base/companyList.do',
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

				xtype: "fieldcontainer",
				layout: "hbox",
				items: [{
						xtype: "textfield",
						flex: 1,
						fieldLabel: '煤种',
						readOnly: 'true',
						value: '',
						//必填项
						afterLabelTextTpl: required,
						//pProductionunit
						name: 'cName',
						allowBlank: false,
					},
					{
						xtype: "button",
						icon: '../../common/shared/icons/fam/search.png',
						/************创建单位搜索框开始***********/
						listeners: {
							click: function() {
								//创建一个grid
								var agridchanpin = Ext.create('Ext.grid.Panel', {
									region: 'east',
									title: '单位列表',
									store: store,
									loadMask: true,
									listeners: {
										itemdblclick: function(dataview, record, item, index, e) {
											proForm.getForm().loadRecord(record);
											newWin.hide();
										}
									},
									//定义列
									columns: [{
											id: 'coId',
											text: '产品编号',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: 'coId',
											flex: 0,
											width: 75,
										},
										{
											text: '产品名称',
											sortable: true,
											dataIndex: 'coShort',
											width: 75
										},
										{
											text: '煤种',
											sortable: true,
											dataIndex: 'coName',
											width: 75
										},
										{
											text: '品种',
											sortable: true,
											dataIndex: 'coPhone',
											width: 75
										},
										{
											text: '计量单位',
											sortable: true,
											dataIndex: 'coPostcode',
											width: 75
										},
										{
											text: '生产单位',
											sortable: true,
											dataIndex: 'coFax',
											width: 75
										},
										{
											text: '适用范围',
											sortable: true,
											dataIndex: 'coLeader',
											width: 75
										},
										{
											text: '是否可用',
											sortable: true,
											dataIndex: 'coAddress',
											width: 75
										}
									],
									stripeRows: true,
									height: 320,
									width: 1200,
									frame: false,
								});
								//创建一个搜索表单
								var searchFormchanpin = Ext.create('Ext.form.Panel', {
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
											fieldLabel: '产品编号',
											name: 'coId'
										},
										{

											xtype: 'textfield',
											fieldLabel: '产品名称',
											name: 'coId'
										},
										{
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
											hiddenName: 'pCoaltype',
											// 提交到后台的input的name ，对应下面store里的''id，必须要填
											emptyText: '-----请选择-----',
											//map中的键
											valueField: '',
											//map中的值 
											displayField: 'coal',
											//选中下拉框后再点击面板就会多出一行,不知道有卵子用
											/*plugins: [ Ext.ux.FieldReplicator ],*/
											fieldLabel: '煤种',
											queryMode: 'local',
											//数据模式,local代表本地数据模式
											//tab键是否可以选择当前突出项
											selectOnTab: false,
											/****下拉框不可编辑*****/
											typeAhead: false,
											editable: false,
											onReplicate: function() {
												this.getStore().clearFilter();
											}
										},
										{

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
											hiddenName: 'pCoaltype',
											// 提交到后台的input的name ，对应下面store里的''id，必须要填
											emptyText: '-----请选择-----',
											//map中的键
											valueField: '',
											//map中的值 
											displayField: 'coal',
											//选中下拉框后再点击面板就会多出一行,不知道有卵子用
											/*plugins: [ Ext.ux.FieldReplicator ],*/
											fieldLabel: '品种',
											queryMode: 'local',
											//数据模式,local代表本地数据模式
											//tab键是否可以选择当前突出项
											selectOnTab: false,
											/****下拉框不可编辑*****/
											typeAhead: false,
											editable: false,
											onReplicate: function() {
												this.getStore().clearFilter();
											}

										},
										{

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
											hiddenName: 'pCoaltype',
											// 提交到后台的input的name ，对应下面store里的''id，必须要填
											emptyText: '-----请选择-----',
											//map中的键
											valueField: '',
											//map中的值 
											displayField: 'coal',
											//选中下拉框后再点击面板就会多出一行,不知道有卵子用
											/*plugins: [ Ext.ux.FieldReplicator ],*/
											fieldLabel: '适用范围',
											queryMode: 'local',
											//数据模式,local代表本地数据模式
											//tab键是否可以选择当前突出项
											selectOnTab: false,
											/****下拉框不可编辑*****/
											typeAhead: false,
											editable: false,
											onReplicate: function() {
												this.getStore().clearFilter();
											}

										},
										{

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
											hiddenName: 'pCoaltype',
											// 提交到后台的input的name ，对应下面store里的''id，必须要填
											emptyText: '-----请选择-----',
											//map中的键
											valueField: '',
											//map中的值 
											displayField: 'coal',
											//选中下拉框后再点击面板就会多出一行,不知道有卵子用
											/*plugins: [ Ext.ux.FieldReplicator ],*/
											fieldLabel: '是否可用',
											queryMode: 'local',
											//数据模式,local代表本地数据模式
											//tab键是否可以选择当前突出项
											selectOnTab: false,
											/****下拉框不可编辑*****/
											typeAhead: false,
											editable: false,
											onReplicate: function() {
												this.getStore().clearFilter();
											}

										}
									],

									buttons: [{
											text: "搜索",
											iconCls: "btn-save",
											handler: function() {
												var url = '/XJManager/base/companyList.do?1=1';
												var id = Ext.getCmp('id').getValue();
												var short = Ext.getCmp('short').getValue();
												var phone = Ext.getCmp('phone').getValue();
												var fax = Ext.getCmp('fax').getValue();
												var postcode = Ext.getCmp('postcode').getValue();
												var leader = Ext.getCmp('leader').getValue();
												if(id != '') {
													url = url + '&coId=' + id;
												}
												if(short != '') {
													url = url + '&coShort=' + short;
												}
												if(phone != '') {
													phone = url + '&coPhone=' + phone;
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

												addStore.getProxy().url = url;
												addStore.load();
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

								var newWinchanpin = Ext.create("Ext.window.Window", {
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
											items: [searchFormchanpin],
											width: 200,
											split: true,
											//是否可缩小
											collapsible: true,
											floatable: false
										},
										{
											region: 'center',
											items: [agridchanpin],
											width: 200,
											split: true,
											floatable: false,
											autoScroll: true
										}
									]
								}).show();

							}
						}
						/************创建单位搜索框结束***********/
					}
				]

			},
			{

				xtype: 'textfield',
				fieldLabel: '存煤限量',
				afterLabelTextTpl: required,
				name: 'coId'
			},
			{

				xtype: 'textarea',
				fieldLabel: '存煤限额',
				afterLabelTextTpl: required,
				name: 'coId'
			},
		],

		buttons: [{
				text: "搜索",
				iconCls: "btn-save",
				handler: function() {}
			},
			{
				text: "重置",
				iconCls: "reset",
				handler: function() {}
			}
		]
	});
	var addWingm = Ext.create("Ext.window.Window", {
		title: '',
		closable: true,
		closeAction: 'hide',
		width: 480,
		height: 520,
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
			region: '',
			title: '',
			items: [addFormgm],
			split: true,
			//是否可缩小
			floatable: false
		}]
	});
	//添加客户联系人表单
	var addFormkhlxrq = Ext.create('Ext.form.Panel', {
		region: '',
		plain: true,
		border: 0,
		bodyPadding: 5,
		width: 420,
		title: '增加联系人',
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
				name: 'lId',
				hidden: true
			},
			{
				xtype: 'textfield',
				fieldLabel: '姓名',
				name: 'lName',
				afterLabelTextTpl: required,
			},
			{
				xtype: 'textfield',
				name: 'lCid',
				hidden: true
			},
			{

				xtype: 'textfield',
				fieldLabel: '职务',
				name: 'lDuty'
			},
			{

				xtype: 'textfield',
				fieldLabel: '电话',
				name: 'lPhone'
			},
			{
				xtype: 'textfield',
				fieldLabel: '手机',
				name: 'lTelephone'
			},
			{

				xtype: 'textfield',
				fieldLabel: '传真',
				name: 'lFax'
			},

			{

				xtype: 'textfield',
				fieldLabel: 'E-Mail',
				name: 'lEmail'
			},
			{
				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: [{
							name: 'sexkey',
							value: 'String'
						},
						{
							name: 'sexValue',
							value: 'String'
						}
					],
					data: [
						['男', '男'],
						['女', '女'],
					]
				}),
				name: 'lSex',
				hiddenName: 'lSex', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				valueField: 'sexkey',
				displayField: 'sexValue',
				fieldLabel: '性别',
				queryMode: 'local',
				selectOnTab: false,
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}
			},
			{

				xtype: 'textfield',
				fieldLabel: '身份证号',
				name: 'lCard'
			},
			{

				xtype: 'textfield',
				fieldLabel: '籍贯',
				name: 'lBirthplace'
			},
			{

				xtype: 'textfield',
				fieldLabel: '住址',
				name: 'lAddress'
			},
			{
				xtype: 'numberfield',
				fieldLabel: '年龄',
				name: 'lAge'
			},
			{
				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: [{
							name: 'edukey',
							value: 'String'
						},
						{
							name: 'eduValue',
							value: 'String'
						}
					],
					data: [
						['小学', '小学'],
						['初中', '初中'],
						['高中', '高中'],
						['大学', '大学'],
						['研究生及以上', '研究生及以上'],
					]
				}),
				name: 'lEducation',
				hiddenName: 'lEducation', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				valueField: 'edukey',
				displayField: 'eduValue',
				fieldLabel: '教育程度',
				queryMode: 'local',
				selectOnTab: false,
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}
			},
			{

				xtype: 'numberfield',
				fieldLabel: '从事煤炭销售时间(年)',
				name: 'lIntime'
			},
			{

				xtype: 'textarea',
				fieldLabel: '描述',
				name: 'lDescription'
			}
		],

		buttons: [{
				text: "提交",
				iconCls: "btn-save",
				handler: function() {
					addFormkhlxrq.submit({
						success: function() {
							addWinkhlxrq.hide();
							linkmanStore.reload();
						},
						failure: function(proForm, action) {
							var data = Ext.decode(action.response.responseText);
							Ext.Msg.alert('失败', data.msg);
						}
					});

				}
			},
			{
				text: "重置",
				iconCls: "reset",
				handler: function() {}
			}
		]
	});
	//添加客户联系人面板
	var addWinkhlxrq = Ext.create("Ext.window.Window", {
		title: '',
		closable: true,
		closeAction: 'hide',
		width: 480,
		height: 520,
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
	});
	//客户联系人store
	var linkmanStore = Ext.create('Ext.data.ArrayStore', {
		fields: [{
				name: 'lId',
				type: 'String'
			}, {
				name: 'lName',
				type: 'String'
			}, {
				name: 'lDuty',
				type: 'String'
			}, {
				name: 'lPhone',
				type: 'String'
			}, {
				name: 'lId',
				type: 'String'
			}, {
				name: 'lFax',
				type: 'String'
			}, {
				name: 'lTelephone',
				type: 'String'
			},
			{
				name: 'lEmail',
				type: 'String'
			}, {
				name: 'lSex',
				type: 'String'
			}, {
				name: 'lCard',
				type: 'String'
			}, {
				name: 'lBirthplace',
				type: 'String'
			}, {
				name: 'lAddress',
				type: 'String'
			}, {
				name: 'lAge',
				type: 'Byte'
			},
			{
				name: 'lEducation',
				type: 'String'
			}, {
				name: 'lIntime',
				type: 'Byte'
			}, {
				name: 'lCid',
				type: 'Integer'
			}, {
				name: 'lDescription',
				type: 'String'
			}
		],
		autoload: true,
		remoteSort: true,
		pageSize: 5,
		proxy: {
			type: "ajax",
			url: '',
			reader: {
				//root:'lAddress',
				type: "json"
			}
		}
	});
	var bankStore = Ext.create('Ext.data.ArrayStore', {
		fields: [{
			name: 'bId',
			type: 'String'
		}, {
			name: 'bName',
			type: 'String'
		}, {
			name: 'bAccount',
			type: 'String'
		}, {
			name: 'bCid',
			type: 'Integer'
		}, {
			name: 'bRemark',
			type: 'String'
		}],
		autoload: true,
		remoteSort: true,
		pageSize: 5,
		proxy: {
			type: "ajax",
			url: '',
			reader: {
				type: "json"
			}
		}
	});
	//添加银行form
	var addFormBank = Ext.create('Ext.form.Panel', {
		region: '',
		plain: true,
		border: 0,
		bodyPadding: 5,
		width: 420,
		fieldDefaults: {
			labelWidth: 70,
			anchor: '100%'
		},
		layout: {
			type: 'vbox',
			align: 'stretch' // Child items are stretched to full width
		},
		items: [{
				xtype: 'textfield',
				name: 'bId',
				hidden: true
			},
			{
				xtype: 'textfield',
				name: 'bCid',
				hidden: true
			},
			{
				xtype: 'textfield',
				fieldLabel: '银行名称',
				name: 'bName',
				afterLabelTextTpl: required,
			},
			{

				xtype: 'textfield',
				fieldLabel: '银行账号',
				name: 'bAccount'
			},
			{

				xtype: 'textarea',
				fieldLabel: '备注',
				name: 'bRemark'
			},
		],

		buttons: [{
				text: "添加",
				iconCls: "btn-save",
				handler: function() {
					addFormBank.submit({
						success: function() {
							addWinBank.hide();
							bankStore.reload();
						},
						failure: function(proForm, action) {
							var data = Ext.decode(action.response.responseText);
							Ext.Msg.alert('失败', data.msg);
						}
					});
				}
			},
			{
				text: "重置",
				iconCls: "reset",
				handler: function() {
					addFormBank.getForm().reset();
				}
			}
		]
	});
	var addWinBank = Ext.create("Ext.window.Window", {
		title: '',
		closable: true,
		closeAction: 'hide',
		width: 480,
		height: 520,
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
	});
	//筛选框 筛选的表单
	var searchFormpanel = Ext.create('Ext.form.Panel', {
		region: 'west',
		plain: true,
		border: 0,
		borderColor: 'red',
		bodyPadding: 1,
		width: 300,
		url: '',
		fieldDefaults: {
			labelWidth: 70,
			anchor: '100%'
		},
		layout: {
			type: 'vbox',
			align: 'stretch' // Child items are stretched to full width
		},

		items: [{
				xtype: 'numberfield',
				fieldLabel: '客户编号',
				name: 'customer.cId',
			},
			{
				xtype: 'textfield',
				fieldLabel: '客户简称',
				name: 'customer.cShort',
			},
			{
				xtype: 'textfield',
				fieldLabel: '联系人',
				name: 'customer.cLinkman',
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
				xtype: 'textfield',
				fieldLabel: '税号',
				name: 'customer.cTaxnumber'
			},
			{
				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: [{
							name: 'ideKey',
							type: 'Integer'
						},
						{
							name: 'ideValue',
							type: 'String'
						}
					],
					data: [
						[1, '客户'],
						[2, '网点'],
						[3, '收货单位']
					]
				}),
				name: 'customer.cIdentifying',
				hiddenName: 'customer.cIdentifying',
				emptyText: '-----请选择-----',
				valueField: 'ideKey',
				displayField: 'ideValue',
				fieldLabel: '客户标识',
				queryMode: 'local',
				selectOnTab: false,
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}

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
					text: '搜索',
					handler: function() {
						var url = '/XJManager/base/customerList.do?1=1';
						var all = searchFormpanel.getForm().getValues();
						var searchId = all['customer.cId'];
						var searchShort = all['customer.cShort'];
						var searchLinkman = all['customer.cLinkman'];
						var searchCompany = all['customer.cCompanytype'];
						var searchType = all['customer.cType'];
						var searchIid = all['customer.cIid'];
						var searchDepart = all['customer.cDepartment'];
						var searchTax = all['customer.cTaxnumber'];
						var searchIde = all['customer.cIdentifying'];
						if(searchId != null && searchId != '') {
							url = url + '&customer.cId=' + searchId;
						}
						if(searchShort != null && searchShort != '') {
							url = url + '&customer.cShort=' + searchShort;
						}
						if(searchLinkman != null && searchLinkman != '') {
							url = url + '&customer.cLinkman=' + searchLinkman;
						}
						if(searchCompany != null && searchCompany != '') {
							url = url + '&customer.cCompanytype=' + searchCompany;
						}
						if(searchType != null && searchType != '') {
							url = url + '&customer.cType=' + searchType;
						}
						if(searchIid != null && searchIid != '') {
							url = url + '&customer.cIid=' + searchIid;
						}
						if(searchDepart != null && searchDepart != '') {
							url = url + '&customer.cDepartment=' + searchDepart;
						}
						if(searchTax != null && searchTax != '') {
							url = url + '&customer.cTaxnumber=' + searchTax;
						}
						if(searchIde != null && searchIde != '') {
							url = url + '&customer.cIdentifying=' + searchIde;
						}
						store.getProxy().url = url;
						store.load();
						panelnew.hide();
					}
				},
				{
					minWidth: 80,
					text: '取消'
				}
			]
		}]

	});
	//筛选面板
	var panelnew = Ext.create("Ext.panel.Panel", {
		floating: true,
		title: '筛选',
		closable: true,
		closeAction: 'hide',
		width: 320,
		height: 400,
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
	});

	//省份store
	var provinceStore = Ext.create('Ext.data.ArrayStore', {
		fields: [{
				name: 'pId',
				type: 'Integer'
			},
			{
				name: 'pName',
				type: 'String'
			}
		],
		autoload: true,
		proxy: {
			type: "ajax",
			url: '/XJManager/base/provinceList.do',
			reader: {
				type: "json"
			}
		}
	});
	//创建一个grid
	Ext.define('companyJG', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
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

	Ext.tip.QuickTipManager.init();

	/******************************添加客户form开始************************/
	var addkhForm = Ext.create('Ext.form.Panel', {
		autoScroll: true,
		region: 'west',
		plain: true,
		autoScroll: true,
		//height:'auto',
		width: 1000,
		layout: 'form',
		url: '',
		fieldDefaults: {
			labelAlign: 'left',
			msgTarget: 'qtip',
			anchor: '100%'
		},
		bodyStyle: {
			background: '#DFE9F6',
			padding: '10px',
			border: 1
		},
		items: [
			//////////////////////////////////////////////////////////////////////
			{
				layout: 'column',
				frame: true,
				items: [{
						id: 'customerFormId',
						xtype: 'numberfield',
						fieldLabel: '客户编号',
						afterLabelTextTpl: required,
						name: 'customer.cId',
						width: 200
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
						fieldLabel: '&nbsp&nbsp客户类型',
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
						fieldLabel: '&nbsp&nbsp部别',
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
						fieldLabel: '&nbsp&nbsp企业性质',
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
						xtype: 'textfield',
						fieldLabel: '客户全称',
						afterLabelTextTpl: required,
						name: 'customer.cName',
						width: 400
					},
					{
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp客户简称',
						afterLabelTextTpl: required,
						name: 'customer.cShort',
						width: 400
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
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp经营范围',
						width: 200,
						name: 'customer.cScope'
					},
					{
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp法人代表',
						width: 200,
						name: 'customer.cLegal'
					},
					{
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp委托代表',
						width: 200,
						name: 'customer.cConsignor'
					},
					{
						xtype: 'textfield',
						fieldLabel: '开户行',
						width: 200,
						name: 'customer.cBank'
					},
					{
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp银行账号',
						width: 200,
						name: 'customer.cAccount'
					},
					{

						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [{
									name: 'creditKey',
									type: 'Integer'
								},
								{
									name: 'creditValue',
									type: 'String'
								}
							],
							data: [
								[1, 'A'],
								[2, 'AA'],
								[3, 'AAA'],
								[4, 'BBB'],
								[5, 'BB'],
								[6, 'B'],

							]
						}),
						name: 'customer.cCredit',
						hiddenName: 'customer.cCredit',
						// 提交到后台的input的name ，对应下面store里的''id，必须要填
						emptyText: '-----请选择-----',
						valueField: 'creditKey',
						displayField: 'creditValue',
						fieldLabel: '&nbsp&nbsp信用等级',
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
						xtype: 'numberfield',
						fieldLabel: '&nbsp&nbsp信用额度',
						width: 200,
						name: 'customer.cLimit'
					},
					{
						xtype: 'numberfield',
						fieldLabel: '注册资金',
						width: 200,
						name: 'customer.cRegisteredcapital'
					},
					{

						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp税号',
						width: 200,
						name: 'customer.cTaxnumber'
					},
					{
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp地址',
						width: 200,
						name: 'customer.cCityaddress'
					},
					{
						xtype: 'textfield',
						name: 'station.sSort',
						hidden: true
					},
					{
						xtype: 'textfield',
						name: 'customer.cSid',
						hidden: true
					},
					{
						xtype: "fieldcontainer",
						layout: "hbox",
						items: [{
								xtype: "textfield",
								fieldLabel: "&nbsp&nbsp到站",
								flex: 1,
								width: 178,
								value: '',
								name: 'station.sName',
								readOnly: true
							},
							{
								xtype: "button",
								icon: '../../common/shared/icons/fam/search.png',
								listeners: {
									click: function() {
										staWin.show();
									}
								}
							}
						]

					},
					{
						xtype: 'textfield',
						fieldLabel: '邮编',
						width: 200,
						name: 'customer.cPostcode'
					},
					{
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp联系人',
						width: 200,
						name: 'customer.cLinkman'
					},
					{
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp电话',
						width: 200,
						name: 'customer.cPhone'
					},
					{
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp传真',
						width: 200,
						name: 'customer.cFax'
					},
					{
						xtype: 'textfield',
						fieldLabel: '主页',
						width: 200,
						name: 'customer.cHomepage'
					},
					{
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbspE-mail',
						width: 200,
						name: 'customer.cEmail'
					},
					{

						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [{
									name: 'contryKey',
									type: 'String'
								},
								{
									name: 'contryValue',
									type: 'String'
								}
							],
							data: [
								['1', '中国'],
								['2', '其他'],
							]
						}),
						name: 'customer.cCountry',
						hiddenName: 'customer.cCountry',
						// 提交到后台的input的name ，对应下面store里的''id，必须要填
						emptyText: '-----请选择-----',
						valueField: 'contryKey',
						displayField: 'contryValue',
						fieldLabel: '&nbsp&nbsp国别',
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
						store: provinceStore,
						name: 'customer.cProvince',
						hiddenName: 'customer.cProvince',
						// 提交到后台的input的name ，对应下面store里的''id，必须要填
						emptyText: '-----请选择-----',
						valueField: 'pId',
						displayField: 'pName',
						fieldLabel: '&nbsp&nbsp省份',
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
						xtype: 'textfield',
						fieldLabel: '市县',
						width: 400,
					},
					{

						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [{
									name: 'eleKey',
									type: 'Integer'
								},
								{
									name: 'eleValue',
									type: 'String'
								}
							],
							data: [
								[1, '是'],
								[2, '否'],
							]
						}),
						name: 'customer.cIselectricity',
						hiddenName: 'customer.cIselectricity',
						// 提交到后台的input的name ，对应下面store里的''id，必须要填
						emptyText: '-----请选择-----',
						valueField: 'eleKey',
						displayField: 'eleValue',
						fieldLabel: '&nbsp&nbsp电煤标识',
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
									name: 'stateKey',
									type: 'Integer'
								},
								{
									name: 'stateValue',
									type: 'String'
								}
							],
							data: [
								[1, '使用'],
								[2, '停用'],
							]
						}),
						name: 'customer.cState',
						hiddenName: 'customer.cState',
						// 提交到后台的input的name ，对应下面store里的''id，必须要填
						emptyText: '-----请选择-----',
						valueField: 'stateKey',
						displayField: 'stateValue',
						fieldLabel: '&nbsp&nbsp状态',
						afterLabelTextTpl: required,
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

						xtype: "fieldcontainer",
						layout: "hbox",
						items: [{
								xtype: "textfield",
								fieldLabel: "内部机构编号",
								width: 178,
								flex: 0,
								value: '',
								name: 'coId',
								readOnly: true
							},
							{
								xtype: "button",
								icon: '../../common/shared/icons/fam/search.png',
								listeners: {
									click: function() {
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
											listeners: {
												itemdblclick: function(dataview, record, item, index, e) {
													addkhForm.getForm().loadRecord(record);
													companyWin.hide();
												}
											},
											//定义列
											columns: [{
													id: 'coId',
													text: '机构编号',
													sortable: true,
													//与定义的类中的属性匹配
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
											listeners: {
												'hide': function() {
													this.removeAll();
												}
											},
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
										}).show();
									}
								}
							}
						]

					},
					{
						xtype: "textfield",
						fieldLabel: '&nbsp&nbsp内部机构名称',
						width: 200,
						name: 'coName',
						readOnly: true
					},
					{

						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [{
									name: 'ideKey',
									type: 'Integer'
								},
								{
									name: 'ideValue',
									type: 'String'
								}
							],
							data: [
								[1, '客户'],
								[2, '网点'],
								[3, '收货单位']
							]
						}),
						name: 'customer.cIdentifying',
						hiddenName: 'customer.cIdentifying',
						// 提交到后台的input的name ，对应下面store里的''id，必须要填
						emptyText: '-----请选择-----',
						valueField: 'ideKey',
						displayField: 'ideValue',
						fieldLabel: '&nbsp&nbsp客户标识',
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
						xtype: 'textarea',
						fieldLabel: '质量认证情况',
						width: 400,
						heigh: 45,
						name: 'cQuality'
					},
					{
						xtype: 'textarea',
						fieldLabel: '&nbsp&nbsp适用说明',
						width: 400,
						heigh: 45,
						name: 'cCreditdeclare'
					},
					{
						xtype: 'textarea',
						fieldLabel: '备注',
						width: 800,
						heigh: 45,
						name: 'customer.cRemark'
					},

				],
			},
			//////////////////////////////////////////////////////////////////////
		],
	});
	/******************************添加客户form结束************************/

	/******************************添加客户面板开始************************/
	var addkhWin = new Ext.Window({
		modal: true,
		autoscroll: true,
		items: [],
		closeAction: 'close',
		buttons: [{
				text: "保存",
				iconCls: "btn-save",
				handler: function() {
					addkhForm.submit({
						success: function() {
							addkhWin.hide();
							store.reload();
						},
						failure: function() {
							Ext.Msg.alert('添加失败', '添加失败,请重试!');
						}
					});
				}
			},
			{
				text: "重置",
				iconCls: "reset",
				handler: function() {
					addkhForm.form().reset();
				}
			}
		]
	});
	/******************************添加客户面板结束************************/

	Ext.tip.QuickTipManager.init();

	var store = Ext.create('Ext.data.Store', {
		model: 'Customer',
		remoteSort: true,
		//每页显示的数据
		pageSize: 10,
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

	//主界面grid
	var grid = Ext.create('Ext.grid.Panel', {
		title: '客户信息管理',
		store: store,
		selModel: sm,
		//解决布局乱掉的问题
		stateful: true,
		collapsible: true,
		//允许combo域同时保持多个值
		multiSelect: true,
		//定义列
		columns: [{
				text: '客户编号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'customer.cId',
				flex: 0,
				width: 75,
			},
			{
				text: '客户全称',
				sortable: true,
				dataIndex: 'customer.cName',
				width: 75,
			},
			{
				text: '客户简称',
				sortable: true,
				dataIndex: 'customer.cShort',
				width: 75,
			},
			{
				text: '电煤标识',
				sortable: true,
				dataIndex: 'customer.cIselectricity',
				width: 75,
				renderer: function(value) {
					if(value == 1) {
						return "是";
					} else {
						return "否";
					}
				}
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
			{
				text: '客户标识',
				sortable: true,
				dataIndex: 'customer.cIdentifying',
				width: 75,
				renderer: function(value) {
					if(value == 1) {
						return "客户";
					} else if(value == 2) {
						return "网点";
					} else if(value == 3) {
						return "收货单位";
					}
				}
			},
			{
				text: '状态',
				sortable: true,
				dataIndex: 'customer.cState',
				width: 75,
				renderer: function(value) {
					if(value == 1) {
						return "使用";
					} else {
						return "停用";
					}
				}
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
						Ext.MessageBox.confirm("请确认", "确定删除吗？",
							function(button, text) {
								if(button == 'yes') {
									//获取对应行的节点
									var node = grid.getNode(rowIndex);
									//获取对应节点的数据model
									var rec = grid.getRecord(node);
									//获取选中行的pid属性
									var id = rec.get('customer.cId');
									Ext.Ajax.request({
										url: '/XJManager/base/deleteCustomer.do',
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
									store.removeAt(rowIndex);
								}
							});
					}
				}]
			}
		],

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
								searchFormpanel.getForm().reset();
								panelnew.show();
							}
						}
					},
					{
						text: '添加',
						tooltip: 'add',
						iconCls: 'add',
						listeners: {
							'click': function() {
								addkhForm.form.reset();
								Ext.getCmp('customerFormId').readOnly = false;
								provinceStore.load();
								//通过name获取form组件的值,然后给其设定初始值
								addkhForm.getForm().findField('customer.cType').setValue(1);
								addkhForm.getForm().findField('customer.cDepartment').setValue(1);
								addkhForm.getForm().findField('customer.cCompanytype').setValue(1);
								addkhForm.getForm().findField('customer.cIid').setValue(1);
								addkhForm.getForm().findField('customer.cCredit').setValue(1);
								addkhForm.getForm().findField('customer.cCountry').setValue('1');
								addkhForm.getForm().findField('customer.cProvince').setValue(1);
								addkhForm.getForm().findField('customer.cIselectricity').setValue(1);
								addkhForm.getForm().findField('customer.cState').setValue(1);
								addkhForm.getForm().findField('customer.cIdentifying').setValue(1);
								addkhForm.getForm().url = '/XJManager/base/addCustomer.do';
								addkhWin.add(addkhForm);
								addkhWin.show();
							}
						}
					},
					'-', {
						text: '修改',
						tooltip: ' edit',
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
								addkhForm.form.reset();
								provinceStore.load();
								Ext.getCmp('customerFormId').readOnly = true;
								addkhWin.add(addkhForm);
								addkhWin.show();

								addkhForm.getForm().loadRecord(record[0]);
								//客户数据库中的province省数据格式和province表中的不符,做一下转换才能回显
								addkhForm.getForm().findField('customer.cProvince').setValue(parseInt(record[0].get('customer.cProvince')));
								addkhForm.getForm().url = '/XJManager/base/updateCustomer.do';
								grid.getSelectionModel().clearSelections();
								grid.getView().refresh();
							}

						}
					},
					'-', {
						itemId: 'removeButton',
						text: '删除',
						tooltip: 'remove',
						iconCls: 'remove',
						listeners: {
							'click': function() {
								var record = grid.getSelectionModel().getSelection();
								if(record == undefined || record == '') {
									Ext.Msg.alert("错误", "请选择至少一条数据");
									return;
								} else {
									Ext.MessageBox.confirm("请确认", "确定删除吗？",
										function(button, text) {
											if(button == 'yes') {
												var url = "/XJManager/base/deleteCustomer.do";
												var param = "";
												for(var i = 0; i < record.length; i++) {
													param = param + record[i].get("customer.cId") + "-";
												}
												Ext.Ajax.request({
													url: url,
													params: {
														'ids': param
													},
													method: 'POST',
													success: function(response, options) {
														Ext.MessageBox.alert('成功', '删除成功');
														store.reload();
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
					},
					'-', {
						text: '详细信息',
						tooltip: 'detailed',
						iconCls: 'detailed',
						listeners: {
							click: function() {
								var win;
								//详细信息主面板
								var searchForm1 = Ext.create('Ext.form.Panel', {
									id: 'detailedForm',
									region: 'west',
									plain: true,
									border: false,
									bodyPadding: false,
									width: 1000,
									layout: 'form',
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
													fieldLabel: '客户编号',
													name: 'customer.cId',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '客户类型',
													name: 'customer.cType',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '电煤标识',
													name: 'customer.cIselectricity',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '客户全称',
													name: 'customer.cName',
													readOnly: true,
													width: 450
												},
												{
													xtype: 'displayfield',
													fieldLabel: '客户简称',
													name: 'customer.cShort',
													readOnly: true,
													width: 450
												},
												{
													xtype: 'displayfield',
													fieldLabel: '企业性质',
													name: 'customer.cCompanytype',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '所属行业',
													name: 'customer.cIid',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '经营范围',
													name: 'customer.cScope',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '部别',
													name: 'customer.cDepartment',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '法人代表',
													name: 'customer.cLegal',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '委托代表',
													name: 'customer.cConsignor',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '开户行',
													name: 'customer.cBank',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '银行账号',
													name: 'customer.cAccount',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '注册资金',
													name: 'customer.cRegisteredcapital',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '信用等级',
													name: 'customer.cCredit',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '信用额度',
													name: 'customer.cLimit',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '税号',
													readOnly: true,
													name: 'customer.cTaxnumber',

													width: 300

												},
												{
													xtype: 'displayfield',
													fieldLabel: '国别',
													value: '',
													readOnly: true,
													name: 'customer.cCountry',
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '省份',
													readOnly: true,
													name: 'provinceName',
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '市县',
													readOnly: true,
													name: 'customer.cCityaddress',
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '地址',
													value: '测试',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '邮编',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '到站',
													readOnly: true,
													name: 'customer.cSid',
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '传真',
													value: '测试',
													readOnly: true,
													name: 'customer.cFax',
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '主页',
													readOnly: true,
													name: 'customer.cHomepage',
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: 'E-Mail',
													readOnly: true,
													name: 'customer.cEmail',
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '质量认证情况',
													name: 'customer.cQuality',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '信用说明',
													readOnly: true,
													name: 'customer.cCreditdeclare',
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '状态',
													readOnly: true,
													name: 'customer.cState',
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '内部机构编号',
													name: 'customer.cInnerid',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '内部机构名称',
													name: 'customer.cInnername',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '客户标识',
													readOnly: true,
													name: 'customer.cIdentifying',
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '录入单位',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '录入人',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '录入日期',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'textarea',
													fieldLabel: '备注',
													disabled: true,
													name: 'customer.cRemark',
													width: 900
												}
											],
										},
										//////////////////////////////////////////////////////////////////////
									],
								});
								var record = grid.getSelectionModel().getSelection();
								if(record == undefined || record == '') {
									Ext.Msg.alert('信息', '请选择一条数据');
									return;
								}
								if(record.length >= 2) {
									Ext.Msg.alert('信息', '只可以选择一条数据');
									return;
								}
								searchForm1.getForm().loadRecord(record[0]);
								grid.getSelectionModel().clearSelections();
								grid.getView().refresh();
								if(record[0].get('customer.cType') == 1) {
									searchForm1.getForm().findField('customer.cType').setValue('重点客户');
								} else if(record[0].get('customer.cType') == 2) {
									searchForm1.getForm().findField('customer.cType').setValue('一般客户');
								}

								if(record[0].get('customer.cIselectricity') == 1) {
									searchForm1.getForm().findField('customer.cIselectricity').setValue('是');
								} else if(record[0].get('customer.cIselectricity') == 2) {
									searchForm1.getForm().findField('customer.cIselectricity').setValue('否');
								}

								if(record[0].get('customer.cCompanytype') == 1) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue("股份制有限公司");
								} else if(record[0].get('customer.cCompanytype') == 2) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue('国有');
								} else if(record[0].get('customer.cCompanytype') == 3) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue("国有股份制");
								} else if(record[0].get('customer.cCompanytype') == 4) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue("合资公司");
								} else if(record[0].get('customer.cCompanytype') == 5) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue("集体");
								} else if(record[0].get('customer.cCompanytype') == 6) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue("民营");
								} else if(record[0].get('customer.cCompanytype') == 7) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue("私营");
								} else if(record[0].get('customer.cCompanytype') == 8) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue("有限公司");
								} else if(record[0].get('customer.cCompanytype') == 9) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue("有限责任公司");
								} else if(record[0].get('customer.cCompanytype') == 10) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue("中外合资公司");
								}

								if(record[0].get('customer.cIid') == 1) {
									searchForm1.getForm().findField('customer.cIid').setValue("电力");
								} else if(record[0].get('customer.cIid') == 2) {
									searchForm1.getForm().findField('customer.cIid').setValue("化工");
								} else if(record[0].get('customer.cIid') == 3) {
									searchForm1.getForm().findField('customer.cIid').setValue("建材");
								} else if(record[0].get('customer.cIid') == 4) {
									searchForm1.getForm().findField('customer.cIid').setValue("商业");
								} else if(record[0].get('customer.cIid') == 5) {
									searchForm1.getForm().findField('customer.cIid').setValue("石化");
								} else if(record[0].get('customer.cIid') == 6) {
									searchForm1.getForm().findField('customer.cIid').setValue("冶金");
								} else if(record[0].get('customer.cIid') == 7) {
									searchForm1.getForm().findField('customer.cIid').setValue("其他");
								}

								if(record[0].get('customer.cDepartment') == 1) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("大唐");
								} else if(record[0].get('customer.cDepartment') == 2) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("国电");
								} else if(record[0].get('customer.cDepartment') == 3) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("国资委");
								} else if(record[0].get('customer.cDepartment') == 4) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("华电");
								} else if(record[0].get('customer.cDepartment') == 5) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("华能");
								} else if(record[0].get('customer.cDepartment') == 6) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("化工部");
								} else if(record[0].get('customer.cDepartment') == 7) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("省电燃");
								} else if(record[0].get('customer.cDepartment') == 8) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("铁道部");
								} else if(record[0].get('customer.cDepartment') == 9) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("皖能");
								} else if(record[0].get('customer.cDepartment') == 10) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("冶金部");
								} else if(record[0].get('customer.cDepartment') == 11) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("中电投");
								} else if(record[0].get('customer.cDepartment') == 12) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("中石化");
								} else if(record[0].get('customer.cDepartment') == 13) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("其他");
								}

								if(record[0].get('customer.cState') == 1) {
									searchForm1.getForm().findField('customer.cState').setValue("使用");
								} else if(record[0].get('customer.cState') == 2) {
									searchForm1.getForm().findField('customer.cState').setValue("停用");
								}

								if(record[0].get('customer.cCredit') == 1) {
									searchForm1.getForm().findField('customer.cCredit').setValue('A');
								} else if(record[0].get('customer.cCredit') == 2) {
									searchForm1.getForm().findField('customer.cCredit').setValue("AA");
								} else if(record[0].get('customer.cCredit') == 3) {
									searchForm1.getForm().findField('customer.cCredit').setValue("AAA");
								} else if(record[0].get('customer.cCredit') == 4) {
									searchForm1.getForm().findField('customer.cCredit').setValue("BBB");
								} else if(record[0].get('customer.cCredit') == 5) {
									searchForm1.getForm().findField('customer.cCredit').setValue("BB");
								} else if(record[0].get('customer.cCredit') == 6) {
									searchForm1.getForm().findField('customer.cCredit').setValue("B");
								}

								if(record[0].get('customer.cCountry') == 1) {
									searchForm1.getForm().findField('customer.cCountry').setValue('中国');
								} else if(record[0].get('customer.cCountry') == 2) {
									searchForm1.getForm().findField('customer.cCountry').setValue("其他");
								}

								if(record[0].get('customer.cIdentifying') == 1) {
									searchForm1.getForm().findField('customer.cCountry').setValue("客户");
								} else if(record[0].get('customer.cIdentifying') == 2) {
									searchForm1.getForm().findField('customer.cCountry').setValue("网点");
								} else if(record[0].get('customer.cIdentifying') == 3) {
									searchForm1.getForm().findField('customer.cCountry').setValue("收货单位");
								}
								customerId = searchForm1.getForm().findField('customer.cId').getValue();
								linkmanStore.getProxy().url = '/XJManager/base/customer/linkmanList.do?customerId=' + customerId;
								linkmanStore.load();
								bankStore.getProxy().url = '/XJManager/base/customer/bankList.do?customerId=' + customerId;
								bankStore.load();
								reStore.getProxy().url = '/XJManager/base/customer/reciveList.do?customerId=' + customerId;
								reStore.load();
								//客户联系人表
								var gridkhlxr = Ext.create('Ext.grid.Panel', {
									//grid 的标题
									//引入仓库
									store: linkmanStore,
									selModel: Ext.create('Ext.selection.CheckboxModel'),
									columns: [{
											dataIndex: 'lId',
											hidden: true
										}, {
											text: '姓名',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: 'lName',
											flex: 0,
											width: 75,
										},
										{
											text: '职务',
											sortable: true,
											dataIndex: 'lDuty',
											width: 75,
										},
										{
											text: '电话',
											sortable: true,
											dataIndex: 'lPhone',
											width: 75,
										},
										{
											text: '传真',
											sortable: true,
											dataIndex: 'lFax',
											width: 75,
										},
										{
											text: '手机',
											sortable: true,
											dataIndex: 'lTelephone',
											width: 75,
										},
										{
											text: 'E-mail',
											sortable: true,
											dataIndex: 'lEmail',
											width: 75,
										},
										{
											text: '性别',
											sortable: true,
											dataIndex: 'lSex',
											width: 75,
										},
										{
											text: '身份证号',
											sortable: true,
											dataIndex: 'lCard',
											width: 75,
										},
										{
											text: '籍贯',
											sortable: true,
											dataIndex: 'lBirthplace',
											width: 75,
										},
										{
											text: '住址',
											sortable: true,
											dataIndex: 'lAddress',
											width: 75,
										},
										{
											text: '年龄',
											sortable: true,
											dataIndex: 'lAge',
											width: 75,
										},
										{
											text: '文化程度',
											sortable: true,
											dataIndex: 'lEducation',
											width: 75,
										},
										{
											text: '从事煤炭销售时间',
											sortable: true,
											dataIndex: 'lIntime',
											width: 75,
										},
										{
											text: '备注',
											sortable: true,
											dataIndex: 'lDescription',
											width: 75,
										},

									],

									// 保存和取消按钮
									dockedItems: [
										//各种按钮布局
										{
											xtype: 'toolbar',
											items: [{
													text: '新增',
													tooltip: 'add',
													iconCls: 'add',
													listeners: {
														click: function() {
															var customerId = searchForm1.getForm().findField('customer.cId').getValue();
															addFormkhlxrq.form.reset();
															addFormkhlxrq.getForm().findField('lCid').setValue(customerId);
															addFormkhlxrq.getForm().url = '/XJManager/base/customer/addLinkman.do';
															addWinkhlxrq.add(addFormkhlxrq);
															addWinkhlxrq.show();
														}
													}

												},
												{
													text: '修改',
													tooltip: '',
													iconCls: 'edit',
													listeners: {
														click: function() {
															var record = gridkhlxr.getSelectionModel().getSelection();
															if(record == undefined || record == '') {
																Ext.Msg.alert('信息', '请选择一条数据');
																return;
															}
															if(record.length >= 2) {
																Ext.Msg.alert('信息', '只可以选择一条数据');
																return;
															}
															addWinkhlxrq.add(addFormkhlxrq);
															addWinkhlxrq.show();
															addFormkhlxrq.getForm().loadRecord(record[0]);
															addFormkhlxrq.getForm().url = '/XJManager/base/customer/updateLinkman.do';
															gridkhlxr.getSelectionModel().clearSelections();
															gridkhlxr.getView().refresh();
														}
													}
												},
												{

													text: '删除',
													tooltip: '',
													iconCls: 'delete',

													listeners: {
														'click': function() {
															var record = gridkhlxr.getSelectionModel().getSelection();
															if(record == undefined || record == '') {
																Ext.Msg.alert("错误", "请选择至少一条数据");
																return;
															} else {
																Ext.MessageBox.confirm("请确认", "确定删除吗？",
																	function(button, text) {
																		if(button == 'yes') {
																			var url = "/XJManager/base/customer/deleteLinkman.do";
																			var param = "";
																			for(var i = 0; i < record.length; i++) {
																				param = param + record[i].get("lId") + "-";
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
																			linkmanStore.reload();
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
									height: '100%',
									width: 1500,
									frame: false,
									autoScroll: true,
									bbar: Ext.create('Ext.PagingToolbar', {
										pageSize: 5,
										store: store,
										displayInfo: true,
										plugins: Ext.create('Ext.ux.ProgressBarPager', {})
									}),

								});
								//客户开户行表
								var gridBank = Ext.create('Ext.grid.Panel', {
									//grid 的标题
									selModel: Ext.create('Ext.selection.CheckboxModel'),
									//引入仓库
									store: bankStore,
									//引入选择框
									//定义列
									columns: [{
											dataIndex: 'bId',
											hidden: true
										},
										{
											dataIndex: 'bCid',
											hidden: true
										},
										{
											text: '银行名称',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: 'bName',
											flex: 0,
											width: 350,
										},
										{
											text: '账号',
											sortable: true,
											dataIndex: 'bAccount',
											width: 350,
										},
										{
											text: '备注',
											sortable: true,
											dataIndex: 'bRemark',
											width: 350,
										},

									],

									// 保存和取消按钮
									dockedItems: [
										//各种按钮布局
										{
											xtype: 'toolbar',
											items: [{
													text: '新增',
													tooltip: 'add',
													iconCls: 'add',
													listeners: {
														click: function() {
															var customerId = searchForm1.getForm().findField('customer.cId').getValue();
															addFormBank.form.reset();
															addFormBank.getForm().findField('bCid').setValue(customerId);
															addFormBank.getForm().url = '/XJManager/base/customer/addBank.do';
															addWinBank.add(addFormBank);
															addWinBank.show();
														}

													}

												},
												{
													text: '修改',
													tooltip: '',
													iconCls: 'edit',
													listeners: {
														click: function() {
															var record = gridBank.getSelectionModel().getSelection();
															if(record == undefined || record == '') {
																Ext.Msg.alert('信息', '请选择一条数据');
																return;
															}
															if(record.length >= 2) {
																Ext.Msg.alert('信息', '只可以选择一条数据');
																return;
															}
															addWinBank.add(addFormBank);
															addWinBank.show();
															addFormBank.getForm().loadRecord(record[0]);
															addFormBank.getForm().url = '/XJManager/base/customer/updateBank.do';
															gridBank.getSelectionModel().clearSelections();
															gridBank.getView().refresh();
														}
													}
												},
												{

													text: '删除',
													tooltip: '',
													iconCls: 'delete',

													listeners: {
														'click': function() {
															var record = gridBank.getSelectionModel().getSelection();
															if(record == undefined || record == '') {
																Ext.Msg.alert("错误", "请选择至少一条数据");
																return;
															} else {
																Ext.MessageBox.confirm("请确认", "确定删除吗？",
																	function(button, text) {
																		if(button == 'yes') {
																			var url = "/XJManager/base/customer/deleteBank.do";
																			var param = "";
																			for(var i = 0; i < record.length; i++) {
																				param = param + record[i].get("bId") + "-";
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
																			bankStore.reload();
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
									height: '100%',
									width: 1500,
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
								var gridgm = Ext.create('Ext.grid.Panel', {
									//引入仓库
									store: null,
									//引入选择框
									selModel: Ext.create('Ext.selection.CheckboxModel'),
									//定义列
									columns: [{

											text: '煤种',
											sortable: true,
											//与定义的类中的属性匹配
											//dataIndex: 'eId',
											dataIndex: 'cName',
											flex: 0,
											width: 100,
										},
										{

											text: '开单量',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: 'eCarnum',
											flex: 0,
											width: 100,
										},
										{

											text: '开单金额',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: '承运人',
											flex: 0,
											width: 100,
										},
										{

											text: '发货量',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: '净重',
											flex: 0,
											width: 100,

										},
										{

											text: '发货金额',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: '累计',
											flex: 0,
											width: 110,
										},
										{

											text: '当前结余量',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: '结存',
											flex: 0,
											width: 130,
										},
										{

											text: '存煤限量',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: '司磅员',
											flex: 0,
											width: 130,
										},
										{

											text: '存煤限额',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: '监磅员',
											flex: 0,
											width: 130,
										},

									],
									dockedItems: [{
										xtype: 'toolbar',
										items: [{
												text: '新增',
												tooltip: 'add',
												iconCls: 'add',
												listeners: {
													click: function() {
														addFormgm.form.reset();
														addWingm.show();
													}

												}

											},
											{
												text: '修改',
												iconCls: 'edit',
												listeners: {
													click: function() {
														var record = gridgm.getSelectionModel().getSelection();
														if(record == undefined || record == '') {
															Ext.Msg.alert('信息', '请选择一条数据');
															return;
														}
														if(record.length >= 2) {
															Ext.Msg.alert('信息', '只可以选择一条数据');
															return;
														}
														addWingm.add(addFormgm);
														addWingm.show();
														addFormgm.getForm().loadRecord(record[0]);
														gridgm.getSelectionModel().clearSelections();
														gridgm.getView().refresh();

													}
												}

											},
											{
												text: '删除',
												tooltip: '',
												iconCls: 'remove',
											},
										]
									}],
									//table边框的设定
									stripeRows: true,
									height: '100%',
									width: 900,
									frame: false,
									bbar: Ext.create('Ext.PagingToolbar', {
										pageSize: 5,
										store: store,
										displayInfo: true,
										plugins: Ext.create('Ext.ux.ProgressBarPager', {})
									}),

								});
								///////////////////////////////////////////////////////////
								var gridkhdz = Ext.create('Ext.grid.Panel', {
									//引入仓库
									store: null,
									//引入选择框
									selModel: Ext.create('Ext.selection.CheckboxModel'),
									//定义列
									columns: [{
											text: '车站编号',
											sortable: true,
											//与定义的类中的属性匹配
											//dataIndex: 'eId',
											dataIndex: 'cName',
											flex: 0,
											width: 100,
										},
										{
											text: '车站名称',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: 'eCarnum',
											flex: 0,
											width: 100,
										},
										{
											text: '铁路局',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: '承运人',
											flex: 0,
											width: 100,

										},
										{
											text: '是否默认到站',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: '净重',
											flex: 0,
											width: 100,
										},
										{
											text: '备注',
											sortable: true,
											dataIndex: '累计',
											flex: 0,
											width: 110,
										},
									],
									dockedItems: [{
										xtype: 'toolbar',
										items: [{
												text: '新增',
												tooltip: 'add',
												iconCls: 'add',
												listeners: {
													click: function() {
														//addFormgm.form.reset();
														stationWin.show();
													}

												}

											},
											{
												text: '删除',
												tooltip: '',
												iconCls: 'remove',
											},
										]
									}],
									stripeRows: true,
									height: '100%',
									width: 900,
									frame: false,
									bbar: Ext.create('Ext.PagingToolbar', {
										pageSize: 5,
										store: store,
										displayInfo: true,
										plugins: Ext.create('Ext.ux.ProgressBarPager', {})
									}),

								});
								//客户收货单位
								var gridkshdw = Ext.create('Ext.grid.Panel', { //引入仓库
									store: reStore,
									//引入选择框
									selModel: Ext.create('Ext.selection.CheckboxModel'),
									//定义列
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
										}
									],
									dockedItems: [{
										xtype: 'toolbar',
										items: [{
												text: '新增',
												tooltip: 'add',
												iconCls: 'add',
												listeners: {
													click: function() {
														//addFormgm.form.reset();
														addWinshdw.show();
													}
												}
											},
											{
												text: '删除',
												tooltip: '',
												iconCls: 'remove',
												listeners: {
													'click': function() {
														var record = gridkshdw.getSelectionModel().getSelection();
														if(record == undefined || record == '') {
															Ext.Msg.alert("错误", "请选择至少一条数据");
															return;
														} else {
															Ext.MessageBox.confirm("请确认", "确定删除吗？",
																function(button, text) {
																	if(button == 'yes') {
																		var url = "/XJManager/base/customer/deleteRecive.do";
																		var param = "";
																		for(var i = 0; i < record.length; i++) {
																			param = param + record[i].get("customer.cId") + "-";
																		}
																		Ext.Ajax.request({
																			url: url,
																			params: {
																				'ids': param,
																				'cusID': customerId
																			},
																			method: 'POST',
																			success: function(response, options) {

																				Ext.MessageBox.alert('成功', '删除成功');
																			},
																			failure: function(response, options) {
																				Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
																			}
																		});
																		reStore.reload();
																	}
																});
														}
													}
												}
											},
										]
									}],
									stripeRows: true,
									height: '100%',
									width: 900,
									frame: false,
									bbar: Ext.create('Ext.PagingToolbar', {
										pageSize: 5,
										store: store,
										displayInfo: true,
										plugins: Ext.create('Ext.ux.ProgressBarPager', {})
									})
								});
								/////////////////////////////////////////////////////////
								Ext.History.init();
								////////////////////////////////////////////////////////////////  
								var tab = Ext.create('Ext.TabPanel', {
									id: 'main-tabs',
									height: 300,
									width: 950,
									activeTab: 0,
									autoScroll: true,
									defaults: {
										padding: 10
									},

									items: [{
											xtype: 'tabpanel',
											title: '客户联系人',
											activeTab: 0,
											padding: 5,
											border: true,
											plain: true,
											autoScroll: true,
											defaults: {
												padding: 10
											},
											items: [{
												title: '联系人列表',
												autoScroll: true,
												items: [gridkhlxr],
											}],
											listeners: {
												tabchange: onTabChange
											}
										},
										{
											xtype: 'tabpanel',
											title: '客户开户行',
											activeTab: 0,
											padding: 5,
											border: true,
											plain: true,
											defaults: {
												padding: 10
											},
											items: [{
												title: '开户行列表',
												items: [gridBank],
											}],
											listeners: {
												tabchange: onTabChange
											}
										},
										{
											xtype: 'tabpanel',
											title: '客户到站',
											activeTab: 0,
											padding: 5,
											border: true,
											plain: true,
											defaults: {
												padding: 10
											},
											items: [{
												title: '到站列表',
												items: [gridkhdz],
											}],
											listeners: {
												tabchange: onTabChange
											}

										},
										{
											xtype: 'tabpanel',
											title: '收货单位',
											activeTab: 0,
											padding: 5,
											border: true,
											plain: true,
											defaults: {
												padding: 10
											},
											items: [{
												title: '单位列表',
												items: [gridkshdw],
											}],
											listeners: {
												tabchange: onTabChange
											}

										},
										{
											xtype: 'tabpanel',
											title: '客户购煤情况',
											activeTab: 0,
											padding: 5,
											border: true,
											plain: true,
											defaults: {
												padding: 10
											},
											items: [{
												title: '购煤列表',
												items: [gridgm],
											}],
											listeners: {
												tabchange: onTabChange
											}

										}
									],
									listeners: {
										tabchange: onTabChange,
										afterrender: onAfterRender
									}
								});
								//////////////////////////////////////////////////////////////      
								var tokenDelimiter = ':';

								function onTabChange(tabPanel, tab) {
									var tabs = [],
										ownerCt = tabPanel.ownerCt,
										oldToken,
										newToken;
									tabs.push(tab.id);
									tabs.push(tabPanel.id);
									while(ownerCt && ownerCt.is('tabpanel')) {
										tabs.push(ownerCt.id);
										ownerCt = ownerCt.ownerCt;
									}
									newToken = tabs.reverse().join(tokenDelimiter);
									oldToken = Ext.History.getToken();
									if(oldToken === null || oldToken.search(newToken) === -1) {
										Ext.History.add(newToken);
									}
								}

								function onAfterRender() {
									Ext.History.on('change',
										function(token) {
											var parts, tabPanel, length, i;
											if(token) {
												parts = token.split(tokenDelimiter);
												length = parts.length;
												for(i = 0; i < length - 1; i++) {
													Ext.getCmp(parts[i]).setActiveTab(Ext.getCmp(parts[i + 1]));
												}
											}
										});

									var activeTab1 = Ext.getCmp('main-tabs').getActiveTab(),
										activeTab2 = activeTab1.getActiveTab();

									onTabChange(activeTab1, activeTab2);
								}
								var i = 1;
								win = Ext.create("Ext.window.Window", {
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
									modal: true,
									plain: true,
									autoScroll: true,
									items: [{
											id: 'xiangqing',
											region: 'north',
											title: '详细信息',
											items: [searchForm1],
											height: 110,
											dockedItems: [{
												xtype: 'toolbar',
												items: [{
														text: '更多信息',
														tooltip: '',
														iconCls: 'detailed',
														listeners: {
															'click': function() {
																if(i == 1) {
																	Ext.getCmp('xiangqing').setHeight(420);
																	i++;
																} else {
																	Ext.getCmp('xiangqing').setHeight(110);
																	i = 1;
																}

															}
														}
													},
													{
														text: '概要信息',
														iconCls: 'detailed',
														handler: function() {
															win.removeAll();
															win.hide();
														}
													}
												]
											}],

										},
										{
											region: 'north',
											items: [tab],
											width: 200,
											split: true,
											floatable: false,
											autoScroll: true
										}
									]
								}).show();
							}

						}

					},
				]
			}
		],

		//table边框的设定
		stripeRows: true,
		height: 320,
		width: 'auto',
		scroll: true,
		frame: false,
		layout: 'fit',

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