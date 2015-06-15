// Register page view
App.Views.Register = Backbone.View.extend({
    el: ".content",
    events: {
        submit: "submit"
    },
    initialize: function() {
        var self = this;
        $.ajax("_includes/js/templates/register.tpl").success(function(html) {
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
        var self = this, newEmail = $("input#email").val(), newName = $("input#name").val(), newPassword = $("input#password").val();
        var user = new Parse.User();
        user.set("username", newEmail);
        user.set("name", newName);
        user.set("password", newPassword);
        user.signUp(null, {
            success: function(user) {
                Backbone.history.navigate("home", true);
            },
            error: function(user, error) {
                console.log(error);
            }
        });
    }
});