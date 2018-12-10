Ext.define('keyan.view.mail.SubjectList', {
    extend: 'keyan.view.mail.Parent',
    alias: 'widget.subjectlist',

   store: 'mail.SubjectList',
     
     columns: [
        {
            text: '序号',
            width: 30,
            dataIndex: 'subject_id'
          
        },
          {
           text: '姓名', 
            width:50,
            dataIndex: 'name',
           
            filter: {
                type: 'string'
            }
        },
       {
           text: '所属部门', 
            width:80,
            dataIndex: 'department',
           
            filter: {
                type: 'string'
            }
        },
        {
            text: '课题名称',
           flex:1,
            
            dataIndex: 'subjectName',
            filter: {
                type: 'string'
            }
        },  
        {
            text: '课题号', 
            width: 50,
            dataIndex: 'subjectNo',
            filter: {
                type: 'string'
            }
           
        },
        {
            text: '是否第一单位', 
            width: 80,
            dataIndex: 'isFirstUnit'
           
        },
        {
            text: '主持人（第一）', 
            width: 80,
            dataIndex: 'head',
          
            filter: {
                type: 'string'
            }
           
        }, 
        {
            text: '主要参加人', 
            width: 60,
            dataIndex: 'participants',
          
            filter: {
                type: 'string'
            }
        },  
        {
            text: '项目时间', 
            flex:1,
            dataIndex: 'projectTime',
            renderer:Ext.util.Format.dateRenderer('Y年m月d日'),
             filter: {
                type: 'date'
            }
           /*  editor:new Ext.form.DateField({  
            //在编辑器里面显示的格式,这里为09-10-20的格式  
             format: 'y-m-d'  
             }),
           renderer:function(value){   
           if(value instanceof Date){   
            return new Date(value).format("Y-m-d");   
           }else{   
            return value;   
            }   
          
          }*/
        },
        {
            text: '项目单位', 
            width: 80,
            dataIndex: 'projectDept',
            filter: {
                type: 'string'
            }
        }, 
        {
            text: '外部资金', 
            width: 50,
            dataIndex: 'outboundFunds',
             filter: {
                type: 'numeric'
            }
        }, 
        {
            text: '自筹资金', 
            width: 50,
            dataIndex: 'selfFunding',
          
            filter: {
                type: 'numeric'
            }
        },
        {
            text: '结题时间', 
            flex:1,
            dataIndex: 'concludingTime',
            renderer:Ext.util.Format.dateRenderer('Y年m月d日'),
             filter: {
                type: 'date'
            }
        },
        {
            text: '项目类别', 
            width: 60,
            dataIndex: 'subjectType',
           
            filter: {
                type: 'string'
            }
        },
        {
            text: '是否审核', 
            width: 60,
            dataIndex: 'approval',
           
            filter: {
                type: 'string'
            }
        }
        
        
    ]
});