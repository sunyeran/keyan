
Ext.define('keyan.view.Header', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.appheader',
   
     height: 80,
   
    ui: 'footer',
   // style: 'border-bottom: 4px solid #4c72a4;backgroud-color:#99bbe8;',
   /* bodyStyle : 'backgroud-color:#99bbe8;line-height : 50px;padding-left:20px;font-size:22px;color:#000000;font-family:楷体;font-weight:bolder;' +  
                            'background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(153,187, 232, 0.4) ), color-stop(50%, rgba(153, 187, 232, 1) ),color-stop(0%, rgba(153, 187, 232, 0.4) ) )'  ,
*/
    split : true, 
     
    html: '<div id="titleHeader"><img src="./image/logo.png" align=center/></span></div>',
     
           bbar : [{    itemId:'loginnameid',
                        iconCls : 'menu_admin',  
                        text : "欢迎使用科研管理信息系统 V1.0(建议使用火狐浏览器) "
                    },'-',{  
                        text : Ext.Date.format(new Date(),'Y年m月d日')  
                    },'->',
                    	{  
                        text : '修改密码',  
                        itemId: 'modifypassword',
                        iconCls : 'key'  
                    },'-',
                    	{  
                        text : '退出',  
                        itemId: 'logout',
                        iconCls : 'logout'  
                    }]
                  
                });  
                