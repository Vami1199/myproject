//该文件共享视图的取得需要后台的支持，可以自己添加
Ext.define('com.fb.portal.ViewConfig', {
	extend : 'Ext.form.Panel',
	initComponent : function() {
		var me = this;
		Ext.apply(me, {
			bodyPadding : 10,
			width:350,
			frame:false,
			buttonAlign:'center',
			//border:false,
			baseCls:'my-panel-no-border',
			layout: 'form',
			defaultType : 'textfield',
			items : [{
						fieldLabel : '<font color="red">*</font>'+XipLang.portal_homepage_name,
						name : 'viewName',
						allowBlank : false,
						labelAlign:'right',
						labelWidth : 90
					}, {
						fieldLabel : '<font color="red">*</font>'+XipLang.portal_homepage_desc,
						name : 'viewDesc',
						allowBlank : false,
						labelAlign:'right',
						labelWidth : 90

					},{
						fieldLabel : XipLang.portal_homepage_default,
						xtype:'checkbox',
						name : 'isDefault',
						labelAlign:'right',
						labelWidth : 90
					}
					,{
						xtype : 'radiogroup',
						fieldLabel : '<font color="red">*</font>'+XipLang.portal_homepage_layout,
						labelAlign:'right',
						labelWidth : 90,
						name : 'layoutNum',
						layout : 'hbox',
						items : [{

									boxLabel : XipLang.portal_column_1,
									name : 'columnNum',
									inputValue : '1'

								}, {
									boxLabel : XipLang.portal_column_2,
									name : 'columnNum',
									inputValue : '2',
									checked : true
								}, {
									boxLabel : XipLang.portal_column_3,
									name : 'columnNum',
									inputValue : '3'
								}, {
									boxLabel : XipLang.portal_column_4,
									name : 'columnNum',
									inputValue : '4'
								}]

					},
					 {
						fieldLabel : '<font color="red">*</font>'+XipLang.portal_homepage_colwidth,
						emptyText:XipLang.portal_homepage_coldesc,
						name : 'columnWeight',
						labelAlign:'right',
						labelWidth : 90,
						allowBlank : false,
						listeners:{
						  render:function(field,t){
							  Ext.QuickTips.init();
						      Ext.QuickTips.register({
							      target: field.el,
							      text: XipLang.portal_column_note
							  })}
						}

					}],
			buttons : [{
				text : XipLang.config_save_btn,
				iconCls:'ok_icon',
				handler : function() {
					var form = this.up('form').getForm();
					var columnsNum = form.findField('columnNum').getGroupValue();
					var widthColumns = form.findField('columnWeight').getValue();
					var columnsArray = widthColumns.split(',');
					var allWidhtVal =0 ;
                    var isRightVal = true;
					Ext.Array.each(columnsArray,function(tmp){
	                     if(parseInt(parseFloat(tmp)*100) == 0 || parseInt(parseFloat(tmp)*100)<0){
	                            isRightVal = false;
	                        }
						allWidhtVal = allWidhtVal + parseFloat(tmp)*100;
					});
					//往后台添加一条新的记录，然后重新load portal面板
					if(form.isValid() == false){
						Wb.warn(XipLang.system_must_fill_up);
					}else if(columnsNum != columnsArray.length){
						Wb.warn(XipLang.portal_column_not_match);
					}else if(!isRightVal){
                        Wb.warn(XipLang.portal_column_less_width);
                    }else if(parseInt(allWidhtVal) != 100){
						Wb.warn(XipLang.portal_column_total_sum);
					}else{
						me.fireEvent('addNewViewSuccess',form);
					}
					
				}
			},
			{
				text :XipLang.xwf_lang_btn_cancel,
				iconCls:'delete_icon',
				handler : function() {
					me.fireEvent('closeAddWin');	
				}
			}]

		})
		this.callParent();
	}
})