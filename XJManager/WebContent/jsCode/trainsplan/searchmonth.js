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
	
	
	//////////////////////////////////////////////////////
	var searchFormpanel = Ext.create('Ext.form.Panel', {
		region: 'west',
		plain: true,
		border: 0,
		borderColor: 'red',
		bodyPadding: 1,
		width: 400,

		//表单发送的到的action路径
		url: '',
		//默认设置
		fieldDefaults: {
			labelWidth: 70,
			anchor: '100%'
		},
		//布局,vbox是竖排,hbox是横排
		layout: {
			type: 'vbox',
			align: 'stretch' // Child items are stretched to full width
		},

		items: [{
				xtype: 'textfield',
				fieldLabel: '年份',
			}, {
				xtype: 'textfield',
				fieldLabel: '月份',
			}, {
				xtype: 'datefield',
				fieldLabel: '计划日期',
			}, {
				xtype: 'textfield',
				fieldLabel: '计划标志',
			}, {
				xtype: 'textfield',
				fieldLabel: '铁路局',
			}, {
				xtype: 'textfield',
				fieldLabel: '计划员',
			}, {
				xtype: 'textfield',
				fieldLabel: '制定人',
			}, {
				xtype: 'textfield',
				fieldLabel: '状态',
			},

		],
		dockedItems: [{
			xtype: 'toolbar',
			dock: 'bottom',
			ui: 'footer',
			layout: {
				pack: 'center'
			},
			items: [{

				minWidth: 80,
				text: '保存'
			}, {
				minWidth: 80,
				text: '取消'
			}]
		}]

	});
	//////////////////////////////////////////////////////
	var panelnew = Ext.create("Ext.panel.Panel", {
			floating: true,
			title: '筛选',
			closable: true,
			closeAction: 'hide',
			width: 410,
			height: 400,
			tools: [{
				type: 'pin'
			}],
			layout: {
				type: 'border',
				padding: 5
			},
			constrain: true,
			//模态窗体  
			modal: true,
			hidden: true,
			//模态窗体  
			plain: true,
			//滚动条设置  
			autoScroll: true,
			items: [{
					region: 'north',
					items: [searchFormpanel],
					width: 200,
					split: true,
					//是否可缩小
					floatable: false,
				},

			]
		})
	
	// register model
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [
		         {name: 'mId' ,type: 'string'},
		         {name: 'mYear', type: 'string'},
		         {name: 'mMonth', type: 'string'},
		         {name: 'mDate',type:'date', dateFormat:'n/j h:i'},
		         {name: 'mFlag',type:'byte'},
		         {name: 'mAdminid',type:'integer'},
		         {name: 'mUser',type:'string'},
		         {name: 'createby',type:'string'},
		         {name: 'modifyby',type:'string'},
		         {name: 'createdate',type:'date',dateFormat:'n/j h:i'},
		         {name: 'mRemark',type:'string'},
		         {name: 'mTrains',type:'Integer'},
		         {name: 'mRnumber',type:'Integer'},
		         {name: 'mRealtrain',type:'Integer'},
		         {name: 'mRealweight',type:'long'},
		         {name: 'mState',type:'Byte'}
		         ]        
	});
    //定义数据源将被引入到对应的列中
    var myData = [
        ['xxx','1991','xxx','9/1 12:00','xxx',66,'xx',66,'xx','xxx','xxx','9/10 12:00','xxx','xxx']
      
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
        title:'铁路核减月请车计划',
        //引入仓库
        store: store,
        //引入选择框
        selModel: sm,
        //定义列
        columns: [{
                id:'',
                text: '计划编号',
                sortable: true,
                //与定义的类中的属性匹配
                dataIndex: 'mId',
                flex: 0,
                width: 75,
                //鼠标点击时能够编辑
            },{
                text: '年份',
                sortable: true,
                /*renderer: Ext.util.Format.usMoney,*/
                dataIndex: 'mYear',
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
            },{
                text: '月份',
                sortable: true,
                dataIndex: 'mMonth',
                width: 75,
            },{
                text: '申请日期',
                sortable: true,
                //格式化日期
                renderer: Ext.util.Format.dateRenderer('m/d/Y'),
                dataIndex: 'mDate',
                width: 75,
            },{
                text: '计划标志',
                sortable: true,
                dataIndex: 'mFlag',
                width: 75,
            },{
	            text: '单位名称',
	            sortable: true,
	            dataIndex: 'mAdminid',
	            width: 75,
            },
            {
                text: '铁路局',
                sortable: true,
                dataIndex: 'mUser',
                width: 75,
            },
            {
                text: '计划员',
                sortable: true,
                dataIndex: 'createby',
                width: 75,
            },
            {
                text: '制定人',
                sortable: true,
                dataIndex: 'modifyby',
                width: 75,
            },
            {
                text: '制定日期',
                sortable: true,
                dataIndex: 'createdate',
                width: 75,
                renderer: Ext.util.Format.dateRenderer('m/d/Y'),
            },
            {
                text: '制定单位',
                sortable: true,
                dataIndex: 'mRemark',
                width: 75,
            },
            {
                text: '申请车数',
                sortable: true,
                dataIndex: 'mTrains',
                width: 75,
            },
            {
                text: '确认车数',
                sortable: true,
                dataIndex: 'mRnumber',
                width: 75,
            },
            {
                text: '实发车数',
                sortable: true,
                dataIndex: 'mRealtrain',
                width: 75,
            },
            {
                text: '实发吨数',
                sortable: true,
                dataIndex: 'mRealweight',
                width: 75,
            },
            {
                text: '状态',
                sortable: true,
                dataIndex: 'mState',
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
            
        dockedItems: [
        	{
            xtype: 'toolbar',
            items: [{
                text:'筛选',
                tooltip:'',
                iconCls:'search',
                listeners: {
						'click': function() {
							panelnew.show();
						}
					}
            }
            ]
       }],
       
       //table边框的设定
        stripeRows: true,
        height:320,
        width:1200,
        frame:false,
        
        bbar: Ext.create('Ext.PagingToolbar', {
            pageSize: 5,
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
