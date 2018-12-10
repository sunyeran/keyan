Ext.define('keyan.view.sakila.SearchWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.searchWindow',

    requires: [
        'keyan.view.toolbar.CancelClearAdd'
    ],

    height: 300,
    width: 400,
    autoScroll: true,
    layout: {
        type: 'fit'
    },
    iconCls: 'find',
    modal: true,

    //items must be overrriden in subclass

    dockedItems: [
        {
            xtype: 'cancelclearadd'
        }
    ]
});