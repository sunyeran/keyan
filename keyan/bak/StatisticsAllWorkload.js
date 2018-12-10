Ext.define('keyan.model.mail.StatisticsAllWorkload', {
    extend: 'Ext.data.Model',

    fields: [
   
        { name: 'name'},
        { name: 'department'},
        { name: 'paper_num'},
        { name: 'monograph_num'},
        { name: 'teaching_num'},
        { name: 'subject_num'},
        { name:'participation_issues'},
        { name: 'patent_num'},
        { name:'exchange_paper'},
        { name: 'workload'}
   ]	
});