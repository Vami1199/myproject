/**
 *属性窗口的父类（模板类）
 *Ext component 的组件生命周期（initComponent redner show hide/destory） 
 *tangxl
 *2017-03-14
 */
Ext.ns("Xip.wf");
Ext.require(['Xip.wf.panel.ProcessPanel']);
Ext.define("Xip.wf.ParentProperty",{
	extend:'Ext.panel.Panel',
	border:false,
	title:'属性面板',
	alias:'abstractPanel',
	panelType:'process',
	items:[],
	initComponent:function(){
		var newPanel = this.createContent(this.panelType,null);
		Ext.apply(this,{
			items:[newPanel]
		});
		this.callParent();
	},
	/*往tabPanel中添加内容
	 *type:面板类型
	 *component：节点属性信息对应的json对象
	 */
	createContent:function(type,component){
		var me = this;
		var targetObject;
        switch (type) {
        //流程属性
        case 'process':
        	targetObject = Ext.create('Xip.wf.panel.ProcessPanel');
            break;
        //开始节点
        case 'start':
            break;
        //结束节点
        case 'end':
            break;
        //连线
        case 'line':
        	break;
        //通知节点
        case 'notice':
        	break;
        //会签节点
        case 'assign':
        	break;
    }
        me.panelType = type;
        return targetObject;
	},
	/*
	 *返回所有的子panel 
	 */
	getChildPanels:function(){
		if(this.items){
			return this.items.items;
		}
		return null;
	},
	/*
	 *返回子panel上的数据 
	 */
	getPanelData:function(){
		return null;
	},
	/*
	 *切换属性窗口 
	 */
	switchChildPanel:function(){
		
	}
});