(function() {
  var ircBot;

  ircBot = null;

  describe("App.IrcBot", function() {
    describe("fields", function() {
      beforeEach(function(done) {
        ircBot = App.IrcBot.build({
          channel: "A channel",
          server: "A server",
          name: "A name"
        });
        return done();
      });
      test("channel", function() {
        return assert.ok(ircBot.get("channel"));
      });
      test("server", function() {
        return assert.ok(ircBot.get("server"));
      });
      return test("name", function() {
        return assert.ok(ircBot.get("name"));
      });
    });
    return describe("methods", function() {
      return describe('init', function() {
        beforeEach(function(done) {
          ircBot = App.IrcBot.build({
            channel: "bottest123",
            server: 'localhost',
            name: "coolBot"
          });
          return done();
        });
        it("should call init on creation", function(done) {
          var spy;
          spy = sinon.spy(ircBot, "init");
          ircBot.save();
          spy.should.have.been.calledOnce;
          return done();
        });
        return it("should connect to the irc server", function(done) {
          var server;
          ircBot.save();
          server = net.createServer();
          server.listen(6667, 'localhost');
          return server.on('connection', function(socket) {
            socket.end();
            server.close();
            return done();
          });
        });
      });
    });
  });

}).call(this);
