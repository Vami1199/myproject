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
							<h2 class="brand">
								<font color="blue"　>铁路分局管理</font>
							</h2>
						</div>
					</div>
					<hr>
					<br> <br>
					<!-- ************************按条件搜索框*********************** -->
					<form class="bs-docs-example">
						<div class="input-prepend">
							<div class="btn-group">
								<button tabindex="-1" class="btn">查询全部</button>
								<button tabindex="-1" data-toggle="dropdown"
									class="btn dropdown-toggle">
									<span class="caret"></span>
								</button>
								<ul class="dropdown-menu">
									<li><a href="#">按路局</a></li>
								</ul>
							</div>
							<input type="text" style="height: 30px">
						</div>
					</form>
					<!-- ************************按条件搜索框结束*********************** -->
					<div>
						<a href="${pageContext.request.contextPath}/jsp/base/product/add.jsp" class="btn btn-success"><i class="icon-plus icon-white"></i>新增</a>
						<a href="#" class="btn btn-warning"><i class="icon-edit icon-white"></i>修改</a> 
						<a href="#" class="btn btn-danger"><i class="icon-remove icon-white"></i>删除</a>						<a href="#" class="btn"><i class="icon-remove icon-eye-open"></i>详细信息</a>
					</div>
					<form action="">
					<div>
			<table class="table table-hover table-bordered">
	<div>
		<table width="100%" border="1" bgcolor="#F5F5F5"
			style="border-collapse: separate; border-spacing: 0px 0px;">
			<tbody bgcolor="#428BCA">
				<tr>
					<td align=center><span style="font-weight: bold;">全选</span></td>
					<td align=center><span style="font-weight: bold;">铁路分局编号</span></td>
					<td align=center><span style="font-weight: bold;">铁路分局名称</span></td>
					<td align=center><span style="font-weight: bold;">铁路局</span></td>
					<td align=center><span style="font-weight: bold;">是否关键分局</span></td>
					<td align=center><span style="font-weight: bold;">备注</span></td>
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
				</tr>
				<tr>
					<td align=center><input type="checkbox"></td>
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

				</tr>
			</tbody>
		</table>
		</table>
		</div>
		
	</div>
	<div style="text-align: center">
		<button id="first" type="button" class="btn btn-primary">首页</button>
		<button id="pre" type="button" class="btn btn-primary">上一页</button>
		<button id="next" type="button" class="btn btn-primary">下一页</button>
		<button id="end" type="button" class="btn btn-primary">尾页</button>

	</div>
	</div>
	</div>
	</div>


	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="${pageContext.request.contextPath}/js/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
</body>
</html>