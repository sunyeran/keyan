Ext.define('keyan.controller.photo.Photo', {
    extend: 'Ext.app.Controller',
     requires: [
        'Ext.ux.IFrame'
    ],
    stores: [
       // 'photo.Photo',
      //  'mail.MailMenu',
         'photo.PhotoMenu'
    ],
     views: [
        'photo.DepPhotoContainer'
       // 'photo.DepPhotoList'
      // 'mail.StatisticsMenu'
        ],
    onTreepanelItemClick: function(view, record, item, index, event, options){
        this.onTreepanelSelect(view, record, index, options);
    },
 /*onTreepanelSelect: function(selModel, record, index, options) {
        //console.log(record.raw.className);
 	//store=this.getMaillist().getStore().load();
 },*/
/* onRender:function(component,options){
 	component.getStore().load();
 
 },
 afterRender:function(component,options){
 	component.getStore().load();
 },*/
  onTreepanelSelect: function(selModel, record, index, options) {

        var user = record.get('text');
       // var store = Ext.ComponentQuery.query('dataview')[0].getStore();
        var me=this,
        photoStore=Ext.getStore("imagesStore");
       // me.callParent(arguments);
        photoStore.load({   
           params: {username: encodeURIComponent(user)},   
          /* callback: function(records, options, success){   
           Ext.Msg.alert('info', '加载完毕');   
           },*/   
           scope: photoStore,   
           add: false  
        });
      
       // var photoView=Ext.create('keyan.view.photo.DepPhotoList',{});
      //  photoView.show();
       // me.getView('depphotolist').show();
     // renderTo: 'depPhotoList'
       // renderTo : Ext.getBody()
      /*  store.clearFilter();
        store.filter("folder", folder);*/
  //	Ext.ComponentQuery.query('depphotolist').show();
    },

    init: function(application) {
        this.control({
            "photoMenu": {
                select: this.onTreepanelSelect,
                itemclick: this.onTreepanelItemClick
            }
        });
        
    }
  
});
