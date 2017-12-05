//引入改页面所需类库  

Ext.require([

'Ext.grid.*',

'Ext.data.*',

'Ext.util.*',

'Ext.state.*'

]);

// 入口函数，所有Ext文件入口函数都是Ext.onReady

Ext.onReady(function() {

	// 初始化提示框

	Ext.QuickTips.init();

	// setup the state provider, all state information will be saved to a cookie

	Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));

	// sample static data for the store，创建数据源

	var myData = [

	[ '3m Co', 71.72, 0.02, 0.03, '9/1 12:00am' ],

	[ 'Alcoa Inc', 29.01, 0.42, 1.47, '9/1 12:00am' ],

	[ 'Altria Group Inc', 83.81, 0.28, 0.34, '9/1 12:00am' ],

	[ 'American Express Company', 52.55, 0.01, 0.02, '9/1 12:00am' ],

	[ 'Wal-Mart Stores, Inc.', 45.45, 0.73, 1.63, '9/1 12:00am' ]

	];

	/**
	 * 
	 * Custom function used for column renderer
	 * 
	 * @param {Object}
	 *            val
	 * 
	 * 根据表格字段内容设置显示效果，此方法与renderer配合使用
	 * 
	 */

	function change(val) {

		if (val > 0) {

			return '<span style="color:green;">' + val + '</span>';

		} else if (val < 0) {

			return '<span style="color:red;">' + val + '</span>';

		}

		return val;

	}

	/**
	 * 
	 * Custom function used for column renderer
	 * 
	 * @param {Object}
	 *            val
	 * 
	 */

	function pctChange(val) {

		if (val > 0) {

			return '<span style="color:green;">' + val + '%</span>';

		} else if (val < 0) {

			return '<span style="color:red;">' + val + '%</span>';

		}

		return val;

	}

	// create the data store定义表格数据源store

	var store = Ext.create('Ext.data.ArrayStore', {

		fields : [

		{
			name : 'company'
		},

		{
			name : 'price',
			type : 'float'
		},

		{
			name : 'change',
			type : 'float'
		},

		{
			name : 'pctChange',
			type : 'float'
		},

		{
			name : 'lastChange',
			type : 'date',
			dateFormat : 'n/j h:ia'
		}

		],

		data : myData

	});

	// 上面定义的store为静态数据源，及数据为固定的，多数情况下数据是从后台请求所得，请求后台数据的store定义方法如下所示：

	var resSubnetStore = Ext.create('Ext.data.Store', {

		// 分页大小

		pageSize : 15,

		// 表格包含的列，此处的列名应与后台返回的数据列名一一对应

		fields : [ 'subnetId', 'subnetIp', 'subnetMask', 'beginIp', 'endIp',
				'broadIp' ],

		// 数据源

		proxy : {

			// 请求方式为ajax

			type : 'ajax',

			// 数据源URL

			url : './netSubNetInfoAction!loadAction.do',

			reader :

			{

				// 后台数据解析格式为json

				type : 'json',

				// 后台数据对象，返回的数据存在list中

				root : 'list',

				// 表格中的数据总条数

				totalProperty : 'allRow',

				successProperty : 'success'

			},

			// 设置列表中的数据是否可以排序，当此属性值为false时，列表中的值无法排序

			simpleSortMode : true

		},

		sorters : [ {

			// 排序字段。

			property : 'date',

			// 排序类型，默认为 ASC

			direction : 'DESC'

		} ]

	});

	// create the Grid创建表格

	var grid = Ext.create('Ext.grid.Panel', {

		// 设置表格数据源store

		store : store,

		stateful : true,

		stateId : 'stateGrid',

		// 列表包含的列

		columns : [

				{

					// 列标题

					text : 'Company',

					flex : 1,

					// 是否可排序，当此属性值为true时，该列标题栏显示排序箭头，点击标题栏可实现排序功能

					sortable : false,

					// 与数据源store的对应字段绑定

					dataIndex : 'company'

				},

				{

					text : 'Price',

					width : 75,

					sortable : true,

					renderer : 'usMoney',

					dataIndex : 'price'

				},

				{

					text : 'Change',

					width : 75,

					sortable : true,

					// 对该字段值进行操作

					renderer : change,

					dataIndex : 'change'

				},

				{

					text : '% Change',

					width : 75,

					sortable : true,

					renderer : pctChange,

					dataIndex : 'pctChange'

				},

				{

					text : 'Last Updated',

					width : 85,

					sortable : true,

					renderer : Ext.util.Format.dateRenderer('m/d/Y'),

					dataIndex : 'lastChange'

				},

				{

					// xtype表示类型，actioncolumn为操作栏

					xtype : 'actioncolumn',

					width : 50,

					items : [
							{

								icon : '../shared/icons/fam/delete.gif', // Use
																			// a
																			// URL
																			// in
																			// the
																			// icon
																			// config

								tooltip : 'Sell stock',

								// 响应方法

								handler : function(grid, rowIndex, colIndex) {

									// 获取鼠标点击行的信息

									var rec = store.getAt(rowIndex);

									// rec.get('company')可以获取改行company列的信息

									alert("Sell " + rec.get('company'));

								}

							},
							{

								getClass : function(v, meta, rec) { // Or return
																	// a class
																	// from a
																	// function

									if (rec.get('change') < 0) {

										this.items[1].tooltip = 'Hold stock';

										return 'alert-col';

									} else {

										this.items[1].tooltip = 'Buy stock';

										return 'buy-col';

									}

								},

								handler : function(grid, rowIndex, colIndex) {

									var rec = store.getAt(rowIndex);

									alert((rec.get('change') < 0 ? "Hold "
											: "Buy ")
											+ rec.get('company'));

								}

							} ]

				}

		],

		height : 350,

		width : 600,

		title : 'Array Grid',

		// 将该列表显示在页面中id为grid-example的div中

		renderTo : 'grid-example',

		viewConfig : {

			// 斑马线效果

			stripeRows : true

		}

	});

});