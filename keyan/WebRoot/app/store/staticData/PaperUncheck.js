Ext.define('keyan.store.staticData.PaperUncheck', {
    extend: 'keyan.store.staticData.Abstract',

    requires: [
        'keyan.model.staticData.Paper',
        'keyan.proxy.StaticData'
    ],
 
    model: 'keyan.model.staticData.Paper',

   /* autoLoad: true,

    storeId: 'papercheck',
*/
    proxy: {
        type: 'staticdataproxy',
        extraParams: {
            entity: 'PaperUncheck'
        }
    }
});