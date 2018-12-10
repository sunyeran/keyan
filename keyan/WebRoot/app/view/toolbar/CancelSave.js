Ext.define('keyan.view.toolbar.CancelSave', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.cancelsave',

    flex: 1,
    dock: 'bottom',
    ui: 'footer',
    layout: {
        pack: 'end',
        type: 'hbox'
    },
    items: [
        {
            xtype: 'button',
            text: '取消',
            itemId: 'cancel',
            iconCls: 'cancel'
        },
        {
            xtype: 'button',
            text: '保存',
            itemId: 'save',
            iconCls: 'save'
        }
    ]
});