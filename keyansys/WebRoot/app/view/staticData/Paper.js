Ext.define('keyansys.view.staticData.Paper', {
    extend: 'keyansys.view.staticData.BaseGrid',
    xtype: 'papergrid',

    requires: [
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.selection.CellModel'
    ],
    title:'论文',
    store: 'paper',
    frame: true,
    selModel: {
        type: 'cellmodel'
    },

   plugins : [
            {
                ptype: 'cellediting',
                clicksToEdit: 1,
                pluginId: 'cellplugin'
            },
            {
                ptype: 'gridfilters'
            }
        ],
   /* sorters: [{
        property: 'last_update',
        direction:'ASC'
    }], */
    columns: [
      //  Ext.create('Ext.grid.RowNumberer', { text: '序号', width: 40 }),
    //加入上面一行后能显示序号，但关闭标签页再打开标签出现错误“TypeError: b is null”，所以将上一行内容放入AbstractGrid类中，在此继承却没错误。
        {
        	header: '作者',
            width: 60,
            dataIndex: 'name'
          
        },
       {   // id:'pn',
        	header: '论文名称',
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
        	header: '合作者',
            width:70,
            dataIndex: 'first_author',
            editor: {
                allowBlank: true,
                maxLength: 8
            },
            filter: {
                type: 'string'
            }
        },  
         {
        	header: '期刊名称',   //直接将原标题《第二作者》改为标题《期刊名称》，数据库字段就不改了
            flex: 1,
            dataIndex: 'periodicalName',
            editor: {
                allowBlank: false
               
            },
            filter: {
                type: 'string'
            }
        },  
      {
        	header: 'issn号',
            width:100,
            dataIndex: 'issn',
           /* renderer:function (val, meta, rec, rowIndex, colIndex, store) {
                if (val === ''||val ===undefined) {
                 //   meta.tdAttr = 'data-qtip=" '+'该项不能为空"';
                    meta.style = "background-color:red;"; 
                    rec.set('isValid', false);
                } else {
                 //   meta.tdAttr = 'data-qtip=" '+val+' is right person"';
                 //   meta.style = "background-color:green; color: white";
                    rec.set('isValid', true);
                }
                return val;
            },*/
            editor: {
                allowBlank: false,
               // VType:'util.costumVtype',
                maxLength: 20
               
            },
            filter: {
                type: 'string'
            }
        },  
      {
        	header: 'cn号',
            width:100,
            dataIndex: 'cn',
            editor: {
                allowBlank: true,
                maxLength: 20
            },
            filter: {
                type: 'string'
            }
        },  
      {
        	header: '期刊卷（期）',
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
        	header: '出版时间',
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
        	header: '论文类别',
          //  flex: 1,
            dataIndex: 'core',
             editor: {
                allowBlank: false,
               // editable:false,
                forceSelection:true,
              	xtype:'combobox',
            	typeAhead:true,
            	store:["核心刊物","普通刊物","校内刊物","交流论文"],
            	lazyRender:true,
                emptyText:'刊物类别...'
                }
        },  
      {
        	header: '系部是否审核',
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