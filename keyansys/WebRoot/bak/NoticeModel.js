Ext.define('keyansys.view.notice.NoticeModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.notice',
    requires: [
       
        'keyansys.model.notice.Notice'
     //   'keyansys.view.notice.NoticeDeploy'
        
    ], 
    stores: {
        notices: {
            model: 'keyansys.model.notice.Notice',
            autoLoad: true,
        proxy: {
            type: 'ajax',
	        api: {
	            read: 'servlet/NoticeList'
	          //  create: 'servlet/AddUser',
             //   update: 'servlet/EditUser',
	         //   destroy: 'servlet/DeleteUser'
	        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            successProperty: 'success'
        },
            writer: {
              //  type: 'associatedjson',
                writeAllFields: true,
                encode: true,
                rootProperty: 'data',
                allowSingle: false
            }

        }
        }
        
        }
    
});