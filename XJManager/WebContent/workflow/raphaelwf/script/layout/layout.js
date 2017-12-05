/**
 *Raphael-workflow 布局创建
 *2017-03-06
 *tangxl 
 */
Ext.ns('RW');
RW = {
	/*
	 *工作流图标生成
	 */
	createItems:function(url,divId){
		var R_WF_ARRAY = [
		                  {name: 'pointer',      image: '/select',              title: '选择',cls:'node selectable'},
		                  {name: 'start',        image: '/start',               title: '开始',cls:'node state'},
		                  {name: 'end',          image: '/end',                 title: '结束',cls:'node state'},
		                  {name: 'task',         image: '/person',              title: '通知',cls:'node state'},
		                  {name: 'assign',       image: '/persons',             title: '会签',cls:'node state'},
		                  {name: 'function',     image: '/function',            title: '功能',cls:'node state'},
		                  {name: 'copy',         image: '/copy',                title: '抄送',cls:'node state'},
		                  {name: 'fork',         image: '/switch',              title: '判断',cls:'node state'},
		                  {name: 'path',         image: '/line',                title: '连线',cls:'node selectable'}
		                  ];
		return this.createHtml(R_WF_ARRAY,divId);
	},
	/*定义工作流图标生成函数
	 *array:要创建的div子元素；divId：父divId（便于获取所有图标值） 
	 */
	createHtml:function(array,divId){
		var imageRoot = WF_IMAGE_ROOT;
		var html = '<div id ="myflow_tools"  style="position: absolute; top: 5; left: 1; background-color: #fff; width: 90px; cursor: default; padding: 3px; class="ui-widget-content">';
		if (divId) {
			html = '<div id="' + divId + '"   style="position: absolute; top: 5; left: 1; background-color: #fff; width: 90px; cursor: default; padding: 3px; class="ui-widget-content">';
	     }  
	     
		 html +='<div id="myflow_tools_handle" style="text-align: center;" class="ui-widget-header">选项</div>';
	     for (var i = 0; i < array.length; i++) {
	    	 var item = array[i];
	         html += '<div  id="' 
	        	  + item.name 
	              + '" class="' + item.cls
                  + '" align="center" type="'+item.name+'">'
	              + ' <img src="' + imageRoot + item.image + '.png"><br>'
	              + item.title + '</div>';
	       }
	       html += '</div>';
	       html +='<div id="myflow" style="height:100%;width:100%" autoScroll=true></div><div><hr /></div>';
	       return html;
	}
};