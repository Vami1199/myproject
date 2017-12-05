Ext.Loader.setConfig({
	enabled : true
});

//设置路径
Ext.Loader.setPath('Ext.ux', '../../common/ux/');

//定义需要的插件
Ext.require([ 'Ext.data.*', 'Ext.grid.*', 'Ext.util.*',
		'Ext.tip.QuickTipManager', 'Ext.ux.data.PagingMemoryProxy',
		'Ext.ux.ProgressBarPager', 'Ext.selection.CheckboxModel',
		'Ext.ux.RowExpander', 'Ext.selection.CellModel', 'Ext.ux.CheckColumn',
		'Ext.state.*', 'Ext.form.*' ]);

Ext.onReady(function() {
			// register model
			//相当于定义了一个company 类
			Ext.define('Start', {
				extend : 'Ext.data.Model',
				idProperty : '',
				//定义类的属性
				fields : [ {
					name : 'start.startId',
					type : 'integer'
				},{
					name : 'start.startStationid',
					type : 'integer'
				},{
					name : 'start.startSourceid',
					type : 'integer'
				},{
					name : 'start.startName',
					type : 'string'
				},{
					name : 'start.remarks',
					type : 'string'
				},{
					name : 'source.sourceName',
					type : 'string'
				}]
			});

			//初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
			Ext.tip.QuickTipManager.init();

			//想当于一个仓库 存储各种对像的
			var sStore = Ext.create('Ext.data.Store', {
				model : 'Start',
				remoteSort : true,
				//每页显示的数据
				pageSize : 5,
				proxy : {
		            type: "ajax",
		            url: '/XJManager/base/startList.do',
		            getMethod: function() {
						return 'POST';
					}, 
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
				items : [], // 这里面放你的表单。 
				closeAction : 'close',//这里写成 'hide' 
				buttons : [ {
					text : "保存",
					iconCls : "btn-save",
					handler : function() {
		                proForm.submit({
		                    success: function() {
		                        c.hide();
		                        sStore.reload();
		                    },
		                    failure: function(proForm, action) {
		                    	var data = Ext.decode(action.response.responseText);
		                        Ext.Msg.alert('失败',data.msg);
		                    }
		                });
					}
				}, {
					text : "重置",
					iconCls : "reset",
					handler : function() {
						proForm.getForm().reset();
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
				url : '/base/addStart.do',
				//默认设置
				fieldDefaults : {
					labelWidth : 70,
					anchor : '100%'
				},
				//布局,vbox是竖排,hbox是横排
				layout : {
					type : 'vbox',
					align : 'stretch' // Child items are stretched to full width
				},

				items : [ {
					xtype : "fieldcontainer",
					layout : "hbox",
					items : [ 
					{
					    xtype : "textfield",
					    hidden:true,
					    name:'station.sSort'
					},{
						xtype : "textfield",
						fieldLabel : "发站",
						flex : 1,
						afterLabelTextTpl : required,
						name : 'station.sName',
						allowBlank : false,
						readOnly:true
					}, {
						xtype : "button",
						icon : '../../common/shared/icons/fam/search.png',
						/************创建单位搜索框开始***********/
						listeners : {
							click : function() {
								//创建一个搜索表单
								var searchForm = Ext.create('Ext.form.Panel', {
									region : 'west',
									plain : true,
									border : 0,
									bodyPadding : 5,
									width : 200,
									url : '',
									fieldDefaults : {
										labelWidth : 70,
										anchor : '100%'
									},
									layout : {
										type : 'vbox',
										align : 'stretch' // Child items are stretched to full width
									},
									items : [ {
										xtype : 'textfield',
										fieldLabel : '车站编号',
										name : 'station.sSort'
									}, {
										xtype : 'textfield',
										fieldLabel : '车站名称',
										name : 'station.sName'
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
						             },  
									{
										xtype : 'textfield',
										fieldLabel : '市县',
										name:'station.sCity'
									}],

									buttons : [ {
										text : "搜索",
										iconCls : "btn-save",
										handler : function() {
		                                    var url = '/XJManager/base/stationList.do?1=1';
		                                    	var all = searchForm.getForm().getValues();
		                                        var staId = all['station.sSort'];
		                                        var staName = all['station.sName'];
		                                        var staIsSb = all['station.sRailwaysbureau'];
		                                        var staIsDe = all['station.sDeparturestation'];
		                                        var staPro = all['station.sProvince'];
		                                        var staCity = all['station.sCity'];
		                                        if (staId != '') {
		                                            url = url + '&station.sSort=' + staId;
		                                        }
		                                        if (staName != '') {
		                                            url = url + '&station.sName=' + staName;
		                                        }
		                                        if (staIsSb != null) {
		                                        	url = url + '&station.sRailwaysbureau=' + staIsSb;
		                                        }
		                                        if (staIsDe != '') {
		                                            url = url + '&station.sDeparturestation=' + staIsDe;
		                                        }
		                                        if (staPro != '') {
		                                            url = url + '&station.sProvince=' + staPro;
		                                        }
		                                        if (staCity != '') {
		                                            url = url + '&station.sCity=' + staCity;
		                                        }
		                                        staStore.getProxy().url = url;
		                                        staStore.load();
		                                    }
									}, {
										text : "取消",
										iconCls : "reset",
										handler : function() {
											staWin.hide();
											searchForm.getForm().reset();
										}
									} ]
								});

								//创建一个grid
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
									         {name: 'station.sRailwaysbureau', type: 'integer'},
									         {name: 'station.sDeparturestation', type: 'integer'},
									         {name: 'stationadmin.adminName', type: 'String'},
									         {name: 'province.pName', type: 'String'},
									         ]        
								});

								//初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
								Ext.tip.QuickTipManager.init();

								//想当于一个仓库 存储各种对像的
								var staStore = Ext.create('Ext.data.Store', {
									model : 'Station',
									remoteSort : true,
									//每页显示的数据
									pageSize : 10,
									getMethod: function() {
								            return 'POST';
								    },
									proxy : {
							            type: "ajax",
							            url: '/XJManager/base/stationList.do',
							            reader: {
							                type: "json",
							                root: "queryList",
							                totalProperty: 'totalCount'
							            }
							        }
								});

								//定义grid
								var staGrid = Ext.create('Ext.grid.Panel', {
									region : 'east',
									//grid 的标题
									title : '列表',
									//引入仓库
									store : staStore,
									loadMask: true,
		                            listeners: {
		                                itemdblclick: function(dataview, record, item, index, e) {
		                                	proForm.getForm().loadRecord(record);
		                                	staWin.hide();
		                                }
		                            },
									//定义列
									columns : [ 
									{
										dataIndex : 'station.sId',
										hidden:true
									},{
										text : '车站编号',
										sortable : true,
										//与定义的类中的属性匹配
										dataIndex : 'station.sSort',
										flex : 0,
										width : 75,
									}, {
										text : '车站姓名',
										sortable : true,
										dataIndex : 'station.sName',
										width : 75
									}, {
										text : '是否发站',
										sortable : true,
										dataIndex : 'station.sRailwaysbureau',
										width : 75
									}, {
										text : '省份',
										sortable : true,
										dataIndex : 'province.pName',
										width : 75
									}, {
										text : '市县',
										sortable : true,
										dataIndex : 'station.sCity',
										width : 75
									}, {
										text : '铁路局',
										sortable : true,
										dataIndex : 'stationadmin.adminName',
										width : 75
									}],
									stripeRows : true,
									height : 520,
									width : 1200,
									frame : false,
								});
								var staWin = Ext.create("Ext.window.Window", {
									title : '搜索',
									closable : true,
									closeAction : 'hide',
									width : 700,
									minWidth : 350,
									height : 420,
									tools : [ {
										type : 'pin'
									} ],
									layout : {
										type : 'border',
										padding : 5
									},
									constrain : true,
									//模态窗体  
									modal : true,
									//模态窗体  
									plain : true,
									//滚动条设置  
									autoScroll : true,
									items : [{
										region : 'west',
										title : '搜索条件',
										items : [searchForm],
										width : 200,
										split : true,
										//是否可缩小
										collapsible : true,
										floatable : false
									}, {
										region : 'center',
										items : [staGrid],
										width : 200,
										split : true,
										floatable : false,
										autoScroll : true
									} ]
								}).show();
							}
						}
					/************创建单位搜索框结束***********/
					} ]
				},

				{
					xtype : "fieldcontainer",
					layout : "hbox",
					items : [{
						xtype : "textfield",
						fieldLabel : "矿别号",
						flex : 1,
						afterLabelTextTpl : required,
						name : 'source.sourceId',
						allowBlank : false,
						readOnly:true
					}, {
						xtype : "button",
						icon : '../../common/shared/icons/fam/search.png',
						/************创建单位搜索框开始***********/
						listeners : {
							click : function() {
								//创建一个搜索表单
								var companyForm = Ext.create('Ext.form.Panel', {
									region : 'west',
									plain : true,
									border : 0,
									bodyPadding : 5,
									width : 200,
									url : '',
									//默认设置
									fieldDefaults : {
										labelWidth : 70,
										anchor : '100%'
									},
									layout : {
										type : 'vbox',
										align : 'stretch' // Child items are stretched to full width
									},
									items : [ {
										xtype : 'textfield',
										fieldLabel : '矿别序号',
										name:'source.sourceId'
									}, {
										xtype : 'textfield',
										fieldLabel : '矿别名称',
										name:'source.sourceName'
									}, {
										xtype : 'textfield',
										fieldLabel : '单位编号',
										name:'source.sourceCompanyid'
									}],

									buttons : [ {
										text : "搜索",
										iconCls : "btn-save",
										handler : function() {
												var url = '/XJManager/base/sourceList.do?1=1';
		                                    	var companyAll = companyForm.getForm().getValues();
		                                        var souId = companyAll['source.sourceId'];
		                                        var souName = companyAll['source.sourceName'];
		                                        var souCom = companyAll['source.sourceCompanyid'];
		                                        if (souId != null) {
		                                            url = url + '&source.sourceId=' + souId;
		                                        }
		                                        if (souName != '') {
		                                            url = url + '&source.sourceName=' + souName;
		                                        }
		                                        if (souCom != '') {
		                                        	url = url + '&source.sourceCompanyid=' + souCom;
		                                        }

		                                        cStore.getProxy().url = url;
		                                        cStore.load();
		                                    }
									}, {
										text : "重置",
										iconCls : "reset",
										handler : function() {
										}
									} ]
								});

								//创建一个grid
								Ext.define('Source', {
							        extend: 'Ext.data.Model',
							        idProperty: '',
							        //定义类的属性
							        fields: [{
							            name: 'source.sourceId',
							            type: 'Integer'
							        },
							        {
							            name: 'source.sourceName',
							            type: 'string'
							        },
							        {
							            name: 'source.sourceCompanyid',
							            type: 'string'
							        },
							        {
							            name: 'source.sourceCompanyname',
							            type: 'string'
							        },
							        {
							            name: 'source.sourceCompanyshort',
							            type: 'string'
							        },
							        {
							            name: 'company.coName',
							            type: 'string'
							        },{
							            name: 'company.coShort',
							            type: 'string'
							        }]
							    });


								//初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
								Ext.tip.QuickTipManager.init();

								//想当于一个仓库 存储各种对像的
								var cStore = Ext.create('Ext.data.Store', {
									model : 'Source',
									remoteSort : true,
									//每页显示的数据
									pageSize : 10,
									proxy : {
							            type: "ajax",
							            url: '/XJManager/base/sourceList.do',
							            reader: {
							                type: "json",
							                root: "queryList",
							                totalProperty: 'totalCount'
							            }
							        }
								});

								//定义grid
								var cGrid = Ext.create('Ext.grid.Panel', {
									region : 'east',
									//grid 的标题
									title : '列表',
									//引入仓库
									store : cStore,
									loadMask: true,
		                            listeners: {
		                                itemdblclick: function(dataview, record, item, index, e) {
		                                	proForm.getForm().loadRecord(record);
		                                	comWin.hide();
		                                }
		                            },
									//定义列
									columns : [{
							            text: '顺序号',
							            sortable: true,
							            //与定义的类中的属性匹配
							            dataIndex: 'source.sourceId',
							            flex: 0,
							            width: 75,
							        },
							        {
							            text: '矿别名称',
							            sortable: true,
							            dataIndex: 'source.sourceName',
							            width: 75,
							        },
							        {
							            text: '单位编号',
							            sortable: true,
							            dataIndex: 'source.sourceCompanyid',
							            width: 75,
							        },
							        {
							            text: '单位全称',
							            sortable: true,
							            dataIndex: 'company.coName',
							            width: 75,
							        },
							        {
							            text: '单位简称',
							            sortable: true,
							            dataIndex: 'company.coShort',
							            width: 75,
							        },
							        ],
									stripeRows : true,
									height : 320,
									width : 1200,
									frame : false,
								});
								var comWin = Ext.create("Ext.window.Window", {
									title : '搜索',
									closable : true,
									closeAction : 'hide',
									width : 600,
									minWidth : 350,
									height : 320,
									tools : [ {
										type : 'pin'
									} ],
									layout : {
										type : 'border',
										padding : 5
									},
									constrain : true,
									//模态窗体  
									modal : true,
									//模态窗体  
									plain : true,
									//滚动条设置  
									autoScroll : true,
									items : [ {
										region : 'west',
										title : '搜索条件',
										items : [ companyForm ],
										width : 200,
										split : true,
										//是否可缩小
										collapsible : true,
										floatable : false
									}, {
										region : 'center',
										items : [ cGrid ],
										width : 200,
										split : true,
										floatable : false,
										autoScroll : true
									} ]
								}).show();
							}
						}
					/************创建单位搜索框结束***********/
					} ]
				},
				{
					xtype : 'textfield',
					fieldLabel : '矿别名称',
					afterLabelTextTpl : required,
					name : 'source.sourceName',
					allowBlank : false,
					readOnly:true
				},
				{
					xtype : 'textfield',
					fieldLabel : '单位简称',
					//必填项
					afterLabelTextTpl : required,
					//pName
					name : 'company.coName',
					allowBlank : false,
					readOnly:true
				}, {
					xtype : 'textfield',
					fieldLabel : '单位全称',
					//必填项
					afterLabelTextTpl : required,
					//pName
					name : 'company.coShort',
					allowBlank : false,
					readOnly:true
				},{
					xtype : 'textfield',
					name : 'start.startId',
					hidden:true
				},{
					xtype : 'textfield',
					name : 'station.sId',
					hidden:true
				}]

			});


			//定义grid
			var sGrid = Ext.create('Ext.grid.Panel',{
								title : '发站管理',
								//引入仓库
								store : sStore,
								//引入选择框
								selModel : sm,
								//定义列
								columns : [
								           {
											dataIndex : 'start.startId',
											hidden:true
										},{
											text : '发站',
											sortable : true,
											//与定义的类中的属性匹配
											dataIndex : 'start.startName',
											flex : 0,
											width : 75,
										},{
											text : '矿别号',
											sortable : true,
											dataIndex : 'start.startSourceid',
											width : 75,
										},
										{
											text : '单位全称',
											sortable : true,
											dataIndex : 'source.sourceName',
											width : 75,
										},
										{
											//定义每列数据删除按钮
											text : '快速删除',
											xtype : 'actioncolumn',
											title : '快速删除',
											width : 75,
											sortable : false,
											items : [ {
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
								                                    var id = rec.get('start.startId');
								                                    Ext.Ajax.request({
								                                        url: '/XJManager/base/deleteStart.do',
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
								                                    sStore.removeAt(rowIndex);
								                                }
								                            });
								                        }
								             } ]
										}

								],

								// 保存和取消按钮
								dockedItems : [
										//各种按钮布局
										{
											xtype : 'toolbar',
											items : [{
														text : '添加',
														tooltip : 'add',
														iconCls : 'add',
														listeners : {
															'click': function() {
															     proForm.getForm().reset();
										                         c.add(proForm);
										                         proForm.getForm().url = '/XJManager/base/addStart.do';
										                         proForm.show();
										                         c.show();
															}
														}
													},
													'-',
													{
														text : '修改',
														tooltip : ' edit',
														iconCls : 'edit',
														listeners : {'click':function(){
															var record = sGrid.getSelectionModel().getSelection();
															if(record == undefined || record == '') {
																Ext.Msg.alert('信息', '请选择一条数据');
																return;
															}
															if(record.length >= 2) {
																Ext.Msg.alert('信息', '只可以选择一条数据');
																return;
															}
															c.add(proForm);
															proForm.show();
															c.show();
															proForm.getForm().loadRecord(record[0]);
									                        proForm.getForm().url = '/XJManager/base/updateStart.do';
															sGrid.getSelectionModel().clearSelections();
															sGrid.getView().refresh();
														}
													}
													},
													'-',
													{
														itemId : 'removeButton',
														text : '删除',
														tooltip : 'remove',
														iconCls : 'remove',
														listeners:{
										                    'click': function() {
										                        var record = sGrid.getSelectionModel().getSelection();
										                        if (record == undefined || record == '') {
										                            Ext.Msg.alert("错误", "请选择至少一条数据");
										                            return;
										                        } else {
										                            Ext.MessageBox.confirm("请确认", "确定删除吗？",
										                            function(button, text) {
										                                if (button == 'yes') {
										                                    var url = "/XJManager/base/deleteStart.do";
										                                    var param = "";
										                                    for (var i = 0; i < record.length; i++) {
										                                        param = param + record[i].get("start.startId") + "-";
										                                    }
										                                    Ext.Ajax.request({
										                                        url: url,
										                                        params: {
										                                            'ids': param
										                                        },
										                                        method: 'POST',
										                                        success: function(response, options) {
										                                        	sStore.load();
										                                            Ext.MessageBox.alert('成功', '删除成功');
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
													}]
										} ],

								//table边框的设定
								stripeRows : true,
								height : 320,
								width : 'auto',
								frame : false,
								bbar : Ext.create('Ext.PagingToolbar', {
									pageSize : 10,
									store : sStore,
									displayInfo : true,
									plugins : Ext.create('Ext.ux.ProgressBarPager', {})
								}),
							});

			//将table放入制定的div中
			sGrid.render('grid-example');
			//重新提交新的参数请求数据；
			sStore.load();
		});

/***********************************************************************************************/
/***********************************************************************************************/
