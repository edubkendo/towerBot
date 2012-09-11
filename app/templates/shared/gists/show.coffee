@title = "Gist"

partial "flash"

text '{{#with resource}}'
dl class: "content", ->
  dt "Text:"
  dd '{{text}}'
  dt "Git hub url:"
  dd '{{gitHubUrl}}'
text '{{/with}}'