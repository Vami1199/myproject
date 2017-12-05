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
	//////////////////////////库房相关开始///////////////////////////////////
	var agridkf = Ext.create(
		'Ext.grid.Panel', {
			id: 'agrid',
			region: 'east',
			//grid 的标题
			title: '列表',
			//引入仓库
			store: null,
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
				id: 'coId',
				text: '库房编号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'coId',
				flex: 0,
				width: 75,
			}, {
				text: '库房名称',
				sortable: true,
				dataIndex: 'coShort',
				width: 75
			}, {
				text: '库房类型',
				sortable: true,
				dataIndex: 'coName',
				width: 75
			}, {
				text: '库房地址',
				sortable: true,
				dataIndex: 'coPhone',
				width: 75
			}, {
				text: '邮编',
				sortable: true,
				dataIndex: 'coPostcode',
				width: 75
			}, {
				text: '电话',
				sortable: true,
				dataIndex: 'coFax',
				width: 75
			}, {
				text: '传真',
				sortable: true,
				dataIndex: 'coLeader',
				width: 75
			}, {
				text: '负责人',
				sortable: true,
				dataIndex: 'coAddress',
				width: 75
			}, {
				text: '状态',
				sortable: true,
				dataIndex: 'coAddress',
				width: 75
			}, {
				text: '所属单位',
				sortable: true,
				dataIndex: 'coAddress',
				width: 75
			}],
			stripeRows: true,
			height: 320,
			width: 1200,
			frame: false,
		});
	var searchFormkf = Ext.create(
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
					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
					fields: [{
						name: 'kfkey',
						value: 'Integer'
					}, {
						name: 'kfValue',
						value: 'String'
					}],
					data: [
						[0, '产品'],
						[1, '材料'],
						[2, '设备']
					]
				}),
				name: 'csType',
				hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				valueField: 'kfkey',
				displayField: 'kfValue',
				fieldLabel: '库房类型',
				afterLabelTextTpl: required,
				queryMode: 'local',
				selectOnTab: false,
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}

			}, {
				id: '',
				xtype: 'textfield',
				fieldLabel: '库房编号',
				name: 'coId'
			}, {
				id: '',
				xtype: 'textfield',
				fieldLabel: '库房名称',
				name: 'coId'
			}, {
				id: '',
				xtype: 'textfield',
				fieldLabel: '负责人',
				name: 'coId'
			}
			],

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
	var kfWin = Ext.create("Ext.window.Window", {
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
			items: [searchFormkf],
			width: 200,
			split: true,
			//是否可缩小
			collapsible: true,
			floatable: false
		}, {
			region: 'center',
			items: [agridkf],
			width: 200,
			split: true,
			floatable: false,
			autoScroll: true
		}]
	});
	///////////////////库房相关结束////////////////////////////////
	/////////////////车站相关开始//////////////////////////////////////////////////////////
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
	//想当于一个仓库 存储各种对像的
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
	var staForm = Ext.create('Ext.form.Panel', {
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
				items: [staForm],
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
	/////////////////车站相关结束//////////////////////////////////////////////////////////
	/////////////客户相关开始////////////////////
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
				xtype: 'textfield',
				fieldLabel: '客户编号',
			}, {
				xtype: 'textfield',
				fieldLabel: '客户全称',
			}, {
				xtype: 'textfield',
				fieldLabel: '客户简称',
			}, {
				xtype: 'textfield',
				fieldLabel: '联系人',
			}, {

				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: ['coal'],
					data: [
						['国企'],
						['私企'],
						['其他']
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
				fieldLabel: '企业性质',
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
						['普通'],
						['重要'],
						['其他']
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
				fieldLabel: '客户类型',
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
						['国企'],
						['私企'],
						['其他']
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
				fieldLabel: '企业性质',
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
						['矿业'],
						['科技'],
						['生产']
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
				fieldLabel: '所属行业',
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
						['大唐'],
						['华电'],
						['国电']
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
				fieldLabel: '部别',
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
				xtype: 'textfield',
				fieldLabel: '税号',
			}, {
				xtype: 'textfield',
				fieldLabel: '省份',
			}, {
				xtype: 'textfield',
				fieldLabel: '市县',
			}, {

				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: ['coal'],
					data: [
						['客户'],
						['网点'],
						['收货单位']
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
				fieldLabel: '客户标志',
				queryMode: 'local', //数据模式,local代表本地数据模式
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
			handler: function() {}
		}, {
			text: "重置",
			iconCls: "reset",
			handler: function() {}
		}]
	});
	var agridkh = Ext.create('Ext.grid.Panel', {
		id: '',
		region: 'east',
		//grid 的标题
		title: '列表',
		//引入仓库
		store: store,
		//定义列
		columns: [{
			id: '',
			text: '客户编号',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			text: '客户简称',
			sortable: true,
			dataIndex: 'coShort',
			width: 75
		}, {
			text: '企业性质',
			sortable: true,
			dataIndex: 'coName',
			width: 75
		}, {
			text: '客户类型',
			sortable: true,
			dataIndex: 'coPhone',
			width: 75
		}, {
			text: '所属行业',
			sortable: true,
			dataIndex: 'coPostcode',
			width: 75
		}, {
			text: '部别',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '税号',
			sortable: true,
			dataIndex: 'coLeader',
			width: 75
		}, {
			text: '注册资金',
			sortable: true,
			dataIndex: 'coAddress',
			width: 75
		}, {
			text: '信用额度',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '信用等级',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '法人代表',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '委托人代表',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '联系人',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '开户行',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '银行账号',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '结存煤量',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '结存金额',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '邮编',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '地址',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '传真',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '内部机构编号',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '内部机构名称',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '到站',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '国别',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '省份',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '地市',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}],
		stripeRows: true,
		height: 320,
		width: 1200,
		frame: false,
	});
	var khWin = Ext.create("Ext.window.Window", {
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
	});
	////////////////客户相关结束///////////////////////////////////////	
	//////////////////////购煤申请单相关///////////////////////////////////////
	var formgm = Ext.create('Ext.form.Panel', {
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
			fieldLabel: '编号',
		}, {
			xtype: 'datefield',
			fieldLabel: '开票日期（开始）',
		}, {
			xtype: 'datefield',
			fieldLabel: '开票日期（结束）',
		}, {
			xtype: 'textfield',
			fieldLabel: '客户名称',
		}, {
			xtype: 'textfield',
			fieldLabel: '执行单位',
		}, {
			xtype: 'combo',
			store: Ext.create('Ext.data.ArrayStore', {
				fields: [{
					name: 'cykey',
					value: 'Integer'
				}, {
					name: 'cyValue',
					value: 'String'
				}],
				data: [
					[0, '客户自提'],
					[1, '代运'],
				]
			}),
			name: 'csType',
			hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
			emptyText: '-----请选择-----',
			valueField: 'cykey',
			displayField: 'cyValue',
			fieldLabel: '承运方式',
			queryMode: 'local',
			selectOnTab: false,
			typeAhead: false,
			editable: false,
			onReplicate: function() {
				this.getStore().clearFilter();
			}

		}, ],

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
	var gridgmkh = Ext.create('Ext.grid.Panel', {
		id: '',
		region: 'east',
		//grid 的标题
		title: '',
		//引入仓库
		store: store,
		//定义列
		columns: [{
			id: '',
			text: '编号',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '客户编号',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '客户简称',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '客户全称',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '执行单位名称 ',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '申请日期',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '发煤日期',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '发煤类型',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '红蓝标记',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '原申请单号',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '单据类别',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '提货期限',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '付款方式',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '总金额',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '总购煤量',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '总实发量',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '总结存量',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '运输方式',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '运输单位名称',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '收据汇票号',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '收款员',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '经办人',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '开票员',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '状态',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '制定人',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '制定日期',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '制定单位名称',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, ],
		stripeRows: true,
		height: 200,
		width: 2200,
		frame: false,
		bbar: Ext.create('Ext.PagingToolbar', {
			pageSize: 10,
			store: store,
			displayInfo: true,
			plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		}),
	});
	var gridgmcz = Ext.create('Ext.grid.Panel', {
		id: '',
		region: 'east',
		//grid 的标题
		title: '',
		//引入仓库
		store: store,
		//定义列
		columns: [{
			id: '',
			text: '到站名称',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '产品编号',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '产品名称',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '单价',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '数量',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '实发量',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '结存量',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '金额',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}],
		stripeRows: true,
		height: 200,
		width: 570,
		frame: false,
		bbar: Ext.create('Ext.PagingToolbar', {
			pageSize: 10,
			store: store,
			displayInfo: true,
			plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		}),

	});
	//购煤申请win
	var wingmsq = Ext.create("Ext.window.Window", {
		title: '搜索',
		closable: true,
		closeAction: 'hide',
		width: 800,
		minWidth: 350,
		height: 600,
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
		//autoScroll: true,
		items: [{
			region: 'west',
			title: '部门搜索',
			items: [formgm],
			width: 200,
			split: true,
			//是否可缩小
			collapsible: true,
			floatable: false
		}, {
			region: 'center',
			items: [{
				region: 'north',
				items: [gridgmkh],
				width: 660,
				split: true,
				floatable: false,
				autoScroll: true,
				dockedItems: [{
					xtype: 'toolbar',
					items: [{
						text: '确定',
						iconCls: 'ok',
						listeners: {
							'click': function() {

							}
						}
					}, {
						text: '取消',
						iconCls: 'remove',
						listeners: {
							'click': function() {

							}
						}
					}, ]
				}],
			}, {
				region: 'south',
				items: [gridgmcz],
				width: 660,
				split: true,
				floatable: false,
				autoScroll: true
			}],
			width: 600,
			split: true,
			floatable: false,
			//autoScroll: true
		}]
	});
	//////////////////购煤申请单筛选结束/////////////////////////
	//////////////添加相关开始///////////////////////////////////////
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
					xtype: 'datefield',
					fieldLabel: '过磅日期',
					width: 360,
					name: 'yYear',
				}, 
				{
					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: [{
							name: 'kbkey',
							value: 'Integer'
						}, {
							name: 'kbValue',
							value: 'String'
						}],
						data: [
							[0, '煤电一厂'],
							[1, '煤电二厂'],
							[2, '其他']
						]
					}),
					name: 'csType',
					hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'kbkey',
					displayField: 'kbValue',
					fieldLabel: '&nbsp&nbsp矿别',
					width: 360,
					afterLabelTextTpl: required,
					queryMode: 'local',
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
							name: 'ddlxkey',
							value: 'Integer'
						}, {
							name: 'ddlxValue',
							value: 'String'
						}],
						data: [
							[0, '购煤申请单'],
							[1, '购煤结算单'],
							[2, '其他']
						]
					}),
					name: 'csType',
					hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'ddlxkey',
					displayField: 'ddlxValue',
					fieldLabel: '订单类型',
					width: 360,
					afterLabelTextTpl: required,
					queryMode: 'local',
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
						fieldLabel: "&nbsp&nbsp订单编号",
						flex: 1,
						width: 338,
						/*layout: 'column',*/
						value: '',
						//pProductionunit
						name: 'pProductionunit',
						allowBlank: false,
					}, {
						xtype: "button",
						icon: '../../common/shared/icons/fam/search.png',
						/************创建单位搜索框开始***********/
						listeners: {
							click: function() {
								wingmsq.show();
							}
						}
						/************创建单位搜索框结束***********/
					}]
				}, {

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "收货单位",
						flex: 1,
						width: 338,
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
								khWin.show();
							}
						}
						/************创建单位搜索框结束***********/
					}]

				},
				{
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp收货人',
					width: 360,
					name: 'yYear',
				},
				{
					
					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "发往地点",
						flex: 1,
						width: 338,
						/*layout: 'column',*/
						value: '',
						//必填项
						name: 'pProductionunit',
						allowBlank: false,
					}, {
						xtype: "button",
						icon: '../../common/shared/icons/fam/search.png',
						/************创建单位搜索框开始***********/
						listeners: {
							click: function() {
								staWin.show();
							}
						}
						/************创建单位搜索框结束***********/
					}]

				
				},
				{
					

					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: [{
							name: 'gzKey',
							type: 'Integer'
						}, {
							name: 'gzValue',
							type: 'String'
						}],
						data: [
							[0, 'XX'],
							[1, 'YY'],
							
						]
					}),
					name: 'station.sRailwaysbureau',
					hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'gzKey',
					displayField: 'gzValue',
					fieldLabel: '&nbsp&nbsp港站',
					width: 360,
					queryMode: 'local', //数据模式,local代表本地数据模式
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
							name: 'ysKey',
							type: 'Integer'
						}, {
							name: 'ysValue',
							type: 'String'
						}],
						data: [
							[0, 'XX'],
							[1, 'YY'],
							
						]
					}),
					name: 'station.sRailwaysbureau',
					hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'ysKey',
					displayField: 'ysValue',
					fieldLabel: '运输类型',
					width: 360,
					afterLabelTextTpl: required,
					queryMode: 'local', //数据模式,local代表本地数据模式
					selectOnTab: false,
					typeAhead: false,
					editable: false,
					onReplicate: function() {
						this.getStore().clearFilter();
					}
				
				
				},
				{
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp里程',
					afterLabelTextTpl: required,
					width: 360,
					name: 'yYear',
				},
				{
					xtype: 'textfield',
					fieldLabel: '运价',
					afterLabelTextTpl: required,
					width: 360,
					name: 'yYear',
				},
				{
					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: [{
							name: 'gbKey',
							type: 'Integer'
						}, {
							name: 'gbValue',
							type: 'String'
						}],
						data: [
							[0, 'x'],
							[1, 'y'],
							
						]
					}),
					name: 'station.sRailwaysbureau',
					hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'gbKey',
					displayField: 'gbValue',
					fieldLabel: '&nbsp&nbsp过磅物品',
					width: 360,
					queryMode: 'local', //数据模式,local代表本地数据模式
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
							name: 'cpKey',
							type: 'Integer'
						}, {
							name: 'cpValue',
							type: 'String'
						}],
						data: [
							[0, 'x'],
							[1, 'y'],
							
						]
					}),
					name: 'station.sRailwaysbureau',
					hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'cpKey',
					displayField: 'cpValue',
					fieldLabel: '产品名称',
					afterLabelTextTpl: required,
					width: 360,
					queryMode: 'local', //数据模式,local代表本地数据模式
					selectOnTab: false,
					typeAhead: false,
					editable: false,
					onReplicate: function() {
						this.getStore().clearFilter();
					}
				
				
				},
				{
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp计量单位',
					afterLabelTextTpl: required,
					width: 360,
					name: 'yYear',
				},
				{
					xtype: 'textfield',
					fieldLabel: '累计发煤量',
					width: 360,
					name: 'yYear',
				},
				{
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp订单结余量',
					width: 360,
					name: 'yYear',
				},
				{
					
					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "库房",
						flex: 1,
						width: 338,
						/*layout: 'column',*/
						value: '',
						//必填项
						//pProductionunit
						name: 'pProductionunit',
						allowBlank: false,
					}, {
						xtype: "button",
						icon: '../../common/shared/icons/fam/search.png',
						/************创建单位搜索框开始***********/
						listeners: {
							click: function() {
								kfWin.show();
							}
						}
						/************创建单位搜索框结束***********/
					}]

				
				},
				{
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp空车称重时间',
					afterLabelTextTpl: required,
					width: 360,
					name: 'yYear',
				},
				{
					xtype: 'textfield',
					fieldLabel: '车型',
					width: 360,
					name: 'yYear',
				},
				{
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp车号',
					afterLabelTextTpl: required,
					width: 360,
					name: 'yYear',
				},
				{
					xtype: 'textfield',
					fieldLabel: '载重',
					afterLabelTextTpl: required,
					width: 360,
					name: 'yYear',
				},
				{
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp皮重',
					afterLabelTextTpl: required,
					width: 360,
					name: 'yYear',
				},
				{
					xtype: 'textfield',
					fieldLabel: '运输单位',
					width: 360,
					name: 'yYear',
				},
				{
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp承运人',
					width: 360,
					name: 'yYear',
				},
				{
					xtype: 'textfield',
					fieldLabel: '司磅员',
					width: 360,
					name: 'yYear',
				},
				{
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp监磅员',
					width: 360,
					name: 'yYear',
				},
				{
					

					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: [{
							name: 'bjKey',
							type: 'Integer'
						}, {
							name: 'bjValue',
							type: 'String'
						}],
						data: [
							[0, '红单'],
							[1, '蓝单'],
				
						]
					}),
					name: 'station.sRailwaysbureau',
					hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'bjKey',
					displayField: 'bjValue',
					fieldLabel: '红蓝标记',
					width: 360,
					queryMode: 'local', //数据模式,local代表本地数据模式
					selectOnTab: false,
					typeAhead: false,
					editable: false,
					onReplicate: function() {
						this.getStore().clearFilter();
					}
				
				},
				{
					xtype: 'textarea',
					fieldLabel: '备注',
					width: 720,
					name: 'yYear',
				},
			],
		}, ],
	});
	////////////////////////////////////////////////////////
	var winAdd = new Ext.Window({

		autoHight: true,
		modal: true,
		/*closeAction:hide,*/
		items: [], // 这里面放你的表单。 
		closeAction: 'close', //这里写成 'hide' 
		/***********************表单设计结束*********************/
		buttons: [ {
			text: "保存",
			iconCls: "btn-save",
			handler: function() {}
		}, {
			text: "重置",
			iconCls: "reset",
			handler: function() {}
		}]
	});
	///////////////添加相关结束//////////////////////////////////////////////////////

	// register model
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
			name: 'eId',
			type: 'integer'
		}, {
			name: 'eFlag',
			type: 'byte'
		}, {
			name: 'yuandanbianhao',
			type: 'string'
		}, {
			name: 'chaidanbianhao',
			type: 'string'
		}, {
			name: 'eSource',
			type: 'string'
		}, {
			name: 'eEmptydate',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: '收货单位',
			type: 'string'
		}, {
			name: 'eReciever',
			type: 'string'
		}, {
			name: 'eBourn',
			type: 'string'
		}, {
			name: 'eEntrepot',
			type: 'string'
		}, {
			name: 'eType',
			type: 'byte'
		}, {
			name: 'eCartype',
			type: 'string'
		}, {
			name: 'eWeight',
			type: 'integer'
		}, {
			name: 'eCarnum',
			type: 'string'
		}, {
			name: 'eUser',
			type: 'string'
		}, {
			name: 'eWargon',
			type: 'integer'
		}, {
			name: 'eUnit',
			type: 'string'
		}, {
			name: '累计发车量',
			type: 'string'
		}, {
			name: 'eSurplus',
			type: 'integer'
		}, {
			name: 'eGoods',
			type: 'byte'
		}, {
			name: 'eState',
			type: 'byte'
		}, {
			name: 'eCondition',
			type: 'byte'
		}, ]
	});
	//定义数据源将被引入到对应的列中
	var myData = [
		[66666, 0, 'xxx', 'xxx', 'xxx', '9/1 12:00', 'xx', 'xx', 'xx', 'xxx', 1, 'xx', 22, 'xx', 'xx', 11, 'xx', 'xx',
			33, 1, 1, 0
		]

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
		title: '维护空车过磅记录',
		//引入仓库
		store: store,
		//引入选择框
		selModel: sm,
		//定义列
		columns: [{
				id: '',
				text: '编号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eId',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '红蓝标记',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eFlag',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '原单编号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'yuandanbianhao',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '拆单编号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'chaidanbianhao',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '矿别',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eSource',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '空车过磅日期',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eEmptydate',
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '收货单位',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: '收货单位',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '收货人',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eReciever',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '发往地点',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eBourn',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '库房',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eEntrepot',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '运输类型',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eType',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '车型',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eCartype',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '载重',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eWeight',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '车号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eCarnum',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '承运人',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eUser',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '皮重',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eWargon',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '计量单位',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eUnit',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '累计发车量',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: '累计发车量',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '订单结余量',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eSurplus',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '过磅物品',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eGoods',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '记账状态',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eState',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '榜单状态',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eCondition',
				flex: 0,
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
					text: '添加',
					iconCls: 'add',
					listeners: {
						click: function() {
							formAdd.form.reset();
							winAdd.add(formAdd);
							winAdd.show();
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