Ext.define('keyansys.model.user.User', {
    extend: 'Ext.data.Model',

    idProperty: 'id',
    entityName: 'User',

    fields: [
        { name: 'id',type: 'int'  },
        
        { name: 'userName' },
        { name: 'name' },
        { name: 'department' },
        { name: 'positionalTitles' },
        { name: 'workloadLevel' },
        { name: 'Group_id' }
    ]
});