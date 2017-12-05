/**
 * 定义Portlet对象，即包含在column中的具体组件的默认形式
 */
Ext.define("com.fb.portal.Portlet", {
			extend : "Ext.panel.Panel",
			alias : "myPortlet",
			layout : "fit", // 在Fit布局中，子元素将自动填满整个父容器。注意：在fit布局下，对其子元素设置宽度是无效的。如果在fit布局中放置了多个组件，则只会显示第一个子元素
			portletId:'0',  // portlet对应在数据库中的唯一标识，默认为0，在portlet界面初始化时对其进行初始赋值
			functionId:'0', // portlet中所包含的功能id 
			frame : true,
			animCollapse : true,
			autoDestroy : true,
			draggable: {
        		moveOnDrag: false    
    		},
			cls : "x-portlet",
			data : null,
			initComponent : function() {
				var me = this;
				me.callParent(arguments);
				me.tools=[];
				me.collapsible=true;
				me.closable=true,// 可关闭
				me.on('beforeClose', function(obj) {
					if(myHomeId == '1'){
						Wb.warn(XipLang.portal_home_unit_del);
					}else{
						 Ext.Msg.confirm(XipLang.portal_sys_confirm,XipLang.portal_unit_del_confirm, function(e) {
								if (e == "yes") {
									//===================发请求删除后台数据==============
									Wb.request({
										url:'m?xwl=xip/pub/navigator/portalNavigator/data/deletePortalUnit',
										params:{'UNIT_ID':me.portletId},
										success:function(){
											obj.doClose();
										}
									});
									return true;
								} else {
									return false;
								}
							});
					}
					return false;

				});
			},
			doClose : function() {
				var me = this;
				this.el.animate({
							opacity : 0,
							callback : function() {
									//下边的内容同样是在存储方法的返回方法中执行
									me.fireEvent("close", me);
									me[me.closeAction]();
							},
							scope : this
						});
			},
			getData : function() {
				return this.data;
			},
			// 初始化内部组件，根据后台传回的组件名称，生成具体组件
			// 传入的参数包括创建组件的xtype，name等
			initWidget:function(portlet){
				var me =this;
				if(portlet.widget!=null){
					me.data=portlet;
					// 创建具体的widget，创建具体的组件
					var item=Ext.create(portlet.widget);
					//如果是Ext.panel.Panel，将组件的widgetTarget嵌入到panel的html中
					if(portlet.widget =='Ext.panel.Panel' || !Ext.isEmpty(portlet.widgetTarget)){
                      	Ext.apply(item,{
							autoScroll:'auto'
						});
                        var _newHeight = portlet.height-35;
						if(portlet.widgetTarget.indexOf("http:") !=-1){
							item.html = '<iframe onmouseover = window.parent.hideMenus() id ="portletIframe" scrolling="auto" frameborder="0" width="100%" height='+_newHeight+' src="'+portlet.widgetTarget+'"></iframe>';
						}else if(Ext.String.startsWith(portlet.widgetTarget,'/m') || Ext.String.startsWith(portlet.widgetTarget,'/main')){
							item.html = '<iframe onmouseover = window.parent.hideMenus() id ="portletIframe" scrolling="auto" frameborder="0" width="100%" height= '+_newHeight+' src="'+contentPath+portlet.widgetTarget+'"></iframe>';
						}else{
							item.html = '<iframe onmouseover = window.parent.hideMenus() id ="portletIframe" scrolling="auto" frameborder="0" width="100%" height= '+_newHeight+' src="'+contentPath+'/'+portlet.widgetTarget+'"></iframe>';
						}
					}
					me.title=portlet.widgetTitle;	//设置组件的标题
					//设置属性按钮，如果没有配置属性，则默认为刷新按钮
					if(portlet.configWidget!=null&&portlet.configWidget!=''){
						me.getSettingTools(portlet.configWidget);
						me.tools.push(me.getRefreshTools());
						me.tools.push(me.getDefaultTools());
					}else{
						//创建默认刷新按钮
						me.tools.push(me.getRefreshTools());
						me.tools.push(me.getDefaultTools());
					}
					me.getMaxTools();
					this.add(item);
				}
			},
			//获得portlet中的组件
			getChildItem:function(){
				if(this.items){
					return this.items.items[0];
				}
				return null;
			},
			//创建默认的刷新按钮
		    getDefaultTools: function(){
		    	var me = this;
		        return {
		            xtype: 'tool',
		            type: 'gear',
		            tooltip:XipLang.portal_set_heigth,
		            maxWidth:400,
		            handler: function(e, target, panelHeader, tool){
		            	if(myHomeId == '1'){
		            		Wb.info(XipLang.portal_modify_height);
		            	}else{

			            	//设置当前portlet组件的高度
							var win = Ext.create('Ext.window.Window', {
												layout : 'fit',
												title:XipLang.portal_set_heigth,
												modal : true,
												height: 140,
												width : 350,
												frame:true,
												border:false,
												closeAction : 'destroy',
												buttonAlign:'center',
												buttons: [
												          { text:XipLang.config_save_btn,iconCls:'save_icon',handler:function(){
												        	  var _myHeight = Ext.getCmp('newPortletHeight').getValue();
												        	  if(Ext.isEmpty(_myHeight)){
												        		  Wb.info(XipLang.portal_unit_height);
												        	  }else{
												        		  if(_myHeight == me.data.height){
												        			  win.close();
												        		  }else{
												        			  Wb.request({
												        				  url:'m?xwl=xip/pub/navigator/portalNavigator/data/updateCompDtl',
												        				  params:{UNIT_ID:me.portletId,UNIT_HEIGHT:_myHeight},
												        				  success:function(){
												        					  me.setSize(0,_myHeight);
												        					  me.data.height =_myHeight;
												        					  Wb.info(XipLang.portal_modify_success,function(){
												        						  win.close();
												        					  });
												        					  
												        				  },
												        				  failure:function(){
												        					  Wb.info(XipLang.portal_modify_failure);
												        				  }
												        			  });
												        		  }
												        	  }
												        	  
												          }},
												          { text:XipLang.xwf_lang_btn_cancel,iconCls:'delete_icon',handler:function(){
												        	  win.close();
												          }}
												        ],
												items:{
													xtype:'panel',
													frame:true,
													border:false,
													padding:'20 38 20 25',
													items:{
														xtype:'numberfield',
														id   :'newPortletHeight',
														width:230,
														fieldLabel:XipLang.portal_height,
														labelAlign:'right',
														labelWidth:50,
														allowBlank:false,
														value:parseInt(me.data.height)
													}
												}
							});
							win.show();
			            
		            	}
		            }
		        };
		    },
			//创建默认的刷新按钮
		    getRefreshTools: function(){
		        return {
		            xtype: 'tool',
		            type: 'refresh',
		            tooltip:XipLang.portal_refresh_btn,
		            maxWidth:400,
					hidden:true ,
		            handler: function(e, target, panelHeader, tool){
		                var portlet = panelHeader.ownerCt;
		                portlet.setLoading(XipLang.xwf_lang_data_loading);
		                Ext.defer(function() {
		                    portlet.setLoading(false);
		                }, 2000);
		            }
		        };
		    },
			// 创建每个portlet的设置属性按钮
			getSettingTools : function(configWidget) {
					var me =this;
					var win = Ext.create('Ext.window.Window', {
										layout : 'fit',
										title:XipLang.portal_attr_set,
										modal : true,
										closeAction : 'destroy'
					});
				var settingTools={
							xtype : 'tool',
							type : 'plus',
							tooltip:XipLang.portal_attr_set,
							maxWidth:400,
							handler : function(e, target, panelHeader, tool){
									var winTemp=win.cloneConfig();
									//创建配置页面
									var myConfigWidget=Ext.create(configWidget,{prePropertyList:me.data.propertyList});
									//这里对于产生的配置，可以通过定制统一事件来完成，然后再这里添加对统一时间的Listenner
									winTemp.add(myConfigWidget);
									winTemp.show();
							}	
				};
				me.tools.push(settingTools)
			},
			getMaxTools:function(){
				var me = this;
				var maxTool={
							xtype : 'tool',
							type : 'maximize',
							tooltip:XipLang.portal_win_max,
							maxWidth:400,
							handler : function(e, target, panelHeader, tool){
								//获得页面的url，将其最大化至窗口或者Wb的tabPanel中
								if(!Ext.isEmpty(me.data.widgetTarget) && me.data.widgetTarget !='-1'){
									var _tmpUrl = me.data.widgetTarget;
									_tmpUrl += '&userId='+'{#XIP.userId#}'+'&roleId='+'{#XIP.roleId#}'+'&funId='+me.data.functionId+'&userName='+'{#XIP.userName#}'+'&roleCode='+'{#XIP.roleCode#}';	
									if(Ext.String.startsWith(me.data.widgetTarget,'/m')){
										Xip.open({
											 url:contentPath+_tmpUrl,
											 title:me.title,
											 container:app.funTabPanel
										});
										
									}else if(Ext.String.startsWith(me.data.widgetTarget,'m')){
										Xip.open({
											 url:contentPath+'/'+_tmpUrl,
											 title:me.title,
											 container:app.funTabPanel
										});
										
									}else if(Ext.String.startsWith(me.data.widgetTarget,'http://')){
										window.open(me.data.widgetTarget);
									}else{
										Xip.open({
											 url:me.data.widgetTarget,
											 title:me.title,
											 container:app.funTabPanel
										});
									}
									

								}else if(me.data.widget =='com.fb.define.XipPortalGrid'){
									Wb.info(XipLang.portal_no_support);
								}
								else{
									Xip.open({
										 url:'m?xwl=xip/pub/navigator/portalNavigator/portalComponent',
										 title:me.title,
										 container:app.funTabPanel,
										 params: {componentUnit:me.data.widget}
									});
									
								}
							}
				};
				me.tools.push(maxTool)
			},
			// private 重写setSize方法,只改变高度,因为外层定义了宽度，所以重绘组件会使得高度的改变取消
			setSize : function(width, height) {
				var me=this;
				if(typeof(me.data)=='undefined'||me.data==null||me.height==height){
					me.callParent();
					me.doLayout();
					me.height=height;
				}else{
					me.height=height;
					me.setHeight(height);
                    me.doLayout();
				}
                            				//==============重新设置portlet中内容的高度===============
				if(typeof(me.data)!='undefined'&& me.data!=null){
					if(me.data.widget =='Ext.panel.Panel' || !Ext.isEmpty(me.data.widgetTarget)){
                      var myNewHeight = height-35;
						var myItem = me.getWidget();
						if(me.data.widgetTarget.indexOf("http:") !=-1){
							myItem.update('<iframe onmouseover = window.parent.hideMenus() id ="portletIframe" scrolling="auto" frameborder="0" width="100%" height='+myNewHeight+' src="'+me.data.widgetTarget+'"></iframe>');
						}else if(Ext.String.startsWith(me.data.widgetTarget,'/m') || Ext.String.startsWith(me.data.widgetTarget,'/main')){
							myItem.update('<iframe onmouseover = window.parent.hideMenus() id ="portletIframe" scrolling="auto" frameborder="0" width="100%" height= '+myNewHeight+' src="'+contentPath+me.data.widgetTarget+'"></iframe>');
						}else{
							myItem.update('<iframe onmouseover = window.parent.hideMenus() id ="portletIframe" scrolling="auto" frameborder="0" width="100%" height= '+myNewHeight+' src="'+contentPath+'/'+me.data.widgetTarget+'"></iframe>');
						}
					}
				}

			},
			getWidget:function(){
				return this.items.items[0];
			}
		})