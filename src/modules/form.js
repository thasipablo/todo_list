import displayTodos from "./display";
import { getTodosFromStorage, updateTodosInStorage } from "./storage";

const addNewTodo = () => {
  const form = document.querySelector(".form");
  const todos = getTodosFromStorage();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let todoText = form.querySelector(".todo-input");
    if (todoText.value) {
      const todo = {
        index: todos.length,
        description: todoText.value,
        completed: false,
      };
      todos.push(todo);

      updateTodosInStorage(todos);
      displayTodos();

      todoText.value = "";
    }
  });
};

export default addNewTodo;
