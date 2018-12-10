Ext.define('zs.controller.importExcel.ImportExcel', {
    extend: 'Ext.app.Controller',
    
    views: [
    'manage.Manage'
    ],
    init: function(application) {
    	 Ext.QuickTips.init();
    	 this.control({
    	 	 
             "importexcel button[itemId=importexcel]": {
                click: this.onButtonClickUpload
            }
         	 
    	   });
    },
    
    onButtonClickUpload:function (button, e, options) {
    	var win=button.up('window'),
    	formPanel=win.down('form')
    	if(formPanel.getForm().isValid()){
    	formPanel.getForm().submit({
    	url:'servlet/ImportKsxx',
    	global:false,//不触发全局ajax事件
    	method:'post',
    	waitMsg : '正在导入文件...',
    	success: function(response, action,options) {

            // var result = Ext.JSON.decode(conn.responseText,true);
    		  var result=response.responseText;
                    result=Ext.JSON.decode(result);
             
              if (action.result.success) {
              	 Ext.Msg.alert('提示',action.result.msg);
              	 win.hide();
              	
             
              } else {
               // keyan.util.Util.showErrorMsg(conn.responseText);
                  Ext.Msg.alert('提示',action.result.msg);
                                }
         },
        failure: function(response, action,options) {
               Ext.Msg.alert('提示',action.result.msg);
               // keyan.util.Util.showErrorMsg(conn.responseText);
        }
    	});
    	}
    }
})
    
