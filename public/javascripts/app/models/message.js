(function() {
  var __defineStaticProperty = function(clazz, key, value) {
  if (typeof clazz.__defineStaticProperty == 'function') return clazz.__defineStaticProperty(key, value);
  return clazz[key] = value;
},
    __defineProperty = function(clazz, key, value) {
  if (typeof clazz.__defineProperty == 'function') return clazz.__defineProperty(key, value);
  return clazz.prototype[key] = value;
},
    __hasProp = {}.hasOwnProperty,
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

  App.Message = (function(_super) {
    var Message;

    function Message() {
      return Message.__super__.constructor.apply(this, arguments);
    }

    Message = __extends(Message, _super);

    Message.field('user', {
      type: 'String'
    });

    Message.field('body', {
      type: 'String'
    });

    Message.belongsTo('gist');

    Message.timestamps();

    Message.after('create', 'checkCount');

    __defineStaticProperty(Message,  "gistify", function() {
      var gist,
        _this = this;
      gist = "";
      return App.Message.find(function(error, messages) {
        var body, createdAt, message, newGist, user, _i, _len, _ref;
        _this.messages = messages;
        _ref = _this.messages;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          message = _ref[_i];
          createdAt = message.get('createdAt');
          user = message.get('user');
          body = message.get('body');
          gist = "" + gist + "\n " + createdAt + " " + user + ": " + body;
          message.destroy();
        }
        newGist = App.Gist["new"]();
        newGist.setProperties({
          text: gist
        });
        return newGist.save();
      });
    });

    __defineProperty(Message,  "checkCount", function() {
      var _this = this;
      return App.Message.count(function(error, count) {
        _this.count = count;
        if (_this.count > 10) {
          return App.Message.gistify();
        }
      });
    });

    return Message;

  })(Tower.Model);

}).call(this);
