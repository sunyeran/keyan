Ext.define('keyan.view.Header', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.appheader',

     height: 80,
    
    ui: 'footer',
    style: 'border-bottom: 4px solid #4c72a4;',

    items: [
        {
            xtype: 'label',
            html: '<div id="titleHeader">天津滨海职业学院<span style="font-size:16px;"> --- 科研管理系统</span></div>'

        },
        {
            xtype: 'tbfill'
        },
        /*{
            xtype: 'translation'
        },*/
        {
            xtype: 'tbseparator'
          
        },
        {
            xtype: 'button',
            //text: translations.logout,
            text: '注销',
            itemId: 'logout',
            iconCls: 'logout'
        }
    ]
});