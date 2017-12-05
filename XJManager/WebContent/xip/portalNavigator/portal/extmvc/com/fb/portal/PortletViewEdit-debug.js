/**
 *修改当前主页的布局 
 */
Ext.define('com.fb.portal.PortletViewEdit', {
	extend : 'Ext.form.Panel',
	initData : function(data) {
		//编辑页面初始化数据 data={viewName:'',viewDesc:'',isDefault:'',......}
		var myForm = this.getForm();
		myForm.findField('editViewName').setValue(data.viewName);
		myForm.findField('editViewDesc').setValue(data.viewDesc);
		if(data.isDefault == '1'){
			myForm.findField('editIsDefault').setValue(true);
		}
		myForm.findField('editColumnNum').setValue(data.columnNum);
		myForm.findField('editColumnWeight').setValue(data.columnWeight);
		myForm.findField('editColumnIds').setValue(data.columnIds);
		
	},
	initComponent : function() {
		var me = this;
		Ext.apply(me, {
			bodyPadding : 10,
			width:350,
			frame:false,
			buttonAlign:'center',
			border:false,
			baseCls:'my-panel-no-border',
			layout: 'form',
			defaultType : 'textfield',
			items : [{
						fieldLabel : '<font color="red">*</font>'+XipLang.portal_homepage_name,
						name : 'editViewName',
						allowBlank : false,
						labelAlign:'right',
						labelWidth : 90
					}, {
						fieldLabel : '<font color="red">*</font>'+XipLang.portal_homepage_desc,
						name : 'editViewDesc',
						allowBlank : false,
						labelAlign:'right',
						labelWidth : 90

					},{
						fieldLabel : XipLang.portal_homepage_default,
						xtype:'checkbox',
						name : 'editIsDefault',
						labelAlign:'right',
						labelWidth : 90

					}
					,{
						fieldLabel : XipLang.portal_homepage_column,
						name : 'editColumnNum',
						readOnly:true,
						labelAlign:'right',
						labelWidth : 90
					},
					 {
						fieldLabel : '<font color="red">*</font>'+XipLang.portal_homepage_colwidth,
						emptyText:XipLang.portal_homepage_coldesc,
						name : 'editColumnWeight',
						allowBlank : false,
						labelAlign:'right',
						labelWidth : 90,
						listeners:{
						  render:function(field,t){
							  Ext.QuickTips.init();
						      Ext.QuickTips.register({
							      target: field.el,
							      text: XipLang.portal_column_note
							  })}
						}

					},{
						hidden:true,
						name : 'editColumnIds'
					}],
			buttons : [{
				text :XipLang.config_save_btn,
				iconCls:'ok_icon',
				handler : function() {
					var form = this.up('form').getForm();
					var updateUrl = 'm?xwl=xip/pub/navigator/portalNavigator/data/updatePortalInfo';
					if(form.isValid() == false){
						Wb.warn(XipLang.system_must_fill_up);
						return false;
					}
					var viewDefault = form.findField('editIsDefault').getValue();
					if(viewDefault){
						viewDefault = 1;
						updateUrl = 'm?xwl=xip/pub/navigator/portalNavigator/data/updatePortalWithDefault';
					}else{
						viewDefault = 0.0;
					}
					var form = this.up('form').getForm();
					var columnsNum = form.findField('editColumnNum').getValue();
					var widthColumns = form.findField('editColumnWeight').getValue();
					var columnsArray = widthColumns.split(',');
					var columnsId = form.findField('editColumnIds').getValue().split(','); 
					var allWidhtVal =0 ;
                    var isRightVal = true;
					Ext.Array.each(columnsArray,function(tmp){
						 if(parseInt(parseFloat(tmp)*100) == 0 || parseInt(parseFloat(tmp)*100)<0){
	                            isRightVal = false;
	                        }
						allWidhtVal = allWidhtVal + parseFloat(tmp)*100;
					});
					//往后台添加一条新的记录，然后重新load portal面板
					if(columnsNum != columnsArray.length){
						Wb.warn(XipLang.portal_column_not_match);
						return false;
					}else if(!isRightVal){
                        Wb.warn(XipLang.portal_column_less_width);
                    }else if(parseInt(allWidhtVal) != 100){
						Wb.warn(XipLang.portal_column_total_sum);
						return false;
					}else{
						var componentArray = [];
						for(var c=0;c<columnsNum;c++){
							var tmpComp = {'COMPONENT_ID':columnsId[c],'COMPONENT_WIDTH':columnsArray[c]};
							componentArray.push(tmpComp);
						}
						//发送请求，修改列的宽度以及主页的信息
						
						Wb.request({
							url:updateUrl,
							message:XipLang.portal_homepage_saving,
							params:{'HOME_ID':myHomeId,
								    'IS_DEFAULT':viewDefault,
								    'HOME_NAME':form.findField('editViewName').getValue(),
								    'HOME_DESC':form.findField('editViewDesc').getValue(),
								    'componentArray':Wb.encode(componentArray)
								    },
							success:function(){
								Wb.info(XipLang.portal_modify_success);
								me.fireEvent('changeView',columnsArray,form.findField('editViewName').getValue(),myHomeId);
								
							}
						});
					}
					
				}
			},
			{
				text :XipLang.xwf_lang_btn_cancel,
				iconCls:'delete_icon',
				handler : function() {
					me.fireEvent('closeWin');	
				}
			}]

		})
		this.callParent();
	}
})