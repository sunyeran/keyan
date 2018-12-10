Ext.define('keyan.store.staticData.Patent', {
    extend: 'keyan.store.staticData.Abstract',

    requires: [
        'keyan.model.staticData.Patent',
        'keyan.proxy.StaticData'
    ],

    model: 'keyan.model.staticData.Patent',
   
   /* autoLoad: true,

    storeId: 'patent',*/

    proxy: {
        type: 'staticdataproxy',
        extraParams: {
            entity: 'Patent'
        }
    }
});