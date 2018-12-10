Ext.define('keyan.controller.upload.Upload', {
    extend: 'Ext.app.Controller',
    
    views: [
    'staticData.upload'
    ],
    init: function(application) {
    	 Ext.QuickTips.init();
    	 this.control({
    	 	 "staticdatagrid button[itemId=myUpload]": {
                click: this.onButtonClickMyupload
            },
             "upload button[itemId=upload]": {
                click: this.onButtonClickUpload
            }
         	 
    	   });
    },
     onButtonClickMyupload:function (button, e, options) {
    	var win=Ext.create(keyan.view.staticData.upload);
    	win.show();
    },
    onButtonClickUpload:function (button, e, options) {
    	var win=button.up('window'),
    	formPanel=win.down('form')
    	if(formPanel.getForm().isValid()){
    	formPanel.getForm().submit({
    	url:'servlet/UploadFile',
    	global:false,//不触发全局ajax事件
    	method:'post',
    	waitMsg : '正在上传文件...',
    	success: function(form,action) {

            // var result = Ext.JSON.decode(conn.responseText,true);
    		 
             
              if (action.result.success) {
              	 Ext.Msg.alert('提示',action.result.msg);
              	 win.hide();
              	
             
              } else {
               // keyan.util.Util.showErrorMsg(conn.responseText);
                  Ext.Msg.alert('提示',action.result.msg);
                                }
         },
        failure: function(form,action) {
               Ext.Msg.alert('提示',action.result.msg);
               // keyan.util.Util.showErrorMsg(conn.responseText);
        }
    	});
    	}
    }
})
    
