Ext.define('keyan.controller.security.Users', {
    extend: 'Ext.app.Controller',

   /* requires: [
        'keyan.util.Util'
    ],
*/
    views: [
        'security.Users'
      //  'security.Profile'
    ],

  
       init: function(application) {

        this.control({
            "userslist": {
                render: this.onRender
            }   
            
        });
       },
            onRender: function(component, options) {

        component.getStore().load();
       
    }
});