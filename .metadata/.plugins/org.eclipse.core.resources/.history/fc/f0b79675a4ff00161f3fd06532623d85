//Ext.QuickTips.init();
Ext.define('keyansys.view.user.PasswordModify', {
    extend: 'Ext.window.Window',
    alias: 'widget.passwordmodify', 
    
        title:'修改密码',  
        frame:true,  
        height: 180,
        width: 400,
        modal:true,
        layout: {
        type: 'fit'
        },
        iconCls: 'key',
        //closable: false,
        draggable: false,
        resizable: false,

        items: [
           {
            xtype: 'form',
            reference: 'form',
            frame:false,
            bodyPadding: 15,
            defaults: {
                xtype: 'textfield',
                anchor: '70%',
                labelWidth: 70,
                allowBlank: false,
               // vtype: 'alphanum',
                minLength: 3,
                msgTarget: 'side'
             
            },
            items: [
               {  
                fieldLabel:'输入原密码',  
                name:'secondPassword',  
                width:150,
                inputType:'password',  
                blankText:'密码不能为空',  
                vtype:'password',  
                initialPassField:'password'  
                } ,
               {  
                fieldLabel:'输入新密码',  
                name:'pass',  
                id:'pass',
                inputType:'password', 
                blankText:'密码不能为空' 
                  
                } 
              ],  
              buttons:[{  
                text:'修改密码', 
                //id:bt,
                handler:function(button,e,options){ 
               	var passwordForm=button.up('window').down('form');
                if(!passwordForm.getForm().isValid()){  
                  return;  
                }  
                passwordForm.getForm().submit({  
                	
                    url:'servlet/PasswordModify',  
                    success:function(f,action){  
                        if(action.result.success){  
                            Ext.Msg.alert('密码修改成功');  
                        }  
                    },  
                    failure:function(f,action){   
                        passwordForm.getForm().reset();  
                        Ext.Msg.alert('密码修改失败');  
                    }   
                });  
               }     
              }]  
        }]
});  
Ext.apply(Ext.form.VTypes,{  
    password:function(val,field){  
        if(field.initialPassField){  
            var pwd = Ext.getCmp(field.initialPassField);  
            return (val == pwd.getValue());  
        }  
        return true;  
    },  
    passwordText:'与原密码不一致!'  
});  