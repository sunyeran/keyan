Ext.define('keyansys.view.staticData.StaticDataController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.staticdatacontroller',

    onAddClick: function () {
        var view = this.getView(),
            rec = new'keyansys.model.staticData.Paper'({
                paperName: '',
               
                publish_time: Ext.Date.clearTime(new Date())
               
            });

        view.store.insert(0, rec);
        view.findPlugin('cellediting').startEdit(rec, 0);
    },

    onRemoveClick: function (view, recIndex, cellIndex, item, e, record) {
        record.drop();
    }
});