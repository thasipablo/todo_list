// Get tasks from local storage or initialize an empty array if no tasks exist
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to save tasks in local storage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a new task
function addTask(description) {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  saveTasks();
}

// Function to delete a task by its index
function deleteTask(index) {
  tasks.splice(index, 1);
  tasks.forEach((task, i) => {
    task.index = i + 1;
  });
  saveTasks();
}

// Function to edit a task description by its index
function editTask(index, newDescription) {
  tasks[index].description = newDescription;
  saveTasks();
}

// Function to toggle the completion status of a task by its index
function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
}

export { tasks, addTask, deleteTask, editTask, toggleTaskCompletion, saveTasks };
