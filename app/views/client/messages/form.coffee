App.MessagesEditView = Ember.View.extend
  templateName: 'messages/edit'
  resourceBinding: 'controller.resource'
  # You can also use an object controller (Ember.ObjectProxy) 
  # as a layer between the view and the model if you'd like more control.
  # resourceControllerBinding: 'controller.resourceController'
  
  submit: (event) ->
    # @todo
    # if @get('resource.isNew')
    #   @get('controller.target').send('createMessage')
    # else
    #   @get('controller.target').send('updateMessage', @get('resource'))
    @get('resource').save()
    Tower.router.transitionTo('messages.index')
    return false
