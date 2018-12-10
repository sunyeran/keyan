Ext.define('keyan.model.menu.Item', {
    extend: 'Ext.data.Model',

    uses: [
        'keyan.model.menu.Root'
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
            name: 'className'
        },
        {
            name: 'id'
        },
        {
            name: 'parent_id'
        }
    ],

    belongsTo: {
        model: 'keyan.model.menu.Root',
        foreignKey: 'parent_id'
    }
});