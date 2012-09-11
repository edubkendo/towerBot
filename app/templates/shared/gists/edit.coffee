@title = "Editing Gist"

partial "flash"
partial "form"

contentFor "sidebar", ->
  header class: "widget header", ->
    h2 @gist.toLabel()