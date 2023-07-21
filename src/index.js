// src/index.js

// Initialize tasks variable as let instead of const
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const initTodoList = () => {
  const todoList = document.querySelector('.todo-list');
  todoList.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = createTaskElement(task);
    todoList.appendChild(listItem);
  });
};

// Helper functions
const saveTasksToLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const addTask = (description) => {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  saveTasksToLocalStorage();
  initTodoList();
};

const deleteTask = (index) => {
  tasks.splice(index - 1, 1);

  tasks.forEach((task, i) => {
    task.index = i + 1;
  });

  saveTasksToLocalStorage();
  initTodoList();
};

const editTask = (index, newDescription) => {
  const task = tasks.find((task) => task.index === index);

  if (task) {
    task.description = newDescription;
    saveTasksToLocalStorage();
    initTodoList();
  }
};

const createTaskElement = (task) => {
  const listItem = document.createElement('li');
  listItem.classList.add('todo-item');
  listItem.dataset.index = task.index;

  const descriptionSpan = document.createElement('span');
  descriptionSpan.textContent = task.description;
  descriptionSpan.contentEditable = true;
  listItem.appendChild(descriptionSpan);

  descriptionSpan.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      descriptionSpan.blur(); // Remove focus to confirm the edit
    }
  });

  descriptionSpan.addEventListener('blur', () => {
    // Edit the task only if the content has changed
    const newDescription = descriptionSpan.textContent.trim();
    if (task.description !== newDescription) {
      editTask(task.index, newDescription);
    }
  });

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-btn');
  removeButton.innerHTML = '&times;';
  removeButton.addEventListener('click', () => {
    deleteTask(task.index);
  });
  listItem.appendChild(removeButton);

  return listItem;
};

document.addEventListener('DOMContentLoaded', () => {
  initTodoList();

  const form = document.querySelector('.form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoInput = document.querySelector('.todo-input');
    const description = todoInput.value.trim();
    if (description) {
      addTask(description);
      todoInput.value = '';
    }
  });

  const clearCompletedButton = document.querySelector('.clear-completed-btn');
  clearCompletedButton.addEventListener('click', () => {
    tasks = tasks.filter((task) => !task.completed);
    tasks.forEach((task, i) => {
      task.index = i + 1;
    });
    saveTasksToLocalStorage();
    initTodoList();
  });

  const todoList = document.querySelector('.todo-list');
  todoList.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      e.target.focus();
    }
  });
});
