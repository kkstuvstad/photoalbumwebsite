function handleUserSelection(event) {

  var userSelection = event.target.value;

  if (userSelection) {
    window.location.href = '/notes/' + userSelection;
  }

}

window.addEventListener('DOMContentLoaded', function (event) {

var userSelect = document.getElementById('user-select');
  if (userSelect) {
    userSelect.addEventListener('change', handleUserSelection);
  }
  
});
