Ext.define('keyan.view.staticData.AbstractGridCheck', {
     extend: 'Ext.grid.Panel',
     alias: 'widget.abstractgridcheck',
   columnLines: true,
    viewConfig: {
        stripeRows: true,
        plugins : [
          Ext.create('Ext.grid.plugin.DragDrop',{
           ddGroup:'ddTree',
           dragGroup:'abstractgridcheck',
           dropGroup:'abstractgridcheck',
           enableDrag:true,
           enableDrop:true
          })
        ]
    },

    initComponent: function() {
        var me = this;

        me.columns = Ext.Array.merge({xtype:Ext.create ('Ext.grid.RowNumberer', { text: '序号', width: 40 })},me.columns
        );
        me.callParent(arguments);
    }
});
