Rails4Playground.Routers.Posts = Backbone.Router.extend({
  initialize: function(options) {
    this.collection = options.collection;
  },

  routes: {
    "": "index"
  },

  index: function() {
    var view = new Rails4Playground.Views.PostsIndex({ collection: this.collection });
    $('body').html(view.render().$el);
  }
});
