Ext.define('keyan.controller.cms.Notices', {
    extend: 'Ext.app.Controller',

    requires: [
       // 'keyan.util.MD5',
        'keyan.util.Alert',
        'keyan.view.MyViewport',
        'keyan.util.Util',
        'Ext.ux.grid.Printer',
        'Ext.ux.IFrame'
    ],

    views: [
        'notice.Notices'
       // 'notice.FilmCategories',
       // 'notice.FilmActors'
    ],

    stores: [
        'notice.Notices'
      //  'film.Ratings',
      //  'film.FilmCategories',
      //  'film.FilmActors',
      //  'film.SearchActors'
    ],

    refs: [
      /* {
            ref: 'noticeeditGrid',
            selector: 'noticeeditgrid'
        },
         {
            ref: 'filmCategories',
            selector: 'filmcategories'
        },*/
        {
            ref: 'noticesGrid',
            selector: 'noticesgrid'
        }
    ],

    init: function(application) {
        this.control({
            //---GRID---
        	/*"noticelist":{
        		render:this.onRender
        	},*/
            "noticesgrid": {
                render: this.render
            },
            /* "noticeeditgrid": {
                render: this.render
            },*/
            "noticesgrid button#add": {
                click: this.onButtonClickAdd
            },
            "noticesgrid button#edit": {
                click: this.onButtonClickEdit
            },
            "noticesgrid button#delete": {
                click: this.onButtonClickDelete
            },
            "noticewindow button#save": {
                click: this.onButtonClickSave
            },

            "noticesgrid button#print": {
                click: this.onButtonClickPrint
            },
            "noticesgrid button#pdf": {
                click: this.onButtonClickPDF
            },
            "noticesgrid button#excel": {
                click: this.onButtonClickExcel
            },

            //---INNER GRIDS---
           /* "filmcategories button#add": {
                click: this.onButtonClickAddCategory
            },
            "filmcategories button#delete": {
                click: this.onButtonClickDeleteCategory
            },
            "filmactors button#add": {
                click: this.onButtonClickAddActor
            },
            "filmactors button#delete": {
                click: this.onButtonClickDeleteActor
            },*/

            //---SEARCH WINDOWS---
            "searchactor cancelclearadd button#clear": {
                click: this.onButtonClickSearchActorClear
            },
            "searchactor cancelclearadd button#save": {
                click: this.onButtonClickSearchActorSave
            },

            "searchcategory cancelclearadd button#clear": {
                click: this.onButtonClickSearchCategoryClear
            },
            "searchcategory cancelclearadd button#save": {
                click: this.onButtonClickSearchCategorySave
            }
        });

        this.listen({
            store: {
                '#notices': {
                    write: this.onStoreSync
                }
            }
        });
    },

    onStoreSync: function(store, operation, options){
        keyan.util.Alert.msg('Success!', 'Your changes have been saved.');
        console.log(store);
        console.log(operation);
        console.log(options);
    },

    render: function(component, options) {
        component.getStore().load();    
    },

   /* onButtonClickAdd: function(button, e, options) {
        var win = Ext.create('keyan.view.notice.NoticeWindow');    
        win.setTitle('New Notice');
        win.setIconCls('film_add');
        win.show();
    },

    onButtonClickEdit: function (button, e, options) {

        var grid = button.up('noticesgrid'),
        record = grid.getSelectionModel().getSelection();

        if(record[0]){

            var editWindow = Ext.create('keyan.view.notice.NoticeWindow');

            var form = editWindow.down('form');

            var values = {
                film_id: record[0].get('notice_id'),
                title: record[0].get('title'),
                description: record[0].get('description'),
                release_year: record[0].get('release_year'),
                language_id: record[0].get('language_id'),
                original_language_id: record[0].get('original_language_id'),
                rental_duration: record[0].get('rental_duration'),
                rental_rate: record[0].get('rental_rate'),
                //length: record[0].get('length'),
                replacement_cost: record[0].get('replacement_cost'),
                rating: record[0].get('rating')
            };

            Ext.each(record[0].get('special_features').split(','), function(feat){
                if (feat === 'Trailers') {
                    values.trailers = 'Trailers';
                } else if (feat === 'Commentaries') {
                    values.commentaries = 'Commentaries';
                } else if (feat === 'Deleted Scenes') {
                    values.deleted = 'Deleted Scenes';
                } else if (feat === 'Behind the Scenes') {
                    values.behind = 'Behind the Scenes';
                }
            });

            var filmCategories = editWindow.down('form filmcategories');
            filmCategories.getStore().load({
                params: {
                    filmId: record[0].get('film_id')
                }
            });

            var filmActors = editWindow.down('form filmactors');
            filmActors.getStore().load({
                params: {
                    filmId: record[0].get('film_id')
                }
            });

            form.loadRecord(record[0]);

            form.getForm().setValues(values);

            editWindow.setTitle(record[0].get('title'));
            editWindow.setIconCls('film_edit');
            editWindow.show();
        }
    },

    onButtonClickAddCategory: function(button, e, options) {
        var win = Ext.create('keyan.view.film.SearchCategory');
        win.show();
    },

    onButtonClickAddActor: function(button, e, options) {
        var win = Ext.create('keyan.view.film.SearchActor');
        win.show();
    },

    onButtonClickSearchActorClear: function(button, e, options) {
       button.up('searchactor').down('combo').clearValue();
    },

    onButtonClickSearchActorSave: function(button, e, options) {
       var searchWindow = button.up('searchactor');
       var value = searchWindow.down('combo').getValue();
       var store = Ext.getStore('actors');
       var model = store.findRecord('actor_id', value);
       
       if (model){
            model.set('last_update', new Date());
            this.getFilmActors().getStore().add(model);
       }

       searchWindow.close();
    },

    onButtonClickSearchCategoryClear: function(button, e, options) {
       button.up('searchcategory').down('multiselect').clearValue();
    },

    onButtonClickSearchCategorySave: function(button, e, options) {
        var searchWindow = button.up('searchcategory');
        var values = searchWindow.down('multiselect').getValue();
        var store = Ext.getStore('categories'); 
        var filmCategoriesStore = this.getFilmCategories().getStore();

        Ext.each(values, function(value){

            var model = store.findRecord('category_id', value); 

            if (model){
                model.set('last_update', new Date());
                filmCategoriesStore.add(model);
            }
        });

        searchWindow.close();
    },

    onButtonClickDeleteCategory: function(button, e, options) {
    },    

    onButtonClickDeleteActor: function(button, e, options) {
    },  

    onButtonClickDelete: function(button, e, options) {
    }, 

*/    onButtonClickPrint: function(button, e, options) {
        Ext.ux.grid.Printer.printAutomatically = false;
        Ext.ux.grid.Printer.print(button.up('noticesgrid'));
    }, 

   /* onButtonClickPDF: function(button, e, options) {
        var mainPanel = Ext.ComponentQuery.query('mainpanel')[0];

        newTab = mainPanel.add({
            xtype: 'panel',
            closable: true,
            iconCls: 'pdf',
            title: 'Films PDF',
            layout: 'fit',
            html: 'loading PDF...',
            items: [{
                xtype: 'uxiframe',
                src: 'php/pdf/exportFilmsPdf.php'
            }]
        });

        mainPanel.setActiveTab(newTab);
    }, 

    onButtonClickExcel: function(button, e, options) {
        window.open('php/pdf/exportFilmsExcel.php');  
    }, 
*/
    onButtonClickSave: function(button, e, options) {
        var win = button.up('filmwindow');
        form = win.down('form'),
        actorsTab = form.down('panel#filmcategories'),
        categoriesTab = form.down('panel#filmactors'),
        actors = this.getFilmActors().getStore(),
        categories = this.getFilmCategories().getStore(),
        store = this.getFilmsGrid().getStore();
        valid = true,
        record = form.getRecord(),
        values = form.getValues(),
        isNew = false;

        if (actors.count() == 0){
            actorsTab.setIconCls('x-form-invalid-icon');
            actorsTab.tab.setTooltip('A film must have at least one Category.');
            valid = false;
        }
        
        if (categories.count() == 0){
            categoriesTab.setIconCls('x-form-invalid-icon');
            categoriesTab.tab.setTooltip('A film must have at least one Actor.');
            valid = false;
        }  

        if (valid && form.getForm().isValid()) {

            // if (values.film_id > 0){
            //     record.set(values);
            // } else{
            //     record = Ext.create('keyan.model.film.Film');
            //     record.set(values);
            //     store.insert(0,record);
            //     isNew = true;
            // }

            // //set special features
            // var special = [];
            // if (values.trailers){
            //     special.push(values.trailers);
            // }
            // if (values.commentaries){
            //     special.push(values.commentaries);
            // }
            // if (values.deleted){
            //     special.push(values.deleted);
            // }
            // if (values.behind){
            //     special.push(values.behind);
            // }
            // if (special.length > 0){
            //     record.set('special_features', special.toString());
            // }
            // record.set('last_update',new Date());

            form.getForm().submit({
                clientValidation: true,
                url: 'php/inventory/saveFilm.php',
                success: function(form, action) {

                    var result = action.result;

                    console.log(result);

                    if (result.success) {

                        keyan.util.Alert.msg('Success!', 'Film saved.');
                        store.load();
                        win.close();
                      
                    } else {
                        keyan.util.Util.showErrorMsg(result.msg);
                    }
                },
                failure: function(form, action) {
                    switch (action.failureType) {
                        case Ext.form.action.Action.CLIENT_INVALID:
                            Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                            break;
                        case Ext.form.action.Action.CONNECT_FAILURE:
                            Ext.Msg.alert('Failure', 'Ajax communication failed');
                            break;
                        case Ext.form.action.Action.SERVER_INVALID:
                            Ext.Msg.alert('Failure', action.result.msg);
                   }
                }
            });

            // store.sync({
            //     success: function(batch, options) {
            //         //console.log('success');
            //         var noticeId = batch.operations[0].records[0].get('film_id');

            //         actors.getProxy().setExtraParam('filmId', filmId);
            //         actors.sync();
            //     },
            //     failure: function(batch, options) {
            //         console.log('failure');
            //         console.log(batch);
            //         console.log(options);
            //     }
            // });

            //actors.getProxy().setExtraParam('filmId', record.get('film_id'));
            //actors.sync();
            
        } else {

        }  
    }
  /*  onRender : function(component,options){
    	component.getStore().load();
    }*/
});