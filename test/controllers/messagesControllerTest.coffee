describe 'MessagesController', ->
  controller = undefined
  message = undefined
  url = undefined
  agent = agent or {}

  beforeEach (done) ->
    controller = App.MessagesController.create()
    agent.controller = controller
    Tower.start(done)

  afterEach ->
    Tower.stop()
    delete agent.controller

  describe 'routes', ->
    test 'index', ->
      assert.equal urlFor(App.Message), "/messages"

    test 'new', ->
      message = App.Message.build()
      assert.equal urlFor(message, action: 'new'), "/messages/new"

    test 'show', ->
      message = App.Message.build()
      message.save()
      assert.equal urlFor(message), "/messages/#{message.get('id')}"

    test 'edit', ->
      message = App.Message.build()
      message.save()
      assert.equal urlFor(message, action: 'edit'), "/messages/#{message.get('id')}/edit"

  describe '#index', ->
    beforeEach (done) ->
      factory 'message', (error, record) =>
        message = record
        message.save()
        done()

    test 'render json', (done) ->
      get urlFor(App.Message), format: "json", (request) ->
        assert.equal request.headers["content-type"], 'application/json'

        done()

  describe '#new', ->

  describe '#create', ->
    beforeEach ->
      url = urlFor(App.Message)

    test 'params', (done) ->
      params = {}

      post url, format: "json", params: params, (response) ->
        App.Message.count (error, count) =>
          assert.equal count, 1
          done()

  describe "#show", ->

  describe "#edit", ->

  describe "#update", ->

  describe "#destroy", ->
