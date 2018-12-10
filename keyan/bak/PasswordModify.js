Ext.apply(Ext.form.VTypes,{  
    password:function(val,field){  
        if(field.initialPassField){  
            var pwd = Ext.getCmp(field.initialPassField);  
            return (val == pwd.getValue());  
        }  
        return true;  
    },  
    passwordText:'两次密码不一致'  
});  
Ext.define('keyan.view.security.PasswordModify', {
    extend: 'Ext.window.Window',
    alias: 'widget.passwordForm', 
        title:'修改密码',  
        frame:true,  
        width:400,  
       // buttonAlign:'center',  
       // labelAlign:'left',  
          
        modal:true,
        items: [
        {
            xtype: 'form',
            reference: 'form',
            frame:false,
            bodyPadding: 15,
        //layout: 'anchor',
        //defaultType:'textfield',  
        defaults:{xtype:'textfield', width:150,labeWidth:100,allowBlank:false,msgTarget:'side',  
             minLength:6,  
             minLengthText:'密码不能少于6位',  
             maxLength:10,  
             maxLengthText:'密码不能超过10位'},  
        items:[   
            {  
             fieldLabel:'输入新密码',  
             name:'password',  
            
             inputType:'password', 
            // width:150,
             blankText:'密码不能为空',  
             id:'password'  
            },{  
             fieldLabel:'再次输入密码',  
             name:'secondPassword',  
            // width:150,
             inputType:'password',  
             blankText:'密码不能为空',  
             vtype:'password',  
             initialPassField:'password'  
            }     
        ],  
        buttons:[{  
            text:'修改密码',  
            handler:function(){  
                if(!passwordForm.getForm().isValid()){  
                  return;  
                }  
                passwordForm.getForm().submit({  
                 //   url:'',  
                    success:function(f,action){  
                        if(action.result.success){  
                            Ext.Msg.alert('修改成功');  
                        }  
                    },  
                    failure:function(f,action){   
                        passwordForm.getForm().reset();  
                        Ext.Msg.alert('修改失败');  
                    }   
                });  
            }  
        }]  
        }]
});  