/**
 *下拉选择框
 *Ext.data.ArrayStore
 *参数：data
 *参数：fields 
 */
Ext.define('Xip.wf.combo.SelectCombo',{
	extend:'Ext.form.ComboBox',
	uses:['Ext.data.ArrayStore'],
	fieldLabel:this.fieldLabel,
	labelAlign: "right",
	labelWidth: 100,
	displayField: "value",
	 valueField: "code",
	initComponent:function(){
		this.store = Ext.create('Ext.data.ArrayStore',{
			autoLoad:true,
			data:this.data,
			fields:this.fields
		});
		this.callParent();
	}
	
});