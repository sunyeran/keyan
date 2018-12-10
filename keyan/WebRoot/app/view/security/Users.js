Ext.define('keyan.view.security.Users', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.users',

    requires: [
        'keyan.view.security.UsersList'
    ],

    layout: {
        type: 'fit'
    },

    items: [
        {
            xtype: 'userslist'
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
