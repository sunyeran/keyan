Ext.define('keyan.store.mail.SubjectList', {
   extend: 'keyan.store.staticData.Abstract',

    requires: [
        'keyan.model.staticData.Subject',
        'keyan.proxy.StaticData'
    ],
 
    model: 'keyan.model.staticData.Subject',

   
    proxy: {
        type: 'staticdataproxy',
        extraParams: {
            entity: 'SubjectList'
        }
    }
});