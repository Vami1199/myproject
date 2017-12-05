Ext.Loader.setConfig({enabled: true});

//设置路径
Ext.Loader.setPath('Ext.ux', '../../common/ux/');

//定义需要的插件
Ext.require([
    'Ext.data.*',
    'Ext.grid.*',
    'Ext.util.*',
    'Ext.tip.QuickTipManager',
    'Ext.ux.data.PagingMemoryProxy',
    'Ext.ux.ProgressBarPager',
    'Ext.selection.CheckboxModel',
    'Ext.ux.RowExpander',
    'Ext.selection.CellModel',
    'Ext.ux.CheckColumn',
    'Ext.state.*',
    'Ext.form.*'
]);

Ext.onReady(function(){
	// register model
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [
		         {name: 'eId',type:'integer'},
		         {name: 'eFlag',type:'byte'},
		         {name: 'yuandanbianhao',type:'string'},
		         {name: 'chaidanbianhao',type:'string'},
		         {name: 'eFulldate',type:'date', dateFormat:'n/j h:i'},
		         {name: 'eSource',type:'string'},
		         {name: 'eCartype',type:'string'},
		         {name: 'eCarnum',type:'string'},
		         {name: 'eWargon',type:'integer'},
		         {name: 'eEmptytime',type:'string'},
		         {name: '毛重',type:'integer'},
		         {name: 'eFulltime',type:'string'},
		         {name: '净重',type:'integer'},
		         {name: 'deProduct',type:'string'},
		         {name: '收货单位',type:'string'},
		         {name: 'eOrdernum',type:'string'},
		         {name: 'eCondition',type:'byte'},
		         ]        
	});
    //定义数据源将被引入到对应的列中
    var myData = [
        [66666,0,'xxx','xxx','9/1 12:00','xx','xx','xx',88888,'xx',22,'xx',33,'xx','xx','xx',0]
      
    ];
    
    //初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
    Ext.tip.QuickTipManager.init();
    
    //想当于一个仓库 存储各种对像的
    var store = Ext.create('Ext.data.Store', {
        model: 'PMonthrequest',
        remoteSort: true,
        //每页显示的数据
        pageSize: 5,
        proxy: {
            type: 'pagingmemory',
            //引入数据源
            data: myData,
            reader: {
                type: 'array'
            }
        }
    });
    
    
    //定义选择框
    var sm = Ext.create('Ext.selection.CheckboxModel');
    //定义grid
    var grid = Ext.create('Ext.grid.Panel', {
    	//grid 的标题
        title:'过磅单记账',
        //引入仓库
        store: store,
        //引入选择框
        selModel: sm,
        //定义列
        columns: [
            {
            	text: '编号',
            	sortable: true,
            	dataIndex: 'eSource',
            	flex: 0,
            	width: 75,
            },
            {
            	text: '矿别',
            	sortable: true,
            	dataIndex: 'eSource',
            	flex: 0,
            	width: 75,
            },
            {
            	text: '过磅日期',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'eFulldate',
                renderer: Ext.util.Format.dateRenderer('m/d/Y'),
            	flex: 0,
            	width: 75,
            },
            {
            	text: '收货单位',
            	sortable: true,
            	dataIndex: 'eSource',
            	flex: 0,
            	width: 75,
            },
            {
            	text: '发往地点',
            	sortable: true,
            	dataIndex: 'eSource',
            	flex: 0,
            	width: 75,
            },
            {
            	text: '库房',
            	sortable: true,
            	dataIndex: 'eSource',
            	flex: 0,
            	width: 75,
            },
            {
            	text: '运输类型',
            	sortable: true,
            	dataIndex: 'eSource',
            	flex: 0,
            	width: 75,
            },
            {
            	text: '车型',
            	sortable: true,
            	dataIndex: 'eSource',
            	flex: 0,
            	width: 75,
            },
            {
            	text: '载重',
            	sortable: true,
            	dataIndex: 'eSource',
            	flex: 0,
            	width: 75,
            },
            {
            	text: '车号',
            	sortable: true,
            	dataIndex: 'eSource',
            	flex: 0,
            	width: 75,
            },
            {
            	text: '承运人',
            	sortable: true,
            	dataIndex: 'eSource',
            	flex: 0,
            	width: 75,
            },
            {
            	text: '皮重',
            	sortable: true,
            	dataIndex: 'eSource',
            	flex: 0,
            	width: 75,
            },
            {
            	text: '毛重',
            	sortable: true,
            	dataIndex: 'eSource',
            	flex: 0,
            	width: 75,
            },
            {
            	text: '净重',
            	sortable: true,
            	dataIndex: 'eSource',
            	flex: 0,
            	width: 75,
            },
            {
            	text: '计量单位',
            	sortable: true,
            	dataIndex: 'eSource',
            	flex: 0,
            	width: 75,
            },
            
            
         
            {
            	//定义每列数据删除按钮
            		text: '快速删除',
                    xtype: 'actioncolumn',
                    title:'快速删除',
                    width:75,
                    sortable: false,
                    items: [{
                        icon: '../../common/shared/icons/fam/delete.gif',
                        tooltip: 'Delete Plant',
                        handler: function(grid, rowIndex, colIndex) {
         					Ext.MessageBox.confirm(   
         					 "请确认"  
         					  ,"确定删除吗？"  
         					  ,function( button,text ){  
         						 if( button == 'yes'){  
         					      store.removeAt(rowIndex); 
         						 }  
         					  }   
         					);        
                        }
                    }]
                }
           
            
            ],
       
       
       //table边框的设定
        stripeRows: true,
        height:320,
        width:'auto',
        frame:false,
        
        
        bbar: Ext.create('Ext.PagingToolbar', {
            pageSize: 10,
            store: store,
            displayInfo: true,
            plugins: Ext.create('Ext.ux.ProgressBarPager', {})
        }),
    });

    //将table放入制定的div中
    grid.render('grid-example');
    //重新提交新的参数请求数据；
    store.load();
});



















/***********************************************************************************************/
/***********************************************************************************************/

/*// example of custom renderer function
function change(val){
	if(val > 0){
		return '<span style="color:green;">' + val + '</span>';
	}else if(val < 0){
		return '<span style="color:red;">' + val + '</span>';
	}
	return val;
}

// example of custom renderer function
function pctChange(val){
if(val > 0){
	return '<span style="color:green;">' + val + '%</span>';
}else if(val < 0){
	return '<span style="color:red;">' + val + '%</span>';
}
return val;
}*/
