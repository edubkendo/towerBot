text '{{#with resource}}'
form ->
  fieldset ->
    ul class: 'fields', ->
      li class: 'control-group', ->
        div class: 'controls', ->
          label 'User:'
          text '{{view Ember.TextField valueBinding="user"}}'
          text '{{#with errors}}'
          span class: 'help-inline error', '{{user}}'
          text '{{/with}}'
      li class: 'control-group', ->
        div class: 'controls', ->
          label 'Body:'
          text '{{view Ember.TextField valueBinding="body"}}'
          text '{{#with errors}}'
          span class: 'help-inline error', '{{body}}'
          text '{{/with}}'
      li ->
        a '{{action submit target="resource"}}', 'Submit'
text '{{/with}}'
