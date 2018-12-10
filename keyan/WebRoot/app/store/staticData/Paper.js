Ext.define('keyan.store.staticData.Paper', {
    extend: 'keyan.store.staticData.Abstract',

    requires: [
        'keyan.model.staticData.Paper',
        'keyan.proxy.StaticData'
    ],
    
    model: 'keyan.model.staticData.Paper',
    
    storeId: 'paper',
    successProperty:'success',
    proxy: {
        type: 'staticdataproxy',
         autoSync:true,
        extraParams: {
            entity: 'Paper'
        }
    },
    listeners:{
    	exception:function(){
    		console.info(arguments);
    	}
    }
});