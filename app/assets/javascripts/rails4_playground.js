window.Rails4Playground = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {
    var posts = new Rails4Playground.Collections.Posts(data.posts);
    new Rails4Playground.Routers.Posts({ collection: posts });

    if (!Backbone.history.started) {
      Backbone.history.start();
      Backbone.history.started = true;
    }
  }
};
