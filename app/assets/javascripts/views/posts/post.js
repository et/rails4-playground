Rails4Playground.Views.PostView = Backbone.View.extend({
  render: function() {
    this.$el.html(JST['posts/post']({ model: this.model }));
    return this;
  }
});
