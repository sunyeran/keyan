Ext.define('keyan.view.notice.Notices', {
    extend: 'keyan.view.sakila.SakilaGrid',
    alias: 'widget.noticesgrid',

    requires: [
        'Ext.grid.plugin.RowExpander',
        'keyan.view.sakila.SakilaGrid'
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