Ext.define('keyan.store.notice.NoticeEdit', {
    extend: 'Ext.data.Store',

    requires: [
        'keyan.model.notice.Notice',
        'keyan.proxy.Sakila'
    ],

    model: 'keyan.model.notice.Notice',

    storeId: 'noticeedit',

    proxy: {
        type: 'sakila',
        url: 'servlet/NoticeList'
    }
});