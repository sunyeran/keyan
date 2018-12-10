Ext.define('keyan.store.staticData.Subject', {
    extend: 'keyan.store.staticData.Abstract',

    requires: [
        'keyan.model.staticData.Subject',
        'keyan.proxy.StaticData'
    ],

    model: 'keyan.model.staticData.Subject',

   /* autoLoad: true,

    storeId: 'subject',*/

    proxy: {
        type: 'staticdataproxy',
        extraParams: {
            entity: 'Subject'
        }
    }
});