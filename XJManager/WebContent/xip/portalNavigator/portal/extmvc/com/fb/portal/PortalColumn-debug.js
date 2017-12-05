/**
 * 定义列对象，集成自EXT的Container类，他子组件的默认形式为portlet
 * 布局为anchor，支持百分比设置，但是这个组件在IE中如果全部用百分比
 * 组件无法渲染高度，目前改用像素方式定义高度
 */
Ext.require(['com.fb.portal.Portlet']);
Ext.define("com.fb.portal.PortalColumn", {
			extend : "Ext.container.Container",
			alias : "myPortalcolumn",
			portalColId:'0',
			layout : {
				type : "anchor"
			},
			defaultType : "portlet",
			cls : "x-portal-column",
			autoHeight : true,
			autoDestroy:true,
			//初始化column---------portal.json(portlets)
			initPortlet:function(portlet){
				if(!portlet||portlet.length==0){
					return;
				}
				//创建portlet对象
				for(var i=0;i<portlet.length;i++){
					this.addPortlet(portlet[i]);
				}
			},
			addPortlet:function(portlet){
					var portletTemp=Ext.create('myPortlet');
					//设置高度
					portletTemp.setHeight(parseInt(portlet.height));
					//设置大小可变
					portletTemp.resizable=false;
					//设置portlet对象的唯一标识
					portletTemp.portletId = portlet.portletId;
					//初始化portlet,把组件名和参数以及配置页封装
					var portletItem={};
					//设置功能id
					portletItem.functionId = portlet.functionId;
					portletItem.widget=portlet.widget;              //创建一个微件的xtype配置对象 如 var button = Ext.widget('button');
					                                                //值是 com.fb.portal.ChartPortlet
					portletItem.configWidget=portlet.configWidget;  //com.fb.portal.ChartPortletConf  portal.json串中的内容
					portletItem.widgetTitle=portlet.widgetName;     //标题
					portletItem.propertyList=portlet.propertyList;  //propertyList 属性列表
					portletItem.widgetTarget =portlet.widgetTarget; //panel的内置url
					portletItem.height = parseInt(portlet.height);            //设置高度
					portletTemp.initWidget(portletItem);            //调用portal组件的initWidget方法-----extend Ext.panel.Panel
					//新增组件的URL，属性名：widgetTarget
					this.add(portletTemp);
			},
			getPortlets:function(){
				if(this.items){
					return this.items.items;
				}
				return null;
			}
		});