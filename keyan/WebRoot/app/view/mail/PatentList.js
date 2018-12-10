Ext.define('keyan.view.mail.PatentList', {
   extend: 'keyan.view.mail.Parent',
    alias: 'widget.patentlist',


    store: 'mail.PatentList',

  

     columns: [
         {
            text: '序号',
            width: 40,
            dataIndex: 'patent_id'
           
        },
        {
            text: '姓名',
             width:60,
            dataIndex: 'name',
             
            filter: {
                type: 'string'
            }
            
           
        },
        {
            text: '所属部门',
           
            width:100,
            dataIndex: 'department'
          
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
             width:60,
            dataIndex: 'patent_person',
           
            filter: {
                type: 'string'
            }
        },
        {
            text: '发明人',
             width:60,
            dataIndex: 'inventor',
           
            filter: {
                type: 'string'
            }
        },
        {
            text: '专利类型',
            width:80,
            dataIndex: 'patent_type',
           
            filter: {
                type: 'string'
            }
        },
        {
            text: '专利申请时间',
            xtype:'datecolumn',
            flex: 1,
            dataIndex: 'acceptance_time',
           renderer:Ext.util.Format.dateRenderer('Y年m月d日'),
            
            filter: {
                type: 'date'
            }
        },
        {
            text: '专利授权时间',
            flex: 1,
            dataIndex: 'authorized',
           renderer:Ext.util.Format.dateRenderer('Y年m月d日'),
             filter: {
                type: 'date'
            }
        }, 
        {
            text: '专利应用号',
             width:60,
            dataIndex: 'apply_no',
           
            filter: {
                type: 'string'
            }
        },  
       {
            text: '是否本校',
             width:60,
            dataIndex: 'is_school',
           
            filter: {
                type: 'string'
            }
        },   
        {
            text: '是否应用',
            width:60,
            dataIndex: 'implement',
            
            filter: {
                type: 'string'
            }
        },
         {
            text: '系部是否审核',
             width:80,
            dataIndex: 'approval'
           
      }  
        
    ]
});