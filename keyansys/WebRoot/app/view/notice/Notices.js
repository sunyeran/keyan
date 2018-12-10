Ext.define('keyansys.view.notice.Notices', {
    extend: 'keyansys.view.sakila.SakilaGrid',
    alias: 'widget.noticesgrid',
     
    bind: '{notices}',
    requires: [
        'Ext.ux.RowExpander',
        'keyansys.view.sakila.SakilaGrid',
        'keyansys.util.Util',
        'keyansys.view.notice.NoticeModel',
        'keyansys.view.notice.NoticeController'
    ],

    controller: 'notice',
    viewModel: {
        type: 'notice'
    },
  /*  session: true,

    frame: true,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },*/

   
    dockedItems: [
        {    
            dock: 'bottom',
            xtype: 'pagingtoolbar',
            bind: '{notices}',
            displayInfo: true,
            displayMsg: '当前显示通知公告 {0} - {1}条, 共 {2}条',
            emptyMsg: "当前没有通知公告"
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