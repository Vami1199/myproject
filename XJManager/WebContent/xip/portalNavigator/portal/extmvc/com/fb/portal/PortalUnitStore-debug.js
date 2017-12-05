Ext.define('defineModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'urlId'             , type: 'string'},
        {name: 'funId' 		, type: 'string'},
        {name: 'urlName'  		, type: 'string'}
    ]
});
Ext.define('com.fb.portal.PortalUnitStore',{
	extend : 'Ext.data.Store' ,
	alias : 'PortalUnitStore' ,
	config : {
		model:'defineModel',
		autoLoad: true,
		pageSize:-1,
		proxy:{
			type:'ajax',
			url:'m?xwl=xip/pub/navigator/portalNavigator/data/getUserFunctions',
	        reader: {
	            type: 'json',
	            root: 'rows',rootProperty:"rows",totalProperty:"total"
		      	}
		},
		listeners:{
			'beforeload':function(store, operation, options){
				if(portalAuthModel == 'ROLE'){
					store.getProxy().url = 'm?xwl=xip/pub/navigator/portalNavigator/data/getRoleFunctions';
				}else{
					store.getProxy().url = 'm?xwl=xip/pub/navigator/portalNavigator/data/getUserFunctions';
				}
			}
	  }
	},
	constructor: function(config) {
			this.initConfig(config);
	        this.callParent();
			return this;
	}
});