var Items = Backbone.Collection.extend({
    url: 'api/MenuItems'
});

var Item = Backbone.Model.extend({
    urlRoot: 'api/MenuItems'
});