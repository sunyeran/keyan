Ext.define('keyan.view.staticData.upload', {
    extend: 'Ext.window.Window',
    alias: 'widget.upload',
    closeAction: 'hide',  
   // autoDestroy : false,
    height: 200,
    width: 520,
    title: '上传',
    
//});
 items: [ new Ext.form.FormPanel(
        {
            xtype: 'form',
            enctype : 'multipart/form-data',
            fileUpload : true,
            
           // id:fileUploadForm,
//var myUpload=new Ext.FormPanel({
	/*renderTo : fi-form,
	fileUpload : true,
    layout : 'form',
    autoHeight : true,
    bodyStyle : 'padding:10px 10px 0 10px;',
    labelWidth : 50,*/
    defaults :{
    	anchor : '95%',
    	allowBlank : false,
    	msgTarget :'side'
    },
    
                    items: [
                    new Ext.ux.form.FileUploadField(
                    { 
                    id:'myUpload',
                    emptyText : '请选择一个文件......',  
                    name : 'upload',  
                    fieldLabel : '上传图片',  
                    buttonText : '选择...',
                    buttonCfg : {
                    	iconCls :'upload-icon'
                    }
                    })]
    })],
                  
    dockedItems: [
        {
            xtype: 'toolbar',
            flex: 1,
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'end',
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'button',
                    text: '上传',
                    itemId: 'upload',
                    iconCls: 'save'
                },
                {
                    xtype: 'button',
                    text: '取消',
                    itemId: 'cancel',
                    iconCls: 'cancel'
                }
            ]
        }
    ]
})
