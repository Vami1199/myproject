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
	//////////////////////////////////////////////////////
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
				xtype: 'datefield',
				fieldLabel: '开始日期',
			}, {
				xtype: 'datefield',
				fieldLabel: '结束日期',
			}, {
				xtype: 'textfield',
				fieldLabel: '发站',
			}, {
				xtype: 'textfield',
				fieldLabel: '状态',
			}

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

	// register model
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
			name: 'dDate',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'dUser',
			type: 'string'
		}, {
			name: 'dAuditor',
			type: 'string'
		}, {
			name: 'dStart',
			type: 'string'
		}, {
			name: 'dTrainnumber',
			type: 'integer'
		}, {
			name: 'dRnumber',
			type: 'Integer'
		}, {
			name: 'dRealtrain',
			type: 'Integer'
		}, {
			name: 'dWeight',
			type: 'Long'
		}, {
			name: 'dState',
			type: 'Byte'
		}]
	});
	//定义数据源将被引入到对应的列中
	var myData = [
		['9/1 12:00', 'xxx', 'xxx', 'xx', 66, 66, 66, 66, 1]

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
		title: '查询铁运日请车计划',
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
				dataIndex: 'dDate',
				width: 75,
			}, {
				text: '调度员',
				sortable: true,
				dataIndex: 'dUser',
				width: 75,
			}, {
				text: '审核人',
				sortable: true,
				dataIndex: 'dAuditor',
				width: 75,
			}, {
				text: '发站',
				sortable: true,
				dataIndex: 'dStart',
				width: 75,
			}, {
				text: '总请车数',
				sortable: true,
				dataIndex: 'dTrainnumber',
				width: 75,
			}, {
				text: '总请车数',
				sortable: true,
				dataIndex: 'dTrainnumber',
				width: 75,
			}, {
				text: '总确认数',
				sortable: true,
				dataIndex: 'dRnumber',
				width: 75,
			}, {
				text: '总实发车数',
				sortable: true,
				dataIndex: 'dRealtrain',
				width: 75,
			}, {
				text: '总运量',
				sortable: true,
				dataIndex: 'dWeight',
				width: 75,
			}, {
				text: '状态',
				sortable: true,
				dataIndex: 'dState',
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
											fieldLabel: '日期',
											value: 'xxx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '调度员',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '审核人',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '发站',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '总请车数',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '总确认数',
											readOnly: true,
											width: 300
										},{
											xtype: 'displayfield',
											fieldLabel: '总实发车数',
											readOnly: true,
											width: 300
										},{
											xtype: 'displayfield',
											fieldLabel: '总运量',
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
										},{
											xtype: 'displayfield',
											fieldLabel: '制定单位',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定日期',
											readOnly: true,
											width: 300
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
							var gridcontantxq = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								title: '计划明细',
								selModel: sm,
								//autoScroll: true,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
									id: '',
									text: '发站',
									sortable: true,
									//与定义的类中的属性匹配
									dataIndex: 'mId',
									flex: 0,
									//鼠标点击时能够编辑
								}, {
									text: '到站',
									sortable: true,
									dataIndex: 'sourceName',
									//width: 290,
									//鼠标点击时能够编辑
								}, {
									text: '收货单位',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '结算单位',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '要求煤质',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '批号',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '请车数',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '确认数',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '实发车数',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '实发吨数',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '拟进矿别',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '备注',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}],


								//table边框的设定
								stripeRows: true,
								height: 275,
								width: 940,
								frame: false,

								bbar: Ext.create('Ext.PagingToolbar', {
									pageSize: 5,
									store: store,
									displayInfo: true,
									plugins: Ext.create('Ext.ux.ProgressBarPager', {})
								}),

							});
							////////////////////////////////////////////////////////////
							Ext.History.init();
							////////////////////////////////////////////////////////////////  

							var xqWin=Ext.create(
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
											height: 225,
											dockedItems: [
												//各种按钮布局
												{
													xtype: 'toolbar',
													items: [{
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
