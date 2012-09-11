(function() {
  var message;

  message = null;

  describe("App.Message", function() {
    describe("fields", function() {
      beforeEach(function(done) {
        message = App.Message.build({
          user: "A user",
          body: "A body"
        });
        return done();
      });
      test("user", function() {
        return assert.ok(message.get("user"));
      });
      return test("body", function() {
        return assert.ok(message.get("body"));
      });
    });
    return describe("relations", function() {
      it("should check its count after creation", function(done) {
        var spy;
        spy = sinon.spy(message, "checkCount");
        message.save();
        spy.should.have.been.calledOnce;
        return done();
      });
      return it("should create a gist after ten messages", function(done) {
        var num, spy, _i;
        spy = sinon.spy(App.Message, "gistify");
        for (num = _i = 1; _i <= 11; num = ++_i) {
          message = App.Message["new"]();
          message.setProperties({
            body: "A body " + num,
            user: "A user " + num
          });
          message.save();
        }
        return setTimeout(function() {
          spy.should.have.been.calledOnce;
          return done();
        }, 20);
      });
    });
  });

}).call(this);
