import './style.css';

// This factory creates a todo object
function CreateTodo(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority,
  }
}

// This factory creates a project object
function createProject(name) {
  let todos = [];
  return {
    name,
    todos,
  }
}

// it creates todo obj and pushes it in the provided project
function addTodo(project, title, description, duedate, priority) {
  let todo = CreateTodo(title, description, duedate, priority);
  project.todos.push(todo);
}

// created a defual project to be displayed on screen
let defaultProject = createProject('Default Project');
addTodo(defaultProject, 'run', 'you have to run', '2024-21-2', 'important');

// the new task btn is selected and an eventListener is added which generates a form
document.querySelector('.new-todo').addEventListener('click', generateFrom);

// form generator
function generateFrom() {
  let formContainer = document.getElementById('form-container');
  formContainer.innerHTML = `
<form action="" class="input-data-form">
  <input type="text" name="" id="title" required placeholder="title">
  <input type="text" name="" id="discription" required placeholder="discription">
  <input type="date" name="" id="duedate" required placeholder="2001-20-02">
  <input type="text" name="" id="priority" required placeholder="high">
  <button type="submit">Submit</button>
</form>`;
  let form = document.querySelector('.input-data-form');
  form.addEventListener('submit', handleForm);
}

// this funtion handles form submission
function handleForm(event) {
  event.preventDefault();
  let newTodo = fetchFormData();
  if (newTodo.title && newTodo.description && newTodo.dueDate && newTodo.priority) {
    addTodo(defaultProject,
      newTodo.title,
      newTodo.description,
      newTodo.dueDate,
      newTodo.priority);
  }
  let formContainer = document.getElementById('form-container');
  formContainer.innerHTML = '';
  displayTodos(defaultProject, 'todosContainer');

  show();
}

// call for a method that sets the name of the project
setProjectName(defaultProject, '.project-name');
// call for displaying all todos
displayTodos(defaultProject, 'todosContainer');

// it fetches data from form
function fetchFormData() {
  let title = document.getElementById('title').value;
  let description = document.getElementById('discription').value;
  let dueDate = document.getElementById('duedate').value;
  let priority = document.getElementById('priority').value;
  return {
    title,
    description,
    dueDate,
    priority
  };
}

// sets project name
function setProjectName(project, projectClass) {
  let projectName = document.querySelector(projectClass);
  projectName.textContent = project.name;
}
// fun of displaying all todos
function displayTodos(project, todosContainerId) {
  let todosContainer = document.getElementById(todosContainerId);
  todosContainer.innerHTML = '';
  todosContainer.innerHTML += `<h2>${project.name}</h2>`;
  let todos = project.todos;
  todos.forEach(todo => {
    todosContainer.innerHTML += `
    <div class="todo-item"><h2>${todo.title}</h2>
    <p>${todo.description}</p>
    <p>${todo.dueDate}</p>
    <strong>${todo.priority}</strong>
    <button class = "delete-btn" >Delete</button>
    </div>
    `;
  });
}

function show() {
  console.log(defaultProject.todos);
}


document.querySelector('.new-project').addEventListener('click', generateProjectForm);
document.querySelector('.new-project').addEventListener('click', generateNewProjectContainer);

function generateProjectForm() {
  let formContainer = document.querySelector('.project-form-container');
  formContainer.innerHTML = `
  <form class="project-form">
  <input type="text" required placeHolder="project name" id="project-name">
  <button type="submit">Submit</button>
  </form>
  `;
  let form = document.querySelector('.project-form');
  form.addEventListener('submit', handleProjectForm);
}

function generateNewProjectContainer() {
  document.querySelector('.new-project').setAttribute('disabled', true);
  let projectsContainer = document.querySelector('.projects-container');
  let newProjectContainer = document.createElement('div');
  newProjectContainer.classList.add('project');

  let newTaskBtn = document.createElement('button');
  newTaskBtn.classList.add('new-todo');
  newTaskBtn.textContent = 'New Task';

  let projectName = document.createElement('h2');
  projectName.classList.add('project-name');

  newProjectContainer.appendChild(newTaskBtn);
  newProjectContainer.appendChild(projectName);
  projectsContainer.appendChild(newProjectContainer);


}

function handleProjectForm(event) {
  event.preventDefault();
  let name = document.getElementById('project-name').value;
  let newProject = createProject(name);
  let projectName = document.querySelector('.project-name');
  projectName.textContent = newProject.name;
  let formContainer = document.querySelector('.project-form-container');
  formContainer.innerHTML = '';

  document.querySelector('')
}
