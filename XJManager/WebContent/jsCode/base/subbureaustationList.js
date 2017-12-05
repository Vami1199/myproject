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
	// register model
	//相当于定义了一个company 类
	Ext.define('Subbureau', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [	
		         {name: 'railwaysubbureau.subbureauId' ,type: 'Integer'},
		         {name: 'railwaysubbureau.subbureauName', type: 'String'},
		         {name: 'railwaysubbureau.subbureauAdminid', type: 'Integer'},
		         {name: 'railwaysubbureau.subbureauIskey', type: 'Byte'},
		         {name: 'showKey', type: 'string'},
		         {name: 'railwayadmin.adminName',type:'string'},
		         {name: 'railwaysubbureau.subbureauRemark', type: 'string'}
		         ]        
	});

    
    //初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
    Ext.tip.QuickTipManager.init();
    
    //想当于一个仓库 存储各种对像的
    var subStore = Ext.create('Ext.data.Store', {
        model: 'Subbureau',
        remoteSort: true,
        //每页显示的数据
        pageSize: 5,
        proxy: {
            type: "ajax",
            url: '/XJManager/base/subbureaustationList.do',
            reader: {
                type: "json",
                root: "queryList",
                totalProperty: 'totalCount'
            }
        }
    });
    //定义选择框
    var sm = Ext.create('Ext.selection.CheckboxModel');
    
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
                        proForm.hide();
                        c.hide();
                        subStore.reload();
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
			items : [ {
				xtype : "numberfield",
				id:'formSid',
				fieldLabel : "铁路分局编号",
				flex : 1,
				afterLabelTextTpl : required,
				name : 'railwaysubbureau.subbureauId',
				allowBlank : false,
			}]
		},
		{
			xtype : 'textfield',
			fieldLabel : '铁路分局名称',
			afterLabelTextTpl : required,
			name : 'railwaysubbureau.subbureauName',
			allowBlank : false,
			tooltip : '填入产品编号'
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
                    type: 'string'
                }],
                root: '',
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
            name: 'railwaysubbureau.subbureauAdminid',
            hiddenName : 'railwaysubbureau.subbureauAdminid',
            id:'adminId',
            emptyText : '-----请选择-----',
            valueField:'adminId',
            displayField: 'adminName',
            fieldLabel: '铁路局',
            selectOnTab: false,
            typeAhead:false,
            editable:false, 
            afterLabelTextTpl : required,
            onReplicate: function(){
                this.getStore().clearFilter();
            }
        },
		{
             xtype: 'combo',
             store: Ext.create('Ext.data.ArrayStore', {
          	   fields: [{
                   name: 'isKeyId',
                   type: 'Integer'
               },
               {
                   name: 'isKeyValue',
                   type: 'string'
               }],
                 data: [
                     [1,'是'],
                     [0,'否'],
                 ]
             }),
             id:'keyId',
             name: 'railwaysubbureau.subbureauIskey',
             hiddenName : 'railwaysubbureau.subbureauIskey',
             emptyText : '-----请选择-----',
             valueField:'isKeyId',
             displayField: 'isKeyValue',
             fieldLabel: '是否是关键分局',
             queryMode: 'local',
             selectOnTab: false,
             typeAhead:false,
             editable:false, 
             onReplicate: function(){
                 this.getStore().clearFilter();
             },
         },  
		 {
			xtype : 'textarea',
			fieldLabel : '备注',
			hideLabel : false,
			name : 'railwaysubbureau.subbureauRemark',
			style : 'margin:0', 
			flex : 1
		} ]
	});

    //定义grid
    var subGrid = Ext.create('Ext.grid.Panel', {
    	id:'sGrid',
        title:'铁路分局管理',
        store:subStore,
        selModel: sm,
        columns:[{
            id:'subbureauId',
            text: '铁路分局编号',
            sortable: true,
            dataIndex: 'railwaysubbureau.subbureauId',
            flex: 0,
            width: 75,
        },{
            text: '铁路分局名称',
            sortable: true,
            dataIndex: 'railwaysubbureau.subbureauName',
            width: 75,
        },{
        	text: '铁路局',
        	sortable: true,
        	dataIndex: 'railwayadmin.adminName',
        	width: 75,
        },{
        	hidden:true,
            sortable: true,
            dataIndex: 'railwaysubbureau.subbureauAdminid',
            width: 75,
        },
        {
        	id:'isKey',
            sortable: true,
            dataIndex: 'railwaysubbureau.subbureauIskey',
            width: 75,
            hidden:true,
        },{
        	id:'showKey',
        	text: '是否关键分局',
        	dataIndex:'showKey',
        	sortable: true,
        	width: 75,
       	},{
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
                                    var id = rec.get('railwaysubbureau.subbureauId');
                                    Ext.Ajax.request({
                                        url: '/XJManager/base/deleteSubbureau.do',
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
                                    subStore.removeAt(rowIndex);
                                }
                            });
                        }
             }]
        }],
            
        dockedItems: [
        {
            xtype: 'toolbar',
            items: [{
            	text:'添加',
            	tooltip:'add',
            	iconCls:'add',
            	 listeners: {
                     'click': function() {
                         Ext.getCmp('formSid').setReadOnly(false);
                         proForm.show();
                         c.add(proForm);
                         proForm.getForm().reset();
                         Ext.getCmp('keyId').setValue(1);
                         proForm.getForm().url = '/XJManager/base/addSubbureau.do';
                         c.show();
                     }
                 }
            }, '-',{
                text:'修改',
                tooltip:' edit',
                iconCls:'edit',
                listeners : {
                    'click' : function() {
                    	var record = subGrid.getSelectionModel().getSelection();
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
                		c.show();
                		proForm.getForm().loadRecord(record[0]);
                		Ext.getCmp('formSid').setReadOnly(true);
                		//设置下拉框的显示值
                		Ext.getCmp('keyId').setValue(record[0].get('railwaysubbureau.subbureauIskey'));
                		proForm.getForm().url = '/XJManager/base/updateSubbureau.do';
                		subGrid.getSelectionModel().clearSelections();
                		subGrid.getView().refresh();
                    }
                    	
                }
                
            },'-',{
                itemId: 'removeButton',
                text:'删除',
                tooltip:'remove',
                iconCls:'remove',
                listeners: {
                    'click': function() {
                        var record = subGrid.getSelectionModel().getSelection();
                        if (record == undefined || record == '') {
                            Ext.Msg.alert("错误", "请选择至少一条数据");
                            return;
                        } else {
                            Ext.MessageBox.confirm("请确认", "确定删除吗？",
                            function(button, text) {
                                if (button == 'yes') {
                                    var url = "/XJManager/base/deleteSubbureau.do";
                                    var param = "";
                                    for (var i = 0; i < record.length; i++) {
                                        param = param + record[i].get("railwaysubbureau.subbureauId") + "-";
                                    }
                                    Ext.Ajax.request({
                                        url: url,
                                        params: {
                                            'ids': param
                                        },
                                        method: 'POST',
                                        success: function(response, options) {
                                            Ext.MessageBox.alert('成功', '删除成功');
                                            subStore.reload();
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
                		var record = subGrid.getSelectionModel().getSelection();
                        if (record == undefined || record == '') {
                            Ext.Msg.alert('信息', '请选择一条数据');
                           
                        }
                        if (record.length >= 2) {
                            Ext.Msg.alert('信息', '只可以选择一条数据');
                            
                        }else{
                        	
     						var win;
     						var searchForm2 = Ext.create('Ext.form.Panel', {
     							region: 'west',
     							plain: true,
     							border: 0,
     							bodyPadding: 5,
     							width: 880,
     							url: '',
     							fieldDefaults: {
     								labelWidth: 70,
     								anchor: '100%'
     							},
     							layout: {
     								type: 'vbox',
     								align: 'stretch' 
     							},
     	
     							items: [
     							{
     									xtype: 'numberfield',
     									fieldLabel: '铁路分局编号',
     									name:'railwaysubbureau.subbureauId',
     									readOnly:true
     							},
     							{
     									xtype: 'textfield',
     									fieldLabel: '铁路分局名称',
     									readOnly:true,
     									name:'railwayadmin.adminName'
     							},
     							{
     									xtype: 'textfield',
     									fieldLabel: '是否关键分局',
     									readOnly:true,
     									name:'showKey'
     							},
     							{
     									xtype: 'textarea',
     									fieldLabel: '备注',
     									readOnly:true,
     									name:'railwaysubbureau.subbureauRemark'
     								}
     	
     							],
     	
     						});
     					
     					Ext.History.init();
     					searchForm2.getForm().loadRecord(record[0]);
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
     									items: [searchForm2],
     									width: 200,
     									split: true,
     									//是否可缩小
     									floatable: false,
     								}]
     					}).show();
                    }
				}
			}
            }]
       }],
        stripeRows: true,
        height:320,
        width:1200,
        frame:false,
        bbar: Ext.create('Ext.PagingToolbar', {
            pageSize: 10,
            store:subStore,
            displayInfo: true,
            plugins: Ext.create('Ext.ux.ProgressBarPager', {})
        }),
        
    });
	
	
	
	   
	
	



    //将table放入制定的div中
	subGrid.render('grid-example');
    //重新提交新的参数请求数据；
	subStore.load();
});



















/***********************************************************************************************/
/***********************************************************************************************/

