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
	
	///////////////客户相关结束////////////////////////////////////////////////
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
	//////////////////////////产品相关开始///////////////////////////////////
	var agridcp = Ext.create(
			'Ext.grid.Panel', {
				id: 'agrid',
				region: 'east',
				//grid 的标题
				title: '单位列表',
				//引入仓库
				store: store,
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
	var cpWin = Ext.create("Ext.window.Window", {
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
	});
	///////////////////产品相关结束////////////////////////////////

	//////////////筛选相关开始///////////////////////////////////////
	var formSearch = Ext.create('Ext.form.Panel', {
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
					fieldLabel: '编号',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp矿别',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'datefield',
					fieldLabel: '申请日期（始）',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'datefield',
					fieldLabel: '&nbsp&nbsp申请日期（止）',
					width: 360,
					name: 'yYear',
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

				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp客户类型',
					width: 360,
					name: 'yYear',
				}, {

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "收货地点",
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
								staWin.show();
							}
						}
						/************创建单位搜索框结束***********/
					}]

				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp经办人',
					width: 360,
					name: 'yYear',
				}, {

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "产品名称",
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
								cpWin.show();
							}
						}
						/************创建单位搜索框结束***********/
					}]

				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp状态',
					width: 360,
					name: 'yYear',
				}

			],
		}, ],
	});
	////////////////////////////////////////////////////////
	var winSearch = new Ext.Window({

		autoHight: true,
		modal: true,
		/*closeAction:hide,*/
		items: [], // 这里面放你的表单。 
		closeAction: 'close', //这里写成 'hide' 
		/***********************表单设计结束*********************/
		buttons: [
		{
			text: "保存",
			iconCls: "btn-save",
			handler: function() {}
		}, {
			text: "重置",
			iconCls: "reset",
			handler: function() {}
		}]
	});
	///////////////筛选相关结束//////////////////////////////////////////////////////
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
				name: 'apId',
				type: 'integer'
			}, {
				name: 'apDate',
				type: 'date',
				dateFormat: 'n/j h:i'
			}, {
				name: 'apCustomerid',
				type: 'integer'
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
				name: 'zongjine',
				type: 'long'
			}, {
				name: 'apState',
				type: 'byte'
			},

		]
	});
	//定义数据源将被引入到对应的列中
	var myData = [
		['221', '9/1 12:00', 12, '66', 1, 0, 9999999, 1]

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
		title: '跟踪查询购煤申请单',
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
			}, {
				text: '开票日期',
				sortable: true,
				//格式化日期
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				dataIndex: 'apDate',
				width: 75,
			}, {
				text: '客户名称',
				sortable: true,
				//格式化日期
				dataIndex: 'apCustomerid',
				width: 75,
			}, {
				text: '执行单位',
				sortable: true,
				//格式化日期
				dataIndex: 'apDepartmentid',
				width: 75,
			}, {
				text: '运输方式',
				sortable: true,
				//格式化日期
				dataIndex: 'apMethod',
				width: 75,
			}, {
				text: '付款方式',
				sortable: true,
				//格式化日期
				dataIndex: 'apPay',
				width: 75,
			}, {
				text: '总金额',
				sortable: true,
				//格式化日期
				dataIndex: 'zongjine',
				width: 75,
			}, {
				text: '状态',
				sortable: true,
				//格式化日期
				dataIndex: 'apState',
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

		dockedItems: [{
			xtype: 'toolbar',
			items: [{
				text: '筛选',
				tooltip: '',
				iconCls: 'search',
				listeners: {
					click: function() {
						formSearch.form.reset();
						winSearch.add(formSearch);
						winSearch.show();
					}
				}
			}, '-', {
				text: '审批意见',
				iconCls: 'shenpiyijian',
				listeners:{
					
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
				iconCls: 'detailed',
				listeners:{
					
                	click:function(){
                		
							////////////////////////////////////////////
							var Formdetial = Ext.create('Ext.form.Panel', {
								bodyStyle: {  
									        background: '#DFE9F6',  
									        padding: '5px',  
									        border: 1  
								   		}, 
								region: 'west',
								plain: true,
								border: false,
								bodyPadding: false,
								/*autoScroll: true,*/
								width: 1000,
								height:450,
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
											fieldLabel: '申请日期',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '发煤日期',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '客户名称',
											value: '',
											readOnly: true,
											width: 900
										}, {
											xtype: 'displayfield',
											fieldLabel: '收货地点',
											readOnly: true,
											width: 900
										}, {
											xtype: 'displayfield',
											fieldLabel: '申请数量',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '申请车数',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '矿别',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '产品名称',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '单价',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '金额',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '订单类型',
											readOnly: true,
											value: '出卖方测试',
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '经办人',
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
											fieldLabel: '制定日期',
											readOnly: true,
											width: 300
										},{
											xtype: 'displayfield',
											fieldLabel: '制定单位',
											readOnly: true,
											width: 300
										},{
											xtype: 'textarea',
											fieldLabel: '备注',
											readOnly: true,
											disabled:true,
											width: 900
										}
										],
									},
									//////////////////////////////////////////////////////////////////////

								],

							});
							/////////////////////////////////////////////////////////
							Ext.create("Ext.window.Window", {
										/*title:'搜索', */
										closable: true,
										closeAction: 'hide',
										autoScroll: true,
										width: 950,
										height:450,
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
											title: '详细信息',
											items: [Formdetial],
											height: 450,

										}]
									})
								.show();

						
                	}
                
				}
			}]
		}],

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