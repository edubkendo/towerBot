message = null

describe "App.Message", ->
  describe "fields", ->
    beforeEach (done) ->
      message = App.Message.build
        user: "A user"
        body: "A body"

      done()

    test "user", ->
      assert.ok message.get("user")

    test "body", ->
      assert.ok message.get("body")

  describe "relations", ->

    it "should check its count after creation", (done) ->
      spy = sinon.spy message, "checkCount"
      message.save()
      spy.should.have.been.calledOnce      
      done()

    it "should create a gist after ten messages", (done) ->
      spy = sinon.spy App.Message, "gistify"
      for num in [1..11]
        message = App.Message.new()
        message.setProperties(
          body: "A body #{num}"
          user: "A user #{num}"
          )
        message.save()
      setTimeout ->
        spy.should.have.been.calledOnce        
        done()
      , 20      