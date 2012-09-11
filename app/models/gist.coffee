class App.Gist extends Tower.Model
  @field 'text', type: 'Object'
  @field 'gitHubUrl', type: 'String'

  @hasMany 'messages'

  @timestamps()

  @after 'create', 'makeGist'

  makeGist: () ->
    
    date = _.now().toDate()
    newGist =
      'description': "irc logs for #{date}"
      'public': 'false'
      'files':
        'file.txt':
          'content': "#{@get('text')}"
    App.gisted().create newGist, (err, resp, json) =>
      console.log json
      @set('gitHubUrl', json.html_url)
      @save()