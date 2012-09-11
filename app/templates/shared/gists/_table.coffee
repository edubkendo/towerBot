
tableFor 'gists', (t) ->
  t.head ->
    t.row ->
      t.header 'text', sort: true
      t.header 'gitHubUrl', sort: true
  t.body ->
    text '{{#each gist in App.gistsController.all}}'
    t.row class: 'gist', ->
      t.cell '{{gist.text}}'
      t.cell '{{gist.gitHubUrl}}'
      t.cell ->
        a '{{action showGist gist href=true}}', 'Show'
        span '|'
        a '{{action editGist gist href=true}}', 'Edit'
        span '|'
        a '{{action destroyGist gist}}', 'Destroy'
    text '{{/each}}'
  t.foot ->
    t.row ->
      t.cell colspan: 5, ->
        a '{{action newGist gist href=true}}', 'New Gist'

