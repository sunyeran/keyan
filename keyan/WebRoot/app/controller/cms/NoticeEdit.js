Ext.define('keyan.controller.cms.NoticeEdit', {
    extend: 'Ext.app.Controller',

    requires: [
        'keyan.util.Util'
       
    ],

    views: [
        'notice.NoticeEdit',
        'notice.NoticeProfile'
    ],

    refs: [
        {
            ref: 'noticeList',
            selector: 'noticelist'
        }
    ],

    init: function(application) {

        this.control({
            "noticelist": {
                render: this.onRender
            },
            "noticeeditgrid button#add": {
                click: this.onButtonClickAdd
            },
            "noticeeditgrid button#edit": {
                click: this.onButtonClickEdit
            },
            "noticeeditgrid button#delete": {
                click: this.onButtonClickDelete
            },
            "noticeprofile button#save": {
                click: this.onButtonClickSave
            },
            "noticeprofile button#cancel": {
                click: this.onButtonClickCancel
            }
        });

          
    },

    onRender: function(component, options) {

        component.getStore().load();
    },

    onButtonClickAdd: function (button, e, options) {

        var win = Ext.create('keyan.view.notice.NoticeProfile');
        win.setTitle('添加公告');
        win.show();
    },

    onButtonClickEdit: function (button, e, options) {

        var grid = this.getNoticeList(),
        record = grid.getSelectionModel().getSelection();

        if(record[0]){

            var editWindow = Ext.create('keyan.view.notice.NoticeProfile');

            editWindow.down('form').loadRecord(record[0]);

         //   editWindow.setTitle(record[0].get('name'));
            editWindow.show();
        }
    },

    onButtonClickDelete: function (button, e, options) {
        var grid = this.getNoticeList(),
        record = grid.getSelectionModel().getSelection(), 
        store = grid.getStore();

        if (store.getCount() >= 2 && record[0]){

            Ext.Msg.show({
                 title:'删除?',
                 msg: '你想要删除该信息吗?',
                 buttons: Ext.Msg.YESNO,
                 icon: Ext.Msg.QUESTION,
                 fn: function (buttonId){
                    if (buttonId == 'yes'){
                        Ext.Ajax.request({
                            url: 'servlet/DeleteNotice',
                            params: {
                                id: record[0].get('notice_id')
                            },
                            success: function(conn, response, options, eOpts) {

                                var result = keyan.util.Util.decodeJSON(conn.responseText);

                                if (result.success) {

                                    keyan.util.Alert.msg('删除成功!', '公告信息被删除.');
                                    store.load();
                                  
                                } else {
                                    keyan.util.Util.showErrorMsg(conn.responseText);
                                }
                            },
                            failure: function(conn, response, options, eOpts) {

                                keyan.util.Util.showErrorMsg(conn.responseText);
                            }
                        });
                    }
                 }
            });
        } else if (store.getCount() == 1) {
            Ext.Msg.show({
                title:'Warning',
                msg: '你不能删除所有信息',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        }
    },

    onButtonClickSave: function(button, e, options) {
        var win = button.up('window'),
        formPanel = win.down('form'),
        store = this.getNoticeList().getStore();
      
        
        if (formPanel.getForm().isValid()) {

            formPanel.getForm().submit({
                clientValidation: true,
               
            	url: 'servlet/EditNotice',
            
            	
                
                success: function(form, action) {

                    var result = action.result;

                    console.log(result);

                    if (result.success) {

                        Ext.Msg.alert('发布成功');
                        store.load();
                        win.close();
                      
                    } else {
                        keyan.util.Util.showErrorMsg(result.msg);
                    }
                },
                failure: function(form, action) {
                    switch (action.failureType) {
                        case Ext.form.action.Action.CLIENT_INVALID:
                            Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                            break;
                        case Ext.form.action.Action.CONNECT_FAILURE:
                            Ext.Msg.alert('Failure', 'Ajax communication failed');
                            break;
                        case Ext.form.action.Action.SERVER_INVALID:
                            Ext.Msg.alert('Failure', action.result.msg);
                   }
                }
                
            });
        } 
    },

    onButtonClickCancel: function(button, e, options) {
        button.up('window').close();
    }

   
});