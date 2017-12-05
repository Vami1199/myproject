/**
 * author：tangxl  
 * Extjs消息提示框  
 * MsgTip.msg('消息标题', '消息内容');//不自动隐藏  
 * MsgTip.msg('消息标题', '消息内容',true);//默认1秒后自动隐藏  
 * MsgTip.msg('消息标题', '消息内容',true,10);//3秒后自动隐藏
 * title:标题
 * message：提示信息
 * autoHide：自动隐藏
 * pauseTime：停留时间（停留时间必须和自动隐藏配合使用，自有自动隐藏为true时，该参数才会起作用）
 * moduleCode：记录cookie的标识
 * showBtn:是否显按钮
 */  
MsgTip = function(){  
    var msgCt; 
    var globalCode;
    function createBox(t, s){  
        return ['<div class="msg">',  
                '<div class="x-box-tl"><div class="x-box-tr"><div class="x-box-tc"></div></div></div>',  
                '<div class="x-box-ml"><div class="x-box-mr"><div class="x-box-mc" style="font-size:12px;"><h4>', t, '</h4>', s, '</div></div></div>',  
                '<div class="x-box-bl"><div class="x-box-br"><div class="x-box-bc"></div></div></div>',  
                '</div>'].join('');  
    }  
    return {  
        msg : function(title, message,autoHide,pauseTime,moduleCode,showBtn){  
        	globalCode = moduleCode;
            if(!msgCt){
                msgCt = Ext.DomHelper.insertFirst(document.body, {id:'msg-div22',style:'position:absolute;top:10px;width:auto;margin:0 auto;z-index:20000;'}, true);  
            }  
            msgCt.alignTo(document, 't-t');  
            //给消息框右下角增加一个关闭按钮  
            if(showBtn){
            	message+='<br><span style="text-align:left;font-size:12px; width:auto;padding-left:0px;position:absolute;right:6px;"><font color="blank">'+
            	'<u style="cursor:pointer;" id="_toolTipsClickHide" onclick="MsgTip.hide(this);">关闭</u>&nbsp;&nbsp;&nbsp;&nbsp;<u style="cursor:pointer;" onclick="MsgTip.recordCookie();MsgTip.hide(this);">我知道了,不再提示</u></font></span><br>'; 
            }else{
            	message+='<br><span style="text-align:right;font-size:12px; width:auto;padding-left:0px;position:absolute;right:4px;"><font color="blank">'+
            	'<u style="cursor:pointer;" id="_toolTipsClickHide" onclick="MsgTip.hide(this);">关闭</u></font></span><br>';  
            }
            var m = Ext.DomHelper.append(msgCt, {html:createBox(title, message)}, true);  
            m.slideIn('t');  
            if(!Ext.isEmpty(autoHide)&&autoHide==true){  
             if(Ext.isEmpty(pauseTime)){  
              pauseTime=1000;  
             }  
             m.pause(pauseTime).ghost("tr", {remove:true});  
            }  
        },  
        hide:function(v){
         if(v!=null){
             var msg=Ext.get(v.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);  
             msg.ghost("tr", {remove:true});	 
          }
        },
        recordCookie:function(){
        	Wb.setCookie(globalCode,'Y');		
        }
    };  
}();