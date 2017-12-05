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
	/*********************创建筛选框开始********************/
	 var searchFormx =  Ext.create('Ext.form.Panel', {
   	   region:'west',
            plain: true,
            border: 0,
            bodyPadding: 5,
            width:400,
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
         
            items: [ {
    			xtype : "fieldcontainer",
    			layout : "hbox",
    			items : [{
    				xtype : "textfield",
    				fieldLabel : "车站编号",
    				flex : 1,
    				name : 'station.sSort'
    				}]
    			},{
    				xtype : "textfield",
    				fieldLabel : "车站名称",
    				flex : 1,
    				name : 'station.sName',
    			},
    		
    		{
                 xtype: 'combo',
                 store: Ext.create('Ext.data.ArrayStore', {
              	   fields: [{name: 'startKey',type: 'Integer'},
               		   		{name: 'startValue',type: 'String'}],
                     data: [
                         [1,'是'],
                         [0,'否'],
                     ]
                 }),
                 name: 'station.sRailwaysbureau',
                 hiddenName : 'station.sRailwaysbureau',// 提交到后台的input的name ，对应下面store里的''id，必须要填
                 emptyText : '-----请选择-----',
                 valueField:'startKey',
                 displayField: 'startValue',
                 fieldLabel: '是否发站',
                 queryMode: 'local',//数据模式,local代表本地数据模式
                 selectOnTab: false,
      		   	 typeAhead:false,
      		     editable:false, 
                 onReplicate: function(){
                     this.getStore().clearFilter();
                 }
             },  
             {
                 xtype: 'combo',
                 store: Ext.create('Ext.data.ArrayStore', {
              	   fields: [{name: 'stationKey',type: 'Integer'},
              		   		{name: 'stationValue',type: 'String'}],
                     data: [
                         [1,'是'],
                         [0,'否'],
                     ]
                 }),
                 name: 'station.sDeparturestation',
                 hiddenName : 'station.sDeparturestation',// 提交到后台的input的name ，对应下面store里的''id，必须要填
                 emptyText : '-----请选择-----',
                 valueField:'stationKey',
                 displayField: 'stationValue',
                 fieldLabel: '是否火车站',
                 queryMode: 'local',
                 selectOnTab: false,
      		     typeAhead:false,
      		     editable:false, 
                 onReplicate: function(){
                     this.getStore().clearFilter();
                 }
             },  
             {
                 xtype: 'combo',
                 store: Ext.create('Ext.data.ArrayStore', {
                     fields: [{
                         name: 'pId',
                         type: 'Integer'
                     },
                     {
                         name: 'pName',
                         type: 'String'
                     }],
                     autoload: true,
                     proxy: {
                         type: "ajax",
                         url: '/XJManager/base/provinceList.do',
                             reader: {
                                 type: "json"
                             }
                         }
                     }),
                 name: 'station.sProvince',
                 hiddenName : 'station.sProvince',
                 emptyText : '-----请选择-----',
                 valueField:'pId',
                 displayField: 'pName',
                 fieldLabel: '省',
                 selectOnTab: false,
                 typeAhead:false,
      		   	 editable:false, 
                 onReplicate: function(){
                     this.getStore().clearFilter();
                 }
             },{
                xtype: 'combo',
                store: Ext.create('Ext.data.ArrayStore', {
                	
                    fields: [{
                        name: 'adminId',
                        type: 'Integer'
                    },
                    {
                        name: 'adminName',
                        type: 'String'
                    }],
                    autoload: true,
                    proxy: {
                        type: "ajax",
                        url: '/XJManager/base/stationadminList.do',
                            reader: {
                                type: "json",
                                root:'queryList'
                            }
                        }
                    }),
                name: 'station.sRailwaystation',
                hiddenName : 'station.sRailwaystation',// 提交到后台的input的name ，对应下面store里的''id，必须要填
                emptyText : '-----请选择-----',
                valueField:'adminId',
                displayField: 'adminName',
                fieldLabel: '铁路局',
                selectOnTab: false,
     		    typeAhead:false,
     		    editable:false, 
                onReplicate: function(){
                    this.getStore().clearFilter();
                }
            },
            {
                xtype: 'combo',
                store: Ext.create('Ext.data.ArrayStore', {
             	   fields: [ {
                       name: 'mouthKey',
                       type: 'Integer'
                   },
                   {
                       name: 'mouthValue',
                       type: 'String'
                   } ],
                    data: [
                        [1,'是'],
                        [0,'否'],
                    ]
                }),
                name: 'station.sMouth',
                hiddenName : 'station.sMouth',// 提交到后台的input的name ，对应下面store里的''id，必须要填
                emptyText : '-----请选择-----',
                valueField:'mouthKey',
                displayField: 'mouthValue',
                fieldLabel: '是否过口',
                queryMode: 'local',//数据模式,local代表本地数据模式
                selectOnTab: false,
                typeAhead:false,
                editable:false, 
                onReplicate: function(){
                    this.getStore().clearFilter();
                }
            }],
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
	                		      var url = '/XJManager/base/stationList.do?1=1';
                                  var all = searchFormx.getForm().getValues();
                                  var searchId = all['station.sSort'];
                                  var searchName = all['station.sName'];
                                  var searchSbureau = all['station.sRailwaysbureau'];
                                  var searchDepart = all['station.sDeparturestation'];
                                  var searchProvince = all['station.sProvince'];
                                  var searchAdmin = all['station.sRailwaystation'];
                                  var searchMouth = all['station.sMouth'];
                                  if (searchId != '') {
                                      url = url + '&station.sSort=' + searchId;
                                  }
                                  if (searchName != '') {
                                      url = url + '&station.sName=' + searchName;
                                  }
                                  if (searchSbureau != null) {
                                	  url = url + '&station.sRailwaysbureau=' + searchSbureau;
                                  }
                                  if (searchDepart != null) {
                                      url = url + '&station.sDeparturestation=' + searchDepart;
                                  }
                                  if (searchProvince != null) {
                                      url = url + '&station.sProvince=' + searchProvince;
                                  }
                                  if (searchAdmin != null) {
                                      url = url + '&station.sRailwaystation=' + searchAdmin;
                                  }
                                  if (searchMouth != null) {
                                	  url = url + '&station.sMouth=' + searchMouth;
                                  }

                                  staStore.getProxy().url = url;
                                  staStore.load();
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
/**********************创建筛选框结束*****************************/
	Ext.define('Station', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [
		         {name: 'station.sId' ,type: 'Integer'},
		         {name: 'station.sName', type: 'string'},
		         {name: 'station.sSort', type: 'string'},
		         {name: 'station.sProvince', type: 'Integer'},
		         {name: 'station.sCity', type: 'String'},
		         {name: 'station.sRailwaystation', type: 'Integer'},
		         {name: 'station.sMileage', type: 'Integer'},
		         {name: 'station.sFreight', type: 'Integer'},
		         {name: 'station.sRemark', type: 'string'},
		         {name: 'station.sRailwaysbureau', type: 'integer'},
		         {name: 'station.sDeparturestation', type: 'integer'},
		         {name: 'station.sMouth', type: 'integer'},
		         {name: 'stationadmin.adminName', type: 'String'},
		         {name: 'province.pName', type: 'String'},
		         ]        
	});
    Ext.tip.QuickTipManager.init();
    var staStore = Ext.create('Ext.data.Store', {
        model: 'Station',
        remoteSort: true,
        //每页显示的数据
        pageSize: 5,
        proxy: {
            type: "ajax",
            url: '/XJManager/base/stationList.do',
            reader: {
                type: "json",
                root: "queryList",
                totalProperty: 'totalCount'
            }
        }
    });
    var sm = Ext.create('Ext.selection.CheckboxModel');
	 
    ////////////////////////////////////////////////////////////////////
     
    /*********************创建window弹窗表单开始***********************/
	var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
	var c = new Ext.Window({
		autoHight : true,
		modal : true,
		/*closeAction:hide,*/
		items : [], // 这里面放你的表单。 
		closeAction : 'close',//这里写成 'hide' 
		/***********************表单设计结束*********************/
		buttons : [ {
			text : "保存",
			iconCls : "btn-save",
			handler : function() {
                proForm.submit({
                    success: function() {
                        c.hide();
                        staStore.reload();
                    },
                    failure: function(proForm, action) {
                    	var data = Ext.decode(action.response.responseText);
                        Ext.Msg.alert('添加失败',data.msg);
                    }
                });
            }
		}, {
			text : "重置",
			iconCls : "reset",
			handler : function() {
			}
		} ]
	});
	/***********************表单设计开始*********************/
	var proForm = Ext.create('Ext.form.Panel', {
		plain : true,
		border : 0,
		bodyPadding : 5,
		width : 420,
		title : '添加',
		url : '',
		//默认设置
		fieldDefaults : {
			labelWidth : 70,
			anchor : '100%'
		},
		layout : {
			type : 'vbox',
			align : 'stretch' 
		},
		items : [ {
			xtype : "fieldcontainer",
			layout : "hbox",
			items : [{
				xtype : "textfield",
				flex : 1,
				value : '',
				name : 'station.sId',
				hidden:true
				}]
			},{
				xtype : "textfield",
				fieldLabel : "车站名称",
				flex : 1,
				value : '',
				afterLabelTextTpl : required,
				name : 'station.sName',
				allowBlank : false,
			},
		
		{
             xtype: 'combo',
             store: Ext.create('Ext.data.ArrayStore', {
          	   fields: [{name: 'startKey',type: 'Integer'},
           		   		{name: 'startValue',type: 'String'}],
                 data: [
                     [1,'是'],
                     [0,'否'],
                 ]
             }),
             id:'isStart',
             name: 'station.sRailwaysbureau',
             hiddenName : 'station.sRailwaysbureau',// 提交到后台的input的name ，对应下面store里的''id，必须要填
             emptyText : '-----请选择-----',
             valueField:'startKey',
             displayField: 'startValue',
             fieldLabel: '是否发站',
             queryMode: 'local',//数据模式,local代表本地数据模式
             selectOnTab: false,
  		   	 typeAhead:false,
  		     editable:false, 
             onReplicate: function(){
                 this.getStore().clearFilter();
             }
         },  
         {
             xtype: 'combo',
             store: Ext.create('Ext.data.ArrayStore', {
          	   fields: [{name: 'stationKey',type: 'Integer'},
          		   		{name: 'stationValue',type: 'String'}],
                 data: [
                     [1,'是'],
                     [0,'否'],
                 ]
             }),
             id:'isStation',
             name: 'station.sDeparturestation',
             hiddenName : 'station.sDeparturestation',// 提交到后台的input的name ，对应下面store里的''id，必须要填
             emptyText : '-----请选择-----',
             valueField:'stationKey',
             displayField: 'stationValue',
			 afterLabelTextTpl : required,
             fieldLabel: '是否火车站',
             queryMode: 'local',
             selectOnTab: false,
  		     typeAhead:false,
  		     editable:false, 
             onReplicate: function(){
                 this.getStore().clearFilter();
             }
         },  
         {
             xtype: 'combo',
             store: Ext.create('Ext.data.ArrayStore', {
                 fields: [{
                     name: 'pId',
                     type: 'Integer'
                 },
                 {
                     name: 'pName',
                     type: 'String'
                 }],
                 autoload: true,
                 proxy: {
                     type: "ajax",
                     url: '/XJManager/base/provinceList.do',
                         reader: {
                             type: "json"
                         }
                     }
                 }),
             name: 'station.sProvince',
             hiddenName : 'station.sProvince',
             emptyText : '-----请选择-----',
             valueField:'pId',
             displayField: 'pName',
 			 afterLabelTextTpl : required,
             fieldLabel: '省',
             selectOnTab: false,
             typeAhead:false,
  		   	 editable:false, 
             onReplicate: function(){
                 this.getStore().clearFilter();
             }
         },  
		{
			xtype : 'textfield',
			fieldLabel : '地市',
			name : 'station.sCity',
		}, {
			xtype : 'numberfield',
			fieldLabel : '里程',
			name : 'station.sMileage',
		},
		{
			xtype : 'numberfield',
			fieldLabel : '运价',
			name : 'station.sFreight',
		},
		{
            xtype: 'combo',
            store: Ext.create('Ext.data.ArrayStore', {
            	
                fields: [{
                    name: 'adminId',
                    type: 'Integer'
                },
                {
                    name: 'adminName',
                    type: 'String'
                }],
                autoload: true,
                proxy: {
                    type: "ajax",
                    url: '/XJManager/base/stationadminList.do',
                        reader: {
                            type: "json",
                            root:'queryList'
                        }
                    }
                }),
            name: 'station.sRailwaystation',
            hiddenName : 'station.sRailwaystation',// 提交到后台的input的name ，对应下面store里的''id，必须要填
            emptyText : '-----请选择-----',
            valueField:'adminId',
            displayField: 'adminName',
			afterLabelTextTpl : required,
            fieldLabel: '铁路局',
            selectOnTab: false,
 		   typeAhead:false,
 		   editable:false, 
            onReplicate: function(){
                this.getStore().clearFilter();
            }
        },
        {
            xtype: 'combo',
            store: Ext.create('Ext.data.ArrayStore', {
         	   fields: [ {
                   name: 'mouthKey',
                   type: 'Integer'
               },
               {
                   name: 'mouthValue',
                   type: 'String'
               } ],
                data: [
                    [1,'是'],
                    [0,'否'],
                ]
            }),
            id:'isMouth',
            name: 'station.sMouth',
            hiddenName : 'station.sMouth',// 提交到后台的input的name ，对应下面store里的''id，必须要填
            emptyText : '-----请选择-----',
            valueField:'mouthKey',
            displayField: 'mouthValue',
            fieldLabel: '是否过口',
            queryMode: 'local',//数据模式,local代表本地数据模式
            //tab键是否可以选择当前突出项
            selectOnTab: false,
            typeAhead:false,
            editable:false, 
            onReplicate: function(){
                this.getStore().clearFilter();
            }
        },  
		{
			xtype : 'textarea',
			fieldLabel : '备注',
			hideLabel : false,
			name : 'station.sRemark',
			style : 'margin:0', // Remove default margin
			flex : 1
		// Take up all *remaining* vertical space
		} ]

	});

    
    ////////////////////////////////////////////////////////////////////
    //定义grid
    var stationGrid = Ext.create('Ext.grid.Panel', {
    	//grid 的标题
        title:'车站信息管理',
        //引入仓库
        store:staStore,
        //引入选择框
        selModel: sm,
        //定义列
        columns:[{
            id:'sId',
            sortable: true,
            //与定义的类中的属性匹配
            dataIndex: 'station.sId',
            hidden:true
        },{
            text: '车站编号',
            sortable: true,
            //与定义的类中的属性匹配
            dataIndex: 'station.sSort',
            flex: 0,
            width: 75,
        
        },{
            text: '车站名称',
            sortable: true,
            dataIndex: 'station.sName',
            width: 75,
        },{
        	sortable: true,
        	dataIndex: 'station.sProvince',
        	width: 75,
        	hidden:true
        },{
        	
        	text: '省',
        	sortable: true,
        	dataIndex: 'province.pName',
        	width: 75,
        },{
        	text: '市',
        	sortable: true,
        	dataIndex: 'station.sCity',
        	width: 75,
        },{
        	text: '铁路局',
        	sortable: true,
        	dataIndex: 'stationadmin.adminName',
        	width: 75
        },{
        	hidden:true,
        	sortable: true,
        	dataIndex: 'station.sRailwaystation',
        	width: 75
        },{
        	text: '里程',
        	sortable: true,
        	dataIndex: 'station.sMileage',
        	width: 75,
        },{
        	text: '运价',
        	sortable: true,
        	dataIndex: 'station.sFreight',
        	width: 75,
        },{
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
                            Ext.MessageBox.confirm("请确认", "确定删除吗？",
                                    function(button, text) {
                                        if (button == 'yes') {
                                            //获取对应行的节点
                                            var node = grid.getNode(rowIndex);
                                            //获取对应节点的数据model
                                            var rec = grid.getRecord(node);
                                            //获取选中行的pid属性
                                            var id = rec.get('station.sId');
                                            Ext.Ajax.request({
                                                url: '/XJManager/base/deleteStation.do',
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
                                            staStore.removeAt(rowIndex);
                                        }
                                    });
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
            	tooltip:'筛选',
            	iconCls:'search',
            	listeners:{
            		'click':function(){
            			panelnew.show();
            			searchFormx.form.reset();
            		}
            	}
            
            },{
            	text:'添加',
            	tooltip:'add',
            	iconCls:'add',
            	listeners : {
					'click' : function() {
                        proForm.show();
                        c.add(proForm);
                        proForm.getForm().reset();
                        Ext.getCmp('isStart').setValue(1);
                        Ext.getCmp('isStation').setValue(1);
                        Ext.getCmp('isMouth').setValue(1);
                        proForm.getForm().url = '/XJManager/base/addStation.do';
                        c.show();
                    }
            	}
            }, '-',{
                text:'修改',
                tooltip:' edit',
                iconCls:'edit',
                listeners : {
                    'click' : function() {
                    	var record = stationGrid.getSelectionModel().getSelection();
                    	if(record == undefined || record == ''){
                    		Ext.Msg.alert('信息','请选择一条数据');
                    		return;	
                    	}
                    	if(record.length >= 2){
                    		Ext.Msg.alert('信息','只可以选择一条数据');
                    		return;	
                    	}
                    	 c.add(proForm);
                         proForm.show();
                         proForm.getForm().loadRecord(record[0]);
                         proForm.getForm().url = '/XJManager/base/updateStation.do';
                         c.show();
                         stationGrid.getSelectionModel().clearSelections();
                         stationGrid.getView().refresh();
                    }
                    	
                }
            },'-',{
                itemId: 'removeButton',
                text:'删除',
                tooltip:'remove',
                iconCls:'remove',
                listeners: {
                    'click': function() {
                        var record = stationGrid.getSelectionModel().getSelection();
                        if (record == undefined || record == '') {
                            Ext.Msg.alert("错误", "请选择至少一条数据");
                            return;
                        } else {
                            Ext.MessageBox.confirm("请确认", "确定删除吗？",
                            function(button, text) {
                                if (button == 'yes') {
                                    var url = "/XJManager/base/deleteStation.do";
                                    var param = "";
                                    for (var i = 0; i < record.length; i++) {
                                        param = param + record[i].get("station.sId") + "-";
                                    }
                                    Ext.Ajax.request({
                                        url: url,
                                        params: {
                                            'ids': param
                                        },
                                        method: 'POST',
                                        success: function(response, options) {
                                            Ext.MessageBox.alert('成功', '删除成功');
                                            staStore.reload();

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
            },'-', {
                text:'详细信息',
                tooltip:'detailed',
                iconCls:'detailed',
                 listeners: {
						click: function() { 
							var win;
							var searchForm1 = Ext.create('Ext.form.Panel', {
								region: 'west',
								plain: true,
								border: 0,
								bodyPadding: 5,
								width: 880,
								layout: 'form',
								url: '',
								fieldDefaults: {
									labelWidth: 70,
									anchor: '100%'
								},
								items: [{
										layout: 'column',
										frame: true,
										items: [{
											xtype: 'textfield',
											fieldLabel: '车站编号',
											disabled:true,
											name: 'station.sSort'
											
										}, {
											xtype: 'textfield',
											fieldLabel: '&nbsp&nbsp&nbsp车站名称',
											disabled:true,
											name: 'station.sName'
										}, {
											xtype: 'textfield',
											fieldLabel: '&nbsp&nbsp&nbsp省',
											disabled:true,
											name: 'province.pName'
										}],

									}, {
										layout: 'column',
										frame: true,
										items: [{
											xtype: 'textfield',
											fieldLabel: '地市',
											disabled:true,
											name: 'station.sCity'
										}, {
											xtype: 'textfield',
											fieldLabel: '&nbsp&nbsp&nbsp铁路局',
											disabled:true,
											name: 'stationadmin.adminName'
										}, {
											xtype: 'textfield',
											id:'Railwaysbureau',
											fieldLabel: '&nbsp是否火车站',
											disabled:true,
											name: 'station.sRailwaysbureau'
										}, ],
									}, {
										layout: 'column',
										frame: true,
										items: [{
											xtype: 'textfield',
											id:'Departurestation',
											fieldLabel: '是否发站',
											disabled:true,
											name: 'station.sDeparturestation'
										}, {
											xtype: 'textfield',
											id:'Mouth',
											fieldLabel: '&nbsp&nbsp&nbsp是否过口',
											disabled:true,
											name: 'station.sMouth'
										},
										{
											xtype: 'textfield',
											fieldLabel: '&nbsp&nbsp&nbsp里程',
											disabled:true,
											name: 'station.sMileage'
										}],
									},
									{
										layout: 'column',
										frame: true,
										items: [{
											xtype: 'textfield',
											fieldLabel: '运价',
											disabled:true,
											name: 'station.sFreight'
										}],
									},
									{
										layout: 'column',
										frame: true,
										items: [{
											xtype: 'textarea',
											fieldLabel: '备注',
											width: 600,
											disabled:true,
											name: 'station.sRemark'
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
											}]
									}
								],

							});
							 var record = stationGrid.getSelectionModel().getSelection();
		                        if (record == undefined || record == '') {
		                            Ext.Msg.alert('信息', '请选择一条数据');
		                            return;
		                        }
		                        if (record.length >= 2) {
		                            Ext.Msg.alert('信息', '只可以选择一条数据');
		                            return;
		                        }
		                        searchForm1.getForm().loadRecord(record[0]);
		                        
		                        if(Ext.getCmp('Railwaysbureau').getValue() == 1){
		                        	Ext.getCmp('Railwaysbureau').setValue("是");
		                        }else{
		                        	Ext.getCmp('Railwaysbureau').setValue("否");
		                        }
		                        if(Ext.getCmp('Departurestation').getValue() == 1){
		                        	Ext.getCmp('Departurestation').setValue("是");
		                        }else{
		                        	Ext.getCmp('Departurestation').setValue("否");
		                        }
		                        if(Ext.getCmp('Mouth').getValue() == 1){
		                        	Ext.getCmp('Mouth').setValue("是");
		                        }else{
		                        	Ext.getCmp('Mouth').setValue("否");
		                        }
		                        
							var searchFormcanshu = Ext.create('Ext.grid.Panel', {
								//grid 的标题

								//引入仓库
								store:staStore,
								//引入选择框
								//定义列
								columns: [{
										id: 'sid',
										text: '车流编号',
										sortable: true,
										//与定义的类中的属性匹配
										dataIndex: 'sId',
										flex: 0,
										width: 220,
										//鼠标点击时能够编辑
										editor: {
											allowBlank: false
										}
									}, {
										text: '车流名称',
										sortable: true,
										dataIndex: 'sName',
										width: 220,
										//鼠标点击时能够编辑
										editor: {
											allowBlank: false
										}
									}, {
										text: '站顺',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 220,
										editor: {
											allowBlank: false
										}
									},
									{
										text: '备注',
										sortable: true,
										dataIndex: 'sourceCompanyid',
										width: 220,
										editor: {
											allowBlank: false
										}
									}

								],

								// 保存和取消按钮

								//table边框的设定
								stripeRows: true,
								height: 200,
								width: 900,
								frame: false,

							});
							Ext.History.init();
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
												title: '所属车流',
												activeTab: 0,
												padding: 5,
												border: true,
												plain: true,
												defaults: {
													padding: 10
												},
												items: [{
													title: '车流',
													items: [searchFormcanshu],
												}],
												
											},
										],
										
									});
							win = Ext.create("Ext.window.Window", {
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
										modal: true,
										plain: true,
										autoScroll: true,
										items: [{
											region: 'north',
											title: '详细信息',
											items: [searchForm1],
											width: 200,
											split: true,
											//是否可缩小
											floatable: false,
										},{
											region: 'north',
											items: [tab],
											width: 200,
											split: true,
											floatable: false,
											autoScroll: true
										}]
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
            store: staStore,
            displayInfo: true,
            plugins: Ext.create('Ext.ux.ProgressBarPager', {})
        }),
    });
    //将table放入制定的div中
    stationGrid.render('grid-example');
	panelnew.render('grid-example');
	staStore.load();
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
