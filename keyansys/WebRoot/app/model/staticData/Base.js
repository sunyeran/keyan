Ext.define('keyansys.model.staticData.Base', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.validator.Presence',
        'Ext.util.Format'
    ],

    fields: [
        {name: 'last_update',
        	type: 'date',
            dateFormat: 'Y-m-d',
        	renderer:Ext.util.Format.dateRenderer('Y年m月d日') //model与view日期格式必须一致，否则日期不显示
        }
    ],

    validators: {
        last_update: 'presence'
    }
});