App.GistsEditView = Ember.View.extend
  templateName: 'gists/edit'
  resourceBinding: 'controller.resource'
  # You can also use an object controller (Ember.ObjectProxy) 
  # as a layer between the view and the model if you'd like more control.
  # resourceControllerBinding: 'controller.resourceController'
  
  submit: (event) ->
    # @todo
    # if @get('resource.isNew')
    #   @get('controller.target').send('createGist')
    # else
    #   @get('controller.target').send('updateGist', @get('resource'))
    @get('resource').save()
    Tower.router.transitionTo('gists.index')
    return false
