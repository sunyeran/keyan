Ext.define('keyan.view.authentication.CapsLockTooltip', {
    extend: 'Ext.tip.QuickTip',
    alias: 'widget.capslocktooltip',

    target: 'password',
    anchor: 'top',
    anchorOffset: 0,
    width: 300,
    dismissDelay: 0,
    autoHide: false,
    title: '<div class="capslock">大写字母转换被打开 </div>',
    html: '<div>请注意字母大小写</div>' +
        '<div>如密码错误请关闭大小写转换</div><br/>' 
        
});