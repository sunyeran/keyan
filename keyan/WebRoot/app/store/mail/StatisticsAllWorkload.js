Ext.define('keyan.store.mail.StatisticsAllWorkload', {
    extend: 'Ext.data.Store',

    requires: [
        'keyan.model.mail.StatisticsDepWorkload'
    ],

    model: 'keyan.model.mail.StatisticsDepWorkload',

    proxy: {
       type: 'ajax',
       timeout: 180000,//default 30000 milliseconds ,不加上这句则会因为ajax请求时间过长而导致前台显示流产，这里设置响应时间为3分钟   
    reader: {
        type: 'json',
        messageProperty: 'msg',
        root: 'data'
    },
       
        api: {
        read    : 'servlet/StatisticsAllWorkload'
        
       
    }
      
    }
});