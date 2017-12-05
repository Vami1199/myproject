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
	//////////////详情添加相关开始///////////////////////////////////////
	var formaddxq = Ext.create('Ext.form.Panel', {
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
		width: 400,
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
			items: [
				{
					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "收货地点",
						flex: 1,
						width: 338,
						value: '',
						name: 'pProductionunit',
						allowBlank: false,
					}, {
						xtype: "button",
						icon: '../../common/shared/icons/fam/search.png',
						listeners: {
							click: function() {
								staWin.show();
							}
						}
					}]
				},
				{
					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: [{
							name: 'mzkey',
							value: 'Integer'
						}, {
							name: 'mzValue',
							value: 'String'
						}],
						data: [
							[0, '煤泥'],
							[1, '地销商品煤'],
							[2, '块煤'],
							[3, '脏煤'],
							[4, '原煤（东煤场）'],
							[5, '原煤（西煤场）'],
							[6, '基建煤'],
							[7, '掘进煤'],
							[8, '掘进煤（筛上物）'],
							[9, '低值煤'],
							[10, '低值块煤'],
							[11, '脏杂煤'],
							[12, '脏杂煤泥'],
						]
					}),
					name: 'csType',
					hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'mzkey',
					displayField: 'mzValue',
					fieldLabel: '产品名称',
					afterLabelTextTpl: required,
					width: 360,
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
					fieldLabel: '单价',
					width: 360,
					afterLabelTextTpl: required,
					name: 'yYear',
				},
				{
					xtype: 'textfield',
					fieldLabel: '数量',
					width: 360,
					afterLabelTextTpl: required,
					name: 'yYear',
				},
				{
					xtype: 'textfield',
					fieldLabel: '金额',
					width: 360,
					afterLabelTextTpl: required,
					name: 'yYear',
				},
				{
					xtype: 'textfield',
					fieldLabel: '运价',
					width: 360,
					afterLabelTextTpl: required,
					name: 'yYear',
				},
				{
					xtype: 'textfield',
					fieldLabel: '运费',
					width: 360,
					afterLabelTextTpl: required,
					name: 'yYear',
				},
				{
					xtype: 'textarea',
					fieldLabel: '备注',
					width: 360,
					name: 'yYear',
				},
			/////////////////////////////////////////////

			],
		}, ],
	});
	////////////////////////////////////////////////////////
	var winaddxq = new Ext.Window({

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
	///////////////详情添加相关结束//////////////////////////////////////////////////////
	////////购煤申请单明细要用到的Win开始//////////////////////////////////////////////////////////////////////////////////
	var htxzWinnew = new Ext.Window({
		autoScroll: true,
		//autoHight: true,
		height: 400,
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
	var editWin = new Ext.Window({
		autoScroll: true,
		//autoHight: true,
		height: 400,
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
	///////////////////////////////////////////
	Ext.define('addcompany', {
		extend: 'Ext.data.Model',
		idProperty: '',
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
		}, {
			text: '机构简称',
			sortable: true,
			dataIndex: 'coShort',
			width: 75
		}, {
			text: '机构全称',
			sortable: true,
			dataIndex: 'coName',
			width: 75
		}, {
			text: '联系电话',
			sortable: true,
			dataIndex: 'coPhone',
			width: 75
		}, {
			text: '邮政编码',
			sortable: true,
			dataIndex: 'coPostcode',
			width: 75
		}, {
			text: '传真',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '负责人',
			sortable: true,
			dataIndex: 'coLeader',
			width: 75
		}, {
			text: '地址',
			sortable: true,
			dataIndex: 'coAddress',
			width: 75
		}, {
			text: '联系人',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}],
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
		}, {
			xtype: 'textfield',
			fieldLabel: '机构简称',
			name: 'coShort',

		}, {
			xtype: 'textfield',
			fieldLabel: '机构电话',
			name: 'coPhone',
		}, {
			xtype: 'textfield',
			fieldLabel: '机构传真',
			name: 'coFax',
		}, {
			xtype: 'textfield',
			fieldLabel: '机构邮编',
			name: 'coPostcode',
		}, {
			xtype: 'textfield',
			fieldLabel: '机构负责人',
			name: 'coLeader',
		}],

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
		}, {
			text: "重置",
			iconCls: "reset",
			handler: function() {
				this.up('form').getForm().reset();
			}
		}]
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
		}, {
			region: 'center',
			items: [companyGrid],
			width: 200,
			split: true,
			floatable: false,
			autoScroll: true
		}]
	});
	////////////////机构相关结束///////////////////////////////////////////////////
	/////////////////车站相关开始//////////////////////////////////////////////////////////
	Ext.define('Station', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
			name: 'station.sId',
			type: 'Integer'
		}, {
			name: 'station.sName',
			type: 'string'
		}, {
			name: 'station.sSort',
			type: 'string'
		}, {
			name: 'station.sProvince',
			type: 'Integer'
		}, {
			name: 'station.sCity',
			type: 'String'
		}, {
			name: 'station.sRailwaystation',
			type: 'Integer'
		}, {
			name: 'station.sRailwaysbureau',
			type: 'integer'
		}, {
			name: 'station.sDeparturestation',
			type: 'integer'
		}, {
			name: 'stationadmin.adminName',
			type: 'String'
		}, {
			name: 'province.pName',
			type: 'String'
		}, ]
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
		}, {
			xtype: 'textfield',
			fieldLabel: '车站名称',
			name: 'station.sName'
		}, {
			xtype: 'combo',
			store: Ext.create('Ext.data.ArrayStore', {
				fields: [{
					name: 'startKey',
					type: 'Integer'
				}, {
					name: 'startValue',
					type: 'String'
				}],
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
		}, {
			xtype: 'combo',
			store: Ext.create('Ext.data.ArrayStore', {
				fields: [{
					name: 'stationKey',
					type: 'Integer'
				}, {
					name: 'stationValue',
					type: 'String'
				}],
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
		}, {
			xtype: 'combo',
			store: Ext.create('Ext.data.ArrayStore', {
				fields: [{
					name: 'pId',
					type: 'Integer'
				}, {
					name: 'pName',
					type: 'String'
				}],
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
		}, {
			xtype: 'textfield',
			fieldLabel: '市县',
			name: 'station.sCity'
		}],

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
		}, {
			text: "取消",
			iconCls: "reset",
			handler: function() {
				staWin.hide();
				searchForm.getForm().reset();
			}
		}]
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
		}, {
			text: '车站编号',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'station.sSort',
			flex: 0,
			width: 75,
		}, {
			text: '车站姓名',
			sortable: true,
			dataIndex: 'station.sName',
			width: 75
		}, {
			text: '是否发站',
			sortable: true,
			dataIndex: 'station.sRailwaysbureau',
			width: 75
		}, {
			text: '省份',
			sortable: true,
			dataIndex: 'province.pName',
			width: 75
		}, {
			text: '市县',
			sortable: true,
			dataIndex: 'station.sCity',
			width: 75
		}, {
			text: '铁路局',
			sortable: true,
			dataIndex: 'stationadmin.adminName',
			width: 75
		}],
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
		}, {
			region: 'center',
			items: [staGrid],
			width: 200,
			split: true,
			floatable: false,
			autoScroll: true
		}]
	});
	/////////////////车站相关结束//////////////////////////////////////////////////////////
	////////////客户相关开始////////////////////////////////////////////
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
	///////////////客户相关结束////////////////////////////////////////////////
	///////////////合同相关开始/////////////////////////////////////////////////////////
	var searchFormht = Ext.create('Ext.form.Panel', {
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
		}, {
			xtype: 'combo',
			store: Ext.create('Ext.data.ArrayStore', {
				fields: ['coal'],
				data: [
					['普通'],
					['一般'],
					['重要']
				]
			}),
			name: '',
			hiddenName: 'id',
			// 提交到后台的input的name ，对应下面store里的''id，必须要填
			emptyText: '-----请选择-----',
			//map中的键
			valueField: '',
			//map中的值 
			displayField: 'coal',
			//选中下拉框后再点击面板就会多出一行,不知道有卵子用
			/*plugins: [ Ext.ux.FieldReplicator ],*/
			fieldLabel: '合同类别',
			queryMode: 'local',
			//数据模式,local代表本地数据模式
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
			fieldLabel: '合同年份起:',
		}, {
			xtype: 'textfield',
			fieldLabel: '合同年份止:',
		}, {
			xtype: 'textfield',
			fieldLabel: '客户简称',
		}, {
			xtype: 'combo',
			store: Ext.create('Ext.data.ArrayStore', {
				fields: ['coal'],
				data: [
					['铁运'],
					['海运'],
					['其他']
				]
			}),
			name: '',
			hiddenName: 'id',
			// 提交到后台的input的name ，对应下面store里的''id，必须要填
			emptyText: '-----请选择-----',
			//map中的键
			valueField: '',
			//map中的值 
			displayField: 'coal',
			//选中下拉框后再点击面板就会多出一行,不知道有卵子用
			/*plugins: [ Ext.ux.FieldReplicator ],*/
			fieldLabel: '运输方式',
			queryMode: 'local',
			//数据模式,local代表本地数据模式
			//tab键是否可以选择当前突出项
			selectOnTab: false,
			/****下拉框不可编辑*****/
			typeAhead: false,
			editable: false,
			/****下拉框不可编辑*****/
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
	var agridht = Ext.create('Ext.grid.Panel', {
		id: 'agrid',
		region: 'east',
		//grid 的标题
		title: '列表',
		//引入仓库
		store: store,
		//定义列
		columns: [{
			id: '',
			text: '合同编号',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			text: '合同年份',
			sortable: true,
			dataIndex: 'coShort',
			width: 75
		}, {
			text: '起始时间',
			sortable: true,
			dataIndex: 'coName',
			width: 75
		}, {
			text: '截止时间',
			sortable: true,
			dataIndex: 'coPhone',
			width: 75
		}, {
			text: '客户名称',
			sortable: true,
			dataIndex: 'coPostcode',
			width: 75
		}, {
			text: '合同总量',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '实发总量',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '出卖方单位名称',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '客户所属行业',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '客户所属部别',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '约定周期',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '每周至少发货量',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '合同类别',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '是否以质论价',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '执行单位',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '运输方式',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '是否变更',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '合同标记',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '运费负担',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '质量数量验收标准及方法',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '煤炭单价',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '结算方式',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '合同状态',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}],
		stripeRows: true,
		height: 520,
		width: 1200,
		frame: false,
	});
	///////////////合同相关结束/////////////////////////////////////////////////////////                     
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
					fieldLabel: '日期',
					width: 360,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {
					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "&nbsp&nbsp客户名称",
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
						fields: [{
							name: 'dwKey',
							type: 'Integer'
						}, {
							name: 'dwValue',
							type: 'String'
						}],
						data: [
							[0, '煤电一厂'],
							[1, '煤电二厂'],
							[2, '新集一矿'],
							[3, '新集二矿'],
							[4, '新集三矿'],
							[5, '刘庄煤矿'],
							[6, '口孜东矿'],
							[7, '板集煤矿'],
							[8, '杨村煤矿'],
						]
					}),
					name: 'station.sRailwaysbureau',
					hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'dwKey',
					displayField: 'dwValue',
					fieldLabel: '执行单位',
					width: 360,
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
					fieldLabel: '&nbsp&nbsp运输单位',
					width: 360,
					name: 'yYear',
				}, {

					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: [{
							name: 'cyKey',
							type: 'Integer'
						}, {
							name: 'cyValue',
							type: 'String'
						}],
						data: [
							[0, '客户自提'],
							[1, '代运'],

						]
					}),
					name: 'station.sRailwaysbureau',
					hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'cyKey',
					displayField: 'cyValue',
					fieldLabel: '承运方式',
					width: 360,
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
							name: 'fkKey',
							type: 'Integer'
						}, {
							name: 'fkValue',
							type: 'String'
						}],
						data: [
							[0, '转账'],
							[1, '其它'],

						]
					}),
					name: 'station.sRailwaysbureau',
					hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'fkKey',
					displayField: 'fkValue',
					fieldLabel: '&nbsp&nbsp付款方式',
					width: 360,
					queryMode: 'local', //数据模式,local代表本地数据模式
					selectOnTab: false,
					typeAhead: false,
					editable: false,
					onReplicate: function() {
						this.getStore().clearFilter();
					}

				}, {
					xtype: 'datefield',
					fieldLabel: '汇票号',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'datefield',
					fieldLabel: '&nbsp&nbsp收款员',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'datefield',
					fieldLabel: '经办人',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'datefield',
					fieldLabel: '&nbsp&nbsp开票员',
					width: 360,
					name: 'yYear',
				}, {

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "相关合同",
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
										items: [searchFormht],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [agridht],
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
					xtype: 'textarea',
					fieldLabel: '提货期限',
					width: 720,
				}, {
					xtype: 'textarea',
					fieldLabel: '备注',
					width: 720,
				}

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
		buttons: [{
			text: "新增客户",
			iconCls: "btn-save",
			style: 'margin-right:500px',
			listeners: {
				click: function() {
					addkhWin.add(addkhForm);
					addkhWin.show();
				}
			}
		}, {
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
					}, {
						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [{
								name: 'typeKEY',
								type: 'Integer'
							}, {
								name: 'typeValue',
								type: 'String'
							}],
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
					}, {
						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [{
								name: 'departmentKey',
								type: 'Integer'
							}, {
								name: 'departmentValue',
								type: 'String'
							}],
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

					}, {
						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [{
								name: 'companyKey',
								type: 'Integer'
							}, {
								name: 'companyValue',
								type: 'String'
							}],
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
					}, {
						xtype: 'textfield',
						fieldLabel: '客户全称',
						afterLabelTextTpl: required,
						name: 'customer.cName',
						width: 400
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp客户简称',
						afterLabelTextTpl: required,
						name: 'customer.cShort',
						width: 400
					}, {
						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [{
								name: 'iKey',
								type: 'Integer'
							}, {
								name: 'iValue',
								type: 'String'
							}],
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

					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp经营范围',
						width: 200,
						name: 'customer.cScope'
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp法人代表',
						width: 200,
						name: 'customer.cLegal'
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp委托代表',
						width: 200,
						name: 'customer.cConsignor'
					}, {
						xtype: 'textfield',
						fieldLabel: '开户行',
						width: 200,
						name: 'customer.cBank'
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp银行账号',
						width: 200,
						name: 'customer.cAccount'
					}, {

						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [{
								name: 'creditKey',
								type: 'Integer'
							}, {
								name: 'creditValue',
								type: 'String'
							}],
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
					}, {
						xtype: 'numberfield',
						fieldLabel: '&nbsp&nbsp信用额度',
						width: 200,
						name: 'customer.cLimit'
					}, {
						xtype: 'numberfield',
						fieldLabel: '注册资金',
						width: 200,
						name: 'customer.cRegisteredcapital'
					}, {

						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp税号',
						width: 200,
						name: 'customer.cTaxnumber'
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp地址',
						width: 200,
						name: 'customer.cCityaddress'
					}, {
						xtype: 'textfield',
						name: 'station.sSort',
						hidden: true
					}, {
						xtype: 'textfield',
						name: 'customer.cSid',
						hidden: true
					}, {
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
						}, {
							xtype: "button",
							icon: '../../common/shared/icons/fam/search.png',
							listeners: {
								click: function() {
									staWin.show();
								}
							}
						}]

					}, {
						xtype: 'textfield',
						fieldLabel: '邮编',
						width: 200,
						name: 'customer.cPostcode'
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp联系人',
						width: 200,
						name: 'customer.cLinkman'
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp电话',
						width: 200,
						name: 'customer.cPhone'
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp传真',
						width: 200,
						name: 'customer.cFax'
					}, {
						xtype: 'textfield',
						fieldLabel: '主页',
						width: 200,
						name: 'customer.cHomepage'
					}, {
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbspE-mail',
						width: 200,
						name: 'customer.cEmail'
					}, {

						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [{
								name: 'contryKey',
								type: 'String'
							}, {
								name: 'contryValue',
								type: 'String'
							}],
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
					}, {
						xtype: 'combo',
						//store: provinceStore,
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

					}, {
						xtype: 'textfield',
						fieldLabel: '市县',
						width: 400,
					}, {

						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [{
								name: 'eleKey',
								type: 'Integer'
							}, {
								name: 'eleValue',
								type: 'String'
							}],
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
					}, {

						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [{
								name: 'stateKey',
								type: 'Integer'
							}, {
								name: 'stateValue',
								type: 'String'
							}],
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
					}, {

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
						}, {
							xtype: "button",
							icon: '../../common/shared/icons/fam/search.png',
							listeners: {
								click: function() {

									companyWin.show();
								}
							}
						}]

					}, {
						xtype: "textfield",
						fieldLabel: '&nbsp&nbsp内部机构名称',
						width: 200,
						name: 'coName',
						readOnly: true
					}, {

						xtype: 'combo',
						store: Ext.create('Ext.data.ArrayStore', {
							fields: [{
								name: 'ideKey',
								type: 'Integer'
							}, {
								name: 'ideValue',
								type: 'String'
							}],
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

					}, {
						xtype: 'textarea',
						fieldLabel: '质量认证情况',
						width: 400,
						heigh: 45,
						name: 'cQuality'
					}, {
						xtype: 'textarea',
						fieldLabel: '&nbsp&nbsp适用说明',
						width: 400,
						heigh: 45,
						name: 'cCreditdeclare'
					}, {
						xtype: 'textarea',
						fieldLabel: '备注',
						width: 800,
						heigh: 45,
						name: 'customer.cRemark'
					},

				],
			},
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
		}, {
			text: "重置",
			iconCls: "reset",
			handler: function() {
				addkhForm.form().reset();
			}
		}]
	});
	/******************************添加客户面板结束************************/
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

	/////////////红冲相关开始//////////////////////////////////////
	var hongChongWin = new Ext.Window({
		autoHight: true,
		modal: true,
		/*closeAction:hide,*/
		items: [],
		// 这里面放你的表单。 
		closeAction: 'close',
		//这里写成 'hide' 
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
	var hongChongForm = Ext.create('Ext.form.Panel', {
			plain: true,
			border: 0,
			bodyPadding: 5,
			width: 450,
			title: '产品添加',
			//表单发送的到的action路径
			url: '/base/productList.do',
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

					xtype: 'fieldcontainer',
					fieldLabel: '红冲类型',
					defaultType: 'radiofield',
					defaults: {
						flex: 1
					},
					layout: 'hbox',
					items: [{
						boxLabel: '红冲退货',
						name: 'size',
						inputValue: '0',
						id: 'radio1',
						checked: true
					}, {
						boxLabel: '单据变更',
						name: 'size',
						inputValue: '1',
						id: 'radio2'
					}, ]
				},

				{

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "购煤申请单编号",
						afterLabelTextTpl: required,
						width: 268,
						name: 'mId',
						flex: 0,
						/*layout: 'column',*/
						value: '',
						//必填项
						//pProductionunit
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
					}]

				},

				{
					xtype: 'textarea',
					fieldLabel: '备注',
					hideLabel: false,
					name: 'remark',
					value: '说明：红冲退货：根据所选的蓝单生成一个红单。红单信息为原蓝单中未发出的余额，不可修改。单据变更：根据所选的蓝单生成一个红单和一个蓝单。其中红单为原蓝单中未发出的余额，不可修改；其中蓝单信息也为原蓝单中未发出的部分，业务人员可对执行单位、煤种、数量等进行修改。',
					style: 'margin:0',
					// Remove default margin
					flex: 1 // Take up all *remaining* vertical space
				}
			]

		})
		/////////////红冲相关结束//////////////////////////////////////

	// register model
	//相当于定义了一个company 类
	Ext.define('request', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
			name: 'apId',
			type: 'integer'
		}, {
			name: 'apFlag',
			type: 'byte'
		}, {
			name: 'apDate',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'apCustomerid',
			type: 'Integer'
		}, {
			name: 'apDepartmentid',
			type: 'string'
		}, {
			name: 'apMethod',
			type: 'byte'
		}, {
			name: 'apPay',
			type: 'byte'
		}, {
			name: 'totalNum',
			type: 'decimal'
		}, {
			name: 'totalPrice',
			type: 'decimal'
		}, {
			name: 'apContract',
			type: 'string'
		}, {
			name: 'contract',
			type: 'string'
		}, {
			name: 'apState',
			type: 'byte'
		}]
	});
	//定义数据源将被引入到对应的列中
	var myData = ['gg'];

	//初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
	Ext.tip.QuickTipManager.init();

	//想当于一个仓库 存储各种对像的
	var store = Ext.create('Ext.data.Store', {
		model: 'request',
		remoteSort: true,
		//每页显示的数据
		pageSize: 20,
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
		title: '维护购煤申请单',
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
				dataIndex: 'apId',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				text: '红蓝标记',
				sortable: true,
				dataIndex: 'apFlag',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '开票日期',
				sortable: true,
				//格式化日期
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				dataIndex: 'apDate',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '客户名称',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'apCustomerid',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '执行单位',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'apDepartmentid',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '承运方式',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'apMethod',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '付款方式',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'apPay',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '购煤量',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'totalNum',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '总金额',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahRoaduser',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '相关合同编号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'apContract',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				text: '相关合同',
				sortable: true,
				dataIndex: 'contract',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '状态',
				sortable: true,
				dataIndex: 'apState',
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

				}, '-', {
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
					text: '删除',
					iconCls: 'remove',
					listeners: {
						click: function() {}
					}

				}, '-', {
					text: '红冲',
					iconCls: 'create',
					listeners: {
						click: function() {
							hongChongWin.add(hongChongForm);
							hongChongWin.show();
						}
					}

				}, '-', {
					text: '送审',
					iconCls: 'songshen',
					listeners: {
						click: function() {

						}
					}

				}, '-', {
					text: '审批意见',
					iconCls: 'shenpiyijian',
					listeners: {
						click: function() {

						}
					}

				}, '-', {
					text: '打印',
					iconCls: 'print',
					listeners: {
						click: function() {

						}
					}

				}, '-', {
					text: '详细信息',
					iconCls: 'detailed',
					listeners: {
						'click': function() {
							
							////////////////////////////////////////////
							var xqWin;
							///////////详情form//////////////////////////////////////////////
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
											fieldLabel: '编号',
											value: 'xxx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '开票日期',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '客户名称',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '承运方式',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '运输单位',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '执行单位',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '付款方式',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '购煤量',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '金额',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '汇票号',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '收款员',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '经办人',
											readOnly: true,
											value: '出卖方测试',
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '开票员',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定人',
											readOnly: true,
											width: 300
										},{
											xtype: 'displayfield',
											fieldLabel: '制定单位',
											readOnly: true,
											width: 300
										},{
											xtype: 'displayfield',
											fieldLabel: '相关合同',
											readOnly: true,
											width: 300
										},{
											xtype: 'displayfield',
											fieldLabel: '红蓝标记',
											readOnly: true,
											width: 300
										},{
											xtype: 'textarea',
											fieldLabel: '提货期限',
											readOnly: true,
											disabled:true,
											width: 850
										},
										{
											xtype: 'textarea',
											fieldLabel: '制定日期',
											disabled: true,
											readOnly: true,
											width: 850
										}],
									},
									//////////////////////////////////////////////////////////////////////

								],

							});
							///////购煤申请单明细grid//////////////////////////////////////////////////
							var gridcontantxq = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								title: '购煤申请单明细',
								selModel: sm,
								//autoScroll: true,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
									text: '产品名称',
									sortable: true,
									dataIndex: 'mId',
									flex: 0,
								}, {
									text: '单价',
									sortable: true,
									dataIndex: 'sourceName',
								}, {
									text: '数量',
									sortable: true,
									dataIndex: 'sourceName',
								}, {
									text: '金额',
									sortable: true,
									dataIndex: 'sourceName',
								}, {
									text: '收货单位',
									sortable: true,
									dataIndex: 'sourceName',
								}, {
									text: '运价',
									sortable: true,
									dataIndex: 'sourceName',
								}, {
									text: '运费',
									sortable: true,
									dataIndex: 'sourceName',
								}, {
									text: '收货地点',
									sortable: true,
									dataIndex: 'sourceName',
								}, {
									text: '备注',
									sortable: true,
									dataIndex: 'sourceName',
								}],

								// 保存和取消按钮
								dockedItems: [
									//各种按钮布局
									{
										xtype: 'toolbar',
										items: [{
												text: '新增',
												iconCls: 'add',
												listeners: {
													click: function() {
														formaddxq.form.reset();
														winaddxq.add(formaddxq);
														winaddxq.show();
													}
												}
											}, {
												text: '修改',
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
														winaddxq.add(formaddxq);
														winaddxq.show();
														formaddxq.getForm().loadRecord(record[0]);
														Ext.getCmp('formpid').readOnly = true;
														//addContantForm.getForm().url = '/XJManager/base/updateProduct.do';
														gridcontantxq.getSelectionModel().clearSelections();
														gridcontantxq.getView().refresh();
													}

					
												}
											}, {
												text: '删除',
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
																		Ext.getCmp('xiangqingz').setHeight(330);
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

