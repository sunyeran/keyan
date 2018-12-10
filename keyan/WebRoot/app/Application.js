Ext.Loader.setConfig({
    enabled: true,
    paths: {
        //Ext: '.',
        'Ext.ux': 'ext/ux',
        'keyan.util': 'app/util'
       
    }
});

Ext.define('keyan.Application', {
    name: 'keyan',

    extend: 'Ext.app.Application',
  
    views: [
        // TODO: add views here
    ],

    controllers: [
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ],
    launch : function(){
    	var me = this;
        Ext.tip.QuickTipManager.init();
        var task = new Ext.util.DelayedTask(function() {

           // Fade out the body mask
            me.splashscreen.fadeOut({
                duration: 1000,
                remove:true
            });

           // Fade out the icon and message
            me.splashscreen.next().fadeOut({
                duration: 1000,
                remove:true,
                listeners: {
                    afteranimate: function(el, startTime, eOpts ){
                       
                       Ext.widget('login');
                    }
                }
               
            });
          
        });


      task.delay(2000);

     
  },

  init: function () {
        var me = this;
 
       // Start the mask on the body and get a reference to the mask
        me.splashscreen = Ext.getBody().mask('加载程序...');

      // Add a new class to this mask as we want it to look different from the default.
      //  me.splashscreen.addCls('splashscreen');

     // Insert a new div before the loading icon where we can place our logo.
      //  Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
     //     cls: 'x-splash-icon'
     //   });
  }
});
