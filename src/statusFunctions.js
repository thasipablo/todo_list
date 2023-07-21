import { tasks, saveTasks } from './todoFunctions';

// Function to clear all completed tasks
const clearCompletedTasks = () => {
  tasks.forEach((task, index) => {
    if (task.completed) {
      tasks.splice(index, 1); 
    }
  });

  tasks.forEach((task, index) => {
    task.index = index + 1; 
  });

  saveTasks();
};

export { clearCompletedTasks };