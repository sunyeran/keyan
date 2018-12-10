Ext.define('zs.view.manage.Validate', {
    extend: 'Ext.window.Window',
    xtype: 'validate',
    
    requires: [
            
              'zs.view.login.LoginController',
              'Ext.form.Panel'
              ],
    autoShow: true,
    title: '管理员身份验证',
    frame:true,
    width: 320,
    bodyPadding: 10,
    
    defaultType: 'textfield',
    
    items: [{
    	inputType: 'password',
        allowBlank: false,
        fieldLabel: '请输入管理员密码',
        id:'validate',
        name: 'user',
        emptyText: '管理员密码'
    }],
    
    buttons: [
       
        { text:'确定',
        handler:function(button,e,options){ 
               	
               	var tValue = Ext.getCmp('validate').getValue();
               	if(tValue=='zs999999'){
               		var win=Ext.create('zs.view.manage.Manage');
	                win.show();
               	}
               	else
               	alert('密码错误！');
        }
        }
    ],
    
    initComponent: function() {
        this.defaults = {
            anchor: '100%',
            labelWidth: 120
        };
        
        this.callParent();
    }
});