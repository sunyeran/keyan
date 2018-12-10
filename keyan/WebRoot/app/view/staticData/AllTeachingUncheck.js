Ext.define('keyan.view.staticData.AllTeachingUncheck', {
     extend: 'keyan.view.staticData.AbstractAllKeyanGrid',
    alias: 'widget.allteachinguncheckgrid',

    store: 'staticData.TeachingUncheck',
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
            text: '教材名称',
           flex: 1,
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
            text: '合作者',
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
            width: 110,
            dataIndex: 'publish_time',
            renderer:Ext.util.Format.dateRenderer('Y年m月d日'),
            filter: {
                type: 'date'
            }
        },
        {
            text: 'isbn号',
            width: 80,
            dataIndex: 'isbn',
          
            filter: {
                type: 'string'
            }
        },
        {
            text: 'cip号',
            width: 80,
            dataIndex: 'cip',
           
            filter: {
                type: 'string'
            }
        },
        {
            text: '字数(万字)',
            width: 60,
            dataIndex: 'words',
            align:'right',
            filter: {
                type: 'numeric'
            }
        },
        {
            text: '著作类别',
            width: 60,
            dataIndex: 'type',
           
            filter: {
                type: 'string'
            }
        },
        {
            text: '教材性质',
            width: 90,
            dataIndex: 'nature',
           
            filter: {
                type: 'string'
            }
        },
        {
            text: '部门是否审核',
            width: 80,
            dataIndex: 'approval',
           renderer:function(val){ 
                       
                        return   "<span  style='color:blue'>"+val+"</span>";
                       
                    } ,
            filter: {
                type: 'string'
            }
          }
       ]
          
});