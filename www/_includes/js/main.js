var App = {
    Models: {},
    Collections: {},
    Views: {},
    Router: {},
    Rendered: {}
};

Parse.initialize("8DP65SIrYEn03KVcq6oXlItgs9Wp7RkOhXjKLi51", "YF5ayH60rdU3J6b5dsee7JzWe79G4c35zgtecjls");

var TestObject = Parse.Object.extend("TestObject");

var testObject = new TestObject();

testObject.save({
    foo: "bar"
}).then(function(object) {
    alert("yay! it worked");
});

// Generic model
App.Models.Model = Backbone.Model.extend({
    defaults: {
        id: "",
        name: "",
        age: ""
    }
});

// A generic of generic models
App.Collections.Models = Backbone.Collection.extend({
    model: App.Models.Model
});

// Create our global Profiles collection
App.Collections.Profiles = new App.Collections.Models([]);

// Set up the router here
App.Router = Backbone.Router.extend({
    // Set the app routes
    routes: {
        "": "index",
        "*other": "fourohfour"
    },
    index: function() {
        $.getScript("_includes/js/views/Index.js", function(view) {
            var view = new App.Views.Index();
        });
    },
    fourohfour: function() {}
});

new App.Router();

Backbone.history.start();