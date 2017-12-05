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
	
	<span style="font-weight: bold;">当前位置：运销管理系统------->运销合同管理------->变更销售合同</span>
	<hr>
	<div>
		<div>
			<button type="button" class="btn btn-large">新增</button>
			<button type="button" class="btn btn-large">取消关联</button>
			<button type="button" class="btn btn-large">合同完成</button>
			<button type="button" class="btn btn-large">合同终止</button>

		</div>
	</div>

	<div>
		<table width="100%" border="1" bgcolor="#F5F5F5"
			style="border-collapse: separate; border-spacing: 0px 0px;">
			<tbody bgcolor="#428BCA">
				<tr>
					<td align=center><span style="font-weight: bold;">合同编号</span></td>
					<td align=center><span style="font-weight: bold;">客户名称</span></td>
					<td align=center><span style="font-weight: bold;">申请人</span></td>
					<td align=center><span style="font-weight: bold;">申请人所属单位</span></td>
					<td align=center><span style="font-weight: bold;">原因代码</span></td>
					<td align=center><span style="font-weight: bold;">变更部门</span></td>
					<td align=center><span style="font-weight: bold;">变更人</span></td>
					<td align=center><span style="font-weight: bold;">变更时间</span></td>
					<td align=center><span style="font-weight: bold;">状态</span></td>
				</tr>
			</tbody>
			<tbody>
				<tr>
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