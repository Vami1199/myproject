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
<link href="${pageContext.request.contextPath}/css/bootstrap.min.css" rel="stylesheet">
<script src="${pageContext.request.contextPath}/js/jquery.min.js"></script>
<script src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
</head>
<body>
	批量新增<hr>
	<button id="btn" class="btn btn-primary" onclick="quanxuan()">全选</button>
	<button id="btn1" class="btn btn-primary" onclick="quxiaoquanxuan()">取消全选</button>
	<div>
		<table width="100%" border="1" bgcolor="#F5F5F5"
			style="border-collapse: separate; border-spacing: 0px 0px;">
			<tbody bgcolor="#428BCA">
				<tr>
					<td align=center><span style="font-weight: bold;">选择</span></td>
					<td align=center><span style="font-weight: bold;">参数名称</span></td>
					<td align=center><span style="font-weight: bold;">参数值</span></td>
					<td align=center><span style="font-weight: bold;">备注</span></td>
				</tr>
			</tbody>
			<tbody>
				<tr>
					<td align=center><input type="checkbox"></td>
					<td align=center>全水分Mt（%）</td>
					<td align=center><input type="text"><font size="3"
						color="red">*</font></td>
					<td align=center><input type="text"><font size="3"
						color="red">*</font></td>
				</tr>
				<tr>
					<td align=center><input type="checkbox"></td>
					<td align=center>灰分Ad（%）</td>
					<td align=center><input type="text"><font size="3"
						color="red">*</font></td>
					<td align=center><input type="text"><font size="3"
						color="red">*</font></td>
				</tr>
				<tr>
					<td align=center><input type="checkbox"></td>
					<td align=center>xxx（%）</td>
					<td align=center><input type="text"><font size="3"
						color="red">*</font></td>
					<td align=center><input type="text"><font size="3"
						color="red">*</font></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div style="text-align: center">
		<button id="first" type="button" class="btn btn-primary">首页</button>
		<button id="pre" type="button" class="btn btn-primary">上一页</button>
		<button id="next" type="button" class="btn btn-primary">下一页</button>
		<button id="end" type="button" class="btn btn-primary">尾页</button>

	</div><hr>
	<div style="text-align: center">
		<button id="" type="button" class="btn btn-primary" style="background: #894799;">确定</button>
		<button id="" type="button" class="btn btn-primary" style="background: #894799;">取消</button>
	</div>
	<script>
        function quanxuan() {
        	$("input[type='checkbox']").each(function() {  
                this.checked = true;
            })
        }
        function quxiaoquanxuan() {
        	$("input[type='checkbox']").each(function() {  
                this.checked = false;
            })
        }                
	</script>

</body>
</html>