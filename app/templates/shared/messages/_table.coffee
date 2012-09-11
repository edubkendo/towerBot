
tableFor 'messages', (t) ->
  t.head ->
    t.row ->
      t.header 'user', sort: true
      t.header 'body', sort: true
  t.body ->
    text '{{#each message in App.messagesController.all}}'
    t.row class: 'message', ->
      t.cell '{{message.user}}'
      t.cell '{{message.body}}'
      t.cell ->
        a '{{action showMessage message href=true}}', 'Show'
        span '|'
        a '{{action editMessage message href=true}}', 'Edit'
        span '|'
        a '{{action destroyMessage message}}', 'Destroy'
    text '{{/each}}'
  t.foot ->
    t.row ->
      t.cell colspan: 5, ->
        a '{{action newMessage message href=true}}', 'New Message'

