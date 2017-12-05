/**
 * 工作流调用API
 */
var XipWf = {
	/**
	 * 根据流程编码创建流程实例
	 * 
	 * @param processCode
	 *            流程编码
	 * @param callback
	 *            回调函数 实例创建成功返回{flag:0,instanceCode:'xxxx'}否则{flag:1,msg:'xxxx'}
	 */
	createInstanceByProcess : function(processCode, callback) {
		Ext.Msg.wait(XipLang.xwf_lang_ins_create);
		var url = XipWfPrivate.getContextPath()
				+ "/workflowUtilAction.do?method=createInstanceByProcessCode";
		var params = {
			'processCode' : processCode
		};
		XipWfPrivate.sendAjaxRequest(url, params, callback);
	},

	/**
	 * 根据实体编码创建流程实例
	 * 
	 * @param entityCode
	 *            实体编码
	 * @param params
	 *            实体属性值Json {attr1Name:'attr1Value',attr2Name:'attr2Value'}
	 * @param callback
	 *            回调函数 正确:{flag:0, instanceCode:'xxx'} 错误:{flag:1, msg:'xxx'}
	 */
	createInstanceByEntity : function(entityCode, params, callback) {
		XipWfPrivate
				.getProcessIdByEntityCode(entityCode, params,
						function(obj) {
							if (obj.flag != 0) {
								if (callback) {
									callback(obj);
								}
								Ext.Msg.alert(XipLang.xwf_lang_notice, obj.msg);
								return;
							}
							var processId = obj.processId;
							XipWfPrivate.createInstanceByProcessId(processId,
									callback);
						});
	},

	/**
	 * 根据实例Code提交流程
	 * 
	 * @param instanceCode
	 *            流程实例编码
	 * @param params
	 *            实体属性值Json {attr1Name:'attr1Value',attr2Name:'attr2Value'}
	 * @param callback
	 *            回调函数 提交成功返回 {flag:0,instanceCode:'xxxx'}
	 *            否则返回{flag:1,msg:'xxxx'}
	 */
	submitInstance : function(instanceCode, params, callback) {
		Ext.Msg.wait(XipLang.xwf_lang_ins_submit);

		if (!params) {
			params = {};
		} else {
			if (typeof (params) != "object") {
				try {
					params = Ext.JSON.decode(params);
				} catch (ex) {
					Ext.Msg.alert(XipLang.xwf_lang_notice, ex);
					return;
				}
			}
		}
		;

		var url = XipWfPrivate.getContextPath()
				+ "/workflowUtilAction.do?method=submitProcessOld";

		var json = {
			"instanceCode" : instanceCode,
			"entityAttJson" : params
		};

		var jsonData = Ext.JSON.encode(json);

		// 提交ajax请求
		Ext.Ajax
				.request({
					url : url,
					method : 'POST',
					sync : '',
					scope : this,
					timeout : 300000,
					headers : {
						'Content-Type' : 'application/json'
					},
					jsonData : jsonData,
					success : function(res, opts) {
						// 关闭进度条
						Ext.Msg.hide();
						// 获取返回值
						var returnJson = Ext.decode(res.responseText);

						if (returnJson.flag == 0) {
							// 提交成功
							var str = {
								flag : 0,
								instanceCode : instanceCode
							};
							callback(str);

						} else if (returnJson.flag == 1) {
							// 提交失败
							var str = {
								flag : 1,
								msg : returnJson.msg
							};
							callback(str);

						} else {
							/*
							 * ================= 流需要手动选择审批人 ===============
							 */
							params.p_instanceCode = instanceCode;
							XipWfPrivate.chooseUsers(returnJson.data,
									returnJson.multiselect, params, 'submit',
									callback);

						}
					},
					failure : function(res, opts) {
						Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_request_error);
					}
				});
	},

	/**
	 * 根据流程编码重启流程
	 * 
	 * @param instanceCode
	 *            流程实例Code
	 * @param processCode
	 *            流程编码 如果不传processCode 则按照原流程重启
	 * @param callback
	 *            回调函数 重启流程实例成功返回{flag:0,msg:'xxxx'}否则返回{flag:1,msg:'xxxx'}
	 */
	restartInstanceByProcess : function(instanceCode, processCode, callback) {
		Ext.Msg.wait(XipLang.xwf_lang_pro_restart);

		var processId = '';

		if (!Ext.isEmpty(processCode)) {
			var returnJson = XipWfPrivate.getProcessIdByCode(processCode);
			if (returnJson.flag == 1) {
				return;
			} else {
				processId = returnJson.processId;
			}
		}

		if (Ext.isEmpty(processId) || processId == undefined) {
			Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_no_pro_code);
			return;
		}

		var url = XipWfPrivate.getContextPath()
				+ "/workflowUtilAction.do?method=restartInstance";
		var params = {
			'instanceCode' : instanceCode,
			'processId' : processId
		};
		XipWfPrivate.sendAjaxRequest(url, params, function(obj) {
			Ext.Msg.alert('', obj.msg);
			if (obj.flag == 0) {
				if (callback) {
					callback(obj);
				}
			}
		});
	},

	/**
	 * 根据实体编码重启流程
	 * 
	 * @param instanceCode
	 *            实例编码
	 * @param entityCode
	 *            实体编码
	 * @param params
	 *            实体属性值对Json {attr1Name:'attr1Value',attr2Name:'attr2Value'}
	 * @param callback
	 *            回调函数 重启流程实例成功返回{flag:0,msg:'xxxx'}否则返回{flag:1,msg:'xxxx'}
	 */
	restartInstanceByEntity : function(instanceCode, entityCode, params,
			callback) {
		XipWfPrivate.getProcessIdByEntityCode(entityCode, params,
				function(obj) {
					if (obj.flag != 0) {
						if (callback) {
							callback(obj);
						}
						Ext.Msg.alert(XipLang.xwf_lang_notice, obj.msg);
						return;
					}
					var processId = obj.processId;
					var url = XipWfPrivate.getContextPath()
							+ "/workflowUtilAction.do?method=restartInstance";
					var json = {
						'instanceCode' : instanceCode,
						'processId' : processId
					};
					Ext.Msg.wait(XipLang.xwf_lang_pro_restart);
					XipWfPrivate.sendAjaxRequest(url, json, function(obj) {
						Ext.Msg.alert('', obj.msg);
						if (obj.flag == 0) {
							if (callback) {
								callback(obj);
							}
						}
					});
				});
	},

	/**
	 * 根据流程编码启动并提交流程
	 * 
	 * @param processCode
	 *            流程编码
	 * @param params
	 *            实体属性值对Json {attr1Name:'attr1Value',attr2Name:'attr2Value'}
	 * @param callback
	 *            回调函数，如果成功返回{flag:0,instanceCode:'xxxx'}
	 *            否则返回{flag:1,msg:'xxxx'}
	 * 
	 */
	startAndSubmitByProcess : function(processCode, params, callback) {
		Ext.Msg.wait(XipLang.xwf_lang_pro_code_start);

		var processId = '';

		if (!Ext.isEmpty(processCode)) {
			var returnJson = XipWfPrivate.getProcessIdByCode(processCode);
			if (returnJson.flag == 1) {
				return;
			} else {
				processId = returnJson.processId;
			}
		}

		if (Ext.isEmpty(processId) || processId == undefined) {
			Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_no_pro_code);
			return;
		}

		XipWfPrivate.startAndSubmitProcess(processId, params, callback);
	},

	/**
	 * 根据实体编码和参数获取流程并提交流程
	 * 
	 * @param entityCode
	 *            业务实体编码
	 * @param params
	 *            实体属性值对Json {attr1Name:'attr1Value',attr2Name:'attr2Value'}
	 * @param callback
	 *            回调函数 如果启动并提交成功返回{flag:0,instanceCode:'xxxx'}
	 *            否则返回{flag:1,msg:'xxxx'}
	 */
	startAndSubmitByEntity : function(entityCode, params, callback) {
		Ext.Msg.wait(XipLang.xwf_lang_pro_code_query);
		var url = XipWfPrivate.getContextPath()
				+ "/workflowUtilAction.do?method=getProcessIdByEntityCodeOld";

		if (!params) {
			params = {};
		} else {
			if (typeof (params) != "object") {
				try {
					params = Ext.JSON.decode(params);
				} catch (ex) {
					Ext.Msg.alert(XipLang.xwf_lang_notice, ex);
					return;
				}
			}
		}

		var json = {
			"entityCode" : entityCode,
			"entityAttJson" : params
		};

		var jsonData = Ext.JSON.encode(json);

		Ext.Ajax.request({
			url : url,
			method : 'POST',
			sync : '',
			scope : this,
			timeout : 300000,
			headers : {
				'Content-Type' : 'application/json'
			},
			jsonData : jsonData,
			success : function(res, opts) {
				Ext.Msg.hide();

				var returnJson = Ext.decode(res.responseText);

				if (returnJson.flag == 0) {
					// 如果找到一个流程
					var processId = returnJson.processId;
					XipWfPrivate.startAndSubmitProcess(processId, params,
							callback);

				} else if (returnJson.flag == 1) {
					var str = {
						flag : 1,
						msg : returnJson.msg
					};
					Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_pro_effective + returnJson.msg,
							function() {
								callback(str);
							});

				} else {
					// 找到0或多个符合条件的流程
					var processArray = new Array();
					for (var i = 0; i < returnJson.data.length; i++) {
						var record = returnJson.data[i];
						var row = {
							processId : record.processId,
							processCode : record.processCode,
							processName : record.processName
						};
						processArray[i] = row;
					}
					;

					function choose() {
						var records = grid.getSelectionModel().getSelection();
						if (records.length == 1) {
							var record = records[0];
							Ext.MessageBox.confirm(XipLang.xwf_lang_confirm_pro, XipLang.xwf_lang_pro_choose+"：【"
									+ record.get('processName') + "】,"+XipLang.xwf_lang_tip_confirm,
									function(e) {
										if (e == "yes") {
											t_window.close();
											var processId = record
													.get('processId');
											XipWfPrivate
													.startAndSubmitProcess(
															processId, params,
															callback);
										}
									});
						} else {
							Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_one_choose);
						}
					}
					;

					var grid = Ext.create('Ext.grid.Panel', {
						store : {
							data : processArray,
							fields : [ {
								name : 'processId',
								type : 'string'
							}, {
								name : 'processCode',
								type : 'string'
							}, {
								name : 'processName',
								type : 'string'
							} ]
						},
						selModel : {
							showHeaderCheckbox : false,
							selType : 'checkboxmodel',
							mode : 'SINGLE'
						}, // 选择框
						columns : [ new Ext.grid.RowNumberer(), {
							text : 'ID',
							dataIndex : 'processId',
							hidden : true
						}, {
							text :  XipLang.xwf_lang_process_code,
							dataIndex : 'processCode',
							width : 130
						}, {
							text : XipLang.xwf_lang_process_name,
							dataIndex : 'processName',
							width : 180
						} ],
						height : 200,
						width : 400,
						listeners : {
							'rowdblclick' : choose
						}
					});

					var t_window = new Ext.Window({
						width : 440,
						height : 400,
						layout : 'fit',
						buttonAlign : 'center',
						items : [ grid ],
						modal : true,
						closeAction : 'close',
						title : XipLang.xwf_lang_one_choose,
						buttons : [ {
							text : XipLang.xwf_lang_btn_confirm,
							handler : choose
						}, {
							text : XipLang.xwf_lang_btn_cancel,
							handler : function() {
								t_window.close();
							}
						} ]
					});
					Ext.Msg.hide();
					t_window.show();
				}
			},
			failure : function(res, opts) {
				xt.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_request_error);
			}
		});
	},

	/**
	 * 根据流程编码重启并提交流程
	 * 
	 * @param instanceCode
	 *            流程实例Code
	 * @param processCode
	 *            流程编码 如果不传processCode 则按照原流程重启
	 * @param params
	 *            实体属性值对Json {attr1Name:'attr1Value',attr2Name:'attr2Value'}
	 * @param callback
	 *            回调函数，重启成功返回{flag:0,instanceCode:'xxxx'}否则{flag:1,msg:'xxxx'}
	 */
	restartAndSubmitByProcess : function(instanceCode, processCode, params,
			callback) {
		Ext.Msg.wait(XipLang.xwf_lang_pro_restart);
		var processId = '';

		if (!Ext.isEmpty(processCode)) {
			var returnJson = XipWfPrivate.getProcessIdByCode(processCode);
			if (returnJson.flag == 1) {
				return;
			} else {
				processId = returnJson.processId;
			}
		}

		if (Ext.isEmpty(processId) || processId == undefined) {
			Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_no_pro_code);
			return;
		}

		var url = XipWfPrivate.getContextPath()
				+ "/workflowUtilAction.do?method=restartInstance";
		var json = {
			'instanceCode' : instanceCode,
			'processId' : processId
		};
		Ext.Msg.wait(XipLang.xwf_lang_instance_recreate);
		XipWfPrivate.sendAjaxRequest(url, json, function(obj) {
			// Ext.Msg.alert('',obj.msg);
			if (obj.flag == 0) {
				XipWf.submitInstance(instanceCode, params, callback);
			}
		});
	},

	/**
	 * 根据实体编码重启并提交流程
	 * 
	 * @param instanceCode
	 *            实例编码
	 * @param entityCode
	 *            实体编码
	 * @param params
	 *            实体属性值对Json {attr1Name:'attr1Value',attr2Name:'attr2Value'}
	 * @param callback
	 *            回调函数，重启成功返回{flag:0,instanceCode:'xxxx'}否则{flag:1,msg:'xxxx'}
	 */
	restartAndSubmitByEntity : function(instanceCode, entityCode, params,
			callback) {
		XipWfPrivate.getProcessIdByEntityCode(entityCode, params,
				function(obj) {
					if (obj.flag != '0') {
						if (callback) {
							callback(obj);
						}
						Ext.Msg.alert(XipLang.xwf_lang_notice, obj.msg);
						return;
					}
					var processId = obj.processId;
					var url = XipWfPrivate.getContextPath()
							+ "/workflowUtilAction.do?method=restartInstance";
					var json = {
						'instanceCode' : instanceCode,
						'processId' : processId
					};
					Ext.Msg.wait(XipLang.xwf_lang_instance_recreate);
					XipWfPrivate.sendAjaxRequest(url, json, function(obj) {
						// Ext.Msg.alert('',obj.msg);
						if (obj.flag == '0') {
							XipWf
									.submitInstance(instanceCode, params,
											callback);
						}
					});
				});
	},

	/**
	 * 根据实例Code撤回流程实例
	 * 
	 * @param instanceCode
	 *            流程实例编码
	 * @param callback
	 *            回调函数如果成功返回{flag:0,msg:'xxxx'} 否则返回{flag:1,msg:'xxxx'}
	 */
	revokeByInstance : function(instanceCode, callback) {
		Ext.Msg.wait(XipLang.xwf_lang_pro_recall);
		var url = XipWfPrivate.getContextPath()
				+ "/workflowUtilAction.do?method=revokeByInsCode";
		var params = {
			'instanceCode' : instanceCode
		};
		XipWfPrivate.sendAjaxRequest(url, params, callback);
	},
	/**
	 * 设置流程实例实体属性
	 * 
	 * @param instanceCode
	 *            流程实例编码
	 * @param entityAttrs
	 *            实体属性值对Json串 "{attr1Name:'attr1Value',attr2Name:'attr2Value'}"
	 * @param callBack
	 *            回调函数 如果设置实例属性成功，返回{flag:0,msg:'xxxx'} 否则{flag:1,msg:'xxxx'}
	 */
	setInstanceEntityAttrValue : function(instanceCode, entityAttrs, callBack) {
		Ext.Ajax.request({
			url : 'workflowUtilAction.do?method=setInstanceEntityAttrValue',
			params : {
				'instanceCode' : instanceCode,
				'entityAttrs' : entityAttrs
			},
			method : 'post',
			async : false,
			timeout : 3600000,
			success : function(response, options) {
				var resp = Ext.util.JSON.decode(response.responseText);
				callBack(resp);
			},
			failure : function(reponse, options) {
				callBack({
					"flag" : 1,
					"msg" : XipLang.xwf_lang_send_error
				});
			}
		});
	},
	/**
	 * 弹出流程监控页面
	 * 
	 * @param insCode
	 *            流程实例编码
	 */
	showMonitorPage : function(insCode) {
		if (insCode == null || insCode == 'undefined' || insCode == '') {
			Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_appoint_code);
			return;
		}
		var url = XipWfPrivate.getContextPath()
				+ "/workflow/monitor/extMonitorFrame.jsp?insCode=" + insCode;
		var windowConfig = {
			'title' : XipLang.xwf_lang_pro_monitor,
			'url' : url,
			'isMax' : true
		};
		Xip.showExtWindow(windowConfig);
	},

	/**
	 * 根据任务id创建按钮
	 * 
	 * @param taskId
	 *            待办Id
	 * @param textArea
	 *            审批意见组件
	 * @param insCode
	 *            流程实例编码
	 * @param bizId
	 *            业务主键Id
	 * @return 返回按钮数组
	 */
	createButtonsByTaskId : function(taskId, textArea, insCode, bizId,
			taskState) {
		var respButtonArray;
		var buttons;
		var btnArray = new Array(); // 记录按钮数组
		var lineArray = new Array(); // 记录连线按钮数组

		if (taskState == 'closed') {
			// 待办已关闭
			respButtonArray = {};
			respButtonArray.flag = "0";
			respButtonArray.msg = XipLang.xwf_lang_task_finished;
			buttons = [];
		} else {
			respButtonArray = XipWfPrivate.getButtonsByTaskId(taskId);
			buttons = respButtonArray.data;
		}

		for (var i = 0; i < buttons.length; i++) {
			var button = buttons[i];
			var id = button.id;
			var code = button.code;
			var name = button.name;
			var disable = button.disable; // Y不可用 N可用

			if (disable == "N") { // 如果disable属性为 "Y"时, 则不显示按钮

				// 定义按钮对象
				var btn = new Ext.Button({
					text : name
				});

				// 根据按钮编码分配按钮处理事件
				if (code == XipWfPrivate.WorkFlowConstants.TASK_BTN_CANCEL) { // 撤回流程
					btn
							.setHandler(function() {
								Ext.MessageBox
										.confirm(
												XipLang.xwf_lang_notice,
												XipLang.process_recall_confirm,
												function(opt) {
													if (opt == 'yes') {
														// 执行前置函数
														var json = XipWfPrivate
																.beforeHandlerEvent(
																		XipWfPrivate.WorkFlowConstants.TASK_BTN_CANCEL,
																		insCode,
																		bizId);

														if (json == null) { // 不存在前置函数
															// 执行流程撤回
															XipWfPrivate
																	.doCancel(
																			taskId,
																			XipWfPrivate
																					.afterHandlerEvent(
																							XipWfPrivate.WorkFlowConstants.TASK_BTN_CANCEL,
																							insCode,
																							bizId));

														} else { // 存在前置函数
															var response = Ext.JSON
																	.decode(json);

															if (response.flag == 0) { // 执行成功
																// 执行流程撤回
																XipWfPrivate
																		.doCancel(
																				taskId,
																				XipWfPrivate
																						.afterHandlerEvent(
																								XipWfPrivate.WorkFlowConstants.TASK_BTN_CANCEL,
																								insCode,
																								bizId));

															} else {
																Ext.Msg
																		.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_execute_failure + response.msg);
																return false;
															}
														}
													} else {
														return false;
													}
												});
							});

				} else if (code == XipWfPrivate.WorkFlowConstants.TASK_BTN_CONSULT) { // 征询
					btn
							.setHandler(function() {
								// 执行前置函数
								var json = XipWfPrivate
										.beforeHandlerEvent(
												XipWfPrivate.WorkFlowConstants.TASK_BTN_CONSULT,
												insCode, bizId);

								var comment = textArea.getValue();

								if (json == null) { // 不存在前置函数
									XipWfPrivate
											.chooseAllUsers(
													taskId,
													XipWfPrivate.WorkFlowConstants.TASK_BTN_CONSULT,
													comment,
													XipWfPrivate
															.afterHandlerEvent(
																	XipWfPrivate.WorkFlowConstants.TASK_BTN_CONSULT,
																	insCode,
																	bizId));

								} else { // 存在前置函数
									var response = Ext.JSON.decode(json);

									if (response.flag == 0) { // 执行成功
										XipWfPrivate
												.chooseAllUsers(
														taskId,
														XipWfPrivate.WorkFlowConstants.TASK_BTN_CONSULT,
														comment,
														XipWfPrivate
																.afterHandlerEvent(
																		XipWfPrivate.WorkFlowConstants.TASK_BTN_CONSULT,
																		insCode,
																		bizId));

									} else {
										Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_execute_failure + response.msg);
										return false;
									}
								}
							});

				} else if (code == XipWfPrivate.WorkFlowConstants.TASK_BTN_CONSULT_CLOSE) { // 征询反馈
					btn
							.setHandler(function() {
								// 审批意见
								var comment = textArea.getValue();

								// 执行前置函数
								var json = XipWfPrivate
										.beforeHandlerEvent(
												XipWfPrivate.WorkFlowConstants.TASK_BTN_CONSULT_CLOSE,
												insCode, bizId);

								if (json == null) { // 不存在前置函数
									XipWfPrivate
											.closeConsult(
													taskId,
													comment,
													XipWfPrivate
															.afterHandlerEvent(
																	XipWfPrivate.WorkFlowConstants.TASK_BTN_CONSULT_CLOSE,
																	insCode,
																	bizId));

								} else { // 存在前置函数
									var response = Ext.JSON.decode(json);

									if (response.flag == 0) { // 执行成功
										XipWfPrivate
												.closeConsult(
														taskId,
														comment,
														XipWfPrivate
																.afterHandlerEvent(
																		XipWfPrivate.WorkFlowConstants.TASK_BTN_CONSULT_CLOSE,
																		insCode,
																		bizId));

									} else {
										Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_execute_failure + response.msg);
										return false;
									}
								}
							});

				} else if (code == XipWfPrivate.WorkFlowConstants.TASK_BTN_CONSULT_REVOKE) { // 撤销征询
					btn
							.setHandler(function() {
								var comment = textArea.getValue();

								// 执行前置函数
								var json = XipWfPrivate
										.beforeHandlerEvent(
												XipWfPrivate.WorkFlowConstants.TASK_BTN_CONSULT_REVOKE,
												XipWfPrivate
														.afterHandlerEvent(
																XipWfPrivate.WorkFlowConstants.TASK_BTN_CONSULT_REVOKE,
																insCode, bizId));

								if (json == null) { // 不存在前置函数
									XipWfPrivate
											.revokeConsult(
													taskId,
													comment,
													XipWfPrivate
															.afterHandlerEvent(
																	XipWfPrivate.WorkFlowConstants.TASK_BTN_CONSULT_REVOKE,
																	insCode,
																	bizId));

								} else { // 存在前置函数
									var response = Ext.JSON.decode(json);

									if (response.flag == 0) { // 执行成功
										XipWfPrivate
												.revokeConsult(
														taskId,
														comment,
														XipWfPrivate
																.afterHandlerEvent(
																		XipWfPrivate.WorkFlowConstants.TASK_BTN_CONSULT_REVOKE,
																		insCode,
																		bizId));

									} else {
										Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_execute_failure + response.msg);
										return false;
									}
								}
							});

				} else if (code == XipWfPrivate.WorkFlowConstants.TASK_BTN_DELEGATE) { // 委派处理
					btn
							.setHandler(function() {
								// 执行前置函数
								var json = XipWfPrivate
										.beforeHandlerEvent(
												XipWfPrivate.WorkFlowConstants.TASK_BTN_DELEGATE,
												insCode, bizId);

								var comment = textArea.getValue();

								if (json == null) { // 不存在前置函数
									XipWfPrivate
											.chooseAllUsers(
													taskId,
													XipWfPrivate.WorkFlowConstants.TASK_BTN_DELEGATE,
													comment,
													XipWfPrivate
															.afterHandlerEvent(
																	XipWfPrivate.WorkFlowConstants.TASK_BTN_DELEGATE,
																	insCode,
																	bizId));

								} else { // 存在前置函数
									var response = Ext.JSON.decode(json);

									if (response.flag == 0) { // 执行成功
										XipWfPrivate
												.chooseAllUsers(
														taskId,
														XipWfPrivate.WorkFlowConstants.TASK_BTN_DELEGATE,
														comment,
														XipWfPrivate
																.afterHandlerEvent(
																		XipWfPrivate.WorkFlowConstants.TASK_BTN_DELEGATE,
																		insCode,
																		bizId));

									} else {
										Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_execute_failure + response.msg);
										return false;
									}
								}
							});

				} else if (code == XipWfPrivate.WorkFlowConstants.TASK_BTN_BACK) { // 回退流程
					btn
							.setHandler(function() {
								// 执行前置函数
								var json = XipWfPrivate
										.beforeHandlerEvent(
												XipWfPrivate.WorkFlowConstants.TASK_BTN_BACK,
												insCode, bizId);

								if (json == null) { // 不存在前置函数
									// 取得回退节点信息
									var respActArray = XipWfPrivate
											.getGlobalData(
													XipWfPrivate
															.getContextPath()
															+ '/workflowUtilAction.do?method=getBackActivityList',
													taskId);
									if (respActArray.flag == 0) {
										var acts = respActArray.data;
										// 取得回退意见
										var comment = textArea.getValue();
										// 执行回退处理
										XipWfPrivate
												.chooseBackActivity(
														acts,
														taskId,
														comment,
														XipWfPrivate
																.afterHandlerEvent(
																		XipWfPrivate.WorkFlowConstants.TASK_BTN_BACK,
																		insCode,
																		bizId));
									} else {
										Ext.Msg.alert(XipLang.xwf_lang_notice, respActArray.msg);
										return false;
									}

								} else { // 存在前置函数
									var response = Ext.JSON.decode(json);

									if (response.flag == 0) { // 执行成功
										// 取得回退节点信息
										var respActArray = XipWfPrivate
												.getGlobalData(
														XipWfPrivate
																.getContextPath()
																+ '/workflowUtilAction.do?method=getBackActivityList',
														taskId);
										if (respActArray.flag == 0) {
											var acts = respActArray.data;
											// 取得回退意见
											var comment = textArea.getValue();
											// 执行回退处理
											XipWfPrivate
													.chooseBackActivity(
															acts,
															taskId,
															comment,
															XipWfPrivate
																	.afterHandlerEvent(
																			XipWfPrivate.WorkFlowConstants.TASK_BTN_BACK,
																			insCode,
																			bizId));
										} else {
											Ext.Msg.alert(XipLang.xwf_lang_notice,
													respActArray.msg);
											return false;
										}

									} else {
										Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_execute_failure + response.msg);
										return false;
									}
								}
							});

				} else if (code == XipWfPrivate.WorkFlowConstants.TASK_BTN_REJECT) { // 驳回流程
					btn
							.setHandler(function() {
								var comment = textArea.getValue();
								// 执行前置函数
								var json = XipWfPrivate
										.beforeHandlerEvent(
												XipWfPrivate.WorkFlowConstants.TASK_BTN_REJECT,
												insCode, bizId);

								if (json == null) { // 不存在前置函数
									XipWfPrivate
											.doReject(
													taskId,
													comment,
													XipWfPrivate
															.afterHandlerEvent(
																	XipWfPrivate.WorkFlowConstants.TASK_BTN_REJECT,
																	insCode,
																	bizId));

								} else { // 存在前置函数
									var response = Ext.JSON.decode(json);

									if (response.flag == 0) { // 执行成功
										XipWfPrivate
												.doReject(
														taskId,
														comment,
														XipWfPrivate
																.afterHandlerEvent(
																		XipWfPrivate.WorkFlowConstants.TASK_BTN_REJECT,
																		insCode,
																		bizId));

									} else {
										Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_execute_failure + response.msg);
										return false;
									}
								}
							});

				} else if (code == XipWfPrivate.WorkFlowConstants.TASK_BTN_COPYTO) { // 关闭抄送待办
					btn
							.setHandler(function() {
								// 执行前置函数
								var json = XipWfPrivate
										.beforeHandlerEvent(
												XipWfPrivate.WorkFlowConstants.TASK_BTN_COPYTO,
												insCode, bizId);

								if (json == null) { // 不存在前置函数
									XipWfPrivate
											.closeCopyTo(
													taskId,
													XipWfPrivate
															.afterHandlerEvent(
																	XipWfPrivate.WorkFlowConstants.TASK_BTN_COPYTO,
																	insCode,
																	bizId));

								} else { // 存在前置函数
									var response = Ext.JSON.decode(json);

									if (response.flag == 0) { // 执行成功
										XipWfPrivate
												.closeCopyTo(
														taskId,
														XipWfPrivate
																.afterHandlerEvent(
																		XipWfPrivate.WorkFlowConstants.TASK_BTN_COPYTO,
																		insCode,
																		bizId));

									} else {
										Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_execute_failure + response.msg);
										return false;
									}
								}
							});

				} else if (code == XipWfPrivate.WorkFlowConstants.TASK_BTN_FORWARD) { // 转发
					btn
							.setHandler(function() {
								// 执行前置函数
								var json = XipWfPrivate
										.beforeHandlerEvent(
												XipWfPrivate.WorkFlowConstants.TASK_BTN_FORWARD,
												insCode, bizId);

								if (json == null) {// 不存在前置函数
									XipWfPrivate
											.forward(taskId, insCode, bizId);
								} else { // 存在前置函数
									var response = Ext.JSON.decode(json);

									if (response.flag == 0) { // 执行成功
										XipWfPrivate.forward(taskId, insCode,
												bizId);
									} else {
										Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_execute_failure + response.msg);
										return false;
									}
								}
							});

				} else { // 按钮处理
					lineArray.push(btn.getId() + ";" + code);
					btn
							.setHandler(function(code) {
								// 计算按钮编码【点击时执行此段代码】
								var lineCode = '';
								for (var j = 0; j < lineArray.length; j++) {
									var a = lineArray[j].split(';');
									if (a[0] == code.id) {
										lineCode = a[1];
										break;
									}
								}
								var comment = textArea.getValue();

								if (comment == null || comment == '') {
									comment = code.text;
								}

								var isRun = XipWfPrivate
										.beforeHandlerEventWithCallback(
												"check", taskId, lineCode,
												insCode, bizId);

								if (isRun == true) {
									XipWfPrivate
											.beforeHandlerEventWithCallback(
													"run",
													taskId,
													lineCode,
													insCode,
													bizId,
													function() {
														// 执行前置函数
														var json = XipWfPrivate
																.beforeHandlerEvent(
																		lineCode,
																		insCode,
																		bizId);

														if (json == null) {// 不存在前置函数
															XipWfPrivate
																	.completeTask(
																			taskId,
																			lineCode,
																			comment,
																			XipWfPrivate
																					.afterHandlerEvent(
																							lineCode,
																							insCode,
																							bizId));

														} else { // 存在前置函数
															var response = Ext.JSON
																	.decode(json);

															if (response.flag == 0) { // 执行成功
																XipWfPrivate
																		.completeTask(
																				taskId,
																				lineCode,
																				comment,
																				XipWfPrivate
																						.afterHandlerEvent(
																								lineCode,
																								insCode,
																								bizId));

															} else {
																Ext.Msg
																		.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_execute_failure + response.msg);
																return false;
															}
														}
													});
									return false;
								}

								// 执行前置函数
								var json = XipWfPrivate.beforeHandlerEvent(
										lineCode, insCode, bizId);

								if (json == null) { // 不存在前置函数
									XipWfPrivate.completeTask(taskId, lineCode,
											comment, XipWfPrivate
													.afterHandlerEvent(
															lineCode, insCode,
															bizId));

								} else { // 存在前置函数
									var response = Ext.JSON.decode(json);

									if (response.flag == 0) { // 执行成功
										XipWfPrivate
												.completeTask(
														taskId,
														lineCode,
														comment,
														XipWfPrivate
																.afterHandlerEvent(
																		lineCode,
																		insCode,
																		bizId));

									} else {
										Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_execute_failure + response.msg);
										return false;
									}
								}
							});
				}
				// 将按钮对象压入数组
				btnArray.push(btn);
			}
		}

		return btnArray;
	},

	/**
	 * 获取业务表单地址
	 * 
	 * @param {}
	 *            taskId : 待办ID return JSON 返回格式为：{"formUrl":"","createType":""}
	 */
	getBizFormUrl : function(taskId) {
		var _reqUrl = XipWfPrivate.getContextPath()
				+ '/workItemAction.do?method=getTaskBaseInfo';
		var _reqParam = {
			"taskId" : taskId
		};
		var resp = XipWfPrivate.sendAjaxReq(_reqUrl, _reqParam, false);
		if (resp == null || resp == "" || resp == "undefined") {
			return null;
		} else {
			return resp.formUrl;
		}
	}

};

/**
 * 工作流内部调用API
 */
var XipWfPrivate = {
	/**
	 * 征询、委派和回退按钮常量 btnConsult - 征询 btnDelegate - 委派 btnBack - 回退
	 * btnCloseConsult - 征询反馈 btnRevokeConsult - 撤消征询 btnSubmit - 提交流程 btnCancel -
	 * 撤销流程 btnCopyTo - 关闭抄送待办 btnReject - 驳回
	 */
	WorkFlowConstants : {
		// 征询按钮编码
		TASK_BTN_CONSULT : "btnConsult",
		// 委派按钮编码
		TASK_BTN_DELEGATE : "btnDelegate",
		// 回退按钮编码
		TASK_BTN_BACK : "btnBack",
		// 征询反馈按钮编码
		TASK_BTN_CONSULT_CLOSE : "btnCloseConsult",
		// 撤销征询按钮编码
		TASK_BTN_CONSULT_REVOKE : "btnRevokeConsult",
		// 提交流程按钮编码
		TASK_BTN_SUBMIT : "btnSubmit",
		// 撤销流程按钮编码
		TASK_BTN_CANCEL : "btnCancel",
		// 关闭抄送按钮编码
		TASK_BTN_COPYTO : "btnCopyTo",
		// 驳回流程按钮编码
		TASK_BTN_REJECT : "btnReject",
		// 业务表单iframe对象 id
		BIZ_PANEL_FRAME : "bizPanelFrame",
		// 转发按钮
		TASK_BTN_FORWARD : "btnForward"

	},

	/**
	 * 获取contextPath
	 * 
	 * @returns contextPath
	 */
	getContextPath : function() {
		var pathName = document.location.pathname;
		var index = pathName.substr(1).indexOf("/");
		var result = pathName.substr(0, index + 1);
		return result;
	},

	/**
	 * 将json对象转化为ajax请求参数 格式:xxx=xx&yyy=yy&zzz=zz
	 * 
	 * @param params
	 *            json对象
	 * @returns {String}
	 */
	jsonToAjaxParam : function(params) {
		var str = '';
		for ( var i in params) {
			str += i + "=" + params[i] + "&";
		}
		return str;
	},

	/**
	 * 提交ajax请求
	 * 
	 * @param {}
	 *            requestUrl : 请求URL
	 * @param {}
	 *            requestParam : 请求参数(json格式)
	 * @param {}
	 *            isAsync : 请求同步/异步性(true为同步,false为异步)
	 */
	sendAjaxReq : function(requestUrl, requestParam, isAsync) {
		var resp;
		// 提交请求
		Ext.Ajax.request({
			url : requestUrl,
			params : requestParam,
			method : 'post',
			timeout : 3600000,
			async : isAsync,
			success : function(response, options) {
				resp = Ext.JSON.decode(response.responseText);
			},
			failure : function(reponse, options) {
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
			}
		});
		return resp;
	},

	/**
	 * 发送同步请求
	 * 
	 * @param url
	 *            请求路径
	 * @param params
	 *            请求参数，json格式
	 * @returns
	 */
	sendRequest : function(url, params) {
		var conn = Ext.lib.Ajax.getConnectionObject().conn;
		conn.open("post", url, false);
		conn.setRequestHeader("Content-Type",
				"application/x-www-form-urlencoded;charset=UTF-8");
		conn.send(XipWfPrivate.jsonToAjaxParam(params));
		return conn.responseText;
	},

	/**
	 * 发送异步请求
	 * 
	 * @param url请求路径
	 * @param params
	 *            请求参数，json格式
	 * @param callback
	 *            回调函数
	 */
	sendAjaxRequest : function(url, params, callback) {
		if (!params) {
			params = {};
		}
		;
		Ext.Ajax.request({
			url : url,
			method : 'POST',
			timeout : 300000,
			params : params,
			success : function(result, request) {
				Ext.Msg.hide();
				callback(Ext.JSON.decode(result.responseText));
			},
			failure : function(result, request) {
				Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_request_error);
			}
		});
	},

	/**
	 * 根据流程id创建流程实例
	 * 
	 * @param processId
	 *            流程id
	 * @param callback
	 *            回调函数
	 */
	createInstanceByProcessId : function(processId, callback) {
		Ext.Msg.wait(XipLang.xwf_lang_id_create);
		var url = XipWfPrivate.getContextPath()
				+ "/workflowUtilAction.do?method=createInstanceByProcessId";
		var params = {
			'processId' : processId
		};
		XipWfPrivate.sendAjaxRequest(url, params, callback);
	},

	/**
	 * 按流程Id 启动并提交流程
	 * 
	 * @param processId
	 *            流程id
	 * @param callback
	 *            回调函数，将选择流程结果做为参数传递给回调函数，选择结果格式为json对象 正确
	 *            {flag:0,instanceId:'xxx'}" 错误{flag:1,msg:'xxx'}
	 */
	startAndSubmitProcess : function(processId, params, callback) {
		// 提交流程，创建流程实例
		Ext.Msg.wait(XipLang.xwf_lang_id_create);

		if (!params) {
			params = {
				'processId' : processId
			};
		} else {
			if (typeof (params) != "object") {
				try {
					params = Ext.JSON.decode(params);

				} catch (ex) {
					Ext.Msg.alert(XipLang.xwf_lang_notice, ex);
					return;
				}
			}
			// 加入流程ID
			params.processId = processId;
		}

		// 提交请求
		Ext.Ajax
				.request({
					url : XipWfPrivate.getContextPath()
							+ '/workflowUtilAction.do?method=createInstanceByProcessId',
					method : 'POST',
					timeout : 300000,
					params : params,
					success : function(result, request) {
						Ext.Msg.hide();
						var obj = Ext.JSON.decode(result.responseText);
						if (obj.flag != 0) {
							// 流程实例创建失败
							callback(obj);
							return;

						} else {
							// 流程实例创建成功提交流程
							var instanceCode = obj.instanceCode;
							XipWf
									.submitInstance(instanceCode, params,
											callback);
						}
					},
					failure : function(result, request) {
						Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_request_error);
					}
				});
	},

	/**
	 * 根据实体编码和参数获取流程
	 * 
	 * @param entityCode
	 *            实体编码
	 * @param params
	 *            实体参数，json格式
	 * @param callback
	 *            回调函数，将选择流程结果做为参数传递给回调函数，选择结果格式为json对象
	 *            正确：{flag:0,processId:'xxx',processCode:'xxx',processName:'xxx'}"
	 *            错误{flag:1,msg:'xxx'}
	 */
	getProcessIdByEntityCode : function(entityCode, params, callback) {
		Ext.Msg.wait(XipLang.xwf_lang_pro_code_query);
		var url = XipWfPrivate.getContextPath()
				+ "/workflowUtilAction.do?method=getProcessIdByEntityCodeOld";
		if (!params) {
			params = {};
		} else {
			if (typeof (params) != "object") {
				try {
					params = Ext.JSON.decode(params);
				} catch (ex) {
					Ext.Msg.alert(XipLang.xwf_lang_notice, ex);
					return;
				}
			}
		}

		var json = {
			"entityCode" : entityCode,
			"entityAttJson" : params
		};
		var jsonData = Ext.JSON.encode(json);

		// 提交ajax请求
		Ext.Ajax.request({
			url : url,
			method : 'POST',
			async : true,
			scope : this,
			timeout : 300000,
			headers : {
				'Content-Type' : 'application/json'
			},
			jsonData : jsonData,
			success : function(res, opts) {
				Ext.Msg.hide();
				var returnJson = Ext.JSON.decode(res.responseText);

				if (returnJson.flag == 0) {
					// 找到一个符合条件的流程, 直接启动流程
					var procId = returnJson.processId; // 流程ID

					// 取得实例编码
					var _insCode = params.e_instance_code;

					if (_insCode != null && _insCode != ""
							&& _insCode != "undefined") {
						// 如果实例编码已存在, 则执行重启并提交流程
						XipWfPrivate.restartInstanceSubmit(_insCode, procId,
								params, callback);

					} else {
						// 如果实例编码不存在, 则执行启动并提交流程
						// XipWf.startAndSubmitProcess(procId,params,callback) ;
						if (callback) {
							callback(returnJson);
						}
					}

				} else if (returnJson.flag == 1) {
					// 未找到符合条件的流程
					var str = {
						flag : 1,
						msg : returnJson.msg
					};
					Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_pro_effective + returnJson.msg,
							function() {
								callback(str);
							});

				} else {
					// 找到多个符合条件的流程
					var processArray = new Array();
					for (var i = 0; i < returnJson.data.length; i++) {
						var record = returnJson.data[i];
						var row = {
							processId : record.processId,
							processCode : record.processCode,
							processName : record.processName
						};
						processArray[i] = row;
					}
					;

					function choose() {
						var records = grid.getSelectionModel().getSelection();
						if (records.length == 1) {
							var record = records[0];
							Ext.MessageBox.confirm("XipLang.xwf_lang_confirm_pro", XipLang.xwf_lang_pro_choose+":【"
									+ record.get('processName') + "】,"+XipLang.xwf_lang_tip_confirm,
									function(e) {
										if (e == "yes") {
											params.flag = 0;
											params.processId = record
													.get('processId');
											params.processCode = record
													.get('processCode');
											params.processName = record
													.get('processName');
											t_window.close();
											callback(params);
										}
									});
						} else {
							Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_one_choose);
						}
					}

					var grid = Ext.create('Ext.grid.Panel', {
						store : {
							data : processArray,
							fields : [ {
								name : 'processId',
								type : 'string'
							}, {
								name : 'processCode',
								type : 'string'
							}, {
								name : 'processName',
								type : 'string'
							} ]
						},
						selModel : {
							showHeaderCheckbox : false,
							selType : 'checkboxmodel',
							mode : 'SINGLE'
						}, // 选择框
						columns : [ new Ext.grid.RowNumberer(), {
							text : 'ID',
							dataIndex : 'processId',
							hidden : true
						}, {
							text :  XipLang.xwf_lang_process_code,
							dataIndex : 'processCode',
							width : 130
						}, {
							text : XipLang.xwf_lang_process_name,
							dataIndex : 'processName',
							width : 180
						} ],
						height : 200,
						width : 400,
						listeners : {
							'rowdblclick' : choose
						}

					});

					var t_window = new Ext.Window({
						width : 440,
						height : 400,
						layout : 'fit',
						buttonAlign : 'center',
						items : [ grid ],
						modal : true,
						closeAction : 'close',
						title : XipLang.xwf_lang_one_choose,
						buttons : [ {
							text : XipLang.xwf_lang_btn_confirm,
							handler : choose
						}, {
							text : XipLang.xwf_lang_btn_cancel,
							handler : function() {
								t_window.close();
							}
						} ]
					});
					Ext.Msg.hide();
					t_window.show();
				}
			},
			failure : function(res, opts) {
				Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_request_error);
			}
		});
	},

	/**
	 * 按实例code重新启动流程
	 * 
	 * @param instanceCode
	 *            流程实例Code return 返回参数，代表流程实例编码
	 * 
	 * 返回XML串 flag:0 正确，1 错误, 错误时msg为错误信息 <result> <flag></flag> <msg></msg>
	 * </result>
	 * 
	 */
	restartInstance : function(instanceCode, processId, callback) {
		Ext.Msg.wait(XipLang.xwf_lang_pro_restart);
		var url = XipWfPrivate.getContextPath()
				+ "/workflowUtilAction.do?method=restartInstance";
		var params = {
			'instanceCode' : instanceCode,
			'processId' : processId
		};
		XipWfPrivate.sendAjaxRequest(url, params, callback);
	},

	/**
	 * 重启并提交
	 * 
	 * @param instanceCode
	 *            实例编码
	 * @param processId
	 *            流程id
	 * @param params
	 * @param callback
	 */
	restartInstanceSubmit : function(instanceCode, processId, params, callback) {
		XipWfPrivate.restartInstance(instanceCode, processId, function(obj) {
			if (obj.flag != 0) {
				Ext.Msg.alert(XipLang.xwf_lang_notice, obj.msg, function() {
					callback(obj);
				});
				return;
			}
			// 重启成功，并提交
			XipWf.submitInstance(instanceCode, params, callback);
		});
	},

	/**
	 * 撤回流程
	 * 
	 * @param taskId
	 * @param callback
	 */
	doCancel : function(taskId, callback) {
		// 等待框
		var msg = Ext.MessageBox.show({
			title :XipLang.xwf_lang_wait_tip,
			msg : XipLang.xwf_lang_submit_request,
			width : 240,
			wait : true,
			progress : true,
			closable : false
		});

		// 提交请求
		Ext.Ajax.request({
			url : XipWfPrivate.getContextPath()
					+ '/workflowUtilAction.do?method=revokeProcess4Task',
			params : {
				'taskId' : taskId
			},
			method : 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);

				if (response == 1) {
					Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
				} else {
					try {
						callback();
					} catch (e) {

					}
					XipWfPrivate.closeTaskWin();
				}

				/***************************************************************
				 * // 提交成功 Ext.Msg.alert("提示", response.msg, function() { //
				 * 关闭父窗口 //window.parent.close(); XipWfPrivate.closeTaskWin(); //
				 * 执行回调函数 try { callback(); } catch (e) {} }, this);
				 **************************************************************/
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
			}
		});
	},

	/**
	 * 征询
	 * 
	 * @param taskId
	 *            任务id
	 * @param comment
	 * @param callback
	 */
	doConsult : function(taskId, comment, callback) {
		XipWfPrivate.chooseAllUsers(taskId,
				XipWfPrivate.WorkFlowConstants.TASK_BTN_CONSULT, comment,
				callback);
	},

	/**
	 * 委派
	 * 
	 * @param taskId
	 * @param comment
	 * @param callback
	 */
	doDelegate : function(taskId, comment, callback) {
		XipWfPrivate.chooseAllUsers(taskId,
				XipWfPrivate.WorkFlowConstants.TASK_BTN_DELEGATE, comment,
				callback);
	},

	/**
	 * 征询反馈
	 * 
	 * @param {}
	 *            taskId
	 * @param {}
	 *            comment
	 * @param {}
	 *            callback
	 * @return {Boolean}
	 */
	closeConsult : function(taskId, comment, callback) {
		if (comment == null || comment == "" || comment == "undefined") {
			Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_consultation);
			return false;
		}

		// 等待框
		var msg = Ext.MessageBox.show({
			title : XipLang.xwf_lang_wait_tip,
			msg : XipLang.xwf_lang_submit_request,
			width : 240,
			wait : true,
			progress : true,
			closable : false
		});

		// 提交请求
		Ext.Ajax.request({
			url : XipWfPrivate.getContextPath()
					+ '/workflowUtilAction.do?method=closeConsultTask',
			params : {
				'taskId' : taskId,
				'comment' : comment
			},
			method : 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);

				if (response.flag == 1) {
					Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
				} else {
					XipWfPrivate.closeTaskWin();
					try {
						callback();
					} catch (e) {
					}
				}

				/***************************************************************
				 * Ext.Msg.alert("提示", response.msg, function() { // 关闭父窗口
				 * //window.parent.close(); XipWfPrivate.closeTaskWin(); //
				 * 执行回调函数 try { callback(); } catch (e) {} }, this);
				 **************************************************************/
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
			}
		});
	},

	/**
	 * 撤回征询
	 * 
	 * @param {}
	 *            taskId
	 * @param {}
	 *            comment
	 * @param {}
	 *            callback
	 */
	revokeConsult : function(taskId, comment, callback) {
		// 等待框
		var msg = Ext.MessageBox.show({
			title : XipLang.xwf_lang_wait_tip,
			msg : XipLang.xwf_lang_submit_request,
			width : 240,
			wait : true,
			progress : true,
			closable : false
		});

		// 提交请求
		Ext.Ajax.request({
			url : XipWfPrivate.getContextPath()
					+ '/workflowUtilAction.do?method=revokeConsultTask',
			params : {
				'taskId' : taskId,
				'comment' : comment
			},
			method : 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);

				if (response.flag == 1) {
					Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
				} else {
					XipWfPrivate.closeTaskWin();
					try {
						callback();
					} catch (e) {
					}
				}

				/*
				 * Ext.Msg.alert("提示", response.msg, function() { // 关闭父窗口
				 * //window.parent.close(); XipWfPrivate.closeTaskWin(); //
				 * 执行回调函数 try { callback(); } catch (e) {} }, this);
				 */
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
			}
		});
	},

	/**
	 * 回退
	 * 
	 * @param {}
	 *            taskId
	 * @param {}
	 *            comment
	 * @param {}
	 *            callback
	 * @return {Boolean}
	 */
	doBack : function(taskId, comment, callback) {
		if (comment == null || comment == '') {
			Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_back_comment);
			return;
		}

		// 取得回退节点信息
		var respActArray = XipWfPrivate.getGlobalData(XipWfPrivate
				.getContextPath()
				+ '/workflowUtilAction.do?method=getBackActivityList', taskId);
		if (respActArray.flag == 0) {
			var acts = respActArray.data;
			// 取得回退意见
			// 执行回退处理
			XipWfPrivate.chooseBackActivity(acts, taskId, comment, callback);
		} else {
			Ext.Msg.alert(XipLang.xwf_lang_notice, respActArray.msg);
			return false;
		}
	},

	/**
	 * 驳回处理
	 * 
	 * @param {}
	 *            taskId
	 * @param {}
	 *            comment
	 * @param {}
	 *            callback
	 * @return {Boolean}
	 */
	doReject : function(taskId, comment, callback) {
		if (comment == null || comment == "" || comment == "undefined") {
			Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_reject_comment);
			return false;
		}
		// 等待框
		var msg = Ext.MessageBox.show({
			title : XipLang.xwf_lang_wait_tip,
			msg : XipLang.xwf_lang_submit_request,
			width : 240,
			wait : true,
			progress : true,
			closable : false
		});

		// 提交请求
		Ext.Ajax.request({
			url : XipWfPrivate.getContextPath()
					+ '/workflowUtilAction.do?method=rejectProcess',
			params : {
				'taskId' : taskId,
				'comment' : comment
			},
			method : 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);

				if (response.flag == 1) {
					Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
				} else {
					XipWfPrivate.closeTaskWin();
					try {
						callback();
					} catch (e) {
					}
				}

				/*
				 * Ext.Msg.alert("提示", response.msg, function() { // 关闭父窗口
				 * //window.parent.close(); XipWfPrivate.closeTaskWin(); //
				 * 执行回调函数 try { callback(); } catch (e) {} }, this);
				 */
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
			}
		});
	},

	/**
	 * 关闭抄送待办
	 * 
	 * @param {}
	 *            contextPath
	 * @param {}
	 *            taskId
	 * @param {}
	 *            callback
	 */
	closeCopyTo : function(taskId, callback) {
		// 等待框
		var msg = Ext.MessageBox.show({
			title : XipLang.xwf_lang_wait_tip,
			msg : XipLang.xwf_lang_submit_request,
			width : 240,
			wait : true,
			progress : true,
			closable : false
		});

		// 提交请求
		Ext.Ajax.request({
			url : XipWfPrivate.getContextPath()
					+ '/workflowUtilAction.do?method=closeCopyToTask',
			params : {
				'taskId' : taskId
			},
			method : 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);

				if (response.flag == 1) {
					Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
				} else {
					XipWfPrivate.closeTaskWin();
					try {
						callback();
					} catch (e) {
					}
				}

				/*
				 * Ext.Msg.alert("提示", response.msg, function() { // 关闭父窗口
				 * //window.parent.close(); XipWfPrivate.closeTaskWin(); //
				 * 执行回调函数 try { callback(); } catch (e) {} }, this);
				 */
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
			}
		});
	},

	/**
	 * 完成待办
	 * 
	 * @param {}
	 *            taskId
	 * @param {}
	 *            lineCode
	 * @param {}
	 *            comment
	 * @param {}
	 *            callback
	 */
	completeTask : function(taskId, lineCode, comment, callback) {
		Ext.Msg.wait(XipLang.xwf_lang_complete_task);
		var url = XipWfPrivate.getContextPath()
				+ "/workflowUtilAction.do?method=completeWorkItem";
		var params = {
			'taskId' : taskId,
			'lineCode' : lineCode,
			'comment' : comment
		};

		XipWfPrivate.sendAjaxRequest(url, params,
				function(returnJson) {
					if (returnJson.flag == 0) {
						var str = {
							flag : 0,
							taskId : taskId
						};
						// Ext.Msg.alert(XipLang.xwf_lang_notice, '待办处理成功!', function() {
						if (callback) {
							callback();
						}
						XipWfPrivate.closeTaskWin();
						// });
					} else if (returnJson.flag == 1) {
						var str = {
							flag : 1,
							msg : returnJson.msg
						};
						Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_fail_task + returnJson.msg,
								function() {
									if (callback) {
										callback();
									}
								});
					} else {

						XipWfPrivate.chooseUsers(returnJson.data,
								returnJson.multiselect, params, 'commitTask',
								callback);

					}
				});
	},

	/**
	 * 征询处理
	 * 
	 * @param taskId
	 * @param userId
	 * @param comment
	 * @param callback
	 * @returns {Boolean}
	 */
	complateConsult : function(taskId, userId, comment, callback) {
		if (comment == null || comment == "" || comment == "undefined") {
			Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_consultation);
			return false;
		}

		// 等待框
		var msg = Ext.MessageBox.show({
			title : XipLang.xwf_lang_wait_tip,
			msg : XipLang.xwf_lang_submit_request,
			width : 240,
			wait : true,
			progress : true,
			closable : false
		});

		// 提交请求
		Ext.Ajax.request({
			url : XipWfPrivate.getContextPath()
					+ '/workflowUtilAction.do?method=doConsult',
			params : {
				'taskId' : taskId,
				'userId' : userId,
				'comment' : comment
			},
			method : 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);

				if (response.flag == 1) {
					Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
				} else {
					XipWfPrivate.closeTaskWin();
					try {
						callback();
					} catch (e) {
					}
				}

				/***************************************************************
				 * // 提交成功 Ext.Msg.alert("提示", response.msg, function() { //
				 * 关闭父窗口 //window.parent.close(); XipWfPrivate.closeTaskWin(); //
				 * 执行回调函数 try { callback(); } catch (e) {} }, this);
				 **************************************************************/
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
			}
		});
	},

	/**
	 * 委派处理
	 * 
	 * @param taskId
	 * @param userId
	 * @param comment
	 * @param callback
	 * @returns {Boolean}
	 */
	complateDelegate : function(taskId, userId, comment, callback) {
		if (comment == null || comment == "" || comment == "undefined") {
			Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_note_comment);
			return false;
		}
		// 等待框
		var msg = Ext.MessageBox.show({
			title : XipLang.xwf_lang_wait_tip,
			msg : XipLang.xwf_lang_submit_request,
			width : 240,
			wait : true,
			progress : true,
			closable : false
		});

		// 提交请求
		Ext.Ajax.request({
			url : XipWfPrivate.getContextPath()
					+ '/workflowUtilAction.do?method=doDelegate',
			params : {
				'taskId' : taskId,
				'userId' : userId,
				'comment' : comment
			},
			method : 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);

				if (response.flag == 1) {
					Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
				} else {
					XipWfPrivate.closeTaskWin();
					try {
						callback();
					} catch (e) {
					}
				}

				/***************************************************************
				 * // 提交成功 Ext.Msg.alert("提示", response.msg, function() { //
				 * 关闭父窗口 //window.parent.close(); XipWfPrivate.closeTaskWin(); //
				 * 执行回调函数 try { callback(); } catch (e) {} }, this);
				 **************************************************************/
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
			}
		});
	},

	/**
	 * 回退处理
	 * 
	 * @param {}
	 *            taskId
	 * @param {}
	 *            comment
	 * @param {}
	 *            backToActivityId
	 * @param {}
	 *            callback
	 * @return {Boolean}
	 */
	complateBack : function(taskId, comment, backToActivityId, callback) {
		if (comment == null || comment == "" || comment == "undefined") {
			Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_back_comment);
			return false;
		}
		// 等待框
		var msg = Ext.MessageBox.show({
			title : XipLang.xwf_lang_wait_tip,
			msg : XipLang.xwf_lang_submit_request,
			width : 240,
			wait : true,
			progress : true,
			closable : false
		});

		// 提交请求
		Ext.Ajax.request({
			url : XipWfPrivate.getContextPath()
					+ '/workflowUtilAction.do?method=doBack',
			params : {
				'taskId' : taskId,
				'backToActivityId' : backToActivityId,
				'comment' : comment
			},
			method : 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);

				if (response.flag == 1) {
					Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
				} else {
					XipWfPrivate.closeTaskWin();
					try {
						callback();
					} catch (e) {
					}
				}

				/***************************************************************
				 * Ext.Msg.alert("提示", response.msg, function() { // 关闭父窗口
				 * //window.parent.close(); XipWfPrivate.closeTaskWin(); //
				 * 执行回调函数 try { callback(); } catch (e) {} }, this);
				 **************************************************************/
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
			}
		});
	},

	/**
	 * 根据任务id获取按钮
	 * 
	 * @param taskId
	 * @returns {Array}
	 */
	getButtonsByTaskId : function(taskId) {
		var respArray = [];
		Ext.Ajax.request({
			url : XipWfPrivate.getContextPath()
					+ '/workflowUtilAction.do?method=getButtonsByTaskId',
			params : {
				'taskId' : taskId
			},
			method : 'post',
			timeout : 3600000,
			async : false,
			success : function(response, options) {
				respArray = Ext.JSON.decode(response.responseText);
			},
			failure : function(reponse, options) {
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
			}
		});
		return respArray;
	},

	/**
	 * 选择征询人或委派人
	 */
	chooseAllUsers : function(taskId, buttonCode, comment, callback) {
		if (comment == null || comment == "" || comment == "undefined") {
			if (buttonCode == 'btnConsult') { // 征询
				Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_consultation);

			} else { // 委派
				Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_appointer);
			}
			return false;
		}

		Ext.define('User', {
			extend : 'Ext.data.Model',
			fields : [ {
				name : 'userId',
				type : 'string'
			}, {
				name : 'userName',
				type : 'string'
			}, {
				name : 'empCode',
				type : 'string'
			}, {
				name : 'empName',
				type : 'string'
			}, {
				name : 'orgName',
				type : 'string'
			} ]
		});

		Ext.define('User', {
			extend : 'Ext.data.Model',
			fields : [ {
				name : 'userId',
				mapping : 'userId'
			}, {
				name : 'userName',
				mapping : 'userName'
			}, {
				name : 'empCode',
				mapping : 'empCode'
			}, {
				name : 'empName',
				mapping : 'empName'
			}, {
				name : 'orgName',
				mapping : 'orgName'
			} ]
		});

		var myStore = Ext
				.create(
						'Ext.data.Store',
						{
							model : 'User',
							pageSize : 10,
							proxy : {
								type : 'ajax',
								url : XipWfPrivate.getContextPath()
										+ '/workflowUtilAction.do?method=getUsersForConsultOrDelegate4Ext',
								reader : {
									type : 'json',
									root : 'dataList',
									totalProperty : 'totalProperty'
								}
							},
							listeners : {
								'beforeload' : function() {
									var params = {
										'taskId' : taskId,
										'condition' : condition.getValue()
									};
									Ext
											.apply(myStore.proxy.extraParams,
													params);
								}
							}
						});

		var condition = Ext.create('Ext.form.field.Text', {
			width : 250,
			inputType : 'text',
			labelSeparator : ':',
			fieldLabel : XipLang.xwf_lang_name,
			labelWidth : 40,
			labelAlign : 'right',
			listeners : {
				'specialkey' : function(field, e) {
					if (e.getKey() == e.ENTER) {
						
						if(Ext.isEmpty(condition.getValue())){
							Wb.toast(XipLang.xwf_lang_condition_not_null);
							return;
						}
						
						myStore.load({
							params : {
								'start' : 0,
								'limit' : 10
							}
						});
					}
				}
			}
		});
		var mytbar = Ext.create('Ext.toolbar.Toolbar', {
			items : [ condition,
			          {
				        xtype:'button',
				        text:XipLang.xwf_lang_query,
				        x:5,
				        handler : function() {
				        	if(Ext.isEmpty(condition.getValue())){
								Wb.toast(XipLang.xwf_lang_condition_not_null);
								return;
							}
				        	
				        	myStore.load({
								params : {
									'start' : 0,
									'limit' : 10
								}
							});
						}
			          },{
			        	  xtype:'button',
			        	  x:10,
					      text:XipLang.xwf_lang_reset,
					      handler : function() {
					         condition.setValue('');
					         myStore.removeAll();
					      }
			          }
			          ]
		});

		var myGrid = Ext.create('Ext.grid.Panel', {
			store : myStore,
			selModel : {
				showHeaderCheckbox : false,
				selType : 'checkboxmodel',
				mode : 'SINGLE'
			},
			tbar : mytbar,
			columns : [ new Ext.grid.RowNumberer({
				header : XipLang.xwf_lang_number,
				width : 35
			}), {
				header : '用户ID',
				hidden : true,
				dataIndex : 'userId'
			}, {
				header : XipLang.xwf_lang_user_name,
				width : 120,
				dataIndex : 'userName'
			}, {
				header : XipLang.xwf_lang_emp_code,
				width : 120,
				dataIndex : 'empCode'
			}, {
				header : XipLang.xwf_lang_emp_name,
				width : 120,
				dataIndex : 'empName'
			}, {
				header : XipLang.xwf_lang_org_name,
				width : 290,
				dataIndex : 'orgName'
			} ],
			// width: 400,
			// height: 125,
			loadMask : {
				'msg' : XipLang.xwf_lang_data_loading
			},
			listeners : {
				'render' : function() {
					/*myStore.load({
						callback : function() {
							// 选中第一条记录
							myGrid.getSelectionModel().select(myStore.first());
						}
					});*/
				}
			}
		/*
		 * , dockedItems: [{ xtype: 'pagingtoolbar', store: myStore, //
		 * GridPanel使用相同的数据源 dock: 'bottom', displayInfo: true }]
		 */
		});

		var tttile = (buttonCode == "btnConsult" ?XipLang.xwf_lang_asker:XipLang.xwf_lang_signer);

		var btnConfirm = Ext.create('Ext.Button', {
			text : XipLang.xwf_lang_selecting,
			handler : function() {
				var record_array = myGrid.getSelectionModel().getSelection();
				if (record_array.length == 0) {
					Ext.Msg.alert(XipLang.xwf_lang_notice, tttile);
					return false;
				} else {
					var userId = "";
					Ext.each(record_array, function(r) {
						userId = r.get('userId');
					});

					myWin.hide();

					// 选择人后执行处理
					if (buttonCode == 'btnConsult') { // 征询
						XipWfPrivate.complateConsult(taskId, userId, comment,
								callback);
					} else if (buttonCode == 'btnDelegate') { // 委派
						XipWfPrivate.complateDelegate(taskId, userId, comment,
								callback);
					} else {

					}
				}
			}
		});

		var btnCancel = Ext.create('Ext.Button', {
			text : XipLang.xwf_lang_btn_cancel,
			handler : function() {
				myWin.hide();
			}
		});

		var myWin = Ext.create('Ext.window.Window', {
			title : '<div style="padding:7 "><span style="color:blue;">'
					+ tttile + '</span></div>',
			width : 750,
			height : 400,
			modal : true,
			layout : 'fit',
			// autoScroll: true,
			// constrain: true,
			// shadow: false,
			onEsc : function() {
				myWin.hide();
			},
			items : [ myGrid ],
			buttonAlign : 'right',
			buttons : [ btnConfirm, btnCancel ]

		});

		myWin.show();
	},

	/**
	 * 选择流程回退至节点信息
	 * 
	 * @param records
	 * @param taskId
	 * @param comment
	 * @param callback
	 * @returns {Boolean}
	 */
	chooseBackActivity : function(records, taskId, comment, callback) {
		if (comment == null || comment == "" || comment == "undefined") {
			Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_back_comment);
			return false;
		}

		var store = Ext.create('Ext.data.JsonStore', {
			data : records,
			fields : [ 'activityId', 'activityCode', 'activityName' ]
		});

		var grid = Ext.create('Ext.grid.Panel', {
			store : store,
			selModel : {
				showHeaderCheckbox : false,
				selType : 'checkboxmodel',
				mode : 'SINGLE'
			},
			columns : [ new Ext.grid.RowNumberer({
				header : XipLang.xwf_lang_number,
				width : 35
			}), {
				header : '节点ID',
				hidden : true,
				dataIndex : 'activityId'
			}, {
				header : XipLang.xwf_lang_node_code,
				width : 200,
				dataIndex : 'activityCode'
			}, {
				header : XipLang.xwf_lang_node_name,
				// width: 300,
				flex : 1,
				dataIndex : 'activityName'
			} ],
			// width: '100%',
			// height: '100%',
			loadMask : {
				'msg' : XipLang.xwf_lang_data_loading
			}
		/*
		 * , dockedItems: [{ xtype: 'pagingtoolbar', store: store, //
		 * GridPanel使用相同的数据源 dock: 'bottom', displayInfo: true }]
		 */
		});

		var btnConfirm = Ext.create('Ext.Button', {
			text :XipLang.xwf_lang_selecting,
			handler : function() {
				var record_array = grid.getSelectionModel().getSelection();
				if (record_array.length == 0) {
					Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_back_node);
					return false;
				} else {
					var backToActivityId = "";
					Ext.each(record_array, function(r) {
						backToActivityId = r.get('activityId');
					});

					win.hide();

					// 执行回退
					XipWfPrivate.complateBack(taskId, comment,
							backToActivityId, callback);
				}
			}
		});

		var btnCancel = Ext.create('Ext.Button', {
			text : XipLang.xwf_lang_btn_cancel,
			handler : function() {
				win.hide();
			}
		});

		var win = Ext
				.create(
						'Ext.window.Window',
						{
							title : '<div style="padding:7 "><span style="color:blue;">'+XipLang.xwf_lang_back_node+'</span></div>',
							width : 600,
							height : 400,
							modal : true,
							layout : 'fit',
							// autoScroll: true,
							// constrain: true,
							// shadow: false,
							items : [ grid ],
							buttonAlign : 'right',
							buttons : [ btnConfirm, btnCancel ]
						});

		win.show();
	},

	/**
	 * 发送同步请求
	 * 
	 * @param url
	 * @param taskId
	 * @returns {Array}
	 */
	getGlobalData : function(url, taskId) {
		var respArray = [];
		Ext.Ajax.request({
			url : url,
			params : {
				'taskId' : taskId
			},
			method : 'post',
			timeout : 3600000,
			async : false,
			success : function(response, options) {
				respArray = Ext.JSON.decode(response.responseText);
			},
			failure : function(reponse, options) {
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
			}
		});
		return respArray;
	},

	/**
	 * 根据流程编码查找流程ID
	 * 
	 * @param processCode
	 * @returns
	 */
	getProcessIdByCode : function(processCode) {
		var procId = '';
		var flag = '';

		// 提交请求查找；流程ID
		Ext.Ajax.request({
			url : XipWfPrivate.getContextPath()
					+ '/workflowUtilAction.do?method=getProcIdByCode',
			params : {
				'processCode' : processCode
			},
			method : 'post',
			timeout : 3600000,
			async : false,
			success : function(response, options) {
				var response = Ext.JSON.decode(response.responseText);
				if (response.flag == "0") {
					flag = 0;
					procId = response.msg;
				} else {
					flag = 1;
					Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
				}
			},
			failure : function(reponse, options) {
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
				flag = 1;
			}
		});

		return {
			flag : flag,
			processId : procId
		};
	},

	/**
	 * 选人
	 * 
	 * @param records
	 *            人员数据
	 * @param multiselect
	 *            是否多选
	 * @param params
	 *            参数
	 * @param type
	 *            submit或者是commitTask
	 */
	chooseUsers : function(records, multiselect, params, type, callback) {
		// 取得节点名称
		var _actName = '';

		if (records.length > 0) {
			_actName = '<font color=\"red\">【' + records[0].actName
					+ '】</font>';
		}

		// 判断选择框
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			// showHeaderCheckbox : multiselect == 'Y' ? true:false,
			// selType : 'checkboxmodel',
			// mode : multiselect=='Y' ? 'MULTI':'SINGLE'
			showHeaderCheckbox : true,
			selType : 'checkboxmodel',
			mode : 'MULTI'
		});

		// 定义查询框
		var selUser = Ext.create('Ext.form.field.Text', {
			id : 'selUserId',
			width : 250,
			inputType : 'text',
			labelSeparator : ':',
			fieldLabel : XipLang.xwf_lang_user_name,
			labelWidth : 80,
			labelAlign : 'right',
			listeners : {
				'specialkey' : function(field, e) {
					if (e.getKey() == e.ENTER) {
						var value = selUser.getValue();
						grid.getStore().filterBy(function(record, id) {
							var text = record.get('empName');
							return (text.indexOf(value) != -1);
						});
					}
				}
			}
		});

		var mytbar = Ext.create('Ext.toolbar.Toolbar', {
			items : [ selUser ]
		});

		// 选择后处理函数
		function choose() {
			var records = grid.getSelectionModel().getSelection();
			if (records.length > 0) {
				var userIds = '';
				var uesrNames = '';

				for (var i = 0; i < records.length; i++) {
					var record = records[i];
					userIds += "" + record.get('userId') + ",";
					uesrNames += record.get('empName') + "("
							+ record.get('userName') + ")" + ",";
				}

				userIds = userIds.substring(0, userIds.length - 1);
				uesrNames = uesrNames.substring(0, uesrNames.length - 1);

				Ext.MessageBox
						.confirm(
								XipLang.xwf_lang_confirm_auditor,
								XipLang.xwf_lang_auditor_choose+":【" + uesrNames + "】,"+XipLang.xwf_lang_tip_confirm,
								function(e) {
									if (e == "yes") {
										t_window.close();

										if (type == 'submit') {
											var url = XipWfPrivate
													.getContextPath()
													+ "/workflowUtilAction.do?method=submitProcessOld";

											var json = {
												"instanceCode" : params.p_instanceCode,
												"entityAttJson" : params,
												"userIds" : userIds
											};
											Ext.Msg.wait(XipLang.xwf_lang_ins_submit);

											var jsonData = Ext.JSON
													.encode(json);
											// 提交请求
											Ext.Ajax
													.request({
														url : url,
														method : 'POST',
														sync : '',
														scope : this,
														timeout : 300000,
														headers : {
															'Content-Type' : 'application/json'
														},
														jsonData : jsonData,
														success : function(res,
																opts) {
															Ext.Msg.hide();
															var returnJson = Ext
																	.decode(res.responseText);

															if (returnJson.flag == 0) {
																var str = {
																	flag : 0,
																	instanceCode : params.p_instanceCode
																};
																callback(str);
																XipWfPrivate
																		.closeTaskWin();
															} else if (returnJson.flag == 1) {
																var str = {
																	flag : 1,
																	msg : returnJson.msg
																};
																callback(str);
															}
														},
														failure : function(res,
																opts) {
															Ext.Msg
																	.alert(
																			XipLang.xwf_lang_notice,
																			XipLang.xwf_lang_request_error);
														}
													});
										} else if (type == 'commitTask') {
											var subParams = params;
											if (!subParams) {
												subParams = {};
											}
											;
											var url = XipWfPrivate
													.getContextPath()
													+ "/workflowUtilAction.do?method=completeWorkItem";
											subParams.userIds = userIds;
											Ext.Msg.wait(XipLang.xwf_lang_complete_task);
											XipWfPrivate
													.sendAjaxRequest(
															url,
															subParams,
															function(returnJson) {
																Ext.Msg.hide();
																if (returnJson.flag == 0) {
																	var str = {
																		flag : 0,
																		taskId : subParams.taskId
																	};

																	XipWfPrivate
																			.closeTaskWin();
																	if (callback) {
																		callback(str);
																	}

																	/***********
																	 * Ext.Msg.alert('提示',
																	 * '待办处理成功',
																	 * function() {
																	 * XipWfPrivate.closeTaskWin();
																	 * if
																	 * (callback) {
																	 * callback(); }
																	 * });
																	 **********/
																} else if (returnJson.flag == 1) {
																	var str = {
																		flag : 1,
																		msg : returnJson.msg
																	};
																	Ext.Msg
																			.alert(
																					XipLang.xwf_lang_notice,
																					XipLang.xwf_lang_fail_task
																							+ returnJson.msg,
																					function() {
																						if (callback) {
																							callback(str);
																						}
																					});
																}
															});
										} else {
											XipWfPrivate.doForward(
													params.taskId, userIds,
													params.insCode,
													params.bizId);
										}

									}
								});

			} else {
				Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_auditor_choose);
			}
		}

		// 定义Grid
		var grid = new Ext.grid.GridPanel({
			tbar : mytbar,
			selModel : selModel,
			store : {
				data : records,
				fields : [ 'userId', 'actName', 'userName', 'empName',
						'orgName' ]
			},
			columns : [ new Ext.grid.RowNumberer(), {
				text : 'ID',
				dataIndex : 'userId',
				hidden : true
			}, {
				text : XipLang.xwf_lang_node_name,
				dataIndex : 'actName',
				hidden : true,
				width : 200
			}, {
				text : XipLang.xwf_lang_user_name,
				dataIndex : 'userName',
				width : 120
			}, {
				text : XipLang.xwf_lang_emp_name,
				dataIndex : 'empName',
				width : 100
			}, {
				text : XipLang.xwf_lang_org_name,
				dataIndex : 'orgName',
				width : 200
			} ],
			listeners : {
				'rowdblclick' : choose
			}
		});

		var t_window = new Ext.Window({
			width : 700,
			height : 400,
			layout : 'fit',
			items : [ grid ],
			buttonAlign : 'center',
			modal : true,
			closeAction : 'close',
			title :XipLang.xwf_lang_auditor_choose,
			buttons : [ {
				text : XipLang.xwf_lang_btn_confirm,
				handler : choose
			}, {
				text : XipLang.xwf_lang_btn_cancel,
				handler : function() {
					t_window.close();
				}
			} ]
		});

		t_window.show();
		// 选中第一行记录
		selModel.select(grid.getStore().first());
	},

	/**
	 * 转发
	 * 
	 * @param taskId
	 *            任务id
	 * @param insCode
	 *            实例编码
	 * @param bizId
	 *            业务id
	 */
	forward : function(taskId, insCode, bizId) {
		// 等待框
		var msg = Ext.MessageBox.show({
			title : XipLang.xwf_lang_wait_tip,
			msg : XipLang.xwf_lang_transfer_query,
			width : 240,
			wait : true,
			progress : true,
			closable : false
		});

		// 提交请求
		Ext.Ajax
				.request({
					url : XipWfPrivate.getContextPath()
							+ '/workItemAction.do?method=getForwardExecutors',
					params : {
						'taskId' : taskId
					},
					method : 'post',
					timeout : 3600000,
					success : function(response, options) {
						msg.hide();
						var response = Ext.JSON.decode(response.responseText);
						if (response.flag == '0') { // 提交成功
							// TaskUtil.chooseApprover(response.data, true,
							// taskId, "",
							// XipWfPrivate.WorkFlowConstants.TASK_BTN_FORWARD,
							// insCode, bizId);
							var params = {
								taskId : taskId,
								btnCode : XipWfPrivate.WorkFlowConstants.TASK_BTN_FORWARD,
								insCode : insCode,
								bizId : bizId
							};
							XipWfPrivate
									.chooseUsers(
											response.data,
											true,
											params,
											XipWfPrivate.WorkFlowConstants.TASK_BTN_FORWARD,
											function() {
											});
						} else { // 提交失败
							Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
						}
					},
					failure : function(reponse, options) {
						msg.hide();
						var response = Ext.JSON.decode(response.responseText);
						Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
					}
				});
	},

	/**
	 * @param taskId
	 *            任务id
	 * @param userId
	 *            用户id
	 * @param insCode
	 *            实例编码
	 * @param bizId
	 *            业务id
	 */
	doForward : function(taskId, userId, insCode, bizId) {
		// 等待框
		var msg = Ext.MessageBox.show({
			title : XipLang.xwf_lang_wait_tip,
			msg : XipLang.xwf_lang_forwarding,
			width : 240,
			wait : true,
			progress : true,
			closable : false
		});

		// 提交请求
		Ext.Ajax.request({
			url : XipWfPrivate.getContextPath()
					+ '/workItemAction.do?method=doForward',
			params : {
				'taskId' : taskId,
				'userId' : userId

			},
			method : 'post',
			timeout : 3600000,
			success : function(response, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				if (response.flag == '0') { // 提交成功
					// 执行回调函数
					// Ext.Msg.alert("提示", response.msg);
					XipWfPrivate.afterHandlerEvent(
							XipWfPrivate.WorkFlowConstants.TASK_BTN_FORWARD,
							insCode, bizId);
					XipWfPrivate.closeTaskWin();
				} else { // 提交失败
					Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
				}
			},
			failure : function(reponse, options) {
				msg.hide();
				var response = Ext.JSON.decode(response.responseText);
				Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
			}
		});
	},

	/**
	 * 按钮点击前执行函数自定义
	 * 
	 * @param {}
	 *            buttonCode : 按钮编码
	 * @param {}
	 *            instanceCode : 实例编码
	 * @param {}
	 *            businessId : 业务ID
	 */
	beforeHandlerEventWithCallback : function(type, taskId, lineCode, insCode,
			bizId, callback) {
		if (type == "check") {
			var iframeObj = document
					.getElementById(XipWfPrivate.WorkFlowConstants.BIZ_PANEL_FRAME);

			if (iframeObj != null) {
				try {
					if (iframeObj.contentWindow.beforeHandlerWithCallback) {
						return true;
					}
				} catch (e) {
					return false;
				}
				return false;
			} else {
				return false;
			}
		} else {
			document
					.getElementById(XipWfPrivate.WorkFlowConstants.BIZ_PANEL_FRAME).contentWindow
					.beforeHandlerWithCallback(taskId, lineCode, insCode,
							callback, bizId);
		}
	},

	/**
	 * 按钮点击前执行函数
	 * 
	 * @param {}
	 *            buttonCode : 按钮编码
	 * @param {}
	 *            instanceCode : 实例编码
	 * @param {}
	 *            businessId : 业务ID
	 */
	beforeHandlerEvent : function(buttonCode, instanceCode, businessId) {
		var json = null;
		// 取得业务表单iframe元素
		var iframeObj = document
				.getElementById(XipWfPrivate.WorkFlowConstants.BIZ_PANEL_FRAME);
		if (iframeObj != null) {
			try {
				json = iframeObj.contentWindow.beforeHandler(buttonCode,
						instanceCode, businessId);
			} catch (ex) {
				json = null;
			}
		}
		return json;
	},

	/**
	 * 按钮处理完成后回调函数
	 * 
	 * @param {}
	 *            buttonCode : 按钮编码
	 * @param {}
	 *            businessId : 业务ID
	 * @param {}
	 *            instanceCode : 实例编码
	 */
	afterHandlerEvent : function(buttonCode, instanceCode, businessId) {
		// 取得业务表单iframe元素
		var iframeObj = document
				.getElementById(XipWfPrivate.WorkFlowConstants.BIZ_PANEL_FRAME);
		if (iframeObj != null) {
			try {
				iframeObj.contentWindow.afterHandler(buttonCode, instanceCode,
						businessId);
			} catch (ex) {
			}
		}
	},

	/**
	 * 关闭当前待办处理窗口
	 */
	closeTaskWin : function() {
		try {
			if (Ext.getCmp('w7_taskWFWindow')) {
				// 直接关闭W7创建的窗口
				Ext.getCmp('w7_taskWFWindow').close();
			} else {
				window.parent.Ext.getCmp(xz_ExtWind_soft).close();
			}
		} catch (e) {

		}
	}

};

document.write('<script src="' + XipWfPrivate.getContextPath()
		+ '/xip/js/xip.js" type="text/javascript" ></script>');