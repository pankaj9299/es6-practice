import { getListing } from './helpers.js';
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

document.addEventListener("DOMContentLoaded", function () {
    var todoInstance = new TodoList();
    var todoForm = document.querySelector('form#add-todo-form');
    var obj = {};
    var myModal = new bootstrap.Modal(document.getElementById('addTodo'), {
      keyboard: false
    });
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        var firstName = document.getElementById('first-name').value;
        var lastName = document.getElementById('last-name').value;
        obj.firstName = firstName;
        obj.lastname = lastName;
        todoInstance.saveTodo(obj);
        myModal.hide();
        getListing();
    }, false);

    getListing();

    // Delete todo
    var deleteTodo = [].slice.call(document.querySelectorAll('.bi-trash'));
    deleteTodo.forEach(function (element, index) {
      element.addEventListener('click', (e) => {
          var deletedID = deleteTodo[index].dataset.id;
          todoInstance.deleteTodo(deletedID);
          getListing();
      });

    });

    getListing();

});
