var imageDataView;
 function getImageDataView()
{imageDataView=new Ext.DataView({   //这里用到了DataView
              	id:'dataview',
                store: picStore=new Ext.data.JsonStore({
                	storeId:'picStore',
                  	proxy:{
		            	type:'ajax',
		                url :'servlet/GetPhotos',
		            reader:{
		                type:'json',
		                root:'data'
		             }
	        	    },
		            autoLoad :true,
		           
	        	   // id :'name',
	    	        fields : [ 'id', 'dep', 'photo_filename', 'file_path' ]
                   }),
             
           /*  prepareData: function(data){
                     data.photo_filename = Ext.util.Format.ellipsis(data.photo_filename, 15);

                     return data;
                     },*/
              trackOver:true,
		       singleSelect:true,
		      itemSelector :'div.keyan-imageList',
              selectedItemCls:'image-selected',
              overItemCls:'image-overItem',
              autoHeight:true,
             
              //style :'overflow:auto',
			  //multiSelect :true,
              tpl: new Ext.XTemplate(
                  '<tpl for=".">',
                    //  '<div style="margin-bottom: 10px;float:left" class="thumb-wrap">',
                   '<div class="keyan-imageList" >',//注意这个div样式的应用，没有这个样式则显示效果不佳
                    '<img width="160" height="160" src="{file_path}{photo_filename}"/><br/>',
                  // '<p class="ellipsis">{photo_filename}</p>',
                   '<center>{photo_filename}</center>', //横向显示
                   '</div>',
                  '</tpl>'),
             //     '<div class="x-clear"></div>'),
              emptyText: '没有图片显示'
             
             // style: 'overflow:auto;zoom:1;'
             
             
    })
    
return imageDataView;

}

Ext.define('keyan.controller.Menu', {
    extend: 'Ext.app.Controller',

    models: [
        'menu.Root',
        'menu.Item'
    ],
    stores: [
        'Menu'
    ],
    views: [
        'menu.Accordion',
        'menu.Item'
    ],

    refs: [
        {
            ref: 'mainPanel',
            selector: 'mainpanel'
        }
    ],


    onPanelRender: function(abstractcomponent, options) {
        this.getMenuStore().load(function(records, op, success){

            var menuPanel = Ext.ComponentQuery.query('mainmenu')[0];
       
            Ext.each(records, function(root){

                var menu = Ext.create('keyan.view.menu.Item',{
                	//title:"xxxxx",
                	title: root.get('text'),
                    //title: translations[root.get('text')],
                    iconCls: root.get('iconCls')
                });

                Ext.each(root.items(), function(itens){

                    Ext.each(itens.data.items, function(item){

                        menu.getRootNode().appendChild({
                           // text: translations[item.get('text')],
                             text: item.get('text'),
                           
                        	//text:"yyyyy",
                            leaf: true, 
                            iconCls: item.get('iconCls'),
                            id: item.get('id'),
                          //  className:'panel'
                            className: item.get('className') 
                        });
                    });  
                });

                menuPanel.add(menu);
            }); 
        });
    },

    onTreepanelSelect: function(selModel, record, index, options) {
        //console.log(record.raw.className);

        var mainPanel = this.getMainPanel();
        if((record.get('text')=="上传复印件")){
        	//alert("ok！");
        	var win = Ext.create('keyan.view.staticData.upload');
            win.setTitle('上传图片');
            // component.getStore().load();
            win.show();
        }
        else if((record.get('text')=="我已完成的工作量")){
        	//alert("ok！");
        	var win = Ext.create('keyan.view.workload.Workload');
            win.show();
        }
        else if((record.get('text')=="我的上传复印件")){
        var newTab = mainPanel.items.findBy(
        function (tab){ 
            return tab.title === record.get('text'); 
        });

        //console.log(record.raw.className);
    

        if (!newTab){
          newTab = mainPanel.add(new Ext.Panel({//这个是一个图片显示的panel，参照官方的例子，没有额外的js文件
              id:'images',
              frame:true,
              autoHeight:true,
              collapsible:true,
              closable : true,
              autoScroll:true,
              
             // deferredRender: false,
              //autoDestroy: false,
             //  bodyStyle:'background-color:#FEFEFE;',//设置面板体的背景色
             // style : 'padding:10px 10px 10px 10px',
              layout:'fit',
              title:record.get('text'),
              header : false,
              iconCls : 'image',                  //这tab的icon
              items: getImageDataView(),
              dockedItems: [
        {
            xtype: 'toolbar',
            flex: 1,
            dock: 'top',
            items: [
                               
                {
                    xtype: 'button',
                    text: '删除图片',
                    itemId: 'delete',
                    iconCls: 'delete',
                
                handler:function(){
                	var me=this;
                	var sm=imageDataView.getSelectionModel();
                	if(sm.hasSelection()){
                		var rs=sm.getSelection(),
                		ln=rs.length,
                		ids=[],
                		paths=[],
                		files=[],
                		contents=['确定要删除以下文件吗？'];
                		for(var i=0;i<ln;i++){
                			ids.push(rs[i].data.id);
                			paths.push(rs[i].data.file_path);
                			files.push(rs[i].data.photo_filename);
                			contents.push(rs[i].data.photo_filename);
                			}
                		Ext.Msg.confirm("删除文件",contents.join('<br/>'),
                		  function(bnt){
                		  	if(bnt=="yes"){
                		  		Ext.Ajax.request({
                		  		url:'servlet/DeletePhoto',
                		  		params:{
                		  			ids:ids,
                		  			paths:paths,
                		  			files:files
                		  		},
                		  		success:function(response,opts){
                		  			var obj=Ext.decode(response.responseText);
                		  			if(obj.success){
                		  				Ext.Msg.alert("删除文件","文件删除成功！")
                		  			}else{
                		  				Ext.Msg.alert("删除文件",obj.msg)
                		  			}
                		  			Ext.getStore('picStore').load();
                		  		},
                		  		failure:function(response,opts){
                		  			Ext.Msg.alert("删除文件","删除文件失败！")
                		  		}
                		  		});
                		  	
                		  	}
                		  }
                		)
                	}
                	else{
                		Ext.Msg.alert("删除文件","请选择要删除的文件")
                	}
                	
                }    //handler处理结束
                }
              ]
             }
           ]
         })
        
        ).show();
      }
       
        mainPanel.setActiveTab(newTab);
           
      //  console.log(data.content_type);
      //  alert("it's menuitem");
        }
        else if((record.get('text')=="修改个人密码")){
        	//alert("ok！");
        	var win = Ext.create('keyan.view.security.PasswordModify');
            win.show();
        }
        else if((record.get('text')=="重置教师密码")){
        	//alert("ok！");
        	var win = Ext.create('keyan.view.security.ResetPassword');
            win.show();
        }
         else if((record.get('text')=="修改教师工作量标准")){
        	//alert("ok！");
        	var win = Ext.create('keyan.view.security.ModifyWorkloadLevel');
            win.show();
        }
        else{
        var newTab = mainPanel.items.findBy(
        function (tab){ 
            return tab.title === record.get('text'); 
        });

        //console.log(record.raw.className);
      if((record.get('text')=="部门教师上传的复印件")||(record.get('text')=="显示公告"))
        {if (!newTab){
            newTab = mainPanel.add({
                
                xtype: record.raw.className,
            	closable: true,
            	autoDestroy: false,
            	//closeAction:'hide',
                iconCls: record.get('iconCls'),
                title: record.get('text'),
                /**以下一直到 CollectGarbage();}}语句是解决"部门教师上传的复印件"标签打开后关闭再打开出现“this.dom is undefined”错误的解决方法，而其他标签加上以下内容则出错*/
                 autoDestroy:true,
                 destroy:function (){//销毁tabpanel
                   if(this.fireEvent("destroy",this)!=false){
                      this.el.remove();
                      getNewTab = null;
                      newTab = null;
                      if(Ext.isIE){
                       CollectGarbage();
                      }
                   }
                }
            });
        }
        }else{
        if (!newTab)
            newTab = mainPanel.add({
                
                xtype: record.raw.className,
            	closable: true,
            	autoDestroy: false,
            	//closeAction:'hide',
                iconCls: record.get('iconCls'),
                title: record.get('text')
                
                
            });	
           
        }
        mainPanel.setActiveTab(newTab);
          
        }
      
    },

    onTreepanelItemClick: function(view, record, item, index, event, options){
        this.onTreepanelSelect(view, record, index, options);
    },

    init: function(application) {
    	
        this.control({
            "mainmenu": {
                render: this.onPanelRender
            },
            "mainmenuitem": {
                select: this.onTreepanelSelect,
                itemclick: this.onTreepanelItemClick
            }
        });
    }

});

