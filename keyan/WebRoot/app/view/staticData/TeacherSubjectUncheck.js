Ext.define('keyan.view.staticData.TeacherSubjectUncheck', {
     extend: 'keyan.view.staticData.AbstractGridCheck',
    alias: 'widget.teachersubjectuncheckgrid',

    store: 'staticData.SubjectUncheck',
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
            text: '课题名称',
            flex: 1,
            dataIndex: 'subjectName'
         
        },        {
            text: '课题号', 
            width: 40,
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
            dataIndex: 'head'
           
        }, 
        {
            text: '主要参加人', 
            width: 80,
            dataIndex: 'participants'
        },  
        {
            text: '项目时间', 
            width: 80,
            dataIndex: 'projectTime',
            renderer:Ext.util.Format.dateRenderer('Y年m月d日')
        },
        {
            text: '项目单位', 
            width: 100,
            dataIndex: 'projectDept'
        }, 
        {
            text: '外部资金', 
            width: 70,
            dataIndex: 'outboundFunds'
        }, 
        {
            text: '自筹资金', 
            width: 70,
            dataIndex: 'selfFunding'
        },
        {
            text: '结题时间', 
            width: 80,
            dataIndex: 'concludingTime',
            renderer:Ext.util.Format.dateRenderer('Y年m月d日')
        },
        {
            text: '项目类别', 
            width: 100,
            dataIndex: 'subjectType'
        },
        {
            text: '部门是否审核', 
            width: 80,
            dataIndex: 'approval'
        }
             
    ],
    dockedItems: [
        {    
            dock: 'bottom',
            xtype: 'pagingtoolbar',
            store: 'staticData.SubjectUncheck',
            displayInfo: true,
            displayMsg: '已审核课题条数 {0} - {1} of {2}',
            emptyMsg: "没有信息显示"
        }
    ]
});