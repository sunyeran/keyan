Ext.define('keyansys.view.notice.NoticeDeployList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.noticedeploylist',

    bind : '{notices}',

    reference: 'noticedeploylist',

    columns: [
       /* {
           xtype:Ext.create ('Ext.grid.RowNumberer',{ text: '序号', width: 40 })
        },*/
        {
            text: '标题',
            flex: 1,
            dataIndex: 'title'
        },
        {
            text: '发布部门', 
            width: 100,
            dataIndex: 'sender'
        }
       
        
    ],
    initComponent: function() {
        var me = this;

        me.columns = Ext.Array.merge(me.columns,
            [{
                xtype    : 'datecolumn',
                text     : '发布时间', 
                width    : 100,  
                dataIndex: 'last_update',
               // format: 'Y-m-j',
                renderer:Ext.util.Format.dateRenderer('Y年m月d日'),
             //    renderer:Ext.util.Format.dateRenderer('Y-m-d'), 
                filter: true
                
            }]
        );

        me.callParent(arguments);
    } ,  
    dockedItems: [
    {
            dock: 'bottom',
            xtype: 'pagingtoolbar',
            bind: '{notices}',
            displayInfo: true,
            displayMsg: '当前显示通知公告第 {0} 条到第 {1}条, 共 {2}条',
            emptyMsg: "当前没有通知公告"
        }
           
    ],
     plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : [
            '<p><b>公告内容:</b> {content}</p><br>'
           
        ]
    }]
});