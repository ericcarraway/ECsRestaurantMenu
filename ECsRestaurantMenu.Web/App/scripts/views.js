var ItemListView = Backbone.View.extend({
    // el: DOM element the view is linked to
    el: '.page',
    render: function () {
        // Crockford convention for passing down scope
        var that = this;
        // instantiate new Collection
        var items = new Items();
        // populate collection with an AJAX call to the server via GET
        items.fetch({
            success: function (items) {
                // grab the template by id from the DOM with a jQuery selector
                var template = _.template($('#item-list-template').html());
                // populate the template with the results from the server
                that.$el.html(template({ items: items.models }));
            }
        })
    }
});

// instantiate the view
var itemListView = new ItemListView();


var ItemEditView = Backbone.View.extend({
    el: '.page',
    events: {
        'submit .edit-item-form': 'saveItem',
        'click .delete': 'deleteItem'
    },
    saveItem: function (ev) {
        var itemDetails = $(ev.currentTarget).convertFormToJSON();
        var item = new Item();
        item.save(itemDetails, {
            success: function (item) {
                router.navigate('', { trigger: true });
            }
        });
        return false;
    },
    // "Delete" CRUD operation
    deleteItem: function (ev) {
        // DELETE verb to the API
        this.item.destroy({
            success: function () {
                // confirm in the console (for degugging)
                console.log('destroyed');
                // go back to the main view
                router.navigate('', { trigger: true });
            }
        });
        return false;
    },
    render: function (options) {
        var that = this;
        // "Update" CRUD operation (Id property already exists)
        if (options.Id) {
            that.item = new Item({ Id: options.Id });
            // GET the item from the server based on the Id
            that.item.fetch({
                success: function (item) {
                    var template = _.template($('#edit-item-template').html());
                    that.$el.html(template({ item: item }));
                }
            })
        }
        // "Create" CRUD operation (no Id property exists yet)
        else {
            var template = _.template($('#edit-item-template').html());
            that.$el.html(template({ item: null }));
        }
    }
});

// instantiate the view
var itemEditView = new ItemEditView();