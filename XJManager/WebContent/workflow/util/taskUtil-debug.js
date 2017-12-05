var TaskUtil = {
		
	// 征询按钮编码
	TASK_BTN_CONSULT : "btnConsult" ,
	// 委派按钮编码
	TASK_BTN_DELEGATE : "btnDelegate" ,
	// 回退按钮编码
	TASK_BTN_BACK : "btnBack" ,
	// 征询反馈按钮编码
	TASK_BTN_CONSULT_CLOSE : "btnCloseConsult" ,
	// 撤销征询按钮编码
	TASK_BTN_CONSULT_REVOKE : "btnRevokeConsult" ,
	// 提交流程按钮编码
	TASK_BTN_SUBMIT : "btnSubmit" ,
	// 撤销流程按钮编码
	TASK_BTN_CANCEL : "btnCancel" ,
	// 关闭抄送按钮编码
	TASK_BTN_COPYTO : "btnCopyTo" ,
	// 驳回流程	按钮编码
	TASK_BTN_REJECT : "btnReject" ,	
	// 业务表单iframe对象 id
	BIZ_PANEL_FRAME : "bizPanelFrame",
	// 转发按钮
	TASK_BTN_FORWARD : "btnForward",
	
	
	// 获取应用根目录
	getCtxPath : function(){
	    var pathName = document.location.pathname;
	    var index = pathName.substr(1).indexOf("/");
	    var result = pathName.substr(0,index+1);
	    return result;		
	},
	
	/**
	 * 提交ajax请求
	 * @param {} requestUrl		:	请求URL
	 * @param {} requestParam	:	请求参数(json格式)
	 * @param {} isAsync		:	请求同步/异步性(true为同步,false为异步)
	 */
	sendAjaxReq : function(requestUrl, requestParam, isAsync){
		var resp ;
		// 提交请求
		Ext.Ajax.request({
			url 	: 	requestUrl,
			params	: 	requestParam,
			method 	: 	'post',
			timeout :	3600000,
			async	:	isAsync,
			success : function(response, options) {
				resp = Ext.JSON.decode(response.responseText); 
			},
			failure : function(reponse, options) {
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
			}
		});			
		return resp ;			
	} , 
	
	/**
	 * 关闭当前待办处理窗口
	 */
	closeTaskWin : function(){
		//根据弹出窗口的有无，判断是否为W7的待办页面
		/*if(!Ext.isEmpty(xz_ExtWind_soft)){
			window.parent.Ext.getCmp(xz_ExtWind_soft).close() ;
		}else{
			//直接关闭W7创建的窗口
			Ext.getCmp('w7_taskWFWindow').close();
			
		}*/
		if(Ext.getCmp('w7_taskWFWindow')){
			//直接关闭W7创建的窗口
			Ext.getCmp('w7_taskWFWindow').close();
		}else{
			window.parent.Ext.getCmp(xz_ExtWind_soft).close() ;
		}
	},
	/**
	 * 根据待办ID生成审批按钮组(W7)
	 * @param {} taskId		:	待办ID
	 * @param {} bizId		:	业务ID
	 * @param {} insCode	:	实例编码
	 * @param {} taskState	:	待办状态
	 */
	createButtonsW7 : function(taskId, bizId, insCode,taskState){
		var respButtonArray  ;
		var buttons ;
		var btnArray = new Array() ;	// 记录按钮数组
		var lineArray = new Array() ;	// 记录连线按钮数组
		if(taskState == 'closed'){
			// 待办已关闭
			respButtonArray = {} ;
			respButtonArray.flag = "0" ;
			if(Ext.isEmpty(XipLang)){
				respButtonArray.msg = "待办已关闭" ;
			}else{
				respButtonArray.msg = XipLang.xwf_lang_task_finished;
			}
			buttons = [] ; 
			
		}else{
			var _reqUrl = TaskUtil.getCtxPath() + '/workItemAction.do?method=getButtonsByTaskId' ;
			var _reqParam = {'taskId' : taskId} ;
			respButtonArray = TaskUtil.sendAjaxReq(_reqUrl, _reqParam, false) ;
			buttons = respButtonArray.data; 
		}
		for(var i=0; i<buttons.length; i++){
			var button = buttons[i];
			var id	= button.id ;
			var code = button.code;
			var name = button.name;
			var disable = button.disable; // Y不可用   N可用	
			
			if(disable=="N"){	// 如果disable属性为 "Y"时, 则不显示按钮
				
				// 定义按钮对象
				var btn = new Ext.Button({
					text	: 	name,
					x       :5*(i+1),
					y       : -2
				});	
				
				// 根据按钮编码分配按钮处理事件
				if(code == TaskUtil.TASK_BTN_SUBMIT){ // 提交流程
					btn.setHandler(function(){
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_SUBMIT, insCode, bizId) ;
						if(json == null){// 不存在前置函数
							// 执行流程提交
							TaskUtil.doSubmit(taskId, null, TaskUtil.TASK_BTN_SUBMIT, insCode, bizId);		
							
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								// 执行流程提交
								TaskUtil.doSubmit(taskId, null, TaskUtil.TASK_BTN_SUBMIT, insCode, bizId);	
								
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}
					});
						
				}else if(code == TaskUtil.TASK_BTN_CANCEL){	// 撤回流程
					btn.setHandler(function(){
						Ext.MessageBox.confirm((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"您确定要撤回流程吗？":XipLang.process_recall_confirm),function(opt){
							if(opt == 'yes'){
								// 执行前置函数
								var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_CANCEL, insCode, bizId) ;
								
								if(json == null){// 不存在前置函数
									// 执行流程撤回
									TaskUtil.doCancel(taskId, TaskUtil.TASK_BTN_CANCEL, insCode, bizId) ;	
									
								}else{ // 存在前置函数
									var response = Ext.JSON.decode(json);
									
									if(response.flag == 0){	// 执行成功
										// 执行流程撤回
										TaskUtil.doCancel(taskId, TaskUtil.TASK_BTN_CANCEL, insCode, bizId) ;		
										
									}else{
										Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
										return false; 
									}	
								}
							}else{
								return false ;								
							}
						});
					});
					
				}else if(code == TaskUtil.TASK_BTN_CONSULT){ // 征询
					btn.setHandler(function(){
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_CONSULT, insCode, bizId) ;
						
						var comment = Ext.getCmp('taskAuditComment').getValue(); 
						
						if(json == null){// 不存在前置函数
							TaskUtil.chooseAllUsers(taskId, TaskUtil.TASK_BTN_CONSULT, insCode, bizId, comment) ;
							
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								TaskUtil.chooseAllUsers(taskId, TaskUtil.TASK_BTN_CONSULT, insCode, bizId, comment) ;
								
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}						
					});
					
				}else if(code == TaskUtil.TASK_BTN_CONSULT_CLOSE){ // 征询反馈
					btn.setHandler(function(){
						// 审批意见
						var comment = Ext.getCmp('taskAuditComment').getValue();
						
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_CONSULT_CLOSE, insCode, bizId) ;
						
						if(json == null){// 不存在前置函数
							TaskUtil.closeConsult(taskId,comment,TaskUtil.TASK_BTN_CONSULT_CLOSE, insCode, bizId) ;							
							
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								TaskUtil.closeConsult(taskId,comment,TaskUtil.TASK_BTN_CONSULT_CLOSE, insCode, bizId) ;	
								
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}						
					});
					
				}else if(code == TaskUtil.TASK_BTN_CONSULT_REVOKE){ // 撤销征询
					btn.setHandler(function(){
						var comment = Ext.getCmp('taskAuditComment').getValue(); 
						
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_CONSULT_REVOKE, insCode, bizId) ;
						
						if(json == null){// 不存在前置函数
							TaskUtil.revokeConsult(taskId,comment,TaskUtil.TASK_BTN_CONSULT_REVOKE, insCode, bizId) ;
							
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								TaskUtil.revokeConsult(taskId,comment,TaskUtil.TASK_BTN_CONSULT_REVOKE, insCode, bizId) ;
								
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}						
					});	
					
				}else if(code == TaskUtil.TASK_BTN_DELEGATE){ // 委派处理
					btn.setHandler(function(){
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_DELEGATE, insCode, bizId) ;
						
						var comment = Ext.getCmp('taskAuditComment').getValue();
						
						if(json == null){// 不存在前置函数
							TaskUtil.chooseAllUsers(taskId, TaskUtil.TASK_BTN_DELEGATE, insCode, bizId, comment) ;
							
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								TaskUtil.chooseAllUsers(taskId, TaskUtil.TASK_BTN_DELEGATE, insCode, bizId, comment) ;
								
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}						
					});
					
				}else if(code == TaskUtil.TASK_BTN_BACK){ // 回退流程
					btn.setHandler(function(){
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_BACK, insCode, bizId) ;
						
						if(json == null){// 不存在前置函数
							// 取得回退节点信息
							var _reqUrl = TaskUtil.getCtxPath()+'/workItemAction.do?method=getBackActivityList' ;
							var _reqParam = {'taskId' : taskId} ;
							respActArray = TaskUtil.sendAjaxReq(_reqUrl, _reqParam, false) ;		
							if(respActArray.flag == 0){
								var acts = respActArray.data
								// 取得回退意见
								var comment = Ext.getCmp('taskAuditComment').getValue();
								// 执行回退处理
								TaskUtil.chooseBackActivity(acts, taskId, comment, TaskUtil.TASK_BTN_BACK, insCode, bizId) ;							
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),respActArray.msg) ;
								return false ;
							}							
							
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								// 取得回退节点信息
								var _reqUrl = TaskUtil.getCtxPath()+'/workItemAction.do?method=getBackActivityList' ;
								var _reqParam = {'taskId' : taskId} ;
								respActArray = TaskUtil.sendAjaxReq(_reqUrl, _reqParam, false) ;								
								
								if(respActArray.flag == 0){
									var acts = respActArray.data
									// 取得回退意见
									var comment = Ext.getCmp('taskAuditComment').getValue();
									// 执行回退处理
									TaskUtil.chooseBackActivity(acts, taskId, comment, TaskUtil.TASK_BTN_BACK, insCode, bizId) ;							
								}else{
									Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),respActArray.msg) ;
									return false ;
								}								
								
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}						
					});
					
				}else if(code == TaskUtil.TASK_BTN_REJECT){ // 驳回流程
					btn.setHandler(function(){
						var comment = Ext.getCmp('taskAuditComment').getValue(); 
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_REJECT, insCode, bizId) ;
						
						if(json == null){// 不存在前置函数
							TaskUtil.doReject(taskId, comment, TaskUtil.TASK_BTN_REJECT, insCode, bizId) ;
							
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								TaskUtil.doReject(taskId, comment, TaskUtil.TASK_BTN_REJECT, insCode, bizId) ;
								
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}
					});	
					
				}else if(code == TaskUtil.TASK_BTN_COPYTO){ // 关闭抄送待办
					btn.setHandler(function(){
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_COPYTO, insCode, bizId) ;
						
						if(json == null){// 不存在前置函数
							TaskUtil.closeCopyTo(taskId, TaskUtil.TASK_BTN_COPYTO, insCode, bizId) ;
							
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								TaskUtil.closeCopyTo(taskId, TaskUtil.TASK_BTN_COPYTO, insCode, bizId) ;
								
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}
					});
					
				}else if(code == TaskUtil.TASK_BTN_FORWARD){ //转发
					btn.setHandler(function(){
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_FORWARD, insCode, bizId) ;
						
						if(json == null){// 不存在前置函数
							TaskUtil.forward(taskId, insCode, bizId);
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								TaskUtil.forward(taskId, insCode, bizId);
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}
					});
					
				}else{	// 按钮处理
					lineArray.push(btn.getId()+";"+code) ;
					btn.setHandler(function(code){
						// 计算按钮编码【点击时执行此段代码】
						var lineCode  = '' ;
						for(var j=0; j<lineArray.length; j++){
							var a = lineArray[j].split(';') ;
							if(a[0] == code.id){
								lineCode = a[1] ;
								break ;
							}
						}
						var comment = Ext.getCmp('taskAuditComment').getValue();
						
						//added by qp at 16/04/19
						var isRun = TaskUtil.beforeHandlerEventWithCallback("check", taskId, lineCode, insCode, bizId); 
						
						if(isRun==true){
							TaskUtil.beforeHandlerEventWithCallback("run", taskId, lineCode, insCode, bizId, function(){
								// 执行前置函数
								var json = TaskUtil.beforeHandlerEvent(lineCode, insCode, bizId) ;
								
								if(json == null){// 不存在前置函数
									TaskUtil.completeTask(taskId, comment, null, lineCode, insCode, bizId) ;	
									
								}else{ // 存在前置函数
									var response = Ext.JSON.decode(json);
									
									if(response.flag == 0){	// 执行成功
										TaskUtil.completeTask(taskId, comment, null, lineCode, insCode, bizId) ;	
										
									}else{
										Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
										return false; 
									}	
								}		
							});
							return false;
						}
						
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(lineCode, insCode, bizId) ;
						
						if(json == null){// 不存在前置函数
							TaskUtil.completeTask(taskId, comment, null, lineCode, insCode, bizId) ;	
							
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								TaskUtil.completeTask(taskId, comment, null, lineCode, insCode, bizId) ;	
								
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}				
					});
				}				
				// 将按钮对象压入数组
				btnArray.push(btn) ;				
			}
		}		
		return btnArray ;
	},
	
	/**
	 * 根据待办ID生成审批按钮组
	 * @param {} taskId		:	待办ID
	 * @param {} bizId		:	业务ID
	 * @param {} insCode	:	实例编码
	 * @param {} taskState	:	待办状态
	 */
	createButtons : function(taskId, bizId, insCode,taskState){
		var respButtonArray  ;
		var buttons ;
		var btnArray = new Array() ;	// 记录按钮数组
		var lineArray = new Array() ;	// 记录连线按钮数组
		if(taskState == 'closed'){
			// 待办已关闭
			respButtonArray = {} ;
			respButtonArray.flag = "0" ;
			if(Ext.isEmpty(XipLang)){
				respButtonArray.msg = "待办已关闭" ;
			}else{
				respButtonArray.msg = XipLang.xwf_lang_task_finished;
			}
			buttons = [] ; 
			
		}else{
			var _reqUrl = TaskUtil.getCtxPath() + '/workItemAction.do?method=getButtonsByTaskId' ;
			var _reqParam = {'taskId' : taskId} ;
			respButtonArray = TaskUtil.sendAjaxReq(_reqUrl, _reqParam, false) ;
			buttons = respButtonArray.data; 
		}
		for(var i=0; i<buttons.length; i++){
			var button = buttons[i];
			var id	= button.id ;
			var code = button.code;
			var name = button.name;
			var disable = button.disable; // Y不可用   N可用	
			
			if(disable=="N"){	// 如果disable属性为 "Y"时, 则不显示按钮
				
				// 定义按钮对象
				var btn = new Ext.Button({
					text	: 	name
				});	
				
				// 根据按钮编码分配按钮处理事件
				if(code == TaskUtil.TASK_BTN_SUBMIT){ // 提交流程
					btn.setHandler(function(){
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_SUBMIT, insCode, bizId) ;
						if(json == null){// 不存在前置函数
							// 执行流程提交
							TaskUtil.doSubmit(taskId, null, TaskUtil.TASK_BTN_SUBMIT, insCode, bizId);		
							
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								// 执行流程提交
								TaskUtil.doSubmit(taskId, null, TaskUtil.TASK_BTN_SUBMIT, insCode, bizId);	
								
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}
					});
						
				}else if(code == TaskUtil.TASK_BTN_CANCEL){	// 撤回流程
					btn.setHandler(function(){
						Ext.MessageBox.confirm((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"您确定要撤回流程吗？":XipLang.process_recall_confirm),function(opt){
							if(opt == 'yes'){
								// 执行前置函数
								var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_CANCEL, insCode, bizId) ;
								
								if(json == null){// 不存在前置函数
									// 执行流程撤回
									TaskUtil.doCancel(taskId, TaskUtil.TASK_BTN_CANCEL, insCode, bizId) ;	
									
								}else{ // 存在前置函数
									var response = Ext.JSON.decode(json);
									
									if(response.flag == 0){	// 执行成功
										// 执行流程撤回
										TaskUtil.doCancel(taskId, TaskUtil.TASK_BTN_CANCEL, insCode, bizId) ;		
										
									}else{
										Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
										return false; 
									}	
								}
							}else{
								return false ;								
							}
						});
					});
					
				}else if(code == TaskUtil.TASK_BTN_CONSULT){ // 征询
					btn.setHandler(function(){
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_CONSULT, insCode, bizId) ;
						
						var comment = textArea.getValue(); 
						
						if(json == null){// 不存在前置函数
							TaskUtil.chooseAllUsers(taskId, TaskUtil.TASK_BTN_CONSULT, insCode, bizId, comment) ;
							
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								TaskUtil.chooseAllUsers(taskId, TaskUtil.TASK_BTN_CONSULT, insCode, bizId, comment) ;
								
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}						
					});
					
				}else if(code == TaskUtil.TASK_BTN_CONSULT_CLOSE){ // 征询反馈
					btn.setHandler(function(){
						// 审批意见
						var comment = textArea.getValue();
						
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_CONSULT_CLOSE, insCode, bizId) ;
						
						if(json == null){// 不存在前置函数
							TaskUtil.closeConsult(taskId,comment,TaskUtil.TASK_BTN_CONSULT_CLOSE, insCode, bizId) ;							
							
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								TaskUtil.closeConsult(taskId,comment,TaskUtil.TASK_BTN_CONSULT_CLOSE, insCode, bizId) ;	
								
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}						
					});
					
				}else if(code == TaskUtil.TASK_BTN_CONSULT_REVOKE){ // 撤销征询
					btn.setHandler(function(){
						var comment = textArea.getValue(); 
						
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_CONSULT_REVOKE, insCode, bizId) ;
						
						if(json == null){// 不存在前置函数
							TaskUtil.revokeConsult(taskId,comment,TaskUtil.TASK_BTN_CONSULT_REVOKE, insCode, bizId) ;
							
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								TaskUtil.revokeConsult(taskId,comment,TaskUtil.TASK_BTN_CONSULT_REVOKE, insCode, bizId) ;
								
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}						
					});	
					
				}else if(code == TaskUtil.TASK_BTN_DELEGATE){ // 委派处理
					btn.setHandler(function(){
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_DELEGATE, insCode, bizId) ;
						
						var comment = textArea.getValue();
						
						if(json == null){// 不存在前置函数
							TaskUtil.chooseAllUsers(taskId, TaskUtil.TASK_BTN_DELEGATE, insCode, bizId, comment) ;
							
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								TaskUtil.chooseAllUsers(taskId, TaskUtil.TASK_BTN_DELEGATE, insCode, bizId, comment) ;
								
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}						
					});
					
				}else if(code == TaskUtil.TASK_BTN_BACK){ // 回退流程
					btn.setHandler(function(){
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_BACK, insCode, bizId) ;
						
						if(json == null){// 不存在前置函数
							// 取得回退节点信息
							var _reqUrl = TaskUtil.getCtxPath()+'/workItemAction.do?method=getBackActivityList' ;
							var _reqParam = {'taskId' : taskId} ;
							respActArray = TaskUtil.sendAjaxReq(_reqUrl, _reqParam, false) ;		
							if(respActArray.flag == 0){
								var acts = respActArray.data
								// 取得回退意见
								var comment = textArea.getValue();
								// 执行回退处理
								TaskUtil.chooseBackActivity(acts, taskId, comment, TaskUtil.TASK_BTN_BACK, insCode, bizId) ;							
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),respActArray.msg) ;
								return false ;
							}							
							
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								// 取得回退节点信息
								var _reqUrl = TaskUtil.getCtxPath()+'/workItemAction.do?method=getBackActivityList' ;
								var _reqParam = {'taskId' : taskId} ;
								respActArray = TaskUtil.sendAjaxReq(_reqUrl, _reqParam, false) ;								
								
								if(respActArray.flag == 0){
									var acts = respActArray.data
									// 取得回退意见
									var comment = textArea.getValue();
									// 执行回退处理
									TaskUtil.chooseBackActivity(acts, taskId, comment, TaskUtil.TASK_BTN_BACK, insCode, bizId) ;							
								}else{
									Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),respActArray.msg) ;
									return false ;
								}								
								
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}						
					});
					
				}else if(code == TaskUtil.TASK_BTN_REJECT){ // 驳回流程
					btn.setHandler(function(){
						var comment = textArea.getValue(); 
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_REJECT, insCode, bizId) ;
						
						if(json == null){// 不存在前置函数
							TaskUtil.doReject(taskId, comment, TaskUtil.TASK_BTN_REJECT, insCode, bizId) ;
							
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								TaskUtil.doReject(taskId, comment, TaskUtil.TASK_BTN_REJECT, insCode, bizId) ;
								
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}
					});	
					
				}else if(code == TaskUtil.TASK_BTN_COPYTO){ // 关闭抄送待办
					btn.setHandler(function(){
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_COPYTO, insCode, bizId) ;
						
						if(json == null){// 不存在前置函数
							TaskUtil.closeCopyTo(taskId, TaskUtil.TASK_BTN_COPYTO, insCode, bizId) ;
							
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								TaskUtil.closeCopyTo(taskId, TaskUtil.TASK_BTN_COPYTO, insCode, bizId) ;
								
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}
					});
					
				}else if(code == TaskUtil.TASK_BTN_FORWARD){ //转发
					btn.setHandler(function(){
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(TaskUtil.TASK_BTN_FORWARD, insCode, bizId) ;
						
						if(json == null){// 不存在前置函数
							TaskUtil.forward(taskId, insCode, bizId);
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								TaskUtil.forward(taskId, insCode, bizId);
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}
					});
					
				}else{	// 按钮处理
					lineArray.push(btn.getId()+";"+code) ;
					btn.setHandler(function(code){
						// 计算按钮编码【点击时执行此段代码】
						var lineCode  = '' ;
						for(var j=0; j<lineArray.length; j++){
							var a = lineArray[j].split(';') ;
							if(a[0] == code.id){
								lineCode = a[1] ;
								break ;
							}
						}
						var comment = textArea.getValue();
						
						//added by qp at 16/04/19
						var isRun = TaskUtil.beforeHandlerEventWithCallback("check", taskId, lineCode, insCode, bizId); 
						
						if(isRun==true){
							TaskUtil.beforeHandlerEventWithCallback("run", taskId, lineCode, insCode, bizId, function(){
								// 执行前置函数
								var json = TaskUtil.beforeHandlerEvent(lineCode, insCode, bizId) ;
								
								if(json == null){// 不存在前置函数
									TaskUtil.completeTask(taskId, comment, null, lineCode, insCode, bizId) ;	
									
								}else{ // 存在前置函数
									var response = Ext.JSON.decode(json);
									
									if(response.flag == 0){	// 执行成功
										TaskUtil.completeTask(taskId, comment, null, lineCode, insCode, bizId) ;	
										
									}else{
										Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
										return false; 
									}	
								}		
							});
							return false;
						}
						
						// 执行前置函数
						var json = TaskUtil.beforeHandlerEvent(lineCode, insCode, bizId) ;
						
						if(json == null){// 不存在前置函数
							TaskUtil.completeTask(taskId, comment, null, lineCode, insCode, bizId) ;	
							
						}else{ // 存在前置函数
							var response = Ext.JSON.decode(json);
							
							if(response.flag == 0){	// 执行成功
								TaskUtil.completeTask(taskId, comment, null, lineCode, insCode, bizId) ;	
								
							}else{
								Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"执行失败，原因：":XipLang.xwf_lang_execute_failure)+response.msg) ;
								return false; 
							}	
						}				
					});
				}				
				// 将按钮对象压入数组
				btnArray.push(btn) ;				
			}
		}		
		return btnArray ;
	},
	
	/**
	 * 获取业务表单地址
	 * @param {} taskId		:	待办ID
	 * return JSON 返回格式为：{"formUrl":"","createType":""}
	 */
	getBizFormUrl : function(taskId){
		var _reqUrl = TaskUtil.getCtxPath()+'/workItemAction.do?method=getTaskBaseInfo' ;
		var _reqParam = {"taskId":taskId} ;
		var resp = TaskUtil.sendAjaxReq(_reqUrl, _reqParam, false) ;
		if(resp == null || resp == "" || resp == "undefined"){
			return null;
		}else{
			return resp.formUrl ;
		}
	},
	
	/**
	 * 按钮点击前执行函数自定义
	 * @param {} buttonCode		:	按钮编码
	 * @param {} instanceCode	:	实例编码
	 * @param {} businessId		:	业务ID
	 */
	beforeHandlerEventWithCallback : function(type, taskId, lineCode, insCode, bizId, callback){
		if(type=="check"){
			var iframeObj = document.getElementById(TaskUtil.BIZ_PANEL_FRAME);
		
			if(iframeObj != null){
				if(iframeObj.contentWindow.beforeHandlerWithCallback){
					return true;
				}
				return false;
			}else{
				return false;
			}
		}else{
			document.getElementById(TaskUtil.BIZ_PANEL_FRAME).contentWindow.beforeHandlerWithCallback(taskId, lineCode, insCode, callback, bizId);
		}
	},
	
	/**
	 * 按钮点击前执行函数
	 * @param {} buttonCode		:	按钮编码
	 * @param {} instanceCode	:	实例编码
	 * @param {} businessId		:	业务ID
	 */
	beforeHandlerEvent : function(buttonCode,instanceCode,businessId){
		var json = null ;
		// 取得业务表单iframe元素
		var iframeObj = document.getElementById(TaskUtil.BIZ_PANEL_FRAME) ;
		if(iframeObj != null){
			try{
				json = iframeObj.contentWindow.beforeHandler(buttonCode,instanceCode,businessId);
			}catch(ex){
				json = null ;
			}
		}	
		return json ; 
	},
	
	/**
	 * 按钮处理完成后回调函数
	 * @param {} buttonCode		:	按钮编码
	 * @param {} businessId		:	业务ID
	 * @param {} instanceCode	:	实例编码
	 */
	afterHandlerEvent : function(buttonCode,instanceCode,businessId){
		// 取得业务表单iframe元素
		var iframeObj = document.getElementById(TaskUtil.BIZ_PANEL_FRAME) ;
		if(iframeObj != null){
			try{
				iframeObj.contentWindow.afterHandler(buttonCode,instanceCode,businessId);
			}catch(ex){
			}							
		}	
	},
	
	/**
	 * 流程提交或完成待办选择下一个节点的审批人
	 * @param records		:	执行人记录
	 * @param isSingleSelect:	单选/多选			
	 * @param taskId		:	待办ID
	 * @param comment		:	审批意见
	 * @param buttonCode	:	按钮编码
	 * @param insCode		:	实例编码
	 * @param bizId			:	业务ID
	 */
	chooseApprover : function(records, isSingleSelect, taskId, comment, buttonCode, insCode, bizId){
		var actName = '' ;
		if(records.length > 0){
			actName = '<font color=\"red\">【'+records[0].actName+'】</font>节点的' ;
		}	    
	 	var selUser = Ext.create('Ext.form.field.Text',{
	 		id 				: 	'selUserId',
	        width 			: 	250,
	        inputType 		: 	'text',
	        labelSeparator 	:	':',
	        fieldLabel		:	(Ext.isEmpty(XipLang)==true?'用户名':XipLang.xwf_lang_user_name),
	        labelWidth		: 	80,
	        labelAlign		:	'right',
	        listeners 		: 	{
	        	'specialkey': function(field, e){
	        		if (e.getKey() == e.ENTER) {
	        			var value=  selUser.getValue().toUpperCase();
	            		grid.getStore().filterBy(function(record,id){
	    	   	        	var text = record.get('userName');
	                    	return (text.indexOf(value)!=-1);
	    	   	    	});        			
	                }       		   			
	                }       		
	        	}
		}) ;     
	 	
		var ttbar = Ext.create('Ext.toolbar.Toolbar', {items:[selUser]});
		
		var grid = Ext.create('Ext.grid.Panel',{
			store	: {
				 data 	:  records,
		    	 fields 	:  ['userId','actName','userName','empName','orgName']
			},
		    selModel : {
		    	 showHeaderCheckbox :	false,
		    	 selType	:	'checkboxmodel',
		    	 mode		:	isSingleSelect ? 'SINGLE' : 'MULTI'
		    },
		    tbar : ttbar ,
		    columns	: [
		        new Ext.grid.RowNumberer({header:(Ext.isEmpty(XipLang)==true?'序号':XipLang.xwf_lang_number),width:50,align:'center'}),
		        {header: '用户ID',  hidden:true, dataIndex: 'userId'},
		        {header: '节点名', width:180,hidden:true, dataIndex: 'actName'},
		        {header: (Ext.isEmpty(XipLang)==true?'用户名':XipLang.xwf_lang_user_name), width:120, dataIndex: 'userName'},
		        {header: (Ext.isEmpty(XipLang)==true?'员工名':XipLang.xwf_lang_emp_name), width:120, dataIndex: 'empName'},
		        {header: (Ext.isEmpty(XipLang)==true?'组织名':XipLang.xwf_lang_org_name), width:250, dataIndex: 'orgName'}
		    ],
		    width	:	'100%',
		    height	:	'100%',	
		    loadMask:	{'msg':(Ext.isEmpty(XipLang)==true?'数据加载中...':XipLang.xwf_lang_data_loading)},
//		    dockedItems	: [{
//		        xtype	: 'pagingtoolbar',
//		        store	:  {
//		        	 data 	:  records,
//			    	 fields 	:  ['userId','actName','userName','empName','orgName']
//		        },   // GridPanel使用相同的数据源
//		        dock	: 'bottom',
//		        displayInfo: true
//		    }],
		    listeners :{
		    	'afterrender': function(){
		    		// 选中第一条记录
		    		grid.getSelectionModel().select(grid.getStore().first()) ;
		    	}
		    }
		});	
		 
		var btnConfirm = Ext.create('Ext.Button',{
		 	text	:	(Ext.isEmpty(XipLang)==true?'选择':XipLang.xwf_lang_selecting),
		 	handler	:	function(){
		 		var record_array = grid.getSelectionModel().getSelection() ;
		 		if(record_array.length == 0){
		 			if(TaskUtil.TASK_BTN_FORWARD == buttonCode){
		 				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请选择转发人":XipLang.task_util_query_sendor)) ;
		 			}else{
		 				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请选择审批人":XipLang.task_util_query_auditor));
		 			}
		 			return false ;
		 		}else{
		 			var userIds = "";
		 			Ext.each(record_array,function(r){
		 				var userId = r.get('userId') ;
		 				if(userIds == ""){
		 					userIds = userId ;
		 				}else{
		 					userIds = userIds + "," + userId ;
		 				}
		 			}) ;
		 			
		 			win.close();
		 			
		 			// 选择人后执行提交处理
		 			if(buttonCode == 'btnSubmit'){ // 提交
		 				TaskUtil.doSubmit(taskId,userIds,buttonCode,insCode,bizId) ;
		 			}else if(buttonCode == 'btnForward'){ //转发
		 				TaskUtil.doForward(taskId, userIds, insCode, bizId);
		 			}else{
		 				TaskUtil.completeTask(taskId, comment, userIds, buttonCode,insCode,bizId) ;
		 			}
		 		}
		 	}		
		}) ;
		
		var btnCancel = Ext.create('Ext.Button',{
		 	text	:	(Ext.isEmpty(XipLang)==true?'取消':XipLang.xwf_lang_btn_cancel),
		 	handler	:	function(){
		 		win.close();
		 	}
		}) ;
		var win = Ext.create('Ext.window.Window',{
		    title 		: 	'<div style="padding:7 "><span style="color:blue;">'+(Ext.isEmpty(XipLang)==true?'请选择节点审批人':XipLang.task_util_query_auditor)+'：'+actName+'</span></div>',
		    width		:	700,
		    height		:	400,
		    modal		:	true,
		    layout		:	'fit',
		    autoScroll 	: 	true,
		    constrain	:	true,
		    adow		:	false,
		    shadow		:	false,
			items 		: 	[grid],
			buttonAlign	: 	'right',
			buttons 	:	[btnConfirm,btnCancel]		
		}) ;
		
		win.show() ;	
	},

	/**
	 * 选择征询人或委派人
	 * @param taskId	:	待办ID
	 * @param buttonCode:	按钮编码
	 * @param insCode	:	实例编码
	 * @param bizId		:	业务ID
	 * @param comment	:	审批意见
	 */
	chooseAllUsers : function(taskId, buttonCode, insCode, bizId, comment){
		if(comment == null || comment == "" || comment == "undefined"){
			if(buttonCode == 'btnConsult'){	// 征询
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请审批意见框中填写征询备注信息！":XipLang.xwf_lang_consultation)) ;
				
			}else{ // 委派
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请审批意见框中填写委派备注信息！":XipLang.xwf_lang_appointer)) ;
				
			}
			return false ; 
		}
		
		Ext.define('User',{
			extend	:	'Ext.data.Model',
			fields	:	[
				 {name: 'userId', 		type: 'string'},
				 {name: 'userName',  	type: 'string'},
				 {name: 'empCode',      type: 'string'},
				 {name: 'empName',  	type: 'string'},
				 {name: 'orgName',  	type: 'string'}
			]	
		}) ;
		
		Ext.define('User', {
			 extend: 'Ext.data.Model',
			 fields: [
				{name:'userId',		mapping:'userId'},
				{name:'userName',	mapping:'userName'},
				{name:'empCode',	mapping:'empCode'},
				{name:'empName',	mapping:'empName'},
				{name:'orgName',	mapping:'orgName'}
			 ]
		});	

		var myStore = Ext.create('Ext.data.Store', {
			model	: 'User',
			pageSize: 10,
			proxy	: {
				type	: 	'ajax',
				url		: 	TaskUtil.getCtxPath() + '/workItemAction.do?method=getUsersForConsultOrDelegate4Ext',
				reader	: {
					type	: 	'json',
					root	: 	'dataList',
					totalProperty	: 'totalProperty'
				}
			},
			listeners	:	{
				'beforeload' : function(){
					var params = {'taskId':taskId,'condition':condition.getValue()} ;
					Ext.apply(myStore.proxy.extraParams, params);
				}
			}		
		});	
		
		var condition = Ext.create('Ext.form.field.Text',{
	        width 			: 	250,
	        inputType 		: 	'text',
	        labelSeparator 	:	':',
	        fieldLabel		:	(Ext.isEmpty(XipLang)==true?"名称":XipLang.xwf_lang_name),
	        labelWidth		: 	40,
	        labelAlign		:	'right',
	        listeners 		: 	{
	        	'specialkey': function(field, e){
	        		if (e.getKey() == e.ENTER) {
	        			myStore.load({params:{'start':0,'limit':10}});
	                }       		
	        	}
	        }		
		}) ;
		var mytbar = Ext.create('Ext.toolbar.Toolbar', {items:[condition]});
		
		var myGrid = Ext.create('Ext.grid.Panel',{
		    store	: myStore,
		    selModel : {
		    	 showHeaderCheckbox :	false,
		    	 selType	:	'checkboxmodel',
		    	 mode	:	'SINGLE' 
		    },
		    tbar : mytbar ,
		    columns	: [
		        new Ext.grid.RowNumberer({header:(Ext.isEmpty(XipLang)==true?'序号':XipLang.xwf_lang_number),width:50,align:'center'}),
		        {header: '用户ID',  hidden:true, dataIndex: 'userId'},
		        {header: (Ext.isEmpty(XipLang)==true?'用户名称':XipLang.xwf_lang_user_name), width:120, dataIndex: 'userName'},
		        {header: (Ext.isEmpty(XipLang)==true?'员工编码':XipLang.xwf_lang_emp_code), width:120, dataIndex: 'empCode'},
		        {header: (Ext.isEmpty(XipLang)==true?'员工姓名':XipLang.xwf_lang_emp_name), width:120, dataIndex: 'empName'},
		        {header: (Ext.isEmpty(XipLang)==true?'组织名称':XipLang.xwf_lang_org_name), width:290, dataIndex: 'orgName'}
		    ],
		    width	: 400,
		    height	: 125,
		    loadMask:	{'msg':(Ext.isEmpty(XipLang)==true?'数据加载中...':XipLang.xwf_lang_data_loading)},
		    listeners	:	{
		    	'render' : function(){
		    		myStore.load({
		    			callback : function(){
		    				// 选中第一条记录
		    	    		myGrid.getSelectionModel().select(myStore.first()) ;
		    			}
		    		});
		    	}
		    },  
		    dockedItems	: [{
		        xtype	: 'pagingtoolbar',
		        store	: myStore,   // GridPanel使用相同的数据源
		        dock	: 'bottom',
		        displayInfo: true
		    }]
		});
		var sys_lang_sel_consulate = "请选择征询人";
		var sys_lang_sel_appointer = "请选择委派人";
		if(!Ext.isEmpty(XipLang)){
			sys_lang_sel_consulate = XipLang.xwf_lang_asker;
			sys_lang_sel_appointer = XipLang.xwf_lang_signer;
		}
		var tttile = (buttonCode=="btnConsult" ? sys_lang_sel_consulate:sys_lang_sel_appointer) ; 
		
		var btnConfirm = Ext.create('Ext.Button', {
		    text: '选择',
		    handler: function() {
		 		var record_array = myGrid.getSelectionModel().getSelection() ;
		 		if(record_array.length == 0){
		 			Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),tttile) ;
		 			return false ;
		 		}else{
		 			var userId = "";
		 			Ext.each(record_array,function(r){
		 				userId = r.get('userId') ;
		 			}) ;
		 			
		 			myWin.close();
		 			
		 			// 选择人后执行处理
		 			if(buttonCode == 'btnConsult'){ // 征询
		 				TaskUtil.doConsult(taskId, userId, buttonCode, insCode, bizId, comment) ;
		 				
		 			}else if(buttonCode == 'btnDelegate'){ // 委派
		 				TaskUtil.doDelegate(taskId, userId, buttonCode, insCode, bizId, comment) ;
		 				
		 			}else{
		 				
		 			}
		 		}	    	
		    }
		});	
		
		var btnCancel = Ext.create('Ext.Button', {
		    text: (Ext.isEmpty(XipLang)==true?'取消':XipLang.xwf_lang_btn_cancel),
		    handler: function() {
		    	myWin.close();
		    }
		});
		
		var myWin = Ext.create('Ext.window.Window',{
		    title 		: 	'<div style="padding:7 "><span style="color:blue;">'+tttile+'</span></div>',
		    width		:	750,
		    height		:	400,
		    modal		:	true,
		    layout		:	'fit',
		    autoScroll 	: 	true,
		    constrain	:	true,
		    shadow		:	false,
		    onEsc		:	function(){
		    	myWin.hide();
		    },
			items 		: 	[myGrid],
			buttonAlign	: 	'right',
			buttons 	:	[btnConfirm,btnCancel]		
			
		}) ;
		
		myWin.show();
	},

	/**
	 * 选择流程回退至节点信息
	 * @param records	:	节点记录集
	 * @param taskId	:	待办ID
	 * @param comment	:	审批意见
	 * @param buttonCode:	按钮编码
	 * @param insCode	:	实例编码
	 * @param bizId		:	业务ID
	 */
	chooseBackActivity : function(records, taskId, comment, buttonCode, insCode, bizId){
		if(comment == null || comment == "" || comment == "undefined"){
			Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请填写回退意见！":XipLang.xwf_lang_back_comment)) ;
			return false ; 
		}		
		
		var store = Ext.create('Ext.data.Store',{
	        data 	:  records,
            fields: [
						         {name: 'activityId', type: 'string'},
						         {name: 'activityCode',  type: 'string'},
						         {name: 'activityName',       type: 'string'}
						     ]
	    });
	     
		var grid = Ext.create('Ext.grid.Panel',{
		    store	: store,
		    selModel : {
		    	 showHeaderCheckbox :	false,
		    	 selType	:	'checkboxmodel',
		    	 mode		:	'SINGLE'
		    },
		    columns	: [
		        new Ext.grid.RowNumberer({header:(Ext.isEmpty(XipLang)==true?'序号':XipLang.xwf_lang_number),width:50}),
		        {header: '节点ID',  hidden:true, dataIndex: 'activityId'},
		        {header: (Ext.isEmpty(XipLang)==true?'节点编码':XipLang.xwf_lang_node_code), width:200, dataIndex: 'activityCode'},
		        {header: (Ext.isEmpty(XipLang)==true?'节点名称':XipLang.xwf_lang_node_name), width:300, dataIndex: 'activityName'}
		    ],
		    width	:	'100%',
		    height	:	'100%',	
		    loadMask:	{'msg':(Ext.isEmpty(XipLang)==true?'数据加载中...':XipLang.xwf_lang_data_loading)}
//		    ,
//		    dockedItems	: [{
//		        xtype	: 'pagingtoolbar',
//		        store	: store,   // GridPanel使用相同的数据源
//		        dock	: 'bottom',
//		        displayInfo: true
//		    }]
		});		
		 
		var btnConfirm = Ext.create('Ext.Button',{
		 	text	:	(Ext.isEmpty(XipLang)==true?'选择':XipLang.xwf_lang_selecting),
		 	handler	:	function(){
		 		var record_array = grid.getSelectionModel().getSelection() ;
		 		if(record_array.length == 0){
		 			Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请选择回退至的节点！":XipLang.xwf_lang_back_node));
		 			return false ;
		 		}else{
		 			var backToActivityId = "";
		 			Ext.each(record_array,function(r){
		 				backToActivityId = r.get('activityId') ;
		 			}) ;
		 			
		 			win.hide();
		 			
		 			// 执行回退
		 			TaskUtil.doBack(taskId, comment, backToActivityId, buttonCode, insCode, bizId) ;	 			
		 		}
		 	}
		});
		
		var btnCancel = Ext.create('Ext.Button',{
		 	text	:	(Ext.isEmpty(XipLang)==true?'取消':XipLang.xwf_lang_btn_cancel),
		 	handler	:	function(){
		 		win.hide();
		 	}
		});
		
		var win = Ext.create('Ext.window.Window',{
		    title 		: 	'<div style="padding:7 "><span style="color:blue;">'+(Ext.isEmpty(XipLang)==true?"请选择回退至的节点！":XipLang.xwf_lang_back_node)+'</span></div>',
		    width		:	600,
		    height		:	400,
		    modal		:	true,
		    layout		:	'fit',
		    autoScroll 	: 	true,
		    constrain	:	true,
		    shadow		:	false,
			items 		: 	[grid],
			buttonAlign	: 	'right',
			buttons 	:	[btnConfirm,btnCancel]		
		});
		
		win.show() ;		
	},
	
	/**
	 * 提交流程
	 * @param {} taskId		:	待办ID
	 * @param {} userIds	:	审批人ID
	 * @param {} buttonCode	:	按钮编码
	 * @param {} insCode	:	实例编码
	 * @param {} bizId		:	业务ID
	 */
	doSubmit : function(taskId, userIds, buttonCode, insCode, bizId){
		// 等待框
		var msg = Ext.MessageBox.show({
			title 	 : 	(Ext.isEmpty(XipLang)==true?'请等待':XipLang.xwf_lang_wait_tip),
			msg 	 : 	(Ext.isEmpty(XipLang)==true?'正在提交请求.......':XipLang.xwf_lang_submit_request),
			width 	 : 	240,
			wait	 : 	true,
			progress : 	true,
			closable : 	false
		});	
		
		// 提交请求
		Ext.Ajax.request({
			url 	: TaskUtil.getCtxPath() + '/workItemAction.do?method=submitProcess',
			params	: {
				'taskId'  : taskId,
				'userIds' : userIds
			},
			method 	: 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				if(response.flag == '0'){
					// 提交成功
					Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),response.msg,function(){
						// 关闭父窗口
						//window.parent.close() ;
						TaskUtil.closeTaskWin() ;
						
						// 执行回调函数
						TaskUtil.afterHandlerEvent(buttonCode, insCode, bizId) ;
					},this) ;
					
				}else if(response.flag == '1'){
					// 提交失败
					Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
					return false;
					
				}else{
					// 手动选人
					if(response.multiselect == 'Y'){ // 多选审批人
						TaskUtil.chooseApprover(response.data, false, taskId, null, buttonCode, insCode, bizId) ;
						
					}else{	// 单选审批人
						TaskUtil.chooseApprover(response.data, true, taskId, null, buttonCode, insCode, bizId) ;
					}
				}
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
			}
		});		
	},

	/**
	 * 撤回流程
	 * @param {} taskId		:	待办ID
	 * @param {} buttonCode	:	按钮编码
	 * @param {} insCode	:	实例编码
	 * @param {} bizId		:	业务ID
	 */
	doCancel : function(taskId, buttonCode, insCode, bizId){
		// 等待框
		var msg = Ext.MessageBox.show({
			title 	 : 	(Ext.isEmpty(XipLang)==true?'请等待':XipLang.xwf_lang_wait_tip),
			msg 	 : 	(Ext.isEmpty(XipLang)==true?'正在提交请求.......':XipLang.xwf_lang_submit_request),
			width 	 : 	240,
			wait	 : 	true,
			progress : 	true,
			closable : 	false
		});	
		
		// 提交请求
		Ext.Ajax.request({
			url 	: TaskUtil.getCtxPath() + '/workItemAction.do?method=revokeProcess',
			params	: {
				'taskId'  : taskId
			},
			method 	: 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				// 提交成功
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg, function(){
					// 关闭父窗口
					//window.parent.close() ;
					TaskUtil.closeTaskWin() ;
					
					// 执行回调函数
					TaskUtil.afterHandlerEvent(buttonCode, insCode, bizId) ;
				},this) ;			
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
			}
		});		
	},

	/**
	 * 征询处理
	 * @param taskId	:	待办ID
	 * @param userId	:	审批人ID
	 * @param buttonCode: 	按钮编码
	 * @param insCode	:	实例编码
	 * @param bizId		:	业务ID
	 * @param comment	:	审批意见
	 */
	doConsult : function(taskId, userId, buttonCode, insCode, bizId, comment){
		if(comment == null || comment == "" || comment == "undefined"){
			Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请填写征询备注信息！":XipLang.task_util_consulte_comment)) ;
			return false ; 
		}
		
		// 等待框
		var msg = Ext.MessageBox.show({
			title 	 : 	(Ext.isEmpty(XipLang)==true?'请等待':XipLang.xwf_lang_wait_tip),
			msg 	 : 	(Ext.isEmpty(XipLang)==true?'正在提交请求.......':XipLang.xwf_lang_submit_request),
			width 	 : 	240,
			wait	 : 	true,
			progress : 	true,
			closable : 	false
		});	
		
		// 提交请求
		Ext.Ajax.request({
			url 	: TaskUtil.getCtxPath() + '/workItemAction.do?method=doConsult',
			params	: {
				'taskId'  	: 	taskId,
				'userId'	:	userId,
				'comment'	:	comment
			},
			method 	: 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				
				// 提交成功
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),response.msg,function(){
					// 关闭父窗口
					//window.parent.close() ;
					TaskUtil.closeTaskWin() ;
					
					// 执行回调函数
					TaskUtil.afterHandlerEvent(buttonCode, insCode, bizId) ;
				},this) ;			
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
			}
		});	
	},

	/**
	 * 征询反馈
	 * @param {} taskId		:	待办ID
	 * @param {} comment	:	审批意见
	 * @param {} buttonCode	:	按钮编码
	 * @param {} insCode	:	实例编码
	 * @param {} bizId		:	业务ID
	 */
	closeConsult : function(taskId,comment,buttonCode, insCode, bizId){
		if(comment == null || comment == "" || comment == "undefined"){
			Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请在审批意见框中填写征询反馈意见!":XipLang.xwf_lang_consultation)); 
			return false ; 
		}	
		
		// 等待框
		var msg = Ext.MessageBox.show({
			title 	 : 	(Ext.isEmpty(XipLang)==true?'请等待':XipLang.xwf_lang_wait_tip),
			msg 	 : 	(Ext.isEmpty(XipLang)==true?'正在提交请求.......':XipLang.xwf_lang_submit_request),
			width 	 : 	240,
			wait	 : 	true,
			progress : 	true,
			closable : 	false
		});		
		
		// 提交请求
		Ext.Ajax.request({
			url 	: TaskUtil.getCtxPath() + '/workItemAction.do?method=closeConsultTask',
			params	: {
				'taskId'  : taskId,
				'comment' :	comment
			},
			method 	: 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),response.msg,function(){
					// 关闭父窗口
					//window.parent.close() ;
					TaskUtil.closeTaskWin() ;
					
					// 执行回调函数
					TaskUtil.afterHandlerEvent(buttonCode, insCode, bizId) ;
				},this) ;		
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
			}
		});		
	},

	/**
	 * 撤回征询
	 * @param {} taskId		:	待办ID
	 * @param {} comment	:	审批意见
	 * @param {} buttonCode	:	按钮编码
	 * @param {} insCode	:	实例编码
	 * @param {} bizId		:	业务ID
	 */ 
	revokeConsult : function(taskId, comment, buttonCode, insCode, bizId){
		// 等待框
		var msg = Ext.MessageBox.show({
			title 	 : 	(Ext.isEmpty(XipLang)==true?'请等待':XipLang.xwf_lang_wait_tip),
			msg 	 : 	(Ext.isEmpty(XipLang)==true?'正在提交请求.......':XipLang.xwf_lang_submit_request),
			width 	 : 	240,
			wait	 : 	true,
			progress : 	true,
			closable : 	false
		});		
		
		// 提交请求
		Ext.Ajax.request({
			url 	: TaskUtil.getCtxPath() + '/workItemAction.do?method=revokeConsultTask',
			params	: {
				'taskId' 	: 	taskId,
				'comment'	:	comment
			},
			method 	: 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);

				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),response.msg,function(){
					// 关闭父窗口
					//window.parent.close() ;
					TaskUtil.closeTaskWin() ;
					
					// 执行回调函数
					TaskUtil.afterHandlerEvent(buttonCode, insCode, bizId) ;
				},this) ;	
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
			}
		});	
	},

	/**
	 * 委派处理
	 * @param taskId	:	待办ID
	 * @param userId	:	审批人ID
	 * @param buttonCode:	按钮编码
	 * @param insCode	:	实例编码
	 * @param bizId		:	业务ID
	 * @param comment	:	审批意见
	 */
	doDelegate : function(taskId, userId, buttonCode, insCode, bizId, comment){
		if(comment == null || comment == "" || comment == "undefined"){
			Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请填写备注信息！":XipLang.xwf_lang_note_comment)) ; 
			return false ; 
		}
		// 等待框
		var msg = Ext.MessageBox.show({
			title 	 : 	(Ext.isEmpty(XipLang)==true?'请等待':XipLang.xwf_lang_wait_tip),
			msg 	 : 	(Ext.isEmpty(XipLang)==true?'正在提交请求.......':XipLang.xwf_lang_submit_request),
			width 	 : 	240,
			wait	 : 	true,
			progress : 	true,
			closable : 	false
		});	
		
		// 提交请求
		Ext.Ajax.request({
			url 	: TaskUtil.getCtxPath() + '/workItemAction.do?method=doDelegate',
			params	: {
				'taskId'  	: 	taskId,
				'userId'	:	userId,
				'comment'	:	comment
			},
			method 	: 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				// 提交成功
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),response.msg,function(){
					// 关闭父窗口
					//window.parent.close() ;
					TaskUtil.closeTaskWin() ;
					
					// 执行回调函数
					TaskUtil.afterHandlerEvent(buttonCode, insCode, bizId) ;
				},this) ;			
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
			}
		});	
	},

	/**
	 * 回退处理
	 * @param {} taskId				:	待办ID
	 * @param {} comment			:	审批意见
	 * @param {} backToActivityId	:	发起回退业务的节点ID
	 * @param {} buttonCode			:	按钮编码
	 * @param {} insCode			:	实例编码
	 * @param {} bizId				:	业务ID
	 */
	doBack : function(taskId, comment, backToActivityId, buttonCode, insCode, bizId){
		if(comment == null || comment == "" || comment == "undefined"){
			Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请填写审批意见！":XipLang.xwf_lang_back_comment)) ; 
			return false ; 
		}	
		// 等待框
		var msg = Ext.MessageBox.show({
			title 	 : 	(Ext.isEmpty(XipLang)==true?'请等待':XipLang.xwf_lang_wait_tip),
			msg 	 : 	(Ext.isEmpty(XipLang)==true?'正在提交请求.......':XipLang.xwf_lang_submit_request),
			width 	 : 	240,
			wait	 : 	true,
			progress : 	true,
			closable : 	false
		});
		
		// 提交请求
		Ext.Ajax.request({
			url 	: TaskUtil.getCtxPath() + '/workItemAction.do?method=doBack',
			params	: {
				'taskId' 			: 	taskId,
				'backToActivityId'	:	backToActivityId,
				'comment'			:	comment
			},
			method 	: 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),response.msg,function(){
					// 关闭父窗口
					//window.parent.close() ;
					TaskUtil.closeTaskWin() ;
					
					// 执行回调函数
					TaskUtil.afterHandlerEvent(buttonCode, insCode, bizId) ;
				},this) ;
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
			}
		});		
	},
	
	/**
	 * 驳回处理
	 * @param {} taskId		:	待办ID
	 * @param {} comment	:	审批意见
	 * @param {} buttonCode	:	按钮编码
	 * @param {} insCode	:	实例编码
	 * @param {} bizId		:	业务ID
	 */
	doReject : function(taskId, comment, buttonCode, insCode, bizId){
		if(comment == null || comment == "" || comment == "undefined"){
			Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请填写审批意见！":XipLang.xwf_lang_reject_comment)) ; 
			return false ; 
		}	
		// 等待框
		var msg = Ext.MessageBox.show({
			title 	 : 	(Ext.isEmpty(XipLang)==true?'请等待':XipLang.xwf_lang_wait_tip),
			msg 	 : 	(Ext.isEmpty(XipLang)==true?'正在提交请求.......':XipLang.xwf_lang_submit_request),
			width 	 : 	240,
			wait	 : 	true,
			progress : 	true,
			closable : 	false
		});
		
		// 提交请求
		Ext.Ajax.request({
			url 	: TaskUtil.getCtxPath() + '/workItemAction.do?method=rejectProcess',
			params	: {
				'taskId' 	: 	taskId,
				'comment'	:	comment
			},
			method 	: 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),response.msg,function(){
					// 关闭父窗口
					//window.parent.close() ;
					TaskUtil.closeTaskWin() ;
					
					// 执行回调函数
					TaskUtil.afterHandlerEvent(buttonCode, insCode, bizId) ;
				},this) ;
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
			}
		});	
	},

	/**
	 * 关闭抄送待办
	 * @param {} taskId		:	待办ID
	 * @param {} buttonCode	:	按钮编码
	 * @param {} insCode	:	实例编码
	 * @param {} bizId		:	业务ID
	 */
	closeCopyTo : function(taskId, buttonCode, insCode, bizId){
		// 等待框
		var msg = Ext.MessageBox.show({
			title 	 : 	(Ext.isEmpty(XipLang)==true?'请等待':XipLang.xwf_lang_wait_tip),
			msg 	 : 	(Ext.isEmpty(XipLang)==true?'正在提交请求.......':XipLang.xwf_lang_submit_request),
			width 	 : 	240,
			wait	 : 	true,
			progress : 	true,
			closable : 	false
		});		
		
		// 提交请求
		Ext.Ajax.request({
			url 	: TaskUtil.getCtxPath() + '/workItemAction.do?method=closeCopyToTask',
			params	: {
				'taskId' : 	taskId
			},
			method 	: 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),response.msg,function(){
					// 关闭父窗口
					//window.parent.close() ;
					TaskUtil.closeTaskWin() ;
					
					// 执行回调函数
					TaskUtil.afterHandlerEvent(buttonCode, insCode, bizId) ;
				},this) ;
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
			}
		});	
	},

	/**
	 * 完成待办
	 * @param {} taskId		:	待办ID
	 * @param {} comment	:	审批意见
	 * @param {} userIds	:	审批用户ID
	 * @param {} buttonCode	:	按钮编码
	 * @param {} insCode	:	实例编码
	 * @param {} bizId		:	业务ID
	 */
	completeTask : function(taskId, comment, userIds, buttonCode, insCode, bizId){
		if(comment == null || comment == "" || comment == "undefined"){
			Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),(Ext.isEmpty(XipLang)==true?"请填写审批意见！":XipLang.xwf_lang_auditor_comment)) ; 
			return false ; 
		}	
		// 等待框
		var msg = Ext.MessageBox.show({
			title 	 : 	(Ext.isEmpty(XipLang)==true?'请等待':XipLang.xwf_lang_wait_tip),
			msg 	 : 	(Ext.isEmpty(XipLang)==true?'正在提交请求.......':XipLang.xwf_lang_submit_request),
			width 	 : 	240,
			wait	 : 	true,
			progress : 	true,
			closable : 	false
		});	
		
		// 提交请求
		Ext.Ajax.request({
			url 	: TaskUtil.getCtxPath() + '/workItemAction.do?method=completeWorkItem',
			params	: {
				'taskId' 	: 	taskId,
				'comment'	:	comment,
				'userIds'	:	userIds,
				'lineCode'	:	buttonCode
			},
			method 	: 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				if(response.flag == '0'){	// 提交成功
					Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice),response.msg,function(){
						// 关闭父窗口
						//window.parent.close() ;
						TaskUtil.closeTaskWin() ;
						
						// 执行回调函数
						TaskUtil.afterHandlerEvent(buttonCode, insCode, bizId) ;
						
					},this) ;
					
				}else if(response.flag == '1'){	// 提交失败
					Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
					return false;
					
				}else{	// 手动选人
					if(response.multiselect == 'Y'){ 
						// 多选审批人
						TaskUtil.chooseApprover(response.data, false, taskId, comment, buttonCode, insCode, bizId) ;
						
					}else{	
						// 单选审批人
						TaskUtil.chooseApprover(response.data, true, taskId, comment, buttonCode, insCode, bizId) ;
					}
				}
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
			}
		});	
	},
	
	/**
	 * 转发
	 * @param taskId 任务id
	 * @param insCode 实例编码
	 * @param bizId 业务id
	 */
	forward : function(taskId, insCode, bizId){
		// 等待框
		var msg = Ext.MessageBox.show({
			title 	 : 	(Ext.isEmpty(XipLang)==true?'请等待':XipLang.xwf_lang_wait_tip),
			msg 	 : 	(Ext.isEmpty(XipLang)==true?'正在查询转发人.......':XipLang.xwf_lang_transfer_query),
			width 	 : 	240,
			wait	 : 	true,
			progress : 	true,
			closable : 	false
		});	
		
		// 提交请求
		Ext.Ajax.request({
			url 	: TaskUtil.getCtxPath() + '/workItemAction.do?method=getForwardExecutors',
			params	: {
				'taskId' 	: 	taskId
			},
			method 	: 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				if(response.flag == '0'){	// 提交成功
					TaskUtil.chooseApprover(response.data, true, taskId, "", TaskUtil.TASK_BTN_FORWARD, insCode, bizId);
				}else{	// 提交失败
					Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
				}
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
			}
		});	
	},
	
	/**
	 * @param taskId 任务id
	 * @param userId 用户id
	 * @param insCode 实例编码
	 * @param bizId 业务id
	 */
	doForward : function(taskId, userId, insCode, bizId){
		// 等待框
		var msg = Ext.MessageBox.show({
			title 	 : 	(Ext.isEmpty(XipLang)==true?'请等待':XipLang.xwf_lang_wait_tip),
			msg 	 : 	(Ext.isEmpty(XipLang)==true?'正在提交请求.......':XipLang.xwf_lang_submit_request),
			width 	 : 	240,
			wait	 : 	true,
			progress : 	true,
			closable : 	false
		});	
		
		// 提交请求
		Ext.Ajax.request({
			url 	: TaskUtil.getCtxPath() + '/workItemAction.do?method=doForward',
			params	: {
				'taskId' 	: 	taskId,
				'userId'    :   userId
				
			},
			method 	: 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				if(response.flag == '0'){	// 提交成功
					// 执行回调函数
					Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
					TaskUtil.afterHandlerEvent(TaskUtil.TASK_BTN_FORWARD, insCode, bizId);
					TaskUtil.closeTaskWin() ;
				}else{	// 提交失败
					Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
				}
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert((Ext.isEmpty(XipLang)==true?"提示":XipLang.xwf_lang_notice), response.msg);
			}
		});	
	}
	
};
