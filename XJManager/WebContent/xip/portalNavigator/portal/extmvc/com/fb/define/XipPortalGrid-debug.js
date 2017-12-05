/**
 *一个简单的表格组件，独立的组件 
 *@note 仅仅只是一个例子
 */
Ext.define('com.fb.define.XipPortalGrid', {
    extend: 'Ext.panel.Panel',
    alias: 'xip.gridportlet',
    uses: [
        'Ext.data.ArrayStore'
    ],
    height: 300,
    change: function(val) {
        if (val <26) {
            return '<span style="color:green;">' + val + '</span>';
        } else if (val < 88 && val>25) {
            return '<span style="color:orange;">' + val + '</span>';
        }else{
        	return '<span style="color:red;">' + val + '</span>';
        }
        return val;
    },

    initComponent: function(){
       var myData = [
                 ['黑河', '黑龙江', 19,  '优',  'A'],
                 ['鹤岗', '黑龙江', 19,  '优',  'A'],
                 ['阿里', '西藏',  21,  '优',  'A'],
                 ['淳安', '浙江',  21,  '优',  'A'],
                 ['大兴安岭', '黑龙江', 19,  '优',  'A'],
                 ['普洱', '云南', 22,  '优',  'A'],
                 ['兴安盟', '内蒙古', 23,  '优',  'A'],
                 ['陇南', '甘肃', 25,  '优',  'A'],
                 ['密云', '北京', 25,  '优',  'A'],
                 ['龙岩', '福建', 19,  '优',  'A'],
                 ['怀柔', '北京', 19,  '优',  'A'],
                 ['葫芦岛', '辽宁', 55,  '良',  'B'],
                 ['盐城', '江苏', 57,  '良',  'B'],
                 ['海口', '海南', 67,  '良',  'B'],
                 ['合肥', '安徽', 69,  '良',  'B'],
                 ['九江', '江西', 70,  '良',  'B'],
                 ['宽城', '河北', 78,  '良',  'B'],
                 ['岳阳', '湖南', 88,  '良',  'B'],
                 ['邵阳', '湖南', 110,  '中度污染',  'C'],
                 ['沧州', '河北', 119,  '轻度污染',  'C'],
                 ['石家庄', '河北', 154,  '中度污染',  'D'],
                 ['晋城', '山西', 154,  '中度污染',  'D'],
                 ['泸州', '四川', 154,  '中度污染',  'D'],
                 ['商洛', '陕西', 254,  '重度污染',  'D']
                 
             ];

        Ext.apply(this, {
        	layout:'fit',
        	 height: this.height,
        	items:{
        		xtype:'gridpanel',
                store: Ext.create('Ext.data.ArrayStore', {
                    fields: [
                             {name: 'CITY'},
                             {name: 'PROVINCE' },
                             {name: 'QUALITY',  type: 'int'}
                          ],
                          data: myData
                      }),
                stripeRows: true,
                columnLines: true,
                autoDestory:true,
                columns: [{
                    id       :'company',
                    text   : '城市',
                    //width: 120,
                    flex: 1,
                    sortable : true,
                    dataIndex: 'CITY'
                },{
                    text   : '省份',
                    width    : 75,
                    sortable : true,
                    dataIndex: 'PROVINCE'
                },{
                    text   : '空气质量',
                    width    : 75,
                    sortable : true,
                    renderer : this.change,
                    dataIndex: 'QUALITY'
                }]
            
        	}
        });

        this.callParent(arguments);
    }
});
