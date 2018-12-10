Ext.define('keyan.view.mail.TeachingList', {
    extend: 'keyan.view.mail.Parent',
    alias: 'widget.teachinglist',

   
     store: 'mail.TeachingList',
    
    columns: [
        {
            text: '序号',
            width: 40,
            dataIndex: 'teaching_id'
          
        },
       
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
            width: 100,
            dataIndex: 'department',
           
            filter: {
                type: 'string'
            }
        },
         {
            text: '教材名称',
            flex :1,
            dataIndex: 'teaching_name',
          
            filter: {
                type: 'string'
            }
        },
        {
            text: '第一作者',
            width: 60,
            dataIndex: 'first_author',
           
            filter: {
                type: 'string'
            }
        },
        {
            text: '第二作者',
            width: 60,
            dataIndex: 'second_author',
          
            filter: {
                type: 'string'
            }
        },
        {
            text: '出版社',
            width: 100,
            dataIndex: 'press',
           
            filter: {
                type: 'string'
            }
        },
        {
            text: '出版时间',
            flex :1,
            dataIndex: 'publish_time',
            renderer:Ext.util.Format.dateRenderer('Y年m月d日'),
            filter: {
                type: 'date'
            }
        },
        {
            text: 'isbn号',
            width: 70,
            dataIndex: 'isbn',
           
            filter: {
                type: 'string'
            }
        },
        {
            text: 'cip号',
            width: 70,
            dataIndex: 'cip',
           
            filter: {
                type: 'string'
            }
        },
        {
            text: '字数(万字)',
            width: 60,
            dataIndex: 'words',
            filter: {
                type: 'numeric'
            }
        },
        {
            text: '类型',
            width: 60,
            dataIndex: 'type',
          
            filter: {
                type: 'string'
            }
        },
        {
            text: '教材性质',
            width: 80,
            dataIndex: 'nature',
           
            filter: {
                type: 'string'
            }
        },
        {
            text: '部门是否审核',
            width: 80,
            dataIndex: 'approval'
  
        }
      ]
});