Ext.define('keyan.model.security.User', {
    extend: 'Ext.data.Model',

    idProperty: 'id',

    fields: [
        { name: 'id' },
        { name: 'name' },
        { name: 'userName' },
        { name: 'department' },
        { name: 'positionalTitles' },
        { name: 'workloadLevel' },
        { name: 'Group_id' }
    ]
});