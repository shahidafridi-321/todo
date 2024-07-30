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


function addTodo(project, title, description, duedate, priority) {
  let todo = Todo(title, description, duedate, priority);
  project.todos.push(todo);
}

let defaultProject = Project('Default Project');
addTodo(defaultProject, 'run', 'you have to run', '2024-21-2', 'important');

let newTaskBtn = document.querySelector('.newtask');
newTaskBtn.addEventListener('click', newTaskBtnEvents);

function newTaskBtnEvents() {
  let submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener('click', () => {
    let newTodo = fetchFormData();
    addTodo(defaultProject, newTodo.title, newTodo.description, newTodo.dueDate, newTodo.priority);
    show();
  });
}


function show() {
  console.log(defaultProject.todos);
}

function fetchFormData() {
  let title = document.querySelector('.inputdata-form #title').value;
  let description = document.querySelector('.inputdata-form #description').value;
  let dueDate = document.querySelector('.inputdata-form #duedate').value;
  let priority = document.querySelector('.inputdata-form #priority').value;
  if (title && description && dueDate && priority) {
    return { title, description, dueDate, priority };
  }
}

/*

function displayTodos(project,container) {
  let projectContainer = document.querySelector(container);
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
}

displayTodos(defaultProject,'.todos-container');

let addNewTodo = document.querySelector('.new-todo');
addNewTodo.addEventListener('click',() => {
  createForm();
  sub();
  removeForm();
});




function removeForm() {
  let body = document.querySelector('body');
  let form = document.querySelector('.inputdata-form');
  let submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    body.removeChild(form);
  });
}

function sub(){
  let submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addTodo();
    displayTodos(defaultProject,'.todos-container');
    removeForm();
  });
}

function addTodo() {
  
}


let newProject = document.querySelector('.new-project');
newProject.addEventListener('click', () => {
  let newProject = Project('new');
  let projectsContainer = document.querySelector('.projects');

  let project = document.createElement('div');
  let projectName = document.createElement('h2');
  let addNewTodo = document.createElement('button');
  addNewTodo.classList.add('new-todo');
  addNewTodo.textContent = 'New Task';
  projectName.textContent = newProject.name;
  project.appendChild(projectName);
  project.appendChild(addNewTodo)
  projectsContainer.appendChild(project);
});

*/