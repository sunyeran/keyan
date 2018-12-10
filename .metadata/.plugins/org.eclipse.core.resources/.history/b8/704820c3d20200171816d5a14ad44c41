
Ext.define('keyansys.view.notice.NoticeController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.notice',
  
    requires: [
        'keyansys.util.Util',
        'keyansys.view.notice.NoticeProfile',
     //'keyansys.view.sakila.SakilaGrid',
     //   'keyansys.util.Alert',
     //   'Ext.ux.grid.Printer',
        'Ext.ux.IFrame'
    ],
   refs: [
        {
            ref: 'noticeDeployList',
            selector: 'noticedeploylist'
        }
    ],
 /*onPrint: function(button, e, options){
        Ext.ux.grid.Printer.printAutomatically = false;
        Ext.ux.grid.Printer.print(button.up('noticesgrid'));
 }*/
 /*init: function(application) {

        this.control({
            
            "noticeprofile button#save": {
                click: this.onSave
            },
            "noticeprofile button#cancel": {
                click: this.onCancel
            }
        });

          
    },*/
 onAdd: function(button, e, options){
       /* this.createDialog(null);
        flag=button.getItemId();*/
        var win = Ext.create('keyansys.view.notice.NoticeProfile');
        win.setTitle('添加公告');
        win.show();
    },

    onEdit: function(button, e, options){
     //   flag=button.getItemId();
       
      /*  var me = this,
            records = me.getRecordsSelected();

        if(records[0]){
        	console.log(records[0]);
            me.createDialog(records[0]);
        }*/
    	// var grid = this.getNoticeList(),
    	var grid = this.lookupReference('noticedeploylist');
        record = grid.getSelectionModel().getSelection();

        if(record[0]){

            var editWindow = Ext.create('keyansys.view.notice.NoticeProfile');

            editWindow.down('form').loadRecord(record[0]);

         //   editWindow.setTitle(record[0].get('name'));
            editWindow.show();
        }
    },

  /*  createDialog: function(record){

        var me = this,
        view = me.getView();

      //  console.log(record);

        me.dialog = view.add({
            xtype: 'noticeprofile',
            viewModel: {
                data: {
                    title: record ? '编辑公告: ' + record.get('title') : '添加'
                },
                links: {
                    currentNotice: record || {
                        type: 'Notice',
                        create: true
                    }
                }
            }
        });

        me.dialog.show();
    },*/

    getRecordsSelected: function(){
   
       var grid = this.lookupReference('noticedeploylist');
        return grid.getSelection();
    },

    onDelete: function(button, e, options){

       var me = this,
            view = me.getView(),
            record = me.getRecordsSelected(),
            store = me.getStore('notices');

    
        //if (store.getCount() >= 2 && record[0]){

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

                                var result = keyansys.util.Util.decodeJSON(conn.responseText);

                                if (result.success) {

                                    keyansys.util.Alert.msg('删除成功!', '通知公告信息被删除.');
                                    store.sort('last_update','DESC');
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
        /*} else if (store.getCount() == 1) {
            Ext.Msg.show({
                title:'Warning',
                msg: '你不能删除所有教师信息。',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        }*/
    },
    onSave: function(button, e, options){
          var me = this,
          form = me.lookupReference('form');
       //   store = me.getStore('notices');
          store=Ext.ComponentQuery.query('noticedeploylist')[0].getStore();
        if (form.isValid()) {
            form.submit({
                clientValidation: true,
                url: 'servlet/EditNotice',
               // scope: me,
                 success: function(form, action) {

                    var result = action.result;

                    if (result.success) {

                        keyansys.util.Util.showToast('通知公告保存成功!');
                        button.up('window').close();
                        store.sort('last_update','DESC');
                        store.load();
                      //  me.refresh();
                        
                    } else {
                        keyansys.util.Util.handleFormFailure(action);
                    }
                
               }
            });
        }
    },
    	
   /* onSaveSuccess: function(form, action) {
        var me = this;
        me.onCancel();
       // Ext.ComponentQuery.query('window').close();
        me.refresh();
        keyansys.util.Util.showToast('通知公告保存成功!');
    },

    onSaveFailure: function(form, action) {
        keyansys.util.Util.handleFormFailure(action);
    },*/

    onCancel: function(button, e, options){
       /* var me = this;
        me.dialog = Ext.destroy(me.dialog);*/
    	button.up('window').close();
    },

    refresh: function(button, e, options){
        var me = this,
            store = me.getStore('notices');

        store.load();
    }

    
});
