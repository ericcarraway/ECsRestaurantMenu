var Items = Backbone.Collection.extend({
    url: '/MenuItems'
});

var Item = Backbone.Model.extend({
    urlRoot: '/MenuItems'
});