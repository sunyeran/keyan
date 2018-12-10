Ext.define('keyansys.view.notice.NoticeList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.noticelist',

    frame: true,
    store: Ext.create('keyansys.store.notice.NoticeEdit'),

    columns: [
     
        {  
            width: 150,
            dataIndex: 'title',
            text: '标题'
        },
        
        {  
            flex: 1,
            dataIndex: 'content',
            text: '内容'
        },
        {  
            width: 150,
            dataIndex: 'sender',
            text: '发布单位'
            
        },
        {
        	dataIndex: 'last_update',
        	text: '最后发布日期',
            width:80,
            renderer:Ext.util.Format.dateRenderer('Y年m月d日')   //可编辑时间

                       
        }
    ]
});