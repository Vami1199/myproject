<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>首页</title>

<!-- Bootstrap -->
<link href="${pageContext.request.contextPath}/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/bootstrap1.min.css">

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<style>
#weizhi {
	text-align: left;
	height: 60px;
	line-height: 60px;
}
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
								<font color="blue"　>客户信息管理</font>
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
									<li><a href="#">按品种</a></li>
									<li><a href="#">按适用范围</a></li>
									<li><a href="#">是否可用</a></li>
								</ul>
							</div>
							<input type="text" style="height: 30px">
						</div>
					</form>
					<!-- ************************按条件搜索框结束*********************** -->
					<div>
						<a href="#" class="btn btn-primary"><i class="icon-search icon-white"></i>筛选</a> 
						<a href="${pageContext.request.contextPath}/jsp/base/product/add.jsp" class="btn btn-success"><i class="icon-plus icon-white"></i>新增</a>
						<a href="#" class="btn btn-warning"><i class="icon-edit icon-white"></i>修改</a> 
						<a href="#" class="btn btn-danger"><i class="icon-remove icon-white"></i>删除</a>
						<a href="#" class="btn"><i class="icon-remove icon-eye-open"></i>详细信息</a>
					</div>
					<form action="">
					<div>
						<table class="table table-hover table-bordered">
							<tbody bgcolor="#428BCA">
								<tr>
									<td align=center><span style="font-weight: bold;">全选</span></td>
									<td align=center><span style="font-weight: bold;">产品编号</span></td>
									<td align=center><span style="font-weight: bold;">产品名称</span></td>
									<td align=center><span style="font-weight: bold;">煤种</span></td>
									<td align=center><span style="font-weight: bold;">品种</span></td>
									<td align=center><span style="font-weight: bold;">生产单位</span></td>
									<td align=center><span style="font-weight: bold;">适用范围</span></td>
								</tr>
							</tbody>
							<tbody>
								<c:forEach items="${pagination.list}" var="product">
									<tr>
									<td align=center><input type="checkbox" name="ids" value="${product.pId}"></td>
									<td align=center>${product.pId}</td>
									<td align=center>${product.pName}</td>
									<!-- 如果品种类型等于1,就显示烟煤,暂时没有其他数据,先搁浅 -->
									<td align=center>
										<c:if test="${product.pCoaltype == 1}">烟煤</c:if>
									</td>
									<!-- 如果品种类型等于1,就显示动力煤,暂时没有其他数据,先搁浅 -->
									<td align=center>
										<c:if test="${product.pVarieties == 1}">动力煤</c:if>
									</td>					
									<td align=center>${product.pProductionunit }</td>
									<td align=center>
										<c:if test="${product.pApplicationrange == 1}">生产</c:if>
										<c:if test="${product.pApplicationrange == 2}">产销</c:if>
										<c:if test="${product.pApplicationrange == 3}">销售</c:if>
									</td>
								</tr>
								</c:forEach>
							</tbody>
						</table>
					</div>
					</form>
					</br>
					
					<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
					<script src="${pageContext.request.contextPath}/js/jquery.min.js"></script>
					<!-- Include all compiled plugins (below), or include individual files as needed -->
					<script src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
					</div>
				</div>
			</div>
		</div>
<div align="center">
	<!-- 分页 -->
	<c:forEach items="${pagination.pageView }" var="page">
		${page}
	</c:forEach>
</div>
</body>
</html>