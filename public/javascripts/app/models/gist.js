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

App.Gist = (function(_super) {
  var Gist;

  function Gist() {
    return Gist.__super__.constructor.apply(this, arguments);
  }

  Gist = __extends(Gist, _super);

  Gist.field('text', {
    type: 'Object'
  });

  Gist.field('gitHubUrl', {
    type: 'String'
  });

  Gist.hasMany('messages');

  Gist.timestamps();

  Gist.after('create', 'makeGist');

  __defineProperty(Gist,  "makeGist", function() {
    var date, newGist,
      _this = this;
    date = _.now().toDate();
    newGist = {
      'description': "irc logs for " + date,
      'public': 'false',
      'files': {
        'file.txt': {
          'content': "" + (this.get('text'))
        }
      }
    };
    return App.gisted().create(newGist, function(err, resp, json) {
      console.log(json);
      _this.set('gitHubUrl', json.html_url);
      return _this.save();
    });
  });

  return Gist;

})(Tower.Model);
