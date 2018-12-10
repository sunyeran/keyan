 var formUpload = new Ext.form.FormPanel({
      
   
 
        bodyPadding:'5 5 5 5',  
        height:60,  
     //   width:270,  
        frame:true,  
        items:[{  
            xtype:'filefield',  
            name:'importexcel',  
            fieldLabel:'导入考生信息文件',  
            labelWidth:120,  
        //    msgTarget:'side',  
            allowBlank:false,  
            anchor:'98%',  
            buttonText:'请选择导入的文件'  
        }] 
   });
   var formUpload1 = new Ext.form.FormPanel({
      
  //   title:'后台管理',  
 
        bodyPadding:'5 5 5 5',  
        height:60,  
     //   width:270,  
        frame:true,  
        items:[{  
            xtype:'filefield',  
            name:'importexcelkd',  
            fieldLabel:'导入考生信息文件',  
            labelWidth:120,  
        //    msgTarget:'side',  
            allowBlank:false,  
            anchor:'98%',  
            buttonText:'请选择导入的文件'  
        }] 
   });
Ext.define('zs.view.manage.Manage', {
    extend: 'Ext.window.Window',
    xtype: 'manage',
  
    requires: [
        'Ext.layout.container.Table',
    
              'zs.view.login.LoginController',
              'Ext.form.Panel'
              ],
  //  controller:'login',
   
    autoShow: true,
  //  width: 660,
    width: 550,
    height:620,
    title: "管理员后台管理",
    layout: {
        type: 'vbox',
        
        align: 'stretch'
    },
   
    items: [{
        xtype: 'panel',
        collapsible: true,
        title: '导入考生信息',
        items: formUpload,
        buttons:[{  
            text:'提交',  
            handler:function(){  
                formUpload.getForm().submit({  
                    url:'servlet/ImportKsxx',  
                    waitMsg:'文件导入中...',//提示等待信息  
                    success:function(){  
                        Ext.Msg.alert("success","文件导入成功！");  
                    }  
                });  
            }  
        }]  
       
    },{
        xtype: 'panel',
        collapsible: true,
        title: '导入考生邮件信息',
        items: formUpload1,
        buttons:[{  
            text:'提交',  
            handler:function(){  
                formUpload1.getForm().submit({  
                    url:'servlet/ImportKdxx',  
                    waitMsg:'文件导入中...',//提示等待信息  
                    success:function(){  
                        Ext.Msg.alert("success","文件导入成功！");  
                    }  
                });  
            }  
        }]  
    },{
        xtype: 'panel',
        title: '修改提示信息',
        flex: 1,
        items: [
           {
            xtype: 'form',
            //reference: 'form1',
            name:'form1',
            frame:false,
            bodyPadding: 15,
     
            items: [
                
                new Ext.form.TextArea({  
                    id:'tishi',  
                  //  layout:'fit',
                    fieldLabel:'编辑提示内容' ,
                    width:500,
                    height:150
                })
               
             ],  
              buttons:[{  
                text:'修改提示', 
                
                handler:function(button,e,options){ 
               	var tishiForm=button.up('window').down('form');
               	var tValue = Ext.getCmp('tishi').getValue()
          /*      if(!tishiForm.getForm().isValid()){ 
                	alert('test');
                  return;  
                }  */
               
               // tishiForm.getForm().submit({  
                	Ext.Ajax.request({
                           url:'servlet/ResetTishi',  
                            params: {
                                tishi: tValue
                            },
                    
                    success:function(f,action){  
                         
                            Ext.Msg.alert('修改成功');  
                        
                    },  
                    failure:function(f,action){   
                        tishiForm.getForm().reset();  
                        Ext.Msg.alert('修改失败');  
                    }   
                });  
               }     
              }] 
        
           }]
    }]
});