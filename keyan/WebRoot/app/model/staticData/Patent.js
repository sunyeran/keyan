//为解决日期在IE浏览器中显示为ONaN的问题，需将日期进行转换，因为IE只能接受y-m-d:h:m:s格式
/*function Todate(v) {
　　　　　　　　if(v == null)
　　　　　　　　{
　　　　　　　　　　return null;
　　　　　　　　}

        var str = v.toString().substring(0,10);//因为我只要日期，所以我只取T之前的数据2013-04-01
        return new Date(Date.parse(str.replace(/-/g,"/")));//最后返回一个日期型的数据
    　　};*/
Ext.define('keyan.model.staticData.Patent', {
    extend: 'keyan.model.sakila.Sakila',

    idProperty: 'patent_id',

    fields: [
        { name: 'patent_id' },
        { name: 'name'},
        { name: 'username'},
        { name: 'department'},
        { name: 'patent_name',defaultValue:"必填项"},
        { name: 'patent_person' ,defaultValue:"必填项"},
        { name: 'inventor',defaultValue:"必填项" },
        { name: 'patent_type',defaultValue:"发明与实用新型专利" },
        { name: 'acceptance_time' ,type:'date',dateFormat: 'Y-m-d',defaultValue: new Date()},
        { name: 'authorized',type:'date',dateFormat: 'Y-m-d',defaultValue: new Date()},
        { name: 'apply_no' ,defaultValue:"000000000"},
        { name: 'is_school' },
        { name: 'implement' },
        { name: 'approval',defaultValue:"未审核"}
    ]
});