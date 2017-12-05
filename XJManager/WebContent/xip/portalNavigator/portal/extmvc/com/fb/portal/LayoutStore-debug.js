/**
 * 定义Store对象，对后台数据进行读取
 * store的autoLoad默认为false，不自动加载就不会触发beforeload和load事件，也就不会触发initPortalPanel事件
 * autoLoad设置成true或者false，都没什么区别
 */
Ext.define('Layout', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'viewId', type: 'string'},
        {name: 'columns',  type: 'array'}
    ]
}); 
 
Ext.define("com.fb.portal.LayoutStore", {
			extend : "Ext.data.Store",
			alias : "layoutStore",
			//Store的初始配置
			config: {
				model:'Layout',
				proxy: {
			        type: 'ajax',
			        url : contentPath+'/protalHomeAction.do?method=getPortalHomeByUserId',
//			         api: {
//				            read: baseUrl+'extmvc/com/fb/portal/portal.json' //只是一个数据接口,可以按需改变
//				        },
			        reader: {
			            type: 'json',
			            root: 'rows'
	  		      	}
	   			},
	    		autoLoad: false
			},
			constructor: function(config) {
				this.initConfig(config);
		        this.callParent();
				//触发load事件时调用loadFunction方法
				this.on("load", this.loadFunction, this);
				//在load事件之前调用
				this.on("beforeload", this.beforeLoadFunction, this)
				return this;
		    },
		    //对数据进行初步的处理封装，并触发'load_compelete'事件
		    loadFunction:function(store,record,success,operation,opt){
		    	//根据传入的id，筛选数据
		    	Ext.getBody().unmask();
		    	if(success){
				    this.fireEvent('load_compelete',true,record);
		    	}else{
		    		this.fireEvent('load_compelete',false);
		    	}
		    },
		    beforeLoadFunction:function(store,operation,eopt){
		    	//在加载数据时，调用
		    	Ext.getBody().mask('Loading...', 'x-mask-loading');
		    },
		    setViewId:function(viewId,isLoading){
		    	if(isLoading==false){
		    		return;
		    	}
		    	if(viewId==null){
		    		Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.chart_home_not_exists);
		    		return;
		    	}else{
		    		if(viewId<0){
		    			//选择增删改功能时,不重载store
		    			return;
		    		}
		    	}
		    	this.getProxy().extraParams={
		    		viewId:viewId,
		    		homeId:viewId
		    	};
		        this.load();
		    }
});

