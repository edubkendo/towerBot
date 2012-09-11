class App.Message extends Tower.Model
  @field 'user', type: 'String'
  @field 'body', type: 'String'

  @belongsTo 'gist'

  @timestamps()

  @after 'create', 'checkCount'

  @gistify: ->
    gist = ""
    App.Message.find (error, @messages) =>
      for message in @messages
        createdAt = message.get('createdAt')
        user = message.get('user')
        body = message.get('body')
        gist = "#{gist}\n #{createdAt} #{user}: #{body}"
        message.destroy()
      newGist = App.Gist.new()
      newGist.setProperties(
        text: gist
        )
      newGist.save()  

  checkCount: ->
    # console.log "Hi!"
    App.Message.count (error, @count) =>
      if @count > 10
        App.Message.gistify()  