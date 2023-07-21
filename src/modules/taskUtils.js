// taskUtils.js

// Helper functions
export const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const addTask = (tasks, description) => {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  saveTasksToLocalStorage(tasks);
};

export const deleteTask = (tasks, index) => {
  tasks.splice(index - 1, 1);

  tasks.forEach((task, i) => {
    task.index = i + 1;
  });

  saveTasksToLocalStorage(tasks);
};

export const editTask = (tasks, index, newDescription) => {
  const task = tasks.find((task) => task.index === index);

  if (task) {
    task.description = newDescription;
    saveTasksToLocalStorage(tasks);
  }
};
