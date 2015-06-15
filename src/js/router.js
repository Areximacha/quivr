// Set up the router here
App.Router = Backbone.Router.extend({
	// Set the app routes
	routes: {
		'': 'index',
		'*other': 'fourohfour'
	},

	index: function() {

		$.getScript('_includes/js/views/Index.js', function(view){

			var view = new App.Views.Index;

		});
	},

	fourohfour: function() {
		//trgger 404 event
	}
	
});

new App.Router;

Backbone.history.start();