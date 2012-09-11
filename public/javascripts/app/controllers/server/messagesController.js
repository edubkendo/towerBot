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

  App.MessagesController = (function(_super) {
    var MessagesController;

    function MessagesController() {
      return MessagesController.__super__.constructor.apply(this, arguments);
    }

    MessagesController = __extends(MessagesController, _super);

    MessagesController.param('user');

    MessagesController.param('body');

    MessagesController.scope('all');

    return MessagesController;

  })(App.ApplicationController);

}).call(this);
