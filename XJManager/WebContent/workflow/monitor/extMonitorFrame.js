
function init_page(contextPath, insCode,winId,language){
	Ext.onReady(function(){
		var _tmpHeigth = window.parent.Ext.getCmp(winId).height - 70;
        var _tmpWidth = window.parent.Ext.getCmp(winId).width - 15;
		var lang_title = '审批历史记录';
		var lang_notice = '提示';
		var lang_monitor = '流程监控';
		if(!Ext.isEmpty(language) && 'en' == language){
			lang_title = 'Approval History';
			lang_notice = 'Notice';
			lang_monitor = 'Process Monitoring';
		}
		// 审批历史
		var approverPanel = new Ext.Panel({
			title	:  lang_title,
			html	:  '<iframe id=\"task_panel_url\" width='+_tmpWidth+' height='+_tmpHeigth+' frameborder=\"0\"></iframe>',
			listeners : {
				'afterrender' : function(){
					// 判断当前实例是否已归档
					Ext.Ajax.request({
						url 		: contextPath+'/workItemAction.do?method=isArchedInstance',
						params		: {'insCode'  : insCode},
						method 	: 'post',
						timeout : 3600000,
						//async	:	false,
						success : function(response, options) {
							var resp = Ext.JSON.decode(response.responseText); 
							if(resp.flag == "0"){
								// 已归档
								//Ext.getDom('task_panel_url').src = contextPath+'/main?xwl=23X432D7JXHQ&varType=ins&insCode='+insCode;
								Ext.getDom('task_panel_url').src = contextPath+'/m?xwl=xip/wf/history/archiveHistory&varType=ins&insCode='+insCode;
							}else{
								// 未归档
								//Ext.getDom('task_panel_url').src = contextPath+'/main?xwl=23VMPVCRPO4Y&varType=ins&insCode='+insCode;
								Ext.getDom('task_panel_url').src = contextPath+'/m?xwl=xip/wf/history/approveHistory&varType=ins&insCode='+insCode;
							}
						},
						failure : function(reponse, options) {
							var response = Ext.JSON.decode(response.responseText);
							Ext.Msg.alert(lang_notice, response.msg);
						}
					});	
				}
			}
		});
		
		// 监控页面
		var monitorPanel = new Ext.Panel({
			title : lang_monitor,
			height: '100%',
			html : '<iframe src=\"'+contextPath+'/workflow/task/processMonitor.jsp?varType=ins&insCode='+insCode+'\"width=\"100%\" height='+_tmpHeigth +' frameborder=\"0\"></iframe>'
			//html : '<iframe id="_swfFrame" src=\"'+contextPath+'/workflow/designer/ProcessMonitor.swf?type=ins&id='+insCode+'\"width=\"100%\" height='+_tmpHeigth+' frameborder=\"0\"></iframe>'
		});

		var tabpanel = new Ext.TabPanel({
			activeItem 	: 0,
			width 		: '100%',
			height 		: '100%',
			region 		: 'center',
			layout      : 'fit',
			items 		: [approverPanel, monitorPanel]
		});

		new Ext.Viewport({
			width 	: '100%',
			height 	: '100%',
			layout 	: 'border',
			items 	: [tabpanel]
		});	
	}) ;
}