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
	/////////////////////////////////////////////////////////////////
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
	var agridJG = Ext.create('Ext.grid.Panel', {
		id: '',
		region: 'east',
		//grid 的标题
		title: '单位列表',
		//引入仓库
		store: store,
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
		},  {
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
		},  {
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

	/////////////////////////////////////////////////////
	var formxqtj = Ext.create('Ext.form.Panel', {
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
							[1, '张集'],
							[0, '其他'],
						]
					}),
					name: 'ahStart',
					hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'startKey',
					displayField: 'startValue',
					fieldLabel: '发站',
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
					xtype: 'datefield',
					fieldLabel: '&nbsp&nbsp日期',
					width: 360,
					afterLabelTextTpl: required,
					name: 'yYear',
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
							[1, '煤电一厂'],
							[0, '其他'],
						]
					}),
					name: 'station.sRailwaysbureau',
					hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'startKey',
					displayField: 'startValue',
					fieldLabel: '矿别',
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
					fieldLabel: '&nbsp&nbsp厂调度',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'datefield',
					fieldLabel: '接通知时间',
					width: 360,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {
					xtype: 'datefield',
					fieldLabel: '&nbsp&nbsp进矿时间',
					width: 360,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {
					xtype: 'datefield',
					fieldLabel: '开装时间',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'datefield',
					fieldLabel: '&nbsp&nbsp装完时间',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'datefield',
					fieldLabel: '通知车站时间',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'datefield',
					fieldLabel: '&nbsp&nbsp挂车时间',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'textfield',
					fieldLabel: '车皮数',
					width: 360,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp机车编号',
					width: 360,
					name: 'yYear',
				}, {

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "装车值班",
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
					fieldLabel: '&nbsp&nbsp煤质要求',
					afterLabelTextTpl: required,
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'textfield',
					fieldLabel: '路矿办值班',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp销售部值班',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'textfield',
					fieldLabel: '制定人',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp制定单位',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'datefield',
					fieldLabel: '制定日期',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'textarea',
					fieldLabel: '进矿说明',
					width: 750,
				}, {
					xtype: 'textarea',
					fieldLabel: '备注',
					width: 750,
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
	/////////////////////////////////////////////////////////////////////
	var htxzWinnew = new Ext.Window({
		autoScroll: true,
		//autoHight: true,
		height:400,
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
	
	// register model
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
			name: 'ahStart',
			type: 'string'
		}, {
			name: 'ahTime',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'ahId',
			type: 'string'
		}, {
			name: 'ahReceivetime',
			type: 'string'
		}, {
			name: 'ahIntime',
			type: 'string'
		}, {
			name: 'ahHeadnum',
			type: 'string'
		}, {
			name: 'ahNum',
			type: 'string'
		}, {
			name: 'ahWagonnum',
			type: 'integer'
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
		['xxx', '9/1 12:00', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 66, 'xx', 'xxx', 1, 'xx', 'xxx', 'xxx', '9/10 12:00']

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
		title: '维护火车到矿记录表',
		//引入仓库
		store: store,
		//引入选择框
		selModel: sm,
		//定义列
		columns: [{
				id: '',
				text: '发站',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahStart',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
			}, {
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
				text: '机车编号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahHeadnum',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
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
				text: '车皮数',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahWagonnum',
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
				text: '矿调度',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'ahDispatcher',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
			}, {
				text: '状态标记',
				sortable: true,
				dataIndex: 'ahIsdepart',
				width: 75,
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
					tooltip: '',
					iconCls: 'add',
					listeners: {
						click: function() {
							formxqtj.form.reset();
							htxzWin.add(formxqtj);
							htxzWin.show();
						}
					}
				}, '-', {
					text: '修改',
					tooltip: ' ',
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
							htxzWin.add(formxqtj);
							htxzWin.show();
							formxqtj.getForm().loadRecord(record[0]);
							Ext.getCmp('formpid').readOnly = true;
							//addContantForm.getForm().url = '/XJManager/base/updateProduct.do';
							grid.getSelectionModel().clearSelections();
							grid.getView().refresh();
						}

					}
				}, '-', {
					itemId: 'removeButton',
					text: '删除',
					tooltip: '',
					iconCls: 'remove',
					disabled: true
				}, '-', {
					text: '确认',
					tooltip: '',
					iconCls: 'ok'
				}, '-', {
					text: '详细信息',
					tooltip: '',
					iconCls: 'detailed',
					listeners: {
						'click': function() {
							////////////////////////////////////////////
							
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
											disabled:true,
											width: 850
										},
										{
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
							var items = [{
								xtype: 'textfield',
								width: 150,
								value:'1',
								//fieldLabel: '机构编号',
								name: 'xuhao',
							}, 
							{
								xtype: "fieldcontainer",
								layout: "hbox",
								items: [{
									xtype: "textfield",
									fieldLabel: "",
									afterLabelTextTpl: required,
									width: 133,
									flex: 0,
									/*layout: 'column',*/
									value: '',
									//必填项
									//pProductionunit
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

							}, 
							{

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
							},
							{
								xtype: 'textfield',
								width: 155,
								//fieldLabel: '机构传真',
								name: 'zaizhong',
							},
							{

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
									title:null,
									width: 940,
									colspan: 6,
									height: 30,
									items: [Form1],
								}, {

									width: 940,
									colspan: 6,
									height: 30,
									items: [Form2],
								},{

									width: 940,
									colspan: 6,
									height: 30,
									items: [Form3],
								}, {

									width: 940,
									colspan: 6,
									height: 30,
									items: [Form4],
								},{

									width: 940,
									colspan: 6,
									height: 30,
									items: [Form5],
								}, {

									width: 940,
									colspan: 6,
									height: 30,
									items: [Form6],
								},{

									width: 940,
									colspan: 6,
									height: 30,
									items: [Form7],
								}, {

									width: 940,
									colspan: 6,
									height: 30,
									items: [Form8],
								},{

									width: 940,
									colspan: 6,
									height: 30,
									items: [Form9],
								}, {

									width: 940,
									colspan: 6,
									height: 30,
									items: [Form10],
								}, ]
							});
							////////////////////////////////////////////
							var gridcontantxq = Ext.create('Ext.grid.Panel', {
									//grid 的标题
									title: '列车车皮信息',
									selModel:sm,
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
											text: '轨道编号',
											sortable: true,
											dataIndex: 'sourceName',
											width: 150,
											//鼠标点击时能够编辑
										}
									],

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

															htxzWinnew.add(panel);
															htxzWinnew.show();

														}

													}

											}
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