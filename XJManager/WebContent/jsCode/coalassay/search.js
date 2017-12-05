Ext.Loader.setConfig({enabled: true});

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

Ext.onReady(function(){
	var sm = Ext.create('Ext.selection.CheckboxModel');
	var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
	var requiredimportant = '<span style="color:red;font-weight:bold" data-qtip="Required">***</span>';
	//////////////筛选相关开始///////////////////////////////////////
	var formSearch = Ext.create('Ext.form.Panel', {
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
				xtype: 'datefield',
				fieldLabel: '采样时间（开始）',
				width: 360,
				name: 'yYear',
			},{
				xtype: 'datefield',
				fieldLabel: '采样时间（结束）',
				width: 360,
				name: 'yYear',
			},
			{
				xtype: 'textfield',
				fieldLabel: '煤样编号',
				width: 360,
				name: 'yYear',
			},
			{
				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: [{
						name: 'cpKey',
						type: 'Integer'
					}, {
						name: 'cpValue',
						type: 'String'
					}],
					data: [
						[0, 'x'],
						[1, 'y'],
						
					]
				}),
				name: 'station.sRailwaysbureau',
				hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				valueField: 'cpKey',
				displayField: 'cpValue',
				fieldLabel: '&nbsp&nbsp产品名称',
				width: 360,
				queryMode: 'local', //数据模式,local代表本地数据模式
				selectOnTab: false,
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}
			},
			{
			
				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: [{
						name: 'kbKey',
						type: 'Integer'
					}, {
						name: 'kbValue',
						type: 'String'
					}],
					data: [
						[0, 'x'],
						[1, 'y'],
						
					]
				}),
				name: 'station.sRailwaysbureau',
				hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				valueField: 'kbKey',
				displayField: 'kbValue',
				fieldLabel: '矿别',
				width: 360,
				queryMode: 'local', //数据模式,local代表本地数据模式
				selectOnTab: false,
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}
				
			},
			{
				xtype: 'textfield',
				fieldLabel: '&nbsp&nbsp批次',
				width: 360,
				name: 'yYear',
			},
			{
				
			
				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: [{
						name: 'cyKey',
						type: 'Integer'
					}, {
						name: 'cyValue',
						type: 'String'
					}],
					data: [
						[0, 'x'],
						[1, 'y'],
						
					]
				}),
				name: 'station.sRailwaysbureau',
				hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				valueField: 'cyKey',
				displayField: 'cyValue',
				fieldLabel: '采样地点',
				width: 360,
				queryMode: 'local', //数据模式,local代表本地数据模式
				selectOnTab: false,
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}
				
			
			},
			{
				xtype: 'textfield',
				fieldLabel: '&nbsp&nbsp收货单位',
				width: 360,
				name: 'yYear',
			},
			{
				xtype: 'textfield',
				fieldLabel: '采样人',
				width: 360,
				name: 'yYear',
			},
			{
				xtype: 'textfield',
				fieldLabel: '&nbsp&nbsp制样人',
				width: 360,
				name: 'yYear',
			},
			{
				xtype: 'textfield',
				fieldLabel: '填单人',
				width: 360,
				name: 'yYear',
			},{
				xtype: 'textfield',
				fieldLabel: '&nbsp&nbsp审核人',
				width: 360,
				name: 'yYear',
			},{
				xtype: 'textfield',
				fieldLabel: '取（送）单人',
				width: 360,
				name: 'yYear',
			}
	],
		}, ],
	});
	var winSearch = new Ext.Window({

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
	///////////////筛选相关结束//////////////////////////////////////////////////////
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [
		         {name: 'spId' ,type: 'string'},
		         {name: 'spSource' ,type: 'string'},
		         {name: 'spProduct' ,type: 'string'},
		         {name: 'spBatch' ,type: 'string'},
		         {name: 'spAddress' ,type: 'string'},
		         {name: 'spDepartment' ,type: 'string'},
		         {name: 'spClasses' ,type: 'byte'},
		         {name: 'spMain' ,type: 'string'},
		         {name: 'spReciever' ,type: 'string'},
		         {name: 'spCollecter' ,type: 'string'},
		         {name: 'spProducer' ,type: 'string'},
		         {name: 'spCstart',type:'date', dateFormat:'n/j h:i'},
		         {name: 'spCend',type:'date', dateFormat:'n/j h:i'},
		         {name: 'spPstart' ,type:'date', dateFormat:'n/j h:i'},
		         {name: 'spPend' ,type:'date', dateFormat:'n/j h:i'},
		         {name: 'spFlag' ,type:'byte'},
		         {name: 'spState' ,type:'byte'}
		         ]        
	});
    //定义数据源将被引入到对应的列中
    var myData = [
        ['xxx','xxx','xxx','xxx','xxx','xxx',1,'xxx','xxx','xxx','xxx','9/1 12:00','9/1 12:00','9/1 12:00','9/1 12:00',1,2]
      
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
        title:'查询煤样化验单 ',
        //引入仓库
        store: store,
        //引入选择框
        selModel: sm,
        //定义列
        columns: [
            {
                text: '煤样编号',
                sortable: true,
                //与定义的类中的属性匹配
                dataIndex: 'spId',
                flex: 0,
                width: 75,
            },
            {
            	
            	text: '矿别',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spSource',
            	flex: 0,
            	width: 75,
            },
            {
            	
            	text: '产品名称',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spProduct',
            	flex: 0,
            	width: 75,
            },
            {
            	
            	text: '批次',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spBatch',
            	flex: 0,
            	width: 75,
            },
            {
            	
            	text: '采样地',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spAddress',
            	flex: 0,
            	width: 75,
            },
            {
            	
            	text: '生产单位',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spDepartment',
            	flex: 0,
            	width: 75,
            },
            {
            	
            	text: '班次',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spClasses',
            	flex: 0,
            	width: 75,
            },
            {
            	
            	text: '主采煤层',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spMain',
            	flex: 0,
            	width: 75,
            },
            {
            	
            	text: '收货单位',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spReciever',
            	flex: 0,
            	width: 75,
            },
            
            {
            	
            	text: '采样开始时间',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spCstart',
                renderer: Ext.util.Format.dateRenderer('m/d/Y'),
            	flex: 0,
            	width: 75,
            },
            {
            	
            	text: '采样结束时间',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spCend',
            	renderer: Ext.util.Format.dateRenderer('m/d/Y'),
            	flex: 0,
            	width: 75,
            },
            {
            	
            	text: '采样人',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spCollecter',
            	flex: 0,
            	width: 75,
            },
            {
            	
            	text: '制样人',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spProducer',
            	flex: 0,
            	width: 75,
            },
            {
            	
            	text: '制样接样时间',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spPstart',
            	renderer: Ext.util.Format.dateRenderer('m/d/Y'),
            	flex: 0,
            	width: 75,
            },
            {
            	
            	text: '制样结束时间',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spPend',
            	renderer: Ext.util.Format.dateRenderer('m/d/Y'),
            	flex: 0,
            	width: 75,
            },
            {
            	
            	text: '煤样标记',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spFlag',
            	flex: 0,
            	width: 75,
            },
            {
            	
            	text: '状态',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spState',
            	flex: 0,
            	width: 75,
            },
            {
            	//定义每列数据删除按钮
            		text: '快速删除',
                    xtype: 'actioncolumn',
                    title:'快速删除',
                    width:75,
                    sortable: false,
                    items: [{
                        icon: '../../common/shared/icons/fam/delete.gif',
                        tooltip: 'Delete Plant',
                        handler: function(grid, rowIndex, colIndex) {
         					Ext.MessageBox.confirm(   
         					 "请确认"  
         					  ,"确定删除吗？"  
         					  ,function( button,text ){  
         						 if( button == 'yes'){  
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
                text:'筛选',
                iconCls:'search',
                listeners: {
						click: function() {
							formSearch.form.reset();
							winSearch.add(formSearch);
							winSearch.show();
						}
					}
            }, '-', {
                text:'详细信息',
                tooltip:'detailed',
                iconCls:'detailed',
                listeners:{
                	
							click: function() {
								var win;
								//详细信息主面板
								var searchForm1 = Ext.create('Ext.form.Panel', {
									id: 'detailedForm',
									region: 'west',
									plain: true,
									border: false,
									bodyPadding: false,
									width: 1000,
									layout: 'form',
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
													fieldLabel: '煤样编号',
													name: 'customer.cId',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '矿别',
													name: 'customer.cType',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '产品名称',
													name: 'customer.cIselectricity',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '批次',
													name: 'customer.cName',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '吨数',
													name: 'customer.cShort',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '车数',
													name: 'customer.cCompanytype',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '采样地',
													name: 'customer.cIid',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '生产单位',
													name: 'customer.cScope',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '班次',
													name: 'customer.cDepartment',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '主采煤层',
													name: 'customer.cLegal',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '含矸率（%）',
													name: 'customer.cConsignor',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '收货单位',
													name: 'customer.cBank',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '采样开始时间',
													name: 'customer.cAccount',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '采样结束时间',
													name: 'customer.cRegisteredcapital',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '采样人',
													name: 'customer.cCredit',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '制样接样时间',
													name: 'customer.cLimit',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '制样结束时间',
													readOnly: true,
													name: 'customer.cTaxnumber',

													width: 300

												},
												{
													xtype: 'displayfield',
													fieldLabel: '制样人',
													value: '',
													readOnly: true,
													name: 'customer.cCountry',
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '填化验单',
													readOnly: true,
													name: 'provinceName',
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '填单人',
													readOnly: true,
													name: 'customer.cCityaddress',
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '审核时间',
													value: '测试',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '审核人',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '取送化验单时间',
													readOnly: true,
													name: 'customer.cSid',
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '取送单人',
													value: '测试',
													readOnly: true,
													name: 'customer.cFax',
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '制定人',
													readOnly: true,
													name: 'customer.cHomepage',
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '制定日期',
													readOnly: true,
													name: 'customer.cEmail',
													width: 300
												},
												{
													xtype: 'displayfield',
													fieldLabel: '状态',
													name: 'customer.cQuality',
													readOnly: true,
													width: 300
												},
												{
													xtype: 'textarea',
													fieldLabel: '备注',
													disabled: true,
													name: 'customer.cRemark',
													width: 900
												}
											],
										},
										//////////////////////////////////////////////////////////////////////
									],
								});
								var record = grid.getSelectionModel().getSelection();
								if(record == undefined || record == '') {
									Ext.Msg.alert('信息', '请选择一条数据');
									return;
								}
								if(record.length >= 2) {
									Ext.Msg.alert('信息', '只可以选择一条数据');
									return;
								}
								searchForm1.getForm().loadRecord(record[0]);
								grid.getSelectionModel().clearSelections();
								grid.getView().refresh();
								if(record[0].get('customer.cType') == 1) {
									searchForm1.getForm().findField('customer.cType').setValue('重点客户');
								} else if(record[0].get('customer.cType') == 2) {
									searchForm1.getForm().findField('customer.cType').setValue('一般客户');
								}

								if(record[0].get('customer.cIselectricity') == 1) {
									searchForm1.getForm().findField('customer.cIselectricity').setValue('是');
								} else if(record[0].get('customer.cIselectricity') == 2) {
									searchForm1.getForm().findField('customer.cIselectricity').setValue('否');
								}

								if(record[0].get('customer.cCompanytype') == 1) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue("股份制有限公司");
								} else if(record[0].get('customer.cCompanytype') == 2) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue('国有');
								} else if(record[0].get('customer.cCompanytype') == 3) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue("国有股份制");
								} else if(record[0].get('customer.cCompanytype') == 4) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue("合资公司");
								} else if(record[0].get('customer.cCompanytype') == 5) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue("集体");
								} else if(record[0].get('customer.cCompanytype') == 6) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue("民营");
								} else if(record[0].get('customer.cCompanytype') == 7) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue("私营");
								} else if(record[0].get('customer.cCompanytype') == 8) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue("有限公司");
								} else if(record[0].get('customer.cCompanytype') == 9) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue("有限责任公司");
								} else if(record[0].get('customer.cCompanytype') == 10) {
									searchForm1.getForm().findField('customer.cCompanytype').setValue("中外合资公司");
								}

								if(record[0].get('customer.cIid') == 1) {
									searchForm1.getForm().findField('customer.cIid').setValue("电力");
								} else if(record[0].get('customer.cIid') == 2) {
									searchForm1.getForm().findField('customer.cIid').setValue("化工");
								} else if(record[0].get('customer.cIid') == 3) {
									searchForm1.getForm().findField('customer.cIid').setValue("建材");
								} else if(record[0].get('customer.cIid') == 4) {
									searchForm1.getForm().findField('customer.cIid').setValue("商业");
								} else if(record[0].get('customer.cIid') == 5) {
									searchForm1.getForm().findField('customer.cIid').setValue("石化");
								} else if(record[0].get('customer.cIid') == 6) {
									searchForm1.getForm().findField('customer.cIid').setValue("冶金");
								} else if(record[0].get('customer.cIid') == 7) {
									searchForm1.getForm().findField('customer.cIid').setValue("其他");
								}

								if(record[0].get('customer.cDepartment') == 1) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("大唐");
								} else if(record[0].get('customer.cDepartment') == 2) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("国电");
								} else if(record[0].get('customer.cDepartment') == 3) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("国资委");
								} else if(record[0].get('customer.cDepartment') == 4) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("华电");
								} else if(record[0].get('customer.cDepartment') == 5) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("华能");
								} else if(record[0].get('customer.cDepartment') == 6) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("化工部");
								} else if(record[0].get('customer.cDepartment') == 7) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("省电燃");
								} else if(record[0].get('customer.cDepartment') == 8) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("铁道部");
								} else if(record[0].get('customer.cDepartment') == 9) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("皖能");
								} else if(record[0].get('customer.cDepartment') == 10) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("冶金部");
								} else if(record[0].get('customer.cDepartment') == 11) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("中电投");
								} else if(record[0].get('customer.cDepartment') == 12) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("中石化");
								} else if(record[0].get('customer.cDepartment') == 13) {
									searchForm1.getForm().findField('customer.cDepartment').setValue("其他");
								}

								if(record[0].get('customer.cState') == 1) {
									searchForm1.getForm().findField('customer.cState').setValue("使用");
								} else if(record[0].get('customer.cState') == 2) {
									searchForm1.getForm().findField('customer.cState').setValue("停用");
								}

								if(record[0].get('customer.cCredit') == 1) {
									searchForm1.getForm().findField('customer.cCredit').setValue('A');
								} else if(record[0].get('customer.cCredit') == 2) {
									searchForm1.getForm().findField('customer.cCredit').setValue("AA");
								} else if(record[0].get('customer.cCredit') == 3) {
									searchForm1.getForm().findField('customer.cCredit').setValue("AAA");
								} else if(record[0].get('customer.cCredit') == 4) {
									searchForm1.getForm().findField('customer.cCredit').setValue("BBB");
								} else if(record[0].get('customer.cCredit') == 5) {
									searchForm1.getForm().findField('customer.cCredit').setValue("BB");
								} else if(record[0].get('customer.cCredit') == 6) {
									searchForm1.getForm().findField('customer.cCredit').setValue("B");
								}

								if(record[0].get('customer.cCountry') == 1) {
									searchForm1.getForm().findField('customer.cCountry').setValue('中国');
								} else if(record[0].get('customer.cCountry') == 2) {
									searchForm1.getForm().findField('customer.cCountry').setValue("其他");
								}

								if(record[0].get('customer.cIdentifying') == 1) {
									searchForm1.getForm().findField('customer.cCountry').setValue("客户");
								} else if(record[0].get('customer.cIdentifying') == 2) {
									searchForm1.getForm().findField('customer.cCountry').setValue("网点");
								} else if(record[0].get('customer.cIdentifying') == 3) {
									searchForm1.getForm().findField('customer.cCountry').setValue("收货单位");
								}
								customerId = searchForm1.getForm().findField('customer.cId').getValue();
								store.getProxy().url = '/XJManager/base/customer/linkmanList.do?customerId=' + customerId;
								store.load();
								store.getProxy().url = '/XJManager/base/customer/bankList.do?customerId=' + customerId;
								store.load();
								store.getProxy().url = '/XJManager/base/customer/reciveList.do?customerId=' + customerId;
								store.load();
								//客户联系人表
								var gridkhlxr = Ext.create('Ext.grid.Panel', {
									//grid 的标题
									//引入仓库
									store: store,
									selModel: Ext.create('Ext.selection.CheckboxModel'),
									columns: [{
											dataIndex: 'lId',
											hidden: true
										}, {
											text: '煤质项目',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: 'lName',
											flex: 0,
											width: 75,
										},
										{
											text: '化验接样时间',
											sortable: true,
											dataIndex: 'lDuty',
											width: 75,
										},
										{
											text: '化验结束时间',
											sortable: true,
											dataIndex: 'lPhone',
											width: 75,
										},
										{
											text: '化验结果',
											sortable: true,
											dataIndex: 'lFax',
											width: 75,
										},
										{
											text: '化验员',
											sortable: true,
											dataIndex: 'lTelephone',
											width: 75,
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
															var customerId = searchForm1.getForm().findField('customer.cId').getValue();
															addFormkhlxrq.form.reset();
															addFormkhlxrq.getForm().findField('lCid').setValue(customerId);
															addFormkhlxrq.getForm().url = '/XJManager/base/customer/addLinkman.do';
															addWinkhlxrq.add(addFormkhlxrq);
															addWinkhlxrq.show();
														}
													}

												},
												{
													text: '修改',
													tooltip: '',
													iconCls: 'edit',
													listeners: {
														click: function() {
															var record = gridkhlxr.getSelectionModel().getSelection();
															if(record == undefined || record == '') {
																Ext.Msg.alert('信息', '请选择一条数据');
																return;
															}
															if(record.length >= 2) {
																Ext.Msg.alert('信息', '只可以选择一条数据');
																return;
															}
															addWinkhlxrq.add(addFormkhlxrq);
															addWinkhlxrq.show();
															addFormkhlxrq.getForm().loadRecord(record[0]);
															addFormkhlxrq.getForm().url = '/XJManager/base/customer/updateLinkman.do';
															gridkhlxr.getSelectionModel().clearSelections();
															gridkhlxr.getView().refresh();
														}
													}
												},
												{

													text: '删除',
													tooltip: '',
													iconCls: 'delete',

													listeners: {
														'click': function() {
															var record = gridkhlxr.getSelectionModel().getSelection();
															if(record == undefined || record == '') {
																Ext.Msg.alert("错误", "请选择至少一条数据");
																return;
															} else {
																Ext.MessageBox.confirm("请确认", "确定删除吗？",
																	function(button, text) {
																		if(button == 'yes') {
																			var url = "/XJManager/base/customer/deleteLinkman.do";
																			var param = "";
																			for(var i = 0; i < record.length; i++) {
																				param = param + record[i].get("lId") + "-";
																			}
																			Ext.Ajax.request({
																				url: url,
																				params: {
																					'ids': param
																				},
																				method: 'POST',
																				success: function(response, options) {

																					Ext.MessageBox.alert('成功', '删除成功');
																				},
																				failure: function(response, options) {
																					Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
																				}
																			});
																			store.reload();
																		}
																	});
															}
														}
													}
												}
											]
										}
									],

									//table边框的设定
									stripeRows: true,
									height: '100%',
									width: 1500,
									frame: false,
									autoScroll: true,
									bbar: Ext.create('Ext.PagingToolbar', {
										pageSize: 5,
										store: store,
										displayInfo: true,
										plugins: Ext.create('Ext.ux.ProgressBarPager', {})
									}),

								});
								//客户开户行表
								var gridBank = Ext.create('Ext.grid.Panel', {
									//grid 的标题
									selModel: Ext.create('Ext.selection.CheckboxModel'),
									//引入仓库
									store: store,
									//引入选择框
									//定义列
									columns: [{
											dataIndex: 'bId',
											hidden: true
										},
										{
											dataIndex: 'bCid',
											hidden: true
										},
										{
											text: '银行名称',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: 'bName',
											flex: 0,
											width: 350,
										},
										{
											text: '账号',
											sortable: true,
											dataIndex: 'bAccount',
											width: 350,
										},
										{
											text: '备注',
											sortable: true,
											dataIndex: 'bRemark',
											width: 350,
										},

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
															var customerId = searchForm1.getForm().findField('customer.cId').getValue();
															addFormBank.form.reset();
															addFormBank.getForm().findField('bCid').setValue(customerId);
															addFormBank.getForm().url = '/XJManager/base/customer/addBank.do';
															addWinBank.add(addFormBank);
															addWinBank.show();
														}

													}

												},
												{
													text: '修改',
													tooltip: '',
													iconCls: 'edit',
													listeners: {
														click: function() {
															var record = gridBank.getSelectionModel().getSelection();
															if(record == undefined || record == '') {
																Ext.Msg.alert('信息', '请选择一条数据');
																return;
															}
															if(record.length >= 2) {
																Ext.Msg.alert('信息', '只可以选择一条数据');
																return;
															}
															addWinBank.add(addFormBank);
															addWinBank.show();
															addFormBank.getForm().loadRecord(record[0]);
															addFormBank.getForm().url = '/XJManager/base/customer/updateBank.do';
															gridBank.getSelectionModel().clearSelections();
															gridBank.getView().refresh();
														}
													}
												},
												{

													text: '删除',
													tooltip: '',
													iconCls: 'delete',

													listeners: {
														'click': function() {
															var record = gridBank.getSelectionModel().getSelection();
															if(record == undefined || record == '') {
																Ext.Msg.alert("错误", "请选择至少一条数据");
																return;
															} else {
																Ext.MessageBox.confirm("请确认", "确定删除吗？",
																	function(button, text) {
																		if(button == 'yes') {
																			var url = "/XJManager/base/customer/deleteBank.do";
																			var param = "";
																			for(var i = 0; i < record.length; i++) {
																				param = param + record[i].get("bId") + "-";
																			}
																			Ext.Ajax.request({
																				url: url,
																				params: {
																					'ids': param
																				},
																				method: 'POST',
																				success: function(response, options) {

																					Ext.MessageBox.alert('成功', '删除成功');
																				},
																				failure: function(response, options) {
																					Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
																				}
																			});
																			store.reload();
																		}
																	});
															}
														}
													}

												}

											]
										}
									],

									//table边框的设定
									stripeRows: true,
									height: '100%',
									width: 1500,
									frame: false,
									autoScroll: true,

									bbar: Ext.create('Ext.PagingToolbar', {
										pageSize: 5,
										store: store,
										displayInfo: true,
										plugins: Ext.create('Ext.ux.ProgressBarPager', {})
									}),

								});
								///////////////////////////////////////////////////////////
								var gridkhdz = Ext.create('Ext.grid.Panel', {
									//引入仓库
									store: null,
									//引入选择框
									selModel: Ext.create('Ext.selection.CheckboxModel'),
									//定义列
									columns: [{
											text: '车站编号',
											sortable: true,
											//与定义的类中的属性匹配
											//dataIndex: 'eId',
											dataIndex: 'cName',
											flex: 0,
											width: 100,
										},
										{
											text: '车站名称',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: 'eCarnum',
											flex: 0,
											width: 100,
										},
										{
											text: '铁路局',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: '承运人',
											flex: 0,
											width: 100,

										},
										{
											text: '是否默认到站',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: '净重',
											flex: 0,
											width: 100,
										},
										{
											text: '备注',
											sortable: true,
											dataIndex: '累计',
											flex: 0,
											width: 110,
										},
									],
									dockedItems: [{
										xtype: 'toolbar',
										items: [{
												text: '新增',
												tooltip: 'add',
												iconCls: 'add',
												listeners: {
													click: function() {
														//addFormgm.form.reset();
														stationWin.show();
													}

												}

											},
											{
												text: '删除',
												tooltip: '',
												iconCls: 'remove',
											},
										]
									}],
									stripeRows: true,
									height: '100%',
									width: 900,
									frame: false,
									bbar: Ext.create('Ext.PagingToolbar', {
										pageSize: 5,
										store: store,
										displayInfo: true,
										plugins: Ext.create('Ext.ux.ProgressBarPager', {})
									}),

								});
								Ext.History.init();
								////////////////////////////////////////////////////////////////  
								var tab = Ext.create('Ext.TabPanel', {
									id: 'main-tabs',
									height: 300,
									width: 950,
									activeTab: 0,
									autoScroll: true,
									defaults: {
										padding: 10
									},

									items: [{
											xtype: 'tabpanel',
											title: '化验明细',
											activeTab: 0,
											padding: 5,
											border: true,
											plain: true,
											autoScroll: true,
											defaults: {
												padding: 10
											},
											items: [{
												title: '化验',
												autoScroll: true,
												items: [gridkhlxr],
											}],
											listeners: {
												tabchange: onTabChange
											}
										},
										{
											xtype: 'tabpanel',
											title: '收货单位信息',
											activeTab: 0,
											padding: 5,
											border: true,
											plain: true,
											defaults: {
												padding: 10
											},
											items: [{
												title: '收货单位',
												items: [gridBank],
											}],
											listeners: {
												tabchange: onTabChange
											}
										},
										{
											xtype: 'tabpanel',
											title: '车皮信息',
											activeTab: 0,
											padding: 5,
											border: true,
											plain: true,
											defaults: {
												padding: 10
											},
											items: [{
												title: '车皮',
												items: [gridkhdz],
											}],
											listeners: {
												tabchange: onTabChange
											}

										},
										
									],
									listeners: {
										tabchange: onTabChange,
										afterrender: onAfterRender
									}
								});
								//////////////////////////////////////////////////////////////      
								var tokenDelimiter = ':';

								function onTabChange(tabPanel, tab) {
									var tabs = [],
										ownerCt = tabPanel.ownerCt,
										oldToken,
										newToken;
									tabs.push(tab.id);
									tabs.push(tabPanel.id);
									while(ownerCt && ownerCt.is('tabpanel')) {
										tabs.push(ownerCt.id);
										ownerCt = ownerCt.ownerCt;
									}
									newToken = tabs.reverse().join(tokenDelimiter);
									oldToken = Ext.History.getToken();
									if(oldToken === null || oldToken.search(newToken) === -1) {
										Ext.History.add(newToken);
									}
								}

								function onAfterRender() {
									Ext.History.on('change',
										function(token) {
											var parts, tabPanel, length, i;
											if(token) {
												parts = token.split(tokenDelimiter);
												length = parts.length;
												for(i = 0; i < length - 1; i++) {
													Ext.getCmp(parts[i]).setActiveTab(Ext.getCmp(parts[i + 1]));
												}
											}
										});

									var activeTab1 = Ext.getCmp('main-tabs').getActiveTab(),
										activeTab2 = activeTab1.getActiveTab();

									onTabChange(activeTab1, activeTab2);
								}
								var i = 1;
								win = Ext.create("Ext.window.Window", {
									closable: false,
									closeAction: 'hide',
									width: 1000,
									height: 500,
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
											id: 'xiangqing',
											region: 'north',
											title: '详细信息',
											items: [searchForm1],
											height: 130,
											dockedItems: [{
												xtype: 'toolbar',
												items: [{
														text: '更多信息',
														tooltip: '',
														iconCls: 'detailed',
														listeners: {
															'click': function() {
																if(i == 1) {
																	Ext.getCmp('xiangqing').setHeight(330);
																	i++;
																} else {
																	Ext.getCmp('xiangqing').setHeight(130);
																	i = 1;
																}

															}
														}
													},
													{
														text: '概要信息',
														iconCls: 'detailed',
														handler: function() {
															win.removeAll();
															win.hide();
														}
													}
												]
											}],

										},
										{
											region: 'north',
											items: [tab],
											width: 200,
											split: true,
											floatable: false,
											autoScroll: true
										}
									]
								}).show();
							}

						
                }
            }
            ]
       }],
       
       //table边框的设定
        stripeRows: true,
        height:320,
        width:'auto',
        frame:false,
        
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
