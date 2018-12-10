/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('keyansys.view.main.Main', {
    extend:'Ext.container.Viewport',
  //  plugins:'viewport',
    xtype: 'app-main',
   
    requires: [
        'Ext.layout.container.Border',
        'keyansys.view.main.Header',
        'keyansys.view.main.MainPanel',
        'keyansys.view.menu.Accordion',
        'keyansys.view.main.MainController',
        'keyansys.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',
   // bodyStyle: 'padding:5px 5px 5px 5px',
   
 /*  defaults: {
   split: false,                 //是否有分割线
 //  collapsible: true,           //是否可以折叠
   bodyStyle: 'padding:10px'
  },*/
    defaults: {
       // collapsible: true,
        split: true,
        bodyPadding: 1
    },
   layout: {
        type: 'border'
        
    },
   
    items: [
        {
        	region: 'west',
            width: 250,
          
            reference: 'treelistContainer',
            /*layout: {
                type: 'vbox',
                align: 'stretch'
            },*/
            border: true,
            scrollable: 'y',
           
            items: [{
                xtype: 'mainmenu',
                reference: 'treelist'
              
            }]
           
        },
        {
        	
            xtype: 'container',
            id: 'app-header',
            region: 'north',
            height: 60,
            layout: {
                type: 'hbox',
                align: 'middle'
            },

            items: [{
                xtype: 'component',
                id: 'app-header-logo'
            
        	}
            ]
        
        },
       
        {
            xtype: 'mainpanel',
            region: 'center'
        },
        {
            xtype: 'appheader',
            region: 'south',
            maxHeight: 40
           
        },
        
        {
            xtype: 'container',
            region: 'south',
            height:40,
            style: 'border-top: 1px solid #4c72a4;background-color: #5fa2dd;',
          
            html: '<p><center><span style="font-size:14px;">Copyright © 2017-2018 天津滨海职业学院 -信息网络中心 All rights reserved.</span></center></p>'
        }
    ]
});