Ext.define('keyan.view.security.Profile', {
    extend: 'Ext.window.Window',
    alias: 'widget.profile',

    height: 280,
    width: 550,

    requires: ['keyan.util.Util'],

    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: '用户',

   items: [
           {
            xtype: 'form',
            reference: 'form',
            frame:false,
            bodyPadding: 15,
            defaults: {
            	afterLabelTextTpl: keyan.util.Util.required,
                xtype: 'textfield',
                anchor: '70%',
                labelWidth: 90,
                allowBlank: false,
               // vtype: 'alphanum',
                minLength: 1,
                msgTarget: 'side'
             
            },
            items: [
              {
                            xtype: 'hiddenfield',
                           // itemId:userId,
                            fieldLabel: 'id',
                            name: 'id'
                        },
                        {   itemid:'userName',
                            fieldLabel: '用户名',
                            minLength: 6,
                            maxLength: 6,
                            regex:/^[0-9]*$/,
                            regexText:'只能输入数字',
                            msgTarget: 'under',
                            name: 'userName'
                        },
                        {   itemId:'name',
                            fieldLabel: '姓名',
                           
                            name: 'name'
                        },
                        
                        {  // itemId:'department',
                            fieldLabel: '部门',
                            maxLength: 100,
                            name: 'department'
                        },
                         {  fieldLabel: '职称',
                            name :'positionalTitles',
			                xtype:'combobox',
			            	store:["正高","副高","讲师","助教","工人岗"],
			            	width:150
                        },
                        {  // itemId:'department',
                            fieldLabel: '工作量标准',
                            maxLength: 100,
                            name: 'workloadLevel'
                        },
                        {
                            xtype: 'combobox',
                            //itemId:'Groups_id',
                            fieldLabel: '所属组',
                            name: 'Group_id',
                            displayField: 'name',
                            valueField: 'id',
                            queryMode: 'local',
                            store: 'security.Groups'
                        }
                    ],
              buttons:[{  
                text:'添加', 
                //id:bt,
                handler:function(button,e,options){ 
               	var adduserForm=button.up('window').down('form');
                if(!adduserForm.getForm().isValid()){  
                  return;  
                }  
                adduserForm.getForm().submit({  
                	
                    url:'servlet/AddUser',  
                    success:function(f,action){  
                        if(action.result.success){  
                            Ext.Msg.alert('提示！',action.result.msg);  
                        }  
                    },  
                    failure:function(f,action){   
                        adduserForm.getForm().reset();  
                        Ext.Msg.alert('提示！',action.result.msg);
                      //  Ext.Msg.alert('提示！','添加失败,教工号重复。');  
                    }   
                });  
               }     
              }]  
        }]
});                 