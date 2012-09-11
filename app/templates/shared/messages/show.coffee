@title = "Message"

partial "flash"

text '{{#with resource}}'
dl class: "content", ->
  dt "User:"
  dd '{{user}}'
  dt "Body:"
  dd '{{body}}'
text '{{/with}}'