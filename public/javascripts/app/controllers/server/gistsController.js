(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends =   function(child, parent) {
    if (typeof parent.__extend == 'function') return parent.__extend(child);
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } 
    function ctor() { this.constructor = child; } 
    ctor.prototype = parent.prototype; 
    child.prototype = new ctor; 
    child.__super__ = parent.prototype; 
    if (typeof parent.extended == 'function') parent.extended(child); 
    return child; 
};

  App.GistsController = (function(_super) {
    var GistsController;

    function GistsController() {
      return GistsController.__super__.constructor.apply(this, arguments);
    }

    GistsController = __extends(GistsController, _super);

    GistsController.param('text');

    GistsController.param('gitHubUrl');

    GistsController.scope('all');

    return GistsController;

  })(App.ApplicationController);

}).call(this);
