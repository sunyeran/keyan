Ext.define('keyansys.view.staticData.Paper', {
    extend: 'keyansys.view.staticData.BaseGrid',
    xtype: 'papergrid',
   
    store: 'paper',
    stripeRows : true, // 斑马线
     
    columns: [
      //  Ext.create('Ext.grid.RowNumberer', { text: '序号', width: 40 }),
    //加入上面一行后能显示序号，但关闭标签页再打开标签出现错误“TypeError: b is null”，所以将上一行内容放入AbstractGrid类中，在此继承却没错误。
        {
            text: '作者',
            width: 60,
            dataIndex: 'name'
          
        },
       {   // id:'pn',
            text: '论文名称',
            flex: 1,
            dataIndex: 'paper_name',
            editor: {
                allowBlank: false,
                 //vtype:'alphanum',
                 //vtypeText:'只能输入字符和数字',
                // fieldLabel:"必填项",
                maxLength: 100
            },
            filter: {
                type: 'string'
            }
        },  
       {
            text: '合作者',
            width:70,
            dataIndex: 'first_author',
            editor: {
                allowBlank: false,
                maxLength: 8
            },
            filter: {
                type: 'string'
            }
        },  
         {
            text: '期刊名称',   //直接将原标题《第二作者》改为标题《期刊名称》，数据库字段就不改了
            flex: 1,
            dataIndex: 'periodicalName',
            editor: {
                allowBlank: true
               
            },
            filter: {
                type: 'string'
            }
        },  
      {
            text: 'issn号',
            width:100,
            dataIndex: 'issn',
            editor: {
                allowBlank: false,
               // VType:'util.costumVtype',
                maxLength: 14
            },
            filter: {
                type: 'string'
            }
        },  
      {
            text: 'cn号',
            width:100,
            dataIndex: 'cn',
            editor: {
                allowBlank: true,
                maxLength: 10
            },
            filter: {
                type: 'string'
            }
        },  
      {
            text: '期刊卷（期）',
            width:80,
            dataIndex: 'volume',
            editor: {
                allowBlank: false,
              //  type: 'numeric',
                maxLength: 6
            },
            filter: {
                type: 'string'
            }
           
        },  
      {
            text: '出版时间',
           // flex: 1,
            dataIndex: 'publish_time',
            width:110,

             renderer:Ext.util.Format.dateRenderer('Y年m月d日'),  //可编辑时间
                    
           // renderer:Ext.util.Format.dateRenderer('Y-m-d'),  
            
         /* renderer:function(value){   
           if(value instanceof Date){   
            return new Date(value).format("Y年m月d日");   
           }else{   
            return value;   
            }   
          },*/
          editor:new Ext.form.DateField({format:'Y年m月d日'})
           
        },  
      {
            text: '论文类别',
          //  flex: 1,
            dataIndex: 'core',
             editor: {
                allowBlank: false,
                editable:false,
                forceSelection:true,
              	xtype:'combobox',
            	typeAhead:true,
            	store:["核心刊物","普通刊物","校内刊物","交流论文"],
            	lazyRender:true,
                emptyText:'刊物类别...'
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