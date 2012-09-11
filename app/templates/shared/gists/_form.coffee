text '{{#with resource}}'
form ->
  fieldset ->
    ul class: 'fields', ->
      li class: 'control-group', ->
        div class: 'controls', ->
          label 'Text:'
          text '{{view Ember.TextField valueBinding="text"}}'
          text '{{#with errors}}'
          span class: 'help-inline error', '{{text}}'
          text '{{/with}}'
      li class: 'control-group', ->
        div class: 'controls', ->
          label 'Git hub url:'
          text '{{view Ember.TextField valueBinding="gitHubUrl"}}'
          text '{{#with errors}}'
          span class: 'help-inline error', '{{gitHubUrl}}'
          text '{{/with}}'
      li ->
        a '{{action submit target="resource"}}', 'Submit'
text '{{/with}}'
