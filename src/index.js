import "./style.css";
import { getTodosFromStorage } from "./modules/storage";
import addNewTodo from "./modules/form";
import displayTodos from "./modules/display";

// form submit handler
addNewTodo();

// Get todos from storage
getTodosFromStorage();

// Display To Do list
displayTodos();
