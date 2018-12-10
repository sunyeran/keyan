Ext.define('keyan.view.sakila.SakilaGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sakilagrid',

    requires: [
        'keyan.view.toolbar.AddEditDelete'
    ],

    columnLines: true,
    viewConfig: {
        stripeRows: true
    },

    dockedItems: [
        {
            xtype: 'addeditdelete'
        }
    ],

    initComponent: function() {
        var me = this;

        me.columns = Ext.Array.merge(me.columns,
            [{
                xtype    : 'datecolumn',
                text     : '更新时间', 
                width    : 100,  
                dataIndex: 'last_update',
               // format: 'Y-m-j',
                renderer:Ext.util.Format.dateRenderer('Y年m月d日'),
             //    renderer:Ext.util.Format.dateRenderer('Y-m-d'), 
                filter: true
                
            }]
        );

        me.callParent(arguments);
    }   
});