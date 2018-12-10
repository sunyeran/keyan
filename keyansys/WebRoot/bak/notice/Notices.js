Ext.define('keyansys.view.notice.Notices', {
    extend: 'keyansys.view.notice.Base',
    alias: 'widget.noticesgrid',

    requires: [
        'Ext.ux.RowExpander',
        'keyansys.view.notice.Base'
        
    ],

    store: 'notice.Notices',

    columns: [
        {
           xtype:Ext.create ('Ext.grid.RowNumberer',{ text: '序号', width: 40 })
        },
        {
            text: '标题',
            flex: 1,
            dataIndex: 'title'
        },
        {
            text: '发布人', 
            width: 100,
            dataIndex: 'sender'
        }
       
        
    ],

    dockedItems: [
        {    
            dock: 'bottom',
            xtype: 'pagingtoolbar',
            store: 'notice.Notices',
            displayInfo: true,
            displayMsg: 'Displaying notices {0} - {1} of {2}',
            emptyMsg: "No notices to display"
        },
        {
            xtype: 'addeditdelete'
        }
    ],

    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : [
            '<p><b>公告内容:</b> {content}</p><br>'
           
        ]
    }]
});