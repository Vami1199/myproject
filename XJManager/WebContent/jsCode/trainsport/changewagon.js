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
	//创建一个搜索表单
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
	//定义grid
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

	//////////////////////////////////////////////////////
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
			//map中的键
			valueField: '',
			//map中的值 
			displayField: 'coal',
			//选中下拉框后再点击面板就会多出一行,不知道有卵子用
			/*plugins: [ Ext.ux.FieldReplicator ],*/
			fieldLabel: '是否发站',
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
	var agridcz = Ext.create('Ext.grid.Panel', {
		id: 'agrid',
		region: 'east',
		//grid 的标题
		title: '列表',
		//引入仓库
		store: store,
		//定义列
		columns: [{
			id: 'coId',
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
				fieldLabel: '批次',
			}, {
				xtype: 'datefield',
				fieldLabel: '发车开始日期',
				afterLabelTextTpl: required,
			}, {
				xtype: 'datefield',
				fieldLabel: '发车截止日期',
				afterLabelTextTpl: required,
			}, {
				xtype: 'textfield',
				fieldLabel: '车号',
			}, {
				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: [{
						name: 'startkey',
						value: 'Integer'
					}, {
						name: 'startValue',
						value: 'String'
					}],
					data: [
						[0, '张集'],
						[1, '颍上'],
					]
				}),
				name: 'csType',
				hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				valueField: 'startkey',
				displayField: 'startValue',
				fieldLabel: '发站',
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
					fieldLabel: "到站",
					width: 368,
					flex: 0,
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
					fieldLabel: "结算单位",
					width: 368,
					flex: 0,
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

				xtype: "fieldcontainer",
				layout: "hbox",
				items: [{
					xtype: "textfield",
					fieldLabel: "收货单位",
					width: 368,
					flex: 0,
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

			},

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
		/**********************************变更相关**************************/
	var formChange = Ext.create('Ext.form.Panel', {
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
		width: 700,
		//height:'auto',
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
					fieldLabel: '原到站',
					width: 330,

				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp现到站',
					width: 330,
					name: 'tpId',
				}, {
					xtype: 'textfield',
					fieldLabel: '原收货单位',
					width: 330,
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp先收货单位',
					width: 330,
				}, {
					xtype: 'textfield',
					fieldLabel: '原结算单位',
					width: 330,
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp现结算单位',
					width: 330,
				}, {
					xtype: 'textfield',
					fieldLabel: '原合同',
					width: 330,
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp现合同',
					width: 330,
				}, {
					xtype: 'textfield',
					fieldLabel: '原月计划',
					width: 330,
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp现月计划',
					width: 330,
				}, {
					xtype: 'textfield',
					fieldLabel: '原日计划',
					width: 330,
				}, {

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "&nbsp&nbsp现日计划",
						width: 308,
						flex: 0,
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
								
								/////////////////////////////////////////////////////////
								var changeFormnei = Ext.create('Ext.form.Panel', {
									region: 'west',
									plain: true,
									border: 0,
									bodyPadding: 0,
									autoScroll: true,
									width: 900,
									//height:'auto',
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
												fieldLabel: '开始日期',
												width: 450,

											}, {
												xtype: 'combo',
												store: Ext.create('Ext.data.ArrayStore', {
													fields: [{
														name: 'stationkey',
														value: 'Integer'
													}, {
														name: 'stationValue',
														value: 'String'
													}],
													data: [
														[0, '张集'],
														[1, '颍上'],
													]
												}),
												name: 'csType',
												hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
												emptyText: '-----请选择-----',
												valueField: 'stationkey',
												displayField: 'stationValue',
												fieldLabel: '&nbsp&nbsp发站',
												width:450,
												queryMode: 'local',
												selectOnTab: false,
												typeAhead: false,
												editable: false,
												onReplicate: function() {
													this.getStore().clearFilter();
												}

											}, {
												xtype: 'datefield',
												fieldLabel: '截止日期',
												width: 450,
												name: 'tpId',
											}, {

												xtype: "fieldcontainer",
												layout: "hbox",
												items: [{
													xtype: "textfield",
													fieldLabel: "&nbsp&nbsp到站",
													width: 428,
													flex: 0,
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

											},

											{

												xtype: "fieldcontainer",
												layout: "hbox",
												items: [{
													xtype: "textfield",
													fieldLabel: "结算单位",
													width: 428,
													flex: 0,
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

												xtype: "fieldcontainer",
												layout: "hbox",
												items: [{
													xtype: "textfield",
													fieldLabel: "收货单位",
													width: 428,
													flex: 0,
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
											text: '保存'
										}, {
											minWidth: 80,
											text: '取消'
										}]
									}]
								});
								/////////////////////////////////////////////////////////
								var gridChange = Ext.create('Ext.grid.Panel', {
									//grid 的标题
									title: '日要车计划',
									autoScroll: true,
									selModel: sm,
									//引入仓库
									store: store,
									//引入选择框
									//定义列
									columns: [{
										id: '',
										text: '年份',
										sortable: true,
										dataIndex: 'scContractid',
										flex: 0,
									}, {
										text: '月份',
										sortable: true,
										dataIndex: 'sourceName',
									}, {
										text: '日期',
										sortable: true,
										dataIndex: 'sourceName',
									}, {
										text: '总请车数',
										sortable: true,
										dataIndex: 'sourceName',
									}, {
										text: '总确认数',
										sortable: true,
										dataIndex: 'sourceName',
									}, {
										text: '总实发数',
										sortable: true,
										dataIndex: 'sourceName',
									}, {
										text: '总运量',
										sortable: true,
										dataIndex: 'sourceName',
									}, {
										text: '发站',
										sortable: true,
										dataIndex: 'sourceName',
									}, {
										text: '到站',
										sortable: true,
										dataIndex: 'sourceName',
									},{
										text: '收货单位',
										sortable: true,
										dataIndex: 'sourceName',
									},{
										text: '结算单位',
										sortable: true,
										dataIndex: 'sourceName',
									},{
										text: '合同编号',
										sortable: true,
										dataIndex: 'sourceName',
									},{
										text: '月请车计划编号',
										sortable: true,
										dataIndex: 'sourceName',
									}],

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
								////////////////////////////////////////////////////////////
								////////////////////////////////////////////
								Ext.History.init();
								///////////////////////////////////////////
								 Ext.create("Ext.window.Window", {
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
												items: [changeFormnei],
												height: 200,
												layout: 'fit',

												//autoScroll: true
											}, {
												region: 'north',
												items: [gridChange],
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
						/************创建单位搜索框结束***********/
					}]

				},

			],
		}, ],
	});
	////////////////////////////////////////////////////////
	var changeWin = new Ext.Window({
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
	/********************************变更相关结束********************************/
	// register model
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
			name: 'ahNum',
			type: 'string'
		}, {
			name: 'createdate',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'awNumber',
			type: 'string'
		}, {
			name: 'ahStart',
			type: 'string'
		}, {
			name: 'awEnd',
			type: 'string'
		}, {
			name: 'awCustomer',
			type: 'string'
		}, {
			name: 'jiesuandanwei',
			type: 'string'
		}, {
			name: 'awProduct',
			type: 'string'
		}, {
			name: 'noteTotalprice',
			type: 'long'
		}, {
			name: 'awTotal',
			type: 'BigDecimal'
		}, {
			name: 'awOwn',
			type: 'BigDecimal'
		}, {
			name: 'awProbable',
			type: 'BigDecimal'
		}, {
			name: 'jingzhong',
			type: 'BigDecimal'
		}, {
			name: 'jifeizhongliang',
			type: 'BigDecimal'
		}, {
			name: 'noteNum',
			type: 'string'
		}, {
			name: 'wcState',
			type: 'byte'
		}]
	});
	//定义数据源将被引入到对应的列中
	var myData = [
		['xxx', '9/1 12:00', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 99999999, 55, 55, 55, 55, 55, 'xx', 1]

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
		title: '变更车皮去向信息',
		//引入仓库
		store: store,
		//引入选择框
		selModel: sm,
		//定义列
		columns: [{
				id: '',
				text: '批次',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahNum',
				flex: 0,
				width: 75,
			}, {
				text: '装车日期',
				sortable: true,
				//格式化日期
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				dataIndex: 'createdate',
				width: 75,
			}, {
				id: '',
				text: '车号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'awNumber',
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
				text: '到站',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'awEnd',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '收货单位',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'awCustomer',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '结算单位',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'jiesuandanwei',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '产品名称',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'awProduct',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '运杂费总额',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'noteTotalprice',
				flex: 0,
				width: 75,
			}, {
				text: '载重',
				sortable: true,
				dataIndex: 'awTotal',
				width: 75,
			}, {
				text: '自重',
				sortable: true,
				dataIndex: 'awOwn',
				width: 75,
			}, {
				id: '',
				text: '毛重',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'awProbable',
				flex: 0,
				width: 75,
			}, {
				text: '净重',
				sortable: true,
				dataIndex: 'jingzhong',
				width: 75,
			}, {
				text: '计费重量',
				sortable: true,
				dataIndex: 'jifeizhongliang',
				width: 75,
			}, {
				text: '大票号码',
				sortable: true,
				/*renderer: Ext.util.Format.usMoney,*/
				dataIndex: 'noteNum',
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
				text: '状态',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'wcState',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '合同编号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'wcState',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '月请车计划编号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'wcState',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '要车日期',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'wcState',
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
					text: '筛选',
					tooltip: '',
					iconCls: 'search',
					listeners: {
						'click': function() {
							panelnew.show();
						}
					}

				}, '-', {
					text: '变更',
					tooltip: ' ',
					iconCls: 'change',
					listeners: {
						click: function() {
							changeWin.add(formChange),
								changeWin.show();
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