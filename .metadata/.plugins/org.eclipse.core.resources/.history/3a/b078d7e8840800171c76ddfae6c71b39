/*var store = new Ext.data.SimpleStore({
   fields : ['id', 'name'],
   data : [['1', '正高'], ['2', '副高'], ['3', '讲师'], ['4', '助教'],
     ['5', '工人岗']]
    
});
 
 var mycombo=Ext.create('Ext.form.ComboBox', {
    fieldLabel: '职称',
    store: store,
    queryMode: 'local',
    displayField: 'name',
   
});   */           
            
Ext.define('keyansys.view.user.UserForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.user-form',

    height: 300,
    width: 550,
   
    requires: ['keyansys.util.Util',
        'Ext.form.Panel',
        'keyansys.util.Glyphs',
      //  'keyansys.view.user.UsersGrid',
        'keyansys.view.user.UserModel',
        'keyansys.view.user.UserController'
  
      //  'keyansys.view.user.UserForm'
        
    ],
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
   // title: '添加/编辑用户信息',
	bind: {
	        title: '{title}'
	    },
   items: [
           {
            xtype: 'form',
            reference: 'form',
            frame:false,
            bodyPadding: 15,
            defaults: {
            	afterLabelTextTpl: keyansys.util.Util.required,
                xtype: 'textfield',
                anchor: '70%',
                labelWidth: 70,
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
                            name: 'id',
                            bind : '{currentUser.id}'
                        },
                        {   //itemid:'userName',
                            fieldLabel: '教师编码',
                            bind : '{currentUser.userName}',
                            minLength: 6,
                            maxLength: 6,
                            regex:/^[0-9]*$/,
                            regexText:'只能输入数字',
                            msgTarget: 'under',
                            name: 'userName'
                        },
                        {   //itemId:'name',
                            fieldLabel: '姓　　名',
                            name: 'name',
                             bind : '{currentUser.name}'
                        },
                        
                        {  // itemId:'department',
                            fieldLabel: '部　　门',
                            maxLength: 100,
                            name: 'department',
                             bind : '{currentUser.department}'
                        },
                        {   
                            fieldLabel: '职　　称',
                            name :'positionalTitles',
			                xtype: 'combobox',
			            	store:["正高","副高","讲师","助教","工人岗"],
			            	width:150
			            	
                        },
                        {  // itemId:'department',
                            fieldLabel: '工作量标准',
                            maxLength: 100,
                            name: 'workloadLevel',
                            bind : '{currentUser.workloadLevel}'
                        },
                        {
                            xtype: 'combobox',
                            //itemId:'Groups_id',
                            fieldLabel: '所 属 组',
                            name: 'Group_id',
                            displayField: 'name',
                            valueField: 'id',
                            queryMode: 'local',
                             bind: {
                                value: '{currentUser.groups_id}',
                                store: '{groups}',
                                selection: '{currentUser.group}'
                            }
                            //bind:{store: '{groups}'}

                        }
                    ]
                    
              /*buttons:[{  
                text:'修改', 
                //id:bt,
                handler:function(button,e,options){ 
               	var adduserForm=button.up('window').down('form');
                if(!adduserForm.getForm().isValid()){  
                  return;  
                }  
                adduserForm.getForm().submit({  
                	
                    url:'servlet/EditUser',  
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
              }] */ 
        }],
        dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'end',
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'button',
                    text: '保   存',
                    glyph: keyansys.util.Glyphs.getGlyph('save'),
                    listeners: {
                        click: 'onSave'
                    }
                },
                {
                    xtype: 'button',
                    text: '取   消',
                    glyph: keyansys.util.Glyphs.getGlyph('cancel'),
                    listeners: {
                        click: 'onCancel'
                    }
                }
            ]
        }
    ]

});                 