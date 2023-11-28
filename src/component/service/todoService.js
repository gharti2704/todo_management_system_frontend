import axios from 'axios';
import { getToken } from './authService';

const BASED_API_URL = 'http://localhost:8080/api/todos';

// Add a request interceptor to add the token to the request header
axios.interceptors.request.use(
  function (config) {
    config.headers.Authorization = getToken();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const getTodos = () => {
  return axios.get(BASED_API_URL);
};

export const createTodo = (todo) => {
  return axios.post(`${BASED_API_URL}/create`, todo);
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

export const completeTodo = (id) => {
  return axios.patch(`${BASED_API_URL}/complete/${id}`);
};

export const uncompleteTodo = (id) => {
  return axios.patch(`${BASED_API_URL}/uncomplete/${id}`);
};
