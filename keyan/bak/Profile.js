Ext.define('keyan.view.security.Profile', {
    extend: 'Ext.window.Window',
    alias: 'widget.profile',

    height: 260,
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
            bodyPadding: 5,
        
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'fieldset',
                    flex: 2,
                    title: '教师信息',
                    defaults: {
                        afterLabelTextTpl: keyan.util.Util.required,
                        anchor: '100%',
                        xtype: 'textfield',
                        allowBlank: false,
                        labelWidth: 60
                    },
                    items: [
                        {
                            xtype: 'hiddenfield',
                           // itemId:userId,
                            fieldLabel: 'Label',
                            name: 'id'
                        },
                        {   itemId:'userName',
                            fieldLabel: '用户名',
                            name: 'userName'
                        },
                        {   //itemid:'name',
                            fieldLabel: '姓名',
                            maxLength: 100,
                            name: 'name'
                        },
                        {  // itemId:'department',
                            fieldLabel: '部门',
                            maxLength: 100,
                            name: 'department'
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
                        },
                        {
                            xtype: 'filefield',
                            fieldLabel: '照片',
                            name: 'picture',
                            allowBlank: true,
                            afterLabelTextTpl: ''
                        }
                    ]
                }
               /* {
                    xtype: 'fieldset',
                    title: '头像',
                    width: 170,
                    items: [
                        {
                            xtype: 'image',
                            height: 150,
                            width: 150,
                            src: ''
                        }
                    ]
                }*/
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            flex: 1,
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'end',
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'button',
                    text: '取消',
                    itemId: 'cancel',
                    iconCls: 'cancel'
                },
                {
                    xtype: 'button',
                    text: '保存',
                    itemId: 'save',
                    iconCls: 'save'
                }
            ]
        }
    ]
});