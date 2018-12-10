Ext.define('keyan.store.mail.PatentList', {
   extend: 'keyan.store.staticData.Abstract',

    requires: [
        'keyan.model.staticData.Patent',
        'keyan.proxy.StaticData'
    ],
 
    model: 'keyan.model.staticData.Patent',

   /* autoLoad: true,

    storeId: 'papercheck',
*/
    proxy: {
        type: 'staticdataproxy',
        extraParams: {
            entity: 'PatentList'
        }
    }
});