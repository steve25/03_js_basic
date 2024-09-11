// constants
const APP_NAME = 'My Todo App';
const tasks = ['My first task', 'My second task', 'My third task'];

// elements
const logoElement = document.getElementById('logo');
const footerNameElement = document.getElementById('footer-name');
const taskListElement = document.getElementById('task-list');
const addTaskForm = document.getElementById('add-form');
const doneButtonElement = document.getElementById('done-button');
const deleteButtonElement = document.getElementById('delete-button');

// add new task event
addTaskForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const taskInput = document.getElementById('task-input');

  if (taskInput.value === '') return;

  tasks.push(taskInput.value);

  const liElement = createLiElement(taskInput.value);
  taskListElement.appendChild(liElement);

  taskInput.value = '';
});

// event listener for created buttons
document.addEventListener('click', function (event) {
  // done button
  if (event.target.id === 'done-button') {
    const title = event.target.parentNode.previousElementSibling;
    const classes = title.className.split(' ');

    if (classes.includes('done')) {
      title.classList.remove('done');
    } else {
      title.classList.add('done');
    }
  }

  // delete button
  if (event.target.id === 'delete-button') {
    const title = event.target.parentNode.previousElementSibling;

    const liElement = event.target.parentNode.parentNode;

    const index = tasks.indexOf(title.textContent);
    tasks.splice(index, 1);

    taskListElement.removeChild(liElement);
  }
});

function printAppName() {
  logo.textContent = APP_NAME;
  footerNameElement.textContent = APP_NAME;
}

function printTasks() {
  tasks.forEach((task) => {
    const liElement = createLiElement(task);

    taskListElement.appendChild(liElement);
  });
}

function createLiElement(task) {
  const liElement = document.createElement('li');

  liElement.innerHTML = `
          <p>${task}</p>
          <span>
            <button class="done-button" id="done-button">Done</button>
            <button class="delete-button" id="delete-button">Delete</button>
          </span>
  `;

  return liElement;
}

printAppName();
printTasks();
