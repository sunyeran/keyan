Ext.define('keyansys.controller.StaticData', {
    extend: 'Ext.app.Controller',

    requires: [
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

        var me = this;

        me.control({
            'staticdatagrid': {
                render: me.render,
                edit: me.onEdit,
                afterrender: me.onAfterRender,
                widgetclick: me.onWidgetClick
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
                '#staticData.Base': {
                    write: me.onStoreSync
                }
            }
        });
    },

    onStoreSync: function(store, operation, options){
        Packt.util.Util.showToast('Success! Your changes have been saved.');
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
            last_update: new Date()
        }));

        cellEditing.startEditByPosition({row: 0, column: 1});
    },

    onButtonClickSave: function (button, e, options) {
        var grid = button.up('staticdatagrid'),
            store = grid.getStore(),
            errors = grid.validate();

        if (errors === undefined){
            store.sync();
        } else {
            Ext.Msg.alert(errors);
        }
    },

    onButtonClickCancel: function (button, e, options) {
        button.up('staticdatagrid').getStore().reload();
    },

    onButtonClickClearFilter: function (button, e, options) {
        button.up('staticdatagrid').filters.clearFilters();
    },


    onWidgetClick: function(grid, button){

        var store = grid.getStore(),
            rec = button.getWidgetRecord();

        store.remove(rec);
        Ext.Msg.alert("提示",'你确认删除吗？如确定删除请点击上部“保存更改”按钮完成删除！');
    },

   

    onAfterRender: function(grid, options){
        var view = grid.getView();
        view.on('itemupdate', function (record, index, node, options) {
            grid.validateRow(record, index, node, options);
        });
    }
});