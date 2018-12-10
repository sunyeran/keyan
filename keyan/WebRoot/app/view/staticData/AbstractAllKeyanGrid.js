Ext.define('keyan.view.staticData.AbstractAllKeyanGrid', {
    extend: 'Ext.ux.LiveSearchGridPanel',
    alias: 'widget.abstractallkeyangrid',
   
    viewConfig: {
       stripeRows : true,
       columnLines: true
    },

    initComponent: function() {
        var me = this;
        me.columns = Ext.Array.merge({xtype:Ext.create ('Ext.grid.RowNumberer', { text: '序号', width: 40 })},me.columns);
      
        me.features = [
            Ext.create('Ext.ux.grid.FiltersFeature', {
                local: true
            })
        ];
      me.dockedItems = [
            {
               xtype: 'toolbar',
               dock: 'top',
               itemId: 'topToolbar',
               items: [
               
                    {
                        xtype: 'button',
                        itemId: 'clearFilter',
                        text: '清除过滤',
                        iconCls: 'clear_filter'
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
			            text: '打印',
			            itemId: 'print',
			            iconCls: 'print'
			        },
			        {
			            xtype: 'tbseparator'
			        },                   
                    {
                        xtype:'button',
                        itemId: 'Excel',
                        text: '导出 Excel',
                        iconCls: 'excel',
                         handler: function(button) {
                          var grid = button.up('abstractallkeyangrid');
                          //grid 为Extjs grid对象 
                           //"导出文件名"  为导出的Excel文件的名称 
                           grid2Excel(grid,"excel导出"); 
                     } 
                       
  	               }
  	              
                ] 
            }
           
       
    
        ];
        me.callParent(arguments);
    }
    });