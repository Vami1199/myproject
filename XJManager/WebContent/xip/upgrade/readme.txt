1： upgrade目录下的文件夹以平台上注册的各个应用编码命名 ,每个应用目录下有固定两个目录diffData和wb。这两个目录分别存放当前版本最新的差异化数据和WB6备份文件。且每个应用下的文件夹以各个版本的版本号命名; upgrade目录下可能包含多个  "应用编码.properties" 属性文件(例如：XIP.properties)。

2： 每个版本下包括三个目录分别为:crudObj、ddlObj、initData
	2-1: crudObj和ddlObj目录目前支持两种数据库类型的脚本,分别为oracle和mysql数据库; 
		   文件命令规则为oracle数据库脚本为oracle.txt, mysql数据库脚本命名为mysql.txt;
		 oracle.txt与mysql.txt文件内命令的分隔符为 ";" 。
		 
		 注意：ddlObj目录下的脚本文件内容必须UTF-8无BOM格式 （使用UltraEdit将上的txt文件另存为UTF-8无BOM格式；
		 					或者使用Notepad++打开上边的txt文件执行如下操作“格式-->以UTF-8无BOM格式编码”，修改后将txt文本进行保存）。
		 		   crudObj目录下的脚本文件内容中不能含有commit语句。
		 		   ddlObj和crudObj脚本文件内容中不能存在SQL注释语句。
		 
	2-2: initData目录可以包含多个JSON文件, 命名规则为：xxx.tableName.json; 
	                 其中xxx的取值范围为自然数，系统对此目录下文件的执行顺序遵循xxx从小到大方式排序后执行。
	                 
	2-3：  diffData目录可以包含多个文本文件, 命名规则为: xxx.txt。
	
	2-4: wb目录包含WebBuilder模块信息文件(可保护多个); 命名规则为:xxx.gz ; 例如XIP2.0.gz。
	
3: version.properties文件说明:
	3-1： lastedVersion : 系统最新的稳定版本号
	3-2 ：updatedDate  ： 系统最新的稳定版本号更新时间
	3-3： verSerialNumber ： 系统各个版本与序列号关系值 （ 例如：1.1.2-1;1.1.3-2;1.1.4-3;1.1.5-4;1.1.6-5）， 
	                  各个版本号分号作为分隔符, 版本的序列号依次递增。