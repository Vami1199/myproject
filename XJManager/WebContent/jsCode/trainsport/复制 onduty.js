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
	var sm = Ext.create('Ext.selection.CheckboxModel');
	var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
	var requiredimportant = '<span style="color:red;font-weight:bold" data-qtip="Required">***</span>';
	/********************************添加相关******************************/
	var formAdd = Ext.create('Ext.form.Panel', {
		bodyStyle: {  
	        background: '#DFE9F6',  
	        padding: '5px',  
	        border: 1  
	    },  

		region: 'west',
		plain: true,
		border: 0,
		bodyPadding: 0,
		autoScroll: true,
		width: 500,
		layout: 'form',
		//表单发送的到的action路径
		url: '',
		//默认设置
		fieldDefaults: {
			anchor: '100%'
		},
		//布局,vbox是竖排,hbox是横排

		items: [{
			layout: 'column',
			frame: true,
			items: [{
					xtype: 'datefield',
					fieldLabel: '日期',
					afterLabelTextTpl: required,
					width: 480,
					name: 'mId',
			},  {
					xtype: 'textfield',
					fieldLabel: '交班',
					afterLabelTextTpl: required,
					width: 480,
			},  {
					xtype: 'textfield',
					fieldLabel: '值班',
					afterLabelTextTpl: required,
					width: 480,
				}, {
					xtype: 'textarea',
					fieldLabel: '备注',
					width: 480,
				},

			],
		}, ],
	});
	////////////////////////////////////////////////////////
	var AddWin = new Ext.Window({
		autoHight: true,
		modal: true,
		/*closeAction:hide,*/
		items: [], // 这里面放你的表单。 
		closeAction: 'close', //这里写成 'hide' 
		/***********************表单设计结束*********************/
		buttons: [{
			text: "保存",
			iconCls: "btn-save",
			handler: function() {}
		}, {
			text: "重置",
			iconCls: "reset",
			handler: function() {}
		}]
	});
	/********************************添加相关结束******************************/
	
	// register model
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [
		         {name: 'wDate', type: 'date',dateFormat:'n/j h:i'},
		         {name: 'wTurner', type: 'string'},
		         {name: 'wOnwork', type: 'string'},
		         {name: 'ahUser', type: 'string'},
		         {name: 'ahDepartment', type: 'string'},
		         {name: 'ahSettime', type: 'date',dateFormat:'n/j h:i'},
				 {name: 'wcState',type:'byte'}
		         ]        
	});
    //定义数据源将被引入到对应的列中
    var myData = [
        ['9/1 12:00','xxx','xxx','xxx','xxx','9/10 12:00',1]
      
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
        title:'维护铁运值班记录',
        //引入仓库
        store: store,
        //引入选择框
        selModel: sm,
        //定义列
        columns: [
            {
                text: '日期',
                sortable: true,
                //格式化日期
                renderer: Ext.util.Format.dateRenderer('m/d/Y'),
                dataIndex: 'wDate',
                width: 75,
            },
            {
                text: '交班',
                sortable: true,
                /*renderer: Ext.util.Format.usMoney,*/
                dataIndex: 'wTurner',
                width: 75,
                //鼠标点击时出现下拉框选择编辑的内容
                editor: new Ext.form.field.ComboBox({
                    typeAhead: true,
                    triggerAction: 'all',
                    selectOnTab: true,
                    store: [
                        ['1991','1991'],
                        ['1992','1992'],
                        ['1993','1993'],
                        ['1994','1994'],
                        ['1995','1995']
                    ],
                    lazyRender: true,
                    listClass: 'x-combo-list-small'
                })
            },
            {
                id:'',
                text: '值班',
                sortable: true,
                //与定义的类中的属性匹配
                dataIndex: 'wOnwork',
                flex: 0,
                width: 75,
            },
            {
                id:'',
                text: '制定人',
                sortable: true,
                //与定义的类中的属性匹配
                dataIndex: 'ahUser',
                flex: 0,
                width: 75,
            },
            {
                id:'',
                text: '制定单位',
                sortable: true,
                //与定义的类中的属性匹配
                dataIndex: 'ahDepartment',
                flex: 0,
                width: 75,
            },
            {
                id:'',
                text: '制定日期',
                sortable: true,
                //与定义的类中的属性匹配
                dataIndex: 'ahSettime',
                renderer: Ext.util.Format.dateRenderer('m/d/Y'),
                flex: 0,
                width: 75,
            },
            {
                id:'',
                text: '状态',
                sortable: true,
                //与定义的类中的属性匹配
                dataIndex: 'wcState',
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
            
        // 保存和取消按钮
        dockedItems: [
        //各种按钮布局
        {
            xtype: 'toolbar',
            items: [{
                text:'添加',
                tooltip:'add',
                iconCls:'add',
                listeners: {
								click: function() {
									formAdd.form.reset();
									AddWin.add(formAdd);
									AddWin.show();

								}

							}
            }
            ]
       }],
       
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
