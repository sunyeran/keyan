Ext.define('keyan.view.notice.NoticeProfile', {
    extend: 'Ext.window.Window',
    alias: 'widget.noticeprofile',

    height: 400,
    width: 750,

    requires: ['keyan.util.Util'],

   /* layout: {
        align: 'stretch',
        type: 'vbox'
    },*/
    title: '公告',
// autoDestroy:false,
    items: [
        {
            xtype: 'form',
            bodyPadding: 5,
            method :'post',
            layout: 'anchor',
            defaults: {
                        afterLabelTextTpl: keyan.util.Util.required,
                        anchor: '100%',
                        xtype: 'textfield',
                        allowBlank: false,
                        labelWidth: 60
                    },
          /*  fieldDefaults :{
            	labelAlign:'top'
            },*/
                    items: [
                        {
                            xtype: 'hiddenfield',
                           // itemId:userId,
                           // title: '教师信息',
                            fieldLabel: 'Label',
                            name: 'notice_id'
                        },
                        {  // itemId:'userName',
                            fieldLabel: '公告标题',
                            name: 'title'
                        },
                        {   //itemid:'name',
                        	xtype : 'htmleditor',
                            fieldLabel: '公告内容',
                           // maxLength: 100,
                            name: 'content',
                            height:280
                        },
                        {  // itemId:'department',
                        	 xtype: 'hiddenfield',
                            fieldLabel: '发布人',
                            name: 'sender'
                        }
               
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
                    text: '发布',
                    itemId: 'save',
                    iconCls: 'save'
                }
            ]
        }
    ]
});