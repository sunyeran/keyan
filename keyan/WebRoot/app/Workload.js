Ext.define('keyan.controller.workload.Workload', {
    extend: 'Ext.app.Controller',
   
    views: [
        'workload.Workload'
    ],
   /*refs: [
          {
            ref: 'workloadList',
            selector: 'workloadlist'
        }],*/
     init: function(application) {

        this.control({
           
             "workload button#cancel": {
                click: this.onButtonClickCancel
            }
          });
          
     },
   onRender: function(component, options) {

        component.getStore().load();
    }
 }); 