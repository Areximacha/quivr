// A generic of generic models
App.Collections.Models = Backbone.Collection.extend({
	model: App.Models.Model
});

// Create our global Profiles collection
App.Collections.Profiles = new App.Collections.Models([]);