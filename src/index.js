import "./style.css";

import {
  tasks,
  addTask,
  deleteTask,
  editTask,
  toggleTaskCompletion,
} from "./todoFunctions.js";

import { clearCompletedTasks } from "./statusFunctions.js";

const renderTasks = () => {
  const app = document.getElementById("app");
  app.innerHTML = ""; // Clear the previous content

  const list = document.createElement("ul");
  list.classList.add("todo-list");

  tasks
    .sort((a, b) => a.index - b.index)
    .forEach((task, index) => {
      const listItem = document.createElement("li");
      listItem.classList.add("component");
      listItem.classList.add("todo-item");

      const description = document.createElement("div");
      description.classList.add("todo-item-description");

      // Create a checkbox to toggle completion status
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => {
        toggleTaskCompletion(index);
        renderTasks(); // Update the list after toggling completion status
      });

      // Create a text input for editing the task description

      const input = document.createElement("input");
      input.type = "text";
      input.classList.add("todo-description-text");
      input.value = task.description;
      input.addEventListener("input", (e) => {
        editTask(index, e.target.value);
      });

      description.appendChild(checkbox);
      description.appendChild(input);

      // Add an event listener for the Enter key press to finish editing
      input.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          input.blur(); // Remove focus from the input to finish editing
        }
      });

      // Create a delete button for removing the task
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("remove-btn");
      deleteButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
        </svg>
      `;
      deleteButton.addEventListener("click", () => {
        deleteTask(index);
        renderTasks(); // Update the list after deleting the task
      });

      listItem.appendChild(description);
      listItem.appendChild(deleteButton);
      list.appendChild(listItem);
    });

  app.appendChild(list);

  // Create "Clear all completed" button
  const clearCompletedButton = document.querySelector(".clear-completed-btn");
  clearCompletedButton.addEventListener("click", () => {
    clearCompletedTasks();
    renderTasks();
  });
};

const handleAddTask = (e) => {
  e.preventDefault();
  const inputField = document.querySelector(".todo-input");
  const taskDescription = inputField.value.trim();
  if (taskDescription !== "") {
    addTask(taskDescription);
    inputField.value = "";
    renderTasks();
  }
};

const form = document.querySelector(".form");
form.addEventListener("submit", handleAddTask);

// Render the tasks on page load
renderTasks();
