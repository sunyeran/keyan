/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('keyansys.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    requires: [
        'keyansys.view.main.Help'
    ],
    onHelp: function (button, e, options) {
        Ext.create('keyansys.view.main.Help').show();
        
    },
    onLogout: function (button, e, options) {
        button.up('app-main').destroy();
        window.location.reload();
        
    }

});
