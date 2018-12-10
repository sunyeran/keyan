  Ext.define('keyan.view.photo.Photo', {
  extend: 'Ext.window.Window',
  //  alias: 'widget.win',
  // requires: ['keyan.store.photo.Photo'],

   /* layout: {
      //  align: 'stretch',
        type: 'vbox'
    },*/
    title: '图片',
   // store:'keyan.store.photo.Photo',
    height: 350,
    width: 650,
    modal:true,
    items:getAlbumTabPanel(),
    dockedItems: [
        {
            xtype: 'toolbar',
            flex: 1,
            dock: 'bottom',
            items: [
                {
                    xtype: 'button',
                    text: '取消',
                    itemId: 'cancel',
                    iconCls: 'cancel'
                },
                {
                    xtype: 'button',
                    text: '确定',
                    itemId: 'ok',
                    iconCls: 'save',
                    handler : function() {
                    	alert("ok");
					//win.close();
				} 
                }
            ]
        }
    ]
});
/*function getAlbumStore() {
	var albumStore = new Ext.data.Store( {
		proxy :new Ext.data.HttpProxy( {
		//	url :'servlet/AllAlbums'
		}),
		autoLoad :true,
		reader :new Ext.data.ArrayReader( {}, [ {
			name :'id'
		}, {
			name :'name'
		} ])
	});
	return albumStore;
}
function addAlbum() {

	createAlbumFormPanel.getForm().submit( {
		success : function(form, action) {
			showInfoDialog("成功建立相册！");
			try {
				albumListField.view.setStore(getAlbumStore());
			} catch (e) {
			}
			createAlbumWindow.close();

		},
		failure : function(form, action) {
			if (action.result != undefined)
				showErrorDialog(action.result.msg);

		}
	});

}*/
/*var albumNameField;
var albumDescriptionField;
var createAlbumFormPanel;
var createAlbumWindow;
function getCreateAlbumWindow() {
	albumNameField = new Ext.form.TextField( {
		fieldLabel :'相册名称',
		name :'name',
		width :200

	});
	albumDescriptionField = new Ext.form.TextArea( {
		fieldLabel :'详细描述',
		width :200,
		name :'description',
		height :120

	});

	createAlbumFormPanel = new Ext.form.FormPanel( {
		layout :'form',
		labelWidth :60,
		url :'servlet/AddAlbumAction',
		frame :true,
		items : [ albumNameField, albumDescriptionField ]

	});

	createAlbumWindow = new Ext.Window( {
		title :'建立相册',
		layout :'fit',
		modal :true,
		width :300,
		height :250,
		resizable :false,
		buttons : [ {
			text :'确定',
			handler : function() {
				addAlbum();

			}
		} ],
		items : [ createAlbumFormPanel ]
	});
	return createAlbumWindow;
}*/
//var albumListField;
var imagesPanel;
var imageDataView;
//var albumId;
function getPhotosJsonStore()
{ 

	return new Ext.data.JsonStore( {
		proxy:{
			type:'ajax',
		    url :'servlet/GetPhotos',
		    reader:{
		        type:'json',
		        root:'data'
		    }
		},
		autoLoad :true,
		id :'name',
		fields : [ 'id', 'dep', 'photo_filename', 'content_type' ]
	})

}
function getImageDataView()
{
	imageDataView =new Ext.DataView(
			{
				itemSelector :'div.thumb-wrap',
				style :'overflow:auto',
				multiSelect :true,
				id :'imageDataView',
				store :getPhotosJsonStore(),
				tpl :new Ext.XTemplate(
						'<tpl for=".">',
						'<div class="thumb-wrap" id="{id}">',
						'<div class="thumb"><img   src="servlet/GetPhoto?photo_filename={photo_filename}" class="thumb-img"/></div>',
						'<span></span></div>', '</tpl>')
			});
	function dblclick(dataView, index, node, e)
	{		
		getShowPhotoWindow(dataView, '').show();
	}
	imageDataView.on("dblclick", dblclick);
	return imageDataView;
}

function getShowPhotoWindow(dataView, email)
{
	var records = dataView.getSelectedRecords();
	var filename = records[0].get('filename');
//	var albumId = records[0].get('albumId');

	var panel = new Ext.Panel( {

		region :'center',
		margins :'5 5 5 0',
		layout :'fit',
	    autoScroll:true,
		html:'<img src="servlet/GetPhoto?filename=' + filename + '&albumId=' + albumId + '&friendEmail=' + email + '"/>'
	});
	var showPhotoWindow = new Ext.Window( {
		title :'显示照片',
		layout :'fit',
		modal :true,
		width :800,
		height :600,
		maximizable: true,
		resizable :true,
		items : [panel]
	});
	return showPhotoWindow;
}
function getMyPhotoTab() {
	var tab;
	var jsonStore;
	/*albumListField = new Ext.form.ComboBox( {

		fieldLabel :'相册',
		stateful :false,
		store :getAlbumStore(),
		triggerAction :'all',
		valueField :'id',
		displayField :'name',
		hiddenName :'id',
		mode :'remote',
		readOnly :true

	});

	function select(combo, record, index) {
		albumId = record.get('id');
		imagesPanel.removeAll();
		imagesPanel.add(getImageDataView());
		imagesPanel.doLayout();

	}
	albumListField.on("select", select);

	var albumList = {
		columnWidth :.5,
		layout :'form',
		border :false,
		items : [ albumListField ]
	}
	var btnCreateAlbum = new Ext.Button( {
		handler : function() {
			getCreateAlbumWindow().show()
		},
		text :'建立相册'

	});
	var albumList = {
		columnWidth :.5,
		layout :'form',
		border :false,
		items : [ albumListField ]
	}*/
	var btnDeletePhotos = new Ext.Button( {
		style :'margin-left:20px',
		handler : function() {
			

		var count = imageDataView.getSelectionCount();
		var records = imageDataView.getSelectedRecords();
		var filenames = '';
		var photoIds = '';
		for ( var i = 0; i < count; i++) {
			filenames += records[i].get('filename') + ";";
			photoIds += records[i].get('id') + ";";
		}

		Ext.Ajax.request( {
			url :'servlet/DeletePhoto',
			success : function(response) {
				alert(response.responseText);
				imageDataView.setStore(getPhotosJsonStore());

			},
			params : {
				albumId :albumId,
				filenames :filenames,
				photoIds :photoIds
			}

		});

	},
	text :'删除照片'

	});
	var btnShowPhoto = new Ext.Button( {
		style :'margin-left:20px',
		handler : function() {
			if(imageDataView.getSelectionCount() > 0)
			{
				var records = imageDataView.getSelectedRecords();
				getShowPhotoWindow().show();
				//showInfoDialog(records[0].get('filename'));
			}
			else
			{
				showErrorDialog('请选择照片!');
			}
		},
		text :'显示照片'

	});
	


	// //////////////////////////////////////////////////////////
	imagesPanel = new Ext.Panel( {
		id :'images',
		region :'center',
		height :500,

		margins :'5 5 5 0',
		layout :'fit',
		items :getImageDataView()
	});
	// //////////////////////////////////////////////////////////

	tab = [ new Ext.form.FormPanel( {
		layout :'column',
		labelWidth :35,
		frame :true,
		items : [btnDeletePhotos, btnShowPhoto ]
	}), imagesPanel

	];
	return tab;

}

function getUploadField(fieldLabel, name) {
	return {
		xtype :'fileuploadfield',
		 enctype : 'multipart/form-data',
         fileUpload : true,
		readOnly :false,
		allowBlank :true,
		fieldLabel :fieldLabel,
		name :name,
		anchor :'95%',
		buttonText :'选择文件',
		buttonCfg : {
			iconCls :'upload-icon'
		}
	}
}
var albumListField1;
function getUploadPhotoTab() {
	/*var tab;

	albumListField1 = new Ext.form.ComboBox( {

		fieldLabel :'相册',
		stateful :false,
		store :getAlbumStore(),
		triggerAction :'all',
		valueField :'id',
		displayField :'name',
		hiddenName :'id',
		mode :'remote',
		readOnly :true

	});



	var albumList = {
		columnWidth :.4,
		layout :'form',
		border :false,
		items : [ albumListField1 ]
	}
	var btnCreateAlbum = new Ext.Button( {
		handler : function() {
			getCreateAlbumWindow().show()
		},
		text :'建立相册'

	});*/

	var uploadFormPanel = new Ext.FormPanel( {

		fileUpload :true,
		border :false,
		bodyStyle :'padding: 10px 10px 0 10px;',
		labelWidth :50,

		items : [ {
			layout :'column',
			
			 fieldLabel : '上传图片',  
            
			border :false,
			style :'margin-bottom:10px'
		//	items : [ albumList, btnCreateAlbum ]
		}, getUploadField('选择上传图像', 'photo')

		],
		buttons : [ {
			text :'上传',
			handler : function() {
				if (uploadFormPanel.getForm().isValid()) {
					uploadFormPanel.getForm().submit( {
						url :'servlet/UploadFile',
						waitMsg :'正在上传图像...',
						success : function(form, action) {
							alert(action.result.msg);
						}
					});
				}
			}
		} ]
	});

	tab = [ uploadFormPanel ];
	return tab;

}



var albumTabPanel;
function getAlbumTabPanel() {
	albumTabPanel = new Ext.TabPanel( {
		activeTab :0,

		items : [ {
			id :'myphoto',
			title :'我的照片',
			layout :'form',
			items :getMyPhotoTab()
		}, {
			title :'上传照片',
			layout :'form',
			items :getUploadPhotoTab()
		}

		]
	});
	return albumTabPanel;
}

