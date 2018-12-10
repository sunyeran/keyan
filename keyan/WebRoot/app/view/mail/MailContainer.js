Ext.define('keyan.view.mail.MailContainer', {
    extend: 'Ext.container.Container',
    alias: 'widget.statisticscontainer',

    requires: [
        'keyan.view.mail.PaperList',
        'keyan.view.mail.PatentList',
        'keyan.view.mail.SubjectList',
        'keyan.view.mail.TeachingList',
       // 'keyan.view.mail.MailPreview',
        'keyan.view.mail.MailMenu'
    ],

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;
        var year=Ext.Date.format(new Date(),'Y年');
        /*var mailPreview = {
            xtype: 'mailpreview',
            autoScroll: true
        };*/

        me.items = [
            {
                xtype: 'container',
                region: 'center',
                itemId: 'mailpanel',
                layout: {
                 // 布局配置
                    type: 'accordion',
                    titleCollapse: false,
                    animate: true,
                    activeOnTop: true
                },
               /* layout: {
                    type: 'anchor'
                },*/
                items: [
                   {
                        xtype: 'maillist',
                        title:year+'个人科研成果统计',
                     //   anchor:'100%#25%',
                        frame:true
                    
                    },
                    {
                        xtype: 'paperlist',
                        title:'论文',
                       // anchor:'100%#25%',
                        frame:true
                     //   collapsible: false,
                      //  region: 'center'
                    },
                    {
                       xtype: 'patentlist',
                       title:'专利',
                      //  anchor:'100%#25%',
                        frame:true
                    },
                    {
                       xtype: 'subjectlist',
                       title:'课题',
                      //anchor:'100%#25%',
                        frame:true
                    },
                    {
                       xtype: 'teachinglist',
                       title:'教材',
                      // anchor:'100%#25%',
                        frame:true
                    }
                     
                    ]
            },
            {
                xtype: 'mailMenu',
                region: 'west'
                
            }
        ];

        me.callParent(arguments);
    }

});