<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%> 

<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>首页</title>

    <!-- Bootstrap -->
    <link href="${pageContext.request.contextPath}/css/bootstrap.min.css" rel="stylesheet">
    <!-- <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/bootstrap1.min.css"> -->

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  	<style>
  		
  	</style>
  </head>
  <body>	
  	<span style="font-weight: bold;">产品构成参数：</span><hr>
  	<div>
  		<a href="XinZhengCPGC.jsp"><button id="first" type="button" class="btn btn-primary" >新增</button></a> 		
  		<a href="XinZhengCPGC.jsp"><button id="first" type="button" class="btn btn-primary" >修改</button></a> 		
  		<a href=""><button id="first" type="button" class="btn btn-primary" >删除</button></a> 		
  	</div>
   			
  	<div>
  		<table width="100%" border="1" bgcolor="#F5F5F5"
		style="border-collapse: separate; border-spacing: 0px 0px;">
			<tbody bgcolor="#428BCA">
				<tr>
					<td align=center><span style="font-weight: bold;">序列</span></td>	
					<td align=center><span style="font-weight: bold;">构成产品编号</span></td>
					<td align=center><span style="font-weight: bold;">构成产品名称</span></td>
					<td align=center><span style="font-weight: bold;">构成产品煤种</span></td>					
					<td align=center><span style="font-weight: bold;">构成产品品种</span></td>					
					<td align=center><span style="font-weight: bold;">备注</span></td>															
				</tr>
			</tbody>
			<tbody>
				<tr>
					<td align=center>xx</td>
					<td align=center>xx</td>
					<td align=center>xx</td>
					<td align=center>xx</td>
					<td align=center>xx</td>
					<td align=center>xx</td>		
				</tr>
				
	  		</tbody>
  		</table>
 	</div>
  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>