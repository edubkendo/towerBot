(function() {

  App.MessagesEditView = Ember.View.extend({
    templateName: 'messages/edit',
    resourceBinding: 'controller.resource',
    submit: function(event) {
      this.get('resource').save();
      Tower.router.transitionTo('messages.index');
      return false;
    }
  });

}).call(this);
