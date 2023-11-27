import axios from 'axios';

const BASED_API_URL = 'http://localhost:8080/api/todos';

export const getTodos = () => {
  return axios.get(BASED_API_URL);
};

export const createTodo = (todo) => {
  return axios.post(BASED_API_URL, todo);
};

export const updateTodo = (id, todo) => {
  return axios.put(`${BASED_API_URL}/update/${id}`, todo);
};

export const deleteTodo = (id) => {
  return axios.delete(`${BASED_API_URL}/delete/${id}`);
};

export const getTodoById = (id) => {
  return axios.get(`${BASED_API_URL}/${id}`);
};
