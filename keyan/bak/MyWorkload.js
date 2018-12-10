Ext.define('keyan.model.workLoad.MyWorkload', {
    extend: 'Ext.data.Model',

    idProperty: 'paper_id',

    fields: [
       
        { name: 'username',type:'string',mapping:'username'},
        { name: 'department',type:'string',mapping:'department'},
        { name: 'paper_name',type:'string',mapping:'paper_name'},
        { name: 'first_author',type:'string',mapping:'first_author'},
        { name: 'second_author',type:'string',mapping:'second_author'},
        { name: 'issn',type:'string',mapping:'issn'},
        { name: 'cn',type:'string',mapping:'cn'},
        { name: 'volume',type:'string',mapping:'volume'},
        { name: 'core',type:'string',mapping:'core'},
        { name: 'approval',type:'string',mapping:'approval'},
        { name: 'workload',type:'string',mapping:'workload'},
        { name:'publish_time',type: 'date',dateFormat:'Y-n-j H:i:s',mapping:'publish_time'},
        { name:'last_update',type: 'date',dateFormat:'Y-n-j H:i:s',mapping:'last_update'}
        
    ]
});