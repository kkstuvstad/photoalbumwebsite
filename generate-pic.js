var todoTemplate = Handlebars.templates.todo;

function generateTodoHTML(caption) {
  var newPic = {
    caption: caption
  }

  return todoTemplate(newNote);
}
