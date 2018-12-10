Ext.define('keyan.view.staticData.TeacherPatentUncheck', {
    extend: 'keyan.view.staticData.AbstractGridCheck',
    alias: 'widget.teacherpatentuncheckgrid',

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
            text: '专利发明人',
            width: 60,
            dataIndex: 'patent_person',
           
            filter: {
                type: 'string'
            }
        },
        {
            text: '发明人',
            width: 60,
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
            width: 80,
            dataIndex: 'acceptance_time',
            renderer:Ext.util.Format.dateRenderer('Y年m月d日'),  //可编辑时间
            filter: {
                type: 'string'
            }
        },
        {
            text: '专利授权时间',
            width: 80,
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
            width: 60,
            dataIndex: 'approval'
           
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