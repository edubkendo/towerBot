Tower.Route.draw ->
  @resources 'gists'
  @resources 'messages'
  # @match '(/*path)', to: 'application#index'
  @match '/', to: 'application#welcome'
