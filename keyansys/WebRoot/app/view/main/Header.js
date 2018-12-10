
Ext.define('keyansys.view.main.Header', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.appheader',
   
     height: 60,
     style: 'background-color:#6699cc; background-image:url();',
  //  ui: 'footer',
   // style: 'border-bottom: 4px solid #4c72a4;backgroud-color:#99bbe8;',
   /* bodyStyle : 'backgroud-color:#99bbe8;line-height : 50px;padding-left:20px;font-size:22px;color:#000000;font-family:楷体;font-weight:bolder;' +  
                            'background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(153,187, 232, 0.4) ), color-stop(50%, rgba(153, 187, 232, 1) ),color-stop(0%, rgba(153, 187, 232, 0.4) ) )'  ,
*/
    split : true, 
     
  //  html: '<div id="titleHeader"><img src="./resources/images/logo.png" align=center/></span></div>',
     
           bbar : [{   
        	            itemId:'loginnameid',
        	            cls: 'simplecms-header-button',
        	           // iconCls:"x-fa fa-handshake-o"
                        iconCls : 'user' 
                      //  text : "欢迎使用科研管理信息系统 V1.0(建议使用火狐浏览器) "
                    },'-',{  
                    	
                    	cls: 'simplecms-header-button',
                        text : Ext.Date.format(new Date(),'Y年m月d日')  
                    },'-',{  
                    	//xtype: 'tbtext', 
                    	cls: 'simplecms-header-button',
                    	 text: Ext.Date.format(new Date(), 'g:i:s A')  
                    },'->',
                    	{  
                        text : '帮助',  
                        itemId: 'help',
                        cls: 'simplecms-header-button',

                        iconCls : 'help' ,
                        listeners: {
                        click: 'onHelp'
                    }
                    },'-',
                    	{  
                        text : '退出',  
                        itemId: 'logout',
                        cls: 'simplecms-header-button',

                        iconCls : 'logout',
                         listeners: {
                        click: 'onLogout'
                    }
                    }]
                  
                });  
                  