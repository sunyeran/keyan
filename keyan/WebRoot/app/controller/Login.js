/*var cookieValue;
var nameValue;
function getCookie(sName){
	var sRE="(?:; )?"+sName+"=([^;]*);?";
	var oRE=new RegExp(sRE);
	if(oRE.test(document.cookie)){
		return decodeURIComponent(RegExp["$1"]);
	}else{
		return null;
	}
	
};
nameValue=getCookie("name");
cookieValue=getCookie("loginDate");
*/
Ext.define('keyan.controller.Login', {
    extend: 'Ext.app.Controller',

  /*  requires:[
      'keyan.util.MD5'
    ],*/
 requires: [
        'keyan.util.Util'
              
    ],
    views: [
        'Login',
        'Header',
        'authentication.CapsLockTooltip'
       
    ],

    refs: [
        {
            ref: 'capslockTooltip',
            selector: 'capslocktooltip'
        }
    ],
   
    init: function(application) {
    
        this.control({
            "login form button#submit": {
                click: this.onButtonClickSubmit
            },
            "login form button#cancel": {
                click: this.onButtonClickCancel
            },
            "login form textfield": {
                specialkey: this.onTextfielSpecialKey
            },
            "login form textfield[name=password]": {
                keypress: this.onTextfielKeyPress
            },
           
            "appheader button#logout": {
                click: this.onButtonClickLogout
            },
             "appheader button#modifypassword": {
                click: this.onButtonClickModifyPassword
            }
        });

 
    },
onButtonClickSubmit: function(button,e,options){
	var formPanel = button.up('form'),
            login = button.up('login'),
            user = formPanel.down('textfield[name=user]').getValue(),
            pass = formPanel.down('textfield[name=password]').getValue();   
            
        if (formPanel.getForm().isValid()) {

         //   pass = keyan.util.MD5.encode(pass); 
            
            Ext.get(login.getEl()).mask("正在验证...", '请稍后');

            Ext.Ajax.request({
                url: 'servlet/LoginServlet',
                cache: false,
                async: false,

                params: {
                    user: user,
                    password: pass
                },
                success: function( response, action,options) {
                    
                    Ext.get(login.getEl()).unmask();
                    //alert(response.responseText);
                   // console.log(conn);
                   // var result = Keyan.util.Util.decodeJSON(conn.responseText);
                   //  var result = Ext.JSON.decode(conn.responseText);
                   // Ext.Msg.alert("ok");
                     var result=response.responseText;
                    result=Ext.JSON.decode(result);
                    // alert(result.name); 
                    if (result.success) {
                        //keyan.util.Alert.msg('Success!', 'User Authenticated.');
                        login.close();
                       // cookieValue=getCookie("name");
                       Ext.apply(keyan.util.Config,result);
                      // alert(result.name); 
                                    
                      // new (keyan.view.MyViewport);
                        Ext.create('keyan.view.MyViewport');
                      //  keyan.util.SessionMonitor.start();
                      
                    } else {
                       // Keyan.util.Util.showErrorMsg(conn.responseText);
                    	Ext.Msg.alert("提示",result.msg);
                    }
                  Ext.ComponentQuery.query('appheader button')[0].setText(keyan.util.Config.name+"老师，欢迎您使用科研管理系统（建议使用火狐浏览器）");  
                },
               
                failure: function(conn, response, options, eOpts) {

                    Ext.get(login.getEl()).unmask();
                
                    Ext.Msg.alert("提示",action.result.msg);
                },
                scope:this
            });
       }   
    
     // return cookieValue;
    },  
    
    onTextfielSpecialKey: function(field, e, options) {
        if (e.getKey() == e.ENTER){
            var submitBtn = field.up('form').down('button#submit');
            submitBtn.fireEvent('click', submitBtn, e, options);
        }
    },

    onTextfielKeyPress: function(field, e, options) {
        var charCode = e.getCharCode(); 
        
        if((e.shiftKey && charCode >= 97 && charCode <= 122) ||
            (!e.shiftKey && charCode >= 65 && charCode <= 90)){

            if(this.getCapslockTooltip() === undefined){
                Ext.widget('capslocktooltip');
            }

            this.getCapslockTooltip().show();

        } else {

            if(this.getCapslockTooltip() !== undefined){
                this.getCapslockTooltip().hide();
            }
        }
    },
  
    onButtonClickModifyPassword:function(button, e, options) {
    	var win = Ext.create('keyan.view.security.PasswordModify');
        win.show();
    },
    onButtonClickLogout: function(button, e, options) {

      /*  Ext.Ajax.request({
            url: 'servlet/Logout',
            success: function(conn, response, options, eOpts){

                var result = keyan.util.Util.decodeJSON(conn.responseText);

                if (result.success) {*/
                    
                    button.up('mainviewport').destroy();
                    window.location.reload();
             /*   } else {

                    keyan.util.Util.showErrorMsg(result.msg); 
                }
            },
            failure: function(conn, response, options, eOpts) {
                
                keyan.util.Util.showErrorMsg(conn.responseText);
            }
        });*/
    },

onButtonClickCancel:function(button,e,options){
	button.up('form').getForm().reset();
	
}

});
  