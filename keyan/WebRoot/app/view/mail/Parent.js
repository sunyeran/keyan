Ext.define('keyan.view.mail.Parent', {
    extend: 'Ext.ux.LiveSearchGridPanel',
    alias: 'widget.parent',
   requires: [
        'keyan.view.toolbar.PrintExcel'
    ],

    columnLines: true,
    viewConfig: {
        stripeRows: true
    },

    dockedItems: [
        
        {
            xtype: 'printexcel'
        }
         
    ],
    /*dockedItems: [
         {
          xtype: 'toolbar',
          dock: 'top',
          items: [
          Ext.create('Ext.ux.exporter.Button', {
           component: Ext.getCmp('parent'),
            text: "导出 Excel"
           })
          ]
         }
    ],*/

    initComponent: function() {
        var me = this;

        

        me.features = [
            Ext.create('Ext.ux.grid.FiltersFeature', {
                local: true
            })
        ];

       

        me.callParent(arguments);
    }
});