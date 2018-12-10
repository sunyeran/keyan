Ext.define('keyan.view.photo.DepPhotoContainer', {
    extend: 'Ext.container.Container',
    alias: 'widget.depphotocontainer',

    requires: [
       
       // 'keyan.view.photo.DepPhotoList',
        'keyan.view.photo.PhotoMenu'
    ],

    layout: {
        type: 'border'
    },

  //  initComponent: function() {
   //     var me = this;
        items :[
            {
                xtype: 'panel',
                region: 'center',
                itemId: 'depphotopanel',
                 layout: 'fit',
                 items:'dw'          
                    	 
            },
            {
                xtype: 'photoMenu',
                region: 'west'
                
            }
        ]

     //   me.callParent(arguments);
    //}

});
Ext.define('Image', {
    extend: 'Ext.data.Model',
 fields: [
        { name: 'id' },
        { name: 'username' },
        { name: 'dep'},
        { name: 'photo_filename'},
        { name: 'file_path'}
    ]
});
Ext.create('Ext.data.Store', {
    id:'imagesStore',
    model: 'Image',
    proxy:{
       	type:'ajax',
       	url:'servlet/GetDepPhoto',
        //url :'Data.js',
        reader:{
          type:'json',
          root:'data'
        }
    }
});
var imageTpl = new Ext.XTemplate(
   '<tpl for=".">',
        //'<div style="margin-bottom: 10px;" class="thumb-wrap">',
        '<div style="margin-bottom: 10px;float:left" class="thumb-wrap">',
          '<img width="160" height="160" src="{file_path}{photo_filename}"  />',
          '<br/><span>{photo_filename}</span>',
        '</div>',
    '</tpl>',
    '<div class="x-clear"></div>'
);					
var dw=Ext.create('Ext.view.View', {
	id:'dw',
	store:Ext.data.StoreManager.lookup('imagesStore'),
    tpl: imageTpl,
    itemSelector: 'div.thumb-wrap',
     style :'overflow:auto',
    emptyText: '没有可用的图片'
    
});