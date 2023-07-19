import './style.css';

const todos = [
  {
    index: 1,
    completed: true,
    description: 'Complete responsiveness',
  },
  {
    index: 2,
    completed: false,
    description: 'Call Saul',
  },
];

const todoListTag = document.querySelector('.todo-list');

todos.forEach((todo) => {
  const todoElement = document.createElement('li');
  todoElement.classList.add('todo-item');

  const description = document.createElement('div');
  description.classList.add('todo-item-description');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  const descriptionText = document.createElement('div');
  descriptionText.innerHTML = todo.description;
  const icon = document.createElement('div');
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
