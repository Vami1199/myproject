/**
 * 装载拖拽框和顶部菜单栏,包含和后台数据的交互,通过layoutStore和后台进行交互 需要PortalPanel类和layoutStore类
 * Ext4.x以后引入了Config概念，在config中配置的属性会在组件的构造函数中调用对象内置的initConfig方法
 * 可以自动为属性生成getter、setter、apply和reset方法
 * 
 */
Ext.require(['com.fb.portal.PortalPanel']);
Ext.require(['com.fb.portal.LayoutStore']);
Ext.require(['com.fb.portal.MyDashboardList']);
Ext.define('com.fb.portal.LayoutContainer', {
	extend : 'Ext.container.Container',
	border:false,
	height:'100%',
	// 基础配置
	config : {
		// 拖拽框
		portalPanel : Ext.create('myPortalpanel'),
		// 加载当前仪表盘的store
		layoutStore : Ext.create('layoutStore'),
		// 用户所有view的下拉列表============>combobox
		viewListCombobox : Ext.create('viewListCombobox')
		//config 中配置的属性，Ext自动生成get+属性名方法？
		//queryText:Ext.create('Ext.form.field.Text',{id:'123',fieldLabel:'测试'})
	},
	// 构造函数
	constructor : function(config) {
		this.initConfig(config);
		return this.callParent();
	},
	// 创建顶部菜单
	getToolBar : function() {
		var me = this;
		return [{
			xtype : 'toolbar',
			dock : 'top',
			height : 35,
			items : [me.getViewListCombobox(),
			{
				xtype:'button',
				iconCls:'settings1_icon',
				text:XipLang.chart_home_default,
				handler:function(){
					var defaultHome = me.getViewListCombobox().getRawValue();
					var defaultId = me.getViewListCombobox().getValue();
				    Wb.request({
							url:'m?xwl=xip/pub/navigator/portalNavigator/data/setDefaultHome',
							params:{HOME_ID:defaultId},
							success:function(){
								Wb.info(XipLang.chart_home_set_success);
								myHomeId = defaultId;
							},
							failure:function(){
								Wb.warn(XipLang.xwf_lang_server_no_response);
							}
						});

				}
				
			},'-',
			{
				xtype : 'button',
				text : XipLang.chart_home_edit_btn,
				iconCls:'dataview_icon',
				handler : function() {
					if(myHomeId == '1'){
						Wb.info(XipLang.chart_home_readonly);
						return ;
					}
					var viewStore = me.getViewListCombobox().findRecord('id',me.getViewListCombobox().getValue());
					//==================获取各列的宽度和id================
					var columnWidthArray = '';
					var columnIdArray = '';
					var allViewColums = me.getPortalPanel().getColumns();
					for(var p=0;p<allViewColums.length;p++){
						if(p == allViewColums.length-1){
							columnIdArray +=allViewColums[p].portalColId;
							columnWidthArray += allViewColums[p].columnWidth;
						}else{
							columnIdArray +=allViewColums[p].portalColId+',';
							columnWidthArray += allViewColums[p].columnWidth+',';
						}
					}
					var viewPanel = Ext.create('com.fb.portal.PortletViewEdit');
					viewPanel.addListener('changeView', function(wArray,newHomeName,myHomeId) {
                      me.getViewListCombobox().getStore().load(function(){
                           me.getViewListCombobox().setValue(myHomeId);
                           me.getViewListCombobox().setRawValue(newHomeName);
                      });
								me.getPortalPanel()
										.setDetailColWidth(wArray);
								win.close();
							});
					viewPanel.addListener('closeWin',function(){
						win.close();
					});
					var win = Ext.create('Ext.window.Window', {
						title : XipLang.chart_home_edit_btn,
						layout : 'fit',
						modal : true,
						width : 400,
						height : 220
					});
					win.add(viewPanel);
					win.addListener('show',function(){
						//============完成数据的初始化===========================
						viewPanel.initData({'viewName':viewStore.data.viewName,
							                'viewDesc':viewStore.data.HOME_DESC,
							                'isDefault':viewStore.data.isDefault,
							                'columnNum':allViewColums.length,
							                'columnWeight':columnWidthArray,
							                'columnIds':columnIdArray});
					});
					win.show();
				}
			}
			,'-',
			{
				xtype:'button',
				iconCls:'delete_icon',
				text:XipLang.config_source_delete,
				handler:function(){
                  	var selViewValue = me.getViewListCombobox().getValue();
				    if(selViewValue == 1){
							Wb.warn(XipLang.chart_home_not_delete);
							return false;
						}
					Wb.confirm(XipLang.chart_home_del_confirm,function(){
							//发送请求删除后台视图数据，清空当前面板
							Wb.request({
								url:'m?xwl=xip/pub/navigator/portalNavigator/data/deletePortalHome',
								params:{'HOME_ID':selViewValue},
								success:function(){
									Wb.info(XipLang.config_delete_success);
									me.getViewListCombobox().load();
									me.getPortalPanel().doLayout();
								},
								failure:function(){
									Wb.warn(XipLang.upgrade_failure);	
								}
								
							});
						
					});
				}
				
			},'->','-',{

				xtype : 'button',
				iconCls:'new_icon',
				text : XipLang.chart_home_add_home,
				handler : function() {
					if(myHomeId == '1'){
						Wb.warn(XipLang.chart_no_modify_home);
						return ;
					}
					var myUnit = Ext.create('com.fb.portal.PortalUnitForm');
					myUnit.addListener('addUnit', function(height, name,
									cfgwgt,wid,widTitle,targetUrl,targetFunId) {
								var myPortletsNum = me.getPortalPanel()
										.getPortletsNumber();
								if (myPortletsNum < 20) {
									//将外层主页的信息传递到portlet对象中
									var portlet = {
										configWidget:cfgwgt,
										height : height,
										widget : name,
										widgetId : wid,
										widgetName:widTitle,
										widgetTarget:targetUrl,
										widgetViewId:me.getViewListCombobox().getValue(),
										widgetCompId:'',
										portletId:'',
										functionId:targetFunId
									};
									me.getPortalPanel().addNewWidget(portlet);
								} else {
									win.close();
									Wb.warn(XipLang.chart_max_component);
								}
							});
					var win = Ext.create('Ext.window.Window', {
						        title : XipLang.chart_component_list,
								layout : 'fit',
								modal : true,
								width : 500,
								height : 260
							});
					win.add(myUnit);
					win.show();
				}
			
			},'-',{
              xtype:'tool',
              type :'up',
              tooltip:'fold up',
              handler:function(){
                Ext.getCmp('portalNorthPanel').collapse();
              }
            }]
		}];
	},
	// 根据内容的url，获得该子面板，并对其进行刷新操作,targetPortlet 要查找portlet的关键字
	refreshPorlet:function(targetPortlet){
		//获得所有的portlet列
		var allPanelCol = this.getPortalPanel().getColumns();
		if(allPanelCol !=null){
			//遍历每一个portletColumn
			for(var k=0;k<allPanelCol.length;k++){
				//获得每一个portletColumn中的组件
				var panelPortlets = allPanelCol[k].getPortlets();
				if(panelPortlets !=null){
					for(l=0;l<panelPortlets.length;l++){
						if(!Ext.isEmpty(panelPortlets[l].data.widgetTarget) 
								&& Ext.String.endsWith(panelPortlets[l].data.widgetTarget,targetPortlet)){
							//刷新
							if(panelPortlets[l].data.widgetTarget.indexOf('http:') != -1){
								panelPortlets[l].getChildItem().update('<iframe  scrolling="auto" frameborder="0" width="100%" height='+panelPortlets[l].data.height+' src="'+panelPortlets[l].data.widgetTarget+'"></iframe>');
							}else{
								panelPortlets[l].getChildItem().update('<iframe  scrolling="auto" frameborder="0" width="100%" height= '+panelPortlets[l].data.height+' src="'+contentPath+panelPortlets[l].data.widgetTarget+'"></iframe>');
							}
							return;
						}
						
					}
					
				}
			}
		}
	},
	// 初始化拖拽容器 =======该方法是在LayoutStore加载后触发
	initPortalPanel : function(layoutData) {
		this.getPortalPanel().initData(layoutData[0].data.columns);
		// 把viewId添加到视图上
		this.getPortalPanel().viewId = layoutData[0].data.viewId;
	},
	// 初始化数据源layoutStore
	initlayoutStore : function() {
		me = this;
		// 监听store的读取完成事件
		me.getLayoutStore().addListener('load_compelete',
				function(isSuccess, record) {
					if (isSuccess) {
						me.initPortalPanel(record);
					} else {
						Wb.warn(XipLang.chart_fail_load_data);
					}
				});
	},
	// 初始化combobox
	iniViewListCombobox : function() {
		me = this;
		//判断是否进行store的reload
		var isReload=true;
		// 监听change的选中事件
		me.getViewListCombobox().addListener('change',
				function(combo, newValue, oldValue) {
						if (newValue == -1) {
							isReload=false;
							me.getViewListCombobox().setValue(oldValue);
							//创建一个formPanel，就是弹出的formPanel框，然后进行新增视图操作！
							addNewValue = Ext.create('com.fb.portal.ViewConfig');
							addNewValue.addListener('closeAddWin',function(){
								win2.close();
							});
							addNewValue.addListener('addNewViewSuccess',
									function(formObj) {
								        //Extjs4.2 form.getForm().getValues().name 不好用
								        var newViewName = formObj.findField('viewName').getValue();
								        var newViewDesc = formObj.findField('viewDesc').getValue();
								        var newViewCol = formObj.findField('columnNum').getGroupValue();
								        var newViewNum = formObj.findField('columnWeight').getValue();
								        var newViewDefault=0;
								        if(formObj.findField('isDefault').getValue()){
								        	newViewDefault =1;
								        }
								        var newCompArray = [];
								        if(newViewNum.indexOf(',') == -1){
								        	var comJson = {'COMPONENT_ID':'','VIEW_ID':'','COMPONENT_NAME':newViewName,'COMPONENT_WIDTH':newViewNum,'COMPONENT_DESC':newViewName};
								        	newCompArray.push(comJson);
								        }else{
								        	var _tmpArray = newViewNum.split(',');
								        	for(var t=0;t<_tmpArray.length;t++){
								        		var comJson = {'COMPONENT_ID':'','VIEW_ID':'','COMPONENT_NAME':newViewName,'COMPONENT_WIDTH':_tmpArray[t],'COMPONENT_DESC':newViewName};
								        		newCompArray.push(comJson);
								        	}
								        }

								        //*********************执行数据库插入操作，成功后重新load portalPanel========
								        Wb.request({
								        	url:'m?xwl=xip/pub/navigator/portalNavigator/data/insertPortalInfo',
								        	params:{'HOME_NAME':newViewName,'HOME_DESC':newViewDesc,'HOME_COLUMN':newViewCol,'IS_DEFAULT':newViewDefault,'NEW_COMP':Wb.encode(newCompArray)},
								        	success:function(response){
												win2.close();
												var viewObj = Ext.decode(response.responseText);
												me.getViewListCombobox().setIsNew(false);
												me.getViewListCombobox().load();
												me.getViewListCombobox().setValue(viewObj.viewId);
												myHomeId = viewObj.viewId;
												//无需重新加载layoutStore，只需要清除当前面板上的组件即可，因为新建的视图已经被保存
												me.getPortalPanel().removeAll(true);
												//me.getLayoutStore().setViewId(viewObj.viewId,false);
								        	}
								        });
									});
							var win2 = Ext.create('Ext.window.Window', {
										title : XipLang.chart_new_home,
										layout : 'fit',
										modal : true,
										width : 400,
										height : 220
									});

							win2.add(addNewValue);
							win2.show();

						}else{
							me.getLayoutStore().setViewId(newValue,isReload);// 设置不同的ViewId，这样就获得不一样的布局
							myHomeId = newValue;
							isReload=true;
						}
				});
	},
	//============================****************************======================================
	//所有组件的基类的construct构造函数中都调用了initConfig方法，所有继承Component组件的在调用构造函数是都会调用initComponent方法
	//construct方法是所有组件的入口
	initComponent : function() {
		//=============***********执行顺序**********===========
		//1、加载初始数据layoutStore，初始数据加载成功后调用initPortalPanel将数据加载到面板中
		//2、初始化portalPanel，
		var me = this;
		me.initlayoutStore();
		//初始化下拉框-------------viewListWidget.json
		me.iniViewListCombobox();
		//测试
		Ext.apply(this, {
					layout : {
						type : 'border'
					},
					items : [{
								region : 'north',
								height : 35,
                                id:'portalNorthPanel',
								items : this.getToolBar(),
                                collapsed:false
							}, {
								region : 'center',
								layout:'fit',
								items : me.getPortalPanel()
							}]
				});
		this.callParent();
	}
});