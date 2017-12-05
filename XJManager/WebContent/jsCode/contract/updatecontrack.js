Ext.Loader.setConfig({
    enabled: true
});

//设置路径
Ext.Loader.setPath('Ext.ux', '../../common/ux/');

//定义需要的插件
Ext.require(['Ext.data.*', 'Ext.grid.*', 'Ext.util.*', 'Ext.tip.QuickTipManager', 'Ext.ux.data.PagingMemoryProxy', 'Ext.ux.ProgressBarPager', 'Ext.selection.CheckboxModel', 'Ext.ux.RowExpander', 'Ext.selection.CellModel', 'Ext.ux.CheckColumn', 'Ext.state.*', 'Ext.form.*']);

Ext.onReady(function() {
	
	/*************************创建合同筛选form和graid*************************/
	
	 //创建一个搜索表单
                        var searchFormht = Ext.create('Ext.form.Panel', {
                            region: 'west',
                            plain: true,
                            border: 0,
                            bodyPadding: 5,
                            width: 200,
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
                                fieldLabel: '合同编号',
                            },
                            {
                                xtype: 'combo',
                                store: Ext.create('Ext.data.ArrayStore', {
                                    fields: ['coal'],
                                    data: [['普通'], ['一般'], ['重要']]
                                }),
                                name: '',
                                hiddenName: 'id',
                                // 提交到后台的input的name ，对应下面store里的''id，必须要填
                                emptyText: '-----请选择-----',
                                //map中的键
                                valueField: '',
                                //map中的值 
                                displayField: 'coal',
                                //选中下拉框后再点击面板就会多出一行,不知道有卵子用
                                /*plugins: [ Ext.ux.FieldReplicator ],*/
                                fieldLabel: '合同类别',
                                queryMode: 'local',
                                //数据模式,local代表本地数据模式
                                //tab键是否可以选择当前突出项
                                selectOnTab: false,
                                /****下拉框不可编辑*****/
                                typeAhead: false,
                                editable: false,
                                /****下拉框不可编辑*****/
                                onReplicate: function() {
                                    this.getStore().clearFilter();
                                }
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: '合同年份起:',
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: '合同年份止:',
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: '客户简称',
                            },
                            {
                                xtype: 'combo',
                                store: Ext.create('Ext.data.ArrayStore', {
                                    fields: ['coal'],
                                    data: [['铁运'], ['海运'], ['其他']]
                                }),
                                name: '',
                                hiddenName: 'id',
                                // 提交到后台的input的name ，对应下面store里的''id，必须要填
                                emptyText: '-----请选择-----',
                                //map中的键
                                valueField: '',
                                //map中的值 
                                displayField: 'coal',
                                //选中下拉框后再点击面板就会多出一行,不知道有卵子用
                                /*plugins: [ Ext.ux.FieldReplicator ],*/
                                fieldLabel: '运输方式',
                                queryMode: 'local',
                                //数据模式,local代表本地数据模式
                                //tab键是否可以选择当前突出项
                                selectOnTab: false,
                                /****下拉框不可编辑*****/
                                typeAhead: false,
                                editable: false,
                                /****下拉框不可编辑*****/
                                onReplicate: function() {
                                    this.getStore().clearFilter();
                                }
                            },
                            ],

                            buttons: [{
                                text: "搜索",
                                iconCls: "btn-save",
                                handler: function() {}
                            },
                            {
                                text: "重置",
                                iconCls: "reset",
                                handler: function() {}
                            }]
                        });

                        //创建一个grid
                        Ext.define('companyht', {
                            extend: 'Ext.data.Model',
                            idProperty: '',
                            //定义类的属性
                            fields: [{
                                name: 'coId',
                                type: 'string'
                            },
                            {
                                name: 'coShort',
                                type: 'string'
                            },
                            {
                                name: 'coName',
                                type: 'string'
                            },
                            {
                                name: 'coPhone',
                                type: 'string'
                            },
                            {
                                name: 'coPostcode',
                                type: 'integer'
                            },
                            {
                                name: 'coFax',
                                type: 'string'
                            },
                            {
                                name: 'coLeader',
                                type: 'string'
                            },
                            {
                                name: 'coAddress',
                                type: 'string'
                            },
                            {
                                name: 'coLinkman',
                                type: 'string'
                            }]
                        });

                        //定义数据源将被引入到对应的列中
                        var myDataht = [[]

                        ];

                        //初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
                        Ext.tip.QuickTipManager.init();

                        //想当于一个仓库 存储各种对像的
                        var storeht = Ext.create('Ext.data.Store', {
                            model: 'companyht',
                            remoteSort: true,
                            //每页显示的数据
                            pageSize: 5,
                            proxy: {
                                type: 'pagingmemory',
                                //引入数据源
                                data: myDataht,
                                reader: {
                                    type: 'array'
                                }
                            }
                        });

                        //定义grid
                        var agridht = Ext.create('Ext.grid.Panel', {
                            id: 'agrid',
                            region: 'east',
                            //grid 的标题
                            title: '列表',
                            //引入仓库
                            store: storeht,
                            //定义列
                            columns: [{
                                id: '',
                                text: '合同编号',
                                sortable: true,
                                //与定义的类中的属性匹配
                                dataIndex: 'coId',
                                flex: 0,
                                width: 75,
                            },
                            {
                                text: '合同年份',
                                sortable: true,
                                dataIndex: 'coShort',
                                width: 75
                            },
                            {
                                text: '起始时间',
                                sortable: true,
                                dataIndex: 'coName',
                                width: 75
                            },
                            {
                                text: '截止时间',
                                sortable: true,
                                dataIndex: 'coPhone',
                                width: 75
                            },
                            {
                                text: '客户名称',
                                sortable: true,
                                dataIndex: 'coPostcode',
                                width: 75
                            },
                            {
                                text: '合同总量',
                                sortable: true,
                                dataIndex: 'coFax',
                                width: 75
                            },
                            {
                                text: '实发总量',
                                sortable: true,
                                dataIndex: 'coFax',
                                width: 75
                            },
                            {
                                text: '出卖方单位名称',
                                sortable: true,
                                dataIndex: 'coFax',
                                width: 75
                            },
                            {
                                text: '客户所属行业',
                                sortable: true,
                                dataIndex: 'coFax',
                                width: 75
                            },
                            {
                                text: '客户所属部别',
                                sortable: true,
                                dataIndex: 'coFax',
                                width: 75
                            },
                            {
                                text: '约定周期',
                                sortable: true,
                                dataIndex: 'coFax',
                                width: 75
                            },
                            {
                                text: '每周至少发货量',
                                sortable: true,
                                dataIndex: 'coFax',
                                width: 75
                            },
                            {
                                text: '合同类别',
                                sortable: true,
                                dataIndex: 'coFax',
                                width: 75
                            },
                            {
                                text: '是否以质论价',
                                sortable: true,
                                dataIndex: 'coFax',
                                width: 75
                            },
                            {
                                text: '执行单位',
                                sortable: true,
                                dataIndex: 'coFax',
                                width: 75
                            },
                            {
                                text: '运输方式',
                                sortable: true,
                                dataIndex: 'coFax',
                                width: 75
                            },
                            {
                                text: '是否变更',
                                sortable: true,
                                dataIndex: 'coFax',
                                width: 75
                            },
                            {
                                text: '合同标记',
                                sortable: true,
                                dataIndex: 'coFax',
                                width: 75
                            },
                            {
                                text: '运费负担',
                                sortable: true,
                                dataIndex: 'coFax',
                                width: 75
                            },
                            {
                                text: '质量数量验收标准及方法',
                                sortable: true,
                                dataIndex: 'coFax',
                                width: 75
                            },
                            {
                                text: '煤炭单价',
                                sortable: true,
                                dataIndex: 'coFax',
                                width: 75
                            },
                            {
                                text: '结算方式',
                                sortable: true,
                                dataIndex: 'coFax',
                                width: 75
                            },
                            {
                                text: '合同状态',
                                sortable: true,
                                dataIndex: 'coFax',
                                width: 75
                            }],
                            stripeRows: true,
                            height: 520,
                            width: 1200,
                            frame: false,
                        });
                        
                        
	
    /*********************创建window弹窗表单开始***********************/
    var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
    var addWin = new Ext.Window({
        autoHight: true,
        modal: true,
        /*closeAction:hide,*/
        items: [],
        // 这里面放你的表单。 
        closeAction: 'close',
        //这里写成 'hide' 
        /***********************表单设计结束*********************/
        buttons: [{
            text: "保存",
            iconCls: "btn-save",
            handler: function() {}
        },
        {
            text: "重置",
            iconCls: "reset",
            handler: function() {}
        }]
    });
    /***********************表单设计开始*********************/
    var addForm = Ext.create('Ext.form.Panel', {
        plain: true,
        border: 0,
        bodyPadding: 5,
        width: 380,
        title: '产品添加',
        //表单发送的到的action路径
        url: '/base/productList.do',
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

        items: [

        {

            xtype: "fieldcontainer",
            layout: "hbox",
            items: [{
                xtype: "textfield",
                fieldLabel: "主合同编号",
                afterLabelTextTpl: required,
                flex: 2,
                /*layout: 'column',*/
                value: '',
                //必填项
                //pProductionunit
                name: 'scContractid',
                allowBlank: false,
            },
            {
                xtype: "button",
                icon: '../../common/shared/icons/fam/search.png',
                /************创建单位搜索框开始***********/
                listeners: {
                    click: function() {

                       
                        Ext.create("Ext.window.Window", {
                            title: '搜索',
                            closable: true,
                            closeAction: 'hide',
                            width: 700,
                            minWidth: 350,
                            height: 420,
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
                            //模态窗体  
                            plain: true,
                            //滚动条设置  
                            autoScroll: true,
                            items: [{
                                region: 'west',
                                title: '搜索条件',
                                items: [searchFormht],
                                width: 200,
                                split: true,
                                //是否可缩小
                                collapsible: true,
                                floatable: false
                            },
                            {
                                region: 'center',
                                items: [agridht],
                                width: 200,
                                split: true,
                                floatable: false,
                                autoScroll: true
                            }]
                        }).show();
                    
                    
                    }
                }
                /************创建单位搜索框结束***********/
            }]

        },

        {
            xtype: 'textfield',
            fieldLabel: '客户名称',
            //pId
            name: 'pId',
            // name只是改下拉的名称   
            triggerAction: 'all',
            // 显示所有下列数据，一定要设置属性triggerAction为all
            allowBlank: false,
            tooltip: '填入产品编号'
        },
        {
            xtype: 'textfield',
            fieldLabel: '协议编号',
            afterLabelTextTpl: required,
            //必填项的标识
            //pName
            name: 'pName',
            allowBlank: false,
            tooltip: '填入产品编号'
        },

        {
            xtype: 'combo',
            store: Ext.create('Ext.data.ArrayStore', {
                fields: ['coal'],
                data: [['传真'], ['电话'], ['协议']]
            }),
            //pCoaltype
            name: '',
            hiddenName: 'pCoaltype',
            // 提交到后台的input的name ，对应下面store里的''id，必须要填
            emptyText: '-----请选择-----',
            //map中的键
            valueField: '',
            //map中的值 
            displayField: 'coal',
            //选中下拉框后再点击面板就会多出一行,不知道有卵子用
            /*plugins: [ Ext.ux.FieldReplicator ],*/
            fieldLabel: '申请方式',
            afterLabelTextTpl: required,
            //必填项的标识
            queryMode: 'local',
            //数据模式,local代表本地数据模式
            //tab键是否可以选择当前突出项
            selectOnTab: false,
            /****下拉框不可编辑*****/
            typeAhead: false,
            editable: false,
            onReplicate: function() {
                this.getStore().clearFilter();
            }
        },
        {
            xtype: 'textfield',
            fieldLabel: '申请人',
            afterLabelTextTpl: required,
            //必填项的标识
            //pName
            name: 'pName',
            allowBlank: false,
            tooltip: '填入产品编号'
        },
        {
            xtype: 'textfield',
            fieldLabel: '申请人所属单位',
            afterLabelTextTpl: required,
            //必填项的标识
            //pName
            name: 'pName',
            allowBlank: false,
            tooltip: '填入产品编号'
        },
        {
            xtype: 'combo',
            store: Ext.create('Ext.data.ArrayStore', {
                fields: ['type'],
                data: [['终止合同'], ['无效'], ['其他']]
            }),
            //pVarieties
            name: '',
            hiddenName: 'pVarieties',
            // 提交到后台的input的name ，对应下面store里的''id，必须要填
            emptyText: '-----请选择-----',
            //map中的键
            valueField: '',
            //map中的值 
            displayField: 'type',
            /* plugins: [ Ext.ux.FieldReplicator ],*/
            fieldLabel: '原因分类',
            afterLabelTextTpl: required,
            //必填项的标识
            queryMode: 'local',
            //tab键是否可以选择当前突出项
            selectOnTab: false,
            /****下拉框不可编辑*****/
            typeAhead: false,
            editable: false,
            /****下拉框不可编辑*****/
            onReplicate: function() {
                this.getStore().clearFilter();
            }
        },
        {
            xtype: 'textarea',
            fieldLabel: '变更描述',
            hideLabel: false,
            name: 'remark',
            style: 'margin:0',
            // Remove default margin
            flex: 1 // Take up all *remaining* vertical space
        },

        {
            xtype: 'textfield',
            fieldLabel: '变更人',
            //必填项
            //pMeasurementunit
            name: 'pMeasurementunit',
            allowBlank: false,
            tooltip: '填入产品编号'
        },

        {
            xtype: 'textfield',
            fieldLabel: '变更时间',
            //必填项
            //pMeasurementunit
            name: 'pMeasurementunit',
            allowBlank: false,
            tooltip: '填入产品编号'
        },

        {
            xtype: 'textarea',
            fieldLabel: '备注',
            hideLabel: false,
            name: 'remark',
            style: 'margin:0',
            // Remove default margin
            flex: 1 // Take up all *remaining* vertical space
        }]

    })

    /*定义新增的表单结束*****************************************************************/

    // register model
    //相当于定义了一个company 类
    Ext.define('PMonthrequest', {
        extend: 'Ext.data.Model',
        idProperty: '',
        //定义类的属性
        fields: [{
            name: 'scContractid',
            type: 'string'
        },
        {
            name: 'scCustomername',
            type: 'string'
        },
        {
            name: '申请人',
            type: 'string'
        },
        {
            name: 'scApplicantunit',
            type: 'string'
        },
        {
            name: 'scReasontype',
            type: 'string'
        },
        {
            name: '变更部门',
            type: 'string'
        },
        {
            name: 'scChangeperson',
            type: 'string'
        },
        {
            name: 'scChangetime',
            type: 'date',
            dateFormat: 'n/j h:i'
        },
        {
            name: 'scStatus',
            type: 'integer'
        }]
    });
    //定义数据源将被引入到对应的列中
    var myData = [['xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', '9/10 12:00', 1]

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

    //定义编辑属性
    var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
        //鼠标点击两次 出现编辑
        clicksToEdit: 2
    });

    //定义选择框
    var sm = Ext.create('Ext.selection.CheckboxModel');
    //定义grid
    var grid = Ext.create('Ext.grid.Panel', {
        //grid 的标题
        title: '变更销售合同',
        //引入仓库
        store: store,
        //引入选择框
        selModel: sm,
        //定义列
        columns: [{
            id: '',
            text: '合同编号',
            sortable: true,
            //与定义的类中的属性匹配
            dataIndex: 'scContractid',
            flex: 0,
            width: 75,
            //鼠标点击时能够编辑
            editor: {
                allowBlank: false
            }
        },
        {
            text: '客户名称',
            sortable: true,
            dataIndex: 'scCustomername',
            width: 75,
            editor: {
                allowBlank: false
            }
        },
        {
            text: '申请人',
            sortable: true,
            dataIndex: '申请人',
            width: 75,
            editor: {
                allowBlank: false
            }
        },
        {
            text: '申请人所属单位',
            sortable: true,
            dataIndex: 'scApplicantunit',
            width: 75,
            editor: {
                allowBlank: false
            }
        },
        {
            text: '原因代码',
            sortable: true,
            dataIndex: 'scReasontype',
            width: 75,
            editor: {
                allowBlank: false
            }
        },
        {
            text: '变更部门',
            sortable: true,
            dataIndex: '变更部门',
            width: 75,
            editor: {
                allowBlank: false
            }
        },
        {
            text: '变更人',
            sortable: true,
            dataIndex: 'scChangeperson',
            width: 75,
            editor: {
                allowBlank: false
            }
        },
        {
            text: '变更时间',
            sortable: true,
            renderer: Ext.util.Format.dateRenderer('m/d/Y'),
            dataIndex: 'scChangetime',
            width: 75,
            editor: {
                allowBlank: false
            }
        },
        {
            text: '状态',
            sortable: true,
            dataIndex: 'scStatus',
            width: 75,
            editor: {
                allowBlank: false
            }
        },
        {
            //定义每列数据删除按钮
            text: '快速删除',
            xtype: 'actioncolumn',
            title: '快速删除',
            width: 75,
            sortable: false,
            items: [{
                icon: '../../common/shared/icons/fam/delete.gif',
                tooltip: 'Delete Plant',
                handler: function(grid, rowIndex, colIndex) {
                    Ext.MessageBox.confirm("请确认", "确定删除吗？",
                    function(button, text) {
                        if (button == 'yes') {
                            store.removeAt(rowIndex);
                        }
                    });
                }
            }]
        }

        ],

        // 保存和取消按钮
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
            },
            {
                minWidth: 80,
                text: '取消'
            }]
        },
        //各种按钮布局
        {
            xtype: 'toolbar',
            items: [{
                text: '添加',
                tooltip: '',
                iconCls: 'add',
                listeners: {
                    'click': function() {
                        /*Ext.getCmp('formpid').readOnly = false;*/
                        addWin.add(addForm);
                        addForm.form.reset();
                        addWin.show();
                    }
                }
            },
            '-',{
                text: '修改',
                iconCls: 'edit',
                listeners: {
                    'click': function() {
                       
								var record = grid.getSelectionModel().getSelection();
								if(record == undefined || record == '') {
									Ext.Msg.alert('信息', '请选择一条数据');
									return;
								}
								if(record.length >= 2) {
									Ext.Msg.alert('信息', '只可以选择一条数据');
									return;
								}
								addWin.add(addForm);
								addWin.show();
								addForm.getForm().loadRecord(record[0]);
								Ext.getCmp('formpid').readOnly = true;
								addForm.getForm().url = '/XJManager/base/updateProduct.do';
								grid.getSelectionModel().clearSelections();
								grid.getView().refresh();
							
                    }
                }
            },
            '-'
            ,{
                text: '删除',
                iconCls: 'remove',
                listeners: {
                    'click': function() {
                    }
                }
            },
            '-'
            ,{
                text: '详细信息',
                tooltip: '',
                iconCls: 'detailed',
                listeners: {
                    'click': function() {
                       	var xqWin
						/////////////////////////////////////////////////////////
						var Formxq = Ext.create('Ext.form.Panel', {
							region: 'west',
							plain: true,
							border: false,
							bodyPadding: false,
							/*autoScroll: true,*/
							width: 1000,
							layout: 'form',
							//表单发送的到的action路径
							url: '',
							//默认设置
							fieldDefaults: {
								anchor: '100%'
							},
							//布局,vbox是竖排,hbox是横排

							items: [
								//////////////////////////////////////////////////////////////////////
								{
									layout: 'column',
									frame: true,
									items: [
										{
											xtype: 'displayfield',
											fieldLabel: '合同编号',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '客户名称',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '协议编号',
											readOnly: true,
											value: '',
											width: 300
										},
										{
											xtype: 'displayfield',
											fieldLabel: '申请方式',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '申请人',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '申请单位',
											readOnly: true,
											value: '',
											width: 300
										},
										{
											xtype: 'displayfield',
											fieldLabel: '原因分类',
											value: 'xx',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '变更人',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '变更时间',
											readOnly: true,
											value: '',
											width: 300
										},
										{
											xtype: 'displayfield',
											fieldLabel: '状态',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'textarea',
											fieldLabel: '变更描述',
											readOnly: true,
											width: 900
										}, {
											xtype: 'textarea',
											fieldLabel: '备注',
											readOnly: true,
											value: 'xxxxxxxxxxxxx',
											width: 900
										},

									],
								},
								//////////////////////////////////////////////////////////////////////

							],

						});
						/////////////////////////////////////////////////////////
						Ext.History.init();
						xqWin = Ext.create("Ext.window.Window", {
											/*title:'搜索', */
											closable: true,
											closeAction: 'hide',
											autoScroll: true,
											width: 950,
											height: 400,
											tools: [{
												type: 'pin'
											}],
											layout: {
												type: 'border',
												padding: false
											},
											constrain: true,
											//模态窗体  
											modal: true,
											//模态窗体  
											plain: true,
											//滚动条设置  
											items: [{
												id: '',
												region: 'north',
												title: '详细信息',
												items: [Formxq],
												height: 300,
											}]
										})
									.show();

                    }
                }
            },
            '-',
            {
                text: '取消关联',
                tooltip: ' edit',
                iconCls: 'edit',
                listeners:{
                	'click':function(){
                		 
                        Ext.create("Ext.window.Window", {
                            title: '搜索',
                            closable: true,
                            closeAction: 'hide',
                            width: 700,
                            minWidth: 350,
                            height: 420,
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
                            //模态窗体  
                            plain: true,
                            //滚动条设置  
                            autoScroll: true,
                            items: [{
                                region: 'west',
                                title: '搜索条件',
                                items: [searchFormht],
                                width: 200,
                                split: true,
                                //是否可缩小
                                collapsible: true,
                                floatable: false
                            },
                            {
                                region: 'center',
                                items: [agridht],
                                width: 200,
                                split: true,
                                floatable: false,
                                autoScroll: true
                            }]
                        }).show();
                    
                	}
                }
            
            },
            '-', {
                text: '合同完成',
                tooltip: 'ok',
                iconCls: 'ok',
               listeners:{
                	'click':function(){
                		 
                        Ext.create("Ext.window.Window", {
                            title: '搜索',
                            closable: true,
                            closeAction: 'hide',
                            width: 700,
                            minWidth: 350,
                            height: 420,
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
                            //模态窗体  
                            plain: true,
                            //滚动条设置  
                            autoScroll: true,
                            items: [{
                                region: 'west',
                                title: '搜索条件',
                                items: [searchFormht],
                                width: 200,
                                split: true,
                                //是否可缩小
                                collapsible: true,
                                floatable: false
                            },
                            {
                                region: 'center',
                                items: [agridht],
                                width: 200,
                                split: true,
                                floatable: false,
                                autoScroll: true
                            }]
                        }).show();
                    
                	}
                }
            
            },
            '-', {
                text: '合同终止',
                tooltip: '',
                iconCls: 'cancel',
                listeners:{
                	'click':function(){
                		 
                        Ext.create("Ext.window.Window", {
                            title: '搜索',
                            closable: true,
                            closeAction: 'hide',
                            width: 700,
                            minWidth: 350,
                            height: 420,
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
                            //模态窗体  
                            plain: true,
                            //滚动条设置  
                            autoScroll: true,
                            items: [{
                                region: 'west',
                                title: '搜索条件',
                                items: [searchFormht],
                                width: 200,
                                split: true,
                                //是否可缩小
                                collapsible: true,
                                floatable: false
                            },
                            {
                                region: 'center',
                                items: [agridht],
                                width: 200,
                                split: true,
                                floatable: false,
                                autoScroll: true
                            }]
                        }).show();
                    
                	}
                }
            
            }
            ]
        }],

        //table边框的设定
        stripeRows: true,
        height: 320,
        width: 1200,
        frame: false,

        /*resizable: {
		   handles: 's',
		   minHeight: 100
		},*/

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
