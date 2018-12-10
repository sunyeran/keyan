/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
 Ext.Loader.setConfig({
    enabled: true,
    paths: {
     //    'Ext': '.',
        'Ext.ux': 'ext/ux',
        'Ext.ux.grid':'ext/ux/grid',
        'keyansys.util': 'app/util'
       
    }
});
Ext.application({
    name: 'keyansys',
    enableQuickTip:true,
    extend: 'keyansys.Application',
    
    requires: [
        'keyansys.view.main.Main',
        'keyansys.util.Config'
    ],
    controllers:['Menu',
             'StaticData'
    ]
    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
   // mainView: 'keyansys.view.main.Main'
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to keyansys.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
