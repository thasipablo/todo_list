import {
  tasks, addTask, deleteTask, editTask, toggleTaskCompletion,
} from './todoFunctions';

function renderTasks() {
  const app = document.getElementById('app');
  app.innerHTML = ''; // Clear the previous content

  const list = document.createElement('ul');

  tasks
    .sort((a, b) => a.index - b.index)
    .forEach((task, index) => {
      const listItem = document.createElement('li');

      // Create a checkbox to toggle completion status
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', () => {
        toggleTaskCompletion(index);
        renderTasks(); // Update the list after toggling completion status
      });

      // Create a text input for editing the task description
      const input = document.createElement('input');
      input.type = 'text';
      input.value = task.description;
      input.addEventListener('input', (e) => {
        editTask(index, e.target.value);
      });

      // Add an event listener for the Enter key press to finish editing
      input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          input.blur(); // Remove focus from the input to finish editing
        }
      });

      // Create a delete button for removing the task
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        deleteTask(index);
        renderTasks(); // Update the list after deleting the task
      });

      listItem.appendChild(checkbox);
      listItem.appendChild(input);
      listItem.appendChild(deleteButton);
      list.appendChild(listItem);
    });

  app.appendChild(list);
}

function handleAddTask() {
  const inputField = document.getElementById('task-input');
  const taskDescription = inputField.value.trim();

  if (taskDescription !== '') {
    addTask(taskDescription);
    inputField.value = '';
    renderTasks(); // Update the list after adding the new task
  }
}

document.getElementById('add-task-btn').addEventListener('click', handleAddTask);

// Render the tasks on page load
renderTasks();
