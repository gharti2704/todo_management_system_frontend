import axios from 'axios';

const BASED_API_URL = 'http://localhost:8080/api/auth';

export const registerUser = (user) =>
  axios.post(`${BASED_API_URL}/register`, user);

export const login = (user) => axios.post(`${BASED_API_URL}/login`, user);

export const setToken = (token) => localStorage.setItem('token', token);

export const getToken = () => localStorage.getItem('token');

export const saveLoggedInUser = (username, role, name) => {
  sessionStorage.setItem('authenticatedUser', username);
  sessionStorage.setItem('role', role);
  sessionStorage.setItem('name', name);
};

export const isUserLoggedIn = () =>
  sessionStorage.getItem('authenticatedUser') ? true : false;

export const getLoggedInUser = () =>
  sessionStorage.getItem('authenticatedUser');

export const logout = () => {
  // axios.get(`${BASED_API_URL}/logout`);
  sessionStorage.clear();
  localStorage.clear();
};

export const isAdminUser = () =>
  sessionStorage.getItem('role') === 'ROLE_ADMIN' ? true : false;

export const getName = () => sessionStorage.getItem('name');
