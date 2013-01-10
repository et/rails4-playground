Rails4Playground.Routers.Posts = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  index: function() {
    alert("Hello from backbone router");
  }
});
