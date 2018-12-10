Ext.define('keyansys.store.Base', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'storebase',

    type: 'ajax',
    
    reader: {
        type: 'json',
        messageProperty: 'msg',
        rootProperty: 'data'
    },

    writer: {
        type: 'json',
        writeAllFields: true,
        encode: true,
        allowSingle: false,
        rootProperty: 'data'
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
});