
Ext.define('keyan.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainviewport',

    requires: [
        'keyan.view.Header',
        'keyan.view.menu.Accordion',
       'keyan.view.MainPanel'
    ],
 
    layout: {
        type: 'border'
    },
   
    items: [
        {
            xtype: 'mainmenu',
        	//xtype: 'container',
            width: 185,
            collapsible: true,
            region: 'west',
            style: 'background-color: #8FB488;'
        },
        {
            xtype: 'appheader',
            region: 'north'
           
        },
        {
            xtype: 'mainpanel',
            region: 'center'
        },
        {
            xtype: 'container',
            region: 'south',
            height: 60,
            style: 'border-top: 1px solid #4c72a4;background-color: #6699cc;',
           // html: '<div id="titleHeader"><center><span style="font-size:14px;">天津滨海职业学院 信息网络中心编制 </span></center></div>',
            html: '<div id="titleHeader"><center><span style="font-size:12px;">Copyright ©2015-2016 信息网络中心编制 All rights reserved.</span></center></div>'
        }
    ]
});


