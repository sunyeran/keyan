/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.require('zs.view.login.Login');
Ext.define('zs.Application', {
    extend: 'Ext.app.Application',
    
    name: 'zs',

    stores: [
        // TODO: add global / shared stores here
    ],
    view:[
          'zs.view.login.Login',
          'zs.view.manage.Validate',
          'zs.view.login.Kdcx'
          ],
    launch: function () {
        // TODO - Launch the application
    	//Ext.widget('login');
    	Ext.Ajax.request({
    	url:'servlet/GetMsg',
    	success:function(response,opts){
    		var msg=Ext.decode(response.responseText);
    		
    		if(msg.success){
    			
    			Ext.create('Ext.window.Window',{
    			    height:650,
				    width: 420,
				    layout: {
				        type: 'vbox',
				         pack: 'start',
                         align: 'stretch'
				    },
				    iconCls: 'filefind',
				    title: "考生录取查询",
				    constrain: true,
				    closeAction: 'hide',
				   // closable: false,
				    draggable: false,
				    resizable: false,
    				
			            
			    				items:[{
			    					width: 400,
			    				    html:'<h4 style="font-family:arial;color:blue;">'+msg.data.tishi+'</h4>'
			    				},
			    				    { 
					                xtype:'login'
					                
			    				}]
			   		}).show();
    	}
    		
    	}
    	});

    }

   
});
