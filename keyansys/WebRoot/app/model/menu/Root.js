Ext.define('keyansys.model.menu.Root', {
    extend: 'Ext.data.Model',

    uses: [
        'keyansys.model.menu.Item'
    ],

    idProperty: 'id',

    fields: [
        {
            name: 'text'
        },
        {
            name: 'iconCls'
        },
        {
            name: 'id'
        }
    ],

    hasMany: {
        model: 'keyansys.model.menu.Item',
        foreignKey: 'parent_id',
        name: 'items'
    }
});