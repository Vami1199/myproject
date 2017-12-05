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
<link href="${pageContext.request.contextPath}/css/bootstrap.min.css"
	rel="stylesheet">

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<style>
.page-header {
	padding-bottom: 1px;
	margin: 2px 0;
}
</style>
</head>
<body>
	<span style="font-weight: bold;">当前位置：运销管理系统------->运销基础数据------->维护数据字典 ：</span>
	<hr>
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-4">
				<!-- 列表start -->	
				<div>
					<div>
						<button type="button" class="btn btn-large" >新增</button>						
						<button type="button" class="btn btn-large">删除</button>		
					</div>
				</div>
				<div>
					<table width="80%" border="1" bgcolor="#F5F5F5"
						style="border-collapse: separate; border-spacing: 0px 0px;">
						<tbody bgcolor="#428BCA">
							<tr>
								<td align=center><span style="font-weight: bold;">产品编号</span></td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							<tr>
								<td align=center>xxx</td>
							</tr>
							

						</tbody>
					</table>
				</div>
			</div>
			<div class="col-sm-8">
				<iframe src="ShuJuZiDianShow.jsp" frameborder="0" width="100%"
					height="1000px" name="et"></iframe>
			</div>
		</div>
	</div>

	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="js/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/bootstrap.min.js"></script>
</body>
</html>