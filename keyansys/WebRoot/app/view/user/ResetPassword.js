Ext.define('keyansys.view.user.ResetPassword', {
    extend: 'Ext.window.Window',
    alias: 'widget.resetpassword', 
    
        title:'重置教师密码',  
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
                labelWidth: 90,
                allowBlank: false,
                //vtype: 'alphanum',
                minLength: 6,
                maxLength: 6,
                msgTarget: 'under'
             
            },
            items: [
               {  
                fieldLabel:'输入教师编码',  
                name:'username',  
                width:150,
                regex:/^[0-9]*$/,
                regexText:'只能输入数字',
                //inputType:'password',  
                blankText:'密码不能为空'
               
                } ,
               
                {
                 xtype:'label',
                 text:'重置密码后新密码为教师教工号'
                }
              ],  
              buttons:[{  
                text:'重置密码', 
                formBind:true,
                //id:bt,
                handler:function(button,e,options){ 
               	var passwordForm=button.up('window').down('form');
                if(!passwordForm.getForm().isValid()){  
                  return;  
                }  
                passwordForm.getForm().submit({  
                	
                    url:'servlet/ResetPassword',  
                    success:function(f,action){  
                        if(action.result.success){  
                           Ext.MessageBox.show({
					        title: "提示",
					        msg: "重置密码成功!",
					        width: 150,
					        buttons: Ext.MessageBox.OK,
					       
					        icon: Ext.MessageBox.INFO
					    });   
                        }  
                    },  
                    failure:function(f,action){   
                        passwordForm.getForm().reset();  
                        Ext.MessageBox.show({
					        title: "提示",
					        msg: "重置密码失败，无此教工号!",
					        width: 150,
					        buttons: Ext.MessageBox.OK,
					       
					        icon: Ext.MessageBox.INFO
					    });  
                    }   
                });  
               }     
              }]  
        }]
});  
