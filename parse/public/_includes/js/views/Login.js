// Login page view
App.Views.Login = Backbone.View.extend({
    el: ".content",
    events: {
        submit: "submit"
    },
    initialize: function() {
        var self = this;
        $.ajax("_includes/js/templates/login.tpl").success(function(html) {
            self.template = _.template(html);
            self.render();
        });
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    },
    submit: function(e) {
        e.preventDefault();
        var username = $("#email").val(), password = $("#password").val();
        Parse.User.logIn(username, password, {
            success: function(user) {
                Backbone.history.navigate("home", true);
            },
            error: function(user, error) {
                console.log(error);
            }
        });
    }
});