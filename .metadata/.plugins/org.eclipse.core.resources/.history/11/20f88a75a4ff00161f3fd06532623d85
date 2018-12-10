Ext.define('keyansys.view.toolbar.AddEditDelete', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.addeditdelete',

    flex: 1,
    dock: 'top',
    items: [
        {
            xtype: 'button',
            text: '请点击左边加号显示通知内容',
            itemId: 'add',
            iconCls: 'add'
        },
       /* {
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
        },*/
        {
            xtype: 'tbseparator'
        },
        {
            xtype: 'button',
            text: '打印',
            itemId: 'print',
            iconCls: 'print',
            listeners: {
                        click: 'onPrint'
                    }
        }
       /* {
            xtype: 'button',
            text: '输出到 PDF',
            itemId: 'pdf',
            iconCls: 'pdf'
        },
        {
            xtype: 'button',
            text: '输出到Excel',
            itemId: 'excel',
            iconCls: 'excel'
        }*/
    ]
});