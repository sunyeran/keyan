Ext.define('keyansys.view.login.Login', {
    extend: 'Ext.window.Window',

    xtype: 'login',
    /*requires:[
              'keyansys.view.login.LoginController',
              'Ext.form.Panel'
              ],*/
    controller:'login',
    autoShow: true,
    height: 220,
    width: 420,
    layout: {
        type: 'fit'
    },
    iconCls: 'key',
    title: "科研管理系统",
    closeAction: 'hide',
    closable: false,
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
                anchor: '90%',
                labelWidth: 70,
                allowBlank: false
               /* vtype: 'alphanum',
                minLength: 3,
                 msgTarget: 'side',
                enableKeyEvents: true,
                listeners: {
                    specialKey: 'onTextFieldSpecialKey'
                }*/
            },
            items: [
           
                { 
                    name: 'user',
                    fieldLabel: "用户名",
                    iconCls: 'x-fa fa-key',
                    minLength: 6,
                    maxLength: 6,
                    regex:/^[0-9]*$/,
                    regexText:'只能输入数字',
                    msgTarget: 'under'
                },
               
                {   
                    inputType: 'password',
                    name: 'password',
                    fieldLabel: "密　码",
                    id: 'password',
                    enableKeyEvents:true,
                    minLength: 3,
                    maxLength: 15
                   //  value: 'Packt123@',
                   /* vtype: 'customPass',
                    msgTarget: 'side',
                    listeners: {
                        keypress: 'onTextFieldKeyPress'
                    }*/
                }
            ],
            dockedItems: [
                          {
                              xtype: 'toolbar',
                              dock: 'bottom',
                              items: [
                                 /* {
                                      xtype: 'translation'
                                  },*/
                                  {
                                      xtype: 'tbfill'
                                  },
                                  {
                                      xtype: 'button',
                                      itemId: 'cancel',
                                      iconCls: 'cancel',
                                      text: "重置",
                                      listeners:{
                                    	  click:'onButtonClickCancel'
                                      }
                                  },
                                  {
                                      xtype: 'button',
                                      itemId: 'submit',
                                      formBind: true,
                                      iconCls: 'key-go',
                                      text: "提交",
                                      listeners:{
                                    	  click:'onButtonClickSubmit'
                                      }
                                  }
                              ]
                          }
                      ]
                  }
              ]
          });