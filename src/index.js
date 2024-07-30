import './style.css';

function Todo(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority,
  }
}

function Project(name) {
  let todos = [];
  return {
    name,
    todos,
  }
}


function addDefaultTodo(project, title, description, duedate, priority) {
  let todo = Todo(title, description, duedate, priority);
  project.todos.push(todo);
}

let defaultProject = Project('Default Project');

addDefaultTodo(defaultProject, 'run', 'you have to run', '2024-21-2', 'important');

function displayTodos(project) {
  let projectContainer = document.querySelector('.todos-container');
  projectContainer.innerHTML = '';

  let todoItem = document.createElement('div');
  todoItem.innerHTML = ` <h2>${project.name}</h2>
    <button class="new-todo">New Task</button>`;

  project.todos.forEach(todo => {
    todoItem.innerHTML += `
    <div class="todo-card">
      <h3 class="title">${todo.title}</h3>
      <p class="description">${todo.description}</p>
      <p class="duedate">${todo.dueDate}</p>
      <strong>${todo.priority}</strong>
      <button class="delete-btn">Delete</button>
    </div>`;
    projectContainer.appendChild(todoItem);
  });
  let addNewTodo = document.querySelector('.new-todo');
  addNewTodo.addEventListener('click', () => {
    createForm();
    removeForm();
  });
}

displayTodos(defaultProject);


function createForm() {
  let body = document.querySelector('body');
  let form = document.createElement('form');
  form.classList.add('inputdata-form');
  form.innerHTML = `
    <label for="title">Title</label>
    <input type="text" name="" id="title" required>
    <label for="description" >Description</label>
    <input type="text" name="" id="description" required>
    <label for="duedate">DueDate</label>
    <input type="date" name="" id="duedate" required>
    <label for="priority">Priority</label>
    <input type="text" name="" id="priority" required>
    <button type="submit" id="submit-btn">Submit</button>`;
  body.appendChild(form);
}

function removeForm() {
  let body = document.querySelector('body');
  let form = document.querySelector('.inputdata-form');
  let submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addTodo();
    displayTodos(defaultProject);
    body.removeChild(form);
  });
}

function addTodo() {
  let title = document.querySelector('.inputdata-form #title').value;
  let description = document.querySelector('.inputdata-form #description').value;
  let dueDate = document.querySelector('.inputdata-form #duedate').value;
  let priority = document.querySelector('.inputdata-form #priority').value;
  addDefaultTodo(defaultProject, title, description, dueDate, priority);
}

