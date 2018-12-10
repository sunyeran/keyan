/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/
Ext.require('Ext.form.Panel');
Ext.Loader.setConfig({enabled: true,
         paths:{  
            'keyan':'keyan/app'  
        } 
        });
Ext.application({
    name: 'keyan',
    enableQuickTip:true,
    
    extend: 'keyan.Application',
     requires:[
     'keyan.util.Config'
    ],
   /* requires:[
             'keyan.view.Login' 
              ],
    views:[
           'Login'
           ],*/
    controllers:[
              'Login',
              'Menu',
         //     'TranslationManager',
              'security.Users',
              'staticData.AbstractController',
              'cms.Notices',
              'cms.NoticeEdit',
              'mail.Mail',
              'photo.Photo',
              'mail.StatisticsAllWorkload',
              'mail.ExportDepWorkload',
             // 'security.ResetPassword'
              'upload.Upload'
            //  'photo.Photo'
                ]
    
   // autoCreateViewport: true
});
