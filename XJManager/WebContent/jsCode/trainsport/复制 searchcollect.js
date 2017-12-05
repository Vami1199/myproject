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
	/******************************筛选相关开始**********************/
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
				fieldLabel: '货票汇总表编号',
			}, {
				xtype: 'datefield',
				fieldLabel: '运输起始日期',
				afterLabelTextTpl: required,
			}, {
				xtype: 'datefield',
				fieldLabel: '运输截止截止日期',
				afterLabelTextTpl: required,
			}, {
				xtype: 'textfield',
				fieldLabel: '状态',
			}, {
				xtype: 'textfield',
				fieldLabel: '发站',
			}, {
				xtype: 'textfield',
				fieldLabel: '到站',
			}, {
				xtype: 'textfield',
				fieldLabel: '矿别',
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
		/******************************筛选相关结束**********************/
		// register model
		//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
				name: 'tpId',
				type: 'string'
			}, {
				name: 'tpTransporttime',
				type: 'date',
				dateFormat: 'n/j h:i'
			}, {
				name: 'ahSource',
				type: 'string'
			}, {
				name: 'ahNum',
				type: 'string'
			}, {
				name: 'ahStart',
				type: 'string'
			}, {
				name: 'awEnd',
				type: 'string'
			}, {
				name: '结算单位',
				type: 'string'
			}, {
				name: 'awCustomer',
				type: 'string'
			}, {
				name: 'wcTotaltrain',
				type: 'integer'
			}, {
				name: '数量',
				type: 'integer'
			}, {
				name: 'noteTotalprice',
				type: 'long'
			}, {
				name: 'tpOtherprice',
				type: 'long'
			}, {
				name: 'tpTotal',
				type: 'long'
			}, {
				name: 'tpReceipt',
				type: 'byte'
			}, {
				name: 'wcState',
				type: 'byte'
			}, {
				name: 'ahUser',
				type: 'string'
			}, {
				name: 'ahSettime',
				type: 'date',
				dateFormat: 'n/j h:i'
			}

		]
	});
	//定义数据源将被引入到对应的列中
	var myData = [
		['xxx', '9/1 12:00', 'xxx', 'xxx', 'xxx', 'xxx', 'xx', 'xxx', 'xxx', 999, 888, 6666666, 9999999, 1, 0, 'xxxx', '9/10 12:00']

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
		title: '查询铁路货票汇总表',
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
				dataIndex: 'tpId',
				flex: 0,
				width: 75,
			},

			{
				text: '运输日期',
				sortable: true,
				//格式化日期
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				dataIndex: 'tpTransporttime',
				width: 75,
			}, {
				text: '矿别',
				sortable: true,
				/*renderer: Ext.util.Format.usMoney,*/
				dataIndex: 'ahSource',
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
				text: '批次',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahNum',
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
				text: '结算单位',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: '结算单位',
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
				text: '车数',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'wcTotaltrain',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '数量',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: '数量',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '大票运费总额',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'noteTotalprice',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '其他费用',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'tpOtherprice',
				flex: 0,
				width: 75,
			}, {
				id: '',
				text: '合计金额',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'tpTotal',
				flex: 0,
				width: 75,
			}, {
				text: '回执结算',
				sortable: true,
				dataIndex: 'tpReceipt',
				width: 75,
			}, {
				text: '状态',
				sortable: true,
				dataIndex: 'wcState',
				width: 75,
			}, {
				text: '制定人',
				sortable: true,
				dataIndex: 'ahUser',
				width: 75,
			}, {
				text: '制定日期',
				sortable: true,
				//格式化日期
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				dataIndex: 'ahSettime',
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
					iconCls: 'search',
					listeners: {
						'click': function() {
							panelnew.show();
						}
					}
				}, {
					text: '打印',
					iconCls: 'print',

				}, '-', {
					text: '详细信息',
					tooltip: 'detailed',
					iconCls: 'detailed',
					listeners: {
							click: function() { ////////////////////////////////////////////
								var win
								var showForm = Ext.create('Ext.form.Panel', {
									region: '',
									plain: true,
									border: false,
									bodyPadding: false,
									width: 1000,
									layout: 'form',
									//height:100,
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
												fieldLabel: '编号',
												value: '测试',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '运输日期',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '发站',
												readOnly: true,
												width: 300
											}, 
											{
												xtype: 'displayfield',
												fieldLabel: '到站',
												readOnly: true,
												value: '出卖方测试',
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '车数',
												value: '北京市丰台区万达广场',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '数量（吨）',
												readOnly: true,
												width: 300
											}, 
											{
												xtype: 'displayfield',
												fieldLabel: '结算单位',
												value: '万达',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '收货单位',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '合计金额',
												readOnly: true,
												width: 300
											}, 
											{
												xtype: 'displayfield',
												fieldLabel: '大票运费总额',
												value: '',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '其它费用',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '产品名称',
												readOnly: true,
												width: 300
											}, 
											{
												xtype: 'displayfield',
												fieldLabel: '矿别',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '回执结算',
												value: '',
												readOnly: true,
												width: 300
											},{
												xtype: 'displayfield',
												fieldLabel: '状态',
												readOnly: true,
												width: 300
											},  
											{
												xtype: 'displayfield',
												fieldLabel: '制定人',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '制定日期',
												readOnly: true,
												width: 300
											},{
												xtype: 'displayfield',
												fieldLabel: '制定单位',
												readOnly: true,
												width: 300
											}, 
											],
										},
										//////////////////////////////////////////////////////////////////////

									],

								});
								///////////////大票信息/////////////////////////////
								var gridDP = Ext.create('Ext.grid.Panel', {
									//grid 的标题
									//autoScroll: true,
									//引入仓库
									store: store,
									//引入选择框
									//定义列
									columns: [{
											id: 'sourceId',
											text: 'xx',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: 'cName',
											flex: 0,
											width: 75,
											//鼠标点击时能够编辑
											editor: {
												allowBlank: false
											}
										}, {
											text: 'xx',
											sortable: true,
											dataIndex: 'sourceName',
											width: 75,
											//鼠标点击时能够编辑
											editor: {
												allowBlank: false
											}
										}, {
											text: 'xxx',
											sortable: true,
											dataIndex: 'sourceCompanyid',
											width: 75,
										}, {
											text: 'xx',
											sortable: true,
											dataIndex: 'sourceCompanyid',
											width: 75,
										}, {
											text: 'xx',
											sortable: true,
											dataIndex: 'sourceCompanyid',
											width: 75,
										}, {
											text: 'xx',
											sortable: true,
											dataIndex: 'sourceCompanyid',
											width: 75,
										}, {
											text: 'xx',
											sortable: true,
											dataIndex: 'sourceCompanyid',
											width: 75,
										}, {
											text: 'xx',
											sortable: true,
											dataIndex: 'sourceCompanyid',
											width: 75,
										}, {
											text: 'xx',
											sortable: true,
											dataIndex: 'sourceCompanyid',
											width: 75,
										}, {
											text: 'xx',
											sortable: true,
											dataIndex: 'sourceCompanyid',
											width: 75,
										}, {
											text: 'xx',
											sortable: true,
											dataIndex: 'sourceCompanyid',
											width: 75,
										}, {
											text: 'xx',
											sortable: true,
											dataIndex: 'sourceCompanyid',
											width: 75,
										}, {
											text: 'xx',
											sortable: true,
											dataIndex: 'sourceCompanyid',
											width: 75,
										}, {
											text: 'xx',
											sortable: true,
											dataIndex: 'sourceCompanyid',
											width: 75,
										}, {
											text: 'xx',
											sortable: true,
											dataIndex: 'sourceCompanyid',
											width: 75,
										},

									],
									// 保存和取消按钮
									dockedItems: [
										//各种按钮布局
										{
											xtype: 'toolbar',
											items: [{
													text: 'xx',
													tooltip: 'add',
													iconCls: 'add',
													listeners: {}

												}, {
													text: 'xx',
													tooltip: '',
													iconCls: 'edit',

													listeners: {
														click: function() {}
													}
												}, {

													text: 'xx',
													tooltip: '',
													iconCls: 'delete',

													listeners: {
														click: function() {

														}
													}

												}

											]
										}
									],

									//table边框的设定
									stripeRows: true,
									height: '100%',
									width:1150,
									autoScroll: true,
									frame: false,
									//autoScroll: true,
									bbar: Ext.create('Ext.PagingToolbar', {
										pageSize: 5,
										store: store,
										displayInfo: true,
										plugins: Ext.create('Ext.ux.ProgressBarPager', {})
									}),

								});
								////////////////其它费用信息////////////////////////////////////////////
								var gridOther= Ext.create('Ext.grid.Panel', {
									//grid 的标题
									selModel: sm,
									//引入仓库
									store: store,
									//引入选择框
									//定义列
									columns: [{
											id: '',
											text: '费用项目名称',
											sortable: true,
											width:330,
											//与定义的类中的属性匹配
											dataIndex: 'cName',
											flex: 0,
										}, {
											text: '费用金额',
											sortable: true,
											width:330,
											dataIndex: 'sourceName',
										}, {
											text: '备注',
											sortable: true,
											dataIndex: 'sourceCompanyid',
											width:330,
										},

									],

									// 保存和取消按钮
									//dockedItems: [],

									//table边框的设定
									stripeRows: true,
									height: '100%',
									width: 'auto',
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
								Ext.History.init();
								////////////////////////////////////////////////////////////////  
								var tab = Ext.create('Ext.TabPanel', {
									id: 'main-tabs',
									height: 300,
									width: 1000,
									activeTab: 0,
									//autoScroll: true,
									defaults: {
										padding: 10
									},

									items: [{
										xtype: 'tabpanel',
										title: '大票信息',
										activeTab: 0,
										padding: 5,
										border: true,
										plain: true,
										//autoScroll: true,
										defaults: {
											padding: 10
										},
										items: [{
											title: '大票',
											autoScroll: true,
											items: [gridDP],
											//autoScroll: true,
										}],
										listeners: {
											tabchange: onTabChange
										}
									}, {
										xtype: 'tabpanel',
										title: '其它费用信息',
										activeTab: 0,
										padding: 5,
										border: true,
										plain: true,
										defaults: {
											padding: 10
										},
										items: [{
											title: '其它',
											items: [gridOther],
										}],
										listeners: {
											tabchange: onTabChange
										}
									}],
									listeners: {
										tabchange: onTabChange,
										afterrender: onAfterRender
									}
								});
								//////////////////////////////////////////////////////////////      
								var tokenDelimiter = ':';
								function onTabChange(
									tabPanel, tab) {
									var tabs = [],
										ownerCt = tabPanel.ownerCt,
										oldToken, newToken;

									tabs.push(tab.id);
									tabs
										.push(tabPanel.id);

									while(ownerCt &&
										ownerCt
										.is('tabpanel')) {
										tabs
											.push(ownerCt.id);
										ownerCt = ownerCt.ownerCt;
									}

									newToken = tabs
										.reverse()
										.join(
											tokenDelimiter);

									oldToken = Ext.History
										.getToken();

									if(oldToken === null ||
										oldToken
										.search(newToken) === -1) {
										Ext.History
											.add(newToken);
									}
								}
								function onAfterRender() {
									Ext.History
										.on(
											'change',
											function(
												token) {
												var parts, tabPanel, length, i;

												if(token) {
													parts = token
														.split(tokenDelimiter);
													length = parts.length;

													// setActiveTab in all nested tabs
													for(i = 0; i < length - 1; i++) {
														Ext
															.getCmp(
																parts[i])
															.setActiveTab(
																Ext
																.getCmp(parts[i + 1]));
													}
												}
											});

									// This is the initial default state.  Necessary if you navigate starting from the
									// page without any existing history token params and go back to the start state.
									var activeTab1 = Ext
										.getCmp(
											'main-tabs')
										.getActiveTab(),
										activeTab2 = activeTab1
										.getActiveTab();

									onTabChange(
										activeTab1,
										activeTab2);
								}
								win = Ext
									.create(
										"Ext.window.Window", {
											/*title:'搜索', */
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
											//模态窗体  
											modal: true,
											//模态窗体  
											plain: true,
											//滚动条设置  
											autoScroll: true,
											items: [
											{
												id: 'xiangqing',
												region: 'north',
												title: '详细信息',
												items: [showForm],
												height: 200,
												dockedItems: [
													//各种按钮布局
													{
														xtype: 'toolbar',
														items: [ {
																text: '概要信息',
																iconCls: 'detailed',
																handler: function() {
																	win.removeAll();
																	win.close();
																}
															}
														]
													}
												],

											}, 
											{
												region: 'north',
												items: [tab],
												//width: 200,
												split: true,
												floatable: false,
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