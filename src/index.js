import './style.css';
function Todos(title,description,dueDate,priority){
  return{
    title,
    description,
    dueDate,
    priority,
  }
}

function Project(name){
  let todos = [];
  return {
    name,
    todos,
  }
}

function defaultTodos(fun){
  let todo = fun('Study','You have to study every day','07/29/2024','important');

  let defaultTodo = document.querySelector('.todos');

  let title = document.createElement('h3');
  title.textContent = todo.title;


  let dueDate = document.createElement('input');
  dueDate.setAttribute('type','date');
  dueDate.value = new Date().toISOString().split('T')[0];

  let description = document.createElement('p');
  description.textContent = todo.description;

  let priority = document.createElement('p');
  priority.innerHTML = `<strong>${todo.priority}</strong>`

  defaultTodo.appendChild(title);
  defaultTodo.appendChild(description);
  defaultTodo.appendChild(dueDate);
  defaultTodo.appendChild(priority);
}

defaultTodos(Todos);