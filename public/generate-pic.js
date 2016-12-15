var todoTemplate = Handlebars.templates.todo;

function generateTodoHTML(url, body, caption) {
  var newPic = {
    url: url,
    body: {
      caption: caption
    }
  }

  return todoTemplate(newPic);
}
