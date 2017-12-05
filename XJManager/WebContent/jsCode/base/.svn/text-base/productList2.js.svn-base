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
    'Ext.ux.FieldReplicator',
    'Ext.selection.CheckboxModel',
    'Ext.ux.RowExpander',
    'Ext.selection.CellModel',
    'Ext.ux.CheckColumn',
    'Ext.state.*',
    'Ext.form.*',
    'Ext.window.*',
    'Ext.tab.*',
    'Ext.toolbar.*',
    'Ext.layout.*',
]);

Ext.onReady(function(){
	// register model
	//相当于定义了一个company 类
	Ext.define('BProducts', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [		         
				  {name: 'products.pId' ,type: 'Integer'},
				  {name: 'coName', type: 'string'},
				  {name: 'ctName', type: 'string'},
				  {name: 'products.pCoaltype', type: 'Integer'},
				  {name: 'products.pName', type: 'string'},
				  {name: 'products.pVarieties', type: 'Integer'},
				  {name: 'varieties', type: 'string'},
				  {name: 'products.pMeasurementunit', type: 'string'},
				  {name: 'products.pProductionunit', type: 'Integer '},
				  {name: 'products.pApplicationrange', type: 'Integer'},
				  {name: 'applicationrange', type: 'string'},
				  {name: 'products.pAvailability', type: 'Integer'},
				 ]    
     
	});    
    //初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
    Ext.tip.QuickTipManager.init();
    /*debugger;*/
    //想当于一个仓库 存储各种对像的
    var store = Ext.create('Ext.data.Store', {
        model: 'BProducts',
        remoteSort: true,
        getMethod: function(){ return 'POST'; },//亮点，设置请求方式,默认为GET 
        //每页显示的数据
        pageSize: 5,
        proxy: {
        	type: "ajax",  
            url: '/XJManager/base/productList.do',  
            /*data:'jsonList',*/
            reader: {  
                type: "json",
                root: "applicationrange"  
            }
        },
        	  autoLoad:true  
        	
        
       /* autoLoad: true */ 
    });
    
    //定义编辑属性
   /* var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
    	//鼠标点击两次 出现编辑
        clicksToEdit: 2
    });*/
    
    var sm = Ext.create('Ext.selection.CheckboxModel');

    /*********************创建window弹窗表单开始***********************/
	var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
	var c = new Ext.Window({
		  autoHight : true,
		  modal : true,
		  /*closeAction:hide,*/
		  items : [],  // 这里面放你的表单。 
		  closeAction : 'close',//这里写成 'hide' 
		     /***********************表单设计结束*********************/
      		           buttons : [
		            		  {
		            		   text : "保存",
		            		   iconCls : "btn-save",
		            		   handler : function() {
		            			   proForm.submit({
		            				   success:function(){
		            					   proForm.hide();
		            				   },
		            			   	   failure:function(){
		            			   		   Ext.Msg.alert('添加失败','添加失败,请重试!');
		            			   	   }
		            			   });
		            		   }
		            		  },
		            		  {
		            		   text : "重置",
		            		   iconCls : "reset",
		            		   handler : function() { 
		            		   }
		            		  }]
		            		 });
    /***********************表单设计开始*********************/
    var proForm = Ext.create('Ext.form.Panel', {
        plain: true,
        border: 0,
        bodyPadding: 5,
        width:320,
        title:'产品添加',
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

        items: [
                    { 	
             	    xtype: 'textfield',
             	    fieldLabel: '产品编号',              		                    	   
                    afterLabelTextTpl: required,//必填项的标识
                    //pId
                    id:'products.pId',
                    name : 'products.pId',// name只是改下拉的名称   
                    triggerAction : 'all',// 显示所有下列数据，一定要设置属性triggerAction为all
                    allowBlank: false,              	                          
                    tooltip: '填入产品编号'
                	},
                	{ 	
                		xtype: 'textfield',
                		fieldLabel: '产品名称',
                		//必填项
                		afterLabelTextTpl: required,
                		//pName
                		name: 'products.pName',
                		allowBlank: false,
                		tooltip: '填入产品编号'
                	},
                	
                	
           {
            xtype: 'combo',
            store: Ext.create('Ext.data.ArrayStore', {
         	   fields: [ 
         	             {name:'ctId',type:'string'},
         	   			 {name:'ctName',type:'string'} 
         	   ],
               root:'',
               autoload:true,
               proxy: {
               	type: "ajax",  
                   url: '/XJManager/base/coalTypeList.do',  
                   reader: {  
                       type: "json",
                       root: "coName"  
                   }
                  }
               }),
            triggerAction : 'all',
            //pCoaltype
            name: 'ctName',
            hiddenName : 'ctName',// 提交到后台的input的name ，对应下面store里的''id，必须要填
            emptyText : '-----请选择-----',
            //map中的键
            valueField:'ctId',
            //map中的值 
            displayField: 'ctName',
            //选中下拉框后再点击面板就会多出一行,不知道有卵子用
            /*plugins: [ Ext.ux.FieldReplicator ],*/
            fieldLabel: '煤种',
           /* queryMode: 'local',//数据模式,local代表本地数据模式*/            
            //tab键是否可以选择当前突出项
            selectOnTab: false,
            /****下拉框不可编辑*****/
 		    typeAhead:false,
 		    editable:false, 
            onReplicate: function(){
                this.getStore().clearFilter();
            }
        },  
        
        {
     		   xtype: 'combo',
     		   store: Ext.create('Ext.data.ArrayStore', {
     			   fields: [ {name:'pVarieties',type:'Integer'},
             	   			 {name:'Varieties',type:'string'} ],
     			   data: [
     			          ['1','动力煤'],
     			          ]
     		   }),
     		   	//pVarieties
     		    name: 'products.pVarieties',
                hiddenName : 'pVarieties',// 提交到后台的input的name ，对应下面store里的''id，必须要填
                emptyText : '-----请选择-----',
     		   //map中的键
     		   valueField:'pVarieties',
     		   //map中的值 
     		   displayField: 'Varieties',
     		  /* plugins: [ Ext.ux.FieldReplicator ],*/
     		   fieldLabel: '品种',
     		   queryMode: 'local',
     		   //tab键是否可以选择当前突出项
     		   selectOnTab: false,
     		   /****下拉框不可编辑*****/
     		   typeAhead:false,
     		   editable:false, 
     		   /****下拉框不可编辑*****/
     		   onReplicate: function(){
     			   this.getStore().clearFilter();
     		   }
     	   }, 
     	   
     		{ 	
           		xtype: 'textfield',
           		fieldLabel: '计量单位',
           		value:'吨',
           		//必填项
           		afterLabelTextTpl: required,
           		//pMeasurementunit
           		name: 'products.pMeasurementunit',
           		allowBlank: false,
           		tooltip: '填入产品编号'
           		},
     	   
           	{
           		xtype:"fieldcontainer" , 
           		layout:"hbox" , 
           		items:[
                         {
                        	 xtype:"textfield", 
                        	 fieldLabel:"部门", 
                        	 flex:1,
                        	 fieldLabel: '生产单位',
                        	 readOnly:'true', 
                        	 value:'',
                        	 //必填项
                   		     afterLabelTextTpl: required,
                   		     //pProductionunit
                   			 name: 'coName',
                   			 allowBlank: false,
                         } , 
                         {
                        	 xtype:"button", 
                        	 icon:'../../common/shared/icons/fam/search.png',
                        	 /************创建单位搜索框开始***********/
                        	 listeners:{
                                click:function(){
                                	  //创建一个grid
                                	    Ext.define('addcompany', {
                                	    extend: 'Ext.data.Model',
                                			 idProperty: '',
                                			 //定义类的属性
                                			 fields: [
                                			         {name: 'coId' ,type: 'string'},
                                			         {name: 'coShort', type: 'string'},
                                			         {name: 'coName', type: 'string'},
                                			         {name: 'coPhone', type: 'string'},
                                			         {name: 'coPostcode', type: 'integer'},
                                			         {name: 'coFax', type: 'string'},
                                			         {name: 'coLeader', type: 'string'},
                                			         {name: 'coAddress', type: 'string'},
                                			         {name: 'coLinkman', type: 'string'}
                                			         ]        
                                	    });
                                	    var addStore = Ext.create('Ext.data.Store', {
                                	        model: 'addcompany',
                                	        remoteSort: true,
                                	        getMethod: function()
                                	         { return 'POST'; },//亮点，设置请求方式,默认为GET         
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
                                	         	  autoLoad:true  
                                	     });
                                	//定义grid
                                	 var agrid = Ext.create('Ext.grid.Panel', {
                                		  id:'agrid',  
                                		  region:'east',
                                		  //grid 的标题
                                		  title:'单位列表',
                                		  //引入仓库
                                		  store:addStore,
                                		  loadMask:true, 
                                		  listeners:{  
                                			  itemdblclick:function(dataview, record, item, index, e){  
                                				  proForm.getForm().loadRecord(record);
                                				  newWin.hide();
                                			  }
                                		  },  
                                		  //定义列
                                		  columns:[
                                		           {
                                		        	   id:'coId',
                                		        	   text: '机构编号',
                                		        	   sortable: true,
                                		        	   //与定义的类中的属性匹配
                                		        	   dataIndex: 'coId',
                                		        	   flex: 0,
                                		        	   width: 75,
                                		           },{
                                		        	   text: '机构简称',
                                		        	   sortable: true,
                                		        	   dataIndex: 'coShort',
                                		        	   width: 75
                                		           },{
                                		        	   text: '机构全称',
                                		        	   sortable: true,
                                		        	   dataIndex: 'coName',
                                		        	   width: 75
                                		           },{
                                		        	   text: '联系电话',
                                		        	   sortable: true,
                                		        	   dataIndex: 'coPhone',
                                		        	   width: 75
                                		           },{
                                		        	   text: '邮政编码',
                                		        	   sortable: true,
                                		        	   dataIndex: 'coPostcode',
                                		        	   width: 75
                                		           },{
                                		        	   text: '传真',
                                		        	   sortable: true,
                                		        	   dataIndex: 'coFax',
                                		        	   width: 75
                                		           },{
                                		        	   text: '负责人',
                                		        	   sortable: true,
                                		        	   dataIndex: 'coLeader',
                                		        	   width: 75
                                		           },{
                                		        	   text: '地址',
                                		        	   sortable: true,
                                		        	   dataIndex: 'coAddress',
                                		        	   width: 75
                                		           },{
                                		        	   text: '联系人',
                                		        	   sortable: true,
                                		        	   dataIndex: 'coLinkman',
                                		        	   width: 75
                                		           }
                                		           ],
                                		           stripeRows: true,
                                		           height:320,
                                		           width:1200,
                                		           frame:false,
                                	 });
                                	    //创建一个搜索表单
                                	    var searchForm =  Ext.create('Ext.form.Panel', {
                                	    	   region:'west',
                                	             plain: true,
                                	             border: 0,
                                	             bodyPadding: 5,
                                	             width:200,
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
                                	             items: [
                                	                 {
                                	               id:'id',
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
                                	              	   name:'coPhone',
                                	              	   id:'phone'
                                	                 },
                                	                 {
                                	              	   xtype: 'textfield',
                                	              	   fieldLabel: '机构传真',
                                	              	   name:'coFax',
                                	              	   id:'fax'
                                	                 },
                                	                 {
                                	              	   xtype: 'textfield',
                                	              	   fieldLabel: '机构邮编',
                                	              	   name:'coPostcode',
                                	              	   id:'postcode'
                                	                 },
                                	                 {
                                	              	   xtype: 'textfield',
                                	              	   fieldLabel: '机构负责人',
                                	              	   name:'coLeader',
                                	              	   id:'leader'
                                	                 }
                                	              ],
                                				
                                	             buttons : [
                                	    		  {
                                	    		   text : "搜索",
                                	    		   iconCls : "btn-save",
                                	    		   handler : function() {
                                	    			   var url = '/XJManager/base/companyList.do?1=1'
                                	    			   var id = Ext.getCmp('id').getValue();
                                	    			   var short = Ext.getCmp('short').getValue();
                                	    			   var phone = Ext.getCmp('phone').getValue();
                                	    			   var fax = Ext.getCmp('fax').getValue();
                                	    			   var postcode = Ext.getCmp('postcode').getValue();
                                	    			   var leader = Ext.getCmp('leader').getValue();
                                	    			   if(id != ''){
                                	    				   url = url + '&coId='+id;
                                	    			   }
                                	    			   if(short != ''){
                                	    				   url = url + '&coShort='+short;
                                	    			   }
                                	    			   if(phone != ''){
                                	    				   phone = url + '&coPhone='+phone;
                                	    			   }
                                	    			   if(fax != ''){
                                	    				   url = url + '&coFax='+fax;
                                	    			   }
                                	    			   if(postcode != ''){
                                	    				   url = url + '&coPostcode='+postcode;
                                	    			   }
                                	    			   if(leader != ''){
                                	    				   url = url + '&coLeader='+leader;
                                	    			   }
                                	    			   
                                	    			   addStore.getProxy().url = url; 
                                	    			   addStore.load(); 
                                	    		   }
                                	    		   },
                                	    		  {
                                	    		   text : "重置",
                                	    		   iconCls : "reset",
                                	    		   handler : function() {
                                	    			   this.up('form').getForm().reset();
                                	    		   }
                                	    		  }]
                                	    		 });
                                	    
                              
                                	
                            
                                	var newWin =  Ext.create("Ext.window.Window",{  
                                     title:'搜索',  
                                     closable: true,
                                     closeAction: 'hide',
                                     width: 600,
                                     minWidth: 350,
                                     height: 320,
                                     tools: [{type: 'pin'}],
                                     layout: {
                                    	 type: 'border',
                                    	 padding: 5
                                     },
                                     constrain:true,  
                                     //模态窗体  
                                     modal:true,  
                                     //模态窗体  
                                     plain:true,  
                                     //滚动条设置  
                                     autoScroll:true,      
                                     items:[
                                            {
                                            	region: 'west',
                                            	title:'部门搜索',
                                            	items:[searchForm],
                                            	width: 200,
                                            	split: true,
                                            	//是否可缩小
                                            	collapsible: true,
                                            	floatable: false
                                            },
                                            {
                                            	region: 'center',
                                            	items:[agrid],
                                            	width: 200,
                                            	split: true,
                                            	floatable: false,
                                            	autoScroll:true
                                            }
                                        ]
                                 }).show(); 
                                	 
                                	 
                               }
                            }
                      /************创建单位搜索框结束***********/
                         }        
                      ]} ,
                      
		          {
             xtype: 'combo',
             store: Ext.create('Ext.data.ArrayStore', {
          	   fields: [  {name: 'pApplicationrange' ,type: 'Integer'},
                          {name: 'applicationrange', type: 'string'}, ],
                 data: [
                        ['1','生产'],
                        ['2','产销'],
                        ['3','销售'],
                       ]
             }),
             //applicationrange
             name: 'products.pApplicationrange',
             hiddenName : 'pApplicationrange',// 提交到后台的input的name ，对应下面store里的''id，必须要填
             emptyText : '-----请选择-----',
             valueField:'pApplicationrange',
             displayField: 'applicationrange',
             fieldLabel: '适用范围',
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
         	   fields: [ {name: 'pAvailability',type: 'Integer'},
                         {name: 'availability', type: 'string'}],
                data: [
                       	['1','是'],
                       	['2','否'],
                       ]
            }),
            
            name: 'products.pAvailability',
            hiddenName : 'pAvailability',// 提交到后台的input的name ，对应下面store里的''id，必须要填
            emptyText : '-----请选择-----',
            valueField:'pAvailability',
            displayField: 'availability',
            fieldLabel: '可用',
            queryMode: 'local',//数据模式,local代表本地数据模式
            selectOnTab: false,
 		   typeAhead:false,
 		   editable:false, 
            onReplicate: function(){
                this.getStore().clearFilter();
            }
        },  
        {
        	xtype: 'textfield',
        	name: 'coId',
        	hidden: true,
        	hideLabel:true
        	},
     	   {
            xtype: 'textarea',
            fieldLabel: '备注',
            hideLabel: false,
            name: 'remark',
            style: 'margin:0', // Remove default margin
            flex: 1  // Take up all *remaining* vertical space
        }]
        
    })
    
    //定义grid
    var grid = Ext.create('Ext.grid.Panel', {
    	
    	
    	//grid 的标题
        title:'产品信息管理',
        idField:'pId',
        //引入仓库
        store: store,
        selModel: sm,
        stripeRows:true,
        height:320,
        width:1200,
        frame:false,
        //定义列
        columns: [{
            id:'pId',
            text: '产品编号',
            sortable: true,
            //与定义的类中的属性匹配
            dataIndex: 'products.pId',
            flex: 0,
            width: 75,
            //鼠标点击时能够编辑
            editor: {
                allowBlank: false
            }
        },{
            text: '产品名称',
            sortable: true,
            dataIndex: 'products.pName',
            width: 75,
            //鼠标点击时能够编辑
            editor: {
                allowBlank: false
            }
        },{
            text: '煤种',
            sortable: true,
            dataIndex: 'ctName',
            width: 75,
            editor: {
                allowBlank: false
            }
        },
        {
            text: '品种类型',
            sortable: true,
            dataIndex: 'varieties',
            width: 75,
            editor: {
                allowBlank: false
            }
        },{
            text: '生产单位',
            sortable: true,
            dataIndex: 'coName',
            width: 75,
            editor: {
                allowBlank: false
            }
        },{
            text: '应用范围',
            sortable: true,
            dataIndex: 'applicationrange',
            width: 75,
            editor: {
                allowBlank: false
            }
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
        dockedItems: [ //各种按钮布局
                       {
                           xtype: 'toolbar',
                           items: [{
                               text:'添加',
                               tooltip:'add',
                               iconCls:'add',
                               listeners : {
                                   'click' : function() {
                                   	proForm.form.reset();
                                   	c.add(proForm);
                               		c.show();
                                   }
                               }
                           },'-',{
                               text:'修改',
                               tooltip:' edit',
                               iconCls:'edit',
                               listeners : {
                                   'click' : function() {
                                   	var record = grid.getSelectionModel().getSelection();
                                   	if(record == undefined || record == ''){
                                   		Ext.Msg.alert('信息','请选择一条数据');
                                   		return;	
                                   	}
                                   	if(record.length >= 2){
                                   		Ext.Msg.alert('信息','只可以选择一条数据');
                                   		return;	
                                   	}
                                   	c.add(proFormn);
                               		c.show();
                               		proForm.getForm().loadRecord(record[0]); 
                               		
                               		grid.getSelectionModel().clearSelections();
                               		grid.getView().refresh();
                                   }
                                   	
                               }
                           },'-',{
                               itemId: 'removeButton',
                               text:'删除',
                               tooltip:'remove',
                               iconCls:'remove',
                               disabled: true
                           },'-', {
                               text:'详细信息',
                               tooltip:'detailed',
                               iconCls:'detailed'
                           },{
                        	   bbar:Ext.create('Ext.PagingToolbar', {
                                   pageSize: 10,
                                   store: store,
                                   displayInfo: true,
                                   plugins: Ext.create('Ext.ux.ProgressBarPager', {})
                               })  
                           },
     ]}]
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
