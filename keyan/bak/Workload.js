Ext.define('keyan.view.workload.Workload', {
    extend: 'Ext.window.Window',
    //id:'workloadForm',
   

    autoShow: true,
    height: 400,
    width: 750,
    layout: {
        type: 'fit'
    },
    iconCls: 'key',
    title:'工作量统计',
    closeAction: 'hide',
    closable: true,
    

    items: [
        {
            xtype: 'form',
            reference: 'form',
            frame:false,
            bodyPadding: 15,
            defaults: {
                xtype: 'textfield',
                anchor: '60%',
                labelWidth: 200
               
            },
           items: [
        {
           fieldLabel:'你本学期共发表论文',
           name:'paper',
           readOnly:true
        },
        {
            fieldLabel:'你本学期共发表专著',
            name:'teaching',
            readOnly:true 	
        },
        {
           fieldLabel:'你本学期共完成课题',
           name:'subject',
           readOnly:true
        },
        {
           fieldLabel:'你本学期共获得专利',
           name:'patent',
           readOnly:true
        },
        {
           fieldLabel:'你本学期共完成工作量',
           name:'workload',
           readOnly:true
        }
    ],
     tbar:[
    {   xtype:'tbfill'},
    {
    	text:'请选择年度',
    	xtype:'splitbutton',
    	width:100,
    	menu:[
    		{text:'2015年'},
    		{text:'2016年'},
    		{text:'2017年'},
    		{text:'2018年'},
    		{text:'2019年'},
    		{text:'2020年'}
    		]
    }
    ],
            dockedItems: [
                          {
                              xtype: 'toolbar',
                              dock: 'bottom',
                              items: [
                                 /* {
                                      xtype: 'translation'
                                  },*/
                                  {
                                      xtype: 'tbfill'
                                  },
                                  {
                                      xtype: 'button',
                                      itemId: 'cancel',
                                      iconCls: 'cancel',
                                      text: "重置"
                                  },
                                  {
                                      xtype: 'button',
                                      itemId: 'submit',
                                      formBind: true,
                                      iconCls: 'key-go',
                                      text: "提交"
                                  }
                              ]
                          }
                      ]
                  }
              ]
          });
    
    
    
    
   
    
    
  