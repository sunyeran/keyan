Ext.define('keyan.store.notice.Notices', {
    extend: 'Ext.data.Store',

    requires: [
        'keyan.model.notice.Notice',
        'keyan.proxy.Sakila'
    ],

    model: 'keyan.model.notice.Notice',

    pageSize: 20,

    storeId: 'notices',
    sorters: [{
            property: 'last_update',
            direction:'DESC'
        }],
    proxy: {
        type: 'sakila',
        url: 'servlet/NoticeList'
    }
});