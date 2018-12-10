Ext.define('keyan.view.mail.MailMenu', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.mailMenu',

    cls: 'selected-node',
    autoScroll: true,
    store: 'mail.MailMenu',
    rootVisible: false,
    split: true,
    width: 150,
    collapsible: true,
   // title: '科研成果统计',
    viewConfig: {
        plugins: {
            ptype: 'treeviewdragdrop',
            ddGroup: 'mailDD',
            enableDrag: false
        }
    },

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'menu_groups',
                    text: '部门人员列表'
                  //  itemId: 'newMail'
                }
            ]
        }
    ]
});