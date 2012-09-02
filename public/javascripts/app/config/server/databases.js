(function() {

  module.exports = {
    mongodb: {
      development: {
        name: 'tower-bot-development',
        port: 27017,
        host: '127.0.0.1'
      },
      test: {
        name: 'tower-bot-test',
        port: 27017,
        host: '127.0.0.1'
      },
      staging: {
        name: 'tower-bot-staging',
        port: 27017,
        host: '127.0.0.1'
      },
      production: {
        name: 'tower-bot-production',
        port: 27017,
        host: '127.0.0.1'
      }
    },
    redis: {
      development: {
        name: 'tower-bot-development',
        port: 6397,
        host: '127.0.0.1'
      },
      test: {
        name: 'tower-bot-test',
        port: 6397,
        host: '127.0.0.1'
      },
      staging: {
        name: 'tower-bot-staging',
        port: 6397,
        host: '127.0.0.1'
      },
      production: {
        name: 'tower-bot-production',
        port: 6397,
        host: '127.0.0.1'
      }
    }
  };

}).call(this);
