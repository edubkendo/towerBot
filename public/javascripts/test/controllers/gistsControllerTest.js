(function() {

  describe('GistsController', function() {
    var agent, controller, gist, url;
    controller = void 0;
    gist = void 0;
    url = void 0;
    agent = agent || {};
    beforeEach(function(done) {
      controller = App.GistsController.create();
      agent.controller = controller;
      return Tower.start(done);
    });
    afterEach(function() {
      Tower.stop();
      return delete agent.controller;
    });
    describe('routes', function() {
      test('index', function() {
        return assert.equal(urlFor(App.Gist), "/gists");
      });
      test('new', function() {
        gist = App.Gist.build();
        return assert.equal(urlFor(gist, {
          action: 'new'
        }), "/gists/new");
      });
      test('show', function() {
        gist = App.Gist.build();
        gist.save();
        return assert.equal(urlFor(gist), "/gists/" + (gist.get('id')));
      });
      return test('edit', function() {
        gist = App.Gist.build();
        gist.save();
        return assert.equal(urlFor(gist, {
          action: 'edit'
        }), "/gists/" + (gist.get('id')) + "/edit");
      });
    });
    describe('#index', function() {
      beforeEach(function(done) {
        var _this = this;
        return factory('gist', function(error, record) {
          gist = record;
          gist.save();
          return done();
        });
      });
      return test('render json', function(done) {
        return get(urlFor(App.Gist), {
          format: "json"
        }, function(request) {
          assert.equal(request.headers["content-type"], 'application/json');
          return done();
        });
      });
    });
    describe('#new', function() {});
    describe('#create', function() {
      beforeEach(function() {
        return url = urlFor(App.Gist);
      });
      return test('params', function(done) {
        var params;
        params = {};
        return post(url, {
          format: "json",
          params: params
        }, function(response) {
          var _this = this;
          return App.Gist.count(function(error, count) {
            assert.equal(count, 1);
            return done();
          });
        });
      });
    });
    describe("#show", function() {});
    describe("#edit", function() {});
    describe("#update", function() {});
    return describe("#destroy", function() {});
  });

}).call(this);
