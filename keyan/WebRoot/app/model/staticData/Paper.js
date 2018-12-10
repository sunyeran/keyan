/*function Todate(v) {
　　　　　　　　if(v == null)
　　　　　　　　{
　　　　　　　　　　return null;
　　　　　　　　}

        var str = v.toString().substring(0,10);//因为我只要日期，所以我只取T之前的数据2013-04-01
        return new Date(Date.parse(str.replace(/-/g,"/")));//最后返回一个日期型的数据
    　　};
*/
Ext.define('keyan.model.staticData.Paper', {
    extend: 'keyan.model.sakila.Sakila',

    idProperty: 'paper_id',
   
    fields: [
   
        { name : 'paper_id'} ,
        { name: 'name'},
        { name: 'username'},
        { name: 'department'},
        { name: 'paper_name',defaultValue:"必填项*"},
        { name: 'first_author'},
        { name: 'second_author',defaultValue:"必填项*"},
        { name: 'issn'},
        { name:'cn'},
        { name: 'volume', defaultValue: "0"},
        { name:'publish_time',type:'date',dateFormat: 'Y-m-d',defaultValue: new Date()},
        { name: 'core',defaultValue:"普通刊物"},
        { name: 'approval',defaultValue:"未审核"}
     ]/*,
      validations:[
      {type:'presence',field:'paper_name'}
      
      ]*/
});