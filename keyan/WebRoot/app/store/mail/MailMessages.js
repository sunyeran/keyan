Ext.define('keyan.store.mail.MailMessages', {
    extend: 'Ext.data.Store',

    requires: [
        'keyan.model.mail.MailMessage',
        'keyan.proxy.Sakila'
    ],

    model: 'keyan.model.mail.MailMessage',

    pageSize: 20,

   // storeId: 'films',

  //  autoLoad: true,

    proxy: {
        type: 'sakila',
        api: {
   //         read: 'php/mail/listInbox.php',
    //        update: 'php/mail/update.php'
        } 
    }
});