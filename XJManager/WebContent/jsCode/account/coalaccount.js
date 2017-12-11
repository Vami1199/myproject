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
	Ext.define('Customer', {
		extend: 'Ext.data.Model',
		idProperty: '',
		fields: [{
			name: 'customer.cId',
			type: 'Integer'
		}, {
			name: 'provinceName',
			type: 'String'
		}, {
			name: 'customer.cName',
			type: 'string'
		}, {
			name: 'customer.cShort',
			type: 'string'
		}, {
			name: 'customer.cIselectricity',
			type: 'Byte'
		}, {
			name: 'customer.cCompanytype',
			type: 'Byte '
		}, {
			name: 'customer.cType',
			type: 'Byte'
		}, {
			name: 'customer.cIid',
			type: 'Integer'
		}, {
			name: 'customer.cDepartment',
			type: 'Byte'
		}, {
			name: 'customer.cIdentifying',
			type: 'Byte'
		}, {
			name: 'customer.cState',
			type: 'Byte'
		}, {
			name: 'customer.cScope',
			type: 'String'
		}, {
			name: 'customer.cLegal',
			type: 'String'
		}, {
			name: 'customer.cConsignor',
			type: 'String'
		}, {
			name: 'customer.cBank',
			type: 'String'
		}, {
			name: 'customer.cAccount',
			type: 'String'
		}, {
			name: 'customer.cCredit',
			type: 'byte'
		}, {
			name: 'customer.cLimit',
			type: 'BigDecimal'
		}, {
			name: 'customer.cRegisteredcapital',
			type: 'BigDecimal'
		}, {
			name: 'customer.cTaxnumber',
			type: 'String'
		}, {
			name: 'customer.cSid',
			type: 'String'
		}, {
			name: 'customer.cPostcode',
			type: 'String'
		}, {
			name: 'customer.cLinkman',
			type: 'String'
		}, {
			name: 'customer.cPhone',
			type: 'String'
		}, {
			name: 'customer.cFax',
			type: 'String'
		}, {
			name: 'customer.cHomepage',
			type: 'String'
		}, {
			name: 'customer.cEmail',
			type: 'String'
		}, {
			name: 'customer.cCountry',
			type: 'String'
		}, {
			name: 'customer.cProvince',
			type: 'String'
		}, {
			name: 'customer.cCityaddress',
			type: 'String'
		}, {
			name: 'customer.cInnername',
			type: 'String'
		}, {
			name: 'customer.cInnerid',
			type: 'String'
		}, {
			name: 'customer.cRemark',
			type: 'String'
		}, {
			name: 'customer.cQuality',
			type: 'String'
		}, {
			name: 'customer.cCreditdeclare',
			type: 'String'
		}]
	});
	Ext.define('addcompany', {
				extend: 'Ext.data.Model',
				idProperty: '',
				fields: [{
						name: 'coId',
						type: 'string'
					},
					{
						name: 'coShort',
						type: 'string'
					},
					{
						name: 'coName',
						type: 'string'
					},
					{
						name: 'coPhone',
						type: 'string'
					},
					{
						name: 'coPostcode',
						type: 'integer'
					},
					{
						name: 'coFax',
						type: 'string'
					},
					{
						name: 'coLeader',
						type: 'string'
					},
					{
						name: 'coAddress',
						type: 'string'
					},
					{
						name: 'coLinkman',
						type: 'string'
					}
				]
			});
	
	var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
	var requiredimportant = '<span style="color:red;font-weight:bold" data-qtip="Required">***</span>';
	
	var customerId;
	//查询单位用到的store
	var reciveStore = Ext.create('Ext.data.Store', {
		model: 'Customer',
		remoteSort: true,
		//每页显示的数据
		pageSize: 5,
		proxy: {
			type: "ajax",
			url: '/XJManager/base/customerList.do',
			reader: {
				type: "json",
				root: "queryList",
				totalProperty: 'totalCount'
			}
		}
	});
	
	
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
				fieldLabel: '发运日期',
				name: 'payList.payTdate',
			}, {
				xtype: 'textfield',
//				fieldLabel: '客户名称',
//				name:'bCustomerName',
				fieldLabel: '审核人',
				name: 'payList.payAuditor',
								
			}, {
				xtype: 'textfield',
				fieldLabel: '发货单位',
				//name:'departmentName',
				name: 'payList.payDepartment',
				
			}, {
				xtype: 'textfield',
				fieldLabel: '收货单位',
				//name:'reciveName',
				name: 'payList.payReciever',
			}, {
				xtype: 'textfield',
				fieldLabel: '结算单位',
				//name:'bCustomerName',
				name: 'payList.payCustomerid',
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
				text: '搜索',
				handler:function(){
					var url = "/XJManager/account/coalaccountList.do?1=1";
					debugger;
					var all = searchFormpanel.getForm().getValues();
					var searchTdate = all['payList.payTdate'];
					//var searchCustname=all['bCustomerName'];
					//var searchDepartment=all['departmentName'];
					//var searchReciever=all['reciveName'];
					//var searchCustomerid=all['bCustomerName'];
					var searchAuditor = all['payList.payAuditor'];
					var searchDepartment = all['payList.payDepartment'];
					var searchReciever = all['payList.payReciever'];
					var searchCustomerid = all['payList.payCustomerid'];
					if (searchTdate != '' && searchTdate != null) {
                        url = url + '&payList.payTdate=' + searchTdate;
                    }
					if(searchAuditor != '' && searchAuditor != null){
						url = url + '&payList.payAuditor=' + searchAuditor;
					}
					/*if(searchCustname != '' && searchCustname != null){
						url = url + '&bCustomerName=' + searchCustname;
					}*/
					if(searchDepartment != '' && searchDepartment != null){
						url = url + '&payList.payDepartment=' + searchDepartment;
					}
					if(searchReciever != '' && searchReciever != null){
						url = url + '&payList.payReciever=' + searchReciever;
					}
					if(searchCustomerid != '' && searchCustomerid != null){
						url = url + '&payList.payCustomerid=' + searchCustomerid;
					}
					store.getProxy().url = url;
					store.load();
					panelnew.hide();			
				}
			}, {
				minWidth: 80,
				text: '取消'
			}]
		}]

	});
	//////////////////////////////////////////////////////
	//筛选面板
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
		});
	/**********************创建筛选框结束*****************************/
	//创建一个grid
	Ext.define('Pay', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [
		         {name: 'payList.payTdate', type: 'Date', mapping: 'payList.payDate.time', dateFormat: 'time'},
		         {name: 'payList.payAuditor', type: 'string'},
		         {name: 'payList.payDepartment', type: 'string'},
		         {name: 'payList.payReciever', type: 'Integer'},
		         {name: 'payList.payCustomerid', type: 'Integer'},
		        ]        
	});
    Ext.tip.QuickTipManager.init();
    var store = Ext.create('Ext.data.Store', {
        model: 'Pay',
        remoteSort: true,
        //每页显示的数据
        pageSize: 5,
        proxy: {
            type: "ajax",
            url: '/XJManager/account/coalaccountList.do',
            reader: {
                type: "json",
                root: "queryList",
                totalProperty: 'totalCount'
            }
        }
    });
    var sm = Ext.create('Ext.selection.CheckboxModel');
    

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

	/************************定义添加界面开始***********************/
	var addForm = Ext.create('Ext.form.Panel', {
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
					xtype: 'textfield',
					fieldLabel: '结算单编号',
					width: 300,
					name: 'payList.payId',
					hidden:true
				},
				{
					xtype: "fieldcontainer",
					layout: "hbox",
					items: [
					{
							xtype: "textfield",
							name: 'payList.payDepartment',
							hidden:true
					},
					{
						xtype: "textfield",
						fieldLabel: "发运单位",
						width: 278,
						flex: 1,
						name: 'departmentName',
						afterLabelTextTpl: required,
						//allowBlank: false,
					}, {
						xtype: "button",
						icon: '../../common/shared/icons/fam/search.png',
						listeners: {
							click: function() {
								
									/*******************创建内部单位搜索框开始***************/
									var companyStore = Ext.create('Ext.data.Store', {
										model: 'addcompany',
										remoteSort: true,
										getMethod: function() {
											return 'POST';
										},
										//亮点，设置请求方式,默认为GET         
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
									var companyGrid = Ext.create('Ext.grid.Panel', {
										id: 'agrid',
										region: 'east',
										title: '单位列表',
										store: companyStore,
										loadMask: true,
										columns: [{
												text: '机构编号',
												sortable: true,
												dataIndex: 'coId',
												flex: 0,
												width: 75,
											},
											{
												text: '机构简称',
												sortable: true,
												dataIndex: 'coShort',
												width: 75
											},
											{
												text: '机构全称',
												sortable: true,
												dataIndex: 'coName',
												width: 75
											},
											{
												text: '联系电话',
												sortable: true,
												dataIndex: 'coPhone',
												width: 75
											},
											{
												text: '邮政编码',
												sortable: true,
												dataIndex: 'coPostcode',
												width: 75
											},
											{
												text: '传真',
												sortable: true,
												dataIndex: 'coFax',
												width: 75
											},
											{
												text: '负责人',
												sortable: true,
												dataIndex: 'coLeader',
												width: 75
											},
											{
												text: '地址',
												sortable: true,
												dataIndex: 'coAddress',
												width: 75
											},
											{
												text: '联系人',
												sortable: true,
												dataIndex: 'coLinkman',
												width: 75
											}
										],
										stripeRows: true,
										height: 320,
										width: 1200,
										frame: false,
									});
									var companyForm = Ext.create('Ext.form.Panel', {
										region: 'west',
										plain: true,
										border: 0,
										bodyPadding: 5,
										width: 200,
										//表单发送的到的action路径
										url: '/XJManager/base/companyList.do',
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
												name: 'coId'
											},
											{
												xtype: 'textfield',
												fieldLabel: '机构简称',
												name: 'coShort',
								
											},
											{
												xtype: 'textfield',
												fieldLabel: '机构电话',
												name: 'coPhone',
											},
											{
												xtype: 'textfield',
												fieldLabel: '机构传真',
												name: 'coFax',
											},
											{
												xtype: 'textfield',
												fieldLabel: '机构邮编',
												name: 'coPostcode',
											},
											{
												xtype: 'textfield',
												fieldLabel: '机构负责人',
												name: 'coLeader',
											}
										],
								
										buttons: [{
												text: "搜索",
												iconCls: "btn-save",
												handler: function() {
													var all = companyForm.getForm().getValues();
													var url = '/XJManager/base/companyList.do?1=1';
													var id = all['coId'];
													var short = all['coShort'];
													var phone = all['coPhone'];
													var fax = all['coFax'];
													var postcode = all['coPostcode'];
													var leader = all['coLeader'];
													if(id != '') {
														url = url + '&coId=' + id;
													}
													if(short != '') {
														url = url + '&coShort=' + short;
													}
													if(phone != '') {
														url = url + '&coPhone=' + phone;
													}
													if(fax != '') {
														url = url + '&coFax=' + fax;
													}
													if(postcode != '') {
														url = url + '&coPostcode=' + postcode;
													}
													if(leader != '') {
														url = url + '&coLeader=' + leader;
													}
													companyStore.getProxy().url = url;
													companyStore.load();
												}
											},
											{
												text: "重置",
												iconCls: "reset",
												handler: function() {
													this.up('form').getForm().reset();
												}
											}
										]
									});
									var companyWin = Ext.create("Ext.window.Window", {
												title: '搜索',
												closeAction: 'hide',
												closable: true,
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
												modal: true,
												plain: true,
												autoScroll: true,
												items: [{
														region: 'west',
														title: '部门搜索',
														items: [companyForm],
														width: 200,
														split: true,
														//是否可缩小
														collapsible: true,
														floatable: false
													},
													{
														region: 'center',
														items: [companyGrid],
														width: 200,
														split: true,
														floatable: false,
														autoScroll: true
													}
												]
											});
									/********************创建内部单位搜索结束**************/
									companyGrid.addListener('itemdblclick',function(dataview, record, item, index, e) {
									if(record.get('coId')!=null){
										addForm.getForm().findField('payList.payDepartment').setValue(record.get('coId'));
									}
									if(record.get('coName')!=null){
										addForm.getForm().findField('departmentName').setValue(record.get('coName'));
									}
									companyWin.hide();
								});
									companyWin.show();
							}
						}
					}]
				}, 
				{
					xtype: "fieldcontainer",
					layout: "hbox",
					items: [
					{
							xtype: "textfield",
							name: 'payList.payReciever',
							hidden:true
					},
					{
						xtype: "textfield",
						fieldLabel: "&nbsp&nbsp收货单位",
						width: 278,
						flex: 0,
						name: 'reciveName',
						afterLabelTextTpl: required,
						//allowBlank: false,
					}, {
						xtype: "button",
						icon: '../../common/shared/icons/fam/search.png',
						/************创建单位搜索框开始***********/
						listeners: {
							click: function() {
								/********************客户相关开始*********************************/
								var customerStore = Ext.create('Ext.data.Store', {
									model: 'Customer',
									remoteSort: true,
									//每页显示的数据
									pageSize: 5,
									proxy: {
										type: "ajax",
										url: '/XJManager/base/customerList.do',
										reader: {
											type: "json",
											root: "queryList",
											totalProperty: 'totalCount'
										}
									}
								});
								var customerSearchForm = Ext.create('Ext.form.Panel', {
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
										xtype: 'numberfield',
										fieldLabel: '客户编号',
										afterLabelTextTpl: required,
										name: 'customer.cId',
										width: 200
									}, {
										xtype: 'textfield',
										fieldLabel: '客户简称',
										afterLabelTextTpl: required,
										name: 'customer.cShort',
										width: 400
									}, {
										xtype: 'textfield',
										fieldLabel: '联系人',
										width: 200,
										name: 'customer.cLinkman'
									}, {
										xtype: 'combo',
										store: Ext.create('Ext.data.ArrayStore', {
											fields: [{
												name: 'companyKey',
												type: 'Integer'
											}, {
												name: 'companyValue',
												type: 'String'
											}],
											data: [
												[1, '股份制有限公司'],
												[2, '国有'],
												[3, '国有股份制'],
												[4, '合资公司'],
												[5, '集体'],
												[6, '民营'],
												[7, '私营'],
												[8, '有限公司'],
												[9, '有限责任公司'],
												[10, '中外合资公司'],
											]
										}),
										name: 'customer.cCompanytype',
										hiddenName: 'customer.cCompanytype',
										valueField: 'companyKey',
										displayField: 'companyValue',
										fieldLabel: '企业性质',
										width: 200,
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
												name: 'typeKEY',
												type: 'Integer'
											}, {
												name: 'typeValue',
												type: 'String'
											}],
											data: [
												[1, '一般客户'],
												[2, '重点客户'],
											]
										}),
										name: 'customer.cType',
										hiddenName: 'customer.cType',
										valueField: 'typeKEY',
										displayField: 'typeValue',
										fieldLabel: '客户类型',
										width: 200,
										queryMode: 'local',
										//数据模式,local代表本地数据模式
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
												name: 'iKey',
												type: 'Integer'
											}, {
												name: 'iValue',
												type: 'String'
											}],
											data: [
												[1, '电力'],
												[2, '化工'],
												[3, '建材'],
												[4, '商业'],
												[5, '石化'],
												[6, '冶金'],
												[7, '其他'],
											]
										}),
										name: 'customer.cIid',
										hiddenName: 'customer.cIid',
										// 提交到后台的input的name ，对应下面store里的''id，必须要填
										emptyText: '-----请选择-----',
										valueField: 'iKey',
										displayField: 'iValue',
										fieldLabel: '所属行业',
										width: 200,
										queryMode: 'local',
										//数据模式,local代表本地数据模式
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
												name: 'departmentKey',
												type: 'Integer'
											}, {
												name: 'departmentValue',
												type: 'String'
											}],
											data: [
												[1, '大唐'],
												[2, '国电'],
												[3, '国资委'],
												[4, '华电'],
												[5, '华能'],
												[6, '化工部'],
												[7, '省电燃'],
												[8, '铁道部'],
												[9, '皖能'],
												[10, '冶金部'],
												[11, '中电投'],
												[12, '中石化'],
												[13, '其他'],
											]
										}),
										name: 'customer.cDepartment',
										hiddenName: 'customer.cDepartment',
										emptyText: '-----请选择-----',
										valueField: 'departmentKey',
										displayField: 'departmentValue',
										fieldLabel: '部别',
										width: 200,
										queryMode: 'local',
										selectOnTab: false,
										typeAhead: false,
										editable: false,
										onReplicate: function() {
											this.getStore().clearFilter();
										}

									}, ],
									buttons: [{
										text: "搜索",
										iconCls: "btn-save",
										handler: function() {
											var url = '/XJManager/base/customerList.do?1=1';
											var all = customerSearchForm.getForm().getValues();
											var cusIdSearch = all['customer.cId'];
											var shortSearch = all['customer.cShort'];
											var linkmanSearch = all['customer.cLinkman'];
											var comtypeSearch = all['customer.cCompanytype'];
											var typeSearch = all['customer.cType'];
											var cIidSearch = all['customer.cIid'];
											var depSearch = all['customer.cDepartment'];
											if(cusIdSearch != '' && cusIdSearch != null) {
												url = url + '&customer.cId=' + cusIdSearch;
											}
											if(shortSearch != '' && shortSearch != null) {
												url = url + '&customer.cShort=' + shortSearch;
											}
											if(linkmanSearch != null && linkmanSearch != '') {
												url = url + '&customer.cLinkman=' + linkmanSearch;
											}
											if(comtypeSearch != '' && comtypeSearch != null) {
												url = url + '&customer.cCompanytype=' + comtypeSearch;
											}
											if(typeSearch != '' && typeSearch != null) {
												url = url + '&customer.cType=' + typeSearch;
											}
											if(cIidSearch != '' && cIidSearch != null) {
												url = url + '&customer.cIid=' + cIidSearch;
											}
											if(depSearch != '' && depSearch != null) {
												url = url + '&customer.cDepartment=' + depSearch;
											}
											customerStore.getProxy().url = url;
											customerStore.load();
										}
									}, {
										text: "重置",
										iconCls: "reset",
										handler: function() {
											this.up('form').getForm().reset();
										}
									}]
								});
								var customerGrid = Ext.create('Ext.grid.Panel', {
									region: 'east',
									store: customerStore,
									selModel: Ext.create('Ext.selection.CheckboxModel'),
									columns: [{
										text: '客户编号',
										sortable: true,
										dataIndex: 'customer.cId',
										flex: 0,
										width: 75,
									}, {
										text: '客户简称',
										sortable: true,
										dataIndex: 'customer.cShort',
										width: 75,
									}, {
										text: '客户全称',
										sortable: true,
										dataIndex: 'customer.cName',
										width: 75,
									}, {
										text: '企业性质',
										sortable: true,
										dataIndex: 'customer.cCompanytype',
										width: 75,
										renderer: function(value) {
											if(value == 1) {
												return "股份制有限公司";
											} else if(value == 2) {
												return "国有";
											} else if(value == 3) {
												return "国有股份制";
											} else if(value == 4) {
												return "合资公司";
											} else if(value == 5) {
												return "集体";
											} else if(value == 6) {
												return "民营";
											} else if(value == 7) {
												return "私营";
											} else if(value == 8) {
												return "有限公司";
											} else if(value == 9) {
												return "有限责任公司";
											} else if(value == 10) {
												return "中外合资公司";
											}
										}
									}, {
										text: '客户类型',
										sortable: true,
										dataIndex: 'customer.cType',
										width: 75,
										renderer: function(value) {
											if(value == 1) {
												return "一般客户";
											} else {
												return "重点客户";
											}
										}
									}, {
										text: '所属行业',
										sortable: true,
										dataIndex: 'customer.cIid',
										width: 75,
										renderer: function(value) {
											if(value == 1) {
												return "电力";
											} else if(value == 2) {
												return "化工";
											} else if(value == 3) {
												return "建材";
											} else if(value == 4) {
												return "商业";
											} else if(value == 5) {
												return "石化";
											} else if(value == 6) {
												return "冶金";
											} else if(value == 7) {
												return "其他";
											}
										}
									}, {
										text: '部别',
										sortable: true,
										dataIndex: 'customer.cDepartment',
										width: 75,
										renderer: function(value) {
											if(value == 1) {
												return "大唐";
											} else if(value == 2) {
												return "国电";
											} else if(value == 3) {
												return "国资委";
											} else if(value == 4) {
												return "华电";
											} else if(value == 5) {
												return "华能";
											} else if(value == 6) {
												return "化工部";
											} else if(value == 7) {
												return "省电燃";
											} else if(value == 8) {
												return "铁道部";
											} else if(value == 9) {
												return "皖能";
											} else if(value == 10) {
												return "冶金部";
											} else if(value == 11) {
												return "中电投";
											} else if(value == 12) {
												return "中石化";
											} else if(value == 13) {
												return "其他";
											}
										}
									}, ],
									stripeRows: true,
									height: 250,
									width: 'auto',
									bbar: Ext.create('Ext.PagingToolbar', {
										pageSize: 10,
										store: customerStore,
										displayInfo: true,
										plugins: Ext.create('Ext.ux.ProgressBarPager', {})
									})
								});
								var customerWin = Ext.create("Ext.window.Window", {
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
										items: [customerSearchForm],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [customerGrid],
										width: 200,
										split: true,
										floatable: false,
										autoScroll: true
									}]
								});
								/********************客户相关结束*********************************/
								customerGrid.addListener('itemdblclick', function(dataview, record, item, index, e) {
								if(record.get('customer.cId') != null) {
									addForm.getForm().findField('payList.payReciever').setValue(record.get('customer.cId'));
								}
								if(record.get('customer.cName') != null) {
									addForm.getForm().findField('reciveName').setValue(record.get('customer.cName'));
								}
								customerWin.hide();
								});
								customerWin.show();
							}
						}
						/************创建单位搜索框结束***********/
					}]
				}, 
				{

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [
					{
							xtype: "textfield",
							name: 'payList.payCustomerid',
							hidden:true
					},
					{
						xtype: "textfield",
						fieldLabel: "结算单位",
						width: 278,
						flex: 0,
						name: 'bCustomerName',
						afterLabelTextTpl: required,
						//allowBlank: false,
					}, {
						xtype: "button",
						icon: '../../common/shared/icons/fam/search.png',
						listeners: {
							click: function() {
								/********************客户相关开始*********************************/
								var customerStore = Ext.create('Ext.data.Store', {
									model: 'Customer',
									remoteSort: true,
									//每页显示的数据
									pageSize: 5,
									proxy: {
										type: "ajax",
										url: '/XJManager/base/customerList.do',
										reader: {
											type: "json",
											root: "queryList",
											totalProperty: 'totalCount'
										}
									}
								});
								var customerSearchForm = Ext.create('Ext.form.Panel', {
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
										xtype: 'numberfield',
										fieldLabel: '客户编号',
										afterLabelTextTpl: required,
										name: 'customer.cId',
										width: 200
									}, {
										xtype: 'textfield',
										fieldLabel: '客户简称',
										afterLabelTextTpl: required,
										name: 'customer.cShort',
										width: 400
									}, {
										xtype: 'textfield',
										fieldLabel: '联系人',
										width: 200,
										name: 'customer.cLinkman'
									}, {
										xtype: 'combo',
										store: Ext.create('Ext.data.ArrayStore', {
											fields: [{
												name: 'companyKey',
												type: 'Integer'
											}, {
												name: 'companyValue',
												type: 'String'
											}],
											data: [
												[1, '股份制有限公司'],
												[2, '国有'],
												[3, '国有股份制'],
												[4, '合资公司'],
												[5, '集体'],
												[6, '民营'],
												[7, '私营'],
												[8, '有限公司'],
												[9, '有限责任公司'],
												[10, '中外合资公司'],
											]
										}),
										name: 'customer.cCompanytype',
										hiddenName: 'customer.cCompanytype',
										valueField: 'companyKey',
										displayField: 'companyValue',
										fieldLabel: '企业性质',
										width: 200,
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
												name: 'typeKEY',
												type: 'Integer'
											}, {
												name: 'typeValue',
												type: 'String'
											}],
											data: [
												[1, '一般客户'],
												[2, '重点客户'],
											]
										}),
										name: 'customer.cType',
										hiddenName: 'customer.cType',
										valueField: 'typeKEY',
										displayField: 'typeValue',
										fieldLabel: '客户类型',
										width: 200,
										queryMode: 'local',
										//数据模式,local代表本地数据模式
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
												name: 'iKey',
												type: 'Integer'
											}, {
												name: 'iValue',
												type: 'String'
											}],
											data: [
												[1, '电力'],
												[2, '化工'],
												[3, '建材'],
												[4, '商业'],
												[5, '石化'],
												[6, '冶金'],
												[7, '其他'],
											]
										}),
										name: 'customer.cIid',
										hiddenName: 'customer.cIid',
										// 提交到后台的input的name ，对应下面store里的''id，必须要填
										emptyText: '-----请选择-----',
										valueField: 'iKey',
										displayField: 'iValue',
										fieldLabel: '所属行业',
										width: 200,
										queryMode: 'local',
										//数据模式,local代表本地数据模式
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
												name: 'departmentKey',
												type: 'Integer'
											}, {
												name: 'departmentValue',
												type: 'String'
											}],
											data: [
												[1, '大唐'],
												[2, '国电'],
												[3, '国资委'],
												[4, '华电'],
												[5, '华能'],
												[6, '化工部'],
												[7, '省电燃'],
												[8, '铁道部'],
												[9, '皖能'],
												[10, '冶金部'],
												[11, '中电投'],
												[12, '中石化'],
												[13, '其他'],
											]
										}),
										name: 'customer.cDepartment',
										hiddenName: 'customer.cDepartment',
										emptyText: '-----请选择-----',
										valueField: 'departmentKey',
										displayField: 'departmentValue',
										fieldLabel: '部别',
										width: 200,
										queryMode: 'local',
										selectOnTab: false,
										typeAhead: false,
										editable: false,
										onReplicate: function() {
											this.getStore().clearFilter();
										}

									}, ],
									buttons: [{
										text: "搜索",
										iconCls: "btn-save",
										handler: function() {
											var url = '/XJManager/base/customerList.do?1=1';
											var all = customerSearchForm.getForm().getValues();
											var cusIdSearch = all['customer.cId'];
											var shortSearch = all['customer.cShort'];
											var linkmanSearch = all['customer.cLinkman'];
											var comtypeSearch = all['customer.cCompanytype'];
											var typeSearch = all['customer.cType'];
											var cIidSearch = all['customer.cIid'];
											var depSearch = all['customer.cDepartment'];
											if(cusIdSearch != '' && cusIdSearch != null) {
												url = url + '&customer.cId=' + cusIdSearch;
											}
											if(shortSearch != '' && shortSearch != null) {
												url = url + '&customer.cShort=' + shortSearch;
											}
											if(linkmanSearch != null && linkmanSearch != '') {
												url = url + '&customer.cLinkman=' + linkmanSearch;
											}
											if(comtypeSearch != '' && comtypeSearch != null) {
												url = url + '&customer.cCompanytype=' + comtypeSearch;
											}
											if(typeSearch != '' && typeSearch != null) {
												url = url + '&customer.cType=' + typeSearch;
											}
											if(cIidSearch != '' && cIidSearch != null) {
												url = url + '&customer.cIid=' + cIidSearch;
											}
											if(depSearch != '' && depSearch != null) {
												url = url + '&customer.cDepartment=' + depSearch;
											}
											customerStore.getProxy().url = url;
											customerStore.load();
										}
									}, {
										text: "重置",
										iconCls: "reset",
										handler: function() {
											this.up('form').getForm().reset();
										}
									}]
								});
								var customerGrid = Ext.create('Ext.grid.Panel', {
									region: 'east',
									store: customerStore,
									selModel: Ext.create('Ext.selection.CheckboxModel'),
									columns: [{
										text: '客户编号',
										sortable: true,
										dataIndex: 'customer.cId',
										flex: 0,
										width: 75,
									}, {
										text: '客户简称',
										sortable: true,
										dataIndex: 'customer.cShort',
										width: 75,
									}, {
										text: '客户全称',
										sortable: true,
										dataIndex: 'customer.cName',
										width: 75,
									}, {
										text: '企业性质',
										sortable: true,
										dataIndex: 'customer.cCompanytype',
										width: 75,
										renderer: function(value) {
											if(value == 1) {
												return "股份制有限公司";
											} else if(value == 2) {
												return "国有";
											} else if(value == 3) {
												return "国有股份制";
											} else if(value == 4) {
												return "合资公司";
											} else if(value == 5) {
												return "集体";
											} else if(value == 6) {
												return "民营";
											} else if(value == 7) {
												return "私营";
											} else if(value == 8) {
												return "有限公司";
											} else if(value == 9) {
												return "有限责任公司";
											} else if(value == 10) {
												return "中外合资公司";
											}
										}
									}, {
										text: '客户类型',
										sortable: true,
										dataIndex: 'customer.cType',
										width: 75,
										renderer: function(value) {
											if(value == 1) {
												return "一般客户";
											} else {
												return "重点客户";
											}
										}
									}, {
										text: '所属行业',
										sortable: true,
										dataIndex: 'customer.cIid',
										width: 75,
										renderer: function(value) {
											if(value == 1) {
												return "电力";
											} else if(value == 2) {
												return "化工";
											} else if(value == 3) {
												return "建材";
											} else if(value == 4) {
												return "商业";
											} else if(value == 5) {
												return "石化";
											} else if(value == 6) {
												return "冶金";
											} else if(value == 7) {
												return "其他";
											}
										}
									}, {
										text: '部别',
										sortable: true,
										dataIndex: 'customer.cDepartment',
										width: 75,
										renderer: function(value) {
											if(value == 1) {
												return "大唐";
											} else if(value == 2) {
												return "国电";
											} else if(value == 3) {
												return "国资委";
											} else if(value == 4) {
												return "华电";
											} else if(value == 5) {
												return "华能";
											} else if(value == 6) {
												return "化工部";
											} else if(value == 7) {
												return "省电燃";
											} else if(value == 8) {
												return "铁道部";
											} else if(value == 9) {
												return "皖能";
											} else if(value == 10) {
												return "冶金部";
											} else if(value == 11) {
												return "中电投";
											} else if(value == 12) {
												return "中石化";
											} else if(value == 13) {
												return "其他";
											}
										}
									}, ],
									stripeRows: true,
									height: 250,
									width: 'auto',
									bbar: Ext.create('Ext.PagingToolbar', {
										pageSize: 10,
										store: customerStore,
										displayInfo: true,
										plugins: Ext.create('Ext.ux.ProgressBarPager', {})
									})
								});
								var customerWin = Ext.create("Ext.window.Window", {
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
										items: [customerSearchForm],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [customerGrid],
										width: 200,
										split: true,
										floatable: false,
										autoScroll: true
									}]
								});
								/********************客户相关结束*********************************/
								customerGrid.addListener('itemdblclick', function(dataview, record, item, index, e) {
									if(record.get('customer.cId') != null) {
										addForm.getForm().findField('payList.payCustomerid').setValue(record.get('customer.cId'));
									}
									if(record.get('customer.cName') != null) {
										addForm.getForm().findField('bCustomerName').setValue(record.get('customer.cName'));
									}
									customerWin.hide();
								});
								customerWin.show();
							}
						}
						/************创建单位搜索框结束***********/
					}]

				}, {
					xtype: 'datefield',
					fieldLabel: '&nbsp&nbsp发运日期',
					width: 300,
					name: 'payList.payTdate',
				}, {
					xtype: 'datefield',
					fieldLabel: '结算日期',
					width: 300,
					name: 'payList.payDate',
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp批号',
					width: 300,
					name: 'payList.payPihao',
				}, {
					xtype: 'textfield',
					fieldLabel: '车数',
					width: 300,
					name: 'payList.payCount',
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp矿发吨位',
					width: 300,
					name: 'payList.payWeight',
				}, {
					xtype: 'textfield',
					fieldLabel: '单价',
					width: 300,
					name: 'payList.payPrice',
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp金额',
					width: 300,
					name: 'payList.payTotal',
				}, {
					xtype: 'textfield',
					fieldLabel: '专用费用',
					width: 300,
					name: 'payList.payDedicated',
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp运费',
					width: 300,
					name: 'payList.payTransport',
				}, {
					xtype: 'textfield',
					fieldLabel: '运输服务费',
					width: 300,
					name: 'payList.payServe',
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp审批人',
					width: 300,
					name: 'payList.payDecider',
				}, {
					xtype: 'textfield',
					fieldLabel: '审核人',
					width: 300,
					name: 'payList.payAuditor',
				}, ],
			},
			//////////////////////////////////////////////////////////////////////

		],
	});
	var addWin = new Ext.Window({
		autoHight: true,
		modal: true,
		items: [],
		closeAction: 'close',
		buttons: [{
			text: "保存",
			iconCls: "btn-save",
			handler: function() {
				if(!addForm.isValid()){
					Ext.Msg.alert('请完善信息', '有必填项没有输入,请仔细检查!');
					return;
				}
				addForm.submit({
					success: function() {
						addWin.hide();
						store.reload();
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
				addForm.form().reset();
			}
		}]
		
	});
	/************************定义添加界面结束***********************/
	Ext.define('coalaccount', {
		extend: 'Ext.data.Model',
		idProperty: 'coalaccount',
		//定义类的属性
		fields: [
		{
			name: 'payList.payId',
			type: 'String'
		},
		{
			name: 'payList.payDepartment',
			type: 'String'
		},
		{
			name: 'payList.payCustomerid',
			type: 'String'
		},
		{
			name: 'payList.payReciever',
			type: 'String'
		},
		{
			name: 'departmentName',
			type: 'String'
		}, {
			name: 'reciveName',
			type: 'String'
		}, {
			name: 'bCustomerName',
			type: 'String'
		}, {
			name: 'payList.payTdate',
			type: 'Date',
			mapping: 'payList.payDate.time',
			dateFormat: 'time'
		}, {
			name: 'payList.payDate',
			type: 'Date',
			mapping: 'payList.payDate.time',
			dateFormat: 'time'
		}, {
			name: 'payList.payPihao',
			type: 'Integer'
		}, {
			name: 'payList.payCount',
			type: 'Integer'
		}, {
			name: 'payList.payWeight',
			type: 'Integer'
		}, {
			name: 'payList.payPrice',
			type: 'Double'
		}, {
			name: 'payList.payTotal',
			type: 'Double'
		}, {
			name: 'payList.payTransport',
			type: 'Double'
		}, {
			name: 'payList.payServe',
			type: 'Double'
		}, {
			name: 'payList.payDedicated',
			type: 'Double'
		}, {
			name: 'payList.payDecider',
			type: 'String'
		}, {
			name: 'payList.payAuditor',
			type: 'String'
		}, ]
	});

	//初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
	Ext.tip.QuickTipManager.init();
	//想当于一个仓库 存储各种对像的
	var store = Ext.create('Ext.data.Store', {
		model: 'coalaccount',
		remoteSort: true,
		//每页显示的数据
		pageSize: 10,
		proxy: {
			type: "ajax",
			url: '/XJManager/account/coalaccountList.do',
			reader: {
				type: "json",
				root: "queryList",
				totalProperty: 'totalCount'
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
		//解决布局乱掉的问题
		stateful: true,
		collapsible: true,
		//允许combo域同时保持多个值
		multiSelect: true,
		//定义列
		columns: [
			{
				text: '结算单编号',
				sortable: true,
				dataIndex: 'payList.payId',
				flex: 0,
				width: 75,
				hidden:true
			},
			{
				text: '结算单位编号',
				sortable: true,
				dataIndex: 'payList.payCustomerid',
				flex: 0,
				width: 75,
				hidden:true
			},
			{
				text: '收货单位编号',
				sortable: true,
				dataIndex: 'payList.payReciever',
				flex: 0,
				width: 75,
				hidden:true
			},
			{
				text: '发运单位编号',
				sortable: true,
				dataIndex: 'payList.payDepartment',
				flex: 0,
				width: 75,
				hidden:true
			},
			{
				text: '发运单位',
				sortable: true,
				dataIndex: 'departmentName',
				flex: 0,
				width: 75,
			}, {
				text: '收货单位',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'reciveName',
				flex: 0,
				width: 75,
			}, {
				text: '结算单位',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'bCustomerName',
				flex: 0,
				width: 75,
			}, {

				text: '发运日期',
				sortable: true,
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				dataIndex: 'payList.payTdate',
				flex: 0,
				width: 75,

			}, {
				text: '结算日期',
				sortable: true,
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				dataIndex: 'payList.payDate',
				flex: 0,
				width: 75,
			}, {
				text: '批号',
				sortable: true,
				dataIndex: 'payList.payPihao',
				flex: 0,
				width: 75,
			}, {

				text: '车数',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'payList.payCount',
				flex: 0,
				width: 75,
			}, {
				text: '矿发吨位',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'payList.payWeight',
				flex: 0,
				width: 75,
			}, {
				text: '单价',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'payList.payPrice',
				flex: 0,
				width: 75,
			}, {
				text: '金额',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'payList.payTotal',
				flex: 0,
				width: 75,
			}, {
				text: '运费',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'payList.payTransport',
				flex: 0,
				width: 75,
			}, {
				text: '运输服务费',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'payList.payServe',
				flex: 0,
				width: 75,
			}, {
				text: '专用线费用',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'payList.payDedicated',
				flex: 0,
				width: 75,
			}, {
				text: '小计',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: '',
				flex: 0,
				width: 75,
			}, {
				text: '审批人',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'payList.payDecider',
				flex: 0,
				width: 75,
			}, {
				text: '审核人',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'payList.payAuditor',
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
									//获取对应行的节点
									var node = grid.getNode(rowIndex);
									//获取对应节点的数据model
									var rec = grid.getRecord(node);
									//获取选中行的pid属性
									var id = rec.get('payList.payId');
									debugger;
									Ext.Ajax.request({
										url: '/XJManager/account/deleteCoalacCount.do',
										params: {
											'ids': id	
										},
										method:'POST',
										success:function(response, options){
											Ext.MessageBox.alert('成功', '删除成功');
										},
										failure: function(response, options) {
											Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
										}
									});
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
					tooltip: 'search',
					iconCls: 'search',
					listeners: {
						'click': function() {
							searchFormpanel.getForm().reset();
							panelnew.show();
						}
					}
				}, '-', {
					text: '添加',
					iconCls: 'add',
					listeners: {
						'click': function() {
							addForm.form.reset();
							addForm.getForm().url = '/XJManager/account/addCoalacCount.do';
							addWin.add(addForm);
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
							//Ext.getCmp('formpid').readOnly = true;
							addForm.getForm().url = '/XJManager/account/updateCoalacCount.do';
							grid.getSelectionModel().clearSelections();
							grid.getView().refresh();
						}

					}
				}, '-', {
					itemId: 'removeButton',
					text: '删除',
					tooltip: 'remove',
					iconCls: 'remove',
					//disabled: true,
					listeners: {
							'click': function() {
								var record = grid.getSelectionModel().getSelection();
								if(record == undefined || record == '') {
									Ext.Msg.alert("错误", "请选择至少一条数据");
									return;
								} else {
									Ext.MessageBox.confirm("请确认", "确定删除吗？",
										function(button, text) {
											if(button == 'yes') {
												var url = "/XJManager/account/deleteCoalacCount.do";
												var param = "";
												for(var i = 0; i < record.length; i++) {
													param = param + record[i].get("payList.payId") + "-";
												}
												Ext.Ajax.request({
													url: url,
													params: {
														'ids': param
													},
													method: 'POST',
													success: function(response, options) {
														Ext.MessageBox.alert('成功', '删除成功');
														store.reload();
													},
													failure: function(response, options) {
														Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
													}
												});
											}
										});
								}
							}
						}
				}, '-', {
					text: '打印',
					tooltip: 'print',
					iconCls: 'print'
				}]
			}
		],

		//table边框的设定
		stripeRows: true,
		store: store,
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