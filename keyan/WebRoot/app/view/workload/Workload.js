Ext.define('keyan.view.workload.Workload', {
    extend: 'Ext.window.Window',
    alias: 'widget.workload',
    autoShow: true,
    height: 350,
    width: 650,
    //plain : true,
   // layout:'anchor',
    modal : true,
    iconCls: 'image',
    title:'工作量统计',
    closeAction: 'hide',
    closable: true,
    items:[{
       xtype:'fieldset',
       title:'你本年度完成的工作量如下：(请先选择年度)',
       border:false,
    
    items: [
        {
            xtype: 'form',
            reference: 'form',
             layout:'anchor',
            frame:false,
            bodyPadding: 15,
            id:'workloadForm',
            defaults: {
                xtype: 'textfield',
                anchor: '70%',
                labelWidth: 300
               
            },
           items: [
           
        {
          // xtype : 'displayfield',
           fieldLabel:'你本年度共单独发表论文(篇)',
           name:'paper',
           readOnly:true
           
        },
        {
          
           fieldLabel:'你本年度共与其他人合作发表论文(篇)',
           name:'co_paper',
           readOnly:true
           
        },
        {
          
           fieldLabel:'你本年度共参加学术交流论文(篇)',
           name:'exchange_paper',
           readOnly:true
           
        },    
        {
            fieldLabel:'你本年度共出版专著/教材(总字数)',
            name:'teaching',
            readOnly:true 	
        },
        {
           fieldLabel:'你本年度共完成课题(项)',
           name:'subject',
           readOnly:true
        },
        {
           fieldLabel:'你本年度共获得专利(项)',
           name:'patent',
           readOnly:true
        },
        {
           fieldLabel:'你本年度共完成工作量(折合分数)',
           name:'workload',
           readOnly:true
        }
    ],
     bbar:[
    //{   xtype:'tbfill'},
    {
    	text:'请先选择年度',
    	xtype:'splitbutton',
    	width:100,
    	menu:[
    	{text:'2014年',
    		value:2014,
    		handler:  function itemclick(item,e) {
             Ext.getCmp('workloadForm').load({
    	     url:'servlet/Workload',
             method:'POST',
    	     params:{
    	     year:item.value
    	    },
    	    failure:function(form,action){
    		Ext.Msg.alert('加载失败',action.result
    		                   ? action.result.msg:"服务器响应出现错误！");
    	     }
    	   });
            }
         
    },
    		{text:'2015年',
    		value:2015,
    		handler:  function itemclick(item,e) {
                   //     Ext.Msg.alert("提示", "来自菜单的消息");
                    
    	     Ext.getCmp('workloadForm').load({
    	     url:'servlet/Workload',
             method:'POST',
    	     params:{
    	     year:item.value
    	    },
    	    failure:function(form,action){
    		Ext.Msg.alert('加载失败',action.result
    		                   ? action.result.msg:"服务器响应出现错误！");
    	     }
    	   });
            }
         
    },
    		{text:'2016年',
    		 value:2016,
    		handler:  function itemclick(item,e) {
                   //     Ext.Msg.alert("提示", "来自菜单的消息");
                    
    	     Ext.getCmp('workloadForm').load({
    	     url:'servlet/Workload',
             method:'POST',
    	     params:{
    	     year:item.value
    	    },
    	    failure:function(form,action){
    		Ext.Msg.alert('加载失败',action.result
    		                   ? action.result.msg:"服务器响应出现错误！");
    	     }
    	   });
            }
    		},
    		
    		{text:'2017年',value:2017,
    		handler:  function itemclick(item,e) {
                   //     Ext.Msg.alert("提示", "来自菜单的消息");
                    
    	     Ext.getCmp('workloadForm').load({
    	     url:'servlet/Workload',
             method:'POST',
    	     params:{
    	     year:item.value
    	    },
    	    failure:function(form,action){
    		Ext.Msg.alert('加载失败',action.result
    		                   ? action.result.msg:"服务器响应出现错误！");
    	     }
    	   });
            }
    		},
    		{text:'2018年',value:2018,
    	handler:  function itemclick(item,e) {
                   //     Ext.Msg.alert("提示", "来自菜单的消息");
                    
    	     Ext.getCmp('workloadForm').load({
    	     url:'servlet/Workload',
             method:'POST',
    	     params:{
    	     year:item.value
    	    },
    	    failure:function(form,action){
    		Ext.Msg.alert('加载失败',action.result
    		                   ? action.result.msg:"服务器响应出现错误！");
    	     }
    	   });
            }
    		},
    		{text:'2019年',value:2019,
    		handler:  function itemclick(item,e) {
                   //     Ext.Msg.alert("提示", "来自菜单的消息");
                    
    	     Ext.getCmp('workloadForm').load({
    	     url:'servlet/Workload',
             method:'POST',
    	     params:{
    	     year:item.value
    	    },
    	    failure:function(form,action){
    		Ext.Msg.alert('加载失败',action.result
    		                   ? action.result.msg:"服务器响应出现错误！");
    	     }
    	   });
            }
    		},
    		{text:'2020年',value:2020,
    		handler:  function itemclick(item,e) {
                   //     Ext.Msg.alert("提示", "来自菜单的消息");
                    
    	     Ext.getCmp('workloadForm').load({
    	     url:'servlet/Workload',
             method:'POST',
    	     params:{
    	     year:item.value
    	    },
    	    failure:function(form,action){
    		Ext.Msg.alert('加载失败',action.result
    		                   ? action.result.msg:"服务器响应出现错误！");
    	     }
    	   });
            }
    		}
    		]
    }
    ],
            dockedItems: [
                          {
                              xtype: 'toolbar',
                              dock: 'bottom',
                              items: [
                                  {
                                      xtype: 'tbfill'
                                  },
                                  {
                                      xtype: 'button',
                                      itemId: 'close',
                                      iconCls: 'cancel',
                                      text: "关闭",
                                      handler:function(button, e, options) {
                                        button.up('window').close();
                                      }
                                  }
                              ]
                          }
                      ]
                  }
         ]
           
        }]
       });
    
   
    
    
   
    
    
  