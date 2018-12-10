Ext.define('keyansys.model.notice.Notice', {
    extend: 'Ext.data.Model',

    entityName: 'Notice',
    idProperty: 'notice_id',
    fields: [
        { name: 'notice_id' ,type: 'int'},
        { name: 'title',type:'string'},
        { name: 'sender',type:'string'},
        { name: 'content',type:'string'},
        { 
        	name: 'last_update',
        	type: 'date',
            dateFormat: 'Y-m-d',
        	renderer:Ext.util.Format.dateRenderer('Y年m月d日') //model与view日期格式必须一致，否则日期不显示
        	//convert: Todate
        }
    ]
});