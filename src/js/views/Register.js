// Register page view
App.Views.Register = Backbone.View.extend({
	el: '.content',

    initialize: function() {
    	var self = this;

		$.ajax("_includes/js/templates/register.tpl").success(function(html){

			self.template = _.template(html);

			self.render();

		});
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});