(function() {

  describe('MessagesController', function() {
    var agent, controller, message, url;
    controller = void 0;
    message = void 0;
    url = void 0;
    agent = agent || {};
    beforeEach(function(done) {
      controller = App.MessagesController.create();
      agent.controller = controller;
      return Tower.start(done);
    });
    afterEach(function() {
      Tower.stop();
      return delete agent.controller;
    });
    describe('routes', function() {
      test('index', function() {
        return assert.equal(urlFor(App.Message), "/messages");
      });
      test('new', function() {
        message = App.Message.build();
        return assert.equal(urlFor(message, {
          action: 'new'
        }), "/messages/new");
      });
      test('show', function() {
        message = App.Message.build();
        message.save();
        return assert.equal(urlFor(message), "/messages/" + (message.get('id')));
      });
      return test('edit', function() {
        message = App.Message.build();
        message.save();
        return assert.equal(urlFor(message, {
          action: 'edit'
        }), "/messages/" + (message.get('id')) + "/edit");
      });
    });
    describe('#index', function() {
      beforeEach(function(done) {
        var _this = this;
        return factory('message', function(error, record) {
          message = record;
          message.save();
          return done();
        });
      });
      return test('render json', function(done) {
        return get(urlFor(App.Message), {
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
        return url = urlFor(App.Message);
      });
      return test('params', function(done) {
        var params;
        params = {};
        return post(url, {
          format: "json",
          params: params
        }, function(response) {
          var _this = this;
          return App.Message.count(function(error, count) {
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
