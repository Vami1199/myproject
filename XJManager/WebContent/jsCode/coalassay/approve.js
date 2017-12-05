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
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [
		         {name: 'spId' ,type: 'string'},
		         {name: 'spSource' ,type: 'string'},
		         {name: 'spProduct' ,type: 'string'},
		         {name: 'spBatch' ,type: 'string'},
		         {name: 'spReciever' ,type: 'string'},
		         {name: 'spCollecter' ,type: 'string'},
		         {name: 'spProducer' ,type: 'string'},
		         {name: 'spCstart',type:'date', dateFormat:'n/j h:i'},
		         {name: 'spCend',type:'date', dateFormat:'n/j h:i'},
		         {name: 'spPstart' ,type:'date', dateFormat:'n/j h:i'},
		         {name: 'spPend' ,type:'date', dateFormat:'n/j h:i'},
		         {name: 'spState' ,type:'byte'}
		         ]        
	});
    //定义数据源将被引入到对应的列中
    var myData = [
        ['xxx','xxx','xxx','xxx','xxx','xxx','xxx','9/1 12:00','9/1 12:00','9/1 12:00','9/1 12:00',1]
      
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
        title:'审批煤样化验单 ',
        //引入仓库
        store: store,
        //引入选择框
        selModel: sm,
        //定义列
        columns: [
            {
                id:'',
                text: '煤样编号',
                sortable: true,
                //与定义的类中的属性匹配
                dataIndex: 'spId',
                flex: 0,
                width: 75,
            },
            {
            	id:'',
            	text: '矿别',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spSource',
            	flex: 0,
            	width: 75,
            },
            {
            	id:'',
            	text: '产品名称',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spProduct',
            	flex: 0,
            	width: 75,
            },
            {
            	id:'',
            	text: '批次',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spBatch',
            	flex: 0,
            	width: 75,
            },
            {
            	id:'',
            	text: '收货单位',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spReciever',
            	flex: 0,
            	width: 75,
            },
            {
            	id:'',
            	text: '采样人',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spCollecter',
            	flex: 0,
            	width: 75,
            },
            {
            	id:'',
            	text: '制样人',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spProducer',
            	flex: 0,
            	width: 75,
            },
            {
            	id:'',
            	text: '采样开始时间',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spCstart',
                renderer: Ext.util.Format.dateRenderer('m/d/Y'),
            	flex: 0,
            	width: 75,
            },
            {
            	id:'',
            	text: '采样结束时间',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spCend',
            	renderer: Ext.util.Format.dateRenderer('m/d/Y'),
            	flex: 0,
            	width: 75,
            },
            
            {
            	id:'',
            	text: '制样接样时间',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spPstart',
            	renderer: Ext.util.Format.dateRenderer('m/d/Y'),
            	flex: 0,
            	width: 75,
            },
            {
            	id:'',
            	text: '制样结束时间',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spPend',
            	renderer: Ext.util.Format.dateRenderer('m/d/Y'),
            	flex: 0,
            	width: 75,
            },
            {
            	id:'',
            	text: '状态',
            	sortable: true,
            	//与定义的类中的属性匹配
            	dataIndex: 'spState',
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
