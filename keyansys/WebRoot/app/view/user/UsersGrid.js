Ext.define('keyansys.view.user.UsersGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.users-grid',

    bind : '{users}',

    reference: 'usersGrid',

    columns: [
        {  
            
            dataIndex: 'id',
            autoWidth: true,
            text: '序号'
        },
        	{  
            width: 150,
            dataIndex: 'userName',
            text: '用户名'
        },
        {   
            width: 200,
            dataIndex: 'name',
           
            text: '姓名'
        },
        {  
            width: 200,
            dataIndex: 'department',
             flex: 1,
            text: '部门'
        },
        {  
            width: 150,
            dataIndex: 'positionalTitles',
            text: '职称'
        },
        {  
            width: 150,
            dataIndex: 'workloadLevel',
            text: '工作量标准'
        }
    ]
});