Ext.define('keyan.model.staticData.Teaching', {
    extend: 'keyan.model.sakila.Sakila',

    idProperty: 'teaching_id',

    fields: [
        { name: 'teaching_id' },
        { name: 'name' },
        { name: 'username' },
        { name: 'department' },
        { name: 'teaching_name',defaultValue:"必填项*" },
        { name: 'first_author' ,defaultValue:"必填项*"},
        { name: 'second_author' },
        { name: 'press' ,defaultValue:"必填项*"},
        { name: 'publish_time' ,type:'date',dateFormat: 'Y-m-d',defaultValue: new Date()},
        { name: 'isbn' ,defaultValue:"0000*"},
        { name: 'cip' },
        { name: 'words' ,defaultValue:"0"},
        { name: 'type' ,defaultValue:"教材"},
        { name: 'nature' ,defaultValue:"省市级出版社"},
        { name: 'approval',defaultValue:"未审核" }
    ]
});