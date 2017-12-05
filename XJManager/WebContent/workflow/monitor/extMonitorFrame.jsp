<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@page import="com.xzsoft.xip.framework.common.SessionVariable"%>
<%@page import="com.xzsoft.xip.platform.util.XipUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
	String insCode = request.getParameter("insCode") ;
    String winId = request.getParameter("extWinId");
    String systemLanguage = XipUtil.getSystemLanguage();
%>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<%@include file="/xip/include/include4.inc"%>
	    <%if(SessionVariable.EN.equalsIgnoreCase(systemLanguage)) {%>
	      <title>Process Monitoring</title>
	    <%}else{ %>
	      <title>流程实例监控</title>
	    <%} %>
	</head>
	<body>
		<script type="text/javascript" src="extMonitorFrame.js"></script>
		<script type="text/javascript">
			init_page('<%=request.getContextPath()%>','<%=insCode%>','<%=winId%>','<%=systemLanguage%>');
		</script>	
	</body>
</html>