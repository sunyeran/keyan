Ext.define('keyansys.view.menu.Accordion', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainmenu',
 //   bodyStyle: 'background:#fff; padding:10px;',
  //  width: 185,
   layout: {
        type: 'accordion',
        pack: 'start'
    },
    multi: true,
    bodyPadding: 2,
     collapsible: true,  
     floatable: false ,
  //  ui: 'navigation',
    split:true,
    hideCollapseTool: false,
    iconCls: 'fa fa-sitemap fa-lg',
 //  iconCls: 'sitemap',
    title: '导航'
});