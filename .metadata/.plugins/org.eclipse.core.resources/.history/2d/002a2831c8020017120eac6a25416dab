Ext.define('keyansys.view.toolbar.PrintExcel', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.printexcel',
      flex: 1,
    dock: 'top',
  
    items: [
         {
            xtype: 'button',
            itemId: 'clearFilter',
            text: '清除过滤',
            iconCls: 'clear_filter',
             handler: function(button) {
             	button.up('parent').filters.clearFilters();
             }
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
            xtype: 'button',
            text: '输出到Excel',
            itemId: 'excel',
            iconCls: 'excel',
            text: '导出 Excel',
            handler: function(button) {
               var grid = button.up('parent');
                     //grid 为Extjs grid对象 
                     //"导出文件名"  为导出的Excel文件的名称 
               grid2Excel(grid,"excel导出"); 
            } 
        },
         {
            xtype: 'tbseparator'
        },
        {
            xtype: 'button',
	        text: '完成工作量人员',
	        itemId: 'complete',
	        iconCls: 'menu_groups',
	        disabled : true
	    } 
    ]
});