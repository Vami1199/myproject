Ext.define('WidgetModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'unitId'             , type: 'string'},
        {name: 'widgetName' 		, type: 'string'},
        {name: 'widgetDesc'  		, type: 'string'},
        {name: 'configureWidget'	, type: 'string'},
        {name: 'widgetValue'   		, type: 'string'},
        {name: 'height'				, type: 'string'},
        {name:'widgetTarget'        , type: 'string'},
        {name:'chooseFun'           , type: 'string'},
        {name:'chooseFunId'           , type: 'string'}
    ]
});
Ext.define('com.fb.portal.WidgetStore',{
	extend : 'Ext.data.Store' ,
	alias : 'WidgetStore' ,
	config : {
		model:'WidgetModel',
		autoLoad: true,
		pageSize:-1,
		proxy:{
			type:'ajax',
			url:'m?xwl=xip/pub/navigator/portalNavigator/data/getDefineUnits',
	        reader: {
	            type: 'json',
	            root: 'rows',rootProperty:"rows",totalProperty:"total"
		      	}
		}
	},
	constructor: function(config) {
			this.initConfig(config);
	        this.callParent();
			return this;
	}
});