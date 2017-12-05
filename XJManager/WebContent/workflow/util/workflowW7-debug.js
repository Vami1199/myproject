/**
 *W7 workflow js
 *1、打开通知
 *2、打开待办 
 */
function openNotice(id){
	window.parent.Wb.run({
		url:'m?xwl=xip/tools/notice/usernotice/checkNotice',
		success:function(appObj){
            appObj.initWindow({
                title     : (Ext.isEmpty(XipLang)==true?"查看通知":XipLang.wf_open_notice_title),
                noticeId  :id,
                closeWindow: function() {
                	app.messageGrid.getStore().load();
                }
              });
			
		}
		
	});    
  }
/**
 *打开待办页面
 */
function handlerTaskPage(contextPath, taskId, taskState) {
	var msg = Ext.MessageBox.show({
		title 	 : 	(Ext.isEmpty(XipLang)==true?'请等待':XipLang.xwf_lang_wait_tip),
		msg 	 : 	(Ext.isEmpty(XipLang)==true?'正在提交请求.......':XipLang.xwf_lang_submit_request),
		width 	 : 	300,
		wait	 : 	true,
		progress : 	true,
		closable : 	false
	});	
  Wb.request({
    url: contextPath+'/workItemAction.do?method=isCustomTaskByTaskId',
    method: 'POST',
    showMask:false,
    params: {
      'taskId': taskId,
      'taskState': taskState
    },
    success: function(response, options) {
      var resp = Wb.decode(response.responseText);
      if (resp.flag == '0') {
    	  msg.hide();
        // 客户化待办
        var url = resp.url;
        //window.open(url + "&taskId=" + taskId + "&taskState=" + taskState, "_blank");
        window.parent.Xip.showExtWindow({
            url:url + "&taskId=" + taskId + "&taskState=" + taskState,
            isMax:true,
            closeCallback:function(){
              //刷新待办已办列表，以及其他操作......
          	  app.taskGrid.getStore().load();
          	  app.historyGrid.getStore().load();
          	  app.archTaskGrid.getStore().load();
            }
        });
      } else if (resp.flag == '1') {
    	  window.parent.Wb.run({
          url: 'm?xwl=xip/pub/wftask/wfTaskFrame',
          params:{'taskId':taskId},
          success: function(appObj) {
        	msg.hide();
            appObj.initWindow({
              title: (Ext.isEmpty(XipLang)==true?"审批":XipLang.wf_open_task_audit_title),
              closeTaskWin: function(objParams) {
                //刷新待办已办列表，以及其他操作......
            	  app.taskGrid.getStore().load();
            	  app.historyGrid.getStore().load();
            	  app.archTaskGrid.getStore().load();
              }
            });
          }
        });
      } else {
        // 错误提示
        Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
      }
    },
    failure: function(response, options) {
      msg.hide();
      var resp = Wb.decode(response.responseText);
      Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
    }
  });
}  