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
<link href="${pageContext.request.contextPath}/css/bootstrap1.min.css"
	rel="stylesheet">
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


	<div class="bs-docs-example">
		<div class="navbar">
			<div class="navbar-inner">
				<div class="container">
					<div align="center">
						<div>
							<h2 class="brand">
								<font color="blue"　>当前位置：查询客户购煤情况</font>
							</h2>
						</div>
					</div>
					<hr>
					<br> <br>

					<div>
						<a href="#" class="btn btn-primary"><i
							class="icon-search icon-white"></i>筛选</a> <a href="#" class="btn"><i
							class="icon-remove icon-eye-open"></i>详细信息</a>
					</div>

					<form action="">
						<div>
							<table class="table table-hover table-bordered">
								<tbody bgcolor="#428BCA">
									<tr>
										<td align=center><span style="font-weight: bold;">全选</span></td>
										<td align=center><span style="font-weight: bold;">客户编码</span></td>
										<td align=center><span style="font-weight: bold;">客户简称</span></td>
										<td align=center><span style="font-weight: bold;">客户全称</span></td>
										<td align=center><span style="font-weight: bold;">煤种</span></td>
										<td align=center><span style="font-weight: bold;">总购煤量</span></td>
										<td align=center><span style="font-weight: bold;">总发煤量</span></td>
										<td align=center><span style="font-weight: bold;">末发量</span></td>
										<td align=center><span style="font-weight: bold;">最后操作人员</span></td>
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
					</form>
				</div>
			</div>
			<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
			<script src="${pageContext.request.contextPath }/js/jquery.min.js"></script>
			<!-- Include all compiled plugins (below), or include individual files as needed -->
			<script src="${pageContext.request.contextPath }/js/bootstrap.min.js"></script>
		</div>
	</div>
</body>
</html>