Ext.define('com.fb.portal.LayoutList', {
	extend : 'Ext.form.Panel',
	initComponent : function() {
		var me = this;
		Ext.apply(me, {
					autoDestroy : true,
					layout : 'column',
					name:'layoutRadio',
					defaultType:'radiogroup',
					width:'100%',
					height:'100%',
					items : [{
						height:'20%',
						columnWidth:1/4,
						layout:'vbox',
						items:[{
							inputValue : '11',
							height:50,
							flex:1,
							name:'radio',
							boxLabel : '<img src="'+baseUrl+ 'extmvc/resources/img/1.gif" alt="1列布局" width="45px"/>'
						}]
					}, {
						height:'20%',
						columnWidth:1/4,
						layout:'vbox',
						items : [{
									inputValue : '21',
									name:'radio',
									height:50,
									boxLabel : '<img src="'+baseUrl+ 'extmvc/resources/img/21.gif" alt="2列布局" width="45px"/>'
								},{
									inputValue : '22',
									name:'radio',
									height:50,
									boxLabel : '<img src="'+baseUrl+ 'extmvc/resources/img/22.gif" alt="2列布局" width="45px"/>'
								}, {
									inputValue : '23',
									name:'radio',
									height:50,
									boxLabel : '<img src="'+baseUrl+ 'extmvc/resources/img/23.gif" alt="2列布局" width="45px"/>'
								}]
					}, {
						height:'20%',
						columnWidth:1/4,
						layout:'vbox',
						items : [{
									inputValue : '31',
									name:'radio',
									height:50,
									boxLabel : '<img src="'+baseUrl+ 'extmvc/resources/img/31.gif" alt="3列布局" width="45px"/>'
								},{
									inputValue : '32',
									name:'radio',
									height:50,
									checked:true,
									boxLabel : '<img src="'+baseUrl+ 'extmvc/resources/img/32.gif" alt="3列布局" width="45px"/>'
								}]
					}, {
						height:'20%',
						columnWidth:1/4,
						layout:'vbox',
						items : [{
									inputValue : '41',
									name:'radio',
									height:50,
									boxLabel : '<img src="'+baseUrl+ 'extmvc/resources/img/4.gif" alt="4列布局" width="46px"/>'
								}]
					}],
					buttons : [{
								text : '保存',
								handler : function() {
									var layoutstyle = me.getForm().findField('radio').getGroupValue();
									//form.getValues().name 4.2无法识别，还是组件构造的问题	
									//me.getForm().getValues().radio; 
									me.fireEvent('getStyle', layoutstyle);
									var parentWin = this.findParentByType("window");
									parentWin.close();
								}
							}]
				});
		this.callParent();
	}
});