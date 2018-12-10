Ext.define('keyan.controller.mail.ExportDepWorkload', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.ux.IFrame',
        'Ext.ux.grid.Printer'
    ],

    views: [
        
        'mail.ExportDepWorkload'
   
    ],

    stores: [
       
        'mail.ExportDepWorkload'
    ],

 onRender:function(component,options){
 	component.getStore().load();
 
 },
 onButtonClickPrint:function(button,e,options){
 	Ext.ux.grid.Printer.printAutomatically=false;
 	Ext.ux.grid.Printer.print(button.up('exportdepworkload'));
 },
 /* onTreepanelSelect: function(selModel, record, index, options) {

        var dept = record.get('text');
        var store = Ext.ComponentQuery.query('statisticsallworkload')[0].getStore();
        store.load({   
           params: {dept: encodeURIComponent(dept)},   
           callback: function(records, options, success){   
           Ext.Msg.alert('info', '加载完毕');   
           },   
           scope: store,   
           add: false  
});
     	
    },
*/
    init: function(application) {
        this.control({
         /*   "statisticsmenu": {
                select: this.onTreepanelSelect
              //  itemclick: this.onTreepanelItemClick
            },*/
        	 "exportdepworkload": {
                render: this.onRender
            },
             "exportdepworkload button#print": {
                click: this.onButtonClickPrint
            }
         
        });
    }
 
});
