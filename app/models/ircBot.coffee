class App.IrcBot extends Tower.Model
  @field 'channel', type: 'String'
  @field 'server', type: 'String'
  @field 'name', type: 'String'

  @after 'create', 'init'

  @timestamps()

  init: ->
    channel = @get('channel')
    server = @get('server')
    name = @get('name')

    client = new App.irc.Client server, name,
      channels: [channel]

    client.addListener 'join', (@channel, who) ->
      unless who is "TowerBot"
        client.say channel, "Hello #{who}! If you have a question, please be patient! It may take some time before someone sees it, but we will try our best to help you."
