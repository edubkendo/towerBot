var __defineProperty = function(clazz, key, value) {
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

App.IrcBot = (function(_super) {
  var IrcBot;

  function IrcBot() {
    return IrcBot.__super__.constructor.apply(this, arguments);
  }

  IrcBot = __extends(IrcBot, _super);

  IrcBot.field('channel', {
    type: 'String'
  });

  IrcBot.field('server', {
    type: 'String'
  });

  IrcBot.field('name', {
    type: 'String'
  });

  IrcBot.after('create', 'init');

  IrcBot.timestamps();

  __defineProperty(IrcBot,  "init", function() {
    var channel, client, name, server;
    channel = this.get('channel');
    server = this.get('server');
    name = this.get('name');
    client = new App.irc.Client(server, name, {
      channels: [channel]
    });
    return client.addListener('join', function(channel, who) {
      this.channel = channel;
      if (who !== "TowerBot") {
        return client.say(channel, "Hello " + who + "! If you have a question, please be patient! It may take some time before someone sees it, but we will try our best to help you.");
      }
    });
  });

  return IrcBot;

})(Tower.Model);
