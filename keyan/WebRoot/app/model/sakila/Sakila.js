/*function Todate(v) {
　　　　　　　　if(v == null)
　　　　　　　　{
　　　　　　　　　　return null;
　　　　　　　　}

        var str = v.toString().substring(0,10);//因为我只要日期，所以我只取T之前的数据2013-04-01
        return new Date(Date.parse(str.replace(/-/g,"/")));//最后返回一个日期型的数据
    　　};*/
Ext.define('keyan.model.sakila.Sakila', {
    extend: 'Ext.data.Model',

    fields: [
        { 
        	name: 'last_update',
        	type: 'date',
            dateFormat: 'Y-m-d',
        	renderer:Ext.util.Format.dateRenderer('Y年m月d日') //model与view日期格式必须一致，否则日期不显示
        	//convert: Todate
        }
    ]
    
});