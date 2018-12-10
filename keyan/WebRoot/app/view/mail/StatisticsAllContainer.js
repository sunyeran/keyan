Ext.define('keyan.view.mail.StatisticsAllContainer', {
    extend: 'Ext.container.Container',
    alias: 'widget.statisticsallcontainer',

    requires: [
       
        'keyan.view.mail.StatisticsMenu'
       // 'keyan.view.mail.StatisticsAllWorkload'
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
                itemId: 'statisticspanel',
                 layout: 'fit',
                            
                items: [
                   {
                        xtype: 'statisticsallworkload',
                        title:year+'个人科研成果统计',
                       
                      //  anchor:'100%#100%',
                        frame:true
                    
                    }
                     
               ]
            },
            {
                xtype: 'statisticsmenu',
                region: 'west'
                
            }
        ];

        me.callParent(arguments);
    }

});