a '{{action showRoot href=true}}', class: 'brand', -> t('title')

div class: 'nav-collapse', ->
  ul class: 'nav', ->
    li ->
      a '{{action indexGist href=true}}', t('links.gists')
    li ->
      a '{{action indexMessage href=true}}', t('links.messages')
  ul class: 'nav pull-right', ->
    li class: 'dropdown', ->
      linkTo t('links.docs'), '#', class: 'dropdown-toggle', 'data-toggle': 'dropdown', ->
        b class: 'caret'
      ul class: 'dropdown-menu', ->
        li ->
          linkTo 'Tower.js', 'https://github.com/viatropos/tower-docs'
