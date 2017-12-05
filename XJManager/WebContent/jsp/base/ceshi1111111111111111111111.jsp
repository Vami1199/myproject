<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/jsp/extjs/extjs.jsp" %>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>首页</title>
<!-- <script type="text/javascript">
        Ext.Loader.setPath('Ext.app', 'classes');
    </script> -->
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/example.css" />
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/myCss.css" />
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/page-analyzer.css" />
<script type="text/javascript" src="${pageContext.request.contextPath}/jsCode/ceshi.js"></script>
      <style>
            .add16 {
               background-image: url(../shared/icons/fam/add.png);
            }
            h1 a:link, h1 a:visited {
                color: #046BCA;
            }

            h1 a:hover, h1 a:focus, h1 a:active {
                color: #1C417C;
            }

            div#header {
                height: 65px;
                padding: 25px 0 10px 0;
                width: 1090px;
                margin: 0 50px -5px 50px;
            }
            #main-container {
				margin-left: 30px;
            }
            div#header h1 {
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                font-size: 24px;
                font-weight: 600;
                margin: 0;
            }
            div#header h1 span {
                color: inherit;
                font-family: Helvetica, Arial, sans-serif;
                font-size: 13px;
                font-weight: normal;
                line-height: 30px;
                padding-left: 25px;
            }
            body {
                padding-bottom:10px;
            }
        </style>
        
        
     
</head>
<body>
	
		<div id="grid-example" style="position:absolute;width:1000px;heigth:300px;left:0px;top:0px" ></div>
	 <div>
	 	<!-- <form id="history-form" class="x-hide-display">
     <input type="hidden" id="x-history-field" />
     <iframe id="x-history-frame"></iframe>
 	</form> -->
	 </div>
		
	

    

	
					
</body>
</html>