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
	var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
	var requiredimportant = '<span style="color:red;font-weight:bold" data-qtip="Required">***</span>';
	//////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////
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
	//创建一个grid
	Ext.define('companykh', {
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
	//定义数据源将被引入到对应的列中
	var myDatakh = [
		[]

	];
	//初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
	/*Ext.tip.QuickTipManager.init();*/
	//想当于一个仓库 存储各种对像的
	var storekh = Ext.create('Ext.data.Store', {
		model: 'companykh',
		remoteSort: true,
		//每页显示的数据
		pageSize: 5,
		proxy: {
			type: 'pagingmemory',
			//引入数据源
			data: myDatakh,
			reader: {
				type: 'array'
			}
		}
	});
	//定义grid
	var agridkh = Ext.create('Ext.grid.Panel', {
		id: '',
		region: 'east',
		//grid 的标题
		title: '列表',
		//引入仓库
		store: storekh,
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
	///////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////
	//创建一个搜索表单
	var searchFormJG = Ext.create('Ext.form.Panel', {
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
			fieldLabel: '机构编号',
		}, {
			xtype: 'textfield',
			fieldLabel: '机构简称',
		}, {
			xtype: 'textfield',
			fieldLabel: '机构电话',
		}, {
			xtype: 'textfield',
			fieldLabel: '机构传真',
		}, {
			xtype: 'textfield',
			fieldLabel: '机构邮编',
		}, {
			xtype: 'textfield',
			fieldLabel: '机构负责人',
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
	Ext.define('companyJG', {
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
	//定义数据源将被引入到对应的列中
	var myDataJG = [
		[]

	];
	//初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
	Ext.tip.QuickTipManager.init();
	//想当于一个仓库 存储各种对像的
	var storeJG = Ext.create('Ext.data.Store', {
		model: 'companyJG',
		remoteSort: true,
		//每页显示的数据
		pageSize: 5,
		proxy: {
			type: 'pagingmemory',
			//引入数据源
			data: myDataJG,
			reader: {
				type: 'array'
			}
		}
	});
	///////////////////////////////////////////////////
	//定义grid
	var agridJG = Ext.create('Ext.grid.Panel', {
		id: '',
		region: 'east',
		//grid 的标题
		title: '单位列表',
		//引入仓库
		store: storeJG,
		//定义列
		columns: [{
			id: '',
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
	//////////////////////////////////////////////////

	/***********************年度新增开始********************************/
	var formndxz = Ext.create('Ext.form.Panel', {
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
					xtype: 'textfield',
					fieldLabel: '年度',
					afterLabelTextTpl: required,
					width: 460,
					name: 'yYear',
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp计划销量',
					afterLabelTextTpl: required,
					width: 490,
				}, {
					xtype: 'displayfield',
					fieldLabel: '',
					width: 950,
				}, {
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
				}, {
					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "displayfield",
						fieldLabel: "总量",
						readOnly: true,
						value: '8888',
						flex: 1,
						width: 230,
						disabled: true,
						name: 'pProductionunit',
						allowBlank: false,
					}, {
						xtype: "button",
						icon: '../../common/shared/icons/fam/create.png',
						/************创建单位搜索框开始***********/
						listeners: {
							click: function() {}
						}
					}]

				}, {
					xtype: 'displayfield',
					fieldLabel: '',
					width: 950,
				}, {
					xtype: 'textfield',
					fieldLabel: '制定人',
					afterLabelTextTpl: required,
					width: 460,
				}, {
					xtype: 'datefield',
					fieldLabel: '&nbsp&nbsp制定日期',
					afterLabelTextTpl: required,
					width: 490,
				}, {
					xtype: 'textfield',
					fieldLabel: '制定机构',
					afterLabelTextTpl: required,
					width: 460,
				}, {
					xtype: 'textarea',
					fieldLabel: '备注',
					width: 950,
				},

			],
		}, ],
	});
	////////////////////////////////////////////////////////
	var ndxzWin = new Ext.Window({
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

	/***********************年度新增结束********************************/
	/***********************年度详情新增开始********************************/
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
						fieldLabel: "客户名称",
						width: 438,
						flex: 0,
						afterLabelTextTpl: required,
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
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp客户类别',
					width: 490,
					name: 'yYear',
				}, {
					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: [{
							name: 'cpkey',
							value: 'Integer'
						}, {
							name: 'cpValue',
							value: 'String'
						}],
						data: [
							[0, '煤泥'],
							[1, '地销商品煤'],
							[2, '块煤'],
							[3, '铁运商品煤'],
							[4, '脏煤'],
							[5, '原煤（东煤场）'],
							[6, '原煤（西场煤）'],
							[7, '基建煤'],
							[8, '掘进煤'],
							[9, '掘进煤（筛上物）'],
							[10, '低值煤'],
							[11, '低值块煤'],
							[12, '脏杂煤'],
							[13, '脏杂煤泥'],

						]
					}),
					name: 'csType',
					hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'cpkey',
					displayField: 'cpValue',
					fieldLabel: '产品名称',
					afterLabelTextTpl: required,
					width: 460,
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
							name: 'yskey',
							value: 'Integer'
						}, {
							name: 'ysValue',
							value: 'String'
						}],
						data: [
							[0, '地销'],
							[1, '铁运'],
							[2, '水运']
						]
					}),
					name: 'csType',
					hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'yskey',
					displayField: 'ysValue',
					fieldLabel: '&nbsp&nbsp运输方式',
					afterLabelTextTpl: required,
					width: 490,
					queryMode: 'local',
					selectOnTab: false,
					typeAhead: false,
					editable: false,
					onReplicate: function() {
						this.getStore().clearFilter();
					}
				},{
					
				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: [{name:'zrrkey',value:'Integer'},
					         {name:'zrrValue',value:'String'}],
					data: [
						[0,'机构'],
						[1,'业务员'],
					]
				}),
				name: 'csType',
				hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				valueField: 'zrrkey',
				displayField: 'zrrValue',
				fieldLabel: '责任人类型',
				afterLabelTextTpl: required,
				width:460,
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
						fieldLabel: "&nbsp&nbsp责任人",
						afterLabelTextTpl: required,
						width: 468,
						flex: 0,
						value: '',
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
										title: '部门搜索',
										items: [searchFormJG],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [agridJG],
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
					xtype: 'textfield',
					fieldLabel: '计划销量',
					afterLabelTextTpl: required,
					width: 460,
				}, {
					xtype: 'displayfield',
					fieldLabel: '',
					width: 950,
				}, {
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
				}, {
					xtype: 'displayfield',
					fieldLabel: '',
					width: 950,
				}, {
					xtype: 'textarea',
					fieldLabel: '备注',
					width: 950,
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

	/***********************年度详情新增结束********************************/
	// register model
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
			name: 'yId',
			type: 'string'
		}, {
			name: 'yYear',
			type: 'Integer'
		}, {
			name: 'yPlan',
			type: 'Integer'
		}, {
			name: 'yUser',
			type: 'string'
		}, {
			name: 'yDate',
			type: 'date',
			dateFormat: 'n/j h:i'
		}]
	});
	//定义数据源将被引入到对应的列中
	var myData = [
		['xxx', 1999, 999, 'xxx', '9/1 12:00']

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
		title: '制定年度销售计划',
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
				dataIndex: 'yId',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				text: '年份',
				sortable: true,
				/*renderer: Ext.util.Format.usMoney,*/
				dataIndex: 'yYear',
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
				text: '计划销量',
				sortable: true,
				dataIndex: 'yPlan',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '制定人',
				sortable: true,
				dataIndex: 'yUser',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '制定日期',
				sortable: true,
				//格式化日期
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				dataIndex: 'yDate',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '指定单位',
				sortable: true,
				dataIndex: 'yUser',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '状态',
				sortable: true,
				dataIndex: 'yUser',
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
					text: '新增',
					tooltip: 'add',
					iconCls: 'add',
					listeners: {
						click: function() {
							formndxz.form.reset();
							ndxzWin.add(formndxz);
							ndxzWin.show();

						}

					}
				}, '-', {
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
							ndxzWin.add(formndxz);
							ndxzWin.show();
							formndxz.getForm().loadRecord(record[0]);
							Ext.getCmp('formpid').readOnly = true;
							addContantForm.getForm().url = '/XJManager/base/updateProduct.do';
							grid.getSelectionModel().clearSelections();
							grid.getView().refresh();
						}

					}
				}, '-', {
					itemId: 'removeButton',
					text: '删除',
					tooltip: 'remove',
					iconCls: 'remove',
					disabled: true
				}, '-', {
					text: '送审',
					tooltip: 'submit for censorship',
					iconCls: 'songshen'
				}, '-', {
					text: '审批意见',
					tooltip: 'Approval opinions',
					iconCls: 'shenpiyijian',
					listeners: {
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
					text: '打印',
					tooltip: 'print',
					iconCls: 'print'
				}, '-', {
					text: '详细信息',
					tooltip: 'detailed',
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
											fieldLabel: '编号',
											value: 'xxx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '年份',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '计划销量',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '一月',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '二月',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '三月',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '四月',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '五月',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '六月',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '七月',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '八月',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '九月',
											readOnly: true,
											value: '出卖方测试',
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '十月',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '十一月',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '十二月',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定人',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定日期',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定单位',
											readOnly: true,
											width: 300
										}, {
											xtype: 'textarea',
											fieldLabel: '备注',
											disabled: true,
											readOnly: true,
											width: 850
										}],
									},
									//////////////////////////////////////////////////////////////////////

								],

							});
							/////////////////////////////////////////////////////////
							var gridcontantxq = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								title: '明细信息',
								selModel: sm,
								//autoScroll: true,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
									id: '',
									text: '客户名称',
									sortable: true,
									//与定义的类中的属性匹配
									dataIndex: 'yYear',
									flex: 0,
									//鼠标点击时能够编辑
								}, {
									text: '客户类别',
									sortable: true,
									dataIndex: 'sourceName',
									//width: 290,
									//鼠标点击时能够编辑
								}, {
									text: '产品名称',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '运输方式',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '责任人类型',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '责任人',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '计划销量',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '一月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '二月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '三月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '四月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '五月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '六月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '七月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '八月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '九月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '十月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '十一月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '十二月',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '备注',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}],

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
														formxqtj.form.reset();
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
														var record = gridcontantxq.getSelectionModel().getSelection();
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
																		Ext.getCmp('xiangqingz').setHeight(266);
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