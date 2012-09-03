(function() {

  require('tower');

  global.chai = require('chai');

  global.assert = chai.assert;

  global.expect = chai.expect;

  global.should = chai.should();

  global.sinon = require("sinon");

  global.sinonChai = require("sinon-chai");

  global.async = require('async');

  global.test = it;

  global.cb = true;

  global.factory = function() {
    var _ref;
    return (_ref = Tower.Factory).create.apply(_ref, arguments);
  };

  global.urlFor = Tower.urlFor;

  global.get = _.get;

  global.post = _.post;

  global.put = _.put;

  global.destroy = _.destroy;

  global.Faker = require('Faker');

  global.net = require('net');

  global.app = Tower.Application.instance();

  before(function(done) {
    app.initialize(done);
    chai.use(sinonChai);
    return Tower.Factory.define('ircBot', function() {
      return {
        channel: Faker.Lorem.words(),
        server: Faker.Lorem.words(),
        name: Faker.Lorem.words()
      };
    });
  });

  beforeEach(function(done) {
    if (Tower.isClient) {
      return Tower.StoreMemory.clean(done);
    } else {
      return Tower.StoreMongodb.clean(done);
    }
  });

}).call(this);
