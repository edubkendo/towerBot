@title = "Editing Message"

partial "flash"
partial "form"

contentFor "sidebar", ->
  header class: "widget header", ->
    h2 @message.toLabel()