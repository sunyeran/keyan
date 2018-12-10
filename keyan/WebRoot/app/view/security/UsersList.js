Ext.define('keyan.view.security.UsersList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userslist',

    frame: true,
    store: Ext.create('keyan.store.security.Users'),

    columns: [
        {  
            
            dataIndex: 'id',
            text: 'id'
        },
        	{  
            width: 80,
            dataIndex: 'userName',
            text: '用户名'
        },
        {   
            width: 100,
            dataIndex: 'name',
            flex: 1,
            text: '姓名'
        },
        {  
            width: 200,
            dataIndex: 'department',
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
        /*,
        {  
            width: 150,
            dataIndex: 'Group_id',
            text: '所属组',
            renderer: function(value, metaData, record ){
                var groupsStore = Ext.getStore('groups');
                var group = groupsStore.findRecord('id', value);
                return group != null ? group.get('name') : value;
            }
        }*/
    ]
});