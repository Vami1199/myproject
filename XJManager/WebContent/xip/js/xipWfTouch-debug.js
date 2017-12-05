var XipWf = {
  /**
   * 根据Task ID为审批页面动态创建审批按钮。
   * 
   * @param taskNaviView 需要手工选人的时候，选择审批人的界面被推入的导航视图
   * @param bntContainer 审批按钮的容器
   * @param taskId 待办的ID
   * @param descObj 审批意见录入控件
   */
  createButtonsByTaskId: function(taskNaviView, bntContainer, taskId, descObj) {
    Ext.Ajax.request({
      url: 'workItemAction.do?method=getButtonsByTaskId',
      params: {
        taskId: taskId
      },
      method: 'POST',
      async: false,
      success: function(response, options) {
        var temp = response.responseText;
        var obj = Ext.JSON.decode(temp);
        if (obj.flag == '0') {
          var buttons = obj.data;
          bntContainer.removeAll();
          var buttonArray = new Array();
          for (var i = 0; i < buttons.length; i++) {
            var button = buttons[i];
            var id = button.id;
            var code = button.code;
            var name = button.name;
            var disable = button.disable;
            if (disable == 'N') {
              var btn = new Ext.Button({
                text: name
              });
              if (code == XipWfPrivate.xip_wf_consultCode) {
                // 征询
                btn.setHandler(function() {
                  XipWfPrivate.doConsult(
                    taskNaviView, taskId,
                    descObj.getValue());
                });
              } else if (code == XipWfPrivate.xip_wf_delegateCode) {
                // 委派
                btn.setHandler(function() {
                  XipWfPrivate.doDelegate(
                    taskNaviView, taskId,
                    descObj.getValue());
                });
              } else if (code == XipWfPrivate.xip_wf_goBackCode) {
                // 退回
                btn.setHandler(function() {
                  XipWfPrivate.doBack(
                    taskNaviView,
                    taskId,
                    descObj.getValue());
                });
              } else if (code == XipWfPrivate.xip_wf_consultCloseCode) {
                // 关闭征询
                btn.setHandler(function() {
                  XipWfPrivate.closeConsult(
                    taskNaviView, taskId,
                    descObj.getValue());
                });
              } else if (code == XipWfPrivate.xip_wf_consultRevokeCode) {
                // 撤销征询
                btn.setHandler(function() {
                  XipWfPrivate.revokeConsult(
                    taskNaviView, taskId,
                    descObj.getValue());
                });
              } else if (code == XipWfPrivate.xip_wf_cancelCode) {
                // 撤回
                btn.setHandler(function() {
                  XipWfPrivate.doCancle(taskId);
                });
              } else if (code == XipWfPrivate.xip_wf_copyToCode) {
                // 关闭抄送
                btn.setHandler(function() {
                  XipWfPrivate.closeCopyTo(
                    taskNaviView, taskId);
                });
              } else if (code == XipWfPrivate.xip_wf_rejectCode) {
                // 驳回
                btn.setHandler(function() {
                  XipWfPrivate.doReject(
                    taskNaviView,
                    taskId,
                    descObj.getValue());
                });
              } else {
                // 结束任务
                buttonArray.push(btn.getId() + ";" + code);
                btn.setHandler(function(code) {
                  var lineCode = '';
                  for (var j = 0; j < buttonArray.length; j++) {
                    var a = buttonArray[j].split(';');
                    if (a[0] == code.id) {
                      lineCode = a[1];
                      break;
                    }
                  }
                  XipWfPrivate.completeTask(
                    taskNaviView,
                    taskId,
                    descObj.getValue(),
                    lineCode);
                });
              }
              bntContainer.add(btn);
            }
          }
          var busFormUrl = "";
          Ext.Ajax.request({
            url: 'workflowUtilAction.do?method=getMobileFormUrlByTaskId',
            params: {
              'taskId': taskId
            },
            method: 'post',
            async: false,
            timeout: 3600000,
            success: function(response, options) {
              var resp = Ext.util.JSON.decode(response.responseText);
              if (resp.flag == '0') {
                busFormUrl = resp.formUrl;
              } else {
                busFormUrl = "";
              }
            },
            failure: function(reponse, options) {
              var resp = Ext.util.JSON.decode(response.responseText);
              busFormUrl = "";
            }
          });
          if (busFormUrl != "") {
            var busBtn = new Ext.Button({
              text:XipLang.xwf_lang_business_info
            });
            busBtn.setHandler(function() {
              var busContainer = new Ext.Container({
                title: XipLang.xwf_lang_business_info,
                layout: "fit",
                xtype: "container",
                html: '<iframe scrolling="auto" frameborder=0 width="100%" height="1000"  src="' + busFormUrl + '"></iframe>'
              });
              taskNaviView.push(busContainer);
            });
            bntContainer.add(busBtn);
          } else {
            var busBtn = new Ext.Button({
              text: XipLang.xwf_lang_business_info
            });
            busBtn.setHandler(function() {
              var busContainer = new Ext.Container({
                title: XipLang.xwf_lang_business_info,
                layout: "fit",
                xtype: "container",
                html: '<p>'+XipLang.xwf_lang_no_page+'</p>'
              });
              taskNaviView.push(busContainer);
            });
            bntContainer.add(busBtn);
          }
        }
      },
      failure: function(response, options) {
        Ext.Msg.alert(XipLang.xwf_lang_error, XipLang.xwf_lang_server_no_response);
      }
    });
  },
  /**
   * 根据流程Code创建流程实例
   * 
   * @param processCode 流程编码
   * @oaram callback 回调函数，实例创建成功返回{flag:0,instanceCode:'xxxx'}否则{flag:1,msg:'xxxx'}
   */
  createInstanceByProcess: function(processCode, callback) {
    Ext.Ajax.request({
      url: 'workflowUtilAction.do?method=createInstanceByProcessCode',
      params: {
        'processCode': processCode
      },
      method: 'post',
      async: false,
      timeout: 3600000,
      success: function(response, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        if (resp.flag == '0') {
          callback({
            "flag": 0,
            "instanceCode": resp.instanceCode
          });
        } else {
          callback({
            "flag": 1,
            "msg": resp.msg
          });
        }
      },
      failure: function(reponse, options) {
        callback({
          "flag": 1,
          "msg": XipLang.xwf_lang_request_error
        });
      }
    });
  },
  /**
   * 根据流程Code创建流程实例
   * 
   * @param taskNaviView 选择审批流程的界面被推入的导航视图
   * @param entityCode 实体编码
   * @parma entityAttrs 实体属性值Json字符串 "{attr1Name:'attr1Value',attr2Name:'attr2Value'}"
   * @oaram callBack 回调函数，实例创建成功返回{flag:0,instanceCode:'xxxx'}否则{flag:1,msg:'xxxx'}
   */
  createInstanceByEntity: function(taskNaviView, entityCode, entityAttrs,
    callBack) {
    XipWfPrivate.choosePorcessByEntity(taskNaviView, entityCode,
      entityAttrs,
      function(obj) {
        if (obj.flag == 0) {
          var processId = obj.processId;
          XipWfPrivate.createInstanceByProcessId(processId, callBack);
        } else {
          callBack(obj);
        }
      });

  },
  /**
   * 提交流程
   * 
   * @param taskNaviView 需要手工选人的时候，选择审批人的界面被推入的导航视图
   * @param instanceCode 流程实例编码
   * @param entityAttrs  实体属性值对Json串 "{attr1Name:'attr1Value',attr2Name:'attr2Value'}"
   * @param callBack 回调函数提交成功返回 {flag:0,instanceCode:'xxxx'} 否则返回{flag:1,msg:'xxxx'}
   */
  submitInstance: function(taskNaviView, instanceCode, entityAttrs, callBack) {
    Ext.Ajax.request({
      url: 'workflowUtilAction.do?method=submitProcess',
      params: {
        instanceCode: instanceCode,
        entityAttJson: entityAttrs
      },
      method: 'POST',
      async: false,
      success: function(response, options) {
        var resp = Ext.JSON.decode(response.responseText);
        if (resp.flag == '0') {
          callBack({
            "flag": 0,
            "instanceCode": instanceCode
          });
        } else if (resp.flag == '1') {
          callBack({
            "flag": 1,
            "msg": resp.msg
          });
        } else {
          // 手动选人
          XipWfPrivate.chooseApprover(taskNaviView, resp.multiselect, resp.actName, resp.data,
            function(obj) {
              Ext.Ajax.request({
                url: 'workflowUtilAction.do?method=submitProcess',
                params: {
                  instanceCode: instanceCode,
                  entityAttJson: entityAttrs,
                  userIds: obj.userIds
                },
                method: 'POST',
                async: false,
                success: function(response, options) {
                  var resp = Ext.JSON.decode(response.responseText);
                  if (resp.flag == '0') {
                    callBack({
                      "flag": 0,
                      "instanceCode": instanceCode
                    });
                  } else if (resp.flag == 1) {
                    callBack({
                      "flag": 1,
                      "msg": resp.msg
                    });
                  }
                },
                failure: function(response, options) {
                  callBack({
                    "flag": 1,
                    "msg": XipLang.xwf_lang_request_error
                  });
                }
              });
            });
        }
      },
      failure: function(response, options) {
        callBack({
          "flag": 1,
          "msg": XipLang.xwf_lang_request_error
        });
      }
    });
  },
  /**
   * 根据流程Id重启流程实例
   * 
   * @param instanceCode 流程实例编码
   * @param processId 流程Id，如果此参数为空则使用实例原来对应的流程
   * @param callBack 回调函数 重启流程实例成功返回{flag:0,msg:'xxxx'}否则返回{flag:1,msg:'xxxx'}
   */
  restartInstanceByProcess: function(instanceCode, processId, callBack) {
    Ext.Ajax.request({
      url: 'workflowUtilAction.do?method=restartInstance',
      params: {
        'instanceCode': instanceCode,
        'processId': processId
      },
      method: 'post',
      async: false,
      timeout: 3600000,
      success: function(response, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        callBack({
          flag: 0,
          msg: resp.msg
        });
      },
      failure: function(reponse, options) {
        callBack({
          "flag": 1,
          "msg": XipLang.xwf_lang_request_error
        });
      }
    });
  },
  /**
   * 根据实体编码重启流程实例
   * 
   * @param taskNaviView 选择流程的界面被推入的导航视图
   * @param instanceCode 流程实例编码
   * @param entityCode 流程实例编码
   * @param entityAttrs 实体属性值对Json串 "{attr1Name:'attr1Value',attr2Name:'attr2Value'}"
   * @param callBack 回调函数 重启流程实例成功返回{flag:0,msg:'xxxx'}否则返回{flag:1,msg:'xxxx'}
   */
  restartInstanceByEntity: function(taskNaviView, instanceCode, entityCode, entityAttrs, callBack) {
    XipWfPrivate.choosePorcessByEntity(taskNaviView, entityCode, entityAttrs, function(obj) {
      if (obj.flag == 0) {
        var processId = obj.processId;
        XipWf.restartInstanceByProcess(instanceCode, processId, callBack);
      } else {
        callBack(obj);
      }
    });
  },
  /**
   * 根据流程Id重启流程实例并提交
   * 
   * @param taskNaviView 需要手工选人的时候，选择审批人的界面被推入的导航视图
   * @param instanceCode 流程实例编码
   * @param processId 流程Id,如果此参数为空则使用实例原来对应的流程
   * @param entityAttrs 实体属性值对Json串如"{attr1Name:'attr1Value',attr2Name:'attr2Value'}"
   * @param callBack 回调函数，重启成功返回{flag:0,instanceCode:'xxxx'}否则{flag:1,msg:'xxxx'}
   */
  restartAndSubmitByProcess: function(taskNaviView, instanceCode, processId, entityAttrs, callBack) {
    Ext.Ajax.request({
      url: 'workflowUtilAction.do?method=restartInstance',
      params: {
        'instanceCode': instanceCode,
        'processId': processId
      },
      method: 'post',
      async: false,
      timeout: 3600000,
      success: function(response, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        if (resp.flag == '0') {
          XipWf.submitInstance(taskNaviView, instanceCode, entityAttrs, callBack);
        } else {
          callBack({
            "flag": 1,
            "msg": resp.msg
          });
        }
      },
      failure: function(reponse, options) {
        callBack({
          "flag": 1,
          "msg": XipLang.xwf_lang_request_error
        });
      }
    });
  },
  /**
   * 根据流程实体编码重启流程实例并提交
   * 
   * @param taskNaviView 需要手工选人的时候，选择审批人的界面被推入的导航视图
   * @param instanceCode 流程实例编码
   * @param entityCode 流程实体编码
   * @param entityAttrs 实体属性值对Json串如"{attr1Name:'attr1Value',attr2Name:'attr2Value'}"
   * @param callBack 回调函数，重启成功返回{flag:0,instanceCode:'xxxx'}否则{flag:1,msg:'xxxx'}
   */
  restartAndSubmitByEntity: function(taskNaviView, instanceCode, entityCode, entityAttrs, callBack) {
    XipWf.restartInstanceByEntity(taskNaviView, instanceCode, entityCode, entityAttrs, function(obj) {
      if (obj.flag == 0) {
        XipWf.submitInstance(taskNaviView, instanceCode, entityAttrs, callBack);
      } else {
        callBack(obj);
      }
    });
  },
  /**
   * 根据流程编码启动并提交流程
   * 
   * @param taskNaviView 需要手工选人的时候，选择审批人的界面被推入的导航视图
   * @param processCode 流程编码
   * @param entityAttrs 实体属性值对Json串 "{attr1Name:'attr1Value',attr2Name:'attr2Value'}"
   * @param callBack 回调函数，如果成功返回{flag:0,instanceCode:'xxxx'} 否则返回{flag:1,msg:'xxxx'}
   */
  startAndSubmitByProcess: function(taskNaviView, processCode, entityAttrs, callBack) {
    XipWf.createInstanceByProcess(processCode, function(obj) {
      if (obj.flag == 0) {
        var instanceCode = obj.instanceCode;
        XipWf.submitInstance(taskNaviView, instanceCode, entityAttrs, callBack);
      } else {
        callBack(obj);
      }
    });
  },
  /**
   * 根据实例编码启动并提交流程
   * 
   * @param taskNaviView 需要手工选人的时候，选择审批人的界面被推入的导航视图
   * @param entityCode 业务实体编码
   * @param entityAttrs 实体属性值对Json串 "{attr1Name:'attr1Value',attr2Name:'attr2Value'}"
   * @param callBack 回调函数如果成功返回{flag:0,instanceCode:'xxxx'} 否则返回{flag:1,msg:'xxxx'}
   */
  startAndSubmitByEntity: function(taskNaviView, entityCode, entityAttrs, callBack) {
    XipWf.createInstanceByEntity(taskNaviView, entityCode, entityAttrs, function(obj) {
      if (obj.flag == 0) {
        var instanceCode = obj.instanceCode;
        XipWf.submitInstance(taskNaviView, instanceCode, entityAttrs, callBack);
      } else {
        callBack(obj);
      }
    });
  },
  /**
   * 根据实例编码撤回流程实例
   * 
   * @param instanceCode 流程实例编码
   * @param callBack 回调函数如果成功返回{flag:0,msg:'xxxx'} 否则返回{flag:1,msg:'xxxx'}
   */
  revokeByInstance: function(instanceCode, callBack) {
    Ext.Ajax.request({
      url: 'workflowUtilAction.do?method=revokeByInsCode',
      params: {
        'instanceCode': instanceCode
      },
      method: 'post',
      async: false,
      timeout: 3600000,
      success: function(response, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        if (resp.flag == '0') {
          callBack({
            flag: 0,
            msg: resp.msg
          });
        } else {
          callBack({
            flag: 1,
            msg: resp.msg
          });
        }
      },
      failure: function(reponse, options) {
        callBack({
          "flag": 1,
          "msg": XipLang.xwf_lang_request_error
        });
      }
    });
  },
  /**
   * 设置流程实例实体属性
   *
   * @param instanceCode 流程实例编码
   * @param entityAttrs 实体属性值对Json串 "{attr1Name:'attr1Value',attr2Name:'attr2Value'}"
   * @param callBack 回调函数 如果设置实例属性成功，返回{flag:0,msg:'xxxx'} 否则{flag:1,msg:'xxxx'}
   */
  setInstanceEntityAttrValue: function(instanceCode, entityAttrs, callBack) {
    Ext.Ajax.request({
      url: 'workflowUtilAction.do?method=setInstanceEntityAttrValue',
      params: {
        'instanceCode': instanceCode,
        'entityAttrs': entityAttrs
      },
      method: 'post',
      async: false,
      timeout: 3600000,
      success: function(response, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        if (resp.flag == '0') {
          callBack({
            flag: 0,
            msg: resp.msg
          });
        } else {
          callBack({
            flag: 1,
            msg: resp.msg
          });
        }
      },
      failure: function(reponse, options) {
        callBack({
          "flag": 1,
          "msg": XipLang.xwf_lang_request_error
        });
      }
    });
  },
  /**
   * 审批历史记录查询
   * 
   * @param taskNaviView 审批历史记录容器将被推入到该导航条内显示
   * @param instanceCode 流程实例编码
   */
  showMonitorPage: function(taskNaviView, instanceCode) {
    Wb.run({
      url: 'm?xwl=xip/touch/wf/wfMonitor&insCode=' + instanceCode,
      success: function(scope) {
        Wb.each(scope, function(k, v) {
          if (v && (v.isViewport || v.initialConfig && v.initialConfig.isViewport)) {
            var newCard = Ext.create('Ext.Container',{
              xtype: 'container',
              layout: 'fit',
              title: XipLang.xwf_lang_audit_history
            });
            newCard.add(v);
            taskNaviView.push(newCard);
            return false;
          }
        });
      }
    });

  }
};
var XipWfPrivate = {
  xip_wf_consultCode: 'btnConsult', // 征询
  xip_wf_delegateCode: 'btnDelegate', // 委派
  xip_wf_goBackCode: 'btnBack', // 回退
  xip_wf_consultCloseCode: 'btnCloseConsult', // 征询反馈
  xip_wf_consultRevokeCode: 'btnRevokeConsult', // 撤销征询
  xip_wf_submitCode: 'btnSubmit', // 提交流程
  xip_wf_cancelCode: 'btnCancel', // 撤销流程
  xip_wf_copyToCode: 'btnCopyTo', // 关闭抄送
  xip_wf_rejectCode: 'btnReject', // 驳回流程
  /**
   * 选择要征询和委派的人员
   *
   *@param taskNaviView 选择人的容器将被推入到该导航条内显示
   *@param taskId 任务Id
   *@param btnCode 按钮编码
   *@param comment 征询或委派意见信息
   */
  chooseConsultOrDelegateUser: function(taskNaviView, taskId, btnCode, comment) {
    Ext.define('ConsultOrDelegateUser', {
      extend: 'Ext.data.Model',
      config: {
        fields: [{
          name: 'USERID',
          type: 'string'
        }, {
          name: 'USERNAME',
          type: 'string'
        }, {
          name: 'EMPCODE',
          type: 'string'
        }, {
          name: 'EMPNAME',
          type: 'string'
        }, {
          name: 'ORGNAME',
          type: 'string'
        }]
      }
    });
    var orgSql = "select wp.ORG_ID from xip_wf_processes wp,xip_wf_ins_task it where wp.process_id = it.process_id and it.task_id = '" + taskId + "'";
    orgSql = Xip.base64Encode(orgSql);
    var orgId = "";
    Ext.Ajax.request({
      url: 'platformAction.do?method=execQuery4Touch',
      params: {
        sql: orgSql
      },
      method: 'POST',
      async: false,
      success: function(response, options) {
        var resp = Ext.JSON.decode(response.responseText);
        if (resp.success == 'true') {
          orgId = resp.dataList[0].ORG_ID;
        } else {
          Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_audit_company);
          return;
        }
      },
      failure: function(response, options) {
        Ext.Msg.alert(XipLang.xwf_lang_error, XipLang.xwf_lang_server_no_response);
        return;
      }
    });
    var sql = "";
    if (orgId == "") {
      sql = "select pu.user_id USERID, " + "       pu.user_name USERNAME, " + "       pe.emp_code EMPCODE, " + "       pe.emp_name EMPNAME, " + "       po.org_name ORGNAME " + "  from xip_pub_users pu, xip_pub_emps pe " + "  left join xip_pub_emp_asg pea " + "    on pea.emp_id = pe.emp_id " + "   and pea.enabled = 'Y' " + "  left join xip_pub_orgs po " + "    on po.org_id = pea.org_id " + "   and po.enable_flag = 'Y' " + " where pu.emp_id = pe.emp_id and pe.emp_name like '%${empName}%'" + " group by pu.user_id, " + "          pu.user_name, " + "          pe.emp_code, " + "          pe.emp_name, " + "          po.org_name ";

    } else {
      sql = "select pu.user_id USERID, " + "       pu.user_name USERNAME, " + "       pe.emp_code EMPCODE, " + "       pe.emp_name EMPNAME, " + "       po.org_name ORGNAME " + "  from xip_pub_users pu, xip_pub_emps pe, " + "       xip_pub_emp_asg pea," + "       xip_pub_orgs po " + " where pu.emp_id = pe.emp_id and pe.emp_name like '%${empName}%'" + "   and pea.emp_id = pe.emp_id " + "   and po.org_id = pea.org_id " + "   and po.enable_flag = 'Y' " + "   and pea.enabled = 'Y' and pea.org_id='" + orgId + "' " + " group by pu.user_id, " + "          pu.user_name, " + "          pe.emp_code, " + "          pe.emp_name, " + "          po.org_name ";
    }
    sql = Xip.base64Encode(sql);
    var wfEmpQueryStore = Ext.create("Ext.data.Store", {
      model: "ConsultOrDelegateUser",
      pageSize: 4,
      clearOnPageLoad: false,
      proxy: {
        type: "ajax",
        url: 'platformAction.do?method=execQuery4Touch',
        startParam: 'start',
        limitParam: 'limit',
        reader: {
          type: "json",
          rootProperty: "dataList",
          totalProperty: "total"
        }
      },
      autoLoad: false
    });
    var chooseEmpContainer = Ext
      .create(
        "Ext.Container", {
          id: "chooseEmpContainer",
          title: XipLang.xwf_lang_person_choose,
          layout: "fit",
          xtype: "container",
          items: [{
            id: "empList",
            xtype: "list",
            store: wfEmpQueryStore,
            itemTpl: "<div><div style='float:left;width:100px'>{EMPNAME}<\/div><div style='float:left;width:80px'>{USERNAME}<\/div><div style='float:left;width:80px'>{EMPCODE}<\/div><\/div><div style='width:260px'><font size=1>{ORGNAME}<\/font><\/div>",
            fullscreen: true,
            limit: 4,
            plugins: [{
              xclass: 'Ext.plugin.ListPaging',
              loadMoreText: XipLang.xwf_lang_more,
              noMoreRecordsText:XipLang.xwf_lang_no_records,
              autoPaging: true
                // 设置为TRUE将自动触发
            }],
            items: [{
              xtype: "toolbar",
              docked: "top",
              items: [{
                xtype: "searchfield",
                id: "tt_name",
                placeHolder: XipLang.xwf_lang_employee_choose,
                width: 300,
                listeners: {
                  action: function(
                    searchfield, e) {
                    if (searchfield.getValue() == '') {
                      Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_employee_choose,
                        function() {
                          searchfield.focus();
                        });
                      return;
                    }
                    wfEmpQueryStore.getProxy().setExtraParam('sql', sql);
                    wfEmpQueryStore.getProxy().setExtraParam('queryParams', "{empName:'" + searchfield.getValue() + "'}");
                    wfEmpQueryStore.currentPage = 1;
                    wfEmpQueryStore.load();
                  }
                }
              }]
            }, {
              id: "tc_btns",
              docked: "bottom",
              xtype: "container",
              items: [{
                id: "tb_ok",
                text:XipLang.xwf_lang_btn_confirm,
                xtype: "button",
                listeners: {
                  tap: function(comp, options) {
                    var list = chooseEmpContainer.down('#empList');
                    var items = list.getSelection();
                    var cnt = items.length;
                    if (cnt == 0) {
                      Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_must_emp_choose);
                      return;
                    }
                    var item = items[0];
                    var userId = item.data.USERID;
                    if (btnCode == XipWfPrivate.xip_wf_consultCode) {
                      Ext.Ajax.request({
                        url: 'workItemAction.do?method=doConsult',
                        params: {
                          'taskId': taskId,
                          'userId': userId,
                          'comment': comment
                        },
                        method: 'post',
                        async: false,
                        timeout: 3600000,
                        success: function(response, options) {
                          var resp = Ext.JSON.decode(response.responseText);
                          // 提交成功
                          Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg, function() {
                              // 关闭选人页面和代办页面
                              taskNaviView.pop(2);
                            },
                            this);
                        },
                        failure: function(reponse, options) {
                          var resp = Ext.JSON.decode(response.responseText);
                          Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
                        }
                      });
                    }
                    if (btnCode == XipWfPrivate.xip_wf_delegateCode) {
                      Ext.Ajax.request({
                        url: 'workItemAction.do?method=doDelegate',
                        params: {
                          'taskId': taskId,
                          'userId': userId,
                          'comment': comment
                        },
                        method: 'post',
                        async: false,
                        timeout: 3600000,
                        success: function(response, options) {
                          var resp = Ext.JSON.decode(response.responseText);
                          // 提交成功
                          Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg,
                            function() {
                              // 关闭选人页面和代办页面
                              taskNaviView.pop(2);
                            },
                            this);
                        },
                        failure: function(reponse, options) {
                          var resp = Ext.JSON.decode(response.responseText);
                          Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg);
                        }
                      });
                    }
                  }
                }
              }]
            }]
          }]
        });
    taskNaviView.push(chooseEmpContainer);
  },
  /**
   * 完成待办
   * 
   * @param taskNaviView 审批页面所在的导航视图
   * @param taskId 任务ID
   * @param comment 审批意见
   * @param buttonCode 调用完成代办的按钮编码
   */
  completeTask: function(taskNaviView, taskId, comment, buttonCode) {
    if (comment == null || comment == "" || comment == "undefined") {
      Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_auditor_comment);
      return false;
    }
    // 提交请求
    var userIds = '';
    Ext.Ajax.request({
      url: 'workItemAction.do?method=completeWorkItem',
      params: {
        'taskId': taskId,
        'comment': comment,
        'userIds': userIds,
        'lineCode': buttonCode
      },
      method: 'post',
      async: false,
      timeout: 3600000,
      success: function(response, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        if (resp.flag == '0') { // 提交成功
          Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg, function() {
            taskNaviView.pop();
          }, this);
        } else if (resp.flag == '1') { // 提交失败
          Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg);
          return false;
        } else {
          // 手动选人
          XipWfPrivate.chooseApprover(taskNaviView, resp.multiselect, resp.actName, resp.data, function(obj) {
            if (obj.flag == 0) {
              var userIds = obj.userIds;
              Ext.Ajax.request({
                url: 'workItemAction.do?method=completeWorkItem',
                params: {
                  'taskId': taskId,
                  'comment': comment,
                  'userIds': userIds,
                  'lineCode': buttonCode
                },
                method: 'post',
                async: false,
                timeout: 3600000,
                success: function(response, options) {
                  var resp = Ext.util.JSON.decode(response.responseText);
                  if (resp.flag == '0') { // 提交成功
                    Ext.Msg.alert(XipLang.xwf_lang_notice,
                      resp.msg,
                      function() {
                        taskNaviView.pop();
                      },
                      this);
                  } else if (resp.flag == '1') { // 提交失败
                    Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg);
                    return false;
                  }
                },
                failure: function(reponse, options) {
                  var response = Ext.util.JSON.decode(response.responseText);
                  Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
                }
              });
            } else {
              Ext.Msg.alert(XipLang.xwf_lang_notice, obj.msg);
              return false;
            }
          });
        }
      },
      failure: function(reponse, options) {
        var response = Ext.util.JSON.decode(response.responseText);
        Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg);
      }
    });
  },
  /**
   * 撤销流程
   * 
   * @param taskId 任务ID
   */
  doCancle: function(taskId) {
    Ext.Ajax.request({
      url: 'workItemAction.do?method=revokeProcess',
      params: {
        'taskId': taskId
      },
      method: 'post',
      async: false,
      timeout: 3600000,
      success: function(response, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        // 提交成功
        Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg);
      },
      failure: function(reponse, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg);
      }
    });
  },
  /**
   * 征询
   * 
   * @param taskNaviView 审批页面所在的导航视图
   * @param taskId 待办ID
   * @param comment 征询内容描述
   */
  doConsult: function(taskNaviView, taskId, comment) {
    XipWfPrivate.chooseConsultOrDelegateUser(taskNaviView, taskId,
      XipWfPrivate.xip_wf_consultCode, comment);
  },
  /**
   * 委派
   * 
   * @param taskNaviView 审批页面所在的导航视图
   * @param taskId 待办ID
   * @param comment 委派说明
   */
  doDelegate: function(taskNaviView, taskId, comment) {
    XipWfPrivate.chooseConsultOrDelegateUser(taskNaviView, taskId,
      XipWfPrivate.xip_wf_delegateCode, comment);
  },
  /**
   * 征询反馈
   * 
   * @param taskNaviView 审批页面所在的导航视图
   * @param taskId 待办ID
   * @param comment 审批意见
   */
  closeConsult: function(taskNaviView, taskId, comment) {
    if (comment == null || comment == "" || comment == "undefined") {
      Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_consultation);
      return;
    }
    Ext.Ajax.request({
      url: 'workItemAction.do?method=closeConsultTask',
      params: {
        'taskId': taskId,
        'comment': comment
      },
      method: 'post',
      async: false,
      timeout: 3600000,
      success: function(response, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        if (resp.flag == '0') {
          Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg, function() {
            taskNaviView.pop();
          }, this);
        } else {
          Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg);
        }
      },
      failure: function(reponse, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg);
      }
    });
  },
  /**
   * 待办中提交按钮（流程驱动中才会用到）
   * 
   * @param taskNaviView 需要手工选人的时候，选择审批人的界面被推入的导航视图
   * @param taskId 待办的ID
   */
  doSubmit: function(taskNaviView, taskId) {
    var userIds = '';
    Ext.Ajax.request({
      url: 'workItemAction.do?method=submitProcess',
      params: {
        taskId: taskId,
        userIds: userIds
      },
      method: 'POST',
      async: false,
      success: function(response, options) {
        var resp = Ext.JSON.decode(response.responseText);
        if (resp.flag == '0') {
          Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg, function() {
            taskNaviView.pop();
          }, this);
        } else if (resp.flag == '1') {
          Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg);
        } else {
          // 手动选人
          XipWfPrivate.chooseApprover(taskNaviView, resp.multiselect, resp.actName, resp.data, function(obj) {
            if (obj.flag == 0) {
              var userIds = obj.userIds;
              Ext.Ajax.request({
                url: 'workItemAction.do?method=submitProcess',
                params: {
                  taskId: taskId,
                  userIds: userIds
                },
                method: 'POST',
                async: false,
                success: function(
                  response,
                  options) {
                  var resp = Ext.JSON.decode(response.responseText);
                  if (resp.flag == '0') {
                    Ext.Msg.alert(XipLang.xwf_lang_notice, response.msg,
                      function() {
                        taskNaviView.pop();
                      },
                      this);
                  } else if (resp.flag == '1') {
                    Ext.Msg.alert(
                      XipLang.xwf_lang_notice,
                      response.msg);
                  }
                },
                failure: function(response, options) {
                  Ext.Msg.alert(
                    XipLang.xwf_lang_error,
                    XipLang.xwf_lang_server_no_response);
                }
              });
            } else {
              Ext.Msg.alert(
                XipLang.xwf_lang_error,
                obj.msg);
            }
          });
        }
      },
      failure: function(response, options) {
        Ext.Msg.alert(XipLang.xwf_lang_error, XipLang.xwf_lang_server_no_response);
      }
    });
  },
  /**
   * 撤销征询
   * 
   * @param taskNaviView 审批页面所在的导航视图
   * @param taskId 待办ID
   * @param comment 撤销征询说明
   */
  revokeConsult: function(taskNaviView, taskId, comment) {
    if (comment == null || comment == "" || comment == "undefined") {
      Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.revoke_consulate_comment);
      return;
    }
    Ext.Ajax.request({
      url: 'workItemAction.do?method=revokeConsultTask',
      params: {
        'taskId': taskId,
        'comment': comment
      },
      method: 'post',
      async: false,
      timeout: 3600000,
      success: function(response, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        if (resp.flag == '0') {
          Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg, function() {
            taskNaviView.pop();
          }, this);
        } else {
          Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg);
        }
      },
      failure: function(reponse, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg);
      }
    });
  },
  /**
   * 关闭抄送
   * 
   * @param taskNaviView 审批页面所在的导航视图
   * @param taskId 待办ID
   */
  closeCopyTo: function(taskNaviView, taskId) {
    Ext.Ajax.request({
      url: 'workItemAction.do?method=closeCopyToTask',
      params: {
        'taskId': taskId
      },
      method: 'post',
      async: false,
      timeout: 3600000,
      success: function(response, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        if (resp.flag == '0') {
          Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg, function() {
            taskNaviView.pop();
          }, this);
        } else {
          Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg);
        }
      },
      failure: function(reponse, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg);
      }
    });
  },
  /**
   * 退回
   * 
   * @param taskNaviView 审批页面所在的导航视图
   * @param taskId 待办ID
   * @param comment 退回说明
   */
  doBack: function(taskNaviView, taskId, comment) {
    if (comment == null || comment == "" || comment == "undefined") {
      Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.revoke_rollback_comment);
      return;
    }
    var acts;
    Ext.Ajax.request({
      url: 'workItemAction.do?method=getBackActivityList',
      params: {
        'taskId': taskId
      },
      method: 'post',
      async: false,
      timeout: 3600000,
      success: function(response, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        if (resp.flag == '0') {
          acts = resp.data;
        } else {
          Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg);
          return;
        }
      },
      failure: function(reponse, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg);
        return;
      }
    });
    Ext.define('BackAct', {
      extend: 'Ext.data.Model',
      config: {
        fields: [{
          name: 'activityId',
          type: 'string'
        }, {
          name: 'activityCode',
          type: 'string'
        }, {
          name: 'activityName',
          type: 'string'
        }]
      }
    });
    var actsStore = Ext.create("Ext.data.Store", {
      storeId: "actsStore",
      model: "BackAct",
      data: acts
    });
    var actsList = Ext.create(
      "Ext.List", {
        id: "actsList",
        store: actsStore,
        itemTpl: "<div><div style='float:left;width:80px'>{activityCode}<\/div><div style='float:left;width:140px'>{activityName}<\/div><\/div>",
        items: [{
          docked: "bottom",
          xtype: "container",
          items: [{
            id: "tb_ok",
            text:XipLang.xwf_lang_btn_confirm,
            xtype: "button",
            listeners: {
              tap: function(comp, options) {
                var userIds = '';
                var items = actsList.getSelection();
                var cnt = items.length;
                if (cnt == 0) {
                  Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_back_node);
                } else {
                  var actId = items[0].data.activityId;
                  Ext.Ajax.request({
                    url: 'workItemAction.do?method=doBack',
                    params: {
                      taskId: taskId,
                      backToActivityId: actId,
                      comment: comment
                    },
                    method: 'POST',
                    async: false,
                    success: function(response, options) {
                      var resp = Ext.JSON.decode(response.responseText);
                      if (resp.flag == '0') {
                        Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg,
                          function() {
                            taskNaviView.pop(2);
                          },
                          this);
                      } else if (resp.flag == '1') {
                        Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg);
                      }
                    },
                    failure: function(response, options) {
                      Ext.Msg.alert(XipLang.xwf_lang_error, XipLang.xwf_lang_server_no_response);
                    }
                  });
                }
              }
            }
          }]
        }]
      });
    var chooseActsContainer = new Ext.Container({
      title: XipLang.xwf_lang_back_node,
      layout: "fit",
      xtype: "container",
      items: [{
        xtype: "container",
        layout: "fit",
        items: [actsList]
      }]
    });
    taskNaviView.push(chooseActsContainer);
  },
  /**
   * 驳回
   * 
   * @param taskNaviView 审批页面所在的导航视图
   * @param taskId 待办ID
   * @param comment 驳回说明
   */
  doReject: function(taskNaviView, taskId, comment) {
    if (comment == null || comment == "" || comment == "undefined") {
      Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_reject_comment);
      return;
    }
    Ext.Ajax.request({
      url: 'workItemAction.do?method=rejectProcess',
      params: {
        'taskId': taskId,
        'comment': comment
      },
      method: 'post',
      async: false,
      timeout: 3600000,
      success: function(response, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        if (resp.flag == '0') {
          Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg, function() {
            taskNaviView.pop();
          }, this);
        } else {
          Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg);
        }
      },
      failure: function(reponse, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        Ext.Msg.alert(XipLang.xwf_lang_notice, resp.msg);
      }
    });
  },
  /**
   * 根据实体编码选择流程
   * 
   * @param taskNaviView 审批页面所在的导航视图
   * @param entityCode 流程实体编码
   * @param entityAttrs 流程实体属性值对Json串 "{attr1Name:'attr1Value',attr2Name:'attr2Value'}"
   * @param callBack 回调函数 成功返回{flag:0,processId:'xxxx'} 否则返回{flag:1,msg:'xxxx'}
   */
  choosePorcessByEntity: function(taskNaviView, entityCode, entityAttrs, callBack) {
    Ext.Ajax
      .request({
        url: 'workflowUtilAction.do?method=getProcessIdByEntityCode',
        params: {
          entityCode: entityCode,
          entityAttJson: entityAttrs
        },
        method: 'POST',
        async: false,
        success: function(response, options) {
          var resp = Ext.JSON.decode(response.responseText);
          if (resp.flag == '0') {
            // 只有一个流程，直接用其创建实例并提交
            var obj = new Object({});
            obj.flag = 0;
            obj.processId = resp.processId;
            callBack(obj);
          } else if (resp.flag == '1') {
            callBack({
              "flag": 1,
              "msg": resp.msg
            });
          } else {
            // 多个流程，需要手工选择流程
            Ext.define('ProcessModel', {
              extend: 'Ext.data.Model',
              config: {
                fields: [{
                  name: 'processId',
                  type: 'string'
                }, {
                  name: 'processCode',
                  type: 'string'
                }, {
                  name: 'processName',
                  type: 'string'
                }]
              }
            });
            var ds = Ext.create('Ext.data.Store', {
              storeId: 'processStore',
              model: 'ProcessModel',
              data: resp.data
            });
            var chooseProcessContainer = Ext.create("Ext.Container", {
              title: XipLang.xwf_lang_pro_choose,
              layout: "fit",
              xtype: "container",
              items: [{
                xtype: "list",
                id: "processList",
                store: ds,
                itemTpl: "<div>{processName}<\/div>",
                fullscreen: true,
                items: [{
                  docked: "bottom",
                  xtype: "container",
                  items: [{
                    text: XipLang.xwf_lang_btn_confirm,
                    xtype: "button",
                    listeners: {
                      tap: function(
                        comp,
                        options) {
                        var list = chooseProcessContainer.down("#processList");
                        var items = list.getSelection();
                        var cnt = items.length;
                        if (cnt == 0) {
                          Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_one_choose);
                          return;
                        }
                        var item = items[0];
                        var obj = new Object({});
                        obj.flag = 0;
                        obj.processId = item.data.processId;
                        taskNaviView.pop();
                        callBack(obj);
                      }
                    }
                  }]
                }]
              }]
            });
            taskNaviView.push(chooseProcessContainer);
          }
        },
        failure: function(response, options) {
          callBack({
            flag: 1,
            msg: XipLang.xwf_lang_server_no_response
          });
        }
      });
  },
  /**
   * 根据流程Id创建工作流实例
   *
   * @param processId 流程Id
   * @param callBack 回调函数，创建流程实例成功返回{flag:0,instanceCode:'xxxx'} 否则{flag:1,msg:'xxxx'}
   */
  createInstanceByProcessId: function(processId, callBack) {
    Ext.Ajax.request({
      url: 'workflowUtilAction.do?method=createInstanceByProcessId',
      params: {
        'processId': processId
      },
      method: 'post',
      async: false,
      timeout: 3600000,
      success: function(response, options) {
        var resp = Ext.util.JSON.decode(response.responseText);
        if (resp.flag == '0') {
          callBack({
            "flag": 0,
            "instanceCode": resp.instanceCode
          });
        } else {
          callBack({
            "flag": 1,
            "msg": resp.msg
          });
        }
      },
      failure: function(reponse, options) {
        callBack({
          "flag": 1,
          "msg":XipLang.xwf_lang_send_error
        });
      }
    });
  },
  /**
   * 选择审批
   *
   * @param taskNaviView 审批页面所在的导航视图。
   * @param multiSelection 审批人是否允许多选，是Y，否N。
   * @param actName 需要选择审批人的节点名称。
   * @param records 供选择的审批人记录。
   * @param callBack 回调函数，成功返回{flag:0,userIds:'xxxx'}。
   */
  chooseApprover: function(taskNaviView, multiSelection, actName, records, callBack) {
    Ext.define('Approver', {
      extend: 'Ext.data.Model',
      config: {
        fields: [{
          name: 'userId',
          type: 'string'
        }, {
          name: 'actName',
          type: 'string'
        }, {
          name: 'userName',
          type: 'string'
        }, {
          name: 'empName',
          type: 'string'
        }, {
          name: 'orgName',
          type: 'string'
        }]
      }
    });
    var approverStore = Ext.create("Ext.data.Store", {
      storeId: "approverStore",
      model: "Approver",
      data: records
    });
    var approverList = Ext.create(
      "Ext.List", {
        id: "approverList",
        store: "approverStore",
        itemTpl: "<div><div style='float:left;width:100px'>{empName}<\/div><div style='float:left;width:160px'>{userName}<\/div><\/div><div style='width:260px'><font size=1>{orgName}<\/font><\/div>",
        fullscreen: true,
        items: [{
          docked: "bottom",
          xtype: "container",
          items: [{
            id: "tb_ok",
            text: XipLang.xwf_lang_btn_confirm,
            xtype: "button",
            listeners: {
              tap: function(comp, options) {
                var userIds = '';
                var items = approverList.getSelection();
                var cnt = items.length;
                if (cnt == 0) {
                  Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_auditor_choose);
                } else {
                  for (var i = 0; i < cnt; i++) {
                    var item = items[i];
                    if (i == 0) {
                      userIds = item.data.userId;
                    } else {
                      userIds = userIds + ',' + item.data.userId;
                    }
                  }
                  taskNaviView.pop();
                  callBack({
                    flag: 0,
                    userIds: userIds
                  });
                }
              }
            }
          }]
        }]
      });
    var chooseapproverContainer = new Ext.Container({
      title: actName,
      layout: "fit",
      xtype: "container",
      listeners: {
        activate: function(newActiveItem, comp, oldActiveItem,
          options) {
          if (multiSelection == 'Y') {
            approverList.setMode('MULTI');
          } else {
            approverList.setMode('SINGLE');
          }
        }
      },
      items: [{
        xtype: "container",
        layout: "fit",
        items: [approverList]
      }]
    });
    taskNaviView.push(chooseapproverContainer);
  }
};