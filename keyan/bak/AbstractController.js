Ext.define('keyan.controller.staticData.AbstractController', {
    extend: 'Ext.app.Controller',

    requires: [
        'keyan.util.Util'
    ],

    stores: [
        'staticData.Paper',
        'staticData.Patent',
        'staticData.Teaching',
        'staticData.Subject',
        'staticData.PaperCheck',
        'staticData.PatentCheck',
        'staticData.TeachingCheck',
        'staticData.SubjectCheck'
   
    ],

    views: [
        'staticData.AbstractGrid',
        'staticData.Paper',
        'staticData.Patent',
        'staticData.Teaching',
        'staticData.Subject',
        'staticData.PaperCheck',
       'staticData.PatentCheck',
       'staticData.TeachingCheck',
       'staticData.SubjectCheck',
       'staticData.upload'
    ],

    init: function(application) {
    	 Ext.QuickTips.init();
        this.control({
        	"papercheckgrid":{
        		 render: this.render
        	},
        	"patentcheckgrid":{
        		 render: this.render
        	},
        	"teachingcheckgrid":{
        		 render: this.render
        	},
        	"subjectcheckgrid":{
        		 render: this.render
        	},
            "staticdatagrid": {
                render: this.render,
                edit: this.onEdit
            },
            "staticdatagrid button[itemId=add]": {
                click: this.onButtonClickAdd
            },
             "staticdatagrid button[itemId=myUpload]": {
                click: this.onButtonClickMyupload
            },
             "upload button[itemId=upload]": {
                click: this.onButtonClickUpload
            },
            "upload button[itemId=cancel]": {
                click: this.onButtonClickUploadCancel
            },
            "staticdatagrid button[itemId=save]": {
                click: this.onButtonClickSave
            },
            "staticdatagrid button[itemId=cancel]": {
                click: this.onButtonClickCancel
            },
            "staticdatagrid button[itemId=clearFilter]": {
                click: this.onButtonClickClearFilter
            },
            "staticdatagrid actioncolumn": {
                itemclick: this.handleActionColumn
            },
            "patentcheckgrid actioncolumn": {
                itemclick: this.handlePatentcheck
            },
            "papercheckgrid actioncolumn": {
                itemclick: this.handlePapercheck
            },
            "teachingcheckgrid actioncolumn": {
                itemclick: this.handleTeachingcheck
            },
            "subjectcheckgrid actioncolumn": {
                itemclick: this.handleSubjectcheck
            }
             
            /*,
            "citiesgrid button[itemId=clearGrouping]": {
                toggle: this.onButtonToggleClearGrouping
            }*/
        });

        this.listen({
            store: {
                '#staticDataAbstract': {
                    write: this.onStoreSync
                }
            }
        });

        if (!Ext.getStore('paper')) {
            Ext.create('keyan.store.staticData.Paper');
        }

       /* if (!Ext.getStore('languages')) {
            Ext.create('keyan.store.staticData.Languages').load();
        }*/

        if (!Ext.getStore('patent')) {
            Ext.create('keyan.store.staticData.Patent');
        }

        if (!Ext.getStore('teaching')) {
            Ext.create('keyan.store.staticData.Teaching');
        }
         if (!Ext.getStore('subject')) {
            Ext.create('keyan.store.staticData.Subject');
        }
       /*  if (!Ext.getStore('papercheck')) {
            Ext.create('keyan.store.staticData.PaperCheck');
        }*/
    },

    onStoreSync: function(store, operation, options){
    	keyan.util.Alert.msg('成功!', '你的修改已经被保存。');
      
    },

    render: function(component, options) {
        component.getStore().load();  

       /* if (component.xtype === 'citiesgrid' && component.features.length > 0){
            if (component.features[0].ftype === 'grouping'){
                component.down('toolbar#topToolbar').add([
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'clearGrouping',
                        text: 'Group by Country: ON',
                        iconCls: 'grouping',
                        enableToggle: true,
                        pressed: true
                    }
                ]);
            }
        }     */
    },

    onEdit: function(editor, context, options) {
        context.record.set('last_update', new Date());
    },
    onButtonClickUploadCancel: function(button, e, options) {
        button.up('window').hide();
    },
    onButtonClickAdd: function (button, e, options) {
    	var grid = button.up('staticdatagrid'),
    	store = grid.getStore(),
    	modelName = store.getProxy().getModel().modelName,
    	cellEditing = grid.getPlugin('cellplugin');

    	store.insert(0, Ext.create(modelName, {
    		last_update: new Date()
    	}));

    	cellEditing.startEditByPosition({row: 0, column: 1});
    },
    onButtonClickMyupload:function (button, e, options) {
    	var win=Ext.create(keyan.view.staticData.upload);
    	win.show();
    },
    onButtonClickUpload:function (button, e, options) {
    	var win=button.up('window'),
    	formPanel=win.down('form')
    	if(formPanel.getForm().isValid()){
    	formPanel.getForm().submit({
    	url:'servlet/UploadFile',
    	method:'post',
    	waitMsg : '正在上传文件...',
    	success: function(form,action) {

            // var result = Ext.JSON.decode(conn.responseText,true);
    		 
             
              if (action.result.success) {
              	 Ext.Msg.alert('提示',action.result.msg);
              	 win.hide();
              	
             
              } else {
               // keyan.util.Util.showErrorMsg(conn.responseText);
                  Ext.Msg.alert('提示',action.result.msg);
                                }
         },
        failure: function(form,action) {
               Ext.Msg.alert('提示',action.result.msg);
               // keyan.util.Util.showErrorMsg(conn.responseText);
        }
    	});
    	}
    },
    onButtonClickSave: function (button, e, options) {
    	button.up('staticdatagrid').getStore().sync({
    	success: function(conn, response, options, eOpts) {
                //var result = keyan.util.Util.decodeJSON(conn.responseText);
               // console.log(result.success);
              //  console.log(result.msg);
                console.log(keyan.util.Util.decodeJSON(response.responseText));
    	    	console.log(conn);
               console.log(response.responseText);
                /*if (result.success) {
                keyan.util.Alert.msg(' 提示!', '数据保存成功.');
    	         
                }*/
//   	  	var result=Ext.decode(response.responseText);
    	  //	Ext.Msg.alert('提示',result.msg);
    	   // Ext.Msg.alert('提示',"数据保存成功。");
    	  
    	  },
    	  failure:function(e,opt){
    	  	 Ext.Msg.alert('提示',"保存数据失败！");
    	  }
    	});
    	
    	//button.up('staticdatagrid').getStore().reload();
    	
    },

    onButtonClickCancel: function (button, e, options) {
    	button.up('staticdatagrid').getStore().reload();
    },

    onButtonClickClearFilter: function (button, e, options) {
    	button.up('staticdatagrid').filters.clearFilters();
    },

    handleActionColumn: function(column, action, view, rowIndex, colIndex, item, e) {
        var store = view.up('staticdatagrid').getStore(),
        rec = store.getAt(rowIndex);

        if (action == 'delete'){
            store.remove(rec);
            Ext.Msg.alert('你确认删除吗？确定后必须点击上部“保存更改”按钮才能完成删除！');
        }   
        
    },
    handlePatentcheck:function(column, action, view, rowIndex, colIndex, item, e) {
        var store = view.up('patentcheckgrid').getStore(),
        rec = store.getAt(rowIndex);

        if (action == 'check'){
        	
        	if(confirm("你是否确认该成果通过审核")){
        		
        	    Ext.Ajax.request({
         	    url:'servlet/PatentCheck',
         	    method:'post',
         	    params:{
         		  id:rec.get('patent_id')
         	    },
         	   success:function(conn,response,options,eOpts){
         	   	var result=Ext.JSON.decode(conn.responseText,true);
         	   	if(result.success){
         	   	Ext.Msg.alert("审核成功");
         	   	store.reload();
         	     }
         	   else{
         	   	alert("审核失败!");
         	   }
         	   }
         	});
        	}
         }
        },
        handlePapercheck:function(column, action, view, rowIndex, colIndex, item, e) {
        var store = view.up('papercheckgrid').getStore(),
        rec = store.getAt(rowIndex);

        if (action == 'check'){
        	
        	if(confirm("你是否确认该成果通过审核")){
        		
        	    Ext.Ajax.request({
         	    url:'servlet/PaperCheck',
         	    method:'post',
         	    params:{
         		  id:rec.get('paper_id')
         	    },
         	   success:function(conn,response,options,eOpts){
         	   	var result=Ext.JSON.decode(conn.responseText,true);
         	   	if(result.success){
         	   	Ext.Msg.alert("审核成功");
         	   	store.reload();
         	   }
         	   else{
         	   	alert("审核失败!");
         	   }
         	   }
         	});
        	}
        }
    },
      handleTeachingcheck:function(column, action, view, rowIndex, colIndex, item, e) {
        var store = view.up('teachingcheckgrid').getStore(),
        rec = store.getAt(rowIndex);

        if (action == 'check'){
        	
        	if(confirm("你是否确认该成果通过审核")){
        		
        	    Ext.Ajax.request({
         	    url:'servlet/TeachingCheck',
         	    method:'post',
         	    params:{
         		  id:rec.get('teaching_id')
         	    },
         	   success:function(conn,response,options,eOpts){
         	   	var result=Ext.JSON.decode(conn.responseText,true);
         	   	if(result.success){
         	   	Ext.Msg.alert("审核成功");
         	   	store.reload();
         	   }
         	   else{
         	   	alert("审核失败!");
         	   }
         	   }
         	});
        	}
        }
    },
     handleSubjectcheck:function(column, action, view, rowIndex, colIndex, item, e) {
        var store = view.up('subjectcheckgrid').getStore(),
        rec = store.getAt(rowIndex);

        if (action == 'check'){
        	
        	if(confirm("你是否确认该成果通过审核")){
        		
        	    Ext.Ajax.request({
         	    url:'servlet/SubjectCheck',
         	    method:'post',
         	    params:{
         		  id:rec.get('subject_id')
         	    },
         	   success:function(conn,response,options,eOpts){
         	   	var result=Ext.JSON.decode(conn.responseText,true);
         	   	if(result.success){
         	   	Ext.Msg.alert("审核成功");
         	   	store.reload();
         	   }
         	   else{
         	   	alert("审核失败!");
         	   }
         	   }
         	});
        	}
        }
    }
   
});