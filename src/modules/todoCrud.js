import displayTodos from './display.js';
import { getTodosFromStorage, updateTodosInStorage } from './storage.js';

export const addNewTodo = () => {
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

export const removeTodo = (description) => {
  const todos = getTodosFromStorage();
  const filteredTodos = todos.filter((todo) => todo.description !== description);

  // reset indices
  const cleanTodos = [];
  filteredTodos.forEach((todo, index) => {
    cleanTodos.push({ ...todo, index: index + 1 });
  });

  updateTodosInStorage(cleanTodos);
  displayTodos();
};

export const completeTodo = (description) => {
  const todos = getTodosFromStorage();
  const todo = todos.find((todo) => todo.description === description);

  // update todo completed state
  todo.completed = !todo.completed;

  const index = todos.indexOf(todo);
  todos[index] = todo;

  updateTodosInStorage(todos);
  displayTodos();
};

export const updateTodo = (description, prevValue) => {
  const todos = getTodosFromStorage();
  const todo = todos.find((todo) => todo.description === prevValue);

  // update todo description
  todo.description = description;

  const index = todos.indexOf(todo);
  todos[index] = todo;

  updateTodosInStorage(todos);
  displayTodos();
};
