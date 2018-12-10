Ext.define('keyan.view.notice.noticeWindow', {
    extend: 'keyan.view.sakila.WindowForm',
    alias: 'widget.noticewindow',

    requires: [
        'keyan.view.notice.noticeCategories',
        'keyan.view.notice.noticeActors',
        'keyan.util.Util'
    ],

    width: 537,
    title: 'Edit notice',
    iconCls: 'notice_add',

    items: [
        { 
            xtype: 'form',
            itemId: 'noticeForm',
            autoScroll: true,
            layout: {
                type: 'fit'
            },
            items: [
                {
                    xtype: 'tabpanel',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            autoScroll: true,
                            bodyPadding: 10,
                            layout: {
                                type: 'anchor'
                            },
                            title: 'notice Information',
                            defaults: {
                                anchor: '100%',
                                msgTarget: 'side'
                            },
                            items: [
                                {
                                    xtype: 'hiddenfield',
                                    name: 'notice_id'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'title',
                                    fieldLabel: 'Title',
                                    afterLabelTextTpl: keyan.util.Util.required,
                                    allowBlank: false,
                                    maxLength: 255
                                },
                                {
                                    xtype: 'numberfield',
                                    name: 'release_year',
                                    fieldLabel: 'Release Year',
                                    maxValue: (new Date().getFullYear()) + 1,
                                    minValue: 1950,
                                    allowDecimals: false
                                },
                                {
                                    xtype: 'combobox',
                                    name: 'language_id',
                                    fieldLabel: 'Language',
                                    displayField: 'name',
                                    valueField: 'language_id',
                                    queryMode: 'local',
                                    store: 'staticData.Languages',
                                    afterLabelTextTpl: keyan.util.Util.required,
                                    allowBlank: false
                                },
                                {
                                    xtype: 'combobox',
                                    name: 'original_language_id',
                                    fieldLabel: 'Original Language',
                                    displayField: 'name',
                                    valueField: 'language_id',
                                    queryMode: 'local',
                                    store: 'staticData.Languages'
                                },
                                {
                                    xtype: 'numberfield',
                                    name: 'rental_duration',
                                    fieldLabel: 'Rental Duration',
                                    maxValue: 10,
                                    minValue: 1,
                                    allowDecimals: false,
                                    afterLabelTextTpl: keyan.util.Util.required,
                                    allowBlank: false
                                },
                                {
                                    xtype: 'numberfield',
                                    name: 'rental_rate',
                                    fieldLabel: 'Rental Rate',
                                    maxValue: 5,
                                    minValue: 0,
                                    step: 0.1,
                                    afterLabelTextTpl: keyan.util.Util.required,
                                    allowBlank: false
                                },
                                // {
                                //     xtype: 'textfield',
                                //     name: 'length',
                                //     fieldLabel: 'Lenght (min)'//,
                                //     // maxValue: 999,
                                //     // minValue: 1//,
                                //     // //allowDecimals: false
                                // },
                                {
                                    xtype: 'numberfield',
                                    name: 'replacement_cost',
                                    fieldLabel: 'Replacement Cost',
                                    maxValue: 100,
                                    minValue: 0,
                                    step: 0.1,
                                    afterLabelTextTpl: keyan.util.Util.required
                                },
                                {
                                    xtype: 'combobox',
                                    name: 'rating',
                                    fieldLabel: 'Rating',
                                    displayField: 'text',
                                    valueField: 'text',
                                    queryMode: 'local',
                                    store: 'notice.Ratings'
                                },
                                {
                                    xtype: 'checkboxgroup',
                                    fieldLabel: 'Special Features',
                                    columns: 2,
                                    name: 'special_features',
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            boxLabel: 'Trailers',
                                            inputValue: 'Trailers',
                                            name: 'trailers'
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            boxLabel: 'Commentaries',
                                            inputValue: 'Commentaries',
                                            name: 'commentaries'
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            boxLabel: 'Deleted Scenes',
                                            inputValue: 'Deleted Scenes',
                                            name: 'deleted'
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            boxLabel: 'Behind the Scenes',
                                            inputValue: 'Behind the Scenes',
                                            name: 'behind'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textareafield',
                                    name: 'description',
                                    fieldLabel: 'Description',
                                    maxLength: 5000
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: 'notice Categories',
                            itemId: 'noticecategories',
                            layout: 'fit',
                            autoScroll: true,
                            items: [{
                                xtype: 'noticecategories'
                            }]
                        },
                        {
                            xtype: 'panel',
                            title: 'notice Actors',
                            layout: 'fit',
                            itemId: 'noticeactors',
                            autoScroll: true,
                            items: [{
                                xtype: 'noticeactors'
                            }]
                        }
                    ]
                }
            ]
        }
    ]
});