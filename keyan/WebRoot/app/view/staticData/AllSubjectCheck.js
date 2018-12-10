Ext.define('keyan.view.staticData.AllSubjectCheck', {
    extend: 'keyan.view.staticData.AbstractAllKeyanGrid',
    alias: 'widget.allsubjectcheckgrid',

    store: 'staticData.SubjectCheck',
    stripeRows : true,
    columnLines: true,
    columns: [
       //Ext.create('Ext.grid.RowNumberer', { text: '序号', width: 40 }),
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
            text: '课题名称',
            flex: 1,
            dataIndex: 'subjectName',
              filter: {
                type: 'string'
            }
         
        },        {
            text: '课题号', 
            width: 50,
            dataIndex: 'subjectNo'
                     
        },
        {
            text: '是否第一单位', 
            width: 80,
            dataIndex: 'isFirstUnit'
           
        },
        {
            text: '项目角色', 
            width: 60,
            dataIndex: 'head',
               filter: {
                type: 'string'
            }
           
        }, 
        {
            text: '主要参加人', 
            width: 80,
            dataIndex: 'participants',
            filter: {
                type: 'string'
            }
        },  
        {
            text: '立项时间', 
            width: 110,
            dataIndex: 'projectTime',
            renderer:Ext.util.Format.dateRenderer('Y年m月d日'),
              filter: {
                type: 'date'
            }
        },
        {
            text: '项目来源', 
            width: 80,
            dataIndex: 'projectDept'
        }, 
        {   xtype:'numbercolumn',
            text: '外部资金(万元)', 
            width: 80,
            dataIndex: 'outboundFunds',
            format:'¥0.00',align:'right',
            filter: {
                type: 'numeric'
            }
        }, 
        {   xtype:'numbercolumn',
            text: '自筹资金(万元)', 
            width: 80,
            dataIndex: 'selfFunding',
            format:'¥0.00',align:'right',
              filter: {
                type: 'numeric'
            }
        },
        {
            text: '结题时间', 
            width: 110,
            dataIndex: 'concludingTime',
            renderer:Ext.util.Format.dateRenderer('Y年m月d日'),
            filter: {
                type: 'date'
            }
        },
        {
            text: '项目类别', 
            width: 80,
            dataIndex: 'subjectType',
            filter: {
                type: 'string'
            }
        },
        {
            text: '部门是否审核', 
            width: 80,
            dataIndex: 'approval',
          
            renderer:function(val){ 
                       
                        return   "<span  style='color:red'>"+val+"</span>";
                       
                    } 
        }
        
           
             
    ]
   
});