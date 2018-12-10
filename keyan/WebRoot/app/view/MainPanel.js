Ext.define('keyan.view.MainPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainpanel',
    
   activeTab: 0,

    items: [
        {
            xtype: 'panel',
            closable: false,
            iconCls: 'home',
            title: 'Home',
            layout: 'fit'
            // items: [{
            //     xtype: 'uxiframe',
            //     src: 'http://www.keyanpub.com/mastering-ext-javascript/book'
            // }]
        }
    ]
});