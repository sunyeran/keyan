Ext.define('keyan.store.mail.StatisticsDepWorkload', {
    extend: 'Ext.data.Store',

    requires: [
        'keyan.model.mail.StatisticsDepWorkload'
    ],

    model: 'keyan.model.mail.StatisticsDepWorkload',

    proxy: {
       type: 'ajax',
    
    reader: {
        type: 'json',
        messageProperty: 'msg',
        root: 'data'
    },
       // url: 'servlet/StatisticsDepWorkload',
       
      
       // 	idProperty: 'id.scsj',//解决显示一条记录，主键重复
        api: {
        read    : 'servlet/StatisticsDepWorkload'
        
       
    }
      
    }
});