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
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-3">
				<!-- 列表start -->
				<div class="list-group">
					<span style="font-weight: bold;">请输入筛选条件：</span><hr>
					<form class="form-horizontal" role="form">
						<div class="form-group" id="form">
							<div class="col-sm-10">
								产品编号： <input type="text" class="form-control" id="firstname">
							</div>
							<div class="col-sm-10">
								产品名称： <input type="text" class="form-control" id="firstname">
							</div>
							<div class="col-sm-10">
								煤种: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <select>
									<option>--请选择--</option>
									<option value="option1">烟煤</option>
									<option value="option2" selected="selected">碳煤</option>
									<option value="option3">矿煤</option>
								</select>
							</div>
							<div class="col-sm-10">
								品种: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <select>
									<option>--请选择--</option>
									<option value="option1">动力煤</option>
									<option value="option2" selected="selected">热量煤</option>
									<option value="option3">经济煤</option>
								</select>
							</div>							
							<div class="col-sm-10">
								使用范围: &nbsp&nbsp&nbsp <select>
									<option>--请选择--</option>
									<option value="option1">生活</option>
									<option value="option2" selected="selected">生产</option>
									<option value="option3">军事</option>
								</select>
							</div>
							<div class="col-sm-10">
								可用: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <select>
									<option>--请选择--</option>
									<option value="option1">否</option>
									<option value="option2" selected="selected">是</option>
								</select>
							</div>							
						</div>
						<hr>
						<div class="form-group">
							<div class="col-sm-offset-2 col-sm-10">								
								<button type="submit" class="btn btn-primary">确认</button>								
								<button type="submit" class="btn btn-primary">取消</button>
							</div>
						</div>
					</form>
				</div>
				<!-- 列表 end-->
			</div>
			<div class="col-sm-8">
				<iframe src="ShaiXuanCPGCZhanShi.jsp" frameborder="0" width="100%"
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
