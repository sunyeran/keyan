Ext.define('keyan.store.security.Groups', {
    extend: 'Ext.data.Store',

    requires: [
        'keyan.model.security.Group'
    ],

    model: 'keyan.model.security.Group',

    storeId: 'groups',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'servlet/GroupList',
        
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});