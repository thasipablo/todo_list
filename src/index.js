import './style.css';
import { getTodosFromStorage } from './modules/storage.js';
import { removeTodo } from './modules/todoUtils.js';
import addNewTodo from './modules/newTodo.js';
import displayTodos from './modules/display.js';

// CRUD functions for To Do list
addNewTodo();
removeTodo();

// Get todos from storage
getTodosFromStorage();

// Display To Do list
displayTodos();
