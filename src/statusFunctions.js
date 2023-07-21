import { tasks, saveTasks } from './todoFunctions';

// Function to set the completed status of a task
function setCompletedStatus(index, completed) {
  tasks[index].completed = completed;
  saveTasks();
}

// Function to clear all completed tasks
function clearCompletedTasks() {
  tasks.forEach((task, index) => {
    if (task.completed) {
      tasks.splice(index, 1); // Remove completed task from the array
    }
  });

  tasks.forEach((task, index) => {
    task.index = index + 1; // Update the indexes of the remaining tasks
  });

  saveTasks(); // Save the modified tasks array to local storage
}

export { setCompletedStatus, clearCompletedTasks };
