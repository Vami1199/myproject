<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<META HTTP-EQUIV='pragma' CONTENT='no-cache'> 
<META HTTP-EQUIV='Cache-Control' CONTENT='no-cache, must-revalidate'>
<META HTTP-EQUIV='expires' CONTENT='0'>
<script type="text/javascript">
	var projectName = '<%=request.getContextPath()%>';
</script>

<%
if(com.wb.common.Var.debug){
%>
	<script type="text/javascript" src="<%=request.getContextPath()%>/wb/script/wb-debug.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/wb/script/locale/wb-lang-zh-debug.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/wb/libs/ext/ext-all-debug.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/wb/libs/ext/locale/ext-lang-zh-debug.js"></script>
<%	
}else{
%>
	<script type="text/javascript" src="<%=request.getContextPath()%>/wb/script/wb.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/wb/script/locale/wb-lang-zh.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/wb/libs/ext/ext-all.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/wb/libs/ext/locale/ext-lang-zh.js"></script>
<%
}
%>



<script type="text/javascript" src="<%=request.getContextPath()%>/xip/js/xip.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/xip/js/base64.js"></script>

<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/xip/css/font.css"/>
<link rel="stylesheet" type="text/css" media="all" href="<%=request.getContextPath()%>/xip/css/default.css"/>
<link rel="stylesheet" type="text/css" media="all" href="<%=request.getContextPath()%>/wb/css/style-debug.css"/>

<%if(request.getSession()!=null && request.getSession().getAttribute("sys.theme")!=null && !"".equals(request.getSession().getAttribute("sys.theme"))){
	if("gray".equals(request.getSession().getAttribute("sys.theme"))){
%>
		<link type="text/css" rel="stylesheet" href="<%=request.getContextPath()%>/wb/libs/ext/resources/ext-theme-gray/ext-theme-gray-all.css">
<%		
	}else if("neptune".equals(request.getSession().getAttribute("sys.theme"))){
%>
		<link type="text/css" rel="stylesheet" href="<%=request.getContextPath()%>/wb/libs/ext/resources/ext-theme-neptune/ext-theme-neptune-all.css">
<%		
	}else{
%>
		<link type="text/css" rel="stylesheet" href="<%=request.getContextPath()%>/wb/libs/ext/resources/ext-theme-classic/ext-theme-classic-all.css">
<%		
	}
}else{
%>
		<link type="text/css" rel="stylesheet" href="<%=request.getContextPath()%>/wb/libs/ext/resources/ext-theme-classic/ext-theme-classic-all.css">
<%
}%>
