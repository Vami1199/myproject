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
	//////////////////////////产品相关开始///////////////////////////////////
	var agridcp = Ext.create(
		'Ext.grid.Panel', {
			id: 'agrid',
			region: 'east',
			//grid 的标题
			title: '单位列表',
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
	/////////////红冲相关开始////////////////////
	var searchFormhc = Ext.create('Ext.form.Panel', {
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
			fieldLabel: '过磅日期（开始）',
			afterLabelTextTpl: required,
		}, {
			xtype: 'datefield',
			fieldLabel: '过磅日期（结束）',
			afterLabelTextTpl: required,
		}, {
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
			fieldLabel: '矿别',
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
				fieldLabel: "收货单位",
				flex: 1,
				value: '',
				afterLabelTextTpl: required,
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
			xtype: "fieldcontainer",
			layout: "hbox",
			items: [{
				xtype: "textfield",
				fieldLabel: "产品名称",
				flex: 1,
				value: '',
				afterLabelTextTpl: required,
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
			fieldLabel: '车号',
			width: 360,
			name: 'yYear',
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
	var agridhc = Ext.create('Ext.grid.Panel', {
		id: '',
		region: 'east',
		//grid 的标题
		title: '列表',
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
			text: '矿别',
			sortable: true,
			dataIndex: 'coShort',
			width: 75
		}, {
			text: '产品名称',
			sortable: true,
			dataIndex: 'coName',
			width: 75
		}, {
			text: '过磅日期',
			sortable: true,
			dataIndex: 'coPhone',
			width: 75
		}, {
			text: '收货单位',
			sortable: true,
			dataIndex: 'coPostcode',
			width: 75
		}, {
			text: '发往地点',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '库房',
			sortable: true,
			dataIndex: 'coLeader',
			width: 75
		}, {
			text: '运输类型',
			sortable: true,
			dataIndex: 'coAddress',
			width: 75
		}, {
			text: '承运人',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '车型',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '载重',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '车号',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '皮重',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '毛重',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '净重',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '计量单位',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '煤质',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '空车称重时间',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '司磅员',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '监磅员',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '港站',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '运输单位',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '产品价格',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '贷款',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '运价',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '运费',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		},{
			text: '是否拼车',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		},
		{
			text: '运输里程',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		},{
			text: '已回执否',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		},{
			text: '原单编号',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		},{
			text: '订单类型',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		},{
			text: '订单编号',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		},{
			text: '状态',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		},
		],
		stripeRows: true,
		height: 320,
		width: 'auto',
		frame: false,
	});
	var hongchongWin = Ext.create("Ext.window.Window", {
		title: '搜索',
		closable: true,
		closeAction: 'hide',
		width: 800,
		minWidth: 350,
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
			region: 'west',
			title: '搜索条件',
			items: [searchFormhc],
			width: 200,
			split: true,
			//是否可缩小
			collapsible: true,
			floatable: false
		}, {
			region: 'center',
			items: [agridhc],
			width: 200,
			split: true,
			floatable: false,
			autoScroll: true
		}]
	});
	////////////////红冲相关结束///////////////////////////////////////	
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
				name: 'eFulldate',
				type: 'date',
				dateFormat: 'n/j h:i'
			}, {
				name: '收货单位',
				type: 'string'
			},
			/*{name: 'eReciever',type:'string'},*/
			{
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
			},
		]
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
		title: '维护重车过磅记录',
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
				text: '重车过磅日期',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eFulldate',
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
			},
			/*{
				id:'',
				text: '收货人',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eReciever',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			},*/
			{
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
					text: '红冲',
					iconCls: 'create',
					listeners: {
						click: function() {
							hongchongWin.show();
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