Ext.define('keyan.view.staticData.AbstractGrid', {
    extend: 'Ext.ux.LiveSearchGridPanel',
    alias: 'widget.staticdatagrid',
   
    columnLines: true,
    viewConfig: {
        stripeRows: true
    },

    initComponent: function() {
        var me = this;

        me.selModel = {
            selType: 'cellmodel'
        };

        me.plugins = [
            Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 1,
               // autoCancel:false,
                pluginId: 'cellplugin'
            })
        ];

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
           //      ui:'footer',
               items: [
               
               
                    {
                        xtype: 'button',
                        itemId: 'add',
                        text: '添加',
                        iconCls: 'add'
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'save',
                        text: '保存更改',
                        iconCls: 'save_all'
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'cancel',
                        text: '取消更改',
                        iconCls: 'cancel'
                    },
                    {
                        xtype: 'tbseparator'
                    },
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
                        itemId: 'myUpload',
                        text: '上传复印件',
                        iconCls: 'menu_city'
                    },'-',
                    
                    {
                        xtype:'button',
                        itemId: 'Excel',
                        text: '导出 Excel',
                        iconCls: 'excel',
                         handler: function(button) {
                          var grid = button.up('staticdatagrid');
                          //grid 为Extjs grid对象 
                           //"导出文件名"  为导出的Excel文件的名称 
                           grid2Excel(grid,"excel导出"); 
                     } 
                       
  	               }
                ] 
            }
           
       
    
        ];

        me.columns = Ext.Array.merge({xtype:Ext.create ('Ext.grid.RowNumberer', { text: '序号', width: 40 })},me.columns,
            [
            	{
                xtype    : 'datecolumn',
                text     : '最后更新时间', 
                width    : 100,  
                dataIndex: 'last_update',
               // format: 'Y-m-j',
                renderer:Ext.util.Format.dateRenderer('Y年m月d日'),
             //    renderer:Ext.util.Format.dateRenderer('Y-m-d'), 
                filter: true
                
            },
            
            {   text:'删除',
                xtype: 'actioncolumn',
                width: 30,
                sortable: false,
                menuDisabled: true,
                items: [
                    {
                        handler: function(view, rowIndex, colIndex, item, e) {
                            this.fireEvent('itemclick', this, 'delete', view, rowIndex, colIndex, item, e);
                        },
                        iconCls: 'delete',
                        tooltip: 'Delete'
                    }
                ]
            }]
        );

        me.callParent(arguments);
    }
});
