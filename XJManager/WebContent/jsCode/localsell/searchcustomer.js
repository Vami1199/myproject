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
		width: 400,
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
					fieldLabel: '客户编号',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'textfield',
					fieldLabel: '客户简称',
					width: 360,
					name: 'yYear',
				},
				{
					xtype: 'textfield',
					fieldLabel: '联系人',
					width: 360,
					name: 'yYear',
				},
				{
					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: [{
							name: 'qyType',
							value: 'Integer'
						}, {
							name: 'qyValue',
							value: 'String'
						}],
						data: [
							[0, '股份有限公司'],
							[1, '国有'],
							[2, '国有股份制'],
							[3, '合资公司'],
							[4, '集体'],
							[5, '民营'],
							[6, '私营'],
							[7, '有限公司'],
							[8, '有限责任公司'],
							[9, '中外合资公司'],
						]
					}),
					name: 'csType',
					hiddenName: 'qyType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'qykey',
					displayField: 'qyValue',
					fieldLabel: '企业性质',
					width: 360,
					queryMode: 'local',
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
							name: 'khkey',
							value: 'Integer'
						}, {
							name: 'khValue',
							value: 'String'
						}],
						data: [
							[0, '一般客户'],
							[1, '重点客户'],
						]
					}),
					name: 'csType',
					hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'khkey',
					displayField: 'khValue',
					fieldLabel: '客户类型',
					width: 360,
					queryMode: 'local',
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
							name: 'hykey',
							value: 'Integer'
						}, {
							name: 'hyValue',
							value: 'String'
						}],
						data: [
							[0, '电力'],
							[1, '化工'],
							[2, '建材'],
							[3, '其它'],
							[4, '商业'],
							[5, '石化'],
							[6, '冶金'],
						]
					}),
					name: 'csType',
					hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'hykey',
					displayField: 'hyValue',
					fieldLabel: '所属行业',
					width: 360,
					queryMode: 'local',
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
							name: 'bbkey',
							value: 'Integer'
						}, {
							name: 'bbValue',
							value: 'String'
						}],
						data: [
							[0, '大唐'],
							[1, '国电'],
							[3, '华电'],
							[4, '华能'],
							[5, '化工部'],
							[6, '其它'],
							[7, '省电燃'],
							[8, '铁路部'],
							[9, '皖能'],
							[10, '冶金部'],
							[11, '中电投'],
							[12, '中石化'],
						]
					}),
					name: 'csType',
					hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'bbkey',
					displayField: 'bbValue',
					fieldLabel: '部别',
					width: 360,
					queryMode: 'local',
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
							name: 'khkey',
							value: 'Integer'
						}, {
							name: 'khValue',
							value: 'String'
						}],
						data: [
							[0, '客户'],
							[1, '收货单位'],
							[3, '网点'],
							
						]
					}),
					name: 'csType',
					hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'khkey',
					displayField: 'khValue',
					fieldLabel: '客户标志',
					width: 360,
					queryMode: 'local',
					selectOnTab: false,
					typeAhead: false,
					editable: false,
					onReplicate: function() {
						this.getStore().clearFilter();
					}
				
				},
				{
					xtype: 'textfield',
					fieldLabel: '税号',
					width: 360,
					name: 'yYear',
				},
				
			],
		}, ],
	});
	////////////////////////////////////////////////////////
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
	// register model
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [
		         {name: '客户编码',type:'string'},
		         {name: '客户简称',type:'string'},
		         {name: '客户全称',type:'string'},
		         {name: '煤种',type:'string'},
		         {name: '总购煤量',type:'string'},
		         {name: '总发煤量',type:'string'},
		         {name: '未发量',type:'string'},
		         {name: '最后操作人员',type:'string'},
		         ]        
	});
    //定义数据源将被引入到对应的列中
    var myData = [
        ['xx','xx','xx','xx','xx','xx','xx','xx','xxx']
      
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
        title:'查询客户购煤情况',
        //引入仓库
        store: store,
        //引入选择框
        selModel: sm,
        //定义列
        columns: [{
                id:'',
                text: '客户编码',
                sortable: true,
                //与定义的类中的属性匹配
                dataIndex: '客户编码',
                flex: 0,
                width: 75,
            },
            {
                id:'',
                text: '客户简称',
                sortable: true,
                //与定义的类中的属性匹配
                dataIndex: '客户简称',
                flex: 0,
                width: 75,
            },
            {
                id:'',
                text: '客户全称',
                sortable: true,
                //与定义的类中的属性匹配
                dataIndex: '客户全称',
                flex: 0,
                width: 75,
            },
            {
                id:'',
                text: '煤种',
                sortable: true,
                //与定义的类中的属性匹配
                dataIndex: '煤种',
                flex: 0,
                width: 75,
            },
            {
                id:'',
                text: '总购煤量',
                sortable: true,
                //与定义的类中的属性匹配
                dataIndex: '总购煤量',
                flex: 0,
                width: 75,
            },
            {
                id:'',
                text: '总发煤量',
                sortable: true,
                //与定义的类中的属性匹配
                dataIndex: '总发煤量',
                flex: 0,
                width: 75,
            },
            {
                id:'',
                text: '末发量',
                sortable: true,
                //与定义的类中的属性匹配
                dataIndex: '末发量',
                flex: 0,
                width: 75,
            },
            {
                id:'',
                text: '最后操作人员',
                sortable: true,
                //与定义的类中的属性匹配
                dataIndex: '最后操作人员',
                flex: 0,
                width: 75,
                //鼠标点击时能够编辑
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
            },{
                text:'详细信息',
                iconCls:'detailed',
                listeners: {
						'click': function() {
							
							////////////////////////////////////////////
							var xqWin;
							///////////详情form//////////////////////////////////////////////
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
											fieldLabel: '客户编码',
											value: 'xxx',
											readOnly: true,
											width: 450
										}, {
											xtype: 'displayfield',
											fieldLabel: '客户全称',
											readOnly: true,
											width: 450
										}, {
											xtype: 'displayfield',
											fieldLabel: '客户简称',
											readOnly: true,
											width: 450
										}, {
											xtype: 'displayfield',
											fieldLabel: '煤种',
											value: '',
											readOnly: true,
											width: 450
										}, {
											xtype: 'displayfield',
											fieldLabel: '总购煤量',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '总发煤量',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '未发量',
											value: '测试',
											readOnly: true,
											width: 300
										}],
									},
									//////////////////////////////////////////////////////////////////////

								],

							});
							///////购煤申请单明细grid//////////////////////////////////////////////////
							var gridcontantxq = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								title: '客户购煤明细账',
								selModel: sm,
								//autoScroll: true,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
									text: '日期',
									sortable: true,
									dataIndex: 'mId',
									flex: 0,
								}, {
									text: '操作类型',
									sortable: true,
									dataIndex: 'sourceName',
								}, {
									text: '单据类型',
									sortable: true,
									dataIndex: 'sourceName',
								}, {
									text: '单据编号',
									sortable: true,
									dataIndex: 'sourceName',
								}, {
									text: '红蓝标记',
									sortable: true,
									dataIndex: 'sourceName',
								}, {
									text: '发生量',
									sortable: true,
									dataIndex: 'sourceName',
								}, {
									text: '操作人',
									sortable: true,
									dataIndex: 'sourceName',
								}],


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
							xqWin = Ext.create("Ext.window.Window", {
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
															text: '概要信息',
															iconCls: 'detailed',
															handler: function() {
																xqWin.removeAll();
																xqWin.close();
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
