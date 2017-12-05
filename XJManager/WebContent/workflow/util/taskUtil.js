var TaskUtil={TASK_BTN_CONSULT:"btnConsult",TASK_BTN_DELEGATE:"btnDelegate",TASK_BTN_BACK:"btnBack",TASK_BTN_CONSULT_CLOSE:"btnCloseConsult",TASK_BTN_CONSULT_REVOKE:"btnRevokeConsult",TASK_BTN_SUBMIT:"btnSubmit",TASK_BTN_CANCEL:"btnCancel",TASK_BTN_COPYTO:"btnCopyTo",TASK_BTN_REJECT:"btnReject",BIZ_PANEL_FRAME:"bizPanelFrame",TASK_BTN_FORWARD:"btnForward",getCtxPath:function(){var c=document.location.pathname;var b=c.substr(1).indexOf("/");var a=c.substr(0,b+1);return a},sendAjaxReq:function(b,a,c){var d;Ext.Ajax.request({url:b,params:a,method:"post",timeout:3600000,async:c,success:function(e,f){d=Ext.JSON.decode(e.responseText)},failure:function(g,f){var e=Ext.JSON.decode(e.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),e.msg)}});return d},closeTaskWin:function(){if(Ext.getCmp("w7_taskWFWindow")){Ext.getCmp("w7_taskWFWindow").close()}else{window.parent.Ext.getCmp(xz_ExtWind_soft).close()}},createButtonsW7:function(n,p,c,q){var g;var o;var j=new Array();var r=new Array();if(q=="closed"){g={};g.flag="0";if(Ext.isEmpty(XipLang)){g.msg="待办已关闭"}else{g.msg=XipLang.xwf_lang_task_finished}o=[]}else{var h=TaskUtil.getCtxPath()+"/workItemAction.do?method=getButtonsByTaskId";var a={taskId:n};g=TaskUtil.sendAjaxReq(h,a,false);o=g.data}for(var l=0;l<o.length;l++){var m=o[l];var e=m.id;var d=m.code;var b=m.name;var k=m.disable;if(k=="N"){var f=new Ext.Button({text:b,x:5*(l+1),y:-2});if(d==TaskUtil.TASK_BTN_SUBMIT){f.setHandler(function(){var s=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_SUBMIT,c,p);if(s==null){TaskUtil.doSubmit(n,null,TaskUtil.TASK_BTN_SUBMIT,c,p)}else{var i=Ext.JSON.decode(s);if(i.flag==0){TaskUtil.doSubmit(n,null,TaskUtil.TASK_BTN_SUBMIT,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+i.msg);return false}}})}else{if(d==TaskUtil.TASK_BTN_CANCEL){f.setHandler(function(){Ext.MessageBox.confirm((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"您确定要撤回流程吗？":XipLang.process_recall_confirm),function(t){if(t=="yes"){var s=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_CANCEL,c,p);if(s==null){TaskUtil.doCancel(n,TaskUtil.TASK_BTN_CANCEL,c,p)}else{var i=Ext.JSON.decode(s);if(i.flag==0){TaskUtil.doCancel(n,TaskUtil.TASK_BTN_CANCEL,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+i.msg);return false}}}else{return false}})})}else{if(d==TaskUtil.TASK_BTN_CONSULT){f.setHandler(function(){var s=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_CONSULT,c,p);var t=Ext.getCmp("taskAuditComment").getValue();if(s==null){TaskUtil.chooseAllUsers(n,TaskUtil.TASK_BTN_CONSULT,c,p,t)}else{var i=Ext.JSON.decode(s);if(i.flag==0){TaskUtil.chooseAllUsers(n,TaskUtil.TASK_BTN_CONSULT,c,p,t)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+i.msg);return false}}})}else{if(d==TaskUtil.TASK_BTN_CONSULT_CLOSE){f.setHandler(function(){var t=Ext.getCmp("taskAuditComment").getValue();var s=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_CONSULT_CLOSE,c,p);if(s==null){TaskUtil.closeConsult(n,t,TaskUtil.TASK_BTN_CONSULT_CLOSE,c,p)}else{var i=Ext.JSON.decode(s);if(i.flag==0){TaskUtil.closeConsult(n,t,TaskUtil.TASK_BTN_CONSULT_CLOSE,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+i.msg);return false}}})}else{if(d==TaskUtil.TASK_BTN_CONSULT_REVOKE){f.setHandler(function(){var t=Ext.getCmp("taskAuditComment").getValue();var s=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_CONSULT_REVOKE,c,p);if(s==null){TaskUtil.revokeConsult(n,t,TaskUtil.TASK_BTN_CONSULT_REVOKE,c,p)}else{var i=Ext.JSON.decode(s);if(i.flag==0){TaskUtil.revokeConsult(n,t,TaskUtil.TASK_BTN_CONSULT_REVOKE,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+i.msg);return false}}})}else{if(d==TaskUtil.TASK_BTN_DELEGATE){f.setHandler(function(){var s=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_DELEGATE,c,p);var t=Ext.getCmp("taskAuditComment").getValue();if(s==null){TaskUtil.chooseAllUsers(n,TaskUtil.TASK_BTN_DELEGATE,c,p,t)}else{var i=Ext.JSON.decode(s);if(i.flag==0){TaskUtil.chooseAllUsers(n,TaskUtil.TASK_BTN_DELEGATE,c,p,t)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+i.msg);return false}}})}else{if(d==TaskUtil.TASK_BTN_BACK){f.setHandler(function(){var v=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_BACK,c,p);if(v==null){var u=TaskUtil.getCtxPath()+"/workItemAction.do?method=getBackActivityList";var t={taskId:n};respActArray=TaskUtil.sendAjaxReq(u,t,false);if(respActArray.flag==0){var i=respActArray.data;var w=Ext.getCmp("taskAuditComment").getValue();TaskUtil.chooseBackActivity(i,n,w,TaskUtil.TASK_BTN_BACK,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),respActArray.msg);return false}}else{var s=Ext.JSON.decode(v);if(s.flag==0){var u=TaskUtil.getCtxPath()+"/workItemAction.do?method=getBackActivityList";var t={taskId:n};respActArray=TaskUtil.sendAjaxReq(u,t,false);if(respActArray.flag==0){var i=respActArray.data;var w=Ext.getCmp("taskAuditComment").getValue();TaskUtil.chooseBackActivity(i,n,w,TaskUtil.TASK_BTN_BACK,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),respActArray.msg);return false}}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+s.msg);return false}}})}else{if(d==TaskUtil.TASK_BTN_REJECT){f.setHandler(function(){var t=Ext.getCmp("taskAuditComment").getValue();var s=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_REJECT,c,p);if(s==null){TaskUtil.doReject(n,t,TaskUtil.TASK_BTN_REJECT,c,p)}else{var i=Ext.JSON.decode(s);if(i.flag==0){TaskUtil.doReject(n,t,TaskUtil.TASK_BTN_REJECT,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+i.msg);return false}}})}else{if(d==TaskUtil.TASK_BTN_COPYTO){f.setHandler(function(){var s=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_COPYTO,c,p);if(s==null){TaskUtil.closeCopyTo(n,TaskUtil.TASK_BTN_COPYTO,c,p)}else{var i=Ext.JSON.decode(s);if(i.flag==0){TaskUtil.closeCopyTo(n,TaskUtil.TASK_BTN_COPYTO,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+i.msg);return false}}})}else{if(d==TaskUtil.TASK_BTN_FORWARD){f.setHandler(function(){var s=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_FORWARD,c,p);if(s==null){TaskUtil.forward(n,c,p)}else{var i=Ext.JSON.decode(s);if(i.flag==0){TaskUtil.forward(n,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+i.msg);return false}}})}else{r.push(f.getId()+";"+d);f.setHandler(function(w){var x="";for(var u=0;u<r.length;u++){var i=r[u].split(";");if(i[0]==w.id){x=i[1];break}}var y=Ext.getCmp("taskAuditComment").getValue();var t=TaskUtil.beforeHandlerEventWithCallback("check",n,x,c,p);if(t==true){TaskUtil.beforeHandlerEventWithCallback("run",n,x,c,p,function(){var A=TaskUtil.beforeHandlerEvent(x,c,p);if(A==null){TaskUtil.completeTask(n,y,null,x,c,p)}else{var z=Ext.JSON.decode(A);if(z.flag==0){TaskUtil.completeTask(n,y,null,x,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+z.msg);return false}}});return false}var v=TaskUtil.beforeHandlerEvent(x,c,p);if(v==null){TaskUtil.completeTask(n,y,null,x,c,p)}else{var s=Ext.JSON.decode(v);if(s.flag==0){TaskUtil.completeTask(n,y,null,x,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+s.msg);return false}}})}}}}}}}}}}j.push(f)}}return j},createButtons:function(n,p,c,q){var g;var o;var j=new Array();var r=new Array();if(q=="closed"){g={};g.flag="0";if(Ext.isEmpty(XipLang)){g.msg="待办已关闭"}else{g.msg=XipLang.xwf_lang_task_finished}o=[]}else{var h=TaskUtil.getCtxPath()+"/workItemAction.do?method=getButtonsByTaskId";var a={taskId:n};g=TaskUtil.sendAjaxReq(h,a,false);o=g.data}for(var l=0;l<o.length;l++){var m=o[l];var e=m.id;var d=m.code;var b=m.name;var k=m.disable;if(k=="N"){var f=new Ext.Button({text:b});if(d==TaskUtil.TASK_BTN_SUBMIT){f.setHandler(function(){var s=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_SUBMIT,c,p);if(s==null){TaskUtil.doSubmit(n,null,TaskUtil.TASK_BTN_SUBMIT,c,p)}else{var i=Ext.JSON.decode(s);if(i.flag==0){TaskUtil.doSubmit(n,null,TaskUtil.TASK_BTN_SUBMIT,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+i.msg);return false}}})}else{if(d==TaskUtil.TASK_BTN_CANCEL){f.setHandler(function(){Ext.MessageBox.confirm((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"您确定要撤回流程吗？":XipLang.process_recall_confirm),function(t){if(t=="yes"){var s=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_CANCEL,c,p);if(s==null){TaskUtil.doCancel(n,TaskUtil.TASK_BTN_CANCEL,c,p)}else{var i=Ext.JSON.decode(s);if(i.flag==0){TaskUtil.doCancel(n,TaskUtil.TASK_BTN_CANCEL,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+i.msg);return false}}}else{return false}})})}else{if(d==TaskUtil.TASK_BTN_CONSULT){f.setHandler(function(){var s=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_CONSULT,c,p);var t=textArea.getValue();if(s==null){TaskUtil.chooseAllUsers(n,TaskUtil.TASK_BTN_CONSULT,c,p,t)}else{var i=Ext.JSON.decode(s);if(i.flag==0){TaskUtil.chooseAllUsers(n,TaskUtil.TASK_BTN_CONSULT,c,p,t)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+i.msg);return false}}})}else{if(d==TaskUtil.TASK_BTN_CONSULT_CLOSE){f.setHandler(function(){var t=textArea.getValue();var s=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_CONSULT_CLOSE,c,p);if(s==null){TaskUtil.closeConsult(n,t,TaskUtil.TASK_BTN_CONSULT_CLOSE,c,p)}else{var i=Ext.JSON.decode(s);if(i.flag==0){TaskUtil.closeConsult(n,t,TaskUtil.TASK_BTN_CONSULT_CLOSE,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+i.msg);return false}}})}else{if(d==TaskUtil.TASK_BTN_CONSULT_REVOKE){f.setHandler(function(){var t=textArea.getValue();var s=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_CONSULT_REVOKE,c,p);if(s==null){TaskUtil.revokeConsult(n,t,TaskUtil.TASK_BTN_CONSULT_REVOKE,c,p)}else{var i=Ext.JSON.decode(s);if(i.flag==0){TaskUtil.revokeConsult(n,t,TaskUtil.TASK_BTN_CONSULT_REVOKE,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+i.msg);return false}}})}else{if(d==TaskUtil.TASK_BTN_DELEGATE){f.setHandler(function(){var s=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_DELEGATE,c,p);var t=textArea.getValue();if(s==null){TaskUtil.chooseAllUsers(n,TaskUtil.TASK_BTN_DELEGATE,c,p,t)}else{var i=Ext.JSON.decode(s);if(i.flag==0){TaskUtil.chooseAllUsers(n,TaskUtil.TASK_BTN_DELEGATE,c,p,t)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+i.msg);return false}}})}else{if(d==TaskUtil.TASK_BTN_BACK){f.setHandler(function(){var v=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_BACK,c,p);if(v==null){var u=TaskUtil.getCtxPath()+"/workItemAction.do?method=getBackActivityList";var t={taskId:n};respActArray=TaskUtil.sendAjaxReq(u,t,false);if(respActArray.flag==0){var i=respActArray.data;var w=textArea.getValue();TaskUtil.chooseBackActivity(i,n,w,TaskUtil.TASK_BTN_BACK,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),respActArray.msg);return false}}else{var s=Ext.JSON.decode(v);if(s.flag==0){var u=TaskUtil.getCtxPath()+"/workItemAction.do?method=getBackActivityList";var t={taskId:n};respActArray=TaskUtil.sendAjaxReq(u,t,false);if(respActArray.flag==0){var i=respActArray.data;var w=textArea.getValue();TaskUtil.chooseBackActivity(i,n,w,TaskUtil.TASK_BTN_BACK,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),respActArray.msg);return false}}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+s.msg);return false}}})}else{if(d==TaskUtil.TASK_BTN_REJECT){f.setHandler(function(){var t=textArea.getValue();var s=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_REJECT,c,p);if(s==null){TaskUtil.doReject(n,t,TaskUtil.TASK_BTN_REJECT,c,p)}else{var i=Ext.JSON.decode(s);if(i.flag==0){TaskUtil.doReject(n,t,TaskUtil.TASK_BTN_REJECT,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+i.msg);return false}}})}else{if(d==TaskUtil.TASK_BTN_COPYTO){f.setHandler(function(){var s=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_COPYTO,c,p);if(s==null){TaskUtil.closeCopyTo(n,TaskUtil.TASK_BTN_COPYTO,c,p)}else{var i=Ext.JSON.decode(s);if(i.flag==0){TaskUtil.closeCopyTo(n,TaskUtil.TASK_BTN_COPYTO,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+i.msg);return false}}})}else{if(d==TaskUtil.TASK_BTN_FORWARD){f.setHandler(function(){var s=TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_FORWARD,c,p);if(s==null){TaskUtil.forward(n,c,p)}else{var i=Ext.JSON.decode(s);if(i.flag==0){TaskUtil.forward(n,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+i.msg);return false}}})}else{r.push(f.getId()+";"+d);f.setHandler(function(w){var x="";for(var u=0;u<r.length;u++){var i=r[u].split(";");if(i[0]==w.id){x=i[1];break}}var y=textArea.getValue();var t=TaskUtil.beforeHandlerEventWithCallback("check",n,x,c,p);if(t==true){TaskUtil.beforeHandlerEventWithCallback("run",n,x,c,p,function(){var A=TaskUtil.beforeHandlerEvent(x,c,p);if(A==null){TaskUtil.completeTask(n,y,null,x,c,p)}else{var z=Ext.JSON.decode(A);if(z.flag==0){TaskUtil.completeTask(n,y,null,x,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+z.msg);return false}}});return false}var v=TaskUtil.beforeHandlerEvent(x,c,p);if(v==null){TaskUtil.completeTask(n,y,null,x,c,p)}else{var s=Ext.JSON.decode(v);if(s.flag==0){TaskUtil.completeTask(n,y,null,x,c,p)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+s.msg);return false}}})}}}}}}}}}}j.push(f)}}return j},getBizFormUrl:function(c){var b=TaskUtil.getCtxPath()+"/workItemAction.do?method=getTaskBaseInfo";var a={taskId:c};var d=TaskUtil.sendAjaxReq(b,a,false);if(d==null||d==""||d=="undefined"){return null}else{return d.formUrl}},beforeHandlerEventWithCallback:function(c,b,f,a,d,g){if(c=="check"){var e=document.getElementById(TaskUtil.BIZ_PANEL_FRAME);if(e!=null){if(e.contentWindow.beforeHandlerWithCallback){return true}return false}else{return false}}else{document.getElementById(TaskUtil.BIZ_PANEL_FRAME).contentWindow.beforeHandlerWithCallback(b,f,a,g,d)}},beforeHandlerEvent:function(b,e,a){var d=null;var f=document.getElementById(TaskUtil.BIZ_PANEL_FRAME);if(f!=null){try{d=f.contentWindow.beforeHandler(b,e,a)}catch(c){d=null}}return d},afterHandlerEvent:function(b,d,a){var e=document.getElementById(TaskUtil.BIZ_PANEL_FRAME);if(e!=null){try{e.contentWindow.afterHandler(b,d,a)}catch(c){}}},chooseApprover:function(f,m,l,i,b,c,n){var g="";if(f.length>0){g='<font color="red">【'+f[0].actName+"】</font>节点的"}var k=Ext.create("Ext.form.field.Text",{id:"selUserId",width:250,inputType:"text",labelSeparator:":",fieldLabel:(Ext.isEmpty(XipLang)==true?"用户名":XipLang.xwf_lang_user_name),labelWidth:80,labelAlign:"right",listeners:{specialkey:function(q,p){if(p.getKey()==p.ENTER){var o=k.getValue().toUpperCase();a.getStore().filterBy(function(r,t){var s=r.get("userName");return(s.indexOf(o)!=-1)})}}}});var e=Ext.create("Ext.toolbar.Toolbar",{items:[k]});var a=Ext.create("Ext.grid.Panel",{store:{data:f,fields:["userId","actName","userName","empName","orgName"]},selModel:{showHeaderCheckbox:false,selType:"checkboxmodel",mode:m?"SINGLE":"MULTI"},tbar:e,columns:[new Ext.grid.RowNumberer({header:(Ext.isEmpty(XipLang)==true?"序号":XipLang.xwf_lang_number),width:50,align:"center"}),{header:"用户ID",hidden:true,dataIndex:"userId"},{header:"节点名",width:180,hidden:true,dataIndex:"actName"},{header:(Ext.isEmpty(XipLang)==true?"用户名":XipLang.xwf_lang_user_name),width:120,dataIndex:"userName"},{header:(Ext.isEmpty(XipLang)==true?"员工名":XipLang.xwf_lang_emp_name),width:120,dataIndex:"empName"},{header:(Ext.isEmpty(XipLang)==true?"组织名":XipLang.xwf_lang_org_name),width:250,dataIndex:"orgName"}],width:"100%",height:"100%",loadMask:{msg:(Ext.isEmpty(XipLang)==true?"数据加载中...":XipLang.xwf_lang_data_loading)},listeners:{afterrender:function(){a.getSelectionModel().select(a.getStore().first())}}});var d=Ext.create("Ext.Button",{text:(Ext.isEmpty(XipLang)==true?"选择":XipLang.xwf_lang_selecting),handler:function(){var o=a.getSelectionModel().getSelection();if(o.length==0){if(TaskUtil.TASK_BTN_FORWARD==b){Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请选择转发人":XipLang.task_util_query_sendor))}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请选择审批人":XipLang.task_util_query_auditor))}return false}else{var p="";Ext.each(o,function(s){var q=s.get("userId");if(p==""){p=q}else{p=p+","+q}});j.close();if(b=="btnSubmit"){TaskUtil.doSubmit(l,p,b,c,n)}else{if(b=="btnForward"){TaskUtil.doForward(l,p,c,n)}else{TaskUtil.completeTask(l,i,p,b,c,n)}}}}});var h=Ext.create("Ext.Button",{text:(Ext.isEmpty(XipLang)==true?"取消":XipLang.xwf_lang_btn_cancel),handler:function(){j.close()}});var j=Ext.create("Ext.window.Window",{title:'<div style="padding:7 "><span style="color:blue;">'+(Ext.isEmpty(XipLang)==true?"请选择节点审批人":XipLang.task_util_query_auditor)+"："+g+"</span></div>",width:700,height:400,modal:true,layout:"fit",autoScroll:true,constrain:true,adow:false,shadow:false,items:[a],buttonAlign:"right",buttons:[d,h]});j.show()},chooseAllUsers:function(l,a,c,o,i){if(i==null||i==""||i=="undefined"){if(a=="btnConsult"){Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请审批意见框中填写征询备注信息！":XipLang.xwf_lang_consultation))}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请审批意见框中填写委派备注信息！":XipLang.xwf_lang_appointer))}return false}Ext.define("User",{extend:"Ext.data.Model",fields:[{name:"userId",type:"string"},{name:"userName",type:"string"},{name:"empCode",type:"string"},{name:"empName",type:"string"},{name:"orgName",type:"string"}]});Ext.define("User",{extend:"Ext.data.Model",fields:[{name:"userId",mapping:"userId"},{name:"userName",mapping:"userName"},{name:"empCode",mapping:"empCode"},{name:"empName",mapping:"empName"},{name:"orgName",mapping:"orgName"}]});var n=Ext.create("Ext.data.Store",{model:"User",pageSize:10,proxy:{type:"ajax",url:TaskUtil.getCtxPath()+"/workItemAction.do?method=getUsersForConsultOrDelegate4Ext",reader:{type:"json",root:"dataList",totalProperty:"totalProperty"}},listeners:{beforeload:function(){var p={taskId:l,condition:e.getValue()};Ext.apply(n.proxy.extraParams,p)}}});var e=Ext.create("Ext.form.field.Text",{width:250,inputType:"text",labelSeparator:":",fieldLabel:(Ext.isEmpty(XipLang)==true?"名称":XipLang.xwf_lang_name),labelWidth:40,labelAlign:"right",listeners:{specialkey:function(q,p){if(p.getKey()==p.ENTER){n.load({params:{start:0,limit:10}})}}}});var f=Ext.create("Ext.toolbar.Toolbar",{items:[e]});var g=Ext.create("Ext.grid.Panel",{store:n,selModel:{showHeaderCheckbox:false,selType:"checkboxmodel",mode:"SINGLE"},tbar:f,columns:[new Ext.grid.RowNumberer({header:(Ext.isEmpty(XipLang)==true?"序号":XipLang.xwf_lang_number),width:50,align:"center"}),{header:"用户ID",hidden:true,dataIndex:"userId"},{header:(Ext.isEmpty(XipLang)==true?"用户名称":XipLang.xwf_lang_user_name),width:120,dataIndex:"userName"},{header:(Ext.isEmpty(XipLang)==true?"员工编码":XipLang.xwf_lang_emp_code),width:120,dataIndex:"empCode"},{header:(Ext.isEmpty(XipLang)==true?"员工姓名":XipLang.xwf_lang_emp_name),width:120,dataIndex:"empName"},{header:(Ext.isEmpty(XipLang)==true?"组织名称":XipLang.xwf_lang_org_name),width:290,dataIndex:"orgName"}],width:400,height:125,loadMask:{msg:(Ext.isEmpty(XipLang)==true?"数据加载中...":XipLang.xwf_lang_data_loading)},listeners:{render:function(){n.load({callback:function(){g.getSelectionModel().select(n.first())}})}},dockedItems:[{xtype:"pagingtoolbar",store:n,dock:"bottom",displayInfo:true}]});var k="请选择征询人";var m="请选择委派人";if(!Ext.isEmpty(XipLang)){k=XipLang.xwf_lang_asker;m=XipLang.xwf_lang_signer}var b=(a=="btnConsult"?k:m);var d=Ext.create("Ext.Button",{text:"选择",handler:function(){var p=g.getSelectionModel().getSelection();if(p.length==0){Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),b);return false}else{var q="";Ext.each(p,function(s){q=s.get("userId")});j.close();if(a=="btnConsult"){TaskUtil.doConsult(l,q,a,c,o,i)}else{if(a=="btnDelegate"){TaskUtil.doDelegate(l,q,a,c,o,i)}else{}}}}});var h=Ext.create("Ext.Button",{text:(Ext.isEmpty(XipLang)==true?"取消":XipLang.xwf_lang_btn_cancel),handler:function(){j.close()}});var j=Ext.create("Ext.window.Window",{title:'<div style="padding:7 "><span style="color:blue;">'+b+"</span></div>",width:750,height:400,modal:true,layout:"fit",autoScroll:true,constrain:true,shadow:false,onEsc:function(){j.hide()},items:[g],buttonAlign:"right",buttons:[d,h]});j.show()},chooseBackActivity:function(e,i,g,b,c,k){if(g==null||g==""||g=="undefined"){Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请填写回退意见！":XipLang.xwf_lang_back_comment));return false}var j=Ext.create("Ext.data.Store",{data:e,fields:[{name:"activityId",type:"string"},{name:"activityCode",type:"string"},{name:"activityName",type:"string"}]});var a=Ext.create("Ext.grid.Panel",{store:j,selModel:{showHeaderCheckbox:false,selType:"checkboxmodel",mode:"SINGLE"},columns:[new Ext.grid.RowNumberer({header:(Ext.isEmpty(XipLang)==true?"序号":XipLang.xwf_lang_number),width:50}),{header:"节点ID",hidden:true,dataIndex:"activityId"},{header:(Ext.isEmpty(XipLang)==true?"节点编码":XipLang.xwf_lang_node_code),width:200,dataIndex:"activityCode"},{header:(Ext.isEmpty(XipLang)==true?"节点名称":XipLang.xwf_lang_node_name),width:300,dataIndex:"activityName"}],width:"100%",height:"100%",loadMask:{msg:(Ext.isEmpty(XipLang)==true?"数据加载中...":XipLang.xwf_lang_data_loading)}});var d=Ext.create("Ext.Button",{text:(Ext.isEmpty(XipLang)==true?"选择":XipLang.xwf_lang_selecting),handler:function(){var l=a.getSelectionModel().getSelection();if(l.length==0){Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请选择回退至的节点！":XipLang.xwf_lang_back_node));return false}else{var m="";Ext.each(l,function(n){m=n.get("activityId")});h.hide();TaskUtil.doBack(i,g,m,b,c,k)}}});var f=Ext.create("Ext.Button",{text:(Ext.isEmpty(XipLang)==true?"取消":XipLang.xwf_lang_btn_cancel),handler:function(){h.hide()}});var h=Ext.create("Ext.window.Window",{title:'<div style="padding:7 "><span style="color:blue;">'+(Ext.isEmpty(XipLang)==true?"请选择回退至的节点！":XipLang.xwf_lang_back_node)+"</span></div>",width:600,height:400,modal:true,layout:"fit",autoScroll:true,constrain:true,shadow:false,items:[a],buttonAlign:"right",buttons:[d,f]});h.show()},doSubmit:function(c,f,b,a,d){var e=Ext.MessageBox.show({title:(Ext.isEmpty(XipLang)==true?"请等待":XipLang.xwf_lang_wait_tip),msg:(Ext.isEmpty(XipLang)==true?"正在提交请求.......":XipLang.xwf_lang_submit_request),width:240,wait:true,progress:true,closable:false});Ext.Ajax.request({url:TaskUtil.getCtxPath()+"/workItemAction.do?method=submitProcess",params:{taskId:c,userIds:f},method:"post",timeout:3600000,success:function(g,h){e.hide();var g=Ext.JSON.decode(g.responseText);if(g.flag=="0"){Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),g.msg,function(){TaskUtil.closeTaskWin();TaskUtil.afterHandlerEvent(b,a,d)},this)}else{if(g.flag=="1"){Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),g.msg);return false}else{if(g.multiselect=="Y"){TaskUtil.chooseApprover(g.data,false,c,null,b,a,d)}else{TaskUtil.chooseApprover(g.data,true,c,null,b,a,d)}}}},failure:function(i,h){e.hide();var g=Ext.JSON.decode(g.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),g.msg)}})},doCancel:function(c,b,a,d){var e=Ext.MessageBox.show({title:(Ext.isEmpty(XipLang)==true?"请等待":XipLang.xwf_lang_wait_tip),msg:(Ext.isEmpty(XipLang)==true?"正在提交请求.......":XipLang.xwf_lang_submit_request),width:240,wait:true,progress:true,closable:false});Ext.Ajax.request({url:TaskUtil.getCtxPath()+"/workItemAction.do?method=revokeProcess",params:{taskId:c},method:"post",timeout:3600000,success:function(f,g){e.hide();var f=Ext.JSON.decode(f.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),f.msg,function(){TaskUtil.closeTaskWin();TaskUtil.afterHandlerEvent(b,a,d)},this)},failure:function(h,g){e.hide();var f=Ext.JSON.decode(f.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),f.msg)}})},doConsult:function(d,c,b,a,e,g){if(g==null||g==""||g=="undefined"){Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请填写征询备注信息！":XipLang.task_util_consulte_comment));return false}var f=Ext.MessageBox.show({title:(Ext.isEmpty(XipLang)==true?"请等待":XipLang.xwf_lang_wait_tip),msg:(Ext.isEmpty(XipLang)==true?"正在提交请求.......":XipLang.xwf_lang_submit_request),width:240,wait:true,progress:true,closable:false});Ext.Ajax.request({url:TaskUtil.getCtxPath()+"/workItemAction.do?method=doConsult",params:{taskId:d,userId:c,comment:g},method:"post",timeout:3600000,success:function(h,i){f.hide();var h=Ext.JSON.decode(h.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),h.msg,function(){TaskUtil.closeTaskWin();TaskUtil.afterHandlerEvent(b,a,e)},this)},failure:function(j,i){f.hide();var h=Ext.JSON.decode(h.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),h.msg)}})},closeConsult:function(c,f,b,a,d){if(f==null||f==""||f=="undefined"){Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请在审批意见框中填写征询反馈意见!":XipLang.xwf_lang_consultation));return false}var e=Ext.MessageBox.show({title:(Ext.isEmpty(XipLang)==true?"请等待":XipLang.xwf_lang_wait_tip),msg:(Ext.isEmpty(XipLang)==true?"正在提交请求.......":XipLang.xwf_lang_submit_request),width:240,wait:true,progress:true,closable:false});Ext.Ajax.request({url:TaskUtil.getCtxPath()+"/workItemAction.do?method=closeConsultTask",params:{taskId:c,comment:f},method:"post",timeout:3600000,success:function(g,h){e.hide();var g=Ext.JSON.decode(g.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),g.msg,function(){TaskUtil.closeTaskWin();TaskUtil.afterHandlerEvent(b,a,d)},this)},failure:function(i,h){e.hide();var g=Ext.JSON.decode(g.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),g.msg)}})},revokeConsult:function(c,f,b,a,d){var e=Ext.MessageBox.show({title:(Ext.isEmpty(XipLang)==true?"请等待":XipLang.xwf_lang_wait_tip),msg:(Ext.isEmpty(XipLang)==true?"正在提交请求.......":XipLang.xwf_lang_submit_request),width:240,wait:true,progress:true,closable:false});Ext.Ajax.request({url:TaskUtil.getCtxPath()+"/workItemAction.do?method=revokeConsultTask",params:{taskId:c,comment:f},method:"post",timeout:3600000,success:function(g,h){e.hide();var g=Ext.JSON.decode(g.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),g.msg,function(){TaskUtil.closeTaskWin();TaskUtil.afterHandlerEvent(b,a,d)},this)},failure:function(i,h){e.hide();var g=Ext.JSON.decode(g.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),g.msg)}})},doDelegate:function(d,c,b,a,e,g){if(g==null||g==""||g=="undefined"){Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请填写备注信息！":XipLang.xwf_lang_note_comment));return false}var f=Ext.MessageBox.show({title:(Ext.isEmpty(XipLang)==true?"请等待":XipLang.xwf_lang_wait_tip),msg:(Ext.isEmpty(XipLang)==true?"正在提交请求.......":XipLang.xwf_lang_submit_request),width:240,wait:true,progress:true,closable:false});Ext.Ajax.request({url:TaskUtil.getCtxPath()+"/workItemAction.do?method=doDelegate",params:{taskId:d,userId:c,comment:g},method:"post",timeout:3600000,success:function(h,i){f.hide();var h=Ext.JSON.decode(h.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),h.msg,function(){TaskUtil.closeTaskWin();TaskUtil.afterHandlerEvent(b,a,e)},this)},failure:function(j,i){f.hide();var h=Ext.JSON.decode(h.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),h.msg)}})},doBack:function(d,g,b,c,a,e){if(g==null||g==""||g=="undefined"){Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请填写审批意见！":XipLang.xwf_lang_back_comment));return false}var f=Ext.MessageBox.show({title:(Ext.isEmpty(XipLang)==true?"请等待":XipLang.xwf_lang_wait_tip),msg:(Ext.isEmpty(XipLang)==true?"正在提交请求.......":XipLang.xwf_lang_submit_request),width:240,wait:true,progress:true,closable:false});Ext.Ajax.request({url:TaskUtil.getCtxPath()+"/workItemAction.do?method=doBack",params:{taskId:d,backToActivityId:b,comment:g},method:"post",timeout:3600000,success:function(h,i){f.hide();var h=Ext.JSON.decode(h.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),h.msg,function(){TaskUtil.closeTaskWin();TaskUtil.afterHandlerEvent(c,a,e)},this)},failure:function(j,i){f.hide();var h=Ext.JSON.decode(h.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),h.msg)}})},doReject:function(c,f,b,a,d){if(f==null||f==""||f=="undefined"){Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请填写审批意见！":XipLang.xwf_lang_reject_comment));return false}var e=Ext.MessageBox.show({title:(Ext.isEmpty(XipLang)==true?"请等待":XipLang.xwf_lang_wait_tip),msg:(Ext.isEmpty(XipLang)==true?"正在提交请求.......":XipLang.xwf_lang_submit_request),width:240,wait:true,progress:true,closable:false});Ext.Ajax.request({url:TaskUtil.getCtxPath()+"/workItemAction.do?method=rejectProcess",params:{taskId:c,comment:f},method:"post",timeout:3600000,success:function(g,h){e.hide();var g=Ext.JSON.decode(g.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),g.msg,function(){TaskUtil.closeTaskWin();TaskUtil.afterHandlerEvent(b,a,d)},this)},failure:function(i,h){e.hide();var g=Ext.JSON.decode(g.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),g.msg)}})},closeCopyTo:function(c,b,a,d){var e=Ext.MessageBox.show({title:(Ext.isEmpty(XipLang)==true?"请等待":XipLang.xwf_lang_wait_tip),msg:(Ext.isEmpty(XipLang)==true?"正在提交请求.......":XipLang.xwf_lang_submit_request),width:240,wait:true,progress:true,closable:false});Ext.Ajax.request({url:TaskUtil.getCtxPath()+"/workItemAction.do?method=closeCopyToTask",params:{taskId:c},method:"post",timeout:3600000,success:function(f,g){e.hide();var f=Ext.JSON.decode(f.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),f.msg,function(){TaskUtil.closeTaskWin();TaskUtil.afterHandlerEvent(b,a,d)},this)},failure:function(h,g){e.hide();var f=Ext.JSON.decode(f.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),f.msg)}})},completeTask:function(c,g,f,b,a,d){if(g==null||g==""||g=="undefined"){Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请填写审批意见！":XipLang.xwf_lang_auditor_comment));return false}var e=Ext.MessageBox.show({title:(Ext.isEmpty(XipLang)==true?"请等待":XipLang.xwf_lang_wait_tip),msg:(Ext.isEmpty(XipLang)==true?"正在提交请求.......":XipLang.xwf_lang_submit_request),width:240,wait:true,progress:true,closable:false});Ext.Ajax.request({url:TaskUtil.getCtxPath()+"/workItemAction.do?method=completeWorkItem",params:{taskId:c,comment:g,userIds:f,lineCode:b},method:"post",timeout:3600000,success:function(h,i){e.hide();var h=Ext.JSON.decode(h.responseText);if(h.flag=="0"){Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),h.msg,function(){TaskUtil.closeTaskWin();TaskUtil.afterHandlerEvent(b,a,d)},this)}else{if(h.flag=="1"){Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),h.msg);return false}else{if(h.multiselect=="Y"){TaskUtil.chooseApprover(h.data,false,c,g,b,a,d)}else{TaskUtil.chooseApprover(h.data,true,c,g,b,a,d)}}}},failure:function(j,i){e.hide();var h=Ext.JSON.decode(h.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),h.msg)}})},forward:function(b,a,c){var d=Ext.MessageBox.show({title:(Ext.isEmpty(XipLang)==true?"请等待":XipLang.xwf_lang_wait_tip),msg:(Ext.isEmpty(XipLang)==true?"正在查询转发人.......":XipLang.xwf_lang_transfer_query),width:240,wait:true,progress:true,closable:false});Ext.Ajax.request({url:TaskUtil.getCtxPath()+"/workItemAction.do?method=getForwardExecutors",params:{taskId:b},method:"post",timeout:3600000,success:function(e,f){d.hide();var e=Ext.JSON.decode(e.responseText);if(e.flag=="0"){TaskUtil.chooseApprover(e.data,true,b,"",TaskUtil.TASK_BTN_FORWARD,a,c)}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),e.msg)}},failure:function(g,f){d.hide();var e=Ext.JSON.decode(e.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),e.msg)}})},doForward:function(c,b,a,d){var e=Ext.MessageBox.show({title:(Ext.isEmpty(XipLang)==true?"请等待":XipLang.xwf_lang_wait_tip),msg:(Ext.isEmpty(XipLang)==true?"正在提交请求.......":XipLang.xwf_lang_submit_request),width:240,wait:true,progress:true,closable:false});Ext.Ajax.request({url:TaskUtil.getCtxPath()+"/workItemAction.do?method=doForward",params:{taskId:c,userId:b},method:"post",timeout:3600000,success:function(f,g){e.hide();var f=Ext.JSON.decode(f.responseText);if(f.flag=="0"){Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),f.msg);TaskUtil.afterHandlerEvent(TaskUtil.TASK_BTN_FORWARD,a,d);TaskUtil.closeTaskWin()}else{Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),f.msg)}},failure:function(h,g){e.hide();var f=Ext.JSON.decode(f.responseText);Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),f.msg)}})}};