 var formUpload = new Ext.form.FormPanel({
      
   
 
        bodyPadding:'5 5 5 5',  
        height:60,  
     //   width:270,  
        frame:true,  
        items:[{  
            xtype:'filefield',  
            name:'importexcel',  
            fieldLabel:'���뿼����Ϣ�ļ�',  
            labelWidth:120,  
        //    msgTarget:'side',  
            allowBlank:false,  
            anchor:'98%',  
            buttonText:'��ѡ������ļ�'  
        }] 
   });
   var formUpload1 = new Ext.form.FormPanel({
      
  //   title:'��̨����',  
 
        bodyPadding:'5 5 5 5',  
        height:60,  
     //   width:270,  
        frame:true,  
        items:[{  
            xtype:'filefield',  
            name:'importexcelkd',  
            fieldLabel:'���뿼����Ϣ�ļ�',  
            labelWidth:120,  
        //    msgTarget:'side',  
            allowBlank:false,  
            anchor:'98%',  
            buttonText:'��ѡ������ļ�'  
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
    title: "����Ա��̨����",
    layout: {
        type: 'vbox',
        
        align: 'stretch'
    },
   
    items: [{
        xtype: 'panel',
        collapsible: true,
        title: '���뿼����Ϣ',
        items: formUpload,
        buttons:[{  
            text:'�ύ',  
            handler:function(){  
                formUpload.getForm().submit({  
                    url:'servlet/ImportKsxx',  
                    waitMsg:'�ļ�������...',//��ʾ�ȴ���Ϣ  
                    success:function(){  
                        Ext.Msg.alert("success","�ļ�����ɹ���");  
                    }  
                });  
            }  
        }]  
       
    },{
        xtype: 'panel',
        collapsible: true,
        title: '���뿼���ʼ���Ϣ',
        items: formUpload1,
        buttons:[{  
            text:'�ύ',  
            handler:function(){  
                formUpload1.getForm().submit({  
                    url:'servlet/ImportKdxx',  
                    waitMsg:'�ļ�������...',//��ʾ�ȴ���Ϣ  
                    success:function(){  
                        Ext.Msg.alert("success","�ļ�����ɹ���");  
                    }  
                });  
            }  
        }]  
    },{
        xtype: 'panel',
        title: '�޸���ʾ��Ϣ',
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
                    fieldLabel:'�༭��ʾ����' ,
                    width:500,
                    height:150
                })
               
             ],  
              buttons:[{  
                text:'�޸���ʾ', 
                
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
                         
                            Ext.Msg.alert('�޸ĳɹ�');  
                        
                    },  
                    failure:function(f,action){   
                        tishiForm.getForm().reset();  
                        Ext.Msg.alert('�޸�ʧ��');  
                    }   
                });  
               }     
              }] 
        
           }]
    }]
});