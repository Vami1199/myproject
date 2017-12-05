<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="com.xzsoft.xip.framework.common.SessionVariable"%>
<%@ page import="com.xzsoft.xip.platform.util.XipUtil"%>
<%
	String contextPath = request.getContextPath();
    String systemLanguage = XipUtil.getSystemLanguage();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<%@include file="/xip/include/include4.inc"%>
		<%if(SessionVariable.EN.equalsIgnoreCase(systemLanguage)) {%>
	      <title>Process Unit Test</title>
	      <script type="text/javascript" src="<%=contextPath%>/xip/js/xipWfInternational_en.js"></script>
	    <%}else{ %>
	      <title>流程单元测试界面</title>
	      <script type="text/javascript" src="<%=contextPath%>/xip/js/xipWfInternational_zh.js"></script>
	    <%} %>
</head>
<body>
<script type="text/javascript" src="processJUnitTest.js"></script>
<script type="text/javascript">
	init_page('<%=request.getContextPath()%>');
</script>
</body>
</html>