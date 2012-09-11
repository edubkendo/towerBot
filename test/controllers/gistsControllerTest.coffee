describe 'GistsController', ->
  controller = undefined
  gist = undefined
  url = undefined
  agent = agent or {}

  beforeEach (done) ->
    controller = App.GistsController.create()
    agent.controller = controller
    Tower.start(done)

  afterEach ->
    Tower.stop()
    delete agent.controller

  describe 'routes', ->
    test 'index', ->
      assert.equal urlFor(App.Gist), "/gists"

    test 'new', ->
      gist = App.Gist.build()
      assert.equal urlFor(gist, action: 'new'), "/gists/new"

    test 'show', ->
      gist = App.Gist.build()
      gist.save()
      assert.equal urlFor(gist), "/gists/#{gist.get('id')}"

    test 'edit', ->
      gist = App.Gist.build()
      gist.save()
      assert.equal urlFor(gist, action: 'edit'), "/gists/#{gist.get('id')}/edit"

  describe '#index', ->
    beforeEach (done) ->
      factory 'gist', (error, record) =>
        gist = record
        gist.save()
        done()

    test 'render json', (done) ->
      get urlFor(App.Gist), format: "json", (request) ->
        assert.equal request.headers["content-type"], 'application/json'

        done()

  describe '#new', ->

  describe '#create', ->
    beforeEach ->
      url = urlFor(App.Gist)

    test 'params', (done) ->
      params = {}

      post url, format: "json", params: params, (response) ->
        App.Gist.count (error, count) =>
          assert.equal count, 1
          done()

  describe "#show", ->

  describe "#edit", ->

  describe "#update", ->

  describe "#destroy", ->
