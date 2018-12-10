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
                
              //  itemId: 'depphotopanel',
              //   layout: 'fit',
                items: new Ext.DataView({   //这里用到了DataView
                    store: imagesStore=new Ext.data.JsonStore({
                	storeId:'imagesStore',
                  	proxy:{
		            	type:'ajax',
		                url :'servlet/GetDepPhoto',
		            reader:{
		                type:'json',
		                root:'data'
		             }
	        	    },
		            //autoLoad :true,
		           
	        	   // id :'name',
	    	        fields : [ 'id', 'dep', 'photo_filename', 'file_path' ]
                   }),
           
             // singleSelect:true,
              style :'overflow:auto',
              
			 tpl: new Ext.XTemplate(
                  '<tpl for=".">',
                    //  '<div style="margin-bottom: 10px;float:left" class="thumb-wrap">',
                   '<div class="keyan-imageList" >',//注意这个div样式的应用，没有这个样式则显示效果不佳
                    '<img width="160" height="160" src="{file_path}{photo_filename}"/><br/>',
                  // '<p class="ellipsis">{photo_filename}</p>',
                   '<center>{photo_filename}</center>', //横向显示
                   '</div>',
                  '</tpl>'),
              emptyText: '没有图片显示',
             
              style: 'overflow:auto;zoom:1;'
             })          
                    	 
            },
            {
                xtype: 'photoMenu',
                region: 'west'
                
            }
        ]

     //   me.callParent(arguments);
    //}

});
/*Ext.define('Image', {
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
        reader:{
          type:'json',
          root:'data'
        }
    }
});
var imageTpl = new Ext.XTemplate(
   '<tpl for=".">',
        //'<div style="margin-bottom: 10px;" class="thumb-wrap">',
        '<div style="margin-bottom: 10px;float:left" class="keyan-imageList">',
          '<img width="160" height="160" src="{file_path}{photo_filename}"  />',
          '<br/><span>{photo_filename}</span>',
        '</div>',
    '</tpl>',
    '<div class="x-clear"></div>'
);					
Ext.create(Ext.DataView,{
	id:'dw',
	store:'imagesStore',
	//store:Ext.data.StoreManager.lookup('imagesStore'),
    tpl: imageTpl,
    trackOver:true,
	itemSelector :'div.keyan-imageList',
    selectedItemCls:'keyan-imageList-selected',
    overItemCls:'image-overItem',
     style :'overflow:auto',
    emptyText: '没有可用的图片'
    
});*/