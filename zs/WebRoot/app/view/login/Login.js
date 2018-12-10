Ext.define('zs.view.login.Login', {
    extend: 'Ext.panel.Panel',

    xtype: 'login',
    requires:[
              'zs.view.login.LoginController',
              'zs.view.login.Kdcx',
              'zs.view.manage.Manage',
              'zs.view.manage.Validate',
              'Ext.form.Panel'
              ],
    controller:'login',
   // autoShow: true,
   
    width: 420,
  /*  layout: {
        type: 'fit'
    },*/
   

    items: [
        {
            xtype: 'form',
            reference: 'form',
            frame:false,
            bodyPadding: 15,
            defaults: {
                xtype: 'textfield',
                anchor: '90%',
                labelWidth: 70
                
               /* vtype: 'alphanum',
                minLength: 3,
                 msgTarget: 'side',
                enableKeyEvents: true,
                listeners: {
                    specialKey: 'onTextFieldSpecialKey'
                }*/
            },
            items: [
				/*{
				    margin: '0 0 20 0',
				    xtype: 'component',
				    html: [
				        '提示：我院2017年天津市三二分段、天津市春季高考、天津市自主招生录取查询已开通而且“通知书”稍后通过邮政EMS发出（各省录取结果持续更新中……，请每日关注）.如无法访问，可能服务器忙，请谅解。此查询结果仅作为参考，以收到我院录取通知书为最终录取结果！'
				    ]
				},*/
				{
                         
                        xtype:'displayfield',
                        id:'shuoming',
                         name:'shuoming',
                       //  width: 400,
                       //  fieldLabel:'提示',
                      	 value: "请输入考生号查询录取结果！"
                       
                },
                { 
                    name: 'ksh',
                    id:'ksh',
                    fieldLabel: "考生号*",
                 //   iconCls: 'x-fa fa-key',
                    vtype: 'alphanum',
                    minLength: 9,
                    maxLength: 14,
                    regex:/^[0-9]*$/,
                    regexText:'只能输入数字',
                    blankText:'请添入考号查询是否录取',
                    emptyText:'请输入9-14位考号',
                    msgTarget: 'under',
                    enableKeyEvents: true,
                    allowBlank: false,
                    listeners: {
                        specialKey: 'onTextFieldSpecialKey'
                    }
                },
               
                {   
                   // inputType: 'password',
                    name: 'xm',
                    fieldLabel: "姓名",
               //     id: 'password',
                  //  readOnly:true,
                    disabled:true
                },
                {
                    
                    fieldLabel:'性别',
                    name:'xbdm',
                    disabled:true
                    
                 },
                 /*{
                     
                     fieldLabel:'身份证号',
                     name:'sfzh',
                     disabled:true
                     
                  },*/
                  {
                      
                      fieldLabel:'录取专业',
                      name:'lqzy',
                      disabled:true
                      
                   },
                   {
                       
                       fieldLabel:'所属系',
                       name:'xi',
                       disabled:true
                       
                    },
                    {
                        
                        fieldLabel:'所在省',
                        name:'sheng',
                        disabled:true
                        
                     },
                     {
                         
                        xtype:'displayfield',
                         name:'tishi'
                        
                         
                      }
            ],
            dockedItems: [
                          {
                              xtype: 'toolbar',
                              dock: 'bottom',
                              items: [
                                      {
                                          xtype: 'button',
                                          itemId: 'cancel',
                                          iconCls: 'key',
                                          text: "后台管理",
                                          listeners:{
                                        	  click:'onButtonClickCancel'
                                          }
                                      },
                                  
                                 '->',
                                 {
                                     xtype: 'button',
                                     reference: 'kd',
                                     iconCls: 'mail_view',
                                     text: "快递查询",
                                     disabled:true,
                                     listeners:{
                                   	  click:'onButtonClickkd'
                                     }
                                 },
                                 
                                  {
                                      xtype: 'button',
                                      itemId: 'submit',
                                      formBind: true,
                                      iconCls: 'filefind',
                                      text: "录取查询",
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