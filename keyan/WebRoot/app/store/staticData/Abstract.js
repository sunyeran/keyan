Ext.define('keyan.store.staticData.Abstract', {
    extend: 'Ext.data.Store',
    alias: 'widget.datastore',
    storeId: 'staticDataAbstract',
    successProperty:'success',
    pageSize: 20,
    //groupField:'department',
    sorters: [{
            property: 'last_update',
            direction:'DESC'
        }]
    
});