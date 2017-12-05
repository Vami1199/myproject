
var _getContextPath = function() {
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0,index+1);
	return result;
}
var _contextPath = _getContextPath();
//图片选择后微信将返回localId，图片上传后微信将返回serverId，localId可以用于图片预览，记录serverId可以用于图片下载存储
var images = {
	      localId: [],
	      serverId: []
	  };
//微信官方并不推荐模块化的加载方式，鼓励加载在线文件jweixin-1.0.0.js，便于升级管理
document.write('<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>');
document.write('<script type="text/javascript" src="' + _contextPath + '/platform/util/weixinInit.js"></script>');
/**
 *调用微信提供的图片选择接口选择图片上传  
 */
function wxChooseImage(){
    wx.chooseImage ({
        success : function(res){
            images.localId = res.localIds;  //保存到images
        }
    });
	
}
/**
 *微信图片上传接口js 
 *attCatCode:附件分类编码
 *srcId:业务主键
 *busNo：业务编码
 *orgId：组织ID
 *callback:回调函数
 *return：成功 {'flag':'1','msg':'文件上传成功！'}
 *       失败 {'flag':'0','msg':'没有找到授权的服务器信息！'}等
 */
function wxUploadImage(attCatCode,srcId,busNo,orgId,callback){
    var i = 0, len = images.localId.length;
    function wxUpload(){
        wx.uploadImage({
            localId: images.localId[i], 
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success: function (res) {
                i++;
                //保存serverId
                images.serverId.push(res.serverId);
                //若选择了多张图片，依次将这些图片上传到微信服务器，图片上传完毕后，再将图片下载到本地服务器
                if(i < len){
                    wxUpload();
                }else{
                    if (images.serverId.length === 0) {
                        Wb.message(XipLang.wf_wx_no_file_upload);
                        return;
                      }else{
                        //发送ajax请求，从微信服务器上获取附件转存到本地服务器上
                    	  Ext.Ajax.request({
                    		    url:_contextPath+'/weixinStoreFile.do?method=weixinStoreFile',
                    		    method: 'POST',
                    		    timeout : 300000,
                    		    params:{'mediaIds':images.serverId,'attCatCode':attCatCode,'srcId':srcId,'busNo':busNo,'orgId':orgId},
                    		    success: function ( result, request) {
                    		    	if(callback)
                    		          callback(Ext.JSON.decode(result.responseText));
                    		    },
                    		    failure: function ( result, request) {
                    		    	Ext.Msg.alert(XipLang.xwf_lang_notice,XipLang.wf_wx_file_upload_failure);
                    		    }
                    		
                    	  });                        
                      }
                }
            }
        });
    }
    wxUpload();
	
}




