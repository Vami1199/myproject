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
  <body style="color:blue">
  <h3 class="text-center">添加产品</h3>
  <div align="center"">	
  	<form class="form-horizontal" role="form">
	  <table class="table">
	  		<tr>
	  			<td>产品编号：</td>
	  			<td><input type="text" id="firstname"></td>
	  			<td></td>
	  		</tr>
	  			
	  		<tr>
	  			<td>产品名称：</td>
	  			<td><input type="text" id="firstname"></td>
	  			<td></td>
	  		</tr>
	  		<tr>
	  			<td>煤种:</td>
	  		<td>
	  		<select>
     		  <option>--请选择--</option>  
			  <option value="option1">烟煤</option>  
			  <option value="option2">碳煤</option>  
			  <option value="option3">矿煤</option>  
	        </select>
	        </td>
	        <td></td>
	  		</tr>
	  		<tr>
	  			<td>品种:</td>
	  			<td><select>
     		  <option>--请选择--</option>  
			  <option value="option1">动力煤</option>  
			  <option value="option2">热量煤</option>  
			  <option value="option3">经济煤</option>  	      		  	      		   
	      		</select></td>
	      		<td></td>
	  		</tr>
	  		<tr>
	  			<td>计量单位：</td>
	  			<td><input type="text" id="firstname" placeholder="吨"></td>
	  			<td></td>
	  		</tr>
	  		<tr>
	  			<td>生产单位：</td>
	  			<td><input type="text" id="firstname"><i class="icon-search"></i>筛选</td>
	  		</tr>
	  		<tr>
	  			<td>使用范围:</td>
	  			<td><select>
     		  <option>--请选择--</option>  
			  <option value="option1">生活</option>  
			  <option value="option2">生产</option>  
			  <option value="option3">军事</option>  	      		  	      		   
	      	</select></td>
	      	<td></td>
	  		</tr>
	  		<tr>
	  			<td>可用:</td>
	  			<td>
	  				<select>
     		 		 <option>--请选择--</option>  
			 		 <option value="option1">否</option>  
			  		 <option value="option2">是</option>   	      		  	      		   
	      			</select>
	      		</td>
	      		<td></td>
	  		</tr>
	  		<tr>
	  			<td>备注:</td>
	  			<td colspan="2"><textarea name="comment" form="usrform"></textarea></td>

	  		</tr>
	  		<tr>
	  			<td><button type="submit" class="btn btn-primary">确认</button></td>
	  			<td><button type="reset" class="btn btn-primary">取消</button></td>
	  			<td></td>
	  		</tr>
	  		
	  </table>
	   <hr>	  
   </form>
</div>  
  
  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="${pageContext.request.contextPath}/js/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
  </body>
</html>