Ext.define('keyan.view.staticData.Subject', {
    extend: 'keyan.view.staticData.AbstractGrid',
    alias: 'widget.subjectgrid',

    store: 'staticData.Subject',

   
    columns: [
    
        {
            text: '课题名称',
            flex: 1,
            dataIndex: 'subjectName',
            editor: {
                allowBlank: false,
                maxLength: 150
            },
            filter: {
                type: 'string'
            }
        },        {
            text: '课题号', 
            width: 60,
            dataIndex: 'subjectNo',
            editor: {
                allowBlank: false,
                maxLength: 60
            },
            filter: {
                type: 'string'
            }
           
        },
        {
            text: '是否第一单位', 
            width: 80,
            dataIndex: 'isFirstUnit',
            editor: {
                allowBlank: false,
                maxLength: 100
            },
            filter: {
                type: 'string'
            }
           
        },
        {
            text: '项目角色', 
            width: 70,
            dataIndex: 'head',
            editor: {
                allowBlank: false,
                editable:false,
                forceSelection:true,
              	xtype:'combobox',
            	typeAhead:true,
            	store:["主持人","参与人"],
            	lazyRender:true,
            	emptyText:'项目角色...'
                },
            filter: {
                type: 'string'
            }
           
        }, 
        {
            text: '主要参加人', 
            width: 60,
            dataIndex: 'participants',
            editor: {
                allowBlank: true,
                maxLength: 120
            },
            filter: {
                type: 'string'
            }
        },  
        {
            text: '立项时间', 
            width: 110,
            dataIndex: 'projectTime',
            width:100,
            allowBlank: false,
            renderer:Ext.util.Format.dateRenderer('Y年m月d日'),  //可编辑时间
            filter: {
                type: 'date'
            },
            editor:new Ext.form.DateField({format:'Y年m月d日'})
                 
           /*  editor:new Ext.form.DateField({  
            //在编辑器里面显示的格式,这里为09-10-20的格式  
             format: 'y-m-d'  
             }),
           renderer:function(value){   
           if(value instanceof Date){   
            return new Date(value).format("Y-m-d");   
           }else{   
            return value;   
            }   
          
          }*/
        },
        {
            text: '项目来源', 
            width: 70,
            dataIndex: 'projectDept',
            editor: {
                allowBlank: false,
                maxLength: 120
            },
            filter: {
                type: 'string'
            }
        }, 
        {   xtype:'numbercolumn',
            text: '外部资金(万元)', 
            width: 80,
            dataIndex: 'outboundFunds',
            format:'¥0.00',align:'right',
            /* renderer:function(val){ 
               return   "<span  style='color:red'>"+val+"</span>";          
             },*/
          editor: {
          	    xtype:'numberfield',
          	    allowPattern:false,
                allowBlank: true,
                maxLength: 70
            },
            filter: {
                type: 'numeric'
            }
        }, 
        {   xtype:'numbercolumn',
            text: '自筹资金(万元)', 
            width: 80,
            dataIndex: 'selfFunding',
            format:'¥0.00',align:'right',
            //下面注释代码使字体显示红色，但与format:'¥0.00'语句冲突
           /*  renderer:function(val){ 
               return   "<span  style='color:red'>"+val+"</span>";          
             },*/
            editor: {
            	xtype:'numberfield',
          	    allowPattern:false,
                allowBlank: true,
                maxLength: 70
            },
            filter: {
                type: 'numeric'
            }
        },
        {
            text: '结题时间', 
            width: 120,
            dataIndex: 'concludingTime',
            width:100,
            allowBlank: false,
            renderer:Ext.util.Format.dateRenderer('Y年m月d日'), //可编辑时间
            filter: {
                type: 'date'
            },
            editor:new Ext.form.DateField({format:'Y年m月d日'})
        },
        {
            text: '项目类别', 
            width: 80,
            dataIndex: 'subjectType',
           editor: {
                allowBlank: false,
                editable:false,
                forceSelection:true,
              	xtype:'combobox',
            	typeAhead:true,
            	store:["国家级课题","省市级课题","委局级课题","校级课题"],
            	lazyRender:true,
            	listClass: 'x-combo-list-small',
                emptyText:'项目类别...'
                }
            
        },
        {
            text: '部门审核', 
            width: 60,
            dataIndex: 'approval',
           renderer:function(val){ 
             if("未审核"!=val)
                return   "<span  style='color:blue'>"+val+"</span>";
             else return   "<span  style='color:red'>"+val+"</span>";          
                    } ,
            filter: {
                type: 'string'
            }
        }
        
        
    ]
});