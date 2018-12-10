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
    	global:false,//������ȫ��ajax�¼�
    	method:'post',
    	waitMsg : '���ڵ����ļ�...',
    	success: function(response, action,options) {

            // var result = Ext.JSON.decode(conn.responseText,true);
    		  var result=response.responseText;
                    result=Ext.JSON.decode(result);
             
              if (action.result.success) {
              	 Ext.Msg.alert('��ʾ',action.result.msg);
              	 win.hide();
              	
             
              } else {
               // keyan.util.Util.showErrorMsg(conn.responseText);
                  Ext.Msg.alert('��ʾ',action.result.msg);
                                }
         },
        failure: function(response, action,options) {
               Ext.Msg.alert('��ʾ',action.result.msg);
               // keyan.util.Util.showErrorMsg(conn.responseText);
        }
    	});
    	}
    }
})
    
