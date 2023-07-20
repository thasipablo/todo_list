import displayTodos from "./display";
import { getTodosFromStorage, updateTodosInStorage } from "./storage";

export const addNewTodo = () => {
  const form = document.querySelector(".form");
  const todos = getTodosFromStorage();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let todoText = form.querySelector(".todo-input");
    if (todoText.value) {
      const todo = {
        index: todos.length + 1,
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

export const removeTodo = (description) => {
  const todos = getTodosFromStorage();
  const filteredTodos = todos.filter((todo) => todo.description != description);

  // reset indices
  const cleanTodos = [];
  filteredTodos.forEach((todo, index) => {
    cleanTodos.push({ ...todo, index: index + 1 });
  });

  updateTodosInStorage(cleanTodos);
  displayTodos();
};
