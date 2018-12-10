Ext.define('keyan.model.notice.Notice', {
    extend: 'keyan.model.sakila.Sakila',

    idProperty: 'notice_id',

    fields: [
        { name: 'notice_id' },
        { name: 'title',type:'string'},
        { name: 'sender'},
        { name: 'content', type: 'text'}
    ]
});