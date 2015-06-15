// Welcome page view
App.Views.Welcome = Backbone.View.extend({
	el: '.content',

    initialize: function() {
    	var self = this;

		$.ajax("_includes/js/templates/welcome.tpl").success(function(html){

			self.template = _.template(html);

			self.render();

		});
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});