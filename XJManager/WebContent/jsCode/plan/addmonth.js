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
					fieldLabel: '年份',
					afterLabelTextTpl: required,
					width: 460,
					name: 'mYear',
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp月份',
					afterLabelTextTpl: required,
					width: 490,
				},

				{
					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: ['coal'],
						data: [
							['正式计划'],
							['非正式计划'],
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
					fieldLabel: '计划类型',
					afterLabelTextTpl: required,
					width: 460,
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
				},

				{
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp计划销量',
					afterLabelTextTpl: required,
					width: 490,
				},

				{
					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: ['coal'],
						data: [
							['地销'],
							['铁运'],
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
					fieldLabel: '运输方式',
					afterLabelTextTpl: required,
					width: 460,
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
				},

				{
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp制定单位',
					width: 490,
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
					name: 'mYear',
				}, {
					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: ['coal'],
						data: [
							['烟煤'],
							['块煤'],
							['脏煤']
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
					fieldLabel: '产品名称',
					afterLabelTextTpl: required,
					width: 460,
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
				}, 
				{
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp计划销量',
					afterLabelTextTpl: required,
					width: 490,
				},
				{

					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: ['coal'],
						data: [
							['机构'],
							['业务员'],
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
					fieldLabel: '责任人类型',
					afterLabelTextTpl: required,
					width: 460,
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

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "&nbsp&nbsp责任人",
						afterLabelTextTpl: required,
						width: 468,
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

				},  {
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
			name: 'mId',
			type: 'string'
		}, {
			name: 'mYear',
			type: 'Integer'
		}, {
			name: 'mMonth',
			type: 'Integer'
		}, {
			name: 'yDepartment',
			type: 'string'
		}, {
			name: 'mPlantype',
			type: 'Byte '
		}, {
			name: 'mTransport',
			type: 'Byte'
		}, {
			name: 'mCount',
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
		['xxx', 1999, 999, 'xxx', 0, 0, 888, 'xxx', '9/1 12:00']

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
		title: '制定月度销售计划',
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
				dataIndex: 'mId',
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
				dataIndex: 'mYear',
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
				text: '月份',
				sortable: true,
				dataIndex: 'mMonth',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '计划类型',
				sortable: true,
				dataIndex: 'mPlantype',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '运输方式',
				sortable: true,
				dataIndex: 'mTransport',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '计划销量',
				sortable: true,
				dataIndex: 'mCount',
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
				text: '制定单位',
				sortable: true,
				dataIndex: 'yDepartment',
				width: 75,
				editor: {
					allowBlank: false
				}
			}, {
				text: '状态',
				sortable: true,
				dataIndex: 'yDepartment',
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
					listeners:{
						
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
										},  {
											xtype: 'displayfield',
											fieldLabel: '月份',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '计划类型',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '运输方式',
											readOnly: true,
											width: 300
										},
										{
											xtype: 'displayfield',
											fieldLabel: '计划销量',
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
											disabled:true,
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
										dataIndex: 'mYear',
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
									},  {
										text: '备注',
										sortable: true,
										dataIndex: 'sourceName',
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
																		Ext.getCmp('xiangqingz').setHeight(200);
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