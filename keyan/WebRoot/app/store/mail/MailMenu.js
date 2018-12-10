Ext.define('keyan.store.mail.MailMenu', {
    extend: 'Ext.data.TreeStore',

    //clearOnLoad: true,
   
    proxy: {
        type: 'ajax',
        url: 'servlet/StatisticsMenu'
    }/*,
     reader: {
        	idProperty: 'id.scsj',//解决显示一条记录，主键重复
            type: 'json',
            root: 'item'
        }*/
});