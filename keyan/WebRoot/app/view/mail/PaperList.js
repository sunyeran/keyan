Ext.define('keyan.view.mail.PaperList', {
     extend: 'keyan.view.mail.Parent',
    alias: 'widget.paperlist',

    store: 'mail.PaperList',
   
    columns: [
        {
            text: '序号',
            width: 40,
            dataIndex: 'paper_id',
            filter: {
                type: 'numeric'
            }
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
            width:85,
            dataIndex: 'department',
           
            filter: {
                type: 'string'
            }
        },
       {
            text: '论文名称',
            flex: 1,
            dataIndex: 'paper_name',
           
            filter: {
                type: 'string'
            }
        },  
       {
            text: '合作者',
            width:60,
            dataIndex: 'first_author',
         
            filter: {
                type: 'string'
            }
        },  
         {
            text: '期刊名称',
              flex: 1,
            dataIndex: 'second_author',
         
            filter: {
                type: 'string'
            }
        },  
      {
            text: 'issn号/cn号',
            width:80,
            dataIndex: 'issn',
          
            filter: {
                type: 'string'
            }
        },  
      {
            text: '依托课题项目的编号',
             width:80,
            dataIndex: 'cn',
           
            filter: {
                type: 'string'
            }
        },  
      {
            text: '期刊卷（期）',
            width:80,
            dataIndex: 'volume',
           
            filter: {
                type: 'string'
            }
        },  
      {
            text: '出版时间',
            flex: 1,
            dataIndex: 'publish_time',
            renderer:Ext.util.Format.dateRenderer('Y年m月d日'),
          
            filter: {
                type: 'date'
            }
        },  
      {
            text: '是否核心期刊',
             width:70,
            dataIndex: 'core',
           
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