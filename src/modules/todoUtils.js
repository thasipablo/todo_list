import { getTodosFromStorage, updateTodosInStorage } from './storage.js';

export const completeTodo = (description) => {
  const todos = getTodosFromStorage();
  const todo = todos.find((todo) => todo.description === description);

  // update todo completed state
  todo.completed = !todo.completed;

  const index = todos.indexOf(todo);
  todos[index] = todo;

  updateTodosInStorage(todos);
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
};

export const updateTodo = (description, prevValue) => {
  const todos = getTodosFromStorage();
  const todo = todos.find((todo) => todo.description === prevValue);

  // update todo description
  todo.description = description;

  const index = todos.indexOf(todo);
  todos[index] = todo;

  updateTodosInStorage(todos);
};
