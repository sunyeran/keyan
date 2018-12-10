Ext.define('keyansys.view.notice.NoticeModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.notice',
    requires: [
       
        'keyansys.model.notice.Notice'
        
    ], 
    
    stores: {
    	sorters: [{
            property: 'last_update',
            direction:'DESC'
             }],
        notices: {
            model: 'keyansys.model.notice.Notice',
            autoLoad: true,
        proxy: {
            type: 'ajax',
	        api: {
	            read: 'servlet/NoticeList',
	            create: 'servlet/EditNotice',
                update: 'servlet/EditNotice',
	            destroy: 'servlet/DeleteNotice'
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
      
      
    
    },
//
    formulas: {
        currentNotice : {

            bind: {
                bindTo: '{noticedeploylist.selection}',
                deep: true
            },

            get: function(notice){
                return notice;
            },

            set: function(notice){
                var me = this;
                if (!notice.isModel){
                   notice = me.get('notices').getById(notice);
                }
                me.set('currentNotice',notice);
            }
        }
    }
});