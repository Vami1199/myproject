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

	////////车皮相关开始//////////////////////////////////////////
	var searchFormchepi = Ext.create('Ext.form.Panel', {
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
			fieldLabel: '车皮编号',
		}, {
			xtype: 'combo',
			store: Ext.create('Ext.data.ArrayStore', {
				fields: ['coal'],
				data: [
					['普快'],
					['K行'],
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
			fieldLabel: '车型',
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
			fieldLabel: '载重',
		}, {
			xtype: 'textfield',
			fieldLabel: '自重',
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
	var agridchepi = Ext.create('Ext.grid.Panel', {
		id: '',
		region: 'east',
		//grid 的标题
		title: '列表',
		//引入仓库
		store: store,
		//定义列
		columns: [{
			id: 'coId',
			text: '车皮编号',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 160,
		}, {
			text: '车型',
			sortable: true,
			dataIndex: 'coShort',
			width: 160
		}, {
			text: '载重',
			sortable: true,
			dataIndex: 'coName',
			width: 160
		}, {
			text: '自重',
			sortable: true,
			dataIndex: 'coPhone',
			width: 160
		}],
		stripeRows: true,
		height: 520,
		width: 1200,
		frame: false,
	});
	////////车皮相关结束/////////////////////////////////////////////
	////////车皮清单需要用到的Win开始//////////////////////////////////////////////////////////////////////////////////
	var ghjlWin = new Ext.Window({
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
	////////车皮清单需要用到的Win结束///////////////////////////////////
	// register model
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
			name: 'ahTime',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'ahId',
			type: 'string'
		}, {
			name: 'ahStart',
			type: 'string'
		}, {
			name: 'ahNum',
			type: 'string'
		}, {
			name: 'ahReceivetime',
			type: 'string'
		}, {
			name: 'ahIntime',
			type: 'string'
		}, {
			name: 'ahWagonnum',
			type: 'integer'
		}, {
			name: 'ahWeight',
			type: 'Long'
		}, {
			name: 'awType',
			type: 'byte'
		}, {
			name: 'ahWeight',
			type: 'Long'
		}, {
			name: 'ahRoaduser',
			type: 'string'
		}, {
			name: 'ahDispatcher',
			type: 'string'
		}, {
			name: 'ahIsdepart',
			type: 'byte'
		}, {
			name: 'ahSource',
			type: 'string'
		}, {
			name: 'ahHeadnum',
			type: 'string'
		}, {
			name: 'ahUser',
			type: 'string'
		}, {
			name: 'ahDepartment',
			type: 'string'
		}, {
			name: 'ahSettime',
			type: 'date',
			dateFormat: 'n/j h:i'
		}]
	});
	//定义数据源将被引入到对应的列中
	var myData = [
		['9/1 12:00', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 99, 66666, 1, 8888, 'xx', 'xxx', 0, 'xxx', 'xxx', 'xxx', 'xxx', '9/10 12:00']

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
		title: '录入车皮过衡记录',
		//引入仓库
		store: store,
		//引入选择框
		selModel: sm,
		//定义列
		columns: [{
				text: '日期',
				sortable: true,
				//格式化日期
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				dataIndex: 'ahTime',
				width: 75,
			}, {
				text: '记录表编号',
				sortable: true,
				/*renderer: Ext.util.Format.usMoney,*/
				dataIndex: 'ahId',
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
				//鼠标点击时能够编辑
			}, {
				id: '',
				text: '发站',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahStart',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
			}, {
				id: '',
				text: '接通知时间',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahReceivetime',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
			}, {
				id: '',
				text: '进矿时间',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahIntime',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
			}, {
				id: '',
				text: '车皮数',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahWagonnum',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
			}, {
				id: '',
				text: '总发运量',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahWeight',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
			}, {
				id: '',
				text: '车型',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'awType',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
			}, {
				id: '',
				text: '吨数',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahWeight',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
			}, {
				id: '',
				text: '路矿办值班员',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahRoaduser',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
			}, {
				id: '',
				text: '厂调度',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahDispatcher',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
			}, {
				text: '状态',
				sortable: true,
				dataIndex: 'ahIsdepart',
				width: 75,
			}, {
				text: '矿别',
				sortable: true,
				dataIndex: 'ahSource',
				width: 75,
			}, {
				id: '',
				text: '机车编号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahHeadnum',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
			}, {
				text: '制定人',
				sortable: true,
				dataIndex: 'ahUser',
				width: 75,
			}, {
				text: '制定单位',
				sortable: true,
				dataIndex: 'ahDepartment',
				width: 75,
			}, {
				text: '制定日期',
				sortable: true,
				//格式化日期
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				dataIndex: 'ahTime',
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
					text: '详细信息',
					tooltip: 'detailed',
					iconCls: 'detailed',
					listeners: {
						'click': function() {
							////////////////////////////////////////////
							var items = [{
								xtype: 'textfield',
								width: 150,
								value: '1',
								//fieldLabel: '机构编号',
								name: 'xuhao',
							}, {
								xtype: "fieldcontainer",
								layout: "hbox",
								items: [{
									xtype: "textfield",
									fieldLabel: '',
									width: 120,
									flex: 0,
									/*layout: 'column',*/
									value: '',
									//必填项
									//pProductionunit
									name: 'scContractid',
									allowBlank: false,
								}, {
									xtype: "button",
									text: required,
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
													title: '搜索',
													items: [searchFormchepi],
													width: 200,
													split: true,
													//是否可缩小
													collapsible: true,
													floatable: false
												}, {
													region: 'center',
													items: [agridchepi],
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
								hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
								emptyText: '-----请选择-----',
								valueField: 'startKey',
								displayField: 'startValue',
								fieldLabel: '',
								width: 160,
								queryMode: 'local', //数据模式,local代表本地数据模式
								selectOnTab: false,
								typeAhead: false,
								editable: false,
								onReplicate: function() {
									this.getStore().clearFilter();
								}
							}, {
								xtype: 'textfield',
								width: 155,
								//fieldLabel: '机构传真',
								name: 'zaizhong',
							}, {
								xtype: 'textfield',
								width: 155,
								//fieldLabel: '机构传真',
								name: 'zaizhong',
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
								hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
								emptyText: '-----请选择-----',
								valueField: 'startKey',
								displayField: 'startValue',
								fieldLabel: '',
								width: 155,
								queryMode: 'local', //数据模式,local代表本地数据模式
								selectOnTab: false,
								typeAhead: false,
								editable: false,
								onReplicate: function() {
									this.getStore().clearFilter();
								}
							}];
							var Form1 = Ext.create('Ext.form.Panel', {
								region: 'west',
								plain: true,
								border: 0,
								bodyPadding: 5,
								width: 940,
								//表单发送的到的action路径
								url: '',
								//默认设置
								fieldDefaults: {
									labelWidth: 70,
									anchor: '100%'
								},
								//布局,vbox是竖排,hbox是横排
								layout: {
									type: 'hbox',
									align: 'stretch' // Child items are stretched to full width
								},
								items: items,
							});
							/////////////////////////////////////////////
							var Form2 = Ext.create('Ext.form.Panel', {
								region: 'west',
								plain: true,
								border: 0,
								bodyPadding: 5,
								width: 940,
								//表单发送的到的action路径
								url: '',
								//默认设置
								fieldDefaults: {
									labelWidth: 70,
									anchor: '100%'
								},
								//布局,vbox是竖排,hbox是横排
								layout: {
									type: 'hbox',
									align: 'stretch' // Child items are stretched to full width
								},
								items: items,
							});
							/////////////////////////////////////////////
							var Form3 = Ext.create('Ext.form.Panel', {
								region: 'west',
								plain: true,
								border: 0,
								bodyPadding: 5,
								width: 940,
								//表单发送的到的action路径
								url: '',
								//默认设置
								fieldDefaults: {
									labelWidth: 70,
									anchor: '100%'
								},
								//布局,vbox是竖排,hbox是横排
								layout: {
									type: 'hbox',
									align: 'stretch' // Child items are stretched to full width
								},
								items: items,
							});
							/////////////////////////////////////////////
							var Form4 = Ext.create('Ext.form.Panel', {
								region: 'west',
								plain: true,
								border: 0,
								bodyPadding: 5,
								width: 940,
								//表单发送的到的action路径
								url: '',
								//默认设置
								fieldDefaults: {
									labelWidth: 70,
									anchor: '100%'
								},
								//布局,vbox是竖排,hbox是横排
								layout: {
									type: 'hbox',
									align: 'stretch' // Child items are stretched to full width
								},
								items: items,
							});
							/////////////////////////////////////////////
							var Form5 = Ext.create('Ext.form.Panel', {
								region: 'west',
								plain: true,
								border: 0,
								bodyPadding: 5,
								width: 940,
								//表单发送的到的action路径
								url: '',
								//默认设置
								fieldDefaults: {
									labelWidth: 70,
									anchor: '100%'
								},
								//布局,vbox是竖排,hbox是横排
								layout: {
									type: 'hbox',
									align: 'stretch' // Child items are stretched to full width
								},
								items: items,
							});
							/////////////////////////////////////////////
							var Form6 = Ext.create('Ext.form.Panel', {
								region: 'west',
								plain: true,
								border: 0,
								bodyPadding: 5,
								width: 940,
								//表单发送的到的action路径
								url: '',
								//默认设置
								fieldDefaults: {
									labelWidth: 70,
									anchor: '100%'
								},
								//布局,vbox是竖排,hbox是横排
								layout: {
									type: 'hbox',
									align: 'stretch' // Child items are stretched to full width
								},
								items: items,
							});
							/////////////////////////////////////////////
							var Form7 = Ext.create('Ext.form.Panel', {
								region: 'west',
								plain: true,
								border: 0,
								bodyPadding: 5,
								width: 940,
								//表单发送的到的action路径
								url: '',
								//默认设置
								fieldDefaults: {
									labelWidth: 70,
									anchor: '100%'
								},
								//布局,vbox是竖排,hbox是横排
								layout: {
									type: 'hbox',
									align: 'stretch' // Child items are stretched to full width
								},
								items: items,
							});
							/////////////////////////////////////////////
							var Form8 = Ext.create('Ext.form.Panel', {
								region: 'west',
								plain: true,
								border: 0,
								bodyPadding: 5,
								width: 940,
								//表单发送的到的action路径
								url: '',
								//默认设置
								fieldDefaults: {
									labelWidth: 70,
									anchor: '100%'
								},
								//布局,vbox是竖排,hbox是横排
								layout: {
									type: 'hbox',
									align: 'stretch' // Child items are stretched to full width
								},
								items: items,
							});
							/////////////////////////////////////////////
							var Form9 = Ext.create('Ext.form.Panel', {
								region: 'west',
								plain: true,
								border: 0,
								bodyPadding: 5,
								width: 940,
								//表单发送的到的action路径
								url: '',
								//默认设置
								fieldDefaults: {
									labelWidth: 70,
									anchor: '100%'
								},
								//布局,vbox是竖排,hbox是横排
								layout: {
									type: 'hbox',
									align: 'stretch' // Child items are stretched to full width
								},
								items: items,
							});
							/////////////////////////////////////////////
							var Form10 = Ext.create('Ext.form.Panel', {
								region: 'west',
								plain: true,
								border: 0,
								bodyPadding: 5,
								width: 940,
								//表单发送的到的action路径
								url: '',
								//默认设置
								fieldDefaults: {
									labelWidth: 70,
									anchor: '100%'
								},
								//布局,vbox是竖排,hbox是横排
								layout: {
									type: 'hbox',
									align: 'stretch' // Child items are stretched to full width
								},
								items: items,
							});
							/////////////////////////////////////////////
							var panel = Ext.create('Ext.Panel', {
								//autoScroll: true,
								bodyStyle: {
									background: '#DFE9F6',
									padding: '0px',
									border: 0
								},

								id: '',

								layout: 'fit',
								//baseCls: 'x-plain',
								//renderTo: Ext.getBody(),
								layout: {
									type: 'table',
									columns: 6
								},
								// applied to child components
								defaults: {
									//frame: true,
									width: 155,
									//height: 100
								},
								items: [

									{
										title: '序号',
										height: 27
									}, {
										title: '车号',
										height: 27
									}, {
										title: '车型',
										height: 27
									}, {
										title: '载重',
										height: 27

									}, {
										title: '自重',
										height: 27
									}, {
										title: '轨道编号',
										height: 27

									}, {
										title: null,
										width: 940,
										colspan: 6,
										height: 30,
										items: [Form1],
									}, {

										width: 940,
										colspan: 6,
										height: 30,
										items: [Form2],
									}, {

										width: 940,
										colspan: 6,
										height: 30,
										items: [Form3],
									}, {

										width: 940,
										colspan: 6,
										height: 30,
										items: [Form4],
									}, {

										width: 940,
										colspan: 6,
										height: 30,
										items: [Form5],
									}, {

										width: 940,
										colspan: 6,
										height: 30,
										items: [Form6],
									}, {

										width: 940,
										colspan: 6,
										height: 30,
										items: [Form7],
									}, {

										width: 940,
										colspan: 6,
										height: 30,
										items: [Form8],
									}, {

										width: 940,
										colspan: 6,
										height: 30,
										items: [Form9],
									}, {

										width: 940,
										colspan: 6,
										height: 30,
										items: [Form10],
									},
								]
							});
							////////////////////////////////////////////
							var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
								clicksToMoveEditor: 1,
								autoCancel: false
							});
							var gridGuoheng = Ext.create('Ext.grid.Panel', {
								frame: true,
								store: store,
								columnLines: true,
								columns: [
								{
									text: '序号',
									//locked: true,
									width: 200,
									sortable: false,
									dataIndex: 'company',
									renderer:function(){return 1;},
								}, {
									text: '车号',
									width: 100,
									sortable: true,
									renderer:function(){return 4423;},
									dataIndex: 'price',
								}, 
								{
									text: '车型',
									width: 100,
									sortable: true,
									renderer:function(){return 'K车型';},
									dataIndex: 'price',
									
								}, 
								{
									text: '载重',
									width: 100,
									sortable: true,
									renderer:function(){return 62;},
									dataIndex: 'price',
								}, 
								{
									text: '自重'+required,
									width: 100,
									sortable: true,
									renderer:function(){return 24;},
									dataIndex: 'price',
									editor: {
                						xtype: 'textfield',
                						value:24
            						}
								}, 
								{
									text: '毛重'+required,
									width: 100,
									sortable: true,
									renderer:function(){return 85;},
									dataIndex: 'price',
									editor: {
                						xtype: 'textfield',
                						value:85
            						}
								}, 
								{
									text: '轨道编号',
									width: 100,
									sortable: true,
									renderer:function(){return '1号';},
									dataIndex: 'change',
									editor: {
										xtype: 'combo',
										store: Ext.create('Ext.data.ArrayStore', {
											fields: [{
												name: 'typekey',
												value: 'Integer'
											}, {
												name: 'typeValue',
												value: 'String'
											}],
											data: [
												[0, '1号轨道'],
												[1, '2号轨道'],
												[2, '3号轨道']
											]
										}),
										name: 'csType',
										hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
										emptyText: '-----请选择-----',
										valueField: 'typekey',
										displayField: 'typeValue',
										queryMode: 'local',
										selectOnTab: false,
										typeAhead: false,
										editable: false,
										onReplicate: function() {
											this.getStore().clearFilter();
										}

									}
								}, {
									text: '司磅员'+required,
									width: 100,
									sortable: true,
									renderer:function(){return '销售管理员';},
									dataIndex: 'pctChange',
									editor: {
										xtype: 'textfield',
										value:'销售管理员'
										
									}
								}, {
									text: '监装员'+required,
									width: 100,
									sortable: true,
									dataIndex: 'lastChange',
									renderer:function(){return '销售管理员';},
									editor: {
										xtype: 'textfield',
										value:'销售管理员'
										
									}
								},
								{
									text: '发站',
									width: 100,
									sortable: true,
									renderer:function(){return '张集';},
									dataIndex: 'lastChange',
								},
								{
									text: '到站',
									width: 100,
									sortable: true,
									dataIndex: 'lastChange',
								},
								{
									text: '收货单位',
									width: 100,
									sortable: true,
									dataIndex: 'lastChange',
								},
								{
									text: '产品名称',
									width: 100,
									sortable: true,
									dataIndex: 'lastChange',
								},
								{
									text: '煤质要求',
									width: 100,
									sortable: true,
									dataIndex: 'lastChange',
									renderer:function(){return 0;},
								},
								],
								selModel: sm,
								height: 300,
								width: 800,
								
								title: '',
								autoScroll: true,
								viewConfig: {
									stripeRows: true
								},
								bbar: Ext.create('Ext.PagingToolbar', {
									pageSize: 10,
									store: store,
									displayInfo: true,
									plugins: Ext.create('Ext.ux.ProgressBarPager', {})
								}),
								plugins: [rowEditing]
							});
							//////////////////////////////////////////////
							var editForm = Ext.create('Ext.form.Panel', {
								region: 'west',
								plain: true,
								border: 0,
								bodyPadding: 5,
								width: 940,
								//表单发送的到的action路径
								url: '',
								//默认设置
								fieldDefaults: {
									labelWidth: 70,
									anchor: '100%'
								},
								//布局,vbox是竖排,hbox是横排
								layout: {
									type: 'hbox',
									align: 'stretch' // Child items are stretched to full width
								},
								items: items,
							});
							var editForm1 = Ext.create('Ext.form.Panel', {
								region: 'west',
								plain: true,
								border: 0,
								bodyPadding: 5,
								width: 940,
								//表单发送的到的action路径
								url: '',
								//默认设置
								fieldDefaults: {
									labelWidth: 70,
									anchor: '100%'
								},
								//布局,vbox是竖排,hbox是横排
								layout: {
									type: 'hbox',
									align: 'stretch' // Child items are stretched to full width
								},
								items: items,
							});
							var editpanel = Ext.create('Ext.Panel', {
								//autoScroll: true,
								bodyStyle: {
									background: '#DFE9F6',
									padding: '0px',
									border: 0
								},

								id: '',

								layout: 'fit',
								//baseCls: 'x-plain',
								//renderTo: Ext.getBody(),
								layout: {
									type: 'table',
									columns: 6
								},
								// applied to child components
								defaults: {
									//frame: true,
									width: 155,
									//height: 100
								},
								items: [

									{
										title: '序号',
										height: 27
									}, {
										title: '车号',
										height: 27
									}, {
										title: '车型',
										height: 27
									}, {
										title: '载重',
										height: 27

									}, {
										title: '自重',
										height: 27
									}, {
										title: '轨道编号',
										height: 27

									}, {
										title: null,
										width: 940,
										colspan: 6,
										height: 30,
										items: [editForm],
									}, {

										width: 940,
										colspan: 6,
										height: 30,
										items: [editForm1],
									}
								]
							});
							///////////////////////////////////////////////
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
											fieldLabel: '日期',
											value: 'xxx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '记录表编号',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '发站',
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
											fieldLabel: '车皮数',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '总发运量',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '路矿办职班',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '厂调度',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '销售部值班',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '接通知时间',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '进矿时间',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '开装时间',
											readOnly: true,
											value: '出卖方测试',
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '装完时间',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '通知车站时间',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '挂车时间',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '矿别',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '装车值班',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '机车编号',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '煤质要求',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '煤质预计值',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '煤质化验值',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定人',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定单位',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定日期',
											readOnly: true,
											width: 300
										}, {
											xtype: 'textarea',
											fieldLabel: '进矿说明',
											readOnly: true,
											disabled: true,
											width: 850
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
								title: '车皮清单',
								selModel: sm,
								//autoScroll: true,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
									id: '',
									text: '序号',
									sortable: true,
									//与定义的类中的属性匹配
									dataIndex: 'scContractid',
									flex: 0,
									width: 155,
									//鼠标点击时能够编辑
								}, {
									text: '车号',
									sortable: true,
									dataIndex: 'sourceName',
									width: 155,
									//鼠标点击时能够编辑
								}, {
									text: '车型',
									sortable: true,
									dataIndex: 'sourceName',
									width: 155,
									//鼠标点击时能够编辑
								}, {
									text: '载重',
									sortable: true,
									dataIndex: 'sourceName',
									width: 155,
									//鼠标点击时能够编辑
								}, {
									text: '自重',
									sortable: true,
									dataIndex: 'sourceName',
									width: 155,
									//鼠标点击时能够编辑
								}, {
									text: '毛重',
									sortable: true,
									dataIndex: 'sourceName',
									width: 155,
									//鼠标点击时能够编辑
								}, {
									text: '净重',
									sortable: true,
									dataIndex: 'sourceName',
									width: 155,
									//鼠标点击时能够编辑
								}, {
									text: '超亏',
									sortable: true,
									dataIndex: 'sourceName',
									width: 155,
									//鼠标点击时能够编辑
								}, {
									text: '称重时间',
									sortable: true,
									dataIndex: 'sourceName',
									width: 155,
									//鼠标点击时能够编辑
								}, {
									text: '轨道编号',
									sortable: true,
									dataIndex: 'sourceName',
									width: 155,
									//鼠标点击时能够编辑
								}, {
									text: '司磅员',
									sortable: true,
									dataIndex: 'sourceName',
									width: 155,
									//鼠标点击时能够编辑
								}, {
									text: '监装员',
									sortable: true,
									dataIndex: 'sourceName',
									width: 155,
									//鼠标点击时能够编辑
								}, {
									text: '发站',
									sortable: true,
									dataIndex: 'sourceName',
									width: 155,
									//鼠标点击时能够编辑
								}, {
									text: '到站',
									sortable: true,
									dataIndex: 'sourceName',
									width: 150,
									//鼠标点击时能够编辑
								}, {
									text: '收货单位',
									sortable: true,
									dataIndex: 'sourceName',
									width: 155,
									//鼠标点击时能够编辑
								}, {
									text: '产品名称',
									sortable: true,
									dataIndex: 'sourceName',
									width: 155,
									//鼠标点击时能够编辑
								}, {
									text: '煤质要求',
									sortable: true,
									dataIndex: 'sourceName',
									width: 155,
									//鼠标点击时能够编辑
								}, ],

								// 保存和取消按钮
								dockedItems: [
									//各种按钮布局
									{
										xtype: 'toolbar',
										items: [{
											text: '过衡记录',
											tooltip: '',
											iconCls: 'songshen',
											listeners: {
												click: function() {
													//ghjlWin.add(guohengpanel);
													ghjlWin.add(gridGuoheng);
													ghjlWin.show();
												}
											}
										}, {
											text: '新增',
											tooltip: '',
											iconCls: 'add',
											listeners: {
												click: function() {

													htxzWinnew.add(panel);
													htxzWinnew.show();

												}
											}
										}, {
											text: '修改',
											tooltip: '',
											iconCls: 'edit',
											listeners: {
												click: function() {

													editWin.add(editpanel);
													editWin.show();

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
										}, ]
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
							var i = 1;
							var xqWin = Ext
								.create(
									"Ext.window.Window", {
										/*title:'搜索', */
										closable: false,
										closeAction: 'hide',
										autoScroll: true,
										width: 940,
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
																		Ext.getCmp('xiangqingz').setHeight(370);
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
																htxzWinnew.removeAll();
																htxzWinnew.close();
																ghjlWin.removeAll();
																ghjlWin.close();
																editWin.removeAll();
																editWin.close();
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