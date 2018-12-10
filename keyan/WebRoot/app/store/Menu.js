Ext.define('keyan.store.Menu', {
    extend: 'Ext.data.Store',

    requires: [
        'keyan.model.menu.Root'
    ],

    model: 'keyan.model.menu.Root',
    
    proxy: {
        type: 'ajax',
        url: 'servlet/MenuList',
        
        reader: {
            type: 'json',
            root: 'items'
       
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