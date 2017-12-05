function getGlobalData(url,taskId){var respArray=[];Ext.Ajax.request({url:url,params:{"taskId":taskId},method:"post",timeout:3600000,async:false,success:function(response,options){respArray=Ext.JSON.decode(response.responseText)},failure:function(reponse,options){var response=Ext.JSON.decode(response.responseText);Ext.Msg.alert("提示",response.msg)}});return respArray}function beforeHandlerEvent(buttonCode,instanceCode,businessId){var json=null;var iframeObj=document.getElementById("bizPanelFrame");if(iframeObj!=null){try{json=iframeObj.contentWindow.beforeHandler(buttonCode,instanceCode,businessId)}catch(ex){json=null}}return json}function afterHandlerEvent(buttonCode,instanceCode,businessId){var iframeObj=document.getElementById("bizPanelFrame");if(iframeObj!=null){try{iframeObj.contentWindow.afterHandler(buttonCode,instanceCode,businessId)}catch(ex){}}}function chooseApprover(contextPath,records,isSingleSelect,taskId,comment,buttonCode,insCode,bizId){var actName="";if(records.length>0){actName='<font color="red">【'+records[0].actName+"】</font>节点的"}var store=Ext.create("Ext.data.JsonStore",{data:records,fields:["userId","actName","userName","empName","orgName"]});var selUser=Ext.create("Ext.form.field.Text",{id:"selUserId",width:250,inputType:"text",labelSeparator:":",fieldLabel:"用户名",labelWidth:50,labelAlign:"right",listeners:{"specialkey":function(field,e){if(e.getKey()==e.ENTER){var value=selUser.getValue();store.filterBy(function(record,id){var text=record.get("empName");return(text.indexOf(value)!=-1)})}}}});var ttbar=Ext.create("Ext.toolbar.Toolbar",{items:[selUser]});var grid=Ext.create("Ext.grid.Panel",{store:store,selModel:{showHeaderCheckbox:false,selType:"checkboxmodel",mode:isSingleSelect?"SINGLE":"MULTI"},tbar:ttbar,columns:[new Ext.grid.RowNumberer({header:"序号",width:35}),{header:"用户ID",hidden:true,dataIndex:"userId"},{header:"节点名",width:180,hidden:true,dataIndex:"actName"},{header:"用户名",width:120,dataIndex:"userName"},{header:"员工姓名",width:120,dataIndex:"empName"},{header:"组织名称",width:250,dataIndex:"orgName"}],width:"100%",height:"100%",loadMask:{"msg":"数据加载中..."},dockedItems:[{xtype:"pagingtoolbar",store:store,dock:"bottom",displayInfo:true}],listeners:{"afterrender":function(){grid.getSelectionModel().select(store.first())}}});var btnConfirm=Ext.create("Ext.Button",{text:"选择",handler:function(){var record_array=grid.getSelectionModel().getSelection();if(record_array.length==0){Ext.Msg.alert("提示","请选人审批人!");return false}else{var userIds="";Ext.each(record_array,function(r){var userId=r.get("userId");if(userIds==""){userIds=userId}else{userIds=userIds+","+userId}});win.hide();if(buttonCode=="btnSubmit"){doSubmit(contextPath,taskId,userIds,buttonCode,insCode,bizId)}else{completeTask(contextPath,taskId,comment,userIds,buttonCode,insCode,bizId)}}}});var btnCancel=Ext.create("Ext.Button",{text:"取消",handler:function(){win.hide()}});var win=Ext.create("Ext.window.Window",{title:'<div style="padding:7 "><span style="color:blue;">请选择'+actName+"审批人</span></div>",width:700,height:400,modal:true,layout:"fit",autoScroll:true,constrain:true,adow:false,shadow:false,items:[grid],buttonAlign:"right",buttons:[btnConfirm,btnCancel]});win.show()}function chooseAllUsers(contextPath,taskId,buttonCode,insCode,bizId,comment){if(comment==null||comment==""||comment=="undefined"){if(buttonCode=="btnConsult"){Ext.Msg.alert("提示","请审批意见框中填写征询备注信息!")}else{Ext.Msg.alert("提示","请审批意见框中填写委派备注信息!")}return false}Ext.define("User",{extend:"Ext.data.Model",fields:[{name:"userId",type:"string"},{name:"userName",type:"string"},{name:"empCode",type:"string"},{name:"empName",type:"string"},{name:"orgName",type:"string"}]});Ext.define("User",{extend:"Ext.data.Model",fields:[{name:"userId",mapping:"userId"},{name:"userName",mapping:"userName"},{name:"empCode",mapping:"empCode"},{name:"empName",mapping:"empName"},{name:"orgName",mapping:"orgName"}]});var myStore=Ext.create("Ext.data.Store",{model:"User",pageSize:10,proxy:{type:"ajax",url:contextPath+"/workItemAction.do?method=getUsersForConsultOrDelegate4Ext",reader:{type:"json",root:"dataList",totalProperty:"totalProperty"}},listeners:{"beforeload":function(){var params={"taskId":taskId,"condition":condition.getValue()};Ext.apply(myStore.proxy.extraParams,params)}}});var condition=Ext.create("Ext.form.field.Text",{width:250,inputType:"text",labelSeparator:":",fieldLabel:"名称",labelWidth:40,labelAlign:"right",listeners:{"specialkey":function(field,e){if(e.getKey()==e.ENTER){myStore.load({params:{"start":0,"limit":10}})}}}});var mytbar=Ext.create("Ext.toolbar.Toolbar",{items:[condition]});var myGrid=Ext.create("Ext.grid.Panel",{store:myStore,selModel:{showHeaderCheckbox:false,selType:"checkboxmodel",mode:"SINGLE"},tbar:mytbar,columns:[new Ext.grid.RowNumberer({header:"序号",width:35}),{header:"用户ID",hidden:true,dataIndex:"userId"},{header:"用户名称",width:120,dataIndex:"userName"},{header:"员工编号",width:120,dataIndex:"empCode"},{header:"员工姓名",width:120,dataIndex:"empName"},{header:"组织名称",width:290,dataIndex:"orgName"}],width:400,height:125,loadMask:{"msg":"数据加载中..."},listeners:{"render":function(){myStore.load({callback:function(){myGrid.getSelectionModel().select(myStore.first())}})}},dockedItems:[{xtype:"pagingtoolbar",store:myStore,dock:"bottom",displayInfo:true}]});var tttile=(buttonCode=="btnConsult"?"请选择征询人":"请选择委派人");var btnConfirm=Ext.create("Ext.Button",{text:"选择",handler:function(){var record_array=myGrid.getSelectionModel().getSelection();if(record_array.length==0){Ext.Msg.alert("提示",tttile);return false}else{var userId="";Ext.each(record_array,function(r){userId=r.get("userId")});myWin.hide();if(buttonCode=="btnConsult"){doConsult(contextPath,taskId,userId,buttonCode,insCode,bizId,comment)}else{if(buttonCode=="btnDelegate"){doDelegate(contextPath,taskId,userId,buttonCode,insCode,bizId,comment)}else{}}}}});var btnCancel=Ext.create("Ext.Button",{text:"取消",handler:function(){myWin.hide()}});var myWin=Ext.create("Ext.window.Window",{title:'<div style="padding:7 "><span style="color:blue;">'+tttile+"</span></div>",width:750,height:400,modal:true,layout:"fit",autoScroll:true,constrain:true,shadow:false,onEsc:function(){myWin.hide()},items:[myGrid],buttonAlign:"right",buttons:[btnConfirm,btnCancel]});myWin.show()}function chooseBackActivity(contextPath,records,taskId,comment,buttonCode,insCode,bizId){if(comment==null||comment==""||comment=="undefined"){Ext.Msg.alert("提示","请填写回退意见!");return false}var store=Ext.create("Ext.data.JsonStore",{data:records,fields:["activityId","activityCode","activityName"]});var grid=Ext.create("Ext.grid.Panel",{store:store,selModel:{showHeaderCheckbox:false,selType:"checkboxmodel",mode:"SINGLE"},columns:[new Ext.grid.RowNumberer({header:"序号",width:35}),{header:"节点ID",hidden:true,dataIndex:"activityId"},{header:"节点编码",width:200,dataIndex:"activityCode"},{header:"节点名称",width:300,dataIndex:"activityName"}],width:"100%",height:"100%",loadMask:{"msg":"数据加载中..."},dockedItems:[{xtype:"pagingtoolbar",store:store,dock:"bottom",displayInfo:true}]});var btnConfirm=Ext.create("Ext.Button",{text:"选择",handler:function(){var record_array=grid.getSelectionModel().getSelection();if(record_array.length==0){Ext.Msg.alert("提示","请选择回退至的节点!");return false}else{var backToActivityId="";Ext.each(record_array,function(r){backToActivityId=r.get("activityId")});win.hide();doBack(contextPath,taskId,comment,backToActivityId,buttonCode,insCode,bizId)}}});var btnCancel=Ext.create("Ext.Button",{text:"取消",handler:function(){win.hide()}});var win=Ext.create("Ext.window.Window",{title:'<div style="padding:7 "><span style="color:blue;">请选择回退节点</span></div>',width:600,height:400,modal:true,layout:"fit",autoScroll:true,constrain:true,shadow:false,items:[grid],buttonAlign:"right",buttons:[btnConfirm,btnCancel]});win.show()};