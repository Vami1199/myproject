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
	////////////////机构相关开始///////////////////////////////////////////////////
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
	/////////////////////批次筛选开始/////////////////////////////////////////////
	var pcsxForm = Ext.create('Ext.form.Panel', {
		region: 'west',
		plain: true,
		border: 0,
		bodyPadding: 0,
		autoScroll: true,
		width: 900,
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
					width: 440,
					name: 'yYear',
				}, {
					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: [{
							name: 'kbKey',
							type: 'Integer'
						}, {
							name: 'kbValue',
							type: 'String'
						}],
						data: [
							[1, '煤电一厂'],
							[0, '煤电二厂'],
						]
					}),
					name: 'station.sRailwaysbureau',
					hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'kbKey',
					displayField: 'kbValue',
					fieldLabel: '&nbsp&nbsp矿别',
					width: 410,
					queryMode: 'local', //数据模式,local代表本地数据模式
					selectOnTab: false,
					typeAhead: false,
					editable: false,
					onReplicate: function() {
						this.getStore().clearFilter();
					}
				}

			],
		}, ],
		dockedItems: [{
			xtype: 'toolbar',
			dock: 'bottom',
			ui: 'footer',
			layout: {
				pack: 'center'
			},
			items: [{

				minWidth: 80,
				text: '确定'
			}, {
				minWidth: 80,
				text: '取消'
			}]
		}]
	});
	var pcsxGrid = Ext.create('Ext.grid.Panel', {
		//grid 的标题
		title: '月要车计划明细',
		autoScroll: true,
		//引入仓库
		selModel: sm,
		store: store,
		//引入选择框
		//定义列
		columns: [{
			text: '日期',
			sortable: true,
			dataIndex: 'scContractid',
			flex: 0,
		}, {
			text: '矿别',
			sortable: true,
			dataIndex: 'scContractid',
			flex: 0,
		}, {
			text: '批次',
			sortable: true,
			dataIndex: 'scContractid',
			flex: 0,
		}, {
			text: '车数',
			sortable: true,
			dataIndex: 'scContractid',
			flex: 0,
		}, {
			text: '吨数',
			sortable: true,
			dataIndex: 'scContractid',
			flex: 0,
		}, ],

		//table边框的设定
		stripeRows: true,
		height: 200,
		width: 'auto',
		frame: false,

		bbar: Ext.create('Ext.PagingToolbar', {
			pageSize: 10,
			store: store,
			displayInfo: true,
			plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		}),

	});
	var pcsxWin = Ext.create("Ext.window.Window", {
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
				items: [pcsxForm],
				height: 200,
				layout: 'fit',
				//autoScroll: true
			}, {
				region: 'north',
				items: [pcsxGrid],
				//width: 200,
				height: 400,
				split: true,
				floatable: false,
				//autoScroll: true
			}]
		})
		/////////////////批次筛选结束//////////////////////////////////////////////
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
				xtype: 'textfield',
				fieldLabel: '煤样编号',
				width: 360,
				afterLabelTextTpl: required,
				name: 'yYear',
			}, {

				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: [{
						name: 'kbKey',
						type: 'Integer'
					}, {
						name: 'kbValue',
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
				valueField: 'kbKey',
				displayField: 'kbValue',
				fieldLabel: '&nbsp&nbsp矿别',
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
						[0, '鹿煤'],
						[2, '其它'],
					]
				}),
				name: 'station.sRailwaysbureau',
				hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				valueField: 'cpKey',
				displayField: 'cpValue',
				fieldLabel: '产品名称',
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

				xtype: "fieldcontainer",
				layout: "hbox",
				items: [{
					xtype: "textfield",
					fieldLabel: "&nbsp&nbsp批次",
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
							pcsxWin.show();
						}
					}
					/************创建单位搜索框结束***********/
				}]

			}, {
				xtype: 'textfield',
				fieldLabel: '吨数',
				width: 360,
				afterLabelTextTpl: required,
				name: 'yYear',
			}, {
				xtype: 'textfield',
				fieldLabel: '&nbsp&nbsp车数',
				width: 360,
				name: 'yYear',
			}, {

				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: [{
						name: 'cydKey',
						type: 'Integer'
					}, {
						name: 'cydValue',
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
				valueField: 'cydKey',
				displayField: 'cydValue',
				fieldLabel: '采样地',
				width: 360,
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
					fieldLabel: "&nbsp&nbsp生产单位",
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
							companyWin.show();
						}
					}
					/************创建单位搜索框结束***********/
				}]
			}, {

				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: [{
						name: 'bcKey',
						type: 'Integer'
					}, {
						name: 'bcValue',
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
				valueField: 'bcKey',
				displayField: 'bcValue',
				fieldLabel: '班次',
				width: 360,
				queryMode: 'local', //数据模式,local代表本地数据模式
				selectOnTab: false,
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}

			}, {
				xtype: 'textfield',
				fieldLabel: '&nbsp&nbsp主采煤层',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'textfield',
				fieldLabel: '含矸率',
				width: 360,
				afterLabelTextTpl: required,
				name: 'yYear',
			}, {

				xtype: "fieldcontainer",
				layout: "hbox",
				items: [{
					xtype: "textfield",
					fieldLabel: "&nbsp&nbsp收货单位",
					flex: 1,
					width: 338,
					value: '',
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
				fieldLabel: '采样人',
				afterLabelTextTpl: required,
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'textfield',
				fieldLabel: '&nbsp&nbsp制样人',
				afterLabelTextTpl: required,
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'datefield',
				fieldLabel: '采样开始时间',
				width: 360,
				afterLabelTextTpl: required,
				name: 'yYear',
			}, {
				xtype: 'datefield',
				fieldLabel: '&nbsp&nbsp采样结束时间',
				width: 360,
				afterLabelTextTpl: required,
				name: 'yYear',
			}, {
				xtype: 'datefield',
				fieldLabel: '制样开始时间',
				width: 360,
				afterLabelTextTpl: required,
				name: 'yYear',
			}, {
				xtype: 'datefield',
				fieldLabel: '&nbsp&nbsp制样结束时间',
				width: 360,
				afterLabelTextTpl: required,
				name: 'yYear',
			}, {
				xtype: 'textfield',
				fieldLabel: '制定人',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'datefield',
				fieldLabel: '制定日期',
				width: 360,
				name: 'yYear',
			}, {
				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: [{
						name: 'mybjKey',
						type: 'Integer'
					}, {
						name: 'mybjValue',
						type: 'String'
					}],
					data: [
						[0, '正常'],
						[1, '异常'],

					]
				}),
				name: 'station.sRailwaysbureau',
				hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				valueField: 'mybjKey',
				displayField: 'mybjValue',
				fieldLabel: '煤样标记',
				afterLabelTextTpl: required,
				width: 360,
				queryMode: 'local', //数据模式,local代表本地数据模式
				selectOnTab: false,
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}
			}, {
				xtype: 'textarea',
				fieldLabel: '备注',
				width: 720,
				name: 'yYear',
			}],
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
		title: '维护煤样采制信息 ',
		//引入仓库
		store: store,
		//引入选择框
		selModel: sm,
		//定义列
		columns: [{
				id: '',
				text: '煤样编号',
				sortable: true,
				flex: 0,
				width: 75,

			}, {
				id: '',
				text: '矿别',
				sortable: true,
				dataIndex: 'spSource',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '矿别',
				sortable: true,
				dataIndex: 'spSource',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '产品名称',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'spProduct',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '批次',
				sortable: true,
				dataIndex: 'spBatch',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '采样地',
				sortable: true,
				dataIndex: 'spAddress',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '生产单位',
				sortable: true,
				dataIndex: 'spDepartment',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '班次',
				sortable: true,
				dataIndex: 'spClasses',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '主采煤层',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'spMain',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '收货单位',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'spReciever',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '采样人',
				sortable: true,
				dataIndex: 'spCollecter',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '制样人',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'spProducer',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '采样开始时间',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'spCstart',
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '采样结束时间',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'spCend',
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '制样结束时间',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'spPend',
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '煤样标记',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'spFlag',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '状态',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'spState',
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
					itemId: 'removeButton',
					text: '删除',
					iconCls: 'remove',
					disabled: true
				}, '-', {
					text: '确认',
					iconCls: 'ok'
				}, '-', {
					text: '详细信息',
					tooltip: 'detailed',
					iconCls: 'detailed',
					listeners: {
						click: function() {

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
								height: 450,
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
											fieldLabel: '含矸率',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '收货单位',
											readOnly: true,
											value: '出卖方测试',
											width: 900
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
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制样接样时间',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制样结束时间',
											readOnly: true,
											width: 300
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
											readOnly: true,
											disabled:true,
											width: 750
										} ],
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
									height: 450,
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