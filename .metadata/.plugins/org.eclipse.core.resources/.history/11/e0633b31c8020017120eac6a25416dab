Ext.define('keyansys.view.user.UserModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.user',
    requires: [
       
        'keyansys.model.user.User',
        'keyansys.model.user.Group'
        
    ], 
    stores: {
        users: {
            model: 'keyansys.model.user.User',
            autoLoad: true,
        proxy: {
            type: 'ajax',
	        api: {
	            read: 'servlet/UserList',
	            create: 'servlet/AddUser',
                update: 'servlet/EditUser',
	            destroy: 'servlet/DeleteUser'
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
        },
        groups: {
            model: 'keyansys.model.user.Group',
            autoLoad: true,
            proxy: {
            type: 'ajax',
	        api: {
	            read: 'servlet/GroupList'
	        },
	        reader: {
	            type: 'json',
	            rootProperty: 'data',
	            successProperty: 'success'
	        }
    
            }
        }
      
    
    },
//
    formulas: {
        currentUser : {

            bind: {
                bindTo: '{usersGrid.selection}',
                deep: true
            },

            get: function(user){
                return user;
            },

            set: function(user){
                var me = this;
                if (!user.isModel){
                   user = me.get('users').getById(user);
                }
               // me.set('currentUser',user);
            }
        }
    }
});