Ext.define('keyan.view.staticData.SubjectCheck', {
    extend: 'keyan.view.staticData.AbstractGridCheck',
    alias: 'widget.subjectcheckgrid',

    store: 'staticData.SubjectCheck',
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
            dataIndex: 'head'
           
        }, 
        {
            text: '主要参加人', 
            width: 80,
            dataIndex: 'participants'
        },  
        {
            text: '立项时间', 
            width: 110,
            dataIndex: 'projectTime',
            renderer:Ext.util.Format.dateRenderer('Y年m月d日')
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
            format:'¥0.00',align:'right'
        }, 
        {   xtype:'numbercolumn',
            text: '自筹资金(万元)', 
            width: 80,
            dataIndex: 'selfFunding',
            format:'¥0.00',align:'right'
        },
        {
            text: '结题时间', 
            width: 110,
            dataIndex: 'concludingTime',
            renderer:Ext.util.Format.dateRenderer('Y年m月d日')
        },
        {
            text: '项目类别', 
            width: 80,
            dataIndex: 'subjectType'
        },
        {
            text: '部门是否审核', 
            width: 80,
            dataIndex: 'approval',
            renderer:function(val){ 
                       
                        return   "<span  style='color:red'>"+val+"</span>";
                       
                    } 
        },
        
            {   text : '审核操作',
                xtype: 'actioncolumn',
                width: 60,
                sortable: false,
                menuDisabled: true,
                items: [
                    {
                        handler: function(view, rowIndex, colIndex, item, e) {
                            this.fireEvent('itemclick', this, 'check', view, rowIndex, colIndex, item, e);
                        },
                        iconCls: 'edit',
                        tooltip: '审核'
                    }
                ]
            }
             
    ],
    dockedItems: [
        {    
            dock: 'bottom',
            xtype: 'pagingtoolbar',
            store: 'staticData.SubjectCheck',
            displayInfo: true,
            displayMsg: '未审核课题条数 {0} - {1} of {2}',
            emptyMsg: "没有信息显示"
        }
    ]
});