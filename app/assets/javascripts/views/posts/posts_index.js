Rails4Playground.Views.PostsIndex = Backbone.View.extend({
  render: function() {
    var self = this;

    this.$el.html( JST['posts/index']());

    this.collection.each(function(post) {
      var postView = new Rails4Playground.Views.PostView({ model: post });
      self.$('table').append(postView.render().el);
    });

    return this;
  }


});
