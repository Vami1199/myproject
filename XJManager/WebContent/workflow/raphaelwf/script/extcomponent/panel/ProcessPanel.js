/**
 *属性窗口的父类（模板类）
 *Ext component 的组件生命周期（initComponent redner show hide/destory） 
 *tangxl
 *2017-03-14
 */
Ext.ns("Xip.wf.panel");
Ext.require('Xip.wf.combo.SelectCombo');
Ext.define("Xip.wf.panel.ProcessPanel",{
	extend:'Ext.panel.Panel',
	border:false,
	childWidth:100,
	layout:'form',
	alias:'processPanel',
	panelType:'process',
	config:{
	    //电脑表单
		computer:Ext.create('Xip.wf.combo.SelectCombo',{
			 data:[
			       ['','请选择'],
			       ['static','静态表单'],
			       ['route','路由表单'],
			       ['static','变量表单']
			      ],
			 fields:['code','value'],
			 fieldLabel:'电脑表单',
			 value:''
		}),
		//平板表单
		tablet:Ext.create('Xip.wf.combo.SelectCombo',{
			 data:[
			       ['','请选择'],
			       ['static','静态表单'],
			       ['route','路由表单'],
			       ['static','变量表单']
			       ],
			 fields:['code','value'],
			 fieldLabel:'平板表单',
			 value:''
		}),
		//手机表单
		mobile:Ext.create('Xip.wf.combo.SelectCombo',{
			 data:[
			       ['','请选择'],
			       ['static','静态表单'],
			       ['route','路由表单'],
			       ['static','变量表单']
			       ],
			 fields:['code','value'],
			 fieldLabel:'手机表单',
			 value:''
		}),
		methodCombo:Ext.create('Xip.wf.combo.SelectCombo',{
			 data:[
			       ['','请选择'],
			       ['java','JAVA方法'],
			       ['route','存储过程'],
			       ['web','WEB服务']
			       ],
			 fields:['code','value'],
			 fieldLabel:'撤回事件',
			 value:''
		})
	},
	createGBCL:function(){
		return {
			title:'规避策略',
			layout:'form',
			xtype:'fieldset',
			defaultType:'checkboxfield',
			items:[
			       {   xtype:'panel',
			           border:false,
			           baseCls:'mypanel-no-border',
			           defaultType: 'checkboxfield',
			           layout: 'column',
			           items:[{
			        	    columnWidth: .5,
			        	    fieldLabel  : '相邻节点',
			        	    labelAlign:'right',
		                    id        : 'blowNode'
			           },
			           {    columnWidth:.5,
			        	    fieldLabel  : '内部流程',
			        	    labelAlign:'right',
		                    id        : 'innerProcess'
			           }]},
			           {
			        	    fieldLabel  : '提交人规避',
		                    id        : 'submitPass'
			           },
			           {
			        	    xtype:'textfield',
			        	    labelAlign:'right',
			        	    fieldLabel  : '提交人变量',
			        	    width:400,
		                    id        : 'submitVariable'
			           }
			       ]
		};
	},
	initComponent:function(){
		var me = this;
		//加载页面主键
		Ext.apply(this,{
			items:[
			       {id:'processName',xtype:'textfield',fieldLabel:'流程名称', allowBlank: false,labelAlign: "right",labelWidth: this.childWidth},
			       {id:'processCode',xtype:'textfield',fieldLabel:'流程编码', allowBlank: false,labelAlign: "right",labelWidth: this.childWidth, readOnly: true},
			       me.getComputer(),
			       Ext.create('Xip.wf.component.SearchField',{
			    	   id:'computerVal',
			    	   fieldLabel:'电脑表单变量',
			    	   labelAlign:'right',
			    	   labelWidth:100,
			    	   store:new Ext.data.ArrayStore({
			    		   data: [
			    		       			    	         ['AMT','金额'],
			    		    			    	         ['NUM','数量'],
			    		    			    	         ['APP_ID','应用地址'],
			    		    			    	         ['CWCS','财务初审']
			    		    			    	         ],
			    		  fields:['name','value']
			    	   })
			       }),
			       me.getTablet(),
			       Ext.create('Xip.wf.component.SearchField',{
			    	   id:'tabletVal',
			    	   fieldLabel:'平板表单变量',
			    	   labelAlign:'right',
			    	   labelWidth:100,
			    	   store:new Ext.data.ArrayStore({
			    		   data: [
			    		       			    	         ['AMT','金额'],
			    		    			    	         ['NUM','数量'],
			    		    			    	         ['APP_ID','应用地址'],
			    		    			    	         ['CWCS','财务初审']
			    		    			    	         ],
			    		  fields:['name','value']
			    	   })
			       }),
			       me.getMobile(),
			       Ext.create('Xip.wf.component.SearchField',{
			    	   id:'mobileVal',
			    	   fieldLabel:'手机表单变量',
			    	   labelAlign:'right',
			    	   labelWidth:100,
			    	   store:new Ext.data.ArrayStore({
			    		   data: [
			    		       			    	         ['AMT','金额'],
			    		    			    	         ['NUM','数量'],
			    		    			    	         ['APP_ID','应用地址'],
			    		    			    	         ['CWCS','财务初审']
			    		    			    	         ],
			    		  fields:['name','value']
			    	   })
			       }),
			       me.createGBCL(),
			       {
		        	    xtype:'textfield',
		        	    labelAlign:'right',
		        	    fieldLabel  : '绑定人条件',
	                    id        : 'bindCondition'
		           },
			       me.getMethodCombo(),
			       Ext.create('Xip.wf.component.SearchField',{
			    	   id:'methodVal',
			    	   fieldLabel:'撤回业务函数',
			    	   labelAlign:'right',
			    	   labelWidth:100,
			    	   store:new Ext.data.ArrayStore({
			    		   data: [
			    		       			    	         ['AMT','金额'],
			    		    			    	         ['NUM','数量'],
			    		    			    	         ['APP_ID','应用地址'],
			    		    			    	         ['CWCS','财务初审']
			    		    			    	         ],
			    		  fields:['name','value']
			    	   })
			       }),
			       Ext.create('Xip.wf.component.SearchField',{
			    	   id:'stateVal',
			    	   fieldLabel:'撤回业务状态',
			    	   labelAlign:'right',
			    	   labelWidth:100,
			    	   store:new Ext.data.ArrayStore({
			    		   data: [
			    		       			    	         ['AMT','金额'],
			    		    			    	         ['NUM','数量'],
			    		    			    	         ['APP_ID','应用地址'],
			    		    			    	         ['CWCS','财务初审']
			    		    			    	         ],
			    		  fields:['name','value']
			    	   })
			       }),
			       {
		        	    xtype:'textarea',
		        	    labelAlign:'right',
		        	    fieldLabel  : '描述',
	                    id        : 'bindCondition'
		           }
			      ]
		});
		this.callParent();
	}
});