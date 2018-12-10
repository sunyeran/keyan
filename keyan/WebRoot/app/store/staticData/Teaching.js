Ext.define('keyan.store.staticData.Teaching', {
    extend: 'keyan.store.staticData.Abstract',

    requires: [
        'keyan.model.staticData.Teaching',
        'keyan.proxy.StaticData'
    ],

    model: 'keyan.model.staticData.Teaching',
  //  storeId: 'teaching',
   // groupField: 'country_id',

    proxy: {
        type: 'staticdataproxy',
        extraParams: {
            entity: 'Teaching'
        }
    }
});