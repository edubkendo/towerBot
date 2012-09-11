gist = null

describe "App.Gist", ->
  describe "fields", ->
    beforeEach (done) ->
      gist = App.Gist.build
        text: "A text"
        gitHubUrl: "A gitHubUrl"

      done()

    test "text", ->
      assert.ok gist.get("text")

    test "gitHubUrl", ->
      assert.ok gist.get("gitHubUrl")

  describe "relations", ->

    it "should make a gist on github after creation", (done) ->
      spy = sinon.spy gist, "makeGist"
      gist.save()
      process.nextTick ->
        spy.should.have.been.calledOnce      
        done()
