Ext.define('com.fb.portal.PortalUnitForm', {
	extend : 'Ext.form.Panel',
	initComponent : function() {
		var _this = this;
		var myStore = Ext.create('com.fb.portal.WidgetStore');
		var userFuncStore = Ext.create('com.fb.portal.PortalUnitStore');
		//创建一个临时全局窗口变量
		var tmpUintWin;	
		var selComboxRec;
		Ext.apply(this, {
			width : '100%',
			height : '100%',
			padding:'10',
			border:false,
			style:'border-width:0px',
			autoDestroy : true,
			frame:true,
			buttonAlign:'center',
			layout : 'form',
			items:[{
				xtype:'combobox',
				id :'d_myUnitCombox',
				fieldLabel:'<font color="red">*</font>'+XipLang.chart_unit,
				emptyText:XipLang.chart_unit_select,
				labelAlign:'right',
				labelWidth:90,
				store:myStore,
				allowBlank:false,
				displayField:'widgetName',
				valueField:'unitId',
				listeners:{
					'select':function(combo,records,eOpts){
						Ext.getCmp('d_myUnitUrl').setValue('');
						Ext.getCmp('d_unitType').clearValue();
						var _selectVal = combo.getValue();
						selComboxRec = combo.findRecord('unitId',_selectVal);
						//设置选中的值
						Ext.getCmp('d_myUnitName').setValue(selComboxRec.data.widgetName);
						Ext.getCmp('d_myUnitDesc').setValue(selComboxRec.data.widgetDesc);
						Ext.getCmp('d_myUnitHeigth').setValue(selComboxRec.data.height);
						Ext.getCmp('d_myUnitValue').setValue(selComboxRec.data.widgetValue);
						Ext.getCmp('d_myUnitFunId').setValue(selComboxRec.data.chooseFunId);
						if(!Ext.isEmpty(selComboxRec) && 'Ext.panel.Panel'== selComboxRec.get('widgetValue')){
							Ext.getCmp('d_myUnitUrl').setValue(selComboxRec.data.widgetTarget);
							Ext.getCmp('d_myUnitUrl').setFieldLabel('<font color="red">*</font>URL');
							//隐藏选择框，释放url填写框
							if(selComboxRec.get('unitId') =='2'){
								Ext.getCmp('d_unitType').show();
								Ext.getCmp('d_myUnitUrl').setReadOnly(true);
							}else if(selComboxRec.get('unitId') =='6'){
								Ext.getCmp('d_unitType').hide();
								Ext.getCmp('d_myUnitUrl').setReadOnly(false);
							}else{
								//添加平台默认的  =====>收藏夹<=======个人待办 时,不可编辑url框
								Ext.getCmp('d_unitType').hide();
								Ext.getCmp('d_myUnitUrl').setReadOnly(true);
								
							}
						}else{
							//隐藏url类别下拉框，让url框不可编辑
							Ext.getCmp('d_unitType').hide();
							Ext.getCmp('d_myUnitUrl').setReadOnly(true);
						}
					}
				}
			},{
				xtype:'panel',
				border:false,
				baseCls:'my-panel-no-border',
				layout:'form',
				frame:true,
				items:[
                       {xtype:'textfield',id:'d_myUnitId',hidden:true},
                       {xtype:'textfield',id:'d_myUnitValue',hidden:true},
                       {xtype:'textfield',id:'d_myUnitFunId',hidden:true},
                       {xtype:'textfield',id:'d_myUnitName',allowBlank:false,fieldLabel:'<font color="red">*</font>'+XipLang.chart_unit_name,labelAlign:'right',labelWidth:90},
                       {xtype:'textfield',id:'d_myUnitDesc',fieldLabel:XipLang.chart_unit_desc,labelAlign:'right',labelWidth:90},
                       {xtype:'numberfield',id:'d_myUnitHeigth',allowBlank:false,fieldLabel:'<font color="red">*</font>'+XipLang.chart_unit_height,labelAlign:'right',labelWidth:90,minValue:10},
                       {
           				xtype:'combobox',
           				id :'d_unitType',
           				hidden:true,
           				fieldLabel:'<font color="red">*</font>'+XipLang.chart_system_function,
           				labelAlign:'right',
           				labelWidth:100,
           				store:userFuncStore,
           				displayField:'urlName',
           				valueField:'funId',
           				listeners:{
           					'beforequery':function(plan,options){
           						var combo = plan.combo;
           						if (!plan.forceAll) {
           							var value = plan.query;
           						    combo.store.filterBy(function(record, id) {
           						    var text = record.get(combo.displayField);
           						    return (text.indexOf(value) != -1);
           						  });
           						  combo.expand();
           						  return false;
           						}
           					},
           					'select':function(combo,records,eOpts){
           						var selRecord = records[0];
           						Ext.getCmp('d_myUnitUrl').setValue(selRecord.data.urlId);
           					    Ext.getCmp('d_myUnitName').setValue(selRecord.data.urlName);
				                Ext.getCmp('d_myUnitFunId').setValue(selRecord.data.funcId);
           					}
           				}
           			
                       },
                       {xtype:'textfield',id:'d_myUnitUrl',fieldLabel:'URL',labelAlign:'right',labelWidth:90}
                        
                       ]
			     }
		    ],
		    buttons:[
		             {
		            	 text:XipLang.system_add_btn,
		            	 iconCls:'ok_icon',
		            	 handler:function(){
		            		 if(_this.getForm().isValid() == false){
		            			 Wb.info(XipLang.system_must_fill_up);
		            			 return ;
		            		 }
		            		 if(selComboxRec.data.widgetValue == 'Ext.panel.Panel' && Ext.isEmpty(Ext.getCmp('d_myUnitUrl').getValue())){
		            			 Wb.info(XipLang.chart_unit_url_empty);
		            			 return ;
		            		 }
										var rec = selComboxRec;
										var hgt =  Ext.getCmp('d_myUnitHeigth').getValue()*1;
										if (hgt == 0 || hgt == null
												|| hgt.length == 0) {
											hgt = 200;
										}
										var nme = rec.get('widgetValue');  //组件类型
										var wid = '';//新增组件的id，插入数据库后生成
										var widgetTitle=Ext.getCmp('d_myUnitName').getValue(); //组件名称
										var cfgwgt = rec.get('configureWidget');  //组件属性按钮配置
										var targetUrl =  Ext.getCmp('d_myUnitUrl').getValue();   //组件包含的url
										var targetFunId =  Ext.getCmp('d_myUnitFunId').getValue();//组件包含的功能id
										if(Ext.isEmpty(targetFunId)){
											targetFunId = '';
										}
										_this.fireEvent('addUnit', hgt, nme,
												cfgwgt, wid,widgetTitle,targetUrl,targetFunId);
									Wb.info(XipLang.system_add_success);
							
		            	 }
		             },
		             {
		            	 text:XipLang.xwf_lang_btn_cancel,
		            	 iconCls:'delete_icon',
		            	 handler:function(){
		            		 _this.up('window').close();
		            	 }
		             }
		             ]
	    })
		this.callParent();
	
	}
});
