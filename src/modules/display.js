import { getTodosFromStorage } from './storage.js';
import { completeTodo, removeTodo, updateTodo } from './todoCrud.js';

const displayTodos = () => {
  const todoListTag = document.querySelector('.todo-list');

  // Clean the todo list from the pages first
  todoListTag.innerHTML = '';

  const todos = getTodosFromStorage();
  todos.forEach((todo) => {
    const todoElement = document.createElement('li');
    todoElement.classList.add('todo-item');

    const description = document.createElement('div');
    description.classList.add('todo-item-description');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = todo.completed;
    checkBox.classList.add('completed-check');
    const descriptionText = document.createElement('input');
    descriptionText.type = 'text';
    descriptionText.classList.add('todo-description-text');
    descriptionText.value = todo.description;

    const icon = document.createElement('button');
    icon.classList.add('remove-btn');
    icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
      </svg>
    `;

    description.appendChild(checkBox);
    description.appendChild(descriptionText);
    todoElement.appendChild(description);
    todoElement.appendChild(icon);
    todoElement.classList.add('component');
    todoListTag.appendChild(todoElement);
  });

  // Add click event to remove buttons
  const removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const todoItem = e.target.closest('.todo-item');
      const description = todoItem.querySelector('.todo-description-text');
      removeTodo(description.value);
    });
  });

  // Add click event to complete checkboxes
  const checkboxes = document.querySelectorAll('.completed-check');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
      const todoItem = checkbox.closest('.todo-item');
      const description = todoItem.querySelector('.todo-description-text');
      completeTodo(description.value, checkbox.checked);
    });
  });

  // Add click event to complete checkboxes
  const todoDescriptions = document.querySelectorAll('.todo-description-text');
  let focus = false;
  let prevValue = '';
  todoDescriptions.forEach((description) => {
    description.addEventListener('focus', (e) => {
      focus = true;
      if (focus) {
        prevValue = e.target.value;
        focus = false;
      }
    });
    description.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && description.value !== '') {
        updateTodo(description.value, prevValue);
      }
    });
  });
};

export default displayTodos;
