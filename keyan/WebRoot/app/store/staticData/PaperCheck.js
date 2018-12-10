Ext.define('keyan.store.staticData.PaperCheck', {
    extend: 'keyan.store.staticData.Abstract',

    requires: [
        'keyan.model.staticData.Paper',
        'keyan.proxy.StaticData'
    ],
    //groupField:'department',
    model: 'keyan.model.staticData.Paper',
   

   /* autoLoad: true,

    storeId: 'papercheck',
*/
    proxy: {
        type: 'staticdataproxy',
        extraParams: {
            entity: 'PaperCheck'
        }
    }
});