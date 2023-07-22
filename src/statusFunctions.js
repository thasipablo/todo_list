import { tasks, saveTasks } from './todoFunctions.js';

// Function to clear all completed tasks
const clearCompletedTasks = () => {
  const filteredTasks = tasks.filter((task) => !task.completed);

  // Update the indexes of the remaining tasks
  filteredTasks.forEach((task, index) => {
    task.index = index + 1;
  });

  // Clear the original tasks array
  tasks.length = 0; 
  tasks.push(...filteredTasks);

  saveTasks();
};

export default clearCompletedTasks;
