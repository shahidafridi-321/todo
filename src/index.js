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
addTodo(defaultProject, 'run', 'you have to run', '2024-21-2', 'Low');

// the new task btn is selected and an eventListener is added which generates a form
document.querySelector('.new-todo').addEventListener('click', generateFrom);

// form generator
function generateFrom() {
  let formContainer = document.getElementById('form-container');
  formContainer.innerHTML = `
<form action="" class="input-data-form">
  <input type="text" name="" id="title" required placeholder="title">
  <input type="text" name="" id="discription" required placeholder="discription">
  <div class="date-container">
  <label for = "duedate">DueDate</label>
  <input type="date" name="" id="duedate" required >
  </div>
  <div class="priority-container">
  <label for = "priority">Priority</label>
  <select name="" id="priority">
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high" selected>High</option>
  </select>
  </div>
  <button type="submit">Submit</button>
</form>`;
  let form = document.querySelector('.input-data-form');
  form.addEventListener('submit', handleForm);
  form.addEventListener('submit', () => {
    displayTodos(defaultProject, 'todosContainer');

  });
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


document.querySelector('.new-project').addEventListener('click', generateProjectForm);

// generates a form that asks for project name
function generateProjectForm() {
  let formContainer = document.querySelector('.project-form-container');
  formContainer.innerHTML = `
  <form class="project-form">
  <input type="text" required placeHolder="project name" id="project-name">
  <button type="submit">Submit</button>
  </form>
  `;
  let form = document.querySelector('.project-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchesProjectName('project-name');
    formContainer.innerHTML = '';
    createNewProject();
  });
}

// stores new projects names
let allNewProjects = [];

// gets values from generated form and puhes it to the projectNames array
function fetchesProjectName(projectId) {
  let projectName = document.getElementById(projectId).value;
  allNewProjects.push(projectName);
}

// creates new project for all the names in projectNames array
function createNewProject() {
  let projectContainer = document.querySelector('.projects');
  projectContainer.innerHTML = '';
  allNewProjects.forEach(project => {
    let div = document.createElement('div');
    div.classList.add('project');
    let name = document.createElement('h2');
    name.classList.add('project-name');
    name.textContent = project;
    div.appendChild(name);
    projectContainer.appendChild(div);
  });
}

