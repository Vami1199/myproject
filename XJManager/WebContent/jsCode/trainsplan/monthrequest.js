Ext.Loader.setConfig({
	enabled: true
});

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

Ext.onReady(function() {
	var sm = Ext.create('Ext.selection.CheckboxModel');
	var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
	var requiredimportant = '<span style="color:red;font-weight:bold" data-qtip="Required">***</span>';
	//////////////////////////////////////////////
	var searchFormcp = Ext.create(
		'Ext.form.Panel', {
			region: 'west',
			plain: true,
			border: 0,
			bodyPadding: 5,
			width: 200,
			//表单发送的到的action路径
			url: '/XJManager/base/companyList.do',
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
				id: '',
				xtype: 'textfield',
				fieldLabel: '产品编号',
				name: 'coId'
			}, {
				id: '',
				xtype: 'textfield',
				fieldLabel: '产品名称',
				name: 'coId'
			}, {
				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: ['coal'],
					data: [
						['烟煤'],
						['烟煤'],
						['烟煤']
					]
				}),
				//pCoaltype
				name: '',
				hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				//map中的键
				valueField: '',
				//map中的值 
				displayField: 'coal',
				//选中下拉框后再点击面板就会多出一行,不知道有卵子用
				/*plugins: [ Ext.ux.FieldReplicator ],*/
				fieldLabel: '煤种',
				queryMode: 'local', //数据模式,local代表本地数据模式
				//tab键是否可以选择当前突出项
				selectOnTab: false,
				/****下拉框不可编辑*****/
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}
			}, {

				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: ['coal'],
					data: [
						['烟煤'],
						['烟煤'],
						['烟煤']
					]
				}),
				//pCoaltype
				name: '',
				hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				//map中的键
				valueField: '',
				//map中的值 
				displayField: 'coal',
				//选中下拉框后再点击面板就会多出一行,不知道有卵子用
				/*plugins: [ Ext.ux.FieldReplicator ],*/
				fieldLabel: '品种',
				queryMode: 'local', //数据模式,local代表本地数据模式
				//tab键是否可以选择当前突出项
				selectOnTab: false,
				/****下拉框不可编辑*****/
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}

			}, {

				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: ['coal'],
					data: [
						['烟煤'],
						['烟煤'],
						['烟煤']
					]
				}),
				//pCoaltype
				name: '',
				hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				//map中的键
				valueField: '',
				//map中的值 
				displayField: 'coal',
				//选中下拉框后再点击面板就会多出一行,不知道有卵子用
				/*plugins: [ Ext.ux.FieldReplicator ],*/
				fieldLabel: '适用范围',
				queryMode: 'local', //数据模式,local代表本地数据模式
				//tab键是否可以选择当前突出项
				selectOnTab: false,
				/****下拉框不可编辑*****/
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}

			}, {

				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: ['coal'],
					data: [
						['烟煤'],
						['烟煤'],
						['烟煤']
					]
				}),
				//pCoaltype
				name: '',
				hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				//map中的键
				valueField: '',
				//map中的值 
				displayField: 'coal',
				//选中下拉框后再点击面板就会多出一行,不知道有卵子用
				/*plugins: [ Ext.ux.FieldReplicator ],*/
				fieldLabel: '是否可用',
				queryMode: 'local', //数据模式,local代表本地数据模式
				//tab键是否可以选择当前突出项
				selectOnTab: false,
				/****下拉框不可编辑*****/
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}

			}],

			buttons: [{
				text: "搜索",
				iconCls: "btn-save",
				handler: function() {
					var url = '/XJManager/base/companyList.do?1=1'
					var id = Ext
						.getCmp(
							'id')
						.getValue();
					var short = Ext
						.getCmp(
							'short')
						.getValue();
					var phone = Ext
						.getCmp(
							'phone')
						.getValue();
					var fax = Ext
						.getCmp(
							'fax')
						.getValue();
					var postcode = Ext
						.getCmp(
							'postcode')
						.getValue();
					var leader = Ext
						.getCmp(
							'leader')
						.getValue();
					if(id != '') {
						url = url +
							'&coId=' +
							id;
					}
					if(short != '') {
						url = url +
							'&coShort=' +
							short;
					}
					if(phone != '') {
						phone = url +
							'&coPhone=' +
							phone;
					}
					if(fax != '') {
						url = url +
							'&coFax=' +
							fax;
					}
					if(postcode != '') {
						url = url +
							'&coPostcode=' +
							postcode;
					}
					if(leader != '') {
						url = url +
							'&coLeader=' +
							leader;
					}

					addStore
						.getProxy().url = url;
					addStore
						.load();
				}
			}, {
				text: "重置",
				iconCls: "reset",
				handler: function() {
					this
						.up(
							'form')
						.getForm()
						.reset();
				}
			}]
		});
	var agridcp = Ext.create(
		'Ext.grid.Panel', {
			id: '',
			region: 'east',
			//grid 的标题
			title: '单位列表',
			//引入仓库
			store: store,
			loadMask: true,
			listeners: {
				itemdblclick: function(
					dataview,
					record,
					item,
					index,
					e) {
					proForm
						.getForm()
						.loadRecord(
							record);
					newWin
						.hide();
				}
			},
			//定义列
			columns: [{
				id: 'coId',
				text: '产品编号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'coId',
				flex: 0,
				width: 75,
			}, {
				text: '产品名称',
				sortable: true,
				dataIndex: 'coShort',
				width: 75
			}, {
				text: '煤种',
				sortable: true,
				dataIndex: 'coName',
				width: 75
			}, {
				text: '品种',
				sortable: true,
				dataIndex: 'coPhone',
				width: 75
			}, {
				text: '计量单位',
				sortable: true,
				dataIndex: 'coPostcode',
				width: 75
			}, {
				text: '生产单位',
				sortable: true,
				dataIndex: 'coFax',
				width: 75
			}, {
				text: '适用范围',
				sortable: true,
				dataIndex: 'coLeader',
				width: 75
			}, {
				text: '是否可用',
				sortable: true,
				dataIndex: 'coAddress',
				width: 75
			}],
			stripeRows: true,
			height: '100%',
			width: 1200,
			frame: false,
			bbar: Ext.create('Ext.PagingToolbar', {
				pageSize: 5,
				store: store,
				displayInfo: true,
				plugins: Ext.create('Ext.ux.ProgressBarPager', {})
			}),
		});
	////////////////////////////////////////////
	var searchFormcz = Ext.create('Ext.form.Panel', {
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
			fieldLabel: '车站编号',
		}, {
			xtype: 'textfield',
			fieldLabel: '车站名称',
		}, {
			xtype: 'combo',
			store: Ext.create('Ext.data.ArrayStore', {
				fields: ['coal'],
				data: [
					['是'],
					['否'],
					['其他']
				]
			}),
			name: '',
			hiddenName: 'id', // 提交到后台的input的name ，对应下面store里的''id，必须要填
			emptyText: '-----请选择-----',
			//map中的键
			valueField: '',
			//map中的值 
			displayField: 'coal',
			//选中下拉框后再点击面板就会多出一行,不知道有卵子用
			/*plugins: [ Ext.ux.FieldReplicator ],*/
			fieldLabel: '是否发站',
			queryMode: 'local', //数据模式,local代表本地数据模式
			//tab键是否可以选择当前突出项
			selectOnTab: false,
			/****下拉框不可编辑*****/
			typeAhead: false,
			editable: false,
			/****下拉框不可编辑*****/
			onReplicate: function() {
				this.getStore().clearFilter();
			}
		}, {
			xtype: 'combo',
			store: Ext.create('Ext.data.ArrayStore', {
				fields: ['coal'],
				data: [
					['是'],
					['否'],
					['其他']
				]
			}),
			name: '',
			hiddenName: 'id', // 提交到后台的input的name ，对应下面store里的''id，必须要填
			emptyText: '-----请选择-----',
			//map中的键
			valueField: '',
			//map中的值 
			displayField: 'coal',
			//选中下拉框后再点击面板就会多出一行,不知道有卵子用
			/*plugins: [ Ext.ux.FieldReplicator ],*/
			fieldLabel: '是否火车站',
			queryMode: 'local', //数据模式,local代表本地数据模式
			//tab键是否可以选择当前突出项
			selectOnTab: false,
			/****下拉框不可编辑*****/
			typeAhead: false,
			editable: false,
			/****下拉框不可编辑*****/
			onReplicate: function() {
				this.getStore().clearFilter();
			}
		}, {
			xtype: 'combo',
			store: Ext.create('Ext.data.ArrayStore', {
				fields: ['coal'],
				data: [
					['北京'],
					['天津'],
					['其他']
				]
			}),
			name: '',
			hiddenName: 'id', // 提交到后台的input的name ，对应下面store里的''id，必须要填
			emptyText: '-----请选择-----',
			//map中的键
			valueField: '',
			//map中的值 
			displayField: 'coal',
			//选中下拉框后再点击面板就会多出一行,不知道有卵子用
			/*plugins: [ Ext.ux.FieldReplicator ],*/
			fieldLabel: '省',
			queryMode: 'local', //数据模式,local代表本地数据模式
			//tab键是否可以选择当前突出项
			selectOnTab: false,
			/****下拉框不可编辑*****/
			typeAhead: false,
			editable: false,
			/****下拉框不可编辑*****/
			onReplicate: function() {
				this.getStore().clearFilter();
			}
		}, {
			xtype: 'textfield',
			fieldLabel: '市县',
		}, {
			xtype: 'textfield',
			fieldLabel: '机构传真',
		}, {
			xtype: 'textfield',
			fieldLabel: '车站简称',
		}],

		buttons: [{
			text: "搜索",
			iconCls: "btn-save",
			handler: function() {}
		}, {
			text: "重置",
			iconCls: "reset",
			handler: function() {}
		}]
	});
	var agridcz = Ext.create('Ext.grid.Panel', {
		id: 'agrid',
		region: 'east',
		//grid 的标题
		title: '列表',
		//引入仓库
		store: store,
		//定义列
		columns: [{
			id: 'coId',
			text: '车站编号',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			text: '车站姓名',
			sortable: true,
			dataIndex: 'coShort',
			width: 75
		}, {
			text: '是否发站',
			sortable: true,
			dataIndex: 'coName',
			width: 75
		}, {
			text: '省份',
			sortable: true,
			dataIndex: 'coPhone',
			width: 75
		}, {
			text: '市县',
			sortable: true,
			dataIndex: 'coPostcode',
			width: 75
		}, {
			text: '铁路局',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}],
		stripeRows: true,
		height: 520,
		width: 1200,
		frame: false,
	});

	////////////////////////////////////////////
	/****************************生成开始*******************************/
	var formfinish = Ext.create('Ext.form.Panel', {
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
			fieldLabel: '年份',
		}, {
			xtype: 'textfield',
			fieldLabel: '合同编号',
		}, {
			xtype: 'combo',
			store: Ext.create('Ext.data.ArrayStore', {
				fields: [{
					name: 'startKey',
					type: 'Integer'
				}, {
					name: 'startValue',
					type: 'String'
				}],
				data: [
					[1, '重点合同'],
					[0, '一般合同'],
				]
			}),
			name: 'station.sRailwaysbureau',
			hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
			emptyText: '-----请选择-----',
			valueField: 'startKey',
			displayField: 'startValue',
			fieldLabel: '合同类型',
			queryMode: 'local', //数据模式,local代表本地数据模式
			selectOnTab: false,
			typeAhead: false,
			editable: false,
			onReplicate: function() {
				this.getStore().clearFilter();
			}
		}, {

			xtype: "fieldcontainer",
			layout: "hbox",
			items: [{
				xtype: "textfield",
				fieldLabel: "客户名称",
				flex: 0,
				width: 170,
				/*layout: 'column',*/
				value: '',
				//必填项
				//pProductionunit
				name: 'pProductionunit',
				allowBlank: false,
			}, {
				xtype: "button",
				icon: '../../common/shared/icons/fam/search.png',
				/************创建单位搜索框开始***********/
				listeners: {
					click: function() {

						Ext.create("Ext.window.Window", {
							title: '搜索',
							closable: true,
							closeAction: 'hide',
							width: 600,
							minWidth: 350,
							height: 320,
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
								title: '客户搜索',
								items: [searchFormkh],
								width: 200,
								split: true,
								//是否可缩小
								collapsible: true,
								floatable: false
							}, {
								region: 'center',
								items: [agridkh],
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
		}, {
			xtype: 'combo',
			store: Ext.create('Ext.data.ArrayStore', {
				fields: [{
					name: 'startKey',
					type: 'Integer'
				}, {
					name: 'startValue',
					type: 'String'
				}],
				data: [
					[1, '电力'],
					[0, '化工'],
				]
			}),
			name: 'station.sRailwaysbureau',
			hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
			emptyText: '-----请选择-----',
			valueField: 'startKey',
			displayField: 'startValue',
			fieldLabel: '客户行业',
			queryMode: 'local', //数据模式,local代表本地数据模式
			selectOnTab: false,
			typeAhead: false,
			editable: false,
			onReplicate: function() {
				this.getStore().clearFilter();
			}
		}, {
			xtype: 'combo',
			store: Ext.create('Ext.data.ArrayStore', {
				fields: [{
					name: 'startKey',
					type: 'Integer'
				}, {
					name: 'startValue',
					type: 'String'
				}],
				data: [
					[1, '大唐'],
					[0, '国电'],
				]
			}),
			name: 'station.sRailwaysbureau',
			hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
			emptyText: '-----请选择-----',
			valueField: 'startKey',
			displayField: 'startValue',
			fieldLabel: '客户部别',
			queryMode: 'local', //数据模式,local代表本地数据模式
			selectOnTab: false,
			typeAhead: false,
			editable: false,
			onReplicate: function() {
				this.getStore().clearFilter();
			}
		}, {
			xtype: 'textfield',
			fieldLabel: '经办人',
		}],

		buttons: [{
			text: "搜索",
			iconCls: "btn-save",
			handler: function() {}
		}, {
			text: "重置",
			iconCls: "reset",
			handler: function() {}
		}]
	});
	var gridfinishsht = Ext.create('Ext.grid.Panel', {
		id: '',
		region: 'east',
		//grid 的标题
		title: '',
		//引入仓库
		store: store,
		//定义列
		columns: [{
			id: '',
			text: '合同年份',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '合同编号',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '合同类别',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '客户名称',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '客户行业',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '客户部别',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '交提货方式',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '运输方式',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '约定周期',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '每周期最少发货量',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '合同总量',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}],
		stripeRows: true,
		height: 200,
		width: 1200,
		frame: false,
		bbar: Ext.create('Ext.PagingToolbar', {
			pageSize: 10,
			store: store,
			displayInfo: true,
			plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		}),
	});
	var gridfinishx = Ext.create('Ext.grid.Panel', {
		id: '',
		region: 'east',
		//grid 的标题
		title: '',
		//引入仓库
		store: store,
		//定义列
		columns: [{
			id: '',
			text: '收货单位名称',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '发站',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '到站',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '运输方式',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '产品',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '质量标准',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '总量',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '指标类型',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '指标名称',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '一月',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '实发',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '二月',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '实发',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '三月',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '实发',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '四月',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '实发',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '五月',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '实发',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '六月',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '实发',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '七月',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '实发',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '八月',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '实发',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '九月',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '实发',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '十月',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '实发',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '十一月',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '实发',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '十二月',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '实发',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '备注',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}],
		stripeRows: true,
		height: 200,
		width: 1200,
		frame: false,
		bbar: Ext.create('Ext.PagingToolbar', {
			pageSize: 10,
			store: store,
			displayInfo: true,
			plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		}),

	});
	/****************************生成结束*******************************/
	/******************************无合同新增*************************/
	var whtformxqtj = Ext.create('Ext.form.Panel', {
		region: 'west',
		plain: true,
		border: 0,
		bodyPadding: 0,
		autoScroll: true,
		width: 800,
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

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "产品名称",
						flex: 1,
						width: 368,
						/*layout: 'column',*/
						value: '',
						//必填项
						afterLabelTextTpl: required,
						//pProductionunit
						name: 'pProductionunit',
						allowBlank: false,
					}, {
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
										items: [searchFormcp],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [agridcp],
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

				}, {
					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: ['coal'],
						data: [
							['张集'],
							['其他'],
						]
					}),
					name: '',
					hiddenName: 'id', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					//map中的键
					valueField: '',
					//map中的值 
					displayField: 'coal',
					//选中下拉框后再点击面板就会多出一行,不知道有卵子用
					/*plugins: [ Ext.ux.FieldReplicator ],*/
					fieldLabel: '&nbsp&nbsp发站',
					afterLabelTextTpl: required,
					width: 360,
					queryMode: 'local', //数据模式,local代表本地数据模式
					//tab键是否可以选择当前突出项
					selectOnTab: false,
					/****下拉框不可编辑*****/
					typeAhead: false,
					editable: false,
					/****下拉框不可编辑*****/
					onReplicate: function() {
						this.getStore().clearFilter();
					}
				}, {
					xtype: 'textfield',
					fieldLabel: '到站局别',
					width: 390,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "&nbsp&nbsp到站",
						flex: 1,
						width: 338,
						/*layout: 'column',*/
						value: '',
						//必填项
						afterLabelTextTpl: required,
						//pProductionunit
						name: 'pProductionunit',
						allowBlank: false,
					}, {
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
										items: [searchFormcz],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [agridcz],
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
				}, {

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "结算单位",
						width: 368,
						flex: 1,
						/*layout: 'column',*/
						value: '',
						//必填项
						afterLabelTextTpl: required,
						//pProductionunit
						name: 'pProductionunit',
						allowBlank: false,
					}, {
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
										items: [searchFormkh],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [agridkh],
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

				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp省份',
					width: 360,
					name: 'yYear',
				}, {
					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "结算单位",
						width: 368,
						flex: 1,
						/*layout: 'column',*/
						value: '',
						//必填项
						afterLabelTextTpl: required,
						//pProductionunit
						name: 'pProductionunit',
						allowBlank: false,
					}, {
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
										items: [searchFormkh],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [agridkh],
										width: 200,
										split: true,
										floatable: false,
										autoScroll: true
									}]
								}).show();
							}
						}
					}]
				}, {
					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: [{
							name: 'startKey',
							type: 'Integer'
						}, {
							name: 'startValue',
							type: 'String'
						}],
						data: [
							[1, '电力'],
							[0, '冶金'],
						]
					}),
					name: 'station.sRailwaysbureau',
					hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'startKey',
					displayField: 'startValue',
					fieldLabel: '&nbsp&nbsp所属行业',
					width: 360,
					queryMode: 'local', //数据模式,local代表本地数据模式
					selectOnTab: false,
					typeAhead: false,
					editable: false,
					onReplicate: function() {
						this.getStore().clearFilter();
					}
				}, {
					xtype: 'datefield',
					fieldLabel: '运输起始时间',
					width: 390,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {
					xtype: 'textfield',
					fieldLabel: '申请车数',
					width: 360,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {
					xtype: 'datefield',
					fieldLabel: '运输终止时间',
					width: 390,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {
					xtype: 'textfield',
					fieldLabel: '申请吨数',
					width: 360,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {

					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: [{
							name: 'startKey',
							type: 'Integer'
						}, {
							name: 'startValue',
							type: 'String'
						}],
						data: [
							[1, '大唐'],
							[0, '其他'],
						]
					}),
					name: 'station.sRailwaysbureau',
					hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'startKey',
					displayField: 'startValue',
					fieldLabel: '部别',
					width: 390,
					queryMode: 'local', //数据模式,local代表本地数据模式
					selectOnTab: false,
					typeAhead: false,
					editable: false,
					onReplicate: function() {
						this.getStore().clearFilter();
					}

				}, {
					xtype: 'textarea',
					fieldLabel: '备注',
					width: 750,
				},

			],
		}, ],
	});
	////////////////////////////////////////////////////////
	var whthtxzWin = new Ext.Window({
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

	/***********************年度详情新增开始********************************/
	var formxqtj = Ext.create('Ext.form.Panel', {
		region: 'west',
		plain: true,
		border: 0,
		bodyPadding: 0,
		autoScroll: true,
		width: 750,
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
					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "合同编号",
						afterLabelTextTpl: required,
						width: 318,
						name: 'mId',
						flex: 0,
						/*layout: 'column',*/
						value: '',
						//必填项
						//pProductionunit
						allowBlank: false,
					}, {
						xtype: "button",
						icon: '../../common/shared/icons/fam/search.png',
						/************创建单位搜索框开始***********/
						listeners: {
							click: function() {
								Ext.create("Ext.window.Window", {
									title: '搜索',
									closable: true,
									closeAction: 'hide',
									width: 800,
									minWidth: 350,
									height: 600,
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
									//autoScroll: true,
									items: [{
										region: 'west',
										title: '部门搜索',
										items: [formfinish],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [{
											region: 'north',
											items: [gridfinishsht],
											width: 600,
											split: true,
											floatable: false,
											autoScroll: true
										}, {
											region: 'south',
											items: [gridfinishx],
											width: 600,
											split: true,
											floatable: false,
											autoScroll: true
										}],
										width: 600,
										split: true,
										floatable: false,
										//autoScroll: true
									}]
								}).show();
							}
						}
					}]
				}, {
					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: ['coal'],
						data: [
							['张集'],
							['其他'],
						]
					}),
					name: '',
					hiddenName: 'id', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					//map中的键
					valueField: '',
					//map中的值 
					displayField: 'coal',
					//选中下拉框后再点击面板就会多出一行,不知道有卵子用
					/*plugins: [ Ext.ux.FieldReplicator ],*/
					fieldLabel: '&nbsp&nbsp发站',
					afterLabelTextTpl: required,
					width: 360,
					queryMode: 'local', //数据模式,local代表本地数据模式
					//tab键是否可以选择当前突出项
					selectOnTab: false,
					/****下拉框不可编辑*****/
					typeAhead: false,
					editable: false,
					/****下拉框不可编辑*****/
					onReplicate: function() {
						this.getStore().clearFilter();
					}
				}, {
					xtype: 'textfield',
					fieldLabel: '到站局别',
					width: 340,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "&nbsp&nbsp到站",
						flex: 1,
						width: 338,
						/*layout: 'column',*/
						value: '',
						//必填项
						afterLabelTextTpl: required,
						//pProductionunit
						name: 'pProductionunit',
						allowBlank: false,
					}, {
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
										items: [searchFormcz],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [agridcz],
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
				}, {

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "结算单位",
						width: 318,
						flex: 1,
						/*layout: 'column',*/
						value: '',
						//必填项
						afterLabelTextTpl: required,
						//pProductionunit
						name: 'pProductionunit',
						allowBlank: false,
					}, {
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
										items: [searchFormkh],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [agridkh],
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

				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp省份',
					width: 360,
					name: 'yYear',
				}, {
					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "结算单位",
						width: 318,
						flex: 1,
						/*layout: 'column',*/
						value: '',
						//必填项
						afterLabelTextTpl: required,
						//pProductionunit
						name: 'pProductionunit',
						allowBlank: false,
					}, {
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
										items: [searchFormkh],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [agridkh],
										width: 200,
										split: true,
										floatable: false,
										autoScroll: true
									}]
								}).show();
							}
						}
					}]
				}, {
					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: [{
							name: 'startKey',
							type: 'Integer'
						}, {
							name: 'startValue',
							type: 'String'
						}],
						data: [
							[1, '电力'],
							[0, '冶金'],
						]
					}),
					name: 'station.sRailwaysbureau',
					hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'startKey',
					displayField: 'startValue',
					fieldLabel: '&nbsp&nbsp所属行业',
					width: 360,
					queryMode: 'local', //数据模式,local代表本地数据模式
					selectOnTab: false,
					typeAhead: false,
					editable: false,
					onReplicate: function() {
						this.getStore().clearFilter();
					}
				}, {
					xtype: 'datefield',
					fieldLabel: '运输起始时间',
					width: 340,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {
					xtype: 'textfield',
					fieldLabel: '申请车数',
					width: 360,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {
					xtype: 'datefield',
					fieldLabel: '运输终止时间',
					width: 340,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {
					xtype: 'textfield',
					fieldLabel: '申请吨数',
					width: 360,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {
					xtype: 'textarea',
					fieldLabel: '备注',
					width: 700,
				},

			],
		}, ],
	});
	////////////////////////////////////////////////////////
	var htxzWin = new Ext.Window({
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
	/////////////////////////////////////////////////////////////////////
	var xzxhformxqtj = Ext.create('Ext.form.Panel', {
		region: 'west',
		plain: true,
		border: 0,
		bodyPadding: 0,
		autoScroll: true,
		width: 800,
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
					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "合同编号",
						afterLabelTextTpl: required,
						width: 368,
						name: 'mId',
						flex: 0,
						/*layout: 'column',*/
						value: '',
						//必填项
						//pProductionunit
						allowBlank: false,
					}, {
						xtype: "button",
						icon: '../../common/shared/icons/fam/search.png',
						/************创建单位搜索框开始***********/
						listeners: {
							click: function() {
								Ext.create("Ext.window.Window", {
									title: '搜索',
									closable: true,
									closeAction: 'hide',
									width: 800,
									minWidth: 350,
									height: 600,
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
									//autoScroll: true,
									items: [{
										region: 'west',
										title: '部门搜索',
										items: [formfinish],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [{
											region: 'north',
											items: [gridfinishsht],
											width: 600,
											split: true,
											floatable: false,
											autoScroll: true
										}, {
											region: 'south',
											items: [gridfinishx],
											width: 600,
											split: true,
											floatable: false,
											autoScroll: true
										}],
										width: 600,
										split: true,
										floatable: false,
										//autoScroll: true
									}]
								}).show();
							}
						}
					}]
				}, {
					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: ['coal'],
						data: [
							['张集'],
							['其他'],
						]
					}),
					name: '',
					hiddenName: 'id', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					//map中的键
					valueField: '',
					//map中的值 
					displayField: 'coal',
					//选中下拉框后再点击面板就会多出一行,不知道有卵子用
					/*plugins: [ Ext.ux.FieldReplicator ],*/
					fieldLabel: '&nbsp&nbsp发站',
					afterLabelTextTpl: required,
					width: 360,
					queryMode: 'local', //数据模式,local代表本地数据模式
					//tab键是否可以选择当前突出项
					selectOnTab: false,
					/****下拉框不可编辑*****/
					typeAhead: false,
					editable: false,
					/****下拉框不可编辑*****/
					onReplicate: function() {
						this.getStore().clearFilter();
					}
				}, {
					xtype: 'textfield',
					fieldLabel: '到站局别',
					width: 390,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "&nbsp&nbsp到站",
						flex: 1,
						width: 338,
						/*layout: 'column',*/
						value: '',
						//必填项
						afterLabelTextTpl: required,
						//pProductionunit
						name: 'pProductionunit',
						allowBlank: false,
					}, {
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
										items: [searchFormcz],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [agridcz],
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
				}, {

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "结算单位",
						width: 368,
						flex: 1,
						/*layout: 'column',*/
						value: '',
						//必填项
						afterLabelTextTpl: required,
						//pProductionunit
						name: 'pProductionunit',
						allowBlank: false,
					}, {
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
										items: [searchFormkh],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [agridkh],
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

				}, {
					xtype: 'textfield',
					fieldLabel: '&nbsp&nbsp省份',
					width: 360,
					name: 'yYear',
				}, {
					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "收货单位编号",
						width: 368,
						flex: 1,
						/*layout: 'column',*/
						value: '',
						//必填项
						afterLabelTextTpl: required,
						//pProductionunit
						name: 'pProductionunit',
						allowBlank: false,
					}, {
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
										items: [searchFormkh],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [agridkh],
										width: 200,
										split: true,
										floatable: false,
										autoScroll: true
									}]
								}).show();
							}
						}
					}]
				}, {
					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: [{
							name: 'startKey',
							type: 'Integer'
						}, {
							name: 'startValue',
							type: 'String'
						}],
						data: [
							[1, '电力'],
							[0, '冶金'],
						]
					}),
					name: 'station.sRailwaysbureau',
					hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'startKey',
					displayField: 'startValue',
					fieldLabel: '&nbsp&nbsp所属行业',
					width: 360,
					queryMode: 'local', //数据模式,local代表本地数据模式
					selectOnTab: false,
					typeAhead: false,
					editable: false,
					onReplicate: function() {
						this.getStore().clearFilter();
					}
				}, {
					xtype: 'textfield',
					fieldLabel: '收货单位名称',
					width: 390,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {

					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: [{
							name: 'startKey',
							type: 'Integer'
						}, {
							name: 'startValue',
							type: 'String'
						}],
						data: [
							[1, '大唐'],
							[0, '其他'],
						]
					}),
					name: 'station.sRailwaysbureau',
					hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'startKey',
					displayField: 'startValue',
					fieldLabel: '&nbsp&nbsp部别',
					width: 360,
					queryMode: 'local', //数据模式,local代表本地数据模式
					selectOnTab: false,
					typeAhead: false,
					editable: false,
					onReplicate: function() {
						this.getStore().clearFilter();
					}

				}, {

					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: [{
							name: 'startKey',
							type: 'Integer'
						}, {
							name: 'startValue',
							type: 'String'
						}],
						data: [
							[1, '收货单位'],
							[0, '其他'],
						]
					}),
					name: 'station.sRailwaysbureau',
					hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'startKey',
					displayField: 'startValue',
					fieldLabel: '客户标志',
					width: 390,
					queryMode: 'local', //数据模式,local代表本地数据模式
					selectOnTab: false,
					typeAhead: false,
					editable: false,
					onReplicate: function() {
						this.getStore().clearFilter();
					}

				}, {

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "产品名称",
						flex: 1,
						width: 338,
						/*layout: 'column',*/
						value: '',
						//必填项
						afterLabelTextTpl: required,
						//pProductionunit
						name: 'pProductionunit',
						allowBlank: false,
					}, {
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
										items: [searchFormcp],
										width: 200,
										split: true,
										//是否可缩小
										collapsible: true,
										floatable: false
									}, {
										region: 'center',
										items: [agridcp],
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

				}, {
					xtype: 'datefield',
					fieldLabel: '运输起始时间',
					width: 390,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {
					xtype: 'textfield',
					fieldLabel: '申请车数',
					width: 360,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {
					xtype: 'datefield',
					fieldLabel: '运输终止时间',
					width: 390,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {
					xtype: 'textfield',
					fieldLabel: '申请吨数',
					width: 360,
					afterLabelTextTpl: required,
					name: 'yYear',
				}, {
					xtype: 'textarea',
					fieldLabel: '备注',
					width: 750,
				},

			],
		}, ],
	});
	////////////////////////////////////////////////////////
	var xzxhhtxzWin = new Ext.Window({
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

	/***********************年度详情新增结束********************************/
	///////////////////////////////////////////////////////////////////////////////////////
	//创建一个搜索表单
	var searchFormkh = Ext.create('Ext.form.Panel', {
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
				fieldLabel: '客户编号',
			}, {
				xtype: 'textfield',
				fieldLabel: '客户全称',
			}, {
				xtype: 'textfield',
				fieldLabel: '客户简称',
			}, {
				xtype: 'textfield',
				fieldLabel: '联系人',
			}, {

				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: ['coal'],
					data: [
						['国企'],
						['私企'],
						['其他']
					]
				}),
				//pCoaltype
				name: 'sourceName',
				hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				//map中的键
				valueField: '',
				//map中的值 
				displayField: 'coal',
				//选中下拉框后再点击面板就会多出一行,不知道有卵子用
				/*plugins: [ Ext.ux.FieldReplicator ],*/
				fieldLabel: '企业性质',
				queryMode: 'local', //数据模式,local代表本地数据模式
				//tab键是否可以选择当前突出项
				selectOnTab: false,
				/****下拉框不可编辑*****/
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}

			}, {

				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: ['coal'],
					data: [
						['普通'],
						['重要'],
						['其他']
					]
				}),
				//pCoaltype
				name: 'sourceName',
				hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				//map中的键
				valueField: '',
				//map中的值 
				displayField: 'coal',
				//选中下拉框后再点击面板就会多出一行,不知道有卵子用
				/*plugins: [ Ext.ux.FieldReplicator ],*/
				fieldLabel: '客户类型',
				queryMode: 'local', //数据模式,local代表本地数据模式
				//tab键是否可以选择当前突出项
				selectOnTab: false,
				/****下拉框不可编辑*****/
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}
			}, {
				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: ['coal'],
					data: [
						['国企'],
						['私企'],
						['其他']
					]
				}),
				//pCoaltype
				name: 'sourceName',
				hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				//map中的键
				valueField: '',
				//map中的值 
				displayField: 'coal',
				//选中下拉框后再点击面板就会多出一行,不知道有卵子用
				/*plugins: [ Ext.ux.FieldReplicator ],*/
				fieldLabel: '企业性质',
				queryMode: 'local', //数据模式,local代表本地数据模式
				//tab键是否可以选择当前突出项
				selectOnTab: false,
				/****下拉框不可编辑*****/
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}
			}, {

				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: ['coal'],
					data: [
						['矿业'],
						['科技'],
						['生产']
					]
				}),
				//pCoaltype
				name: 'sourceName',
				hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				//map中的键
				valueField: '',
				//map中的值 
				displayField: 'coal',
				//选中下拉框后再点击面板就会多出一行,不知道有卵子用
				/*plugins: [ Ext.ux.FieldReplicator ],*/
				fieldLabel: '所属行业',
				queryMode: 'local', //数据模式,local代表本地数据模式
				//tab键是否可以选择当前突出项
				selectOnTab: false,
				/****下拉框不可编辑*****/
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}
			}, {

				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: ['coal'],
					data: [
						['大唐'],
						['华电'],
						['国电']
					]
				}),
				//pCoaltype
				name: 'sourceName',
				hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				//map中的键
				valueField: '',
				//map中的值 
				displayField: 'coal',
				//选中下拉框后再点击面板就会多出一行,不知道有卵子用
				/*plugins: [ Ext.ux.FieldReplicator ],*/
				fieldLabel: '部别',
				queryMode: 'local', //数据模式,local代表本地数据模式
				//tab键是否可以选择当前突出项
				selectOnTab: false,
				/****下拉框不可编辑*****/
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}
			}, {
				xtype: 'textfield',
				fieldLabel: '税号',
			}, {
				xtype: 'textfield',
				fieldLabel: '省份',
			}, {
				xtype: 'textfield',
				fieldLabel: '市县',
			}, {

				xtype: 'combo',
				store: Ext.create('Ext.data.ArrayStore', {
					fields: ['coal'],
					data: [
						['客户'],
						['网点'],
						['收货单位']
					]
				}),
				//pCoaltype
				name: 'sourceName',
				hiddenName: 'pCoaltype', // 提交到后台的input的name ，对应下面store里的''id，必须要填
				emptyText: '-----请选择-----',
				//map中的键
				valueField: '',
				//map中的值 
				displayField: 'coal',
				//选中下拉框后再点击面板就会多出一行,不知道有卵子用
				/*plugins: [ Ext.ux.FieldReplicator ],*/
				fieldLabel: '客户标志',
				queryMode: 'local', //数据模式,local代表本地数据模式
				//tab键是否可以选择当前突出项
				selectOnTab: false,
				/****下拉框不可编辑*****/
				typeAhead: false,
				editable: false,
				onReplicate: function() {
					this.getStore().clearFilter();
				}

			}

		],

		buttons: [{
			text: "搜索",
			iconCls: "btn-save",
			handler: function() {}
		}, {
			text: "重置",
			iconCls: "reset",
			handler: function() {}
		}]
	});
	//定义grid
	var agridkh = Ext.create('Ext.grid.Panel', {
		id: '',
		region: 'east',
		//grid 的标题
		title: '列表',
		//引入仓库
		store: store,
		//定义列
		columns: [{
			id: '',
			text: '客户编号',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			text: '客户简称',
			sortable: true,
			dataIndex: 'coShort',
			width: 75
		}, {
			text: '企业性质',
			sortable: true,
			dataIndex: 'coName',
			width: 75
		}, {
			text: '客户类型',
			sortable: true,
			dataIndex: 'coPhone',
			width: 75
		}, {
			text: '所属行业',
			sortable: true,
			dataIndex: 'coPostcode',
			width: 75
		}, {
			text: '部别',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '税号',
			sortable: true,
			dataIndex: 'coLeader',
			width: 75
		}, {
			text: '注册资金',
			sortable: true,
			dataIndex: 'coAddress',
			width: 75
		}, {
			text: '信用额度',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '信用等级',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '法人代表',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '委托人代表',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '联系人',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '开户行',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '银行账号',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '结存煤量',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '结存金额',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '邮编',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '地址',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '传真',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '内部机构编号',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '内部机构名称',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '到站',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '国别',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '省份',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}, {
			text: '地市',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}],
		stripeRows: true,
		height: 320,
		width: 1200,
		frame: false,
	});

	/****************************复制开始*******************************/
	var formCopy = Ext.create('Ext.form.Panel', {
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
			fieldLabel: '年份',
		}, {
			xtype: 'combo',
			store: Ext.create('Ext.data.ArrayStore', {
				fields: [{
					name: 'startKey',
					type: 'Integer'
				}, {
					name: 'startValue',
					type: 'String'
				}],
				data: [
					[1, '一月'],
					[0, '二月'],
				]
			}),
			name: 'station.sRailwaysbureau',
			hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
			emptyText: '-----请选择-----',
			valueField: 'startKey',
			displayField: 'startValue',
			fieldLabel: '月份',
			queryMode: 'local', //数据模式,local代表本地数据模式
			selectOnTab: false,
			typeAhead: false,
			editable: false,
			onReplicate: function() {
				this.getStore().clearFilter();
			}
		}, {
			xtype: 'combo',
			store: Ext.create('Ext.data.ArrayStore', {
				fields: [{
					name: 'startKey',
					type: 'Integer'
				}, {
					name: 'startValue',
					type: 'String'
				}],
				data: [
					[1, '临时计划'],
					[0, '其他'],
				]
			}),
			name: 'station.sRailwaysbureau',
			hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
			emptyText: '-----请选择-----',
			valueField: 'startKey',
			displayField: 'startValue',
			fieldLabel: '计划标志',
			queryMode: 'local', //数据模式,local代表本地数据模式
			selectOnTab: false,
			typeAhead: false,
			editable: false,
			onReplicate: function() {
				this.getStore().clearFilter();
			}
		}, {
			xtype: 'combo',
			store: Ext.create('Ext.data.ArrayStore', {
				fields: [{
					name: 'startKey',
					type: 'Integer'
				}, {
					name: 'startValue',
					type: 'String'
				}],
				data: [
					[1, '北京'],
					[0, '天津'],
				]
			}),
			name: 'station.sRailwaysbureau',
			hiddenName: 'station.sRailwaysbureau', // 提交到后台的input的name ，对应下面store里的''id，必须要填
			emptyText: '-----请选择-----',
			valueField: 'startKey',
			displayField: 'startValue',
			fieldLabel: '铁路局',
			queryMode: 'local', //数据模式,local代表本地数据模式
			selectOnTab: false,
			typeAhead: false,
			editable: false,
			onReplicate: function() {
				this.getStore().clearFilter();
			}
		}, ],

		buttons: [{
			text: "搜索",
			iconCls: "btn-save",
			handler: function() {}
		}, {
			text: "重置",
			iconCls: "reset",
			handler: function() {}
		}]
	});
	var gridCopys = Ext.create('Ext.grid.Panel', {
		id: '',
		region: 'east',
		//grid 的标题
		title: '',
		//引入仓库
		store: store,
		//定义列
		columns: [{
			id: '',
			text: '计划编号',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '年份',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '月份',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '申请日期',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '计划标志',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '铁路局',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '铁路批准时间',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '单位名称',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '经办人',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '制定人',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '制定日期',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '制定单位',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '状态',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}],
		stripeRows: true,
		height: 220,
		width: 1200,
		frame: false,
	});
	var gridCopyx = Ext.create('Ext.grid.Panel', {
		id: '',
		region: 'east',
		//grid 的标题
		title: '',
		//引入仓库
		store: store,
		//定义列
		columns: [{
			id: '',
			text: '计划编号',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '年份',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '月份',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '申请日期',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '计划标志',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '铁路局',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '铁路批准时间',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '单位名称',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '经办人',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '制定人',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '制定日期',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '制定单位',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			id: '',
			text: '状态',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}],
		stripeRows: true,
		height: 220,
		width: 1200,
		frame: false,
	});
	/****************************复制结束*******************************/

	/***********************年度新增开始********************************/
	var formAddmr = Ext.create('Ext.form.Panel', {
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
					xtype: 'textfield',
					fieldLabel: '年份',
					afterLabelTextTpl: required,
					width: 480,
					name: 'mId',
				}, {
					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: ['coal'],
						data: [
							['一月'],
							['二月'],
							['三月']
						]
					}),
					name: '',
					hiddenName: 'id', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					//map中的键
					valueField: '',
					//map中的值 
					displayField: 'coal',
					//选中下拉框后再点击面板就会多出一行,不知道有卵子用
					/*plugins: [ Ext.ux.FieldReplicator ],*/
					fieldLabel: '月份',
					afterLabelTextTpl: required,
					width: 480,
					queryMode: 'local', //数据模式,local代表本地数据模式
					//tab键是否可以选择当前突出项
					selectOnTab: false,
					/****下拉框不可编辑*****/
					typeAhead: false,
					editable: false,
					/****下拉框不可编辑*****/
					onReplicate: function() {
						this.getStore().clearFilter();
					}
				}, {
					xtype: 'datefield',
					fieldLabel: '申请日期',
					afterLabelTextTpl: required,
					width: 480,
				}, {

					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: ['coal'],
						data: [
							['月编计划'],
							['年编计划'],
							['其他']
						]
					}),
					name: '',
					hiddenName: 'id', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					//map中的键
					valueField: '',
					//map中的值 
					displayField: 'coal',
					//选中下拉框后再点击面板就会多出一行,不知道有卵子用
					/*plugins: [ Ext.ux.FieldReplicator ],*/
					fieldLabel: '计划标志',
					afterLabelTextTpl: required,
					width: 480,
					queryMode: 'local', //数据模式,local代表本地数据模式
					//tab键是否可以选择当前突出项
					selectOnTab: false,
					/****下拉框不可编辑*****/
					typeAhead: false,
					editable: false,
					/****下拉框不可编辑*****/
					onReplicate: function() {
						this.getStore().clearFilter();
					}

				}, {

					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: ['coal'],
						data: [
							['北京'],
							['天津'],
							['上海']
						]
					}),
					name: '',
					hiddenName: 'id', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					//map中的键
					valueField: '',
					//map中的值 
					displayField: 'coal',
					//选中下拉框后再点击面板就会多出一行,不知道有卵子用
					/*plugins: [ Ext.ux.FieldReplicator ],*/
					fieldLabel: '铁路局',
					afterLabelTextTpl: required,
					width: 480,
					queryMode: 'local', //数据模式,local代表本地数据模式
					//tab键是否可以选择当前突出项
					selectOnTab: false,
					/****下拉框不可编辑*****/
					typeAhead: false,
					editable: false,
					/****下拉框不可编辑*****/
					onReplicate: function() {
						this.getStore().clearFilter();
					}

				}, {
					xtype: 'textfield',
					fieldLabel: '计划员',
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
	var mrAddWin = new Ext.Window({
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

	/***********************月请车添加结束********************************/
	// register model
	//相当于定义了一个company 类
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
				name: 'mId',
				type: 'string'
			}, {
				name: 'mYear',
				type: 'string'
			}, {
				name: 'mMonth',
				type: 'string'
			}, {
				name: 'mDate',
				type: 'date',
				dateFormat: 'n/j h:i'
			}, {
				name: 'mFlag',
				type: 'byte'
			}, {
				name: 'mAdminid',
				type: 'integer'
			}, {
				name: 'mUser',
				type: 'string'
			}, {
				name: 'mTrains',
				type: 'Integer'
			}, {
				name: 'mWeight',
				type: 'long'
			}, {
				name: 'createby',
				type: 'string'
			}, {
				name: 'modifyby',
				type: 'string'
			}, {
				name: 'createdate',
				type: 'date',
				dateFormat: 'n/j h:i'
			}, {
				name: 'mRemark',
				type: 'string'
			}

		]
	});
	//定义数据源将被引入到对应的列中
	var myData = [
		['xxx', '1991', 'xxx', '9/1 12:00', 'xxx', 66, 'xx', 66, 'xx', 'xxx', 'xxx', '9/10 12:00', 'xxx']

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
	//定义grid
	var grid = Ext.create('Ext.grid.Panel', {
			//grid 的标题
			title: '制定月度请车计划',
			//引入仓库
			store: store,
			//引入选择框
			selModel: sm,
			//定义列
			columns: [{
					id: '',
					text: '计划编号',
					sortable: true,
					//与定义的类中的属性匹配
					dataIndex: 'mId',
					flex: 0,
					width: 75,
					//鼠标点击时能够编辑
				}, {
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
							['1991', '1991'],
							['1992', '1992'],
							['1993', '1993'],
							['1994', '1994'],
							['1995', '1995']
						],
						lazyRender: true,
						listClass: 'x-combo-list-small'
					})
				}, {
					text: '月份',
					sortable: true,
					dataIndex: 'mMonth',
					width: 75,
				}, {
					text: '申请日期',
					sortable: true,
					//格式化日期
					renderer: Ext.util.Format.dateRenderer('m/d/Y'),
					dataIndex: 'mDate',
					width: 75,
				}, {
					text: '计划标志',
					sortable: true,
					dataIndex: 'mFlag',
					width: 75,
				}, {
					text: '单位名称',
					sortable: true,
					dataIndex: 'mAdminid',
					width: 75,
				}, {
					text: '铁路局',
					sortable: true,
					dataIndex: 'mUser',
					width: 75,
				}, {
					text: '申请车数',
					sortable: true,
					dataIndex: 'mTrains',
					width: 75,
				}, {
					text: '申请吨数',
					sortable: true,
					dataIndex: 'mWeight',
					width: 75,
				}, {
					text: '计划员',
					sortable: true,
					dataIndex: 'createby',
					width: 75,
				}, {
					text: '制定人',
					sortable: true,
					dataIndex: 'modifyby',
					width: 75,
				}, {
					text: '制定日期',
					sortable: true,
					dataIndex: 'createdate',
					width: 75,
					renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				}, {
					text: '制定单位',
					sortable: true,
					dataIndex: 'mRemark',
					width: 75,

				}, {
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
							Ext.MessageBox.confirm(
								"请确认", "确定删除吗？",
								function(button, text) {
									if(button == 'yes') {
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
							text: '添加',
							tooltip: 'add',
							iconCls: 'add',
							listeners: {
								click: function() {
									formAddmr.form.reset();
									mrAddWin.add(formAddmr);
									mrAddWin.show();

								}

							}
						}, '-', {
							text: '修改',
							tooltip: ' edit',
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
									mrAddWin.add(formAddmr);
									mrAddWin.show();
									formAddmr.getForm().loadRecord(record[0]);
									Ext.getCmp('formpid').readOnly = true;
									//addContantForm.getForm().url = '/XJManager/base/updateProduct.do';
									grid.getSelectionModel().clearSelections();
									grid.getView().refresh();
								}

							}
						}, '-', {
							itemId: 'removeButton',
							text: '删除',
							tooltip: 'remove',
							iconCls: 'remove',
							disabled: true
						}, '-', {
							text: '送审',
							tooltip: 'submit for censorship',
							iconCls: 'songshen',

						}, '-', {
							text: '复制',
							tooltip: 'copy',
							iconCls: 'copy',
							listeners: {
								click: function() {
									Ext.create("Ext.window.Window", {
										title: '搜索',
										closable: true,
										closeAction: 'hide',
										width: 800,
										minWidth: 350,
										height: 500,
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
												title: '部门搜索',
												items: [formCopy],
												width: 200,
												split: true,
												//是否可缩小
												collapsible: true,
												floatable: false
											},
											/*{
												region : 'center',
												items : [ gridCopys ],
												width : 200,
												split : true,
												floatable : false,
												autoScroll : true
											},*/
											{
												region: 'center',
												items: [{
													region: 'north',
													items: [gridCopys],
													width: 600,
													split: true,
													floatable: false,
													autoScroll: true
												}, {
													region: 'south',
													items: [gridCopyx],
													width: 600,
													split: true,
													floatable: false,
													autoScroll: true
												}],
												width: 600,
												split: true,
												floatable: false,
												autoScroll: true
											}
										]
									}).show();
								}
							}

						}, '-', {
							text: '生成',
							tooltip: 'create',
							iconCls: 'create',
							listeners: {
								click: function() {
									Ext.create("Ext.window.Window", {
										title: '搜索',
										closable: true,
										closeAction: 'hide',
										width: 800,
										minWidth: 350,
										height: 600,
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
										//autoScroll: true,
										items: [{
											region: 'west',
											title: '部门搜索',
											items: [formfinish],
											width: 200,
											split: true,
											//是否可缩小
											collapsible: true,
											floatable: false
										}, {
											region: 'center',
											items: [{
												region: 'north',
												items: [gridfinishsht],
												width: 600,
												split: true,
												floatable: false,
												autoScroll: true
											}, {
												region: 'south',
												items: [gridfinishx],
												width: 600,
												split: true,
												floatable: false,
												autoScroll: true
											}],
											width: 600,
											split: true,
											floatable: false,
											//autoScroll: true
										}]
									}).show();
								}
							}
						}, '-', {
							text: '审批意见',
							tooltip: 'Approval opinions',
							iconCls: 'shenpiyijian',
							listeners: {
								'click': function() {
									////////////////////////////////////////////
									var winyj;
										/////////////////////////////////////////////////////////
									var gridshenpi2 = Ext.create('Ext.grid.Panel', {
										//grid 的标题
										//引入仓库
										store: store,
										//引入选择框
										//定义列
										columns: [{
											id: '',
											text: '创建人员',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: 'scContractid',
											width: 180

											//鼠标点击时能够编辑
										}, {
											text: '创建日期',
											sortable: true,
											dataIndex: '',
											width: 180
										}, {
											text: '当前状态',
											sortable: true,
											dataIndex: 'sourceName',
											width: 180
										}, {
											text: '模板编号',
											sortable: true,
											dataIndex: 'sourceName',
											width: 180
										}, {
											text: '模板名称',
											sortable: true,
											dataIndex: 'sourceName',
											width: 200
										}, ],

										//table边框的设定
										stripeRows: true,
										height: 200,
										width: 940,
										frame: false,

										bbar: Ext.create('Ext.PagingToolbar', {
											pageSize: 10,
											store: store,
											displayInfo: true,
											plugins: Ext.create('Ext.ux.ProgressBarPager', {})
										}),

									});
									/////////////////////////////////////////////////////////
									var gridshenpi1 = Ext.create('Ext.grid.Panel', {
										//grid 的标题
										title: '流程节点信息',
										autoScroll: true,
										//引入仓库
										store: store,
										//引入选择框
										//定义列
										columns: [{
											id: '',
											text: '层号',
											sortable: true,
											//与定义的类中的属性匹配
											dataIndex: 'scContractid',
											flex: 0,
											//鼠标点击时能够编辑
										}, {
											text: '序号',
											sortable: true,
											dataIndex: 'sourceName',
											//width: 290,
											//鼠标点击时能够编辑
										}, {
											text: '角色名称',
											sortable: true,
											dataIndex: 'sourceName',
											//鼠标点击时能够编辑
										}, {
											text: '角色所属机构',
											sortable: true,
											dataIndex: 'sourceName',
											//鼠标点击时能够编辑
										}, {
											text: '审批人',
											sortable: true,
											dataIndex: 'sourceName',
											//鼠标点击时能够编辑
										}, {
											text: '审批结果',
											sortable: true,
											dataIndex: 'sourceName',
											//鼠标点击时能够编辑
										}, {
											text: '审批日期',
											sortable: true,
											dataIndex: 'sourceName',
											//鼠标点击时能够编辑
										}, {
											text: '是否终节点',
											sortable: true,
											dataIndex: 'sourceName',
											width: 220
												//鼠标点击时能够编辑
										}, ],

										//table边框的设定
										stripeRows: true,
										height: 200,
										width: 940,
										frame: false,

										bbar: Ext.create('Ext.PagingToolbar', {
											pageSize: 10,
											store: store,
											displayInfo: true,
											plugins: Ext.create('Ext.ux.ProgressBarPager', {})
										}),

									});
									////////////////////////////////////////////////////////////
									////////////////////////////////////////////
									Ext.History.init();
									///////////////////////////////////////////
									winyj = Ext
										.create(
											"Ext.window.Window", {
												/*title:'搜索', */
												closable: true,
												closeAction: 'hide',
												autoScroll: true,
												width: 950,
												height: 480,
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
													title: '',
													items: [gridshenpi2],
													height: 200,
													//autoScroll: true
												}, {
													region: 'north',
													items: [gridshenpi1],
													//width: 200,
													height: 400,
													split: true,
													floatable: false,
													//autoScroll: true
												}]
											})
										.show();

								}
							}
						}, '-', {
							text: '打印',
							tooltip: 'print',
							iconCls: 'print'
						}, '-', {
							text: '详细信息',
							tooltip: 'detailed',
							iconCls: 'detailed',
							listeners: {
								'click': function() {
									////////////////////////////////////////////
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
												items: [{
													xtype: 'displayfield',
													fieldLabel: '计划编号',
													value: 'xxx',
													readOnly: true,
													width: 300
												}, {
													xtype: 'displayfield',
													fieldLabel: '年份',
													readOnly: true,
													width: 300
												}, {
													xtype: 'displayfield',
													fieldLabel: '月份',
													readOnly: true,
													width: 300
												}, {
													xtype: 'displayfield',
													fieldLabel: '申请日期',
													value: '',
													readOnly: true,
													width: 300
												}, {
													xtype: 'displayfield',
													fieldLabel: '计划标志',
													readOnly: true,
													width: 300
												}, {
													xtype: 'displayfield',
													fieldLabel: '申请单位',
													readOnly: true,
													width: 300
												}, {
													xtype: 'displayfield',
													fieldLabel: '铁路局',
													value: '测试',
													readOnly: true,
													width: 300
												}, {
													xtype: 'displayfield',
													fieldLabel: '申请车数',
													value: 'xx',
													readOnly: true,
													width: 300
												}, {
													xtype: 'displayfield',
													fieldLabel: '申请吨数',
													value: 'xx',
													readOnly: true,
													width: 300
												}, {
													xtype: 'displayfield',
													fieldLabel: '制定人',
													value: '测试',
													readOnly: true,
													width: 300
												}, {
													xtype: 'displayfield',
													fieldLabel: '制定日期',
													readOnly: true,
													width: 300
												}, {
													xtype: 'displayfield',
													fieldLabel: '制定单位',
													readOnly: true,
													value: '出卖方测试',
													width: 300
												}, {
													xtype: 'displayfield',
													fieldLabel: '计划员',
													value: '',
													readOnly: true,
													width: 300
												}, {
													xtype: 'displayfield',
													fieldLabel: '状态',
													readOnly: true,
													width: 300
												}, {
													xtype: 'textarea',
													fieldLabel: '备注',
													disabled: true,
													readOnly: true,
													width: 850
												}],
											},
											//////////////////////////////////////////////////////////////////////

										],

									});
									/////////////////////////////////////////////////////////
									var gridcontantxq = Ext.create('Ext.grid.Panel', {
											//grid 的标题
											title: '明细信息',
											selModel: sm,
											//autoScroll: true,
											//引入仓库
											store: store,
											//引入选择框
											//定义列
											columns: [{
												id: '',
												text: '发站',
												sortable: true,
												//与定义的类中的属性匹配
												dataIndex: 'mId',
												flex: 0,
												//鼠标点击时能够编辑
											}, {
												text: '到站',
												sortable: true,
												dataIndex: 'sourceName',
												//width: 290,
												//鼠标点击时能够编辑
											}, {
												text: '到站局别',
												sortable: true,
												dataIndex: 'sourceName',
												//鼠标点击时能够编辑
											}, {
												text: '省份',
												sortable: true,
												dataIndex: 'sourceName',
												//鼠标点击时能够编辑
											}, {
												text: '收货单位',
												sortable: true,
												dataIndex: 'sourceName',
												//鼠标点击时能够编辑
											}, {
												text: '结算单位',
												sortable: true,
												dataIndex: 'sourceName',
												//鼠标点击时能够编辑
											}, {
												text: '申请车数',
												sortable: true,
												dataIndex: 'sourceName',
												//鼠标点击时能够编辑
											}, {
												text: '申请吨数',
												sortable: true,
												dataIndex: 'sourceName',
												//鼠标点击时能够编辑
											}, {
												text: '所属行业',
												sortable: true,
												dataIndex: 'sourceName',
												//鼠标点击时能够编辑
											}, {
												text: '运输起始日期',
												sortable: true,
												dataIndex: 'sourceName',
												//鼠标点击时能够编辑
											}, {
												text: '运输终止日期',
												sortable: true,
												dataIndex: 'sourceName',
												//鼠标点击时能够编辑
											}, {
												text: '备注',
												sortable: true,
												dataIndex: 'sourceName',
												//鼠标点击时能够编辑
											}],

											// 保存和取消按钮
											dockedItems: [
												//各种按钮布局
												{
													xtype: 'toolbar',
													items: [{
															text: '新增',
															tooltip: '',
															iconCls: 'add',
															listeners: {
																click: function() {
																	formxqtj.form.reset();
																	htxzWin.add(formxqtj);
																	htxzWin.show();
																}
															}
														}, {
															text: '无合同新增',
															tooltip: '',
															iconCls: 'add',
															listeners: {
																click: function() {
																	whtformxqtj.form.reset();
																	whthtxzWin.add(whtformxqtj);
																	whthtxzWin.show();
																}
															}
														}, {
															text: '新增新户',
															tooltip: '',
															iconCls: 'add',
															listeners: {
																click: function() {
																	xzxhformxqtj.form.reset();
																	xzxhhtxzWin.add(xzxhformxqtj);
																	xzxhhtxzWin.show();
																}
															}
														}, {
															text: '修改',
															tooltip: ' 修改一条数据',
															iconCls: 'edit',
															listeners: {
																'click': function() {
																	var record = gridcontantxq.getSelectionModel().getSelection();
																	if(record == undefined || record == '') {
																		Ext.Msg.alert('信息', '请选择一条数据');
																		return;
																	}
																	if(record.length >= 2) {
																		Ext.Msg.alert('信息', '只可以选择一条数据');
																		return;
																	}
																	htxzWin.add(formxqtj);
																	htxzWin.show();
																	formxqtj.getForm().loadRecord(record[0]);
																	//Ext.getCmp('formpid').readOnly = true;
																	//formxqtj.getForm().url = '/XJManager/base/updateProduct.do';
																	gridcontantxq.getSelectionModel().clearSelections();
																	gridcontantxq.getView().refresh();
																}

															}
														}, {
															text: '批次修改',
															tooltip: ' 修改一条数据',
															iconCls: 'edit',
															listeners: {
																click: function() {
																	var agridpcxz = Ext.create(
																		'Ext.grid.Panel', {
																			id: '',
																			region: 'east',
																			//grid 的标题
																			title: '',
																			selModel: sm,
																			//引入仓库
																			store: store,
																			loadMask: true,
																			listeners: {
																				itemdblclick: function(
																					dataview,
																					record,
																					item,
																					index,
																					e) {
																					proForm
																						.getForm()
																						.loadRecord(
																							record);
																					newWin
																						.hide();
																				}
																			},
																			//定义列
																			columns: [{
																				id: 'coId',
																				text: '发站',
																				sortable: true,
																				//与定义的类中的属性匹配
																				dataIndex: 'coId',
																				flex: 0,
																				width: 75,
																			}, {
																				text: '到站',
																				sortable: true,
																				dataIndex: 'coShort',
																				width: 75
																			}, {
																				text: '到站局别',
																				sortable: true,
																				dataIndex: 'coName',
																				width: 75
																			}, {
																				text: '省份',
																				sortable: true,
																				dataIndex: 'coPhone',
																				width: 75
																			}, {
																				text: '收货单位',
																				sortable: true,
																				dataIndex: 'coPostcode',
																				width: 75
																			}, {
																				text: '结算单位',
																				sortable: true,
																				dataIndex: 'coFax',
																				width: 75
																			}, {
																				text: '申请车数',
																				sortable: true,
																				dataIndex: 'coLeader',
																				width: 75
																			}, {
																				text: '申请吨数',
																				sortable: true,
																				dataIndex: 'coAddress',
																				width: 75
																			},{
																				text: '所属行业',
																				sortable: true,
																				dataIndex: 'coAddress',
																				width: 75
																			},{
																				text: '运输起始日期',
																				sortable: true,
																				dataIndex: 'coAddress',
																				width: 75
																			},{
																				text: '运输终止日期',
																				sortable: true,
																				dataIndex: 'coAddress',
																				width: 75
																			},{
																				text: '备注',
																				sortable: true,
																				dataIndex: 'coAddress',
																				width: 75
																			}],
																			stripeRows: true,
																			height: '100%',
																			width: 1200,
																			frame: false,
																			bbar: Ext.create('Ext.PagingToolbar', {
																				pageSize: 5,
																				store: store,
																				displayInfo: true,
																				plugins: Ext.create('Ext.ux.ProgressBarPager', {})
																			}),
																		});
																	////////////////////////////////////////////
																	Ext.create("Ext.window.Window", {
																			title: '',
																			closable: true,
																			closeAction: 'hide',
																			width: 600,
																			minWidth: 350,
																			height: 320,
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
																				region: 'center',
																				items: [agridpcxz],
																				width: 200,
																				split: true,
																				floatable: false,
																				autoScroll: true
																			}]
																	}).show();
															}
														}
													},
													{
														text: '删除',
														tooltip: '',
														iconCls: 'remove',
														listeners: {
															click: function() {

															}

														}

													},

												]
											}
										],

										//table边框的设定
										stripeRows: true,
										height: 275,
										width: 940,
										frame: false,

										bbar: Ext.create('Ext.PagingToolbar', {
											pageSize: 10,
											store: store,
											displayInfo: true,
											plugins: Ext.create('Ext.ux.ProgressBarPager', {})
										}),

									});
								////////////////////////////////////////////////////////////
								Ext.History.init();
								////////////////////////////////////////////////////////////////  

								var i = 1;
								xqWin = Ext
								.create(
									"Ext.window.Window", {
										/*title:'搜索', */
										closable: false,
										closeAction: 'hide',
										autoScroll: true,
										width: 950,
										height: 500,
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
											id: 'xiangqingz',
											region: 'north',
											title: '详细信息',
											items: [Formxq],
											height: 130,
											dockedItems: [
												//各种按钮布局
												{
													xtype: 'toolbar',
													items: [{
															text: '更多信息',
															tooltip: '',
															iconCls: 'detailed',
															listeners: {
																'click': function() {
																	if(i == 1) {
																		Ext.getCmp('xiangqingz').setHeight(266);
																		i++;
																	} else {
																		Ext.getCmp('xiangqingz').setHeight(130);
																		i = 1;
																	}

																}
															}
														}, {
															text: '概要信息',
															iconCls: 'detailed',
															handler: function() {
																xqWin.removeAll();
																xqWin.close();
															}
														}, {
															text: '上一条',
															iconCls: 'foward',
														}, {
															text: '下一条',
															iconCls: 'next',
														}

													]
												}
											],

										}, {
											region: 'north',
											items: [gridcontantxq],
											//width: 200,
											layout: 'fit',
											height: 300,
											split: true,
											floatable: false,
											autoScroll: true
										}]
									})
								.show();

							}
						}
					}]
			}
		],

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