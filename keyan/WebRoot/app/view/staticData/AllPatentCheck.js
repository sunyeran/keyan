Ext.define('keyan.view.staticData.AllPatentCheck', {
     extend: 'keyan.view.staticData.AbstractAllKeyanGrid',
    alias: 'widget.allpatentcheckgrid',

    store: 'staticData.PatentCheck',
    stripeRows : true,
    columnLines: true,
    columns: [
       // Ext.create('Ext.grid.RowNumberer', { text: '序号', width: 40 }),
        {
            text: '姓名',
            width: 60,
            dataIndex: 'name',
            filter: {
                type: 'string'
            }
          
        },
        {
            text: '所属部门',
            width: 90,
            dataIndex: 'department',
            filter: {
                type: 'string'
            }
          
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
            width: 100,
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
                type: 'date'
            }
        },
        {
            text: '专利授权时间',
            width: 110,
            dataIndex: 'authorized',
            renderer:Ext.util.Format.dateRenderer('Y年m月d日'),  
            filter: {
                type: 'date'
            }
        }, 
      {
            text: '专利应用号',
            width: 80,
            dataIndex: 'apply_no',
           
            filter: {
                type: 'string'
            }
        },  
       {
            text: '是否本校',
            width: 60,
            dataIndex: 'is_school'
        },   
        {
            text: '是否应用',
            width: 60,
            dataIndex: 'implement'
        },
         {
            text: '系部是否审核',
            width: 80,
            dataIndex: 'approval',
            renderer:function(val){ 
                       
                        return   "<span  style='color:red'>"+val+"</span>";
                       
                    } 
           
      } 
             
    ]
});