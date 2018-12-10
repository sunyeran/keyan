Ext.define('keyan.store.mail.StatisticsMenu', {
    extend: 'Ext.data.TreeStore',

    //clearOnLoad: true,
   
    proxy: {
        type: 'ajax',
        url: 'servlet/StatisticsAllMenu'
    }/*,
     reader: {
        	idProperty: 'id.scsj',//解决显示一条记录，主键重复
            type: 'json',
            root: 'item'
        }*/
});