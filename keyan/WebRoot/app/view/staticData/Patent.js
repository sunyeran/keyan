Ext.define('keyan.view.staticData.Patent', {
    extend: 'keyan.view.staticData.AbstractGrid',
    alias: 'widget.patentgrid',

    store: 'staticData.Patent',
    
    columns: [
      
        {
            text: '专利名称',
            flex: 1,
            dataIndex: 'patent_name',
            editor: {
                allowBlank: false,
                maxLength: 100
            },
            filter: {
                type: 'string'
            }
        },
        {
            text: '专利权人',
            width:80,
            dataIndex: 'patent_person',
            editor: {
                allowBlank: false,
                maxLength: 10
            },
            filter: {
                type: 'string'
            }
        },
        {
            text: '发明人',
             width:80,
            dataIndex: 'inventor',
            editor: {
                allowBlank: false,
                maxLength: 20
            },
            filter: {
                type: 'string'
            }
        },
        {
            text: '专利类型',
           width:100,
            dataIndex: 'patent_type',
           editor: {
                allowBlank: false,
                editable:false,
                forceSelection:true,
              	xtype:'combobox',
            	typeAhead:true,
            	store:["发明与实用新型专利","外观设计型专利"],
            	lazyRender:true,
            	listClass: 'x-combo-list-small',
                emptyText:'专利类型...'
                }
        },
        {
            text: '专利申请时间',
           // xtype:'datecolumn',
           // flex: 1,
            dataIndex: 'acceptance_time',
            width:110,
            allowBlank: false,
             renderer:Ext.util.Format.dateRenderer('Y年m月d日'),  //可编辑时间
            
            editor:new Ext.form.DateField({format:'Y年m月d日'})
          /* renderer:function(value){   
           if(value instanceof Date){   
            return new Date(value).format("Y年m月d日");   
           }else{   
            return value;   
            }   
          
          }*/

        },
        {
            text: '专利授权时间',
             dataIndex: 'authorized',
             width:110,
             allowBlank: false,
             renderer:Ext.util.Format.dateRenderer('Y年m月d日'),  //可编辑时间
             editor:new Ext.form.DateField({format:'Y年m月d日'})
            /* editor:new Ext.form.DateField({  
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
            text: '专利应用号',
            width:80,
            dataIndex: 'apply_no',
            editor: {
                allowBlank: false,
                maxLength: 45
            },
            filter: {
                type: 'string'
            }
        },  
       {
            text: '是否本校',
           width:60,
            dataIndex: 'is_school',
            editor: {
                allowBlank: false
               
            },
            filter: {
                type: 'string'
            }
        },   
        {
            text: '是否应用',
            width:60,
            dataIndex: 'implement',
            editor: {
                allowBlank: false
               
            },
            filter: {
                type: 'string'
            }
        },
         {
            text: '系部是否审核',
            width:80,
            dataIndex: 'approval',
           renderer:function(val){ 
              if("未审核"!=val)
                return   "<span  style='color:blue'>"+val+"</span>";
              else return   "<span  style='color:red'>"+val+"</span>";
                    } 
      }  
        
    ]
});
