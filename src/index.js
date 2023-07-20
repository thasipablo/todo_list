import "./style.css";
import { getTodosFromStorage } from "./modules/storage";
import { addNewTodo, removeTodo } from "./modules/todoCrud";
import displayTodos from "./modules/display";

// CRUD functions for To Do list
addNewTodo();
removeTodo();

// Get todos from storage
getTodosFromStorage();

// Display To Do list
displayTodos();
