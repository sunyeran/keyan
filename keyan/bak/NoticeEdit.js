Ext.define('keyan.controller.cms.NoticeEdit', {
    extend: 'Ext.app.Controller',

    requires: [
        'keyan.util.Util'
       
    ],

    views: [
        'notice.NoticeEdit'
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
            }
           /* "noticeeditgrid button#delete": {
                click: this.onButtonClickDelete
            },
            "noticeprofile button#save": {
                click: this.onButtonClickSave
            },
            "noticeprofile button#cancel": {
                click: this.onButtonClickCancel
            }*/
        });

      
    },

    onRender: function(component, options) {

        component.getStore().load();
    },

    onButtonClickAdd: function (button, e, options) {

        var win = Ext.create('keyan.view.notice.NoticeProfile');
        win.setTitle('添加公告');
        win.show();
    }

  /*  onButtonClickEdit: function (button, e, options) {

        var grid = this.getNoticeList(),
        record = grid.getSelectionModel().getSelection();

        if(record[0]){

            var editWindow = Ext.create('keyan.view.notice.NoticeProfile');

            editWindow.down('form').loadRecord(record[0]);

            editWindow.setTitle(record[0].get('name'));
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
                            url: 'servlet/DeleteUser',
                            params: {
                                id: record[0].get('id')
                            },
                            success: function(conn, response, options, eOpts) {

                                var result = keyan.util.Util.decodeJSON(conn.responseText);

                                if (result.success) {

                                    keyan.util.Alert.msg('删除成功!', '教师信息被删除.');
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
                msg: 'You cannot delete all the users from the application.',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        }
    },

    onButtonClickSave: function(button, e, options) {
        var win = button.up('window'),
        formPanel = win.down('form'),
        store = this.getUsersList().getStore();
        id1=formPanel.getForm().findField('id').getValue(),
        name1=formPanel.getForm().findField('name').getValue(),
        userName1=formPanel.getForm().findField('userName').getValue(),
        department1=formPanel.getForm().findField('department').getValue(),
        Group_id1=formPanel.getForm().findField('Group_id').getValue();
       // alert(id);
       // Ext.Msg.alert(name1);
        //id=formPanel.down('textfield[name=id]').getValue(),
      // name=formPanel.getForm().findField('name').getValue();
        userName=fidset.down('textfield[name=userName]').getValue(),
        department=fidset.down('textfield[name=department]').getValue(),
        groups_id=fidset.down('textfield[name=Groups_id]').getValue();
        
        if (formPanel.getForm().isValid()) {

            formPanel.getForm().submit({
                clientValidation: true,
               
            	url: 'servlet/AddUser',
            	method : 'post', 
                params:{
                	id1:formPanel.getForm().findField('id').getValue(),
                	name1:formPanel.getForm().findField('name').getValue(),
                	userName1:formPanel.getForm().findField('userName').getValue(),
                	department1:formPanel.getForm().findField('department').getValue(),
                	groups_id1:formPanel.getForm().findField('Group_id').getValue()
                },
            	
                
                success: function(form, action) {

                    var result = action.result;

                    console.log(result);

                    if (result.success) {

                        keyan.util.Alert.msg('Success!', 'User saved.');
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

   */
    
});