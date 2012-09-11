require 'tower'

global.chai     = require 'chai'
global.assert   = chai.assert
global.expect   = chai.expect
global.should   = chai.should()
global.sinon    = require "sinon"
global.sinonChai = require("sinon-chai")
global.async    = require 'async'
global.test     = it
global.cb       = true # some library has a global leak...
global.factory  = -> Tower.Factory.create(arguments...)
global.urlFor   = Tower.urlFor
global.get      = _.get
global.post     = _.post
global.put      = _.put
global.destroy  = _.destroy
global.Faker    = require 'Faker'
global.net      = require 'net'

global.app      = Tower.Application.instance()

# Initialize the app before everything.
before (done) ->
  app.initialize done
  chai.use(sinonChai)

  Tower.Factory.define 'ircBot', ->
    channel: Faker.Lorem.words()
    server: Faker.Lorem.words()
    name: Faker.Lorem.words()  

  Tower.Factory.define 'message', ->
    user: Faker.Internet.userName()
    body: Faker.Lorem.sentence()

  Tower.Factory.define 'gist', ->
    text: Faker.Lorem.sentence()
    gitHubUrl: Faker.Internet.domainWord()


# Run this before each action
beforeEach (done) ->
  if Tower.isClient
    Tower.StoreMemory.clean(done)
  else
    Tower.StoreMongodb.clean(done)