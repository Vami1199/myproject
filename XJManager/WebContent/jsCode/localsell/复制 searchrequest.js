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
	////////////客户相关开始////////////////////////////////////////////
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
	var khWin = Ext.create("Ext.window.Window", {
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
	});
	///////////////客户相关结束////////////////////////////////////////////////
	////////////////机构相关开始///////////////////////////////////////////////////
	Ext.define('addcompany', {
		extend: 'Ext.data.Model',
		idProperty: '',
		fields: [{
			name: 'coId',
			type: 'string'
		}, {
			name: 'coShort',
			type: 'string'
		}, {
			name: 'coName',
			type: 'string'
		}, {
			name: 'coPhone',
			type: 'string'
		}, {
			name: 'coPostcode',
			type: 'integer'
		}, {
			name: 'coFax',
			type: 'string'
		}, {
			name: 'coLeader',
			type: 'string'
		}, {
			name: 'coAddress',
			type: 'string'
		}, {
			name: 'coLinkman',
			type: 'string'
		}]
	});
	var companyStore = Ext.create('Ext.data.Store', {
		model: 'addcompany',
		remoteSort: true,
		getMethod: function() {
			return 'POST';
		},
		//亮点，设置请求方式,默认为GET         
		//每页显示的数据
		pageSize: 5,
		proxy: {
			type: "ajax",
			url: '',
			reader: {
				type: "json",
				root: "coPostcode"
			}
		},
		autoLoad: true
	});
	var companyGrid = Ext.create('Ext.grid.Panel', {
		id: 'agrid',
		region: 'east',
		title: '单位列表',
		store: companyStore,
		loadMask: true,
		listeners: {
			itemdblclick: function(dataview, record, item, index, e) {
				addkhForm.getForm().loadRecord(record);
				companyWin.hide();
			}
		},
		//定义列
		columns: [{
			id: 'coId',
			text: '机构编号',
			sortable: true,
			//与定义的类中的属性匹配
			dataIndex: 'coId',
			flex: 0,
			width: 75,
		}, {
			text: '机构简称',
			sortable: true,
			dataIndex: 'coShort',
			width: 75
		}, {
			text: '机构全称',
			sortable: true,
			dataIndex: 'coName',
			width: 75
		}, {
			text: '联系电话',
			sortable: true,
			dataIndex: 'coPhone',
			width: 75
		}, {
			text: '邮政编码',
			sortable: true,
			dataIndex: 'coPostcode',
			width: 75
		}, {
			text: '传真',
			sortable: true,
			dataIndex: 'coFax',
			width: 75
		}, {
			text: '负责人',
			sortable: true,
			dataIndex: 'coLeader',
			width: 75
		}, {
			text: '地址',
			sortable: true,
			dataIndex: 'coAddress',
			width: 75
		}, {
			text: '联系人',
			sortable: true,
			dataIndex: 'coLinkman',
			width: 75
		}],
		stripeRows: true,
		height: 320,
		width: 1200,
		frame: false,
	});
	var companyForm = Ext.create('Ext.form.Panel', {
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
			xtype: 'textfield',
			fieldLabel: '机构编号',
			name: 'coId'
		}, {
			xtype: 'textfield',
			fieldLabel: '机构简称',
			name: 'coShort',

		}, {
			xtype: 'textfield',
			fieldLabel: '机构电话',
			name: 'coPhone',
		}, {
			xtype: 'textfield',
			fieldLabel: '机构传真',
			name: 'coFax',
		}, {
			xtype: 'textfield',
			fieldLabel: '机构邮编',
			name: 'coPostcode',
		}, {
			xtype: 'textfield',
			fieldLabel: '机构负责人',
			name: 'coLeader',
		}],

		buttons: [{
			text: "搜索",
			iconCls: "btn-save",
			handler: function() {
				var all = companyForm.getForm().getValues();
				var url = '/XJManager/base/companyList.do?1=1';
				var id = all['coId'];
				var short = all['coShort'];
				var phone = all['coPhone'];
				var fax = all['coFax'];
				var postcode = all['coPostcode'];
				var leader = all['coLeader'];
				if(id != '') {
					url = url + '&coId=' + id;
				}
				if(short != '') {
					url = url + '&coShort=' + short;
				}
				if(phone != '') {
					url = url + '&coPhone=' + phone;
				}
				if(fax != '') {
					url = url + '&coFax=' + fax;
				}
				if(postcode != '') {
					url = url + '&coPostcode=' + postcode;
				}
				if(leader != '') {
					url = url + '&coLeader=' + leader;
				}
				companyStore.getProxy().url = url;
				companyStore.load();
			}
		}, {
			text: "重置",
			iconCls: "reset",
			handler: function() {
				this.up('form').getForm().reset();
			}
		}]
	});
	var companyWin = Ext.create("Ext.window.Window", {
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
		/*listeners: {
			'hide': function() {
				this.removeAll();
			}
		},*/
		items: [{
			region: 'west',
			title: '部门搜索',
			items: [companyForm],
			width: 200,
			split: true,
			//是否可缩小
			collapsible: true,
			floatable: false
		}, {
			region: 'center',
			items: [companyGrid],
			width: 200,
			split: true,
			floatable: false,
			autoScroll: true
		}]
	});
	////////////////机构相关结束///////////////////////////////////////////////////
	//////////////筛选相关开始///////////////////////////////////////
	var formSearch = Ext.create('Ext.form.Panel', {
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
		width: 400,
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
					fieldLabel: '编号',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'datefield',
					fieldLabel: '开票日期（开始）',
					width: 360,
					name: 'yYear',
				}, {
					xtype: 'datefield',
					fieldLabel: '开票日期（结束）',
					width: 360,
					name: 'yYear',
				}, {

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "客户名称",
						flex: 1,
						width: 338,
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
								khWin.show();
							}
						}
						/************创建单位搜索框结束***********/
					}]

				}, {

					xtype: "fieldcontainer",
					layout: "hbox",
					items: [{
						xtype: "textfield",
						fieldLabel: "执行单位",
						flex: 1,
						width: 338,
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
								companyWin.show();
							}
						}
						/************创建单位搜索框结束***********/
					}]

				}, {
					xtype: 'combo',
					store: Ext.create('Ext.data.ArrayStore', {
						fields: [{
							name: 'cykey',
							value: 'Integer'
						}, {
							name: 'cyValue',
							value: 'String'
						}],
						data: [
							[0, '客户自提'],
							[1, '代运'],
						]
					}),
					name: 'csType',
					hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'cykey',
					displayField: 'cyValue',
					fieldLabel: '承运方式',
					width: 360,
					queryMode: 'local',
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
							name: 'bjkey',
							value: 'Integer'
						}, {
							name: 'bjValue',
							value: 'String'
						}],
						data: [
							[0, '客户自提'],
							[1, '代运'],
						]
					}),
					name: 'csType',
					hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'bjkey',
					displayField: 'bjValue',
					fieldLabel: '红蓝标记',
					width: 360,
					queryMode: 'local',
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
							name: 'mzkey',
							value: 'Integer'
						}, {
							name: 'mzValue',
							value: 'String'
						}],
						data: [
							[0, '煤泥'],
							[1, '地销商品煤'],
							[2, '块煤'],
							[3, '脏煤'],
							[4, '原煤（东煤场）'],
							[5, '原煤（西煤场）'],
							[6, '基建煤'],
							[7, '掘进煤'],
							[8, '掘进煤（筛上物）'],
							[9, '低值煤'],
							[10, '低值块煤'],
							[11, '脏杂煤'],
							[12, '脏杂煤泥'],
						]
					}),
					name: 'csType',
					hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'mzkey',
					displayField: 'mzValue',
					fieldLabel: '煤种',
					width: 360,
					queryMode: 'local',
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
							name: 'statuskey',
							value: 'Integer'
						}, {
							name: 'statusValue',
							value: 'String'
						}],
						data: [
							[0, '草拟'],
							[1, '进行'],
							[2, '生效'],
						]
					}),
					name: 'csType',
					hiddenName: 'csType', // 提交到后台的input的name ，对应下面store里的''id，必须要填
					emptyText: '-----请选择-----',
					valueField: 'statuskey',
					displayField: 'statusValue',
					fieldLabel: '状态',
					width: 360,
					queryMode: 'local',
					selectOnTab: false,
					typeAhead: false,
					editable: false,
					onReplicate: function() {
						this.getStore().clearFilter();
					}
				}

			],
		}, ],
	});
	////////////////////////////////////////////////////////
	var winSearch = new Ext.Window({

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
	///////////////筛选相关结束//////////////////////////////////////////////////////
	Ext.define('PMonthrequest', {
		extend: 'Ext.data.Model',
		idProperty: '',
		//定义类的属性
		fields: [{
				name: 'apId',
				type: 'integer'
			}, {
				name: 'apDate',
				type: 'date',
				dateFormat: 'n/j h:i'
			}, {
				name: 'apCustomerid',
				type: 'integer'
			}, {
				name: 'apDepartmentid',
				type: 'string'
			}, {
				name: 'apMethod',
				type: 'byte'
			}, {
				name: 'apPay',
				type: 'byte'
			}, {
				name: 'zongjine',
				type: 'long'
			}, {
				name: 'apState',
				type: 'byte'
			},

		]
	});
	//定义数据源将被引入到对应的列中
	var myData = [
		['221', '9/1 12:00', 12, '66', 1, 0, 9999999, 1]

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
		title: '跟踪查询购煤申请单',
		//引入仓库
		store: store,
		//引入选择框
		selModel: sm,
		//定义列
		columns: [{
				id: '',
				text: '编号',
				sortable: true,
				//与定义的类中的属性匹配
				dataIndex: 'apId',
				flex: 0,
				width: 75,
			}, {
				text: '开票日期',
				sortable: true,
				//格式化日期
				renderer: Ext.util.Format.dateRenderer('m/d/Y'),
				dataIndex: 'apDate',
				width: 75,
			}, {
				text: '客户名称',
				sortable: true,
				//格式化日期
				dataIndex: 'apCustomerid',
				width: 75,
			}, {
				text: '执行单位',
				sortable: true,
				//格式化日期
				dataIndex: 'apDepartmentid',
				width: 75,
			}, {
				text: '运输方式',
				sortable: true,
				//格式化日期
				dataIndex: 'apMethod',
				width: 75,
			}, {
				text: '付款方式',
				sortable: true,
				//格式化日期
				dataIndex: 'apPay',
				width: 75,
			}, {
				text: '总金额',
				sortable: true,
				//格式化日期
				dataIndex: 'zongjine',
				width: 75,
			}, {
				text: '状态',
				sortable: true,
				//格式化日期
				dataIndex: 'apState',
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

		dockedItems: [{
			xtype: 'toolbar',
			items: [
				{
					text: '筛选',
					tooltip: '',
					iconCls: 'search',
					listeners: {
						click: function() {
							formSearch.form.reset();
							winSearch.add(formSearch);
							winSearch.show();
						}
					}
				}, '-', 
				{
					text: '审批意见',
					iconCls: 'shenpiyijian',
					listeners: {

						'click': function() {
							////////////////////////////////////////////
							var winyj
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
				},'-',{
					
					text: '打印',
					iconCls: 'print',
					listeners: {
						click:function(){
							
						}
					}
				
				},'-',
				{
					text: '详细信息',
					iconCls: 'detailed',
					listeners: {
						click: function() {
							///////////////详情form展示/////////////////////////////
							var showForm = Ext.create('Ext.form.Panel', {
								region: '',
								plain: true,
								border: false,
								bodyPadding: false,
								width: 1000,
								layout: 'form',
								//height:100,
								url: '',
								fieldDefaults: {
									anchor: '100%'
								},

								items: [
									//////////////////////////////////////////////////////////////////////
									{
										layout: 'column',
										frame: true,
										items: [{
											xtype: 'displayfield',
											fieldLabel: '编号',
											value: '测试',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '开票日期',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '客户名称',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '承运方式',
											readOnly: true,
											value: '出卖方测试',
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '运输单位',
											value: '北京市丰台区',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '执行单位',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '付款方式',
											value: '万达',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '购煤量（吨）',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '金额',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '实发量（吨）',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '结存量（吨）',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '汇票号',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '收款员',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '经办人',
											value: '',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '开票员',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '制定人',
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
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '提货期限',
											readOnly: true,
											width: 300
										}, {
											xtype: 'displayfield',
											fieldLabel: '红蓝标记',
											readOnly: true,
											width: 300
										}, {
											xtype: 'textarea',
											fieldLabel: '备注',
											readOnly: true,
											disabled: true,
											width: 700
										}],
									},
									//////////////////////////////////////////////////////////////////////

								],

							});
							///////////////提货清单信息/////////////////////////////
							var gridtihuo = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								//autoScroll: true,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
									id: 'sourceId',
									text: '编号',
									sortable: true,
									//与定义的类中的属性匹配
									dataIndex: 'cName',
									flex: 0,
									width: 75,
								}, {
									text: '红蓝标记',
									sortable: true,
									dataIndex: 'sourceName',
									width: 75,
								}, {
									text: '过磅日期',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
								}, {
									text: '车号',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
								}, {
									text: '承运人',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
								}, {
									text: '净重（吨）',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
								}, {
									text: '累计（吨）',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
								}, {
									text: '结存（吨）',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
								}, {
									text: '司磅员',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
								}, {
									text: '监磅员',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
								}, {
									text: '记账标记',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
								}, {
									text: '磅单状态',
									sortable: true,
									dataIndex: 'sourceCompanyid',
									width: 75,
									width: 200,
								}],
								stripeRows: true,
								height: '100%',
								width: 'auto',
								autoScroll: true,
								frame: false,
								//autoScroll: true,
								bbar: Ext.create('Ext.PagingToolbar', {
									pageSize: 5,
									store: store,
									displayInfo: true,
									plugins: Ext.create('Ext.ux.ProgressBarPager', {})
								}),

							});
							////////////////购煤申请单信息////////////////////////////////////////////
							var gridgoumei = Ext.create('Ext.grid.Panel', {
								//grid 的标题
								selModel: sm,
								//引入仓库
								store: store,
								//引入选择框
								//定义列
								columns: [{
										id: '',
										text: '产品名称',
										sortable: true,
										//与定义的类中的属性匹配
										dataIndex: 'cName',
										flex: 0,
									}, {
										text: '发往地点',
										sortable: true,
										dataIndex: 'sourceName',
									}, {
										text: '单价',
										sortable: true,
										dataIndex: 'sourceName',
									}, {
										text: '数量（吨）',
										sortable: true,
										dataIndex: 'sourceCompanyid',
									}, {
										text: '结存量（吨）',
										sortable: true,
										dataIndex: 'sourceCompanyid',
									}, {
										text: '金额',
										sortable: true,
										dataIndex: 'sourceCompanyid',
									}, {
										text: '运价',
										sortable: true,
										dataIndex: 'sourceCompanyid',
									}, {
										text: '运费',
										sortable: true,
										dataIndex: 'sourceCompanyid',
									}, {
										text: '备注',
										sortable: true,
										width: 300,
										dataIndex: 'sourceCompanyid',
									},

								],

								// 保存和取消按钮
								//dockedItems: [],

								//table边框的设定
								stripeRows: true,
								height: '100%',
								width: 'auto',
								frame: false,
								autoScroll: true,
								bbar: Ext.create('Ext.PagingToolbar', {
									pageSize: 5,
									store: store,
									displayInfo: true,
									plugins: Ext.create('Ext.ux.ProgressBarPager', {})
								}),

							});
							//////////////////////////////////////////////////////////////
							Ext.History.init();
							////////////////////////////////////////////////////////////////  
							var tab = Ext.create('Ext.TabPanel', {
								id: 'main-tabs',
								height: 300,
								width: 1000,
								activeTab: 0,
								//autoScroll: true,
								defaults: {
									padding: 10
								},

								items: [{
									xtype: 'tabpanel',
									title: '购煤申请单明细',
									activeTab: 0,
									padding: 5,
									border: true,
									plain: true,
									//autoScroll: true,
									defaults: {
										padding: 10
									},
									items: [{
										title: '购煤',
										autoScroll: true,
										items: [gridgoumei],
										//autoScroll: true,
									}],
									listeners: {
										tabchange: onTabChange
									}
								}, {
									xtype: 'tabpanel',
									title: '提货清单',
									activeTab: 0,
									padding: 5,
									border: true,
									plain: true,
									defaults: {
										padding: 10
									},
									items: [{
										title: '提货',
										items: [gridtihuo],
									}],
									listeners: {
										tabchange: onTabChange
									}
								}],
								listeners: {
									tabchange: onTabChange,
									afterrender: onAfterRender
								}
							});
							//////////////////////////////////////////////////////////////      
							var tokenDelimiter = ':';

							function onTabChange(
								tabPanel, tab) {
								var tabs = [],
									ownerCt = tabPanel.ownerCt,
									oldToken, newToken;

								tabs.push(tab.id);
								tabs
									.push(tabPanel.id);

								while(ownerCt &&
									ownerCt
									.is('tabpanel')) {
									tabs
										.push(ownerCt.id);
									ownerCt = ownerCt.ownerCt;
								}

								newToken = tabs
									.reverse()
									.join(
										tokenDelimiter);

								oldToken = Ext.History
									.getToken();

								if(oldToken === null ||
									oldToken
									.search(newToken) === -1) {
									Ext.History
										.add(newToken);
								}
							}

							function onAfterRender() {
								Ext.History
									.on(
										'change',
										function(
											token) {
											var parts, tabPanel, length, i;

											if(token) {
												parts = token
													.split(tokenDelimiter);
												length = parts.length;

												// setActiveTab in all nested tabs
												for(i = 0; i < length - 1; i++) {
													Ext
														.getCmp(
															parts[i])
														.setActiveTab(
															Ext
															.getCmp(parts[i + 1]));
												}
											}
										});

								// This is the initial default state.  Necessary if you navigate starting from the
								// page without any existing history token params and go back to the start state.
								var activeTab1 = Ext
									.getCmp(
										'main-tabs')
									.getActiveTab(),
									activeTab2 = activeTab1
									.getActiveTab();

								onTabChange(
									activeTab1,
									activeTab2);
							}
							var i = 1;
							var win = Ext.create("Ext.window.Window", {
									/*title:'搜索', */
									closable: false,
									closeAction: 'hide',
									width: 1000,
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
										id: 'xiangqing',
										region: 'north',
										title: '详细信息',
										items: [showForm],
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
																Ext.getCmp('xiangqing').setHeight(288);
																i++;
															} else {
																Ext.getCmp('xiangqing').setHeight(130);
																i = 1;
															}

														}
													}
												}, {
													text: '概要信息',
													iconCls: 'detailed',
													handler: function() {
														win.removeAll();
														win.close();
													}
												}]
											}
										],

									}, {
										region: 'north',
										items: [tab],
										//width: 200,
										split: true,
										floatable: false,
										//autoScroll: true
									}]
								})
								.show();
						}

					}
				}
			]
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