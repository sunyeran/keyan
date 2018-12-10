var flag;
Ext.define('keyansys.view.user.UserController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.user',

    requires: [
        'keyansys.util.Util',
        'keyansys.util.Alert'
    ],
   

    onAdd: function(button, e, options){
        this.createDialog(null);
        flag=button.getItemId();
        
    },

    onEdit: function(button, e, options){
        flag=button.getItemId();
       
        var me = this,
            records = me.getRecordsSelected();

        if(records[0]){
            me.createDialog(records[0]);
        }
    },

    createDialog: function(record){

        var me = this,
        view = me.getView();

      //  console.log(record);

        me.dialog = view.add({
            xtype: 'user-form',
            viewModel: {
                data: {
                    title: record ? '编辑: ' + record.get('name') : '添加'
                },
                links: {
                    currentUser: record || {
                        type: 'User',
                        create: true
                    }
                }
            }
        });

        me.dialog.show();
    },

    getRecordsSelected: function(){
        var grid = this.lookupReference('usersGrid');
        return grid.getSelection();
    },

    onDelete: function(button, e, options){

       var me = this,
            view = me.getView(),
            record = me.getRecordsSelected(),
            store = me.getStore('users');


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

                                var result = keyansys.util.Util.decodeJSON(conn.responseText);

                                if (result.success) {

                                    keyansys.util.Alert.msg('删除成功!', '教师信息被删除.');
                                    store.load();
                                  
                                } else {
                                    keyansys.util.Util.showErrorMsg(conn.responseText);
                                }
                            },
                            failure: function(conn, response, options, eOpts) {

                                keyansys.util.Util.showErrorMsg(conn.responseText);
                            }
                        });
                    }
                 }
            });
        } else if (store.getCount() == 1) {
            Ext.Msg.show({
                title:'Warning',
                msg: '你不能删除所有教师信息。',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        }
    },
    onSave: function(button, e, options){

        var me = this,
            form = me.lookupReference('form');

        if (form.isValid()) {
            form.submit({
                clientValidation: true,
                url: 'servlet/AddUser',
                params: {
                 flag: flag
                         },
                scope: me,
                success: 'onSaveSuccess',
                failure: 'onSaveFailure'
            });
        }
    },

    onSaveSuccess: function(form, action) {
        var me = this;
        me.onCancel();
        me.refresh();
        keyansys.util.Util.showToast('教师信息保存成功!');
    },

    onSaveFailure: function(form, action) {
        keyansys.util.Util.handleFormFailure(action);
    },

    onCancel: function(button, e, options){
        var me = this;
        me.dialog = Ext.destroy(me.dialog);
    },

    refresh: function(button, e, options){
        var me = this,
            store = me.getStore('users');

        store.load();
    }

    
});
