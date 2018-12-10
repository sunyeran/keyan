Ext.define('keyansys.store.staticData.Paper', {
    extend: 'keyansys.store.staticData.Abstract',

    requires: [
        'keyansys.model.staticData.Paper',
        'keyansys.proxy.StaticData'
    ],
    
    model: 'keyansys.model.staticData.Paper',
    
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