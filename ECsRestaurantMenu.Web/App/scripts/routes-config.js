var Router = Backbone.Router.extend({
    routes: {
        "": "home",
        // edit and new share a view
        // TODO: casing of Id / id ?
        "edit/:id": "edit",
        "new": "edit"
    }
});
// instantiate the router
var router = new Router;

// snytax: "on this route, do this anonymous function"
router.on('route:home', function () {
    itemListView.render();
});

router.on('route:edit', function (id) {
    itemEditView.render({ id: id });
});

// fire up the app
Backbone.history.start();


// some additional configuration

// escape special charachters, prevent XSS
function htmlEncode(value) {
    return $('<div/>').text(value).html();
}

// helper function to convert item details form submission into JSON
// called by the edit view before sending data to server
$.fn.convertFormToJSON = function () {
    var json = {};
    var formDataAsArray = this.serializeArray();
    // for each item in the array, append a key-value pair to the JSON object
    // include conditionals for edge cases
    $.each(formDataAsArray, function () {
        if (json[this.name] !== undefined) {
            if (!json[this.name].push) {
                json[this.name] = [json[this.name]];
            }
            json[this.name].push(this.value || '');
        } else {
            json[this.name] = this.value || '';
        }
    });
    return json;
};

////  prepend to all AJAX requests (comment out to use local Db during developement)
//$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
//    //options.url = '/api/MenuItems/' + options.url;
    
//    options.url = 'http://ecsrestaurantmenu.apphb.com' + options.url;

//});