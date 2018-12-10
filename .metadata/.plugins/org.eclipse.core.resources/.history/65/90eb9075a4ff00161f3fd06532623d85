//Ext.QuickTips.init();
Ext.define('keyansys.view.user.ModifyWorkloadLevel', {
    extend: 'Ext.window.Window',
    xtype: 'modifyworkloadlevel', 
    reference:'ModifyWorkloadLevel',
        title:'修改教师工作量标准',  
        frame:true,  
        height: 180,
        width: 400,
        modal:true,
        layout: {
        type: 'fit'
        },
        iconCls: 'edit',
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
               
                msgTarget: 'under'
             
            },
            items: [
               {fieldLabel:'选择职称类别',  
               name :'positionalTitles',
                xtype:'combobox',
            	typeAhead:true,
            	store:["正高","副高","讲师","助教","工人岗"],
            	width:150,
            	//lazyRender:true,
                emptyText:'职称'
               
                } ,
               
                {
                 fieldLabel:'新的工作量标准',  
                name:'workloadLevel',  
                width:180
                }
              ],  
              buttons:[{  
                text:'修改', 
                formBind:true,
                //id:bt,
                handler:function(button,e,options){ 
               	var workloadLevelForm=button.up('window').down('form');
                if(!workloadLevelForm.getForm().isValid()){  
                  return;  
                }  
                workloadLevelForm.getForm().submit({  
                	
                    url:'servlet/ModifyWorkloadLevel',  
                    success:function(f,action){  
                        if(action.result.success){  
                           Ext.MessageBox.show({
					        title: "提示",
					        msg: "工作量标准修改成功!",
					        width: 150,
					        buttons: Ext.MessageBox.OK,
					        icon: Ext.MessageBox.INFO
					    }); 
					  
					    
                        }
                     
                    }, 
                    
                    failure:function(f,action){   
                        workloadLevelForm.getForm().reset();  
                        Ext.Msg.alert('修改失败');  
                    }   
                });  
                
               }     
              }]  
        }]
});  
