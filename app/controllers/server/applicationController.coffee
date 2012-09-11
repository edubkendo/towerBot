class App.ApplicationController extends Tower.Controller
  @layout 'application'

  @param 'page', type: 'Number', allowRange: false, allowNegative: false
  @param 'limit', type: 'Number', allowRange: false, allowNegative: false
  @param 'createdAt', type: 'Date'
  @param 'updatedAt', type: 'Date'

  @beforeAction 'bootstrap'#, only: 'welcome'

  welcome: ->
    @render 'welcome', locals: {@bootstrapData}

  # Example of how you might bootstrap a one-page application.
  bootstrap: (callback) ->
    data = @bootstrapData = {}

    # for every model you add, you can add it to the bootstrap
    # dataset by using this async helper.
    _.series [
      (next) => App.Gist.all (error, gists) =>
        data.gists = gists
        next()
      (next) => App.Message.all (error, messages) =>
        data.messages = messages
        next()
      (next) => App.IrcBot.all (error, ircBots) =>
        data.ircBots = ircBots
        next()
    ], callback
