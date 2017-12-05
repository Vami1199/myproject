Ext.Loader.setConfig({
	enabled : true
});

//设置路径
Ext.Loader.setPath('Ext.ux', '../../common/ux/');

//定义需要的插件
Ext.require([ 'Ext.data.*', 'Ext.grid.*', 'Ext.util.*',
		'Ext.tip.QuickTipManager', 'Ext.ux.data.PagingMemoryProxy',
		'Ext.ux.ProgressBarPager', 'Ext.selection.CheckboxModel',
		'Ext.ux.RowExpander', 'Ext.selection.CellModel', 'Ext.ux.CheckColumn',
		'Ext.state.*', 'Ext.form.*' ]);

Ext.onReady(function() {

			var proForm = Ext.create('Ext.form.Panel', {
				baseCls:'x-plain',
				title : '添加',
				url : '/base/addStart.do',
				//默认设置
				 defaults: {frame:true, width:200, height: 200},
				 layout: {
            		type: 'table',
		            columns: 3
		       },
				items : [ 
				
				{
					xtype : 'textfield',
					fieldLabel : '矿别名称',
					name : 'source.sourceName',
					allowBlank : false,
					readOnly:true
				},
				{
					xtype : 'textfield',
					fieldLabel : '单位简称',
					//必填项
					//pName
					name : 'company.coName',
					allowBlank : false,
					readOnly:true
				}, {
					xtype : 'textfield',
					fieldLabel : '单位全称',
					//必填项
					//pName
					name : 'company.coShort',
					allowBlank : false,
					readOnly:true
				},{
					xtype : 'textfield',
					name : 'start.startId',
					hidden:true
				},{
					xtype : 'textfield',
					name : 'station.sId',
					hidden:true
				}]

			});

			proForm.render('grid-example');
		});

/***********************************************************************************************/
/***********************************************************************************************/
