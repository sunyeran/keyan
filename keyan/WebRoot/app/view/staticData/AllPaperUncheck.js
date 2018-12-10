Ext.define('keyan.view.staticData.AllPaperUncheck', {
    extend: 'keyan.view.staticData.AbstractAllKeyanGrid',
    alias: 'widget.allpaperuncheckgrid',
    store: 'staticData.PaperUncheck',
    /*features: [Ext.create('Ext.grid.feature.GroupingSummary', 
		{ 
		
		groupByText: '用本字段分组', 
		showGroupsText: '显示分组', 
		groupHeaderTpl: '所属部门: {name} ({rows.length})', //分组显示的模板 
		startCollapsed: true //设置初始分组是不是收起 
		}) 
		], */
    columns: [
        // Ext.create('Ext.grid.RowNumberer', { text: '序号', width: 40 }),
     
        {
            text: '作者',
            width: 60,
            dataIndex: 'name',
            filter: {
                type: 'string'
            }
          
        },
        {
            text: '所属部门',
            width: 90,
            dataIndex: 'department',
            
            filter: {
                type: 'string'
            }
          
        },
      {
            text: '论文名称',
            flex: 1,
            dataIndex: 'paper_name',
           /* summaryType: 'count',
            summaryRenderer: function(value){
            	return "共计发表论文:"+value+" 篇";
            },*/
               filter: {
                type: 'string'
            }
       },  
       {
            text: '合作者',
            width: 60,
            dataIndex: 'first_author',
            filter: {
                type: 'string'
            }
           
        },  
         {
            text: '期刊名称',  //直接将原标题《第二作者》改为标题《期刊名称》，数据库字段就不改了
            flex: 1,
            dataIndex: 'second_author',
            filter: {
                type: 'string'
            }
            
        },  
      {
            text: 'issn号/cn号',
            width:100,
            dataIndex: 'issn'
           
        },  
      {
            text: '依托课题项目的编号',
           width: 100,
            dataIndex: 'cn'
           
        },  
      {
            text: '期刊卷（期）',
            width: 80,
            dataIndex: 'volume',
            filter: {
                type: 'string'
            }
           
        },  
      {
            text: '出版时间',
            width: 100,
            
            dataIndex: 'publish_time',
            renderer:Ext.util.Format.dateRenderer('Y年m月d日'),  //可编辑时间
          // editor:new Ext.form.DateField({format:'Y年m月d日'})
              filter: {
                type: 'date'
            }
        },  
      {
            text: '是否核心期刊',
             width: 80,
            dataIndex: 'core'
         
        },  
      {
            text: '系部是否审核',
            width: 80,
            dataIndex: 'approval',
         
           renderer:function(val){ 
                       
                        return   "<span  style='color:blue'>"+val+"</span>";
                       
                    } 
        }
                          
     ]
     
    
});