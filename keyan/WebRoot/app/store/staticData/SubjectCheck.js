Ext.define('keyan.store.staticData.SubjectCheck', {
    extend: 'keyan.store.staticData.Abstract',

    requires: [
        'keyan.model.staticData.Subject',
        'keyan.proxy.StaticData'
    ],
  
    model: 'keyan.model.staticData.Subject',

   /* autoLoad: true,

    storeId: 'papercheck',
*/
    proxy: {
        type: 'staticdataproxy',
        extraParams: {
            entity: 'SubjectCheck'
        }
    }
});