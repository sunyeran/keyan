Ext.define('keyan.store.mail.TeachingList', {
   extend: 'keyan.store.staticData.Abstract',

    requires: [
        'keyan.model.staticData.Teaching',
        'keyan.proxy.StaticData'
    ],
 
    model: 'keyan.model.staticData.Teaching',

   /* autoLoad: true,

    storeId: 'papercheck',
*/
    proxy: {
        type: 'staticdataproxy',
        extraParams: {
            entity: 'TeachingList'
        }
    }
});