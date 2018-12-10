Ext.define('keyansys.store.user.Groups', {
    extend: 'Ext.data.Store',
 
    requires: [
        'keyansys.model.user.Group'
    ],

    model: 'keyansys.model.user.Group',

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