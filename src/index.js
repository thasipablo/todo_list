import './style.css';
import { getTodosFromStorage } from './modules/storage.js';
import { addNewTodo, removeTodo } from './modules/todoCrud.js';
import displayTodos from './modules/display.js';

// CRUD functions for To Do list
addNewTodo();
removeTodo();

// Get todos from storage
getTodosFromStorage();

// Display To Do list
displayTodos();
