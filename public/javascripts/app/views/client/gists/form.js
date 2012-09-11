(function() {

  App.GistsEditView = Ember.View.extend({
    templateName: 'gists/edit',
    resourceBinding: 'controller.resource',
    submit: function(event) {
      this.get('resource').save();
      Tower.router.transitionTo('gists.index');
      return false;
    }
  });

}).call(this);
