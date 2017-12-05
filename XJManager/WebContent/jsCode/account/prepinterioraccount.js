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
	/*************************搜索功能开始************************************/
	var searchFormpanel = Ext.create('Ext.form.Panel', {
		region: 'west',
		plain: true,
		border: 0,
		borderColor: 'red',
		bodyPadding: 1,
		width: 380,

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
				fieldLabel: '日期',
			}, {
				xtype: 'textfield',
				fieldLabel: '项目名称',
			}, {
				xtype: 'textfield',
				fieldLabel: '售货单位',
			},{
				xtype: 'textfield',
				fieldLabel: '购货单位',
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
		/*************************搜索功能开始************************************/
		/******************机构相关开始***********************/
	var searchFormdw = Ext.create('Ext.form.Panel', {
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
	var agriddw = Ext.create('Ext.grid.Panel', {
		id: '',
		region: 'east',
		//grid 的标题
		title: '单位列表',
		//引入仓库
		store: store,
		//定义列
		columns: [{
			id: 'coId',
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
	/*******************机构相关结束*************************/
	/********************客户相关开始*********************************/
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
	
	
	/********************客户相关结束*********************************/

	/************************定义添加界面开始***********************/
	var addWin = new Ext.Window({
		autoHight: true,
		modal: true,
		/*closeAction:hide,*/
		items: [],
		// 这里面放你的表单。 
		closeAction: 'close',
		//这里写成 'hide' 
		buttons: [{
			text: "保存",
			iconCls: "btn-save",
			handler: function() {
				proForm.submit({
					success: function() {
						proForm.hide();
						c.hide();
						window.location.reload();
					},
					failure: function() {
						Ext.Msg.alert('添加失败', '添加失败,请重试!');
					}
				});
			}
		}, {
			text: "重置",
			iconCls: "reset",
			handler: function() {
				proForm.form().reset();
			}
		}]
	});
	/***********************表单设计开始*********************/
	var addForm = Ext.create('Ext.form.Panel', {
		region: 'west',
		plain: true,
		border: 0,
		bodyPadding: 0,
		autoScroll: true,
		width: 700,
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
				items: [
				{
					

						xtype: "fieldcontainer",
						layout: "hbox",
						items: [{
							xtype: "textfield",
							fieldLabel: "单位",
							width: 278,
							flex: 1,
							/*layout: 'column',*/
							value: '',
							name:'payId',
							//必填项
							afterLabelTextTpl: required,
							//pProductionunit
							allowBlank: false,
						}, {
							xtype: "button",
							icon: '../../common/shared/icons/fam/search.png',
							/************创建单位搜索框开始***********/
							listeners: {
								click: function() {

									//创建一个搜索表单

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
											items: [searchFormdw],
											width: 200,
											split: true,
											//是否可缩小
											collapsible: true,
											floatable: false
										}, {
											region: 'center',
											items: [agriddw],
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
							fieldLabel: "&nbsp&nbsp售货单位",
							width: 278,
							flex: 1,
							/*layout: 'column',*/
							value: '',
							name:'payId',
							//必填项
							afterLabelTextTpl: required,
							//pProductionunit
							allowBlank: false,
						}, {
							xtype: "button",
							icon: '../../common/shared/icons/fam/search.png',
							/************创建单位搜索框开始***********/
							listeners: {
								click: function() {

									//创建一个搜索表单

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
											items: [searchFormdw],
											width: 200,
											split: true,
											//是否可缩小
											collapsible: true,
											floatable: false
										}, {
											region: 'center',
											items: [agriddw],
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
							fieldLabel: "购货单位",
							width: 278,
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
				{
					xtype: 'datefield',
					fieldLabel: '&nbsp&nbsp日期',
					width: 300,
					name: '',
				},
				{
					xtype: 'textfield',
					fieldLabel: '项目',
					width: 300,
					name: '',
				},
				{
						xtype: 'textfield',
						fieldLabel: '不含税收入（元）',
						width: 300,
						name: '',
				},
				{
						xtype: 'textfield',
						fieldLabel: '购销量',
						width: 300,
						name: '',
				},
				{
						xtype: 'textfield',
						fieldLabel: '&nbsp&nbsp综合煤质',
						width: 300,
						name: '',
				},
				{
						xtype: 'textfield',
						fieldLabel: '综合售价',
						width: 300,
						name: '',
				},
				
				],
			},
			//////////////////////////////////////////////////////////////////////

		],

		dockedItems: [
			//各种按钮布局
			/*{
				xtype: 'toolbar',
				items: [{
						text: '概要信息',
						tooltip: 'detailed',
						iconCls: 'detailed'
					}, '-', {
						text: '上一条',
						tooltip: 'search',
						iconCls: 'forward'
					}, '-', {
						text: '下一条',
						tooltip: 'search',
						iconCls: 'next'
					},

				]
			}*/
		],

	});

	/************************定义添加界面结束***********************/
	// register model
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
			name: 'payId',
			type: 'string'
		}, {
			name: 'payDate',
			type: 'date',
			dateFormat: 'n/j h:i'
		}, {
			name: 'payCustomerid',
			type: 'integer'
		}, {
			name: 'payDepartment',
			type: 'string'
		}, {
			name: 'payWeight',
			type: 'integer'
		}, {
			name: 'payCount',
			type: 'integer'
		}, {
			name: 'payTotal',
			type: 'long'
		}, {
			name: 'payUser',
			type: 'string'
		}, ]
	});
	//定义数据源将被引入到对应的列中
	var myData = [
		['xxx', '9/1 12:00', 999, 'xxx', 666, 666, 666669999, 'xx']

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
		title: '煤款结算单',
		//引入仓库
		store: store,
		//引入选择框
		selModel: sm,
		//定义列
		columns: [
		{
			
            id: '',
            text: '单位',
            sortable: true,
            //与定义的类中的属性匹配
            dataIndex: 'payId',
            flex: 0,
            width: 75,
        
		}, {
			
            id: '',
            text: '售货单位',
            sortable: true,
            //与定义的类中的属性匹配
            dataIndex: 'products.pId',
            flex: 0,
            width: 75,
        
		},{
			
            id: '',
            text: '购货单位',
            sortable: true,
            //与定义的类中的属性匹配
            dataIndex: 'products.pId',
            flex: 0,
            width: 75,
        
		},
		{
			
            id: '',
            text: '日期',
            sortable: true,
            //与定义的类中的属性匹配
            dataIndex: 'products.pId',
            flex: 0,
            width: 75,
        
		}, {
			
            id: '',
            text: '项目',
            sortable: true,
            //与定义的类中的属性匹配
            dataIndex: 'products.pId',
            flex: 0,
            width: 75,
        
		}, {
			
            id: '',
            text: '不含税收入（元）',
            sortable: true,
            //与定义的类中的属性匹配
            dataIndex: 'products.pId',
            flex: 0,
            width: 120,
        
		},{
			
            id: '',
            text: '购销量（吨）',
            sortable: true,
            //与定义的类中的属性匹配
            dataIndex: 'products.pId',
            flex: 0,
            width: 120,
        
		},{
			
            id: '',
            text: '综合煤质（caL/g）',
            sortable: true,
            //与定义的类中的属性匹配
            dataIndex: 'products.pId',
            flex: 0,
            width: 120,
        
		},{
			
            id: '',
            text: '综合售价',
            sortable: true,
            //与定义的类中的属性匹配
            dataIndex: 'products.pId',
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
					text: '添加',
					tooltip: '',
					iconCls: 'add',
					listeners: {
						'click': function() {
							addWin.add(addForm);
							addForm.form.reset();
							addWin.show();
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
							addWin.add(addForm);
							addWin.show();
							addForm.getForm().loadRecord(record[0]);
							Ext.getCmp('formpid').readOnly = true;
							addForm.getForm().url = '/XJManager/base/updateProduct.do';
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
					text: '打印',
					tooltip: 'print',
					iconCls: 'print'
				}]
			}
		],

		//table边框的设定
		stripeRows: true,
		height: 320,
		width: 1320,
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