// HalfPortsmouth page view
App.Views.HalfPortsmouth = Backbone.View.extend({
    el: ".content",
    events: {
        "click .shot-point": "addPoint"
    },
    initialize: function() {
        var self = this;
        $.ajax("_includes/js/templates/half-portsmouth.tpl").success(function(html) {
            self.template = _.template(html);
            self.render();
        });
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    },
    addPoint: function(e) {
        var self = this, point = $(e.currentTarget), target = self.$el.find(".target"), newPoint;
        e.preventDefault();
        self.$el.find(".target a").off().on("click", function(e) {
            e.preventDefault();
            var points = 0;
            newPoint = $(e.currentTarget).data("score");
            point.val(newPoint);
            point.closest(".row").find(".shot-point").each(function() {
                var currentPoint = parseInt($(this).val(), 10);
                points += currentPoint;
            });
            console.log(points);
            target.hide();
        });
        target.show();
    },
    updateTotals: function() {
        var self = this;
        self.$el.find(".row");
    }
});