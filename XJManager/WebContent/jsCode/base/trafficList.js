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

	var addFormgou = Ext.create('Ext.form.Panel', {
		plain: true,
		border: 0,
		bodyPadding: 5,
		width: 500,
		fieldDefaults: {
			labelWidth: 70,
			anchor: '100%'
		},
		layout: {
			type: 'vbox',
			align: 'stretch' // Child items are stretched to full width
		},

		items: [{
			xtype: "textfield",
			flex: 1,
			fieldLabel: '铁路局',
			readOnly: 'true',
			value: '',
			//必填项
			afterLabelTextTpl: required,
			//pProductionunit
			name: 'sourceId',
			allowBlank: false,
		}, {

			xtype: "fieldcontainer",
			layout: "hbox",
			items: [{
				xtype: "textfield",
				flex: 1,
				fieldLabel: '铁路分局',
				readOnly: 'true',
				value: '',
				//必填项
				afterLabelTextTpl: required,
				//pProductionunit
				name: 'sourceId',
				allowBlank: false,
			}, {
				xtype: "button",
				icon: '../../common/shared/icons/fam/search.png',
				/************创建单位搜索框开始***********/
				listeners: {
					click: function() {
						//创建一个grid
						Ext
							.define(
								'addcompanytra', {
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
						var addStoretra = Ext.create(
								'Ext.data.Store', {
									model: 'addcompanytra',
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
						var agridtra = Ext
							.create(
								'Ext.grid.Panel', {
									id: '',
									region: 'east',
									//grid 的标题
									title: '列表',
									//引入仓库
									store: addStoretra,
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
										text: '铁路分局编号',
										sortable: true,
										//与定义的类中的属性匹配
										dataIndex: 'coId',
										flex: 0,
										width: 150,
									}, {
										text: '铁路分局名称',
										sortable: true,
										dataIndex: 'coShort',
										width: 150
									}, {
										text: '铁路局',
										sortable: true,
										dataIndex: 'coName',
										width: 150
									}, {
										text: '备注',
										sortable: true,
										dataIndex: 'coPhone',
										width: 150
									}],
									stripeRows: true,
									height: 320,
									width: 1200,
									frame: false,
								});
						//创建一个搜索表单
						var searchFormtra = Ext
							.create(
								'Ext.form.Panel', {
									region: 'west',
									plain: true,
									border: 0,
									bodyPadding: 5,
									width: 200,
									//表单发送的到的action路径
									/*url: '/XJManager/base/companyList.do',*/
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
										fieldLabel: '铁路分局编号',
										name: 'coId'
									}, {
										id: '',
										xtype: 'textfield',
										fieldLabel: '铁路分局名称',
										name: 'coId'
									}, {
										xtype: 'combo',
										store: Ext.create('Ext.data.ArrayStore', {
											fields: ['coal'],
											data: [
												['北京'],
												['上海'],
												['天津']
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
										fieldLabel: '铁路局',
										queryMode: 'local', //数据模式,local代表本地数据模式
										//tab键是否可以选择当前突出项
										selectOnTab: false,
										/****下拉框不可编辑*****/
										typeAhead: false,
										editable: false,
										onReplicate: function() {
											this.getStore().clearFilter();
										}
									},],

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

											addStoretra
												.getProxy().url = url;
											addStoretra
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

						var newWin = Ext
							.create(
								"Ext.window.Window", {
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
										items: [searchFormtra],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [agridtra],
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

		}],
		buttons: [{
			text: "保存",
			iconCls: "btn-save",
			handler: function() {}
		}, {
			text: "重置",
			iconCls: "reset",
			handler: function() {}
		}]

	})
	var Wingc = Ext.create(
			"Ext.window.Window", {
				/*title:'搜索', */
				closable: true,
				closeAction: 'hide',
				width: 200,
				minWidth: 550,
				height: 300,
				tools: [{
					type: 'pin'
				}],
				layout: {
					type: 'border',
					padding: 1
				},
				constrain: true,
				//模态窗体  
				modal: true,
				//模态窗体  
				plain: true,
				//滚动条设置  
				autoScroll: true,
				items: [{
					region: 'north',
					title: '新增',
					items: [addFormgou],
					width: 200,
					split: true,
					//是否可缩小
					floatable: false,
				}]
			})
		///////////////////////////////////////////////////
	var addFormpici = Ext.create('Ext.form.Panel', {
		region: 'west',
		plain: true,
		border: 0,
		bodyPadding: 5,
		width: 880,
		layout: 'form',
		//表单发送的到的action路径
		url: '',
		//默认设置
		fieldDefaults: {
			labelWidth: 70,
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
							fieldLabel: "发站",
							width: 400,
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
									var searchForm = Ext.create('Ext.form.Panel', {
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

									//创建一个grid
									Ext.define('company', {
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
									var myData = [
										[]

									];

									//初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
									Ext.tip.QuickTipManager.init();

									//想当于一个仓库 存储各种对像的
									var store = Ext.create('Ext.data.Store', {
										model: 'company',
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

									//定义grid
									var agrid = Ext.create('Ext.grid.Panel', {
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
											items: [searchForm],
											width: 200,
											split: true,
											//是否可缩小
											collapsible: true,
											floatable: false
										}, {
											region: 'center',
											items: [agrid],
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

			}, {
				layout: 'column',
				frame: true,
				items: [{
					xtype: 'textfield',
					fieldLabel: '车站名称',
					width: 400

				}],
			}, {
				layout: 'column',
				frame: true,
				items: [{
					xtype: 'textfield',
					fieldLabel: '铁路局',
					width: 400

				}],
			}, {
				layout: 'column',
				frame: true,
				items: [{
					xtype: 'textfield',
					fieldLabel: '铁路分局',
					width: 400

				}],
			}

		],

		dockedItems: [
			//各种按钮布局
			{
				xtype: 'toolbar',
				items: [{
					text: '确认',
					tooltip: 'detailed',
					iconCls: 'ok'
				}, '-', {
					text: '取消',
					tooltip: 'search',
					iconCls: 'cancel'
				}]
			}
		],

	});
	var piciWin = Ext.create(
		"Ext.window.Window", {
			/*title:'搜索', */
			closable: true,
			closeAction: 'hide',
			width: 500,
			height: 400,
			tools: [{
				type: 'pin'
			}],
			layout: {
				type: 'border',
				padding: 1
			},
			constrain: true,
			//模态窗体  
			modal: true,
			//模态窗体  
			plain: true,
			//滚动条设置  
			autoScroll: true,
			items: [{
				region: 'north',
				title: '',
				items: [addFormpici],
				width: 200,
				split: true,
				//是否可缩小
				floatable: false,
			}]
		});
	///////////////////////////////////////////////////

	//////////////////////////////////////////////////////
	var searchFormx = Ext.create('Ext.form.Panel', {
		region: 'west',
		plain: true,
		border: 0,
		bodyPadding: 5,
		width: 400,

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
				fieldLabel: '车流编号',
			}, {
				xtype: 'textfield',
				fieldLabel: '车流名称',
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
			height: 200,
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
					items: [searchFormx],
					width: 200,
					split: true,
					//是否可缩小
					floatable: false,
				},

			]
		})
		////////////////////////////////////////////////////////////////////

	// register model
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
			name: 'tId',
			type: 'Integer'
		}, {
			name: 'tName',
			type: 'string'
		}, {
			name: 'tRemark',
			type: 'string'
		}]
	});

	//定义数据源将被引入到对应的列中
	var myData = [
		[9, 'xxx', '备注']

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

	/////////////////////////////////////
	/*********************创建window弹窗表单开始***********************/
	var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
	var c = new Ext.Window({
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
	/***********************表单设计开始*********************/
	var proForm = Ext.create('Ext.form.Panel', {
		plain: true,
		border: 0,
		bodyPadding: 5,
		width: 420,
		title: '添加',
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
			xtype: "fieldcontainer",
			layout: "hbox",
			items: [{
				xtype: "textfield",
				fieldLabel: "车流编号",
				flex: 1,
				/*layout: 'column',*/
				value: '',
				//必填项
				afterLabelTextTpl: required,
				//pProductionunit
				name: 'tId',
				allowBlank: false,
			}]
		}, {
			xtype: 'textfield',
			fieldLabel: '车流名称',
			//必填项
			afterLabelTextTpl: required,
			//pName
			name: 'tName',
			allowBlank: false,
			tooltip: '填入产品编号'
		}, {
			xtype: 'textarea',
			fieldLabel: '备注',
			hideLabel: false,
			name: 'tRemark',
			style: 'margin:0', // Remove default margin
			flex: 1
				// Take up all *remaining* vertical space
		}]

	})

	/////////////////////////////////////

	//定义grid
	var grid = Ext.create('Ext.grid.Panel', {
		//grid 的标题
		title: '车流管理',
		//引入仓库
		store: store,
		//引入选择框
		selModel: sm,
		//定义列
		columns: [{
				id: 'tId',
				text: '车流编号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'tId',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				text: '车流名称',
				sortable: true,
				dataIndex: 'tName',
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				text: '备注',
				sortable: true,
				dataIndex: 'tRemark',
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
					text: '筛选',
					tooltip: 'search',
					iconCls: 'search',
					listeners: {
						'click': function() {
							panelnew.show();
						}
					}
				}, {
					text: '添加',
					tooltip: 'add',
					iconCls: 'add',
					listeners: {
						'click': function() {
							c.add(proForm);
							c.show();
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
							c.add(proForm);
							c.show();
							proForm.getForm().loadRecord(record[0]);

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
					text: '详细信息',
					tooltip: 'detailed',
					iconCls: 'detailed',
					listeners: {
						click: function() { ////////////////////////////////////////////
							var win
							var searchForm1 = Ext.create('Ext.form.Panel', {
								region: 'west',
								plain: true,
								border: 0,
								bodyPadding: 5,
								width: 880,
								layout: 'form',
								//表单发送的到的action路径
								url: '',
								//默认设置
								fieldDefaults: {
									labelWidth: 70,
									anchor: '100%'
								},
								items: [{
										layout: 'column',
										frame: true,
										items: [{
											xtype: 'textfield',
											fieldLabel: '车流编号',
										}, {
											xtype: 'textfield',
											fieldLabel: '&nbsp&nbsp&nbsp车流名称',
											value: 'hh'
										}, ],

									}, {
										layout: 'column',
										frame: true,
										items: [{
											xtype: 'textarea',
											fieldLabel: '备注',
											width: 600
										}, ],
									}

								],

								dockedItems: [
									//各种按钮布局
									{
										xtype: 'toolbar',
										items: [{
												text: '概要信息',
												tooltip: 'detailed',
												iconCls: 'detailed',
												listeners: {
													'click': function() {
														win.close();
													}
												}
											}, '-', {
												text: '上一条',
												tooltip: 'search',
												iconCls: 'forward'
											}, '-', {
												text: '下一条',
												tooltip: 'search',
												iconCls: 'next',
											},

										]
									}
								],

							});

							/////////////////////////////////////////////

							var searchForm2 = Ext.create('Ext.form.Panel', {
								region: 'west',
								plain: true,
								border: 0,
								bodyPadding: 5,
								width: 880,

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
										xtype: 'textarea',
										fieldLabel: '备注',
									}

								],

							});
							////////////////////////////////////////////////////
							var searchFormcanshu = Ext.create('Ext.grid.Panel', {
								//grid 的标题

								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
										id: 'tId',
										text: '站顺',
										sortable: true,
										//与定义的类中的属性匹配
										dataIndex: 'sourceId',
										flex: 0,
										width: 175,
										//鼠标点击时能够编辑
										editor: {
											allowBlank: false
										}
									}, {
										text: '车站编号',
										sortable: true,
										dataIndex: 'tId',
										width: 175,
										//鼠标点击时能够编辑
										editor: {
											allowBlank: false
										}
									}, {
										text: '车站名称',
										sortable: true,
										dataIndex: 'tName',
										width: 175,
										editor: {
											allowBlank: false
										}
									}, {
										text: '铁路局',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 175,
										editor: {
											allowBlank: false
										}
									}, {
										text: '铁路分局',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 175,
										editor: {
											allowBlank: false
										}
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

														piciWin.show()
													}

												}

											}, '-', {
												text: '前插',
												tooltip: ' edit',
												iconCls: 'edit',
												listeners: {
													click: function() {
														piciWin.show()
													}

												}
											}, '-', {
												itemId: 'removeButton',
												text: '删除',
												tooltip: 'remove',
												iconCls: 'remove',
												disabled: true
											},

										]
									}
								],

								//table边框的设定
								stripeRows: true,
								height: 200,
								width: 900,
								frame: false,

							});
							////////////////////////////////////////////////////////////
							var searchFormx = Ext.create('Ext.grid.Panel', {
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
										id: 'sourceId',
										text: '车站编号',
										sortable: true,
										//与定义的类中的属性匹配
										dataIndex: 'sourceId',
										flex: 0,
										width: 168,
										//鼠标点击时能够编辑
										editor: {
											allowBlank: false
										}
									}, {
										text: '车站名称',
										sortable: true,
										dataIndex: 'tName',
										width: 168,
										//鼠标点击时能够编辑
										editor: {
											allowBlank: false
										}
									}, {
										text: '铁路局',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 168,
										editor: {
											allowBlank: false
										}
									}, {
										text: '铁路分局',
										sortable: true,
										dataIndex: 'sourceCompanyname',
										width: 168,
										editor: {
											allowBlank: false
										}
									}

								],

								// 保存和取消按钮
								dockedItems: [
									//各种按钮布局
									{
										xtype: 'toolbar',
										items: [{
												text: '批次新增',
												tooltip: 'add',
												iconCls: 'add',
												listeners: {
													click: function() {
														addFormgou.form.reset();
														Wingc.show();
													}
												}

											},/* '-', {
												text: '修改',
												tooltip: ' edit',
												iconCls: 'edit',
												listeners: {
													click: function() {
														var record = searchFormx.getSelectionModel().getSelection();
														if(record == undefined || record == '') {
															Ext.Msg.alert('信息', '请选择一条数据');
															return;
														}
														if(record.length >= 2) {
															Ext.Msg.alert('信息', '只可以选择一条数据');
															return;
														}
														Wingc.show();
														addFormgou.getForm().loadRecord(record[0]);
														searchFormx.getSelectionModel().clearSelections();
														searchFormx.getView().refresh();
													}

												}
											}, '-', {
												itemId: 'removeButton',
												text: '删除',
												tooltip: 'remove',
												iconCls: 'remove',
												disabled: true
											}
*/
										]
									}
								],

								//table边框的设定
								stripeRows: true,
								height: 200,
								width: 900,
								frame: false,

							});
							////////////////////////////////////////////
							Ext.History.init();
							// Needed if you want to handle history for multiple components 												in the same page.
							// Should be something that won't be in component ids.
							////////////////////////////////////////////////////////////
							////////////////////////////////////////////////////////////////  
							var tab = Ext
								.create(
									'Ext.TabPanel', {
										id: 'main-tabs',
										height: 200,
										width: 900,
										activeTab: 0,
										defaults: {
											padding: 10
										},

										items: [{
												xtype: 'tabpanel',
												title: '车流到站',
												activeTab: 0,
												padding: 5,
												border: true,
												plain: true,
												defaults: {
													padding: 10
												},
												items: [{
													title: '到站',
													items: [searchFormcanshu],
												}],
												listeners: {
													tabchange: onTabChange
												}
											}, {
												xtype: 'tabpanel',
												title: '车流过口',
												activeTab: 0,
												padding: 5,
												border: true,
												plain: true,
												defaults: {
													padding: 10
												},
												items: [{
													title: '过口',
													items: [searchFormx],
													html: '测试二次点击'
												}],
												listeners: {
													tabchange: onTabChange
												}
											},

											/*{	xtype: 'tabpanel',
												title: '产品构成',
												id: 'tab2',
												items: [searchFormx],
												html: 'Tab 2 content'
											}*/
										],
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

							// Handle this change event in order to restore the UI to the appropriate history state
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
								var activeTab1 = Ext.getCmp('main-tabs').getActiveTab(),activeTab2 = activeTab1.getActiveTab();

								onTabChange(activeTab1,activeTab2);
							}

							win = Ext.create("Ext.window.Window", {
										closable: true,
										closeAction: 'hide',
										width: 950,
										minWidth: 550,
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
										autoScroll: true,
										items: [{
											region: 'north',
											title: '详细信息',
											items: [searchForm1],
											width: 200,
											split: true,
											//是否可缩小
											floatable: false,
										}, {
											region: 'north',
											items: [tab],
											width: 200,
											split: true,
											floatable: false,
											autoScroll: true
										}]
									}).show();
						}
					}
				}]
			}
		],

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