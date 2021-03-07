import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getUsers = () => axios.get('/users').then(({ data }) => data);

export const getTodos = (id) =>
  axios.get(`/todos?userId=${id}`).then(({ data }) => data);

export const createTodo = (todo) =>
  axios.post('/todos', todo).then(({ data }) => data);

export const updateTodo = (id, todo) =>
  axios.patch(`/todos/${id}`, todo).then(({ data }) => data);
