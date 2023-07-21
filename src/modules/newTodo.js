import displayTodos from './display.js';
import { getTodosFromStorage, updateTodosInStorage } from './storage.js';

const addNewTodo = () => {
  const form = document.querySelector('.form');
  const todos = getTodosFromStorage();
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoText = form.querySelector('.todo-input');
    if (todoText.value) {
      const todo = {
        index: todos.length + 1,
        description: todoText.value,
        completed: false,
      };
      todos.push(todo);

      updateTodosInStorage(todos);
      displayTodos();

      todoText.value = '';
    }
  });
};

export default addNewTodo;
