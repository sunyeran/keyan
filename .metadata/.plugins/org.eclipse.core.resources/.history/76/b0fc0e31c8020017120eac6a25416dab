Ext.define('keyansys.view.notice.NoticeProfile', {
    extend: 'Ext.window.Window',
    alias: 'widget.noticeprofile',
    
    height: 400,
    width: 750,
   
    requires: ['keyansys.util.Util'],
    controller: 'notice',
    viewModel: {
        type: 'notice'
    },
   /* layout: {
        align: 'stretch',
        type: 'vbox'
    },*/
    bind: {
	        title: '{title}'
	    },
// autoDestroy:false,
    items: [
        {
            xtype: 'form',
            reference: 'form',
            bodyPadding: 5,
            method :'post',
            layout: 'anchor',
            defaults: {
                        afterLabelTextTpl: keyansys.util.Util.required,
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
                            fieldLabel: 'Label',
                            name: 'notice_id'
                        },
                        {  
                            fieldLabel: '公告标题',
                            name: 'title'
                       //     bind : '{currentNotice.title}'
                        },
                        {  
                        	xtype : 'htmleditor',
                            fieldLabel: '公告内容',
                           // maxLength: 100,
                            name: 'content',
                         //   bind : '{currentNotice.content}',
                            height:280
                        },
                        {  
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
                    text: '保   存',
                    itemId: 'save',
                    glyph: keyansys.util.Glyphs.getGlyph('save'),
                    listeners: {
                        click: 'onSave'
                    }
                },
                {
                    xtype: 'button',
                    text: '取   消',
                    itemId: 'cancel',
                    glyph: keyansys.util.Glyphs.getGlyph('cancel'),
                    listeners: {
                        click: 'onCancel'
                    }
                }
            ]
        }
    ]
});