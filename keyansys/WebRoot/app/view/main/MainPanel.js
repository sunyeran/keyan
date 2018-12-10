Ext.define('keyansys.view.main.MainPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainpanel',
    
   activeTab: 0,
   plain: true,
  // bodyPadding: 5,
    items: [
        {
            xtype: 'panel',
            closable: false,
            iconCls: 'home',
            title: '主页',
            layout: 'fit'
            
        }
    ]
});