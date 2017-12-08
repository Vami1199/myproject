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
				xtype: 'textfield',
				fieldLabel: '商品名称',
				name:'payInnerList.payInProductName',
			}, {
				xtype: 'textfield',
				fieldLabel: '购货单位',
				name:'buyerName',
			}, {
				xtype: 'textfield',
				fieldLabel: '销货单位',
				name:'salerName',
			},{
				xtype: 'datefield',
				fieldLabel: '创建日期',
				width:60,
				name:'',
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
	Ext.define('PayInnerList', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [
		         {
		         	name: 'payInnerList.payInProductName', 
		         	type: 'string'
		         },
		         {
		         	name: 'payInnerList.payInBuy', 
		         	type: 'Integer'
		         },
		         {
		         	name:'buyerName',
		         	type:'string'
		         },
		         {
		         	name: 'payInnerList.payInSale', 
		         	type: 'Integer'
		         },
		         {
		         	name: 'salerName', 
		         	type: 'string'
		         },
		         /*{
		         	name: 'payList.payTdate', 
		         	type: 'Date', 
		         	mapping: 'payList.payDate.time', 
		         	dateFormat: 'time'
		         },*/
		        ]        
	});
    Ext.tip.QuickTipManager.init();
    var store = Ext.create('Ext.data.Store', {
        model: 'PayInnerList',
        remoteSort: true,
        //每页显示的数据
        pageSize: 5,
        proxy: {
            type: "ajax",
            url: '/XJManager/account/payInnerList.do',
            reader: {
                type: "json",
                root: "queryList",
                totalProperty: 'totalCount'
            }
        }
    });
    var sm = Ext.create('Ext.selection.CheckboxModel');
    
	
		
		
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
						name: 'payInnerList.payInId',
						hidden:true
					},
					{
						xtype: 'textfield',
						fieldLabel: '商品名称',
						width: 300,
						name: 'payInnerList.payInProductName',
					}, {
						xtype: 'textfield',
						fieldLabel: '实际销售不含税收入（元）',
						width: 300,
						name:'payInnerList.payInNoIncom',
					}, {
						xtype: 'textfield',
						fieldLabel: '实际销售购销量（吨）',
						width: 300,
						name:'payInnerList.payInPurchases',
					}, {
						xtype: 'textfield',
						fieldLabel: '实际销售不含税售价（元/吨）',
						width: 300,
						name:'payInnerList.payInPrice',
					}, {
						xtype: 'textfield',
						fieldLabel: '预结算不含税收入（元）',
						width: 300,
						name:'payInnerList.',
					}, {
						xtype: 'textfield',
						fieldLabel: '预结算购销量（吨）',
						width: 300,
						name:'payInnerList.',
					}, {
						xtype: 'textfield',
						fieldLabel: '预结算不含税售价（元/吨）',
						width: 300,
						name:'payInnerList.',
					}, {
						xtype: 'textfield',
						fieldLabel: '补结算不含税收入（元）',
						width: 300,
						name:'payInnerList.payInFillNoIncom',
					}, {
						xtype: 'textfield',
						fieldLabel: '补结算购销量（吨）',
						width: 300,
						name:'payInnerList.payInFillPurchases',
					}, {
						xtype: 'textfield',
						fieldLabel: '补结算不含税售价（元/吨）',
						width: 300,
						name:'payInnerList.payInFillPrice',
					},
					///////////////////////////////////////////////
					{

						xtype: "fieldcontainer",
						layout: "hbox",
						items: [
						{
							xtype: "textfield",
							name: 'payInnerList.payInMain',
							hidden:true
						},
						{
							xtype: "textfield",
							fieldLabel: "单位",
							width: 278,
							flex: 1,
							/*layout: 'column',*/
							value: '',
							//必填项
							name:'mainName',
							afterLabelTextTpl: required,
							allowBlank: false,
						}, {
							xtype: "button",
							icon: '../../common/shared/icons/fam/search.png',
							/************创建单位搜索框开始***********/
							listeners: {
								click: function() {
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
											items: [companyForm],
											//items: [searchFormdw],
											width: 200,
											split: true,
											//是否可缩小
											collapsible: true,
											floatable: false
										}, {
											region: 'center',
											items:[companyGrid],
											//items: [agriddw],
											width: 200,
											split: true,
											floatable: false,
											autoScroll: true
										}]
									});
									
									/********************创建内部单位搜索结束**************/
									companyGrid.addListener('itemdblclick',function(dataview, record, item, index, e) {
									if(record.get('coId')!=null){
										addForm.getForm().findField('payInnerList.payInMain').setValue(record.get('coId'));
									}
									if(record.get('coName')!=null){
										addForm.getForm().findField('mainName').setValue(record.get('coName'));
									}
									companyWin.hide();
								});
									companyWin.show();					
								}
							}
						}]

					}, {

						xtype: "fieldcontainer",
						layout: "hbox",
						items: [
						{
							xtype: "textfield",
							name: 'payInnerList.payInSale',
							hidden:true
						},
						{
							xtype: "textfield",
							fieldLabel: "销货单位",
							width: 278,
							flex: 0,
							//flex: 1,
							/*layout: 'column',*/
							value: '',
							//必填项
							afterLabelTextTpl: required,
							//pProductionunit
							name: 'salerName',
							allowBlank: false,
						}, {
							xtype: "button",
							icon: '../../common/shared/icons/fam/search.png',
							/************创建单位搜索框开始***********/
							listeners: {
								click: function() {

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
									//创建一个搜索表单

								var companyWin = Ext.create("Ext.window.Window", {
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
											items: [companyGrid],
											width: 200,
											split: true,
											floatable: false,
											autoScroll: true
										}]
									});
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
							name: 'payInnerList.payInBuy',
							hidden:true
						},{
						xtype: "textfield",
							fieldLabel: "购货单位",
							width: 278,
							flex: 0,
							/*layout: 'column',*/
							value: '',
							//必填项
							//pProductionunit
							name: 'buyerName',
							afterLabelTextTpl: required,
							allowBlank: false,
						}, {
							xtype: "button",
							icon: '../../common/shared/icons/fam/search.png',
							/************创建单位搜索框开始***********/
							listeners: {
								click: function() {
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
									//创建一个搜索表单
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
												xtype: 'textfield',
												fieldLabel: '客户编号',
												afterLabelTextTpl: required,
												name: 'customer.cId',
												width: 200
											}, {
												xtype: 'textfield',
												fieldLabel: '客户全称',
												afterLabelTextTpl: required,
												name: 'customer.cName',
												width: 400
											}, {
												xtype: 'textfield',
												fieldLabel: '客户简称',
												afterLabelTextTpl: required,
												name: 'customer.cShort',
												width: 400
											}, {
												xtype: 'textfield',
												fieldLabel: '联系人',
												name: 'customer.cLinkman',
												width: 200
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
														[1,'国企'],
														[2,'私企'],
														[3,'其他']
													]
												}),
												//pCoaltype
												name: 'customer.cCompanytype',
												hiddenName: 'customer.cCompanytype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
												emptyText: '-----请选择-----',
												//map中的键
												valueField: 'companyKey',
												//map中的值 
												displayField: 'companyValue',
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
													fields: [{
														name: 'typeKEY',
														type: 'Integer'
													}, {
														name: 'typeValue',
														type: 'String'
													}],
													data: [
														[1,'普通'],
														[2,'重要'],
														[3,'其他']
													]
												}),
												//pCoaltype
												name: 'customer.cType',
												hiddenName: 'customer.cType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
												emptyText: '-----请选择-----',
												//map中的键
												valueField: 'typeKEY',
												//map中的值 
												displayField: 'typeValue',
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
													fields: [{
														name: 'iKey',
														type: 'Integer'
													}, {
														name: 'iValue',
														type: 'String'
													}],
													data: [
														[1,'矿业'],
														[2,'科技'],
														[3,'生产']
													]
												}),
												//pCoaltype
												name: 'customer.cIid',
												hiddenName: 'customer.cIid', // 提交到后台的input的name ，对应下面store里的''id，必须要填
												emptyText: '-----请选择-----',
												//map中的键
												valueField: 'iKey',
												//map中的值 
												displayField: 'iValue',
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
													fields: [{
														name: 'departmentKey',
														type: 'Integer'
													}, {
														name: 'departmentValue',
														type: 'String'
													}],
													data: [
														[1,'大唐'],
														[2,'华电'],
														[3,'国电']
													]
												}),
												//pCoaltype
												name: 'customer.cDepartment',
												hiddenName: 'customer.cDepartment', // 提交到后台的input的name ，对应下面store里的''id，必须要填
												emptyText: '-----请选择-----',
												//map中的键
												valueField: 'departmentKey',
												//map中的值 
												displayField: 'departmentValue',
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
												xtype: 'textfield',
												fieldLabel: '税号',
												name:'customer.cTaxnumber',
												width:300
											}, {
												xtype: 'textfield',
												fieldLabel: '省份',
												name:'customer.cProvince',
												width:300
											}, {
												xtype: 'textfield',
												fieldLabel: '市县',
												name:'customer.cCityaddress',
												width:300
											},],

			},
			//////////////////////////////////////////////////////////////////////

		],
	});
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
	Ext.define('supplieraccount', {
		extend: 'Ext.data.Model',
		idProperty: 'supplieraccount',
		//定义类的属性
		fields: [
		{
			name: 'payInnerList.payInId',
			type: 'Integer'
		},
		{
			name: 'payInnerList.payInProductName',
			type: 'String'
		},
		{
			name: 'payInnerList.payInNoIncom',
			type: 'Long'
		},
		{
			name: 'payInnerList.payInPurchases',
			type: 'Long'
		},
		{
			name: 'payInnerList.payInPrice',
			type: 'Long'
		},
		{
			name: 'payInnerList.payPiId',
			type: 'Integer'
		},
		{
			name: 'payInnerList.payInFillNoIncom',
			type: 'Long'
		},
		{
			name: 'payInnerList.payInFillPurchases',
			type: 'Long'
		},
		{
			name: 'payInnerList.payInFillPrice',
			type: 'Long'
		},
		{
			name: 'payInnerList.payInMain',
			type: 'Long'
		},
		{
			name: 'payInnerList.payInBuy',
			type: 'Long'
		},
		{
			name: 'payInnerList.payInSale',
			type: 'Long'
		},
		{
			name: 'mainName',
			type: 'String'
		}, {
			name: 'salerName',
			type: 'String'
		}, {
			name: 'buyerName',
			type: 'String'
		},]
	});
	//初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
	Ext.tip.QuickTipManager.init();

	//想当于一个仓库 存储各种对像的
	var store = Ext.create('Ext.data.Store', {
		model: 'supplieraccount',
		remoteSort: true,
		//每页显示的数据
		pageSize: 10,
		proxy: {
			/*type: 'pagingmemory',
			//引入数据源
			data: myData,
			reader: {
				type: 'array'
			}*/
			type: "ajax",
			url: '/XJManager/account/payInnerList.do',
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
		title: '供应商结算单',
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
				id: '',
				text: '项目',
				columns: [
				{
					text: '编号',
					sortable: true,
					dataIndex: 'payInnerList.payInId',
					flex: 0,
					width: 75,
					hidden:true
				},
				{
					text: '预结算单编号',
					sortable: true,
					dataIndex: 'payInnerList.payPiId',
					flex: 0,
					width: 75,
					hidden:true
				},	
				{
					text: '商品名称',
					width: 75,
					sortable: true,
					dataIndex: 'payInnerList.payInProductName'
				}]
			}, {
				text: '实际销售',
				columns: [{
					text: '不含税收入（元）',
					width: 100,
					sortable: true,
					dataIndex: 'payInnerList.payInNoIncom'
				}, {
					text: '购销量（吨）',
					width: 100,
					sortable: true,
					//renderer: change,
					dataIndex: 'payInnerList.payInPurchases'
				}, {
					text: '不含税售价（元/吨）',
					width: 100,
					sortable: true,
					//renderer: pctChange,
					dataIndex: 'payInnerList.payInPrice'
				}]
			}, {
				text: '预结算',
				columns: [{
					text: '不含税收入（元）',
					width: 100,
					sortable: true,
					dataIndex: 'payInnerList.payInNoIncom'
				}, {
					text: '购销量（吨）',
					width: 100,
					sortable: true,
					//renderer: change,
					dataIndex: 'payInnerList.payInPurchases'
				}, {
					text: '不含税售价（元/吨）',
					width: 100,
					sortable: true,
					//renderer: pctChange,
					dataIndex: 'payInnerList.payInPrice'
				}]
			}, {
				text: '补结算',
				columns: [{
					text: '不含税收入（元）',
					width: 100,
					sortable: true,
					dataIndex: 'payInnerList.payInFillNoIncom'
				}, {
					text: '购销量（吨）',
					width: 100,
					sortable: true,
					//renderer: change,
					dataIndex: 'payInnerList.payInFillPurchases'
				}, {
					text: '不含税售价（元/吨）',
					width: 100,
					sortable: true,
					//renderer: pctChange,
					dataIndex: 'payInnerList.payInFillPrice'
				}]
			}, {
				text: '单位',
				columns: [
				{
					text: '单位',
					width: 75,
					sortable: true,
					dataIndex: 'mainName'
				}, {
					text: '购货单位',
					width: 75,
					sortable: true,
					//renderer: change,
					dataIndex: 'buyerName'
				}, {
					text: '销货单位',
					width: 75,
					sortable: true,
					//renderer: pctChange,
					dataIndex: 'salerName'
				}]
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
									var id = rec.get('payInnerList.payInId');
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
					tooltip: '',
					iconCls: 'add',
					listeners: {
						'click': function() {							
							addForm.form.reset();
							addForm.getForm().url = '/XJManager/account/addSupplierAccount.do';
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
							addForm.getForm().url = '/XJManager/account/updateSupplierAccount.do';
							grid.getSelectionModel().clearSelections();
							grid.getView().refresh();
						}

					}
				}, '-', {
					itemId: 'removeButton',
					text: '删除',
					tooltip: 'remove',
					iconCls: 'remove',
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
												var url = "/XJManager/account/deleteSupplierAccount.do";
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
					//disabled: true
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
