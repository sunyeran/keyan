Ext.define('keyan.view.staticData.PatentUncheck', {
    extend: 'keyan.view.staticData.AbstractGridCheck',
    alias: 'widget.patentuncheckgrid',

    store: 'staticData.PatentUncheck',
    stripeRows : true,
    columnLines: true,
    columns: [
    // Ext.create('Ext.grid.RowNumberer', { text: '序号', width: 40 }),
        {
            text: '姓名',
            width: 60,
            dataIndex: 'name'
          
        },
        {
            text: '专利名称',
            flex: 1,
            dataIndex: 'patent_name',
            filter: {
                type: 'string'
            }
        },
        {
            text: '专利权人',
            width: 80,
            dataIndex: 'patent_person',
           
            filter: {
                type: 'string'
            }
        },
        {
            text: '发明人',
            width: 80,
            dataIndex: 'inventor',
           
            filter: {
                type: 'string'
            }
        },
        {
            text: '专利类型',
            width: 90,
            dataIndex: 'patent_type',
            filter: {
                type: 'string'
            }
        },
        {
            text: '专利申请时间',
            width: 110,
            dataIndex: 'acceptance_time',
            renderer:Ext.util.Format.dateRenderer('Y年m月d日'),  //可编辑时间
            filter: {
                type: 'string'
            }
        },
        {
            text: '专利授权时间',
            width: 110,
            dataIndex: 'authorized',
            renderer:Ext.util.Format.dateRenderer('Y年m月d日'),  
            filter: {
                type: 'string'
            }
        }, 
      {
            text: '专利应用号',
            width: 50,
            dataIndex: 'apply_no',
           
            filter: {
                type: 'string'
            }
        },  
       {
            text: '是否本校',
            width: 60,
            dataIndex: 'is_school',
           
            filter: {
                type: 'string'
            }
        },   
        {
            text: '是否应用',
            width: 60,
            dataIndex: 'implement',
            
            filter: {
                type: 'string'
            }
        },
         {
            text: '系部是否审核',
            width: 80,
            dataIndex: 'approval',
             renderer:function(val){ 
                       
                        return   "<span  style='color:blue'>"+val+"</span>";
                       
                    } 
           
      } ,
                
       
            {   text : '审核操作',
                xtype: 'actioncolumn',
                width: 70,
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
            store: 'staticData.PatentUncheck',
            displayInfo: true,
            displayMsg: '已审核专利条数 {0} - {1} of {2}',
            emptyMsg: "没有信息显示"
        }
    ]
});