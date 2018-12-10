Ext.define('keyan.view.mail.StatisticsAllWorkload', {
	extend: 'keyan.view.mail.Parent',
 
    alias: 'widget.statisticsallworkload',

    //height: 100,
    store: 'mail.StatisticsAllWorkload',
   /* features: [Ext.create("Ext.grid.feature.RowBody",{
        
        getAdditionalData: function(data, rowIndex, record, orig) {
            var headerCt = this.view.headerCt,
                colspan = headerCt.getColumnCount();
            // Usually you would style the my-body-class in CSS file
            return {
                rowBody: record.get("isComplete"),
                rowBodyCls: this.rowBodyCls,
                rowBodyColspan: colspan
            };
        }
    })],
*/
    columns: [
       
        {
           text: '姓名', 
            width:60,
            dataIndex: 'name',
           filter: {
                type: 'string'
            }
        },
        {
            text: '所属部门', 
            flex: 1,
            dataIndex: 'department'
      
        },
        {text:'发表论文情况',columns:[
          {
            text: '发表论文篇数',
             width:80,
            dataIndex: 'paper_num'
      
              
          },  
          {
            text: '合作发表论文篇数',
             width:100,
            dataIndex: 'co_paper_num'
      
            
          },  
          {
            text: '学术组织交流论文篇数',
              width:120,
            dataIndex: 'exchange_paper'
           
         }
        ]},
        {text:'出版教材/专著情况',columns:[
          {
            text: '出版专著字数(万字)',
             width:110,
            dataIndex: 'monograph_num'
           
          }, 
          {
            text: '出版教材字数(万字)',
             width:110,
            dataIndex: 'teaching_num'
        
        }
        ]},
        {text:'参与课题情况',columns:[
          {
            text: '主持课题数量',
              width:80,
            dataIndex: 'subject_num'
           
           }, 
          {
            text: '参与课题数量',
              width:80,
            dataIndex: 'participation_issues'
           
          }
        ]},
        
         {
            text: '发明专利数目',
             width:80,
            dataIndex: 'patent_num'
           
        },  
      {
            text: '折合工作量(分)',
            width:80,
            dataIndex: 'workload',
           renderer:function(val){ 
              if(0<=parseInt(val)&&parseInt(val)<80)
                return   "<span  style='color:red'>"+val+"</span>";
              else if(80<=parseInt(val)&&parseInt(val)<200) return   "<span  style='color:green'>"+val+"</span>";
              else return   "<span  style='color:blue'>"+val+"</span>";
            },
             filter: {
                type: 'numeric'
            }
           
        },
         {
            text: '是否完成规定的工作量',
             width:120,
            dataIndex: 'isComplete',
              renderer:function(val){ 
              if(val=="已完成")
                return   "<span  style='color:blue'>"+val+"</span>";
              else return   "<span  style='color:red'>"+val+"</span>";
            },
             filter: {
                type: 'string'
            }
           
        } 
        
     
                          
          
    ]
});