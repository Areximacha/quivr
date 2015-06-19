// Set up the router here
App.Router = Backbone.Router.extend({
	// Set the app routes
	routes: {
		'': 'index',
		'home': 'home',
		'register': 'register',
		'login': 'login',
		'half-portsmouth': 'halfPortsmouth',
		'logout': 'logOut',
		'*other': 'fourohfour'
	},

	index: function() {

		if (!checkUser()) {

			$.getScript('_includes/js/views/Welcome.js', function(view){

				var view = new App.Views.Welcome;

			});

		} else {

			Backbone.history.navigate('home', true);

		}
	},

	home: function() {

		if (checkUser()) {

			$.getScript('_includes/js/views/Home.js', function(view){

				var view = new App.Views.Home;

			});

		} else {

			Backbone.history.navigate('', true);

		}

	},

	register: function() {

		if (!checkUser()) {

			$.getScript('_includes/js/views/Register.js', function(view){

				var view = new App.Views.Register;

			});

		} else {

			Backbone.history.navigate('home', true);
			
		}

	},

	login: function() {

		if (!checkUser()) {

			$.getScript('_includes/js/views/Login.js', function(view){

				var view = new App.Views.Login;

			});

		} else {

			Backbone.history.navigate('home', true);

		}
	},

	halfPortsmouth: function() {

		if (checkUser()) {

			$.getScript('_includes/js/views/HalfPortsmouth.js', function(view){

				var view = new App.Views.HalfPortsmouth;

			});

		} else {

			Backbone.history.navigate('', true);

		}

	},

	logOut : function(){

		try {

			Parse.User.logOut();

		} catch(error){

		}

		Backbone.history.navigate('', true);

	},

	fourohfour: function() {
		//trgger 404 event
	}
	
});

var checkUser = function() {

	return Parse.User.current();
}

new App.Router;

Backbone.history.start();