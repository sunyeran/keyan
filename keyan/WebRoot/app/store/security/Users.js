Ext.define('keyan.store.security.Users', {
    extend: 'Ext.data.Store',

    requires: [
        'keyan.model.security.User'
    ],

    model: 'keyan.model.security.User',

    proxy: {
        type: 'ajax',
        url: 'servlet/UserList',
       
        reader: {
        	idProperty: 'id.scsj',//解决显示一条记录，主键重复
            type: 'json',
            root: 'data'
        }
    }
});