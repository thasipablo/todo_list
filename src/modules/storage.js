export const getTodosFromStorage = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

export const updateTodosInStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
};