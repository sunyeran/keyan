Ext.define('keyan.model.menu.Root', {
    extend: 'Ext.data.Model',

    uses: [
        'keyan.model.menu.Item'
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
        model: 'keyan.model.menu.Item',
        foreignKey: 'parent_id',
        name: 'items'
    }
});