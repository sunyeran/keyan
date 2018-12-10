Ext.define('keyan.view.staticData.PaperUncheck', {
     extend: 'keyan.view.staticData.AbstractGridCheck',
    alias: 'widget.paperuncheckgrid',

    store: 'staticData.PaperUncheck',
    columnLines: true,
    stripeRows : true,
    
    columns: [
       //  Ext.create('Ext.grid.RowNumberer', { text: '序号', width: 40 }),
        {
            text: '作者',
            width: 60,
            dataIndex: 'name'
          
        },
        
       {
            text: '论文名称',
            flex: 1,
            dataIndex: 'paper_name'
           
        },  
       {
            text: '合作者',
            width: 60,
            dataIndex: 'first_author'
           
        },  
         {
            text: '期刊名称',  //直接将原标题《第二作者》改为标题《期刊名称》，数据库字段就不改了
            flex: 1,
            dataIndex: 'second_author'
            
        },  
      {
            text: 'issn号/cn号',
            width:100,
            dataIndex: 'issn'
           
        },  
      {
            text: '依托课题项目的编号',
           width: 100,
            dataIndex: 'cn'
           
        },  
      {
            text: '期刊卷（期）',
            width: 80,
            dataIndex: 'volume'
           
        },  
      {
            text: '出版时间',
            width: 100,
            
            dataIndex: 'publish_time',
            renderer:Ext.util.Format.dateRenderer('Y年m月d日')  //可编辑时间
          // editor:new Ext.form.DateField({format:'Y年m月d日'})
        },  
      {
            text: '是否核心期刊',
             width: 80,
            dataIndex: 'core'
           
        },  
      {
            text: '系部是否审核',
            width: 80,
            dataIndex: 'approval',
            renderer:function(val){ 
                       
                        return   "<span  style='color:blue'>"+val+"</span>";
                       
                    } 
           
        },  
                          
       
            {   text : '撤销审核操作',
                xtype: 'actioncolumn',
                width:70,
                sortable: false,
                menuDisabled: true,
                items: [
                    {
                        handler: function(view, rowIndex, colIndex, item, e) {
                            this.fireEvent('itemclick', this, 'uncheck', view, rowIndex, colIndex, item, e);
                        },
                        iconCls: 'edit',
                        tooltip: '撤销审核'
                    }
                ]
            }
             
    ],
    dockedItems: [
        {    
            dock: 'bottom',
            xtype: 'pagingtoolbar',
            store: 'staticData.PaperUncheck',
            displayInfo: true,
            displayMsg: '已审核论文条数 {0} - {1} of {2}',
            emptyMsg: "没有信息显示"
        }
    ]
});