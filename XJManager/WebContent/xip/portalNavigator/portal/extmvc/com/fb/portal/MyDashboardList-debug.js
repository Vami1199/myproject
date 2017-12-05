/**
 * 定义combobox,可选择某个用户对应的所有dashboradView
 */
Ext.define("com.fb.portal.MyDashboardList", {
			extend : "Ext.form.ComboBox",
			alias : "viewListCombobox",
			fieldLabel: XipLang.chart_my_home,
			labelWidth:70,
			labelAlign:'right',
			width:180,
			isNew:true,
    		queryMode: 'local',
    		displayField: 'viewName',
    		valueField: 'id',
    		setIsNew:function(val){
    			this.isNew = val;
    		},
    		initComponent: function() {
    			//********************将store组件定义在Wb7中，Wb7组件先于脚本创建********************
		        var myDashboardStore  = app.protalHomeStore;
				// 给store添加load时间,并将时间在combobox中监听
				myDashboardStore.addListener('load',this.addActionFunction,this);
				this.store=myDashboardStore;
		        this.callParent(arguments);
		    },
		    // 添加操作项
		    addActionFunction:function(th,record,success,operation,opt){
		    	th.add({id:-1,viewName:XipLang.chart_new_home});
		    	if(!success){
		    		return;
		    	}
		    	if(this.isNew){
			    	//遍历设置默认主页
		    		var _hasDefault = false;
			    	for(var i=0;i<record.length;i++){
			    		if(record[i].raw.isDefault== 1){
			    			_hasDefault = true;
			    			this.setValue(record[i].data.id);
			    			myHomeId = record[i].data.id;
			    			break;
			    		}
			    	}
			    	//没有默认主页，直接设置平台的默认主页
			    	if(!_hasDefault){
			    		this.setValue('1');
			    	}
		    	}
		    	//加载后还原，新增前先设置isNew
		    	this.isNew = true;
		    },
		    //设置combobox的初始值
		    load:function(){
		    	this.store.load();
		    }
})