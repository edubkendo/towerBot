(function() {

  Tower.Route.draw(function() {
    this.resources('gists');
    this.resources('messages');
    return this.match('/', {
      to: 'application#welcome'
    });
  });

}).call(this);
