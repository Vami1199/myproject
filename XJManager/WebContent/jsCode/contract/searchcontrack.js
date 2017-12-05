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

	/////////////////////////////////////////////////

	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
			name: 'scYear',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'scContractid',
			type: 'string'
		}, {
			name: 'scMastercontractid',
			type: 'integer'
		}, {
			name: 'scCustomername',
			type: 'string'
		}, {
			name: 'scSettlementunit',
			type: 'integer'
		}, {
			name: 'scCustomerdustry',
			type: 'integer'
		}, {
			name: 'scShippingtype',
			type: 'integer'
		}, {
			name: 'scOperator',
			type: 'string'
		}, {
			name: 'modifydate',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: '是否变更',
			type: 'string'
		}, {
			name: 'scContractamount',
			type: 'long'
		}, {
			name: 'scCashrate',
			type: 'long'
		}, {
			name: 'scMastercontractid',
			type: 'integer'
		}, {
			name: 'scStatus',
			type: 'integer'
		}, {
			name: 'scContractmark',
			type: 'integer'
		}]
	});
	//定义数据源将被引入到对应的列中
	var myData = [
		['9/1 12:00', 66, 66, 'xxx', 66, 99999, 888888, 'xxxx', '9/1 12:00', 'xxxx', 9999, 99999, 9, 6, 8]

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
	///////////////////////////////////////////////////

	/****************************过磅单信息***************************/
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
			name: 'eFulldate',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'eSource',
			type: 'string'
		}, {
			name: 'eCartype',
			type: 'string'
		}, {
			name: 'eCarnum',
			type: 'string'
		}, {
			name: 'eWargon',
			type: 'integer'
		}, {
			name: 'eEmptytime',
			type: 'string'
		}, {
			name: '毛重',
			type: 'integer'
		}, {
			name: 'eFulltime',
			type: 'string'
		}, {
			name: '净重',
			type: 'integer'
		}, {
			name: 'deProduct',
			type: 'string'
		}, {
			name: '收货单位',
			type: 'string'
		}, {
			name: 'eOrdernum',
			type: 'string'
		}, {
			name: 'eCondition',
			type: 'byte'
		}, ]
	});
	//定义数据源将被引入到对应的列中
	var myDatagbd = [
		[66666, 0, 'xxx', 'xxx', '9/1 12:00', 'xx', 'xx', 'xx', 88888, 'xx', 22, 'xx', 33, 'xx', 'xx', 'xx', 0]

	];

	//初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
	Ext.tip.QuickTipManager.init();

	//想当于一个仓库 存储各种对像的
	var storegbd = Ext.create('Ext.data.Store', {
		model: 'PMonthrequest',
		remoteSort: true,
		//每页显示的数据
		pageSize: 5,
		proxy: {
			type: 'pagingmemory',
			//引入数据源
			data: myDatagbd,
			reader: {
				type: 'array'
			}
		}
	});
	//定义选择框
	var smgbd = Ext.create('Ext.selection.CheckboxModel');
	//定义grid
	var gridgbd = Ext.create('Ext.grid.Panel', {
		//引入仓库
		store: store,
		//引入选择框
		selModel: smgbd,
		//定义列
		columns: [{
				id: '',
				text: '编号',
				sortable: true,
				//与定义的类中的属性匹配
				//dataIndex: 'eId',
				dataIndex: 'scContractid',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '过磅日期',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eFulldate',
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '车号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eCarnum',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '承运人',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: '承运人',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '净重（吨）',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: '净重',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '累计（吨）',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: '累计',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '结存（吨）',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: '结存',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '司磅员',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: '司磅员',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '监磅员',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: '监磅员',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '红蓝标记',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eFlag',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '记账标记',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: '记账标记',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			}, {
				id: '',
				text: '榜单状态',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'eCondition',
				flex: 0,
				width: 75,
				//鼠标点击时能够编辑
				editor: {
					allowBlank: false
				}
			},

		],

		//table边框的设定
		stripeRows: true,
		height: 320,
		width: 800,
		frame: false,
		bbar: Ext.create('Ext.PagingToolbar', {
			pageSize: 10,
			store: storegbd,
			displayInfo: true,
			plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		}),

	});
	var gbdWin = new Ext.Window({
		autoHight: true,
		modal: true,
		/*closeAction:hide,*/
		items: [], // 这里面放你的表单。 
		closeAction: 'close', //这里写成 'hide' 
		/***********************表单设计结束*********************/
	});

	/****************************过磅单信息***************************/

	/////////////////////////////////////////////////////
	//相当于定义了一个company 类
	Ext.define('chepi', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
			name: 'awNumber',
			type: 'string'
		}, {
			name: 'noteNum',
			type: 'string'
		}, {
			name: 'awCustomer',
			type: 'string'
		}, {
			name: 'jiesuandanwei',
			type: 'string'
		}, {
			name: 'ahStart',
			type: 'string'
		}, {
			name: 'awEnd',
			type: 'string'
		}, {
			name: 'createdate',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'awType',
			type: 'byte'
		}, {
			name: 'awTotal',
			type: 'BigDecimal'
		}, {
			name: 'tpTotal',
			type: 'Long'
		}, {
			name: 'tpTransportprice',
			type: 'Long'
		}, {
			name: 'noteTotalprice',
			type: 'Long'
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
			name: 'awLoss',
			type: 'long'
		}, {
			name: 'awTime',
			type: 'string'
		}, {
			name: 'jifeizhongliang',
			type: 'BigDecimal'
		}, {
			name: 'awProduct',
			type: 'string'
		}, {
			name: 'noteTnum',
			type: 'string'
		}, {
			name: '承运人托运人装车',
			type: 'string'
		}, {
			name: 'noteWay',
			type: 'string'
		}, {
			name: 'noteArrivetime',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'noteCnum',
			type: 'string'
		}, {
			name: 'noteBoxtype',
			type: 'string'
		}, {
			name: 'noteOffer',
			type: 'long'
		}, {
			name: 'noteShipper',
			type: 'string'
		}, {
			name: 'noteShipperaddress',
			type: 'string'
		}, {
			name: 'noteCount',
			type: 'integer'
		}, {
			name: 'notePricenum',
			type: 'string'
		}, {
			name: 'notePricerate',
			type: 'string'
		}, {
			name: 'noteStarttime',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'noteReceiver',
			type: 'string'
		}, {
			name: 'noteMaker',
			type: 'string'
		}, {
			name: 'noteReviewer',
			type: 'string'
		}, {
			name: 'noteAcceptor',
			type: 'string'
		}, {
			name: 'noteId',
			type: 'integer'
		}, {
			name: '大票状态',
			type: 'byte'
		}, {
			name: '值班状态',
			type: 'byte'
		}]
	});
	//定义数据源将被引入到对应的列中
	var myDatachepi = [
		['xxx', 'xxx', 'xxx', 'xxx', 'xxx', '9/1 12:00', 1, 88.66, 99999, 9999, 99999, 1.5, 1.5, 1.5, 8888, 'xxx', 1.1, 'xxx', 'xxx', 'xxx', 'xxx',
			'9/1 12:00', 'xx', 'xxx', 99999999, 'xx', 'xx', 55, 'xx', 'xx', '9/1 12:00', 'xx', 'xx', 'xx', 'xx', 9999, 1, 0
		]

	];

	//想当于一个仓库 存储各种对像的
	var storechepi = Ext.create('Ext.data.Store', {
		model: 'chepi',
		remoteSort: true,
		//每页显示的数据
		pageSize: 5,
		proxy: {
			type: 'pagingmemory',
			//引入数据源
			data: myDatachepi,
			reader: {
				type: 'array'
			}
		}
	});

	//定义选择框
	var sm1 = Ext.create('Ext.selection.CheckboxModel');
	//定义grid
	var gridchepi = Ext.create('Ext.grid.Panel', {
		//引入仓库
		store: storechepi,
		//引入选择框
		selModel: sm1,
		//定义列
		columns: [{
			id: '',
			text: '车号',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'awNumber',
			flex: 0,
			width: 75,
		}, {
			text: '大票号码',
			sortable: true,
			/*renderer: Ext.util.Format.usMoney,*/
			dataIndex: 'noteNum',
			width: 75,
			//鼠标点击时出现下拉框选择编辑的内容
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
			//鼠标点击时能够编辑
			editor: {
				allowBlank: false
			}
		}, {
			id: '',
			text: '发站',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'ahStart',
			flex: 0,
			width: 75,
			//鼠标点击时能够编辑
			editor: {
				allowBlank: false
			}
		}, {
			id: '',
			text: '到站',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'awEnd',
			flex: 0,
			width: 75,
			//鼠标点击时能够编辑
			editor: {
				allowBlank: false
			}
		}, {
			text: '装车日期',
			sortable: true,
			//格式化日期
			renderer: Ext.util.Format.dateRenderer('m/d/Y'),
			dataIndex: 'createdate',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			id: '',
			text: '车型',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'awType',
			flex: 0,
			width: 75,
			//鼠标点击时能够编辑
			editor: {
				allowBlank: false
			}
		}, {
			text: '载重',
			sortable: true,
			dataIndex: 'awTotal',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			text: '自重',
			sortable: true,
			dataIndex: 'awOwn',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			id: '',
			text: '毛重',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'awProbable',
			flex: 0,
			width: 75,
			//鼠标点击时能够编辑
			editor: {
				allowBlank: false
			}
		}, {
			text: '净重',
			sortable: true,
			dataIndex: 'jingzhong',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			text: '超亏',
			sortable: true,
			dataIndex: 'awLoss',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			text: '称重时间',
			sortable: true,
			dataIndex: 'awTime',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			text: '车皮状态',
			sortable: true,
			//格式化日期
			dataIndex: '车皮状态',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			text: '值班状态',
			sortable: true,
			//格式化日期
			dataIndex: '值班状态',
			width: 75,
		}, ],

		//table边框的设定
		stripeRows: true,
		height: 320,
		width: 800,
		frame: false,

		/*resizable: {
		   handles: 's',
		   minHeight: 100
		},*/

		bbar: Ext.create('Ext.PagingToolbar', {
			pageSize: 10,
			store: storechepi,
			displayInfo: true,
			plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		}),
	});
	var chepiWin = new Ext.Window({
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

	//////////////////////////////////////////////////////
	var searchFormpanel = Ext.create('Ext.form.Panel', {
		region: 'west',
		plain: true,
		border: 0,
		borderColor: 'red',
		bodyPadding: 1,
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
				fieldLabel: '合同年份',
			}, {
				xtype: 'textfield',
				fieldLabel: '合同编号',
			}, {
				xtype: 'textfield',
				fieldLabel: '合同类别',
			}, {
				xtype: 'textfield',
				fieldLabel: '客户名称',
			}, {
				xtype: 'textfield',
				fieldLabel: '客户行业',
			}, {
				xtype: 'textfield',
				fieldLabel: '运输方式',
			}, {
				xtype: 'textfield',
				fieldLabel: '创建日期',
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
		////////////////////////////////////////////////////////////////////

	// register model
	//相当于定义了一个company 类

	var grid = Ext.create('Ext.grid.Panel', {
		//grid 的标题
		title: '跟踪查询销售合同',
		//引入仓库
		store: store,
		//引入选择框
		selModel: sm,
		//定义列
		columns: [{
			text: '合同年份',
			sortable: true,
			//格式化日期
			renderer: Ext.util.Format.dateRenderer('m/d/Y'),
			dataIndex: 'scYear',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			id: '',
			text: '合同编号',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'scContractid',
			flex: 0,
			width: 75,
			//鼠标点击时能够编辑
			editor: {
				allowBlank: false
			}
		}, {
			text: '合同类别',
			sortable: true,
			dataIndex: 'scMastercontractid',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			text: '客户名称',
			sortable: true,
			dataIndex: 'scCustomername',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			text: '结算单位',
			sortable: true,
			dataIndex: 'scSettlementunit',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			text: '客户行业',
			sortable: true,
			dataIndex: 'scCustomerdustry',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			text: '运输方式',
			sortable: true,
			dataIndex: 'scShippingtype',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			text: '经办人',
			sortable: true,
			dataIndex: 'scOperator',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			text: '制定日期',
			sortable: true,
			//格式化日期
			renderer: Ext.util.Format.dateRenderer('m/d/Y'),
			dataIndex: 'modifydate',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			text: '是否变更',
			sortable: true,
			dataIndex: '是否变更',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			text: '合同总量',
			sortable: true,
			dataIndex: 'scContractamount',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			text: '兑换率%',
			sortable: true,
			dataIndex: 'scCashrate',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			text: '主合同编号%',
			sortable: true,
			dataIndex: 'scMastercontractid',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			text: '状态',
			sortable: true,
			dataIndex: 'scStatus',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, {
			text: '合同标记',
			sortable: true,
			dataIndex: 'scContractmark',
			width: 75,
			editor: {
				allowBlank: false
			}
		}, ],

		// 保存和取消按钮
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
			},
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
					text: '详细信息',
					tooltip: 'detailed',
					iconCls: 'detailed',
					listeners: {
						click: function() { ////////////////////////////////////////////
								/////////////////////////////////////////////////////////
							var searchForm1 = Ext.create('Ext.form.Panel', {
								region: 'west',
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
												fieldLabel: '出卖方',
												value: '测试',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '出卖方人代表',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '出卖方单位地址',
												readOnly: true,
												value: '出卖方测试',
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '出卖方传真',
												value: '',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '出卖方电话',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '出卖方账号',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '出卖方开户银行',
												value: '',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '出卖方邮编',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '出卖方税号',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '客户名称',
												value: '',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '出卖方电报挂号',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '买受方法人代表',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '买受方单位地址',
												value: '',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '买受方电话',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '买受方委托代理人',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '买受方开户行',
												value: '',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '买受方传真',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '买方邮编',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '买受方账号',
												value: '',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '买受方税号',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '买受方电报挂号',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '合同年份',
												value: '测试',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '合同编号',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '合同有效起始时间',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '合同有效截止时间',
												value: '测试',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '客户所属行业',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '约定时间',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '签定时间',
												value: '测试',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '客户所属部别',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '合同类型',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '本期内最少发货量',
												value: '测试',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '签定地点',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '是否以质论价',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '交提货方式',
												value: '',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '执行单位',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '运费负担',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '运输方式',
												value: '测试',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '煤炭单价',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '数量质量验收标准及方法',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '结算方式',
												value: '',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '价格说明',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '计量方法',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '结算说明',
												value: '',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '公证意见',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '公证说明',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '纠纷处理',
												value: '测试',
												readOnly: true,
												width: 450
											}, {
												xtype: 'displayfield',
												fieldLabel: '&nbsp;&nbsp;违约责任',
												readOnly: true,
												width: 450
											}, {
												xtype: 'textarea',
												fieldLabel: '备注',
												disabled:true,
												width: 900
											}, {
												xtype: 'displayfield',
												fieldLabel: '合同总量',
												value: '测试',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '实发总量',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '出卖方委托代理人',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '出卖方委托代理人',
												readOnly: true,
												width: 900
											}, {
												xtype: 'displayfield',
												fieldLabel: '是否变更',
												readOnly: true,
												width: 300
											}, {
												xtype: 'displayfield',
												fieldLabel: '状态',
												readOnly: true,
												width: 300
											},

										],
									},
									//////////////////////////////////////////////////////////////////////

								],

							});
							/////////////////////////////////////////////////////////
							var gridcontantmx = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								autoScroll: true,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
										id: 'sourceId',
										text: '收货单位名称',
										sortable: true,
										//与定义的类中的属性匹配
										dataIndex: 'scContractid',
										flex: 0,
										//鼠标点击时能够编辑
									}, {
										text: '发站',
										sortable: true,
										dataIndex: 'sourceName',
										//width: 290,
										//鼠标点击时能够编辑
									}, {
										text: '到站',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '运输方式',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '产品名称',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '质量标准',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '产品名称',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '质量标准',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '单价',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '计量单位',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '总量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '指标类型',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '指标名称',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '1月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '2月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '3月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '4月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '5月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '6月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '7月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '8月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '9月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '10月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '11月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '12月',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '实发量',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									}, {
										text: '兑现率%',
										sortable: true,
										dataIndex: 'sourceName',
										//鼠标点击时能够编辑
									},

									{
										text: '备注',
										sortable: true,
										dataIndex: 'sourceCompanyid',
									}

								],

								// 保存和取消按钮
								dockedItems: [
									//各种按钮布局
									{
										xtype: 'toolbar',
										items: [{
												text: '车皮信息',
												tooltip: '',
												iconCls: 'add',
												listeners: {
													click: function() {

														chepiWin.add(gridchepi);
														chepiWin.show();

													}

												}

											}, '-', {
												text: '过磅单信息',
												tooltip: '',
												iconCls: 'edit',
												listeners: {
													click: function() {
														gbdWin.add(gridgbd);
														gbdWin.show();

													}

												}
											},

										]
									}
								],

								//table边框的设定
								stripeRows: true,
								height: 200,
								width: 900,
								frame: false,

								bbar: Ext.create('Ext.PagingToolbar', {
									pageSize: 10,
									store: store,
									displayInfo: true,
									plugins: Ext.create('Ext.ux.ProgressBarPager', {})
								}),

							});
							////////////////////////////////////////////////////////////
							var searchFormx = Ext.create('Ext.grid.Panel', {
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
										id: 'sourceId',
										text: '构成产品编号',
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
										text: '构成产品名称',
										sortable: true,
										dataIndex: 'sourceName',
										width: 168,
										//鼠标点击时能够编辑
										editor: {
											allowBlank: false
										}
									}, {
										text: '构成产品煤种',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 168,
										editor: {
											allowBlank: false
										}
									}, {
										text: '构成产品品种',
										sortable: true,
										dataIndex: 'sourceCompanyname',
										width: 168,
										editor: {
											allowBlank: false
										}
									}, {
										text: '备注',
										sortable: true,
										dataIndex: 'sourceSulphur',
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
												text: '新增',
												tooltip: 'add',
												iconCls: 'add',
												listeners: {
													click: function() {
														addFormgou.form.reset();
														Wingc.show();
													}
												}

											}, '-', {
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
							var i = 1;
							var win = Ext.create("Ext.window.Window", {
										closable: false,
										closeAction: 'close',
										autoScroll: true,
										width: 950,
										height: 550,
										items: [
										    {
											id: 'xiangqing',
											region: 'north',
											title: '详细信息',
											items: [searchForm1],
											height:180,
											dockedItems: [
												//各种按钮布局
												{
													xtype: 'toolbar',
													items: [
													        {
															text: '更多信息',
															tooltip: '',
															iconCls: 'detailed',
															listeners: {
																'click': function() {
																	if(i == 1) {
																		Ext.getCmp('xiangqing').setHeight(600);
																		i++;
																	} else {
																		Ext.getCmp('xiangqing').setHeight(180);
																		i = 1;
																	}

																}
															}
														}, {
															text: '概要信息',
															iconCls: 'detailed',
															handler:function(){
																win.removeAll();
																win.close();
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

										},{
											region: 'north',
											title:'销售合同明细',
											items: [gridcontantmx],
											//width: 200,
											layout:'fit',
											height: 300,
											split: true,
											floatable: false,
											autoScroll: true
										}]
									}).show();
						}

					}
				}, '-', {
					text: '变更记录',
					tooltip: '',
					iconCls: 'change',
					listeners: {

						click: function() { ////////////////////////////////////////////
							var winbg;
								/////////////////////////////////////////////////////////
							var searchFormbiangeng = Ext.create('Ext.form.Panel', {
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
											fieldLabel: '合同年份',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '合同编号',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '合同类别',
											readOnly: true,
											value: '出卖方测试',
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '客户名称',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '客户行业',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '交（提）货方式',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '运输方式',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '合同总量（吨）',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '经办人',
											readOnly: true,
											width: 300
										}, ],
									},
									//////////////////////////////////////////////////////////////////////

								],

							});
							/////////////////////////////////////////////////////////
							var gridcontantmx = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								autoScroll: true,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
									id: '',
									text: '合同编号',
									sortable: true,
									//与定义的类中的属性匹配
									dataIndex: 'scContractid',
									flex: 0,
									//鼠标点击时能够编辑
								}, {
									text: '客户名称',
									sortable: true,
									dataIndex: 'sourceName',
									//width: 290,
									//鼠标点击时能够编辑
								}, {
									text: '协议序号',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '申请方式',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '申请人',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '申请人所属单位',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '原因代码',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '变更描述',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '变更人',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '变更时间',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '状态',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, {
									text: '备注',
									sortable: true,
									dataIndex: 'sourceName',
									//鼠标点击时能够编辑
								}, ],

								//table边框的设定
								stripeRows: true,
								height: 200,
								width: 900,
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
							// Needed if you want to handle history for multiple components 												in the same page.
							// Should be something that won't be in component ids.
							////////////////////////////////////////////////////////////
							////////////////////////////////////////////////////////////////  
							var tabbiangeng = Ext
								.create(
									'Ext.TabPanel', {
										id: '',
										height: 300,
										//width: 900,
										activeTab: 0,
										autoScroll: true,
										//autoScroll: true,
										defaults: {
											padding: 10
										},

										items: [{
												xtype: 'tabpanel',
												title: '合同变更记录',
												activeTab: 0,
												padding: 5,
												autoScroll: true,
												border: true,
												plain: true,
												defaults: {
													padding: 10
												},
												items: [{
													title: '变更记录',
													autoScroll: true,
													items: [gridcontantmx],
												}],

											},

										],

									});
							//////////////////////////////////////////////////////////////      

							winbg = Ext
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
											title: '详细信息',
											items: [searchFormbiangeng],
											height: 120,

										}, {
											region: 'north',
											items: [tabbiangeng],
											//width: 200,
											height: 300,
											split: true,
											floatable: false,
											autoScroll: true
										}]
									})
								.show();
						}

					}

				}, '-', {
					text: '合同原件',
					tooltip: '',
					iconCls: 'songshen'
				}, '-', {
					text: '审批意见',
					tooltip: 'Approval opinions',
					iconCls: 'shenpiyijian',
					listeners: {

						click: function() { ////////////////////////////////////////////
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
									width: 180
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
							// Needed if you want to handle history for multiple components 												in the same page.
							// Should be something that won't be in component ids.
							////////////////////////////////////////////////////////////
							////////////////////////////////////////////////////////////////  
							var tabshenpi = Ext
								.create(
									'Ext.TabPanel', {
										id: '',
										height: 400,
										//width: 900,
										activeTab: 0,
										defaults: {
											padding: 10
										},

										items: [{
												xtype: 'tabpanel',
												title: '流程节点信息',
												activeTab: 0,
												padding: 5,
												autoScroll: true,
												border: true,
												plain: true,
												defaults: {
													padding: 10
												},
												items: [{
													title: '信息',
													//autoScroll: true,
													items: [gridshenpi1],
												}],

											},

										],

									});
							//////////////////////////////////////////////////////////////      

							winyj = Ext.create(
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
											items: [tabshenpi],
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
					text: '查看附件',
					tooltip: '',
					iconCls: 'edit',
					listeners: {

						click: function() { ////////////////////////////////////////////
							var win
								/////////////////////////////////////////////////////////
							var gridshenpi2 = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
										id: '',
										text: '文件名称',
										sortable: true,
										//与定义的类中的属性匹配
										dataIndex: 'scContractid',
										width: 370
									},  {
										text: '下载',
										xtype: 'actioncolumn',
										title: '下载',
										width: 330,
										sortable: false,
										items: [{
											icon: '../../common/shared/icons/fam/down.gif',
											tooltip: '下载',
											handler: function(grid, rowIndex, colIndex) {}
										}]

									}

								],

								//table边框的设定
								stripeRows: true,
								height: 200,
								width: 700,
								frame: false,

								bbar: Ext.create('Ext.PagingToolbar', {
									pageSize: 10,
									store: store,
									displayInfo: true,
									plugins: Ext.create('Ext.ux.ProgressBarPager', {})
								}),

							});
							////////////////////////////////////////////
							Ext.History.init();
							win = Ext
								.create(
									"Ext.window.Window", {
										/*title:'搜索', */
										closable: true,
										closeAction: 'hide',
										//autoScroll: true,
										width: 720,
										height: 280,
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
											height: 220,
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