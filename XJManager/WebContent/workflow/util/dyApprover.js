/**
 * 开始节点选择审批人
 * @param params
 */
function dyApproverStart(params){
  //创建流程时发生错误
  if(params.flag==1){
    return;
  }

  var instanceCode = params.instanceCode;
  if(Ext.isEmpty(instanceCode)){
    Ext.Msg.alert('提示','实例编码为空，请确认');
    return;
  }

  function choose(){
    //判断是否设置了审批人
    for(var i=0; i<approverStore.getCount(); i++){
      var record = approverStore.getAt(i);
      if(Ext.isEmpty(record.get('APPROVE_ID_SELECT'))){
        Ext.Msg.alert('提示','请设置<font color="red">【'+record.get('ATTR_NAME')+'】</font>的审批人');
        return;
      }
    }
    
    //更新审批人到实例属性表中去
    var approverArray = [];
    for(var j=0; j<approverStore.getCount(); j++){
      approverArray.push(approverStore.getAt(i).data);
    }
    
    Ext.Msg.wait('正在设置审批人，请稍后。。。');
    Ext.Ajax.request({
      url: 'main?xwl=23ZUXZ8Z1FLA',
      method: 'POST',
      timeout: 300000,
      params: {approverArray:Ext.JSON.encode(approverArray)},
      success: function ( result, request) {
        Ext.Msg.hide();
        Ext.Msg.alert('提示','设置成功');
        approverWin.close();
      },
      failure: function ( result, request) {
        Ext.Msg.alert('提示','请求提交失败，可能是网络或其他原因');
      }
    });
    
  }

  var approverStore = new Ext.data.Store({
    proxy:{
      type:"ajax",
      url:"main?xwl=23ZUP52JTXHQ",
      timeout:30000000,
      reader:{
        type:"json",
        root:"rows",
        rootProperty:"rows",
        totalProperty:"total"},
      listeners:{
        exception:function(proxy,response,operation,options){
          //Wb.except(response.responseText);
        }
      }
    },
    fields:[],
    storeId:"approverStore",
    params:params,
    listeners:{
      beforeload:function(store,operation,options){
        //if(!Wb.setStore(store))return false;
        //Wb.mask("","");
        store.getProxy().extraParams.instanceCode = params.instanceCode;
      },
      load:function(store,records,successful,operation,options){
        //Wb.unmask("");
        for(var i=0; i<store.getCount(); i++){
          store.getAt(i).set('INSTANCE_CDOE',params.instanceCode);
        }
        store.commitChanges();
      }}
  });

  var approverGrid = Ext.create('Ext.grid.Panel', {
    store: approverStore,
    selModel: { showHeaderCheckbox :false,selType: 'checkboxmodel',mode:'SINGLE' },   //选择框
    columns:[
      new Ext.grid.RowNumberer(),
      {text:'实例编码',dataIndex:'INSTANCE_CDOE', hidden:true},   
      {text:'实体id', dataIndex:'ENTITY_ID', hidden:true},
      {text:'属性id', dataIndex:'ATTR_ID', hidden:true},
      {text:'属性编码', dataIndex:'ATTR_CODE', hidden:true},
      {text:'属性名称', dataIndex:'ATTR_NAME', width:130},
      {text:'待选人id', dataIndex:'APPROVER_ID', hidden:true},
      {text:'待选人名称', dataIndex:'APPROVER_NAME', hidden:true},
      {text:'选择审批人id', dataIndex:'APPROVE_ID_SELECT', hidden:true},
      {text:'选择审批人名称', dataIndex:'APPROVE_NAME_SELECT', width:180, flex:1}
    ],
    height: 200,
    width: 400,
    listeners:{
      'rowdblclick':choose,
      'cellClick':function(view, td, cellIndex, record, tr, rowIndex, event, options){
        if(cellIndex==10){

          var selectApproverStore = new Ext.data.Store({
            fields:[{"name":"USER_ID","type":"string"},{"name":"USER_NAME","type":"string"},{"name":"EMP_NAME","type":"string"}],
            storeId:"selectApproverStore"
          });

          //将数据写入到selectApproverStore中去
          var selRecord = approverGrid.getSelectionModel().getSelection()[0];
          var userIdAppends = selRecord.get('APPROVER_ID');
          var userNameAppends = selRecord.get('APPROVER_NAME');

          if(!Ext.isEmpty(userIdAppends) && !Ext.isEmpty(userNameAppends)){
            var userIdsArray = userIdAppends.split(',');
            var userNameArray = userNameAppends.split(',');

            for(var i=0; i<userIdsArray.length; i++){
              var priId = userIdsArray[i];
              var priName = userNameArray[i].split('|')[0];
              var empName = userNameArray[i].split('|')[1];

              var approver = {
                USER_ID:userIdsArray[i], 
                USER_NAME:Ext.isEmpty(priName)?'':priName,
                EMP_NAME:Ext.isEmpty(empName)?'':empName
              };

              selectApproverStore.add(approver);
            }
          }

          var selectApproverGrid = Ext.create('Ext.grid.Panel', {
            store: selectApproverStore,
            selModel: { showHeaderCheckbox :true,selType: 'checkboxmodel',mode:'MULTI' },   //选择框
            simpleSelect:true,
            columns:[
              new Ext.grid.RowNumberer(),
              {text:'用户id', dataIndex:'USER_ID', hidden:true},   
              {text:'用户名', dataIndex:'USER_NAME', width:150},
              {text:'员工名称', dataIndex:'EMP_NAME', flex:1}
            ]		    
          });

          var selectApproverWin = new Ext.Window({
            width:450,
            height:350,
            layout:'fit',
            items:[selectApproverGrid],
            modal:true,
            closeAction:'close',
            title:'请选择审批人',
            buttonAlign:'center',
            buttons:[
              {
                text:'确定',handler:function(){
                  var selUserIdArray = [];
                  var selUserNameArray = [];

                  var selectRecords = selectApproverGrid.getSelectionModel().getSelection();

                  for(var i=0; i<selectRecords.length; i++){
                    var uid = selectRecords[i].get('USER_ID');
                    var uName = selectRecords[i].get('USER_NAME');
                    var eName = Ext.isEmpty(selectRecords[i].get('EMP_NAME'))?'':selectRecords[i].get('EMP_NAME');

                    selUserIdArray.push(uid);
                    selUserNameArray.push(uName+'|'+eName);
                  }


                  selRecord.set('APPROVE_ID_SELECT', selUserIdArray.toString());
                  selRecord.set('APPROVE_NAME_SELECT', selUserNameArray.toString());

                  selectApproverWin.close();
                }
              },{
                text:'取消',handler:function(){
                  selectApproverWin.close(); 
                }
              }]
          });

          selectApproverWin.show();
        }
      }
    }				    
  });

  approverStore.load();

  var approverWin = new Ext.Window({
    width:500,
    height:400,
    layout:'fit',
    buttonAlign:'center',
    items:[approverGrid],
    modal:true,
    closable:false,
    closeAction:'close',
    title:'请设置审批人',
    buttons:[
      {
        text:'确定',handler:choose
      }/*,{
        text:'取消',handler:function(){
          approverWin.close(); 
        }
      }*/]
  });

  approverWin.show();
}


beforeHandler