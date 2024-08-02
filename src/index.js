import './style.css';

// This factory creates a todo object
function createTodo(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority,
  };
}

// This factory creates a project object
function createProject(name) {
  let todos = [];
  return {
    name,
    todos,
  };
}

// It creates todo obj and pushes it in the provided project
function addTodo(project, title, description, duedate, priority) {
  let todo = createTodo(title, description, duedate, priority);
  project.todos.push(todo);
}

// Create a default project to be displayed on screen
let defaultProject = JSON.parse(localStorage.getItem('localCopyOfDefaultProject')) || createProject('Default Project');


// Save the updated project to local storage
function saveProjectToLocalStorage(project) {
  localStorage.setItem('localCopyOfDefaultProject', JSON.stringify(project));
}

saveProjectToLocalStorage(defaultProject);

// The new task button is selected and an eventListener is added which generates a form
document.querySelector('.new-todo').addEventListener('click', generateFrom);

// Form generator
function generateFrom() {
  let formContainer = document.getElementById('form-container');
  formContainer.innerHTML = `
    <form action="" class="input-data-form">
      <input type="text" name="" id="title" required placeholder="title">
      <input type="text" name="" id="description" required placeholder="description">
      <div class="date-container">
        <label for="duedate">Due Date</label>
        <input type="date" name="" id="duedate" required>
      </div>
      <div class="priority-container">
        <label for="priority">Priority</label>
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

// This function handles form submission
function handleForm(event) {
  event.preventDefault();
  let newTodo = fetchFormData();
  if (newTodo.title && newTodo.description && newTodo.dueDate && newTodo.priority) {
    addTodo(defaultProject, newTodo.title, newTodo.description, newTodo.dueDate, newTodo.priority);
    saveProjectToLocalStorage(defaultProject);
  }
  let formContainer = document.getElementById('form-container');
  formContainer.innerHTML = '';
}

// Call for a method that sets the name of the project
setProjectName(defaultProject, '.project-name');
// Call for displaying all todos
displayTodos(defaultProject, 'todosContainer');

// It fetches data from form
function fetchFormData() {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let dueDate = document.getElementById('duedate').value;
  let priority = document.getElementById('priority').value;
  return {
    title,
    description,
    dueDate,
    priority
  };
}

// Sets project name
function setProjectName(project, projectClass) {
  let projectName = document.querySelector(projectClass);
  projectName.textContent = project.name;
}

// Function for displaying all todos
function displayTodos(project, todosContainerId) {
  let todosContainer = document.getElementById(todosContainerId);
  todosContainer.innerHTML = '';
  todosContainer.innerHTML += `<h2>${project.name}</h2>`;
  let todos = project.todos;
  todos.forEach((todo, index) => {
    todosContainer.innerHTML += `
      <div class="todo-item">
        <div class="task-header">
          <h2>${todo.title}</h2>
          <p>${todo.dueDate}</p>
          <strong>${todo.priority}</strong>
          <button class="delete-btn" data-index="${index}">Delete</button>
        </div>
        <div class="task-details">
          <p class="description">${todo.description}</p>
        </div>
      </div>`;
  });

  deleteTodo();
}

document.querySelector('.new-project').addEventListener('click', generateProjectForm);

// Generates a form that asks for project name
function generateProjectForm() {
  let formContainer = document.querySelector('.project-form-container');
  formContainer.innerHTML = `
    <form class="project-form">
      <input type="text" required placeholder="project name" id="project-name">
      <button type="submit">Submit</button>
    </form>`;
  let form = document.querySelector('.project-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchesProjectName('project-name');
    formContainer.innerHTML = '';
    createNewProject();
  });
}

// Stores new projects names
let allNewProjects = [];

// Gets values from generated form and pushes it to the projectNames array
function fetchesProjectName(projectId) {
  let projectName = document.getElementById(projectId).value;
  allNewProjects.push(projectName);
}

// Creates new project for all the names in projectNames array
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

function deleteTodo() {
  let deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let index = e.target.getAttribute('data-index');
      defaultProject.todos.splice(index, 1);
      saveProjectToLocalStorage(defaultProject);
      displayTodos(defaultProject, 'todosContainer');
    });
    
  });
}
