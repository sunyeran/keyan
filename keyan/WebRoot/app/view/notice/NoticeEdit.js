Ext.define('keyan.view.notice.NoticeEdit', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.noticeeditgrid',

    requires: [
         'keyan.view.notice.NoticeList'
    ],

    layout: {
              type:'fit'
    },
    items:[
    { 
       xtype:'noticelist'
    }
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            flex: 1,
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: '添加',
                    itemId: 'add',
                    iconCls: 'add'
                },
                {
                    xtype: 'button',
                    text: '编辑',
                    itemId: 'edit',
                    iconCls: 'edit'
                },
                {
                    xtype: 'button',
                    text: '删除',
                    itemId: 'delete',
                    iconCls: 'delete'
                }
            ]
        }
    ]
});