Ext.define('keyansys.store.Menu', {
    extend: 'Ext.data.Store',

    requires: [
        'keyansys.model.menu.Root'
    ],

    model: 'keyansys.model.menu.Root',
    
    proxy: {
        type: 'ajax',
        url: 'servlet/MenuList',
        
        reader: {
            type: 'json',
            rootProperty: 'items'
       
        },
         listeners: {
            exception: function(proxy, response, operation){
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }

    }
});