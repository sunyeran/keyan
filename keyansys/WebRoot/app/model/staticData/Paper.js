/*function Todate(v) {
　　　　　　　　if(v == null)
　　　　　　　　{
　　　　　　　　　　return null;
　　　　　　　　}

        var str = v.toString().substring(0,10);//因为我只要日期，所以我只取T之前的数据2013-04-01
        return new Date(Date.parse(str.replace(/-/g,"/")));//最后返回一个日期型的数据
    　　};
*/
Ext.define('keyansys.model.staticData.Paper', {
    extend: 'keyansys.model.staticData.Base',

    requires: [
        'Ext.data.validator.Length'
    ],

  //  entityName:'Paper',
    idProperty: 'paper_id',
   
    fields: [
   
        { name : 'paper_id'} ,
        { name: 'name'},
        { name: 'username'},
        { name: 'department'},
        { name: 'paper_name'},
        { name: 'first_author',defaultValue:"无"},
        { name: 'periodicalName'},
        { name: 'issn'},
        { name:'cn',defaultValue:"无"},
        { name: 'volume', type:"int"},
        { name:'publish_time',type:'date',dateFormat: 'Y-m-d',defaultValue: new Date()},
        { name: 'core',defaultValue:"校内刊物"},
       // { name: 'pursuant'},
        { name: 'approval',defaultValue:"未审核"}
     ],
     validators: {
        paper_name: [
            { type: 'presence', message: '该项数据不能为空。'},
            { type: 'length', min: 1}
        ],
        periodicalName: [
            { type: 'presence', message: '该项数据不能为空'},
            { type: 'length', min: 1}
        ],
        issn: [
            { type: 'presence', message: '该项数据不能为空'},
            { type: 'length', min: 1,max:20}
        ],
        volume: [
            { type: 'presence', message: '该项数据不能为空'},
            { type: 'length', min: 1}
        ],
        publish_time: [
           { type: 'presence', message: '该项数据不能为空'},
           { type: 'length', min: 1}
        ],
        core: [
                { type: 'presence', message: '该项数据不能为空'},
                { type: 'length', min: 1}
             ]
    }
});