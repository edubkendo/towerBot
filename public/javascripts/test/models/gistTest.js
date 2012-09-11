var gist;

gist = null;

describe("App.Gist", function() {
  describe("fields", function() {
    beforeEach(function(done) {
      gist = App.Gist.build({
        text: "A text",
        gitHubUrl: "A gitHubUrl"
      });
      return done();
    });
    test("text", function() {
      return assert.ok(gist.get("text"));
    });
    return test("gitHubUrl", function() {
      return assert.ok(gist.get("gitHubUrl"));
    });
  });
  return describe("relations", function() {
    return it("should make a gist on github after creation", function(done) {
      var spy;
      spy = sinon.spy(gist, "makeGist");
      gist.save();
      return process.nextTick(function() {
        spy.should.have.been.calledOnce;
        return done();
      });
    });
  });
});
