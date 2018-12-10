Ext.define('keyansys.view.staticData.BaseGrid', {
    extend: 'Ext.ux.LiveSearchGridPanel',
    xtype: 'staticdatagrid',

    requires: [
        'keyansys.util.Glyphs'
     //   'keyansys.overrides.grid.column.Action'
    ],

    columnLines: true,
    viewConfig: {
        stripeRows: true
    },

    initComponent: function() {
        var me = this;

        me.selModel = {
            selType: 'cellmodel'
        };

        me.plugins = [
            {
                ptype: 'cellediting',
                clicksToEdit: 1,
                pluginId: 'cellplugin'
            },
            {
                ptype: 'gridfilters'
            }
        ];
       

        me.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                itemId: 'topToolbar',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'add',
                        text: '添加',
                        glyph: keyansys.util.Glyphs.getGlyph('add')
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'save',
                        text: '保存更改',
                        glyph: keyansys.util.Glyphs.getGlyph('saveAll')
                    },
                    {
                        xtype: 'button',
                        itemId: 'cancel',
                        text: '取消更改',
                        glyph: keyansys.util.Glyphs.getGlyph('cancel')
                    },
                    {
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'clearFilter',
                        text: '清除过滤器',
                        glyph: keyansys.util.Glyphs.getGlyph('clearFilter')
                    }
                ]
            }
        ];

        me.columns = Ext.Array.merge({xtype:Ext.create ('Ext.grid.RowNumberer', { text: '序号', width: 40 })},me.columns,
                
            [

            	{
                xtype    : 'datecolumn',
                text     : '最后更新时间', 
                width    : 100,  
                dataIndex: 'last_update',
               // format: 'Y-m-j',
                renderer:Ext.util.Format.dateRenderer('Y年m月d日'),
             //    renderer:Ext.util.Format.dateRenderer('Y-m-d'), 
                filter: true
                
            },
                {
                    xtype: 'widgetcolumn',
                    text:'删除操作',
                    width: 50,
                    sortable: false,
                    menuDisabled: true,
                    widget: {
                    	
                        xtype: 'button',
                        glyph: keyansys.util.Glyphs.getGlyph('destroy'),
                        tooltip: '删除',
                        scope: me,
                        handler: function (btn) {
                            me.fireEvent('widgetclick', me, btn);
                        }
                    }
                }
            ]
        );

        me.getColumnIndexes = function() {
            var me = this,
                columnIndexes = [];

            Ext.Array.each(me.columns, function (column) {
                // only validate column with editor
                if (Ext.isDefined(column.getEditor())) {
                    columnIndexes.push(column.dataIndex);
                } else {
                    columnIndexes.push(undefined);
                }
            });

            return columnIndexes;
        };

        me.validateRow = function(record, rowIndex){

            var me = this,
                view = me.getView(),
                errors = record.validate();

            if (errors.isValid()) {
                return true;
            }

            var columnIndexes = me.getColumnIndexes();

            Ext.each(columnIndexes, function (columnIndex, col) {
                var cellErrors, cell, messages;

                cellErrors = errors.getByField(columnIndex);
                if (!Ext.isEmpty(cellErrors)) {
                    cell = view.getCellByPosition({row: rowIndex, column: col});
                    messages = [];
                    Ext.each(cellErrors, function (cellError) {
                        messages.push(cellError.message);
                    });

                    cell.addCls('x-form-error-msg x-form-invalid-icon x-form-invalid-icon-default');
                    // set error tooltip attribute
                    cell.set({
                        'data-errorqtip': Ext.String.format('<ul><li class="last">{0}</li></ul>',
                            messages.join('<br/>'))
                    });
                }
            });

            return false;
        };

        me.validate = function(){

            var me = this,
                isValid = true,
                view = me.getView(),
                error,
                record;

            Ext.each(view.getNodes(), function (row, col) {
                record = view.getRecord(row);

                isValid = (me.validateRow(record, col) && isValid);
            });

            error = isValid ? undefined : {
                title: "无效的数据",
                message: "请在保存数据前更改错误。"
            };

            return error;
        };

        me.callParent(arguments);
    }
});