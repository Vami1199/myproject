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
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/bootstrap1.min.css">

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
	<div class="bs-docs-example">
		<div class="navbar">
			<div class="navbar-inner">
                <div class="container">
			<div align="center">
				<div>
				<h2 class="brand" ><font color="blue"　>审批销售合同</font></h2>
				</div>
			</div>
					<hr>
					<br>
					<br>
					<div>
						 	<a href="#" class="btn"><i></i>审批</a>
							<a href="#" class="btn"><i></i>审批意见</a>
							<a href="#" class="btn"><i></i>查看附件</a> 
							<a href="#" class="btn"><i></i>详细信息</a>
					</div>

					
	<div>
	<form action="">	<div>
		<table width="100%" border="1" bgcolor="#F5F5F5"
			style="border-collapse: separate; border-spacing: 0px 0px;">
			<tbody bgcolor="#428BCA">
				<tr>
					<td align=center><span style="font-weight: bold;">全选</span></td>
					<td align=center><span style="font-weight: bold;">合同年份</span></td>
					<td align=center><span style="font-weight: bold;">合同编号</span></td>
					<td align=center><span style="font-weight: bold;">合同类别</span></td>
					<td align=center><span style="font-weight: bold;">客户名称</span></td>
					<td align=center><span style="font-weight: bold;">合同总量</span></td>
					<td align=center><span style="font-weight: bold;">实发总量</span></td>
					<td align=center><span style="font-weight: bold;">所属行业</span></td>
					<td align=center><span style="font-weight: bold;">运输方式</span></td>
					<td align=center><span style="font-weight: bold;">是否变更</span></td>
					<td align=center><span style="font-weight: bold;">合同标记</span></td>
					<td align=center><span style="font-weight: bold;">经办人</span></td>
					<td align=center><span style="font-weight: bold;">状态</span></td>
				</tr>
			</tbody>
			<tbody>
				<tr>
					<td align=center><input type="checkbox"></td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
				</tr>
				<tr>
					<td align=center><input type="checkbox"></td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
				</tr>
				<tr>
					<td align=center><input type="checkbox"></td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
					<td align=center>xxx</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div style="text-align: center">
		<button id="first" type="button" class="btn btn-primary">首页</button>
		<button id="pre" type="button" class="btn btn-primary">上一页</button>
		<button id="next" type="button" class="btn btn-primary">下一页</button>
		<button id="end" type="button" class="btn btn-primary">尾页</button>

	</div>
	</div>



	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="js/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/bootstrap.min.js"></script>
</body>
</html>