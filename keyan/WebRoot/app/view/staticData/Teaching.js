Ext.define('keyan.view.staticData.Teaching', {
    extend: 'keyan.view.staticData.AbstractGrid',
    alias: 'widget.teachinggrid',

    store: 'staticData.Teaching',
  
    columns: [
      
         {
            text: '教材名称',
            flex: 1,
            dataIndex: 'teaching_name',
            editor: {
                allowBlank: false,
                maxLength: 100
            },
            filter: {
                type: 'string'
            }
        },
        {
            text: '第一作者',
            width: 60,
            dataIndex: 'first_author',
            editor: {
                allowBlank: false,
                maxLength: 60
            },
            filter: {
                type: 'string'
            }
        },
        {
            text: '合作者',
            width: 80,
            dataIndex: 'second_author',
            editor: {
                allowBlank: true,
                maxLength: 80
            },
            filter: {
                type: 'string'
            }
        },
        {
            text: '出版社',
            width: 120,
            dataIndex: 'press',
            editor: {
                allowBlank: true,
                maxLength: 120
            },
            filter: {
                type: 'string'
            }
        },
        {
            text: '出版时间',
            width: 110,
            dataIndex: 'publish_time',
            renderer:Ext.util.Format.dateRenderer('Y年m月d日'),  //可编辑时间
            editor:new Ext.form.DateField({format:'Y年m月d日'})
        },
        {
            text: 'isbn号',
            width: 100,
            dataIndex: 'isbn',
            editor: {
                allowBlank: false,
                maxLength: 100
            },
            filter: {
                type: 'string'
            }
        },
        {
            text: 'cip号',
            width: 80,
            dataIndex: 'cip',
            editor: {
                allowBlank: true,
                maxLength: 80
            },
            filter: {
                type: 'string'
            }
        },
        {
            text: '字数(万字)',
            width: 60,
            dataIndex: 'words',
            align:'right',
             renderer:function(val){ 
               return   "<span  style='color:red'>"+val+"</span>";          
             },
            editor: {
                allowBlank: false,
                maxLength: 60
            },
            filter: {
                type: 'string'
            }
        },
        {
            text: '著作类别',
            width: 60,
            dataIndex: 'type',
            editor: {
                allowBlank: false,
                editable:false,
                forceSelection:true,
              	xtype:'combobox',
            	typeAhead:true,
            	store:["专著","教材"],
            	lazyRender:true,
                emptyText:'著作类别...'
                }
        },
        {
            text: '教材性质',
            width: 80,
            dataIndex: 'nature',
             editor: {
                allowBlank: false,
                editable:false,
                forceSelection:true,
              	xtype:'combobox',
            	typeAhead:true,
            	store:["国家级出版社","省市级出版社"],
            	lazyRender:true,
                emptyText:'出版社类别...'
                },
            filter: {
                type: 'string'
            }
        },
        {
            text: '部门是否审核',
            width: 80,
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