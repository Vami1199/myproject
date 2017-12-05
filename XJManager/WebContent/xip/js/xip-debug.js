/**
 * 
 */
var Xip = {
  /**
   * 获取UUID
   * 
   * @param {int}
   *            [cnt] 要获取UUID的个数，如果要获取多个UUID，则返回json数组，如果不传，或者为空，或者为1则直接返回UUID
   * @return {Object} 如果cnt为空或者1则返回uuid，如果cnt大于1则返回json数组
   */
  getId: function(cnt) {
    var id;
    if (cnt === null || cnt === undefined || cnt === 0) {
      cnt = '1';
    }
    Ext.Ajax.request({
      url: 'platformAction.do?method=getUUID',
      params: {
        'cnt': cnt
      },
      method: 'POST',
      async: false,
      success: function(response, options) {
        var resp = Ext.JSON.decode(response.responseText);
        id = resp.msg;
      },
      failure: function(response, options) {}
    });
    return id;
  },
  /**
   * 获取contextPath
   * 
   * @returns
   */
  getContextPath: function() {
    var pathName = document.location.pathname;
    var index = pathName.substr(1).indexOf("/");
    var result = pathName.substr(0, index + 1);
    return result;
  },

  /**
   * 弹出ext窗口
   * 
   * @params:config窗口配置 json示例{title:'',height:'',width:'',url:'',isMax:'',closeCallback:function(){}}
   */
  showExtWindow: function(config) {
    var winTitle = config.title != null ? config.title : '';
    var winHeight = config.height != null ? config.height : 500;
    var winWidth = config.width != null ? config.width : 770;
    var winUrl = config.url != null ? config.url : '';

    var windId = 'extWin' + new Date().getTime();
    if (winUrl.indexOf('?') != -1) {
      winUrl = winUrl + '&extWinId=' + windId;
    } else {
      winUrl = winUrl + '?extWinId=' + windId;
    }

    var extWindow = new Ext.Window({
      id: windId,
      title: winTitle,
      height: winHeight,
      width: winWidth,
      layout: 'fit',
      modal: true,
      resizable: false,
      maximizable: true,
      html: '<iframe id=\'extWindowIframe\' width=\'100%\' height=\'100%\' frameborder=0 src="' + winUrl + '"></iframe>',
      listeners: {
        show: function(win) {},
        close: function() {
          if (config.closeCallback) {
            config.closeCallback();
          }
        }
      }
    });
    extWindow.show();
    if (config.isMax) {
      extWindow.maximize();
    }
  },

  /**
   * 弹出附件管理页面
   * 
   * @params: config附件配置
   *          json示例{userId:'',src_id:'',org_id:'',att_cat:'',bus_no:'',canUp:'',canDown:'',canDel:'',closeCallback:function(){}}
   */
  showAttachmentManager: function(userId, src_id, org_id, att_cat, bus_no, canUp, canDown, canDel, closeCallback, fileSizeLimit) {
    if (userId == null || userId == "") {
      Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_userId_empty);
      return;
    }
    if (src_id == null || src_id == "") {
      Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_sourceId_empty);
      return;
    }
    if (att_cat == null || att_cat == "") {
      Ext.Msg.alert(XipLang.xwf_lang_notice, XipLang.xwf_lang_attach_empty);
      return;
    }

    if (canUp == null || canUp == "") {
      canUp = 'Y';
    }

    if (canDown == null || canDown == "") {
      canDown = 'N';
    }

    if (canDel == null || canDel == "") {
      canDel = 'N';
    }

    if (fileSizeLimit == null || fileSizeLimit == "") {
      fileSizeLimit = '';
    }

    var url = '';

    var url = Xip.getContextPath() + '/m?xwl=xip/tools/att/attrManage/attrManage' + '&userId=' + userId + '&srcId=' + src_id + '&orgId=' + org_id + '&attCat=' + att_cat + '&busNo=' + encodeURI(encodeURI(bus_no)) + '&canUp=' + canUp + '&canDown=' + canDown + '&canDel=' + canDel + '&fileSizeLimit=' + fileSizeLimit;

    var windowConfig = {
      title: XipLang.xwf_lang_attach_manage,
      'url': url,
      'isMax': true,
      'closeCallback': closeCallback
    };
    Xip.showExtWindow(windowConfig);
  },
  showAttachmentManagerTouch: function(navView, userId, src_id, org_id, att_cat, bus_no, canUp, canDown, canDel, closeCallback, fileSizeLimit) {
    if (userId === null || userId === "") {
      Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_userId_empty);
      return;
    }
    if (src_id === null || src_id === "") {
      Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_sourceId_empty);
      return;
    }
    if (att_cat === null || att_cat === "") {
      Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_attach_empty);
      return;
    }

    if (canUp === null || canUp === "") {
      canUp = 'Y';
    }

    if (canDown === null || canDown === "") {
      canDown = 'N';
    }

    if (canDel === null || canDel === "") {
      canDel = 'N';
    }

    if (fileSizeLimit ===null || fileSizeLimit === "") {
      fileSizeLimit = '';
    }

    var url = 'xip/touch/att/attManage.xwl';
    Wb.run({
      url: url,
      success: function(scope) {
        Wb.each(scope, function(k, v) {
          if (v && (v.isViewport || v.initialConfig && v.initialConfig.isViewport)) {
            if (scope.init) {
              scope.init(navView,userId, src_id, org_id, att_cat, bus_no, canUp, canDown, canDel, closeCallback, fileSizeLimit);
            }
            var newCard = Ext.create('Ext.Container', {
              layout: 'fit',
              title: XipLang.xwf_lang_attachment
            });
            newCard.add(v);
            navView.push(newCard);
            return false;
          }
        });
      }
    });
  },
  /**
   * 弹出功能帮助页面
   * 
   * @params:funId 功能树id
   * @params:type 帮助类型 r:只读 rw:读写
   * @params:title 窗口标题
   */
  showFunHelpWin: function(funId, type, title) {
    if (funId == null || funId == 'undefined' || funId == '') {
      Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.xwf_lang_funId_empty);
      return;
    }
    var winTitle = XipLang.xwf_lang_fun_help;
    if (title) {
      winTitle = title + XipLang.xwf_lang_help;
    }

    var windId = 'extWin' + new Date().getTime();

    var url = Xip.getContextPath() + "/xip/kindeditor4/editor.jsp?type=" + type + "&funTreeId=" + funId + "&extWinId=" + windId;

    var extWindow = new Ext.Window({
      id: windId,
      title: winTitle,
      height: 500,
      width: 770,
      layout: 'fit',
      modal: true,
      resizable: false,
      maximizable: false,
      html: '<iframe id=\'extWindowIframe\' width=\'100%\' height=\'460px\' frameborder=0 src="' + url + '"></iframe>',
      listeners: {
        show: function(win) {},
        close: function() {}
      }
    });

    extWindow.show();
  },

  /**
   * 导出Excel
   * 
   * @param templateCode
   *            模板编码
   * @param sqlParams
   *            参数
   * @param excelName
   *            Excel名称
   */
  exportExcel: function(templateCode, sqlParams, excelName) {
    if (sqlParams != null && sqlParams != "") {
      sqlParams = encodeURI(encodeURI(Xip.parseJson4String(sqlParams)));
    } else {
      sqlParams = "";
    }

    if (excelName != null && excelName != "") {
      excelName = encodeURI(encodeURI(excelName));;
    } else {
      excelName = "templateExportData";
    }

    window.location.href = Xip.getContextPath() + "/templateManageAction.do?method=exportExcel&templateCode=" + templateCode + "&sqlParams=" + sqlParams + "&excelName=" + excelName;
    return;
  },

  /**
   * 导入Excel
   * 
   * @param templateCode
   *            模板编码
   */
  importExcel: function(templateCode, closeCallback) {
    var url = Xip.getContextPath() + '/m?xwl=xip/tools/io/dataImport&templateCode=' + templateCode;

    var windowConfig = {
      title: XipLang.xwf_lang_module_upload,
      'url': url,
      'width': 600,
      'height': 500,
      'closeCallback': closeCallback
    };

    Xip.showExtWindow(windowConfig);
  },

  /**
   * 将json对象转换成以xzsplit拼接的字符串
   * 
   * @param jsonObject
   * @returns {String}
   */
  parseJson4String: function(jsonObject) {
    var result = "";

    var index = 0;
    for (var key in jsonObject) {
      if (index == 0) {
        result = key + "xzsplit" + jsonObject[key];
      } else {
        result = result + "," + key + "xzsplit" + jsonObject[key];
      }
      index++;
    }

    return result;
  },

  /**
   * 帆软弹出窗口
   * 
   * @param url
   *            访问url
   * @param title
   *            标题
   * @param refreshParent
   *            是否刷新父页面
   * @param isMax
   *            是否最大化窗口
   * @param height
   *            高度
   * @param width
   *            宽度
   * @param iframeId
   */
  frPopWindow: function(url, title, refreshParent, isMax, height, width,
    iframeId) {
    var aHeight = 500;
    var aWidth = 880;
    if (height) {
      aHeight = height;
    }
    if (width) {
      aWidth = width;
    }
    var popWindow = new Ext.Window({
      layout: 'fit',
      id: 'frmPopWindow',
      title: title,
      modal: true,
      width: aWidth,
      height: aHeight,
      resizable: false,
      maximizable: true,
      html: '<iframe width=\'100%\' frameborder=0 height=\'100%\' id="' + iframeId + '" src="' + url + '"></iframe>',
      listeners: {
        show: function(win) {},
        close: function() {
          if (refreshParent == 0) {
            // window.location.reload();
          }
          if (refreshParent == 1) {
            window.location.reload();
          }
          if (refreshParent == 2) {
            // window.location.reload();
            buttonClick(XipLang.xwf_lang_query);
          }
        }
      }
    });
    popWindow.show();
    if (isMax)
      popWindow.maximize();
  },

  buttonClick: function(buttonName) {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].innerHTML == buttonName) {
        buttons[i].click();
        break;
      }
    }
  },
  getMD5: function(input) {
    var hexcase = 0;
    var b64pad = "";
    var chrsz = 8;

    function hex_md5(A) {
      return binl2hex(core_md5(str2binl(A), A.length * chrsz));
    }

    function b64_md5(A) {
      return binl2b64(core_md5(str2binl(A), A.length * chrsz));
    }

    function str_md5(A) {
      return binl2str(core_md5(str2binl(A), A.length * chrsz));
    }

    function hex_hmac_md5(A, B) {
      return binl2hex(core_hmac_md5(A, B));
    }

    function b64_hmac_md5(A, B) {
      return binl2b64(core_hmac_md5(A, B));
    }

    function str_hmac_md5(A, B) {
      return binl2str(core_hmac_md5(A, B));
    }

    function md5_vm_test() {
      return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
    }

    function core_md5(I, G) {
      I[G >> 5] |= 128 << ((G) % 32);
      I[(((G + 64) >>> 9) << 4) + 14] = G;
      var H = 1732584193;
      var F = -271733879;
      var J = -1732584194;
      var K = 271733878;
      for (var C = 0; C < I.length; C += 16) {
        var D = H;
        var E = F;
        var A = J;
        var B = K;
        H = md5_ff(H, F, J, K, I[C + 0], 7, -680876936);
        K = md5_ff(K, H, F, J, I[C + 1], 12, -389564586);
        J = md5_ff(J, K, H, F, I[C + 2], 17, 606105819);
        F = md5_ff(F, J, K, H, I[C + 3], 22, -1044525330);
        H = md5_ff(H, F, J, K, I[C + 4], 7, -176418897);
        K = md5_ff(K, H, F, J, I[C + 5], 12, 1200080426);
        J = md5_ff(J, K, H, F, I[C + 6], 17, -1473231341);
        F = md5_ff(F, J, K, H, I[C + 7], 22, -45705983);
        H = md5_ff(H, F, J, K, I[C + 8], 7, 1770035416);
        K = md5_ff(K, H, F, J, I[C + 9], 12, -1958414417);
        J = md5_ff(J, K, H, F, I[C + 10], 17, -42063);
        F = md5_ff(F, J, K, H, I[C + 11], 22, -1990404162);
        H = md5_ff(H, F, J, K, I[C + 12], 7, 1804603682);
        K = md5_ff(K, H, F, J, I[C + 13], 12, -40341101);
        J = md5_ff(J, K, H, F, I[C + 14], 17, -1502002290);
        F = md5_ff(F, J, K, H, I[C + 15], 22, 1236535329);
        H = md5_gg(H, F, J, K, I[C + 1], 5, -165796510);
        K = md5_gg(K, H, F, J, I[C + 6], 9, -1069501632);
        J = md5_gg(J, K, H, F, I[C + 11], 14, 643717713);
        F = md5_gg(F, J, K, H, I[C + 0], 20, -373897302);
        H = md5_gg(H, F, J, K, I[C + 5], 5, -701558691);
        K = md5_gg(K, H, F, J, I[C + 10], 9, 38016083);
        J = md5_gg(J, K, H, F, I[C + 15], 14, -660478335);
        F = md5_gg(F, J, K, H, I[C + 4], 20, -405537848);
        H = md5_gg(H, F, J, K, I[C + 9], 5, 568446438);
        K = md5_gg(K, H, F, J, I[C + 14], 9, -1019803690);
        J = md5_gg(J, K, H, F, I[C + 3], 14, -187363961);
        F = md5_gg(F, J, K, H, I[C + 8], 20, 1163531501);
        H = md5_gg(H, F, J, K, I[C + 13], 5, -1444681467);
        K = md5_gg(K, H, F, J, I[C + 2], 9, -51403784);
        J = md5_gg(J, K, H, F, I[C + 7], 14, 1735328473);
        F = md5_gg(F, J, K, H, I[C + 12], 20, -1926607734);
        H = md5_hh(H, F, J, K, I[C + 5], 4, -378558);
        K = md5_hh(K, H, F, J, I[C + 8], 11, -2022574463);
        J = md5_hh(J, K, H, F, I[C + 11], 16, 1839030562);
        F = md5_hh(F, J, K, H, I[C + 14], 23, -35309556);
        H = md5_hh(H, F, J, K, I[C + 1], 4, -1530992060);
        K = md5_hh(K, H, F, J, I[C + 4], 11, 1272893353);
        J = md5_hh(J, K, H, F, I[C + 7], 16, -155497632);
        F = md5_hh(F, J, K, H, I[C + 10], 23, -1094730640);
        H = md5_hh(H, F, J, K, I[C + 13], 4, 681279174);
        K = md5_hh(K, H, F, J, I[C + 0], 11, -358537222);
        J = md5_hh(J, K, H, F, I[C + 3], 16, -722521979);
        F = md5_hh(F, J, K, H, I[C + 6], 23, 76029189);
        H = md5_hh(H, F, J, K, I[C + 9], 4, -640364487);
        K = md5_hh(K, H, F, J, I[C + 12], 11, -421815835);
        J = md5_hh(J, K, H, F, I[C + 15], 16, 530742520);
        F = md5_hh(F, J, K, H, I[C + 2], 23, -995338651);
        H = md5_ii(H, F, J, K, I[C + 0], 6, -198630844);
        K = md5_ii(K, H, F, J, I[C + 7], 10, 1126891415);
        J = md5_ii(J, K, H, F, I[C + 14], 15, -1416354905);
        F = md5_ii(F, J, K, H, I[C + 5], 21, -57434055);
        H = md5_ii(H, F, J, K, I[C + 12], 6, 1700485571);
        K = md5_ii(K, H, F, J, I[C + 3], 10, -1894986606);
        J = md5_ii(J, K, H, F, I[C + 10], 15, -1051523);
        F = md5_ii(F, J, K, H, I[C + 1], 21, -2054922799);
        H = md5_ii(H, F, J, K, I[C + 8], 6, 1873313359);
        K = md5_ii(K, H, F, J, I[C + 15], 10, -30611744);
        J = md5_ii(J, K, H, F, I[C + 6], 15, -1560198380);
        F = md5_ii(F, J, K, H, I[C + 13], 21, 1309151649);
        H = md5_ii(H, F, J, K, I[C + 4], 6, -145523070);
        K = md5_ii(K, H, F, J, I[C + 11], 10, -1120210379);
        J = md5_ii(J, K, H, F, I[C + 2], 15, 718787259);
        F = md5_ii(F, J, K, H, I[C + 9], 21, -343485551);
        H = safe_add(H, D);
        F = safe_add(F, E);
        J = safe_add(J, A);
        K = safe_add(K, B);
      }
      return Array(H, F, J, K);
    }

    function md5_cmn(B, F, C, D, A, E) {
      return safe_add(
        bit_rol(safe_add(safe_add(F, B), safe_add(D, E)), A), C);
    }

    function md5_ff(F, C, D, A, E, B, G) {
      return md5_cmn((C & D) | ((~C) & A), F, C, E, B, G);
    }

    function md5_gg(F, C, D, A, E, B, G) {
      return md5_cmn((C & A) | (D & (~A)), F, C, E, B, G);
    }

    function md5_hh(F, C, D, A, E, B, G) {
      return md5_cmn(C ^ D ^ A, F, C, E, B, G);
    }

    function md5_ii(F, C, D, A, E, B, G) {
      return md5_cmn(D ^ (C | (~A)), F, C, E, B, G);
    }

    function core_hmac_md5(B, G) {
      var F = str2binl(B);
      if (F.length > 16) {
        F = core_md5(F, B.length * chrsz);
      }
      var A = Array(16),
        D = Array(16);
      for (var C = 0; C < 16; C++) {
        A[C] = F[C] ^ 909522486;
        D[C] = F[C] ^ 1549556828;
      }
      var E = core_md5(A.concat(str2binl(G)), 512 + G.length * chrsz);
      return core_md5(D.concat(E), 512 + 128);
    }

    function safe_add(B, C) {
      var A = (B & 65535) + (C & 65535);
      var D = (B >> 16) + (C >> 16) + (A >> 16);
      return (D << 16) | (A & 65535);
    }

    function bit_rol(B, A) {
      return (B << A) | (B >>> (32 - A));
    }

    function str2binl(B) {
      var C = Array();
      var D = (1 << chrsz) - 1;
      for (var A = 0; A < B.length * chrsz; A += chrsz) {
        C[A >> 5] |= (B.charCodeAt(A / chrsz) & D) << (A % 32);
      }
      return C;
    }

    function binl2str(C) {
      var B = "";
      var D = (1 << chrsz) - 1;
      for (var A = 0; A < C.length * 32; A += chrsz) {
        B += String.fromCharCode((C[A >> 5] >>> (A % 32)) & D);
      }
      return B;
    }

    function binl2hex(C) {
      var A = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
      var D = "";
      for (var B = 0; B < C.length * 4; B++) {
        D += A.charAt((C[B >> 2] >> ((B % 4) * 8 + 4)) & 15) + A.charAt((C[B >> 2] >> ((B % 4) * 8)) & 15);
      }
      return D;
    }

    function binl2b64(B) {
      var C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var D = "";
      for (var A = 0; A < B.length * 4; A += 3) {
        var E = (((B[A >> 2] >> 8 * (A % 4)) & 255) << 16) | (((B[A + 1 >> 2] >> 8 * ((A + 1) % 4)) & 255) << 8) | ((B[A + 2 >> 2] >> 8 * ((A + 2) % 4)) & 255);
        for (var F = 0; F < 4; F++) {
          if (A * 8 + F * 6 > B.length * 32) {
            D += b64pad;
          } else {
            D += C.charAt((E >> 6 * (3 - F)) & 63);
          }
        }
      }
      return D;
    }
    return hex_md5(input);
  },
  base64Encode: function(input) {
    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function _utf8_encode(string) {
      string = string.replace(/\r\n/g, "\n");
      var utftext = "";
      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if ((c > 127) && (c < 2048)) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }

      }
      return utftext;
    }
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = _utf8_encode(input);
    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
    }
    return output;
  },
  base64Decode: function(input) {
    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function _utf8_decode(utftext) {
      var string = "";
      var i = 0;
      var c = 0;
      var c1 = 0;
      var c2 = 0;
      var c3 = 0;
      while (i < utftext.length) {
        c = utftext.charCodeAt(i);
        if (c < 128) {
          string += String.fromCharCode(c);
          i++;
        } else if ((c > 191) && (c < 224)) {
          c2 = utftext.charCodeAt(i + 1);
          string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
          i += 2;
        } else {
          c2 = utftext.charCodeAt(i + 1);
          c3 = utftext.charCodeAt(i + 2);
          string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
          i += 3;
        }
      }
      return string;
    }
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < input.length) {
      enc1 = _keyStr.indexOf(input.charAt(i++));
      enc2 = _keyStr.indexOf(input.charAt(i++));
      enc3 = _keyStr.indexOf(input.charAt(i++));
      enc4 = _keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    output = _utf8_decode(output);
    return output;
  },
  /**
   * callWebService: webservice调用
   * 
   * @param wsdl : url
   * @param methodName :方法名
   * @param args ：参数值  json格式{'key1':'value1','key2':'value2'}
   * @return json {'flag': ,'msg':,"data": }
   */
  callWebService: function(wsdl, methodName, args) {
    var ret = "";
    Ext.Ajax.request({
      url: 'platformAction.do?method=webService',
      params: {
        'wsdl': wsdl,
        'methodName': methodName,
        'args': args
      },
      method: 'POST',
      async: false,
      success: function(response, options) {
        var resp = Ext.JSON.decode(response.responseText);
        ret = resp.msg;
      },
      failure: function(response, options) {
        var resp = Ext.JSON.decode(response.responseText);
        ret = resp.msg;
      }
    });
    return ret;

  },

  /**
   * 在主页，IDE或其他任意窗口中打开指定xwl文件或任意url链接。xwl模块可以直接添加到应用主页而无需frame，从而使应用
   * 模块的加载更快速，同时更省资源。如果上下文环境在主页或IDE将直接打开，否则在新窗口内打开。如果需要直接在新窗口中打
   * 开，可以使用Wb.submit。
   *
   * Example:
   *
   *     Xip.open({url: 'm?xwl=path/myModule', title: 'My Module', iconCls: 'myIconCls',
   *              params: {param1: 'foo', param2: 'bar'}});
   *     Xip.open({url: 'http://www.google.com', title: 'Google', inframe:true, iconCls: 'web_icon'});
   *
   * @param {Object} PortalConfigs 打开模块或文件的配置参数。该参数子模块可见，首字母为大写。
   * @param {String} PortalConfigs.url url路径。
   * @param {String} [PortalConfigs.title] 显示在页标签中的标题。
   * @param {String} [PortalConfigs.iconCls] 显示在页标签中的图标样式。
   * @param {String} [PortalConfigs.icon] 显示在页标签中的图标URL。
   * @param {Object} [PortalConfigs.params] 提交的参数对象。
   * @param {Boolean} [PortalConfigs.inframe] 是否显示在Iframe中，默认为false。
   * @param {String} [PortalConfigs.method] 提交的方法，默认为POST表单提交。
   * @param {String} [PortalConfigs.tooltip] tab选项卡上的提示信息。
   * @param {Boolean} [PortalConfigs.reload] 如果模块已经存在是否重新加载。
   * @param {Container} [PortalConfigs.reloadCard] 需要重新加载的tab页。
   * @param {Boolean} [PortalConfigs.frameOnly] 是否只创建模块的框架。如果为true仅创建tab页，不加载模块内容。
   * @param {Boolean} [PortalConfigs.notActiveCard] 是否不激活创建的tab页。
   * @param {Boolean} [PortalConfigs.contextOwner] contextOwner对象。
   * @param {Boolean} [PortalConfigs.newWin] 是否在新窗口中使用表单提交方式打开，默认false。如果为GET方法且params为空则使用open函数打开。
   * @param {Boolean} [PortalConfigs.download] 是否下载资源，默认false。
   * @param {Boolean} [PortalConfigs.mask] 在加载过程中是否使用mask，默认为true。
   * @param {Boolean} [PortalConfigs.showError] 是否显示异常信息，默认为true。
   * @param {Boolean} [PortalConfigs.newTab] 如果指定模块已经打开，是否允许创建新的tab。默认为自动判断，即如果存在params，则允许创建新tab，
   * 否则激活已经打开的模块。
   * @param {Container/Boolean} [PortalConfigs.container] 把新的模块面板添加到该容器对象，默认为Home或IDE的tab。
   * 如果为false，则不创建模块面板。
   * @param {Function} [PortalConfigs.success] 加载xwl文件成功后的回调函数。传递参数appScope和responseText，this指向card。
   * @param {Function} [PortalConfigs.failure] 加载xwl文件失败后的回调函数。传递参数appScope和responseText，this指向card。
   * @return {Panel} 如果添加新的模块面板则返回该对象，否则为undefined。
   */
  open: function(config) {
    if (config.inframe == null || config.inframe == undefined) {
      if (config.url) {
        if (Ext.String.startsWith(config.url, '/m?xwl=') || Ext.String.startsWith(config.url, Xip.getContextPath() + '/m?xwl=')) {
          //config.inframe = false;
          config.inframe = true;
        } else if (Ext.String.startsWith(config.url, 'm?xwl=')) {
          //config.inframe = false;
          config.inframe = true;
          config.url = Xip.getContextPath() + '/' + config.url;
        } else {
          config.inframe = true;
        }
        Wb.open(config);
      } else {
        Ext.Msg.alert('',XipLang.xwf_lang_url);
      }
    }
    Wb.open(config);
  },

  getRequestParameter: function (argname)
  {
  	var url = document.location.href;
  	var arrStr = url.substring(url.indexOf("?")+1).split("&");
  	//return arrStr;
  	for(var i =0;i<arrStr.length;i++)
  	{
  	   var loc = arrStr[i].indexOf(argname+"=");
  	   if(loc!=-1)
  	   {
  	    return arrStr[i].replace(argname+"=","").replace("?","");
  	    break;
  	   }
  	  
  	}
  	return "";
  },
  
  //js日期比较(yyyy-mm-dd) 
  comptimeDate: function comptimeDate(a, b) {
  	var arr = a.split("-");
      var starttime = new Date(arr[0], arr[1], arr[2]);
      var starttimes = starttime.getTime();

      var arrs = b.split("-");
      var lktime = new Date(arrs[0], arrs[1], arrs[2]);
      var lktimes = lktime.getTime();

      if (starttimes > lktimes) {
      	return 1;
      }else if(starttimes == lktimes){
      	return 0;
      }else if(starttimes < lktimes){
      	return -1;
      }
  }
};