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
								<font color="blue"　>当前位置：维护重车过磅记录</font>
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
									<li><a href="#">按编号</a></li>
								</ul>
							</div>
							<input type="text" style="height: 20px">
						</div>
					</form>
					<!-- ************************按条件搜索框结束*********************** -->
					<div>
						<a href="#" class="btn btn-info"><i class="icon-star icon-white"></i>红冲</a>
					</div>

					<form action="">
						<div>
							<table class="table table-hover table-bordered">
								<tbody bgcolor="#428BCA">
									<tr>
										<td align=center><span style="font-weight: bold;">全选</span></td>
										<td align=center><span style="font-weight: bold;">编号</span></td>
										<td align=center><span style="font-weight: bold;">红蓝标记</span></td>
										<td align=center><span style="font-weight: bold;">原单编号</span></td>
										<td align=center><span style="font-weight: bold;">拆单编号</span></td>
										<td align=center><span style="font-weight: bold;">矿别</span></td>
										<td align=center><span style="font-weight: bold;">过磅日期</span></td>
										<td align=center><span style="font-weight: bold;">收货单位</span></td>
										<td align=center><span style="font-weight: bold;">发往地点</span></td>
										<td align=center><span style="font-weight: bold;">库房</span></td>
										<td align=center><span style="font-weight: bold;">运输类型</span></td>
										<td align=center><span style="font-weight: bold;">车型</span></td>
										<td align=center><span style="font-weight: bold;">载重</span></td>
										<td align=center><span style="font-weight: bold;">车号</span></td>
										<td align=center><span style="font-weight: bold;">承运人</span></td>
										<td align=center><span style="font-weight: bold;">皮重</span></td>
										<td align=center><span style="font-weight: bold;">计量单位</span></td>
										<td align=center><span style="font-weight: bold;">累计发车量</span></td>
										<td align=center><span style="font-weight: bold;">订单结余量</span></td>
										<td align=center><span style="font-weight: bold;">过磅物品</span></td>
										<td align=center><span style="font-weight: bold;">记账状态</span></td>
										<td align=center><span style="font-weight: bold;">磅单状态</span></td>
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