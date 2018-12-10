Ext.define('keyan.store.staticData.TeachingUncheck', {
    extend: 'keyan.store.staticData.Abstract',

    requires: [
        'keyan.model.staticData.Paper',
        'keyan.proxy.StaticData'
    ],

    model: 'keyan.model.staticData.Teaching',

   /* autoLoad: true,

    storeId: 'papercheck',
*/
    proxy: {
        type: 'staticdataproxy',
        extraParams: {
            entity: 'TeachingUncheck'
        }
    }
});