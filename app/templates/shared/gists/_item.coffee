li class: "gist", ->
  header class: "header", ->
    h3 @gist.toLabel()
  dl class: "content", ->
    dt "Text:"
    dd @gist.get("text")
    dt "Git hub url:"
    dd @gist.get("gitHubUrl")
  footer class: "footer", ->
    menu ->
      menuItem "Edit", urlFor(@gist, action: "edit")
