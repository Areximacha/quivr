// Home page view
App.Views.Home = Backbone.View.extend({
	el: '.content',

    initialize: function() {
    	var self = this;

		$.ajax("_includes/js/templates/home.tpl").success(function(html){

			self.template = _.template(html);

			self.render();

		});
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});