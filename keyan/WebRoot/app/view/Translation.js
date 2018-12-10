Ext.define('keyan.view.Translation', {
    extend: 'Ext.button.Split',
    alias: 'widget.translation',

    menu: Ext.create('Ext.menu.Menu', {
        items: [
            {
                xtype: 'menuitem',
                iconCls: 'en',
                text: 'English'
            },
            {
                xtype: 'menuitem',
                iconCls: 'ch',
                text: '中文'
            },
            {
                xtype: 'menuitem',
                iconCls: 'pt_BR',
                text: 'Português'
            }
        ]
    })
});