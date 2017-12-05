var store = new Ext.data.SimpleStore({
   fields : ['id', 'text'],
   data : [['1', '一月'], ['2', '二月'], ['3', '三月'], ['4', '四月'],
     ['5', '五月'], ['6', '六月'], ['7', '七月'], ['8', '八月'],
     ['9', '九月'], ['10', '十月'], ['11', '十一月'], ['12', '十二月']]
});

var combo = new new Ext.form.ComboBox({
   id : 'myCombo',
   name : 'name',// name只是改下拉的名称
   hiddenName : 'id',// 提交到后台的input的name ，对应下面store里的''id，必须要填
   width : 80,
   store : store,// 填充数据
   emptyText : '请选择',
   mode : 'local',// 数据模式，local代表本地数据
   readOnly : true,// 是否只读
   value : '',// 默认值,要设置为提交给后台的值，不要设置为显示文本,可选
   triggerAction : 'all',// 显示所有下列数据，一定要设置属性triggerAction为all
   allowBlank : false,// 不允许为空
   valueField : 'value',// 值,可选
   displayField : 'text',// 显示文本 ，对应下面store里的'text'，
   editable : false,// 是否允许输入
   forceSelection : true,// 必须选择一个选项
   blankText : '请选择'// 该项如果没有选择，则提示错误信息,
   listeners : {
      afterRender : function(combo) {
         var firstValue = store.reader.jsonData[0].text;
         combo.setValue(firstValue);//同时下拉框会将与name为firstValue值对应的 text显示
      }
   }
});
combo.on('load',function(){Ext.getCmp("myCombo").setValue(1);});

//combobox里的id一定要设置，并且不能和hiddenname的值相同，然后通过Ext.getCmp(id值).setValue(value)即可达到html里的select效果，注意这里的value表示的是store里的第几项！