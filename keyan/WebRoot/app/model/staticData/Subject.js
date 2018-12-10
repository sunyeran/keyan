Ext.define('keyan.model.staticData.Subject', {
    extend: 'keyan.model.sakila.Sakila',

    idProperty: 'subject_id',

    fields: [
        { name: 'subject_id' },
        { name: 'name'},
        { name: 'username'},
        { name: 'department'},
        { name: 'subjectName',defaultValue:"必填项"},
        { name: 'subjectNo',defaultValue:"0000" },
        { name: 'isFirstUnit',defaultValue:"是" },
        { name: 'head',defaultValue:"主持人" },
        { name: 'participants' },
        { name: 'projectTime' ,type:'date',dateFormat: 'Y-m-d',defaultValue: new Date()},
        { name: 'projectDept' },
        { name: 'outboundFunds',defaultValue:0 },
        { name: 'selfFunding' ,defaultValue:0},
        { name: 'concludingTime',type:'date',dateFormat: 'Y-m-d',defaultValue: new Date() },
        { name: 'subjectType' ,defaultValue:"校级课题"},
        { name: 'approval',defaultValue:"未审核" }
    ]
});