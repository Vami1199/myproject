Ext.Loader.setConfig({
    enabled: true
});

//设置路径
Ext.Loader.setPath('Ext.ux', '../../common/ux/');

//定义需要的插件
Ext.require(['Ext.data.*', 'Ext.grid.*', 'Ext.util.*', 'Ext.tip.QuickTipManager', 'Ext.ux.data.PagingMemoryProxy', 'Ext.ux.ProgressBarPager', 'Ext.ux.FieldReplicator', 'Ext.selection.CheckboxModel', 'Ext.ux.RowExpander', 'Ext.selection.CellModel', 'Ext.ux.CheckColumn', 'Ext.state.*', 'Ext.form.*', 'Ext.window.*', 'Ext.tab.*', 'Ext.toolbar.*', 'Ext.layout.*', ]);

Ext.onReady(function() {
	
/////////////////////////////////////////////////
	var addFormgou = Ext.create('Ext.form.Panel', {
		plain: true,
		border: 0,
		bodyPadding: 5,
		width: 500,
		//表单发送的到的action路径
		/*url: '/base/productList.do',*/
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
				flex: 1,
				fieldLabel: '构成产品编号',
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
						Ext.define(
								'addcompanygoucheng', {
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
						var addStoregoucheng = Ext.create('Ext.data.Store', {
									model: 'addcompanygoucheng',
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
						var agridgoucheng = Ext.create('Ext.grid.Panel', {
									id: 'agridgoucheng',
									region: 'east',
									//grid 的标题
									title: '单位列表',
									//引入仓库
									store: addStoregoucheng,
									loadMask: true,
									listeners: {
										itemdblclick: function(dataview,record,item,index,e) {
											proForm.getForm().loadRecord(record);
											newWin.hide();
										}
									},
									//定义列
									columns: [{
										text: '产品编号',
										sortable: true,
										//与定义的类中的属性匹配
										dataIndex: 'coId',
										width: 75,
									}, {
										text: '产品名称',
										sortable: true,
										dataIndex: 'coShort',
										width: 75
									}, {
										text: '煤种',
										sortable: true,
										dataIndex: 'coName',
										width: 75
									}, {
										text: '品种',
										sortable: true,
										dataIndex: 'coPhone',
										width: 75
									}, {
										text: '计量单位',
										sortable: true,
										dataIndex: 'coPostcode',
										width: 75
									}, {
										text: '生产单位',
										sortable: true,
										dataIndex: 'coFax',
										width: 75
									}, {
										text: '适用范围',
										sortable: true,
										dataIndex: 'coLeader',
										width: 75
									}, {
										text: '是否可用',
										sortable: true,
										dataIndex: 'coAddress',
										width: 75
									}],
									stripeRows: true,
									height: 320,
									width: 1200,
									frame: false,
								});
						//创建一个搜索表单
						var searchFormgoucheng = Ext.create('Ext.form.Panel', {
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
										fieldLabel: '产品编号',
										name: 'coId'
									}, {
										id: '',
										xtype: 'textfield',
										fieldLabel: '产品名称',
										name: 'coId'
									}, {
										xtype: 'combo',
										store: Ext.create('Ext.data.ArrayStore', {
											fields: ['coal'],
											data: [
												['烟煤'],
												['烟煤'],
												['烟煤']
											]
										}),
										//pCoaltype
										name: 'sourceName',
										hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
										//map中的键
										valueField: '',
										//map中的值 
										displayField: 'coal',
										//选中下拉框后再点击面板就会多出一行,不知道有卵子用
										/*plugins: [ Ext.ux.FieldReplicator ],*/
										fieldLabel: '煤种',
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
												['烟煤'],
												['烟煤'],
												['烟煤']
											]
										}),
										//pCoaltype
										name: '',
										hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
										 
										//map中的键
										valueField: '',
										//map中的值 
										displayField: 'coal',
										//选中下拉框后再点击面板就会多出一行,不知道有卵子用
										/*plugins: [ Ext.ux.FieldReplicator ],*/
										fieldLabel: '品种',
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
												['烟煤'],
												['烟煤'],
												['烟煤']
											]
										}),
										//pCoaltype
										name: '',
										hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
										 
										//map中的键
										valueField: '',
										//map中的值 
										displayField: 'coal',
										//选中下拉框后再点击面板就会多出一行,不知道有卵子用
										/*plugins: [ Ext.ux.FieldReplicator ],*/
										fieldLabel: '适用范围',
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
												['烟煤'],
												['烟煤'],
												['烟煤']
											]
										}),
										//pCoaltype
										name: '',
										hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
										 
										//map中的键
										valueField: '',
										//map中的值 
										displayField: 'coal',
										//选中下拉框后再点击面板就会多出一行,不知道有卵子用
										/*plugins: [ Ext.ux.FieldReplicator ],*/
										fieldLabel: '是否可用',
										queryMode: 'local', //数据模式,local代表本地数据模式
										//tab键是否可以选择当前突出项
										selectOnTab: false,
										/****下拉框不可编辑*****/
										typeAhead: false,
										editable: false,
										onReplicate: function() {
											this.getStore().clearFilter();
										}

									}],

									buttons: [{
										text: "搜索",
										iconCls: "btn-save",
										handler: function() {
											var url = '/XJManager/base/companyList.do?1=1';
											var id = Ext.getCmp('id').getValue();
											var short = Ext.getCmp('short').getValue();
											var phone = Ext.getCmp('phone').getValue();
											var fax = Ext.getCmp('fax').getValue();
											var postcode = Ext.getCmp('postcode').getValue();
											var leader = Ext.getCmp('leader').getValue();
											if(id != '') {
												url = url +'&coId='+id;
											}
											if(short != '') {
												url = url +'&coShort=' + short;
											}
											if(phone != '') {
												phone = url + '&coPhone=' + phone;
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

											addStoregoucheng.getProxy().url = url;
											addStoregoucheng.load();
										}
									}, {
										text: "重置",
										iconCls: "reset",
										handler: function() {
											this.up('form').getForm().reset();
										}
									}]
								});

						var newWin = Ext.create("Ext.window.Window", {
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
										items: [searchFormgoucheng],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [agridgoucheng],
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

		}, {
			xtype: 'textfield',
			fieldLabel: '构成产品名称',
			name: 'sourceName', // name只是改下拉的名称   
			triggerAction: 'all', // 显示所有下列数据，一定要设置属性triggerAction为all
			allowBlank: false,
			tooltip: '填入产品编号'
		}, {
			xtype: 'textfield',
			fieldLabel: '煤种',
			name: 'pName',
			allowBlank: false,
			tooltip: '填入产品编号'
		}, {
			xtype: 'textfield',
			fieldLabel: '品种',
			name: 'pMeasurementunit',
			allowBlank: false,
			tooltip: '填入产品编号'
		}, {
			xtype: 'textfield',
			fieldLabel: '生产单位',
			name: 'pMeasurementunit',
			allowBlank: false,
			tooltip: '填入产品编号'
		}, {
			xtype: 'textarea',
			fieldLabel: '备注',
			hideLabel: false,
			name: 'remark',
			style: 'margin:0', // Remove default margin
			flex: 1 // Take up all *remaining* vertical space
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
	var Wingc = Ext.create("Ext.window.Window", {
				/*title:'搜索', */
				closable: true,
				closeAction: 'hide',
				width: 200,
				minWidth: 550,
				height: 600,
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
					xtype: 'textfield',
					fieldLabel: '参数名',
					value: '全水分Mt(%)',
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp&nbsp参数值',
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp&nbsp备注',
				}, ],

			}, {
				layout: 'column',
				frame: true,
				items: [{
					xtype: 'textfield',
					fieldLabel: '参数名',
					value: '灰分Ad(%)',
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp&nbsp参数值',
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp&nbsp备注',
				}, ],
			}, {
				layout: 'column',
				frame: true,
				items: [{
					xtype: 'textfield',
					fieldLabel: '参数名',
					value: '挥发份Vdaf(%)',
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp&nbsp参数值',
				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp&nbsp备注',
				}, ],
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
			width: 900,
			minWidth: 550,
			height: 600,
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
				title: '批次新增',
				items: [addFormpici],
				width: 200,
				split: true,
				//是否可缩小
				floatable: false,
			}]
		});
	/***********************产品详细信息内面板结束**************************/
    // register model
    //相当于定义了一个company 类
    Ext.define('BProducts', {
        extend: 'Ext.data.Model',
        idProperty: '',
        //定义类的属性
        fields: [{
            name: 'products.pId',
            type: 'Integer'
        },
        {
            name: 'coName',
            type: 'string'
        },
        {
            name: 'ctName',
            type: 'string'
        },
        {
            name: 'products.pCoaltype',
            type: 'Integer'
        },
        {
            name: 'products.pName',
            type: 'string'
        },
        {
            name: 'products.pVarieties',
            type: 'Integer'
        },
        {
            name: 'varieties',
            type: 'string'
        },
        {
            name: 'products.pMeasurementunit',
            type: 'string'
        },
        {
            name: 'products.pProductionunit',
            type: 'Integer '
        },
        {
            name: 'products.pApplicationrange',
            type: 'Integer'
        },
        {
            name: 'applicationrange',
            type: 'string'
        },
        {
            name: 'products.pAvailability',
            type: 'Integer'
        },
        ]

    });
    //初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
    Ext.tip.QuickTipManager.init();
    /*debugger;*/
    //想当于一个仓库 存储各种对像的
    var proStore = Ext.create('Ext.data.Store', {
        model: 'BProducts',
        remoteSort: true,
        getMethod: function() {
            return 'POST';
        },
        pageSize: 5,
        proxy: {
            type: "ajax",
            url: '/XJManager/base/productList.do',
            reader: {
                type: "json",
                root: "queryList",
                totalProperty: 'totalCount'
            }
        },
    });
    var selModel = Ext.create('Ext.selection.CheckboxModel');
    /*********************创建筛选框开始*************************/
	 var searchFormx =  Ext.create('Ext.form.Panel', {
    	     region:'west',
             plain: true,
             border: 0,
             bodyPadding: 5,
             url:'',
             width:400,
             fieldDefaults: {
                 labelWidth: 70,
                 anchor: '100%'
             },
             //布局,vbox是竖排,hbox是横排
             layout: {
                 type: 'vbox',
                 align: 'stretch' // Child items are stretched to full width
             },
          
             items: [
                 {
	          	   xtype: 'textfield',
	          	   id:'pid',
	          	   fieldLabel: '产品编号',
	          	   name:'products.pId'
             	 },
                 {
              	   xtype: 'textfield',
              	   fieldLabel: '产品名称',
              	   name: 'products.pName',
              	   id:'pname'
              		  
                 },
                 {
                     xtype: 'combo',
                     store: Ext.create('Ext.data.ArrayStore', {
                    	
                         fields: [{
                             name: 'ctId',
                             type: 'string'
                         },
                         {
                             name: 'ctName',
                             type: 'string'
                         }],
                         root: '',
                         autoload: true,
                         proxy: {
                             type: "ajax",
                             url: '/XJManager/base/coalTypeList.do',
	                             reader: {
	                                 type: "json",
	                                 root: "coName"
	                             }
	                         }
	                     }),
	                     id:'ctStore',
	                     triggerAction: 'all',
	                     name: 'ctName',
	                     hiddenName: 'ctId',
	                     valueField: 'ctId',
	                     displayField: 'ctName',
	                     fieldLabel: '煤种',
	                     selectOnTab: false,
	                     editable: false,
	                     onReplicate: function() {
	                         this.getStore().clearFilter();
	                     },
	                 },
	                 
	                 
                 {
                     xtype: 'combo',
                     id:'vid',
                     store: Ext.create('Ext.data.ArrayStore', {
                         fields: [{
                             name: 'pVarieties',
                             type: 'Integer'
                         },
                         {
                             name: 'Varieties',
                             type: 'string'
                         }],
                         data: [[1, '动力煤'],],
                         
                     }),
                     name: 'products.pVarieties',
                     hiddenName: 'products.pVarieties',
                     
                     valueField: 'pVarieties',
                     displayField: 'Varieties',
                     fieldLabel: '品种',
                     selectOnTab: false,
                     editable: false,
                     queryMode: 'local',
                     onReplicate: function() {
                         this.getStore().clearFilter();
                     }
	                 
                 },
                 {
                     xtype: 'combo',
                     store: Ext.create('Ext.data.ArrayStore', {
                         fields: [{
                             name: 'pApplicationrange',
                             type: 'Integer'
                         },
                         {
                             name: 'applicationrange',
                             type: 'string'
                         },
                         ],
                         data: [['1', '生产'], ['2', '产销'], ['3', '销售'], ]
                     }),
                     //applicationrange
                     name: 'products.pApplicationrange',
                     hiddenName: 'products.pApplicationrange',
                     id:'appid',
                     // 提交到后台的input的name ，对应下面store里的''id，必须要填
                     valueField: 'pApplicationrange',
                     displayField: 'applicationrange',
                     fieldLabel: '适用范围',
                     queryMode: 'local',
                     selectOnTab: false,
                     editable: false,
                     onReplicate: function() {
                         this.getStore().clearFilter();
                     }
                 },

                {
                     xtype: 'combo',
                     store: Ext.create('Ext.data.ArrayStore', {
                         fields: [{
                             name: 'pAvailability',
                             type: 'Integer'
                         },
                         {
                             name: 'availability',
                             type: 'string'
                         }],
                         data: [['1', '是'], ['2', '否'], ]
                     }),
                     name: 'products.pAvailability',
                     hiddenName: 'products.pAvailability',
                     id:'avaid',
                     valueField: 'pAvailability',
                     displayField: 'availability',
                     fieldLabel: '可用',
                     queryMode: 'local',
                     //数据模式,local代表本地数据模式
                     selectOnTab: false,
                     editable: false,
                     onReplicate: function() {
                         this.getStore().clearFilter();
                     }
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
	                  text: '搜索',
	                  handler:function(){
	                		      var url = '/XJManager/base/productList.do?1=1';
                                  var all = searchFormx.getForm().getValues();
                                  var p = all['products.pId'];
                                  var pname = Ext.getCmp('pname').getValue();
                                  var ctid = Ext.getCmp('ctid').getValue();
                                  
                                  var vid = all['products.pVarieties'];
                                  var appid = Ext.getCmp('appid').getValue();
                                  var avaid = Ext.getCmp('avaid').getValue();
                                  if (p != '') {
                                      url = url + '&products.pId=' + p;
                                  }
                                  if (pname != '') {
                                      url = url + '&products.pName=' + pname;
                                  }
                                  if (ctid != null) {
                                	  url = url + '&products.pCoaltype=' + ctid;
                                  }
                                  if (vid != null) {
                                      url = url + '&products.pVarieties=' + vid;
                                  }
                                  if (appid != null) {
                                      url = url + '&products.pApplicationrange=' + appid;
                                  }
                                  if (avaid != null) {
                                      url = url + '&pAvailability=' + avaid;
                                  }

                                  proStore.getProxy().url = url;
                                  proStore.load();
                                  panelnew.hide();
                              }
	                		  
	                	  },{
	                  minWidth: 80,
	                  text: '取消'
	              }]
	             }]
	     		 });
	//////////////////////////////////////////////////////
	var panelnew= Ext.create("Ext.panel.Panel",{
		 floating:true,
         title:'筛选',  
         closable: true,
         closeAction: 'hide',
         width: 410,
         height: 400,
         tools: [{type: 'pin'}],
         layout: {
        	 type: 'border',
        	 padding: 5
         },
         constrain:true,  
         //模态窗体  
         modal:true,
         hidden:true,
         //模态窗体  
         plain:true,  
         //滚动条设置  
         autoScroll:true,      
         items:[
				{
					region: 'north',
					items:[searchFormx],
					width: 200,
					split: true,
					//是否可缩小
					floatable: false,
				},
                
            ]
     });
	/******************************创建筛选框结束*****************************/
     
    
    /*********************创建window弹窗表单开始***********************/
    var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
    var c = new Ext.Window({
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
                        proStore.reload();
                    },
                    failure: function(proForm, action) {
                    	var data = Ext.decode(action.response.responseText);
                        Ext.Msg.alert('添加失败',data.msg);
                    }
                });
            }
        },
        {
            text: "重置",
            iconCls: "reset",
            handler: function() {
                proForm.getForm().reset();
            }
        }]
    });
    /***********************表单设计开始*********************/
    var proForm = Ext.create('Ext.form.Panel', {
        plain: true,
        border: 0,
        bodyPadding: 5,
        width: 320,
        title: '产品添加',
        //表单发送的到的action路径
        url: '/XJManager/base/addProduct.do',
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
            fieldLabel: '产品编号',
            afterLabelTextTpl: required,
            //必填项的标识
            //pId
            id: 'formpid',
            name: 'products.pId',
            // name只是改下拉的名称   
            triggerAction: 'all',
            // 显示所有下列数据，一定要设置属性triggerAction为all
            allowBlank: false,
            tooltip: '请填入纯数字的产品编号'
        },
        {
            xtype: 'textfield',
            fieldLabel: '产品名称',
            //必填项
            afterLabelTextTpl: required,
            //pName
            name: 'products.pName',
            allowBlank: false,
            tooltip: '填入产品名称'
        },

        {
            xtype: 'combo',
            store: Ext.create('Ext.data.ArrayStore', {
                fields: [{
                    name: 'ctId',
                    type: 'string'
                },
                {
                    name: 'ctName',
                    type: 'string'
                }],
                root: '',
                autoload: true,
                proxy: {
                    type: "ajax",
                    url: '/XJManager/base/coalTypeList.do',
                    reader: {
                        type: "json",
                    }
                }
            }),
            triggerAction: 'all',
            name: 'ctName',
            hiddenName: 'ctName',
            valueField: 'ctId',
            displayField: 'ctName',
            value:'烟煤',
            fieldLabel: '煤种',
            selectOnTab: false,
            typeAhead: false,
            editable: false,
            afterLabelTextTpl: required,
            allowBlank: false,
            onReplicate: function() {
                this.getStore().clearFilter();
            }
        },

        {
            xtype: 'combo',
            store: Ext.create('Ext.data.ArrayStore', {
            	id:'varStore',
                fields: [{
                    name: 'pVarieties',
                    type: 'Integer'
                },
                {
                    name: 'Varieties',
                    type: 'string'
                }],
                data: [['1', '动力煤'],],
            }),
            //pVarieties
            id:'varietiesId',
            name: 'products.pVarieties',
            hiddenName: 'pVarieties',
            valueField: 'pVarieties',
            displayField: 'Varieties',
            fieldLabel: '品种',
            queryMode: 'local',
            //tab键是否可以选择当前突出项
            selectOnTab: false,
            /****下拉框不可编辑*****/
            typeAhead: false,
            editable: false,
            afterLabelTextTpl: required,
            allowBlank: false,
            /****下拉框不可编辑*****/
            onReplicate: function() {
                this.getStore().clearFilter();
            },
            
        },

        {
            xtype: 'textfield',
            fieldLabel: '计量单位',
            value: '吨',
            //必填项
            afterLabelTextTpl: required,
            //pMeasurementunit
            name: 'products.pMeasurementunit',
            allowBlank: false,
            tooltip: '填入产品编号'
        },

        {
            xtype: "fieldcontainer",
            layout: "hbox",
            items: [{
                xtype: "textfield",
                fieldLabel: "部门",
                flex: 1,
                fieldLabel: '生产单位',
                readOnly: 'true',
                value: '',
                //必填项
                //pProductionunit
                name: 'coName',
            },
            {
                xtype: "button",
                icon: '../../common/shared/icons/fam/search.png',
                /************创建单位搜索框开始***********/
                listeners: {
                    click: function() {
                    	
                    	
                        //创建一个grid
                        Ext.define('addcompany', {
                            extend: 'Ext.data.Model',
                            idProperty: '',
                            //定义类的属性
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
                            }]
                        });
                        var addStore = Ext.create('Ext.data.Store', {
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
                        //定义grid
                        var agrid = Ext.create('Ext.grid.Panel', {
                            id: 'agrid',
                            region: 'east',
                            //grid 的标题
                            title: '单位列表',
                            //引入仓库
                            store: addStore,
                            loadMask: true,
                            listeners: {
                                itemdblclick: function(dataview, record, item, index, e) {
                                    proForm.getForm().loadRecord(record);
                                    newWin.hide();
                                }
                            },
                            //定义列
                            columns: [{
                                text: '机构编号',
                                sortable: true,
                                dataIndex: 'coId',
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
                            }],
                            stripeRows: true,
                            height: 320,
                            width: 1200,
                            frame: false,
                        });
                        //创建一个搜索表单
                        var searchForm = Ext.create('Ext.form.Panel', {
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
                                id: 'cid',
                                xtype: 'textfield',
                                fieldLabel: '机构编号',
                                name: 'coId'
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: '机构简称',
                                name: 'coShort',
                                id: 'short'

                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: '机构电话',
                                name: 'coPhone',
                                id: 'phone'
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: '机构传真',
                                name: 'coFax',
                                id: 'fax'
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: '机构邮编',
                                name: 'coPostcode',
                                id: 'postcode'
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: '机构负责人',
                                name: 'coLeader',
                                id: 'leader'
                            }],

                            buttons: [{
                                text: "搜索",
                                iconCls: "btn-save",
                                handler: function() {
                                    var url = '/XJManager/base/companyList.do?1=1';
                                    var cid = Ext.getCmp('cid').getValue();
                                    var short = Ext.getCmp('short').getValue();
                                    var phone = Ext.getCmp('phone').getValue();
                                    var fax = Ext.getCmp('fax').getValue();
                                    var postcode = Ext.getCmp('postcode').getValue();
                                    var leader = Ext.getCmp('leader').getValue();
                                    if (cid != '') {
                                        url = url + '&coId=' + cid;
                                    }
                                    if (short != '') {
                                        url = url + '&coShort=' + short;
                                    }
                                    if (phone != '') {
                                        phone = url + '&coPhone=' + phone;
                                    }
                                    if (fax != '') {
                                        url = url + '&coFax=' + fax;
                                    }
                                    if (postcode != '') {
                                        url = url + '&coPostcode=' + postcode;
                                    }
                                    if (leader != '') {
                                        url = url + '&coLeader=' + leader;
                                    }

                                    addStore.getProxy().url = url;
                                    addStore.load();
                                }
                            },
                            {
                                text: "重置",
                                iconCls: "reset",
                                handler: function() {
                                    this.up('form').getForm().reset();
                                }
                            }]
                        });

                        var newWin = Ext.create("Ext.window.Window", {
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
                            listeners:{
                            	'hide':function(){
                            		this.removeAll();
                            	}
                            },
                            items: [{
                                region: 'west',
                                title: '部门搜索',
                                items: [searchForm],
                                width: 200,
                                split: true,
                                //是否可缩小
                                collapsible: true,
                                floatable: false
                            },
                            {
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

        {
            xtype: 'combo',
            store: Ext.create('Ext.data.ArrayStore', {
                fields: [{
                    name: 'pApplicationrange',
                    type: 'Integer'
                },
                {
                    name: 'applicationrange',
                    type: 'string'
                },
                ],
                data: [['1', '生产'], ['2', '产销'], ['3', '销售'], ]
            }),
            id:'appId',
            name: 'products.pApplicationrange',
            hiddenName: 'pApplicationrange',
            emptyText : '请选择',
            // 提交到后台的input的name ，对应下面store里的''id，必须要填
            valueField: 'pApplicationrange',
            displayField: 'applicationrange',
            fieldLabel: '适用范围',
            queryMode: 'local',
            //数据模式,local代表本地数据模式
            selectOnTab: false,
            typeAhead: false,
            editable: false,
            onReplicate: function() {
                this.getStore().clearFilter();
            },
        },

        {
            xtype: 'combo',
            store: Ext.create('Ext.data.ArrayStore', {
                fields: [{
                    name: 'pAvailability',
                    type: 'Integer'
                },
                {
                    name: 'availability',
                    type: 'string'
                }],
                data: [['1', '是'], ['2', '否'], ]
            }),
            id:'avaId',
            emptyText : '请选择',
            name: 'products.pAvailability',
            hiddenName: 'pAvailability',
            // 提交到后台的input的name ，对应下面store里的''id，必须要填
            valueField: 'pAvailability',
            displayField: 'availability',
            fieldLabel: '可用',
            queryMode: 'local',
            //数据模式,local代表本地数据模式
            selectOnTab: false,
            typeAhead: false,
            editable: false,
            afterLabelTextTpl: required,
            allowBlank: false,
            onReplicate: function() {
                this.getStore().clearFilter();
            },
           
        },
        {
            xtype: 'textfield',
            name: 'coId',
            hidden: true,
            hideLabel: true
        },
        {
            xtype: 'textarea',
            fieldLabel: '备注',
            hideLabel: false,
            name: 'remark',
            style: 'margin:0',
            // Remove default margin
            flex: 1 // Take up all *remaining* vertical space
        }]

    })

    //定义grid
    var grid = Ext.create('Ext.grid.Panel', {
        //grid 的标题
        title: '产品信息管理',
        idField: 'grid',
        //引入仓库
        store: proStore,
        selModel: selModel,
        stripeRows: true,
        height: 320,
        width: 1200,
        frame: false,
        //定义列
        columns: [{
            id: 'id',
            text: '产品编号',
            sortable: true,
            //与定义的类中的属性匹配
            dataIndex: 'products.pId',
            flex: 0,
            width: 75,
        },
        {
            text: '产品名称',
            sortable: true,
            dataIndex: 'products.pName',
            width: 75,
        },
        {
            text: '煤种',
            sortable: true,
            dataIndex: 'ctName',
            width: 75,
        },
        {
            text: '品种类型',
            sortable: true,
            dataIndex: 'varieties',
            width: 75,
        },
        {
            text: '生产单位',
            sortable: true,
            dataIndex: 'coName',
            width: 75,
        },
        {
            text: '应用范围',
            sortable: true,
            dataIndex: 'applicationrange',
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
                tooltip: '删除数据',
                handler: function(grid, rowIndex, colIndex) {
                    Ext.MessageBox.confirm("请确认", "确定删除吗？",
                    function(button, text) {
                        if (button == 'yes') {
                            //获取对应行的节点
                            var node = grid.getNode(rowIndex);
                            //获取对应节点的数据model
                            var rec = grid.getRecord(node);
                            //获取选中行的pid属性
                            var id = rec.get('products.pId');
                            Ext.Ajax.request({
                                url: '/XJManager/base/deleteProduct.do',
                                params: {
                                    'ids': id
                                },
                                method: 'POST',
                                success: function(response, options) {
                                    Ext.MessageBox.alert('成功', '删除成功');
                                },
                                failure: function(response, options) {
                                    Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
                                }
                            });
                            proStore.removeAt(rowIndex);
                        }
                    });
                }
            }]
        }

        ],

        // 保存和取消按钮
        dockedItems: [ //各种按钮布局
        {
            xtype: 'toolbar',
            items: [
            {
            	text:'筛选',
            	tooltip:'筛选',
            	iconCls:'search',
            	listeners:{
            		'click':function(){
            			panelnew.show();
            			searchFormx.form.reset();
            		}
            	}
            
            },
            {
                text: '添加',
                tooltip: '添加一条数据',
                iconCls: 'add',
                listeners: {
                    'click': function() {
                        Ext.getCmp('formpid').setReadOnly(false);
                        proForm.show();
                        c.add(proForm);
                        proForm.getForm().reset();
                        Ext.getCmp('varietiesId').setValue(1);
                        Ext.getCmp('appId').setValue(1);
                        Ext.getCmp('avaId').setValue(1);
                        proForm.getForm().url = '/XJManager/base/addProduct.do';
                        c.show();
                    }
                }
            },
            '-', {
                text: '修改',
                tooltip: ' 修改一条数据',
                iconCls: 'edit',
                listeners: {
                    'click': function() {
                        var record = grid.getSelectionModel().getSelection();
                        if (record == undefined || record == '') {
                            Ext.Msg.alert('信息', '请选择一条数据');
                            return;
                        }
                        if (record.length >= 2) {
                            Ext.Msg.alert('信息', '只可以选择一条数据');
                            return;
                        }
                        c.add(proForm);
                        proForm.show();
                        c.show();
                        proForm.getForm().loadRecord(record[0]);
                        Ext.getCmp('formpid').setReadOnly(true);
                        proForm.getForm().url = '/XJManager/base/updateProduct.do';
                        grid.getSelectionModel().clearSelections();
                        grid.getView().refresh();
                    }

                }
            },
            '-', {
                itemId: 'removeButton',
                text: '删除数据',
                tooltip: 'remove',
                iconCls: 'remove',
                listeners: {
                    'click': function() {
                        var record = grid.getSelectionModel().getSelection();
                        if (record == undefined || record == '') {
                            Ext.Msg.alert("错误", "请选择至少一条数据");
                            return;
                        } else {
                            Ext.MessageBox.confirm("请确认", "确定删除吗？",
                            function(button, text) {
                                if (button == 'yes') {
                                    var url = "/XJManager/base/deleteProduct.do"
                                    var param = "";
                                    for (var i = 0; i < record.length; i++) {
                                        param = param + record[i].get("products.pId") + "-";
                                    }
                                    Ext.Ajax.request({
                                        url: url,
                                        params: {
                                            'ids': param
                                        },
                                        method: 'POST',
                                        success: function(response, options) {
                                            Ext.MessageBox.alert('成功', '删除成功');
                                            proStore.reload();
                                            /*window.location.reload();*/

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
            },
            '-', {
                text: '详细信息',
                tooltip: 'detailed',
                iconCls: 'detailed',
                listeners: {	
                	click: function() {
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
															fieldLabel: '产品编号',
															name:'products.pId',
															disabled:true
														}, {
															xtype: 'textfield',
															fieldLabel: '&nbsp&nbsp&nbsp产品名称',
															name: 'products.pName',
															disabled:true
														}, {
															xtype: 'textfield',
															fieldLabel: '&nbsp&nbsp&nbsp煤种',
															name: 'ctName',
															disabled:true
														}, ],

													}, {
														layout: 'column',
														frame: true,
														items: [{
															xtype: 'textfield',
															fieldLabel: '品种',
															id:'varId',
															name:'products.pVarieties',
															disabled:true
														}, {
															xtype: 'textfield',
															fieldLabel: '&nbsp&nbsp&nbsp计量单位',
															name: 'products.pMeasurementunit',
															disabled:true
														}, {
															xtype: 'textfield',
															fieldLabel: '&nbsp&nbsp&nbsp生产单位',
															name: 'coName',
															disabled:true
														}],
													}, {
														layout: 'column',
														frame: true,
														items: [{
															xtype: 'textfield',
															fieldLabel: '适用范围',
															name: 'products.pApplicationrange',	
															id:'appId',
															disabled:true
														}, {
															xtype: 'textfield',
															fieldLabel: '&nbsp&nbsp&nbsp可用',
															name: 'products.pAvailability',
															id:'avaId',
															disabled:true
														}],
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
															}
															/*, '-', {
																text: '上一条',
																tooltip: 'search',
																iconCls: 'forward'
															}, '-', {
																text: '下一条',
																tooltip: 'search',
																iconCls: 'next',
															},*/
														]
													}
												],

											});
						                        var record = grid.getSelectionModel().getSelection();
						                        if (record == undefined || record == '') {
						                            Ext.Msg.alert('信息', '请选择一条数据');
						                            return;
						                        }
						                        if (record.length >= 2) {
						                            Ext.Msg.alert('信息', '只可以选择一条数据');
						                            return;
						                        }
						                        searchForm1.getForm().loadRecord(record[0]);
						                        //获取品种类型的值
						                        var v = Ext.getCmp('varId').getValue();
						                        if(v == 1){
						                        	Ext.getCmp('varId').setValue('动力煤');
						                        }else{
						                        	Ext.getCmp('varId').setValue('其他');
						                        }
						                        var a = Ext.getCmp('appId').getValue();
						                        if(a == 1){
						                        	Ext.getCmp('appId').setValue('生产');
						                        } 
						                        if(a == 2){
						                        	Ext.getCmp('appId').setValue('产销');
						                        }
						                        if(a == 3){
						                        	Ext.getCmp('appId').setValue('销售');
						                        }
						                        var ava = Ext.getCmp('avaId').getValue();
						                        if(ava == 1){
						                        	Ext.getCmp('avaId').setValue('是');
						                        }else{
						                        	Ext.getCmp('avaId').setValue('否');
						                        }
						                        grid.getSelectionModel().clearSelections();
						                        grid.getView().refresh();
						                    

						                

											var searchForm2 = Ext.create('Ext.form.Panel', {
												region: 'west',
												plain: true,
												border: 0,
												bodyPadding: 5,
												width: 880,
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
												store: proStore,
												//引入选择框
												//定义列
												columns: [{
														id: 'sourceId',
														text: '参数名称',
														sortable: true,
														//与定义的类中的属性匹配
														dataIndex: 'sourceId',
														flex: 0,
														width: 290,
														//鼠标点击时能够编辑
														editor: {
															allowBlank: false
														}
													}, {
														text: '参数值',
														sortable: true,
														dataIndex: 'sourceName',
														width: 290,
														//鼠标点击时能够编辑
														editor: {
															allowBlank: false
														}
													}, {
														text: '备注',
														sortable: true,
														dataIndex: 'sourceCompanyid',
														width: 290,
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

																		piciWin.show();
																	}

																}

															}, '-', {
																text: '批次修改',
																tooltip: ' edit',
																iconCls: 'edit',
																listeners: {
																	click: function() {
																		var record = searchFormcanshu.getSelectionModel().getSelection();
																		if(record == undefined || record == '') {
																			Ext.Msg.alert('信息', '请选择一条数据');
																			return;
																		}
																		if(record.length >= 2) {
																			Ext.Msg.alert('信息', '只可以选择一条数据');
																			return;
																		}
																		piciWin.show();
																		addFormpici.getForm().loadRecord(record[0]);
																		searchFormcanshu.getSelectionModel().clearSelections();
																		searchFormcanshu.getView().refresh();
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
											var searchGrid = Ext.create('Ext.grid.Panel', {
												//引入仓库
												store: proStore,
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
																		var record = searchGrid.getSelectionModel().getSelection();
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
																		searchGrid.getSelectionModel().clearSelections();
																		searchGrid.getView().refresh();
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
											Ext.History.init();
											////////////////////////////////////////////////////////////
											////////////////////////////////////////////////////////////////  
											var tab = Ext.create('Ext.TabPanel', {
														id: 'main-tabs',
														height: 200,
														width: 900,
														activeTab: 0,
														defaults: {
															padding: 10
														},

														items: [{
																xtype: 'tabpanel',
																title: '产品参数',
																activeTab: 0,
																padding: 5,
																border: true,
																plain: true,
																defaults: {
																	padding: 10
																},
																items: [{
																	title: '参数',
																	items: [searchFormcanshu],
																}],
																listeners: {
																	tabchange: onTabChange
																}
															}, {
																xtype: 'tabpanel',
																title: '产品构成',
																activeTab: 0,
																padding: 5,
																border: true,
																plain: true,
																defaults: {
																	padding: 10
																},
																items: [{
																	title: '构成',
																	items: [searchGrid],
																	html: '测试二次点击'
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
													oldToken, newToken;

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

											// Handle this change event in order to restore the UI to the appropriate history state
											function onAfterRender() {
												Ext.History.on('change',function(token) {
													var parts, tabPanel, length, i;

															if(token) {
																parts = token.split(tokenDelimiter);
																length = parts.length;

																// setActiveTab in all nested tabs
																for(i = 0; i < length - 1; i++) {
																	Ext.getCmp(parts[i]).setActiveTab(Ext.getCmp(parts[i + 1]));
																}
															}
														});

												// This is the initial default state.  Necessary if you navigate starting from the
												// page without any existing history token params and go back to the start state.
												var activeTab1 = Ext.getCmp('main-tabs').getActiveTab(),
													activeTab2 = activeTab1.getActiveTab();
												onTabChange(activeTab1,activeTab2);
											}

											win = Ext.create("Ext.window.Window", {
														/*title:'搜索', */
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
															title: '更多详细信息',
															items: [searchForm2],
															width: 880,
															split: true,
															//是否可缩小
															collapsible: true,
															collapsed: true,
															floatable: false
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
									}}],
            }], 
            bbar: Ext.create('Ext.PagingToolbar', {
                pageSize: 10,
                store: proStore,
                displayInfo: true,
                plugins: Ext.create('Ext.ux.ProgressBarPager', {})
            })

        });
        //将table放入制定的div中
        grid.render('grid-example');
        panelnew.render('grid-example');
        //重新提交新的参数请求数据；
        proStore.load();

    });

