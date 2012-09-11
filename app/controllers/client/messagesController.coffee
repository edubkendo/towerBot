class App.MessagesController extends Tower.Controller
  @scope 'all'

  # @todo refactor
  destroy: ->
    @get('resource').destroy()
