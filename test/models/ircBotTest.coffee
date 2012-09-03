ircBot = null

describe "App.IrcBot", ->
  describe "fields", ->
    beforeEach (done) ->
      ircBot = App.IrcBot.build
        channel: "A channel"
        server: "A server"
        name: "A name"

      done()

    test "channel", ->
      assert.ok ircBot.get("channel")

    test "server", ->
      assert.ok ircBot.get("server")

    test "name", ->
      assert.ok ircBot.get("name")

  describe "methods", ->
    describe 'init', ->

      beforeEach (done) ->
        ircBot = App.IrcBot.build
          channel: "bottest123"
          server: 'localhost'
          name: "coolBot"
        done()

      it "should call init on creation", (done) ->
        spy = sinon.spy ircBot, "init"
        ircBot.save()
        spy.should.have.been.calledOnce
        done()

      it "should connect to the irc server", (done) ->
        ircBot.save()
        server = net.createServer()
        server.listen(6667, 'localhost')
        server.on 'connection', (socket) ->
          socket.end()
          server.close()
          done()
          