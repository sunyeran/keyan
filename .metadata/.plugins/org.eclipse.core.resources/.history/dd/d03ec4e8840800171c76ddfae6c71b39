Ext.define('keyansys.view.notice.NoticeDeploy', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.noticedeploy',

  requires: [
        'Ext.grid.plugin.RowExpander',
        //'keyansys.view.notice.Notices',
        'keyansys.view.notice.NoticeProfile',
        'keyansys.view.notice.NoticeDeployList',
        'keyansys.util.Glyphs',
     //     'keyansys.util.Util',
        'keyansys.view.toolbar.AddEditDelete',
        'keyansys.view.notice.NoticeModel',
        'keyansys.view.notice.NoticeController'
    ],

    controller: 'notice',
    viewModel: {
        type: 'notice'
    },
 layout: {
              type:'fit'
    },
  columnLines: true,
    viewConfig: {
        stripeRows: true
    },
   items: [
        {
            xtype: 'noticedeploylist',
            flex: 1
        }
    ],  


    
    dockedItems: [
    {
            xtype: 'toolbar',
            flex: 1,
            dock: 'top',
            items:[
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
                        disabled: '{!noticedeploylist.selection}'
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
                        disabled: '{!noticedeploylist.selection}'
                    }
                }
            ]
        }
    ]
});