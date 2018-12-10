Ext.define('keyansys.view.user.User', {
    extend: 'Ext.panel.Panel',
    xtype: 'user',
    
    requires: [
        'keyansys.util.Util',
        'Ext.form.Panel',
        'keyansys.util.Glyphs',
        'keyansys.view.user.UsersGrid',
        'keyansys.view.user.UserModel',
        'keyansys.view.user.UserController',
  
        'keyansys.view.user.UserForm'
        
    ],

    controller: 'user',
    viewModel: {
        type: 'user'
    },
    session: true,

    frame: true,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'users-grid',
            flex: 1
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    itemId:'add',
                    text: '添加',
                    glyph: 'xf067@FontAwesome',
                   // glyph: keyansys.util.Glyphs.getGlyph('add'),
                    
                    listeners: {
                        click: 'onAdd'
                    }
                },
                {
                    xtype: 'button',
                    text: '编辑',
                    itemId:'edit',
                    glyph: 'xf040@FontAwesome',//keyansys.util.Glyphs.getGlyph('edit'),
                    listeners: {
                        click: 'onEdit'
                    },
                    bind: {
                        disabled: '{!usersGrid.selection}'
                    }
                },
                {
                    xtype: 'button',
                    text: '删除',
                    glyph: 'xf1f8@FontAwesome',//keyansys.util.Glyphs.getGlyph('destroy'),
                    listeners: {
                        click: 'onDelete'
                    },
                    bind: {
                        disabled: '{!usersGrid.selection}'
                    }
                }
            ]
        }
    ]
});