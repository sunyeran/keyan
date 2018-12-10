Ext.define('keyansys.controller.StaticData', {
    extend: 'Ext.app.Controller',

    requires: [
        'keyansys.util.Alert',
        'keyansys.util.Util',
        'keyansys.util.Glyphs'
    ],

    stores: [
        'staticData.Paper'
        /*'staticData.Patent',
        'staticData.Teaching',
        'staticData.Subject',
        'staticData.PaperCheck',
        'staticData.PatentCheck',
        'staticData.TeachingCheck',
        'staticData.SubjectCheck',
        'staticData.PaperUncheck',
        'staticData.PatentUncheck',
        'staticData.SubjectUncheck',
        'staticData.TeachingUncheck',
        'mail.PaperList',
        'mail.PatentList',
        'mail.SubjectList',
        'mail.TeachingList'*/
    ],

    views: [
        'staticData.BaseGrid',
      //  'staticData.AbstractAllKeyanGrid',
        'staticData.Paper'
      /*  'mail.PaperList',
        'mail.PatentList',
        'mail.SubjectList',
        'mail.TeachingList',
        'staticData.Patent',
        'staticData.Teaching',
        'staticData.Subject',
        'staticData.PaperCheck',
        'staticData.AllPaperCheck',
        'staticData.AllPaperUncheck',
       'staticData.PatentCheck',
       'staticData.AllPatentCheck',
       'staticData.AllPatentUncheck',
       'staticData.TeachingCheck',
       'staticData.SubjectCheck',
       'staticData.AllSubjectCheck',
       'staticData.AllSubjectUncheck',
       'staticData.PaperUncheck',
       'staticData.PatentUncheck',
       'staticData.SubjectUncheck',
       'staticData.TeachingUncheck',
       'staticData.AllTeachingCheck',
       'staticData.AllTeachingUncheck',
       'staticData.TeacherPaperUncheck',
       'staticData.TeacherPatentUncheck',
       'staticData.TeacherSubjectUncheck',
       'staticData.TeacherTeachingUncheck'*/
      // 'staticData.upload'
    ],

    init: function(application) {
    	 Ext.QuickTips.init();
	   	/*  Ext.Loader.setPath('Ext.ux.exporter', 'ext/exporter','ext');
	   	  Ext.Ajax.on('requestcomplete',checkUserSessionStatus, this);
	         function checkUserSessionStatus(conn,response,options){
             var result=response.responseText;
                result=Ext.JSON.decode(result);
                if(result.flag){
                	 Ext.Msg.alert('提示',"登录时间过长，请重新登录，谢谢。");
                    window.top.location.href = "/keyan";
                }
         };*/
        var me = this;

        me.control({
            'staticdatagrid': {
                render: me.render,
                edit: me.onEdit
               
            //    afterrender: me.onAfterRender,
             //   widgetclick: me.onWidgetClick
            },
            
            'staticdatagrid actioncolumn': {
            	itemclick:this.handleActionColumn
            },
            'staticdatagrid button#add': {
                click: me.onButtonClickAdd
            },
            'staticdatagrid button#save': {
                click: me.onButtonClickSave
            },
            'staticdatagrid button#cancel': {
                click: me.onButtonClickCancel
            },
            'staticdatagrid button#clearFilter': {
                click: me.onButtonClickClearFilter
            }
        });

        me.listen({
            store: {
                '#staticDataAbstract': {
                    write: me.onStoreSync
                }
            }
        });
        if (!Ext.getStore('paper')) {
            Ext.create('keyan.store.staticData.Paper');
        }
       
    },

    onStoreSync: function(store, operation, options){
        keyansys.util.Util.showToast('成功!', '你的修改已经被保存。');
    },


    render: function(component, options) {
        component.getStore().load();

       
    },

    onEdit: function(editor, context, options) {
        context.record.set('last_update', new Date());
    },

    onButtonClickAdd: function (button, e, options) {
        var grid = button.up('staticdatagrid'),
            store = grid.getStore(),
            modelName = store.getModel().getName(),
            cellEditing = grid.getPlugin('cellplugin');

        store.insert(0, Ext.create(modelName, {
            last_update: new Date(),
            paper_name:'必填项*',
            periodicalName:'必填项*',
            issn:'必填项*'
        }));

        cellEditing.startEditByPosition({row: 0, column: 2});
    },

    onButtonClickSave: function (button, e, options) {
    	var grid = button.up('staticdatagrid');
    	//var grid=button.lookupReference('staticdatagrid');
    	var store=grid.getStore();
    
    	
    	button.up('staticdatagrid').getStore().sync({
    	scope: this,
    	success: function(response) {
    		 keyansys.util.Alert.msg('保存成功!', '论文信息更改被保存.');
    		 store.reload();
             //  Ext.Msg.alert("提示", "你的数据保存成功", function() { store.reload(); });
              
    	  
    	  },
    	  failure:function(e,opt){
    	  	 Ext.Msg.alert("提示", "你的数据保存失败");
    	  }
    	});
    	
    	    
    	/* var grid = button.up('staticdatagrid');
         store = grid.getStore();
    	 var found = false;
         Ext.each(store.getRange(), function(rec) {
             rec.get('isValid') == false ? found = true : found ;  
         });
         
         if (found) {
        	 Ext.Msg.alert('提示',"该项数据不能为空");
         } else {
        	 
        	 Ext.Msg.alert("提示", "数据更新成功！");
        	 button.up('staticdatagrid').getStore().sync();
         }*/
    },

    onButtonClickCancel: function (button, e, options) {
        button.up('staticdatagrid').getStore().reload();
    },

    onButtonClickClearFilter: function (button, e, options) {
        button.up('staticdatagrid').filters.clearFilters();
    },


    /*onWidgetClick: function(grid, button){

        var store = grid.getStore(),
            rec = button.getWidgetRecord();

        store.remove(rec);
        Ext.Msg.alert("提示",'你确认删除吗？如确定删除请点击上部“保存更改”按钮完成删除！');
    },*/
    handleActionColumn:function(column,action,view,rowIndex,colIndex,item,e){
    	var store=view.up('staticdatagrid').getStore();
    	rec=store.getAt(rowIndex);
    	if(action=='delete'){
    		store.remove(rec);
    		 Ext.Msg.alert("提示",'你确认删除吗？如确定删除请点击上部“保存更改”按钮完成删除！');
    	}
    }
   
   
    /*onAfterRender: function(grid, options){
        var view = grid.getView();
        view.on('itemupdate', function (record, index, node, options) {
            grid.validateRow(record, index, node, options);
        });
    }*/
});