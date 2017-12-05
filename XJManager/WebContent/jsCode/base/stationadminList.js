Ext.Loader.setConfig({
    enabled: true
});

//设置路径
Ext.Loader.setPath('Ext.ux', '../../common/ux/');

//定义需要的插件
Ext.require(['Ext.data.*', 'Ext.grid.*', 'Ext.util.*', 'Ext.tip.QuickTipManager', 'Ext.ux.data.PagingMemoryProxy', 'Ext.ux.ProgressBarPager', 'Ext.selection.CheckboxModel', 'Ext.ux.RowExpander', 'Ext.selection.CellModel', 'Ext.ux.CheckColumn', 'Ext.state.*', 'Ext.form.*']);

Ext.onReady(function() {
    // register model
    //相当于定义了一个company 类
    Ext.define('Admin', {
        extend: 'Ext.data.Model',
        idProperty: '',
        //定义类的属性
        fields: [{
            name: 'adminId',
            type: 'Integer'
        },
        {
            name: 'adminName',
            type: 'string'
        },
        ]
    });

    //初始化QuickTips就是为了使带有data-qtip属性的html标签能够在鼠标移上去的时候显示其内容
    Ext.tip.QuickTipManager.init();

    //想当于一个仓库 存储各种对像的
    var store = Ext.create('Ext.data.Store', {
        model: 'Admin',
        remoteSort: true,
        //每页显示的数据
        pageSize: 5,
        proxy: {
            type: "ajax",
            url: '/XJManager/base/stationadminList.do',
            reader: {
                type: "json",
                root: "queryList",
                totalProperty: 'totalCount'
            }
        },
        autoLoad: true
    });

    //定义选择框
    var sm = Ext.create('Ext.selection.CheckboxModel');

    ///////////////////////////////////////////////////////////
    /*********************创建window弹窗表单开始***********************/
    var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
    var c = new Ext.Window({
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
            handler: function() {
            	 proForm.submit({
                    success: function() {
                        proForm.hide();
                        c.hide();
                        window.location.reload();
                    },
                    failure: function() {
                        Ext.Msg.alert('添加失败', '添加失败,请重试!');
                    }
                });
            }
        },
        {
            text: "重置",
            iconCls: "reset",
            handler: function() {}
        }]
    });
    /***********************表单设计开始*********************/
    var proForm = Ext.create('Ext.form.Panel', {
        plain: true,
        border: 0,
        bodyPadding: 5,
        width: 420,
        title: '添加',
        //表单发送的到的action路径
        url: 'XJManager/base/addStationadmin.do',
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
            xtype: 'textfield',
            fieldLabel: '路局名称',
            //必填项
            afterLabelTextTpl: required,
            //pName
            name: 'adminName',
            allowBlank: false,
            tooltip: '填入路局'
        },{
            xtype: 'textfield',
            name: 'adminId',
            hidden:true
        }
        ]

    });

    ///////////////////////////////////////////////////////////////

    //定义grid
    var grid = Ext.create('Ext.grid.Panel', {
        //grid 的标题
        title: '铁路局管理',
        //引入仓库
        store: store,
        //引入选择框
        selModel: sm,
        //定义列
        columns: [{
            id: 'adminId',
            text: '序号',
            sortable: true,
            //与定义的类中的属性匹配
            dataIndex: 'adminId',
            flex: 0,
            width: 75,
            hidden:true
        },
        {
            text: '铁路局名称',
            sortable: true,
            dataIndex: 'adminName',
            width: 75,
        },
        {
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
                            //获取对应行的节点
                            var node = grid.getNode(rowIndex);
                            //获取对应节点的数据model
                            var rec = grid.getRecord(node);
                            //获取选中行的pid属性
                            var id = rec.get('adminId');
                            Ext.Ajax.request({
                                url: '/XJManager/base/deleteStationadmin.do',
                                params: {
                                    'ids': id
                                },
                                method: 'POST',
                                success: function(response, options) {
                                    Ext.MessageBox.alert('成功', '删除成功');
                                },
                                failure: function(response, options) {
                                    Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
                                }
                            });
                            store.removeAt(rowIndex);
                        }
                    });
                }
            }]
        }

        ],
        dockedItems: [
           {
            xtype: 'toolbar',
            items: [
            {
                text: '添加',
                tooltip: 'add',
                iconCls: 'add',
                listeners: {
                    'click': function() {
                        c.add(proForm);
                        proForm.form.reset();
                        proForm.getForm().url = '/XJManager/base/addSubbureau.do';
                        c.show();
                    }
                }
            },
            '-', {
                text: '修改',
                tooltip: ' edit',
                iconCls: 'edit',
                  listeners: {
                    'click': function() {
                        var record = grid.getSelectionModel().getSelection();
                        if (record == undefined || record == '') {
                            Ext.Msg.alert('信息', '请选择一条数据');
                            return;
                        }
                        if (record.length >= 2) {
                            Ext.Msg.alert('信息', '只可以选择一条数据');
                            return;
                        }
                        c.add(proForm);
                        c.show();
                        proForm.getForm().loadRecord(record[0]);
                        proForm.getForm().url = '/XJManager/base/updateStationadmin.do';
                        grid.getSelectionModel().clearSelections();
                        grid.getView().refresh();
                    }

                }
            },
            '-', {
                itemId: 'removeButton',
                text: '删除',
                tooltip: 'remove',
                iconCls: 'remove',
                 listeners: {
                    'click': function() {
                        var record = grid.getSelectionModel().getSelection();
                        if (record == undefined || record == '') {
                            Ext.Msg.alert("错误", "请选择至少一条数据");
                            return;
                        } else {
                            Ext.MessageBox.confirm("请确认", "确定删除吗？",
                            function(button, text) {
                                if (button == 'yes') {
                                    var url = "/XJManager/base/deleteStationadmin.do";
                                    var param = "";
                                    for (var i = 0; i < record.length; i++) {
                                        param = param + record[i].get("adminId") + "-";
                                    }
                                    Ext.Ajax.request({
                                        url: url,
                                        params: {
                                            'ids': param
                                        },
                                        method: 'POST',
                                        success: function(response, options) {
                                            Ext.MessageBox.alert('成功', '删除成功');
                                            window.location.reload();

                                        },
                                        failure: function(response, options) {
                                            Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
                                        }
                                    });
                                }
                            });

                        }
                    }
                }
            }]
        }],
        stripeRows: true,
        height: 320,
        width: 'auto',
        frame: false,
        bbar: Ext.create('Ext.PagingToolbar', {
            pageSize: 10,
            store: store,
            displayInfo: true,
            plugins: Ext.create('Ext.ux.ProgressBarPager', {})
        }),
    }); grid.render('grid-example'); store.load();
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
