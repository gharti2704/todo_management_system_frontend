import axios from 'axios';

const BASED_API_URL = 'http://localhost:8080/api/auth';

export const registerUser = (user) =>
  axios.post(`${BASED_API_URL}/register`, user);

export const login = (user) => axios.post(`${BASED_API_URL}/login`, user);

export const logout = () => axios.get(`${BASED_API_URL}/logout`);

export const setToken = (token) => localStorage.setItem('token', token);

export const getToken = () => localStorage.getItem('token');

export const saveLoggedInUser = (username) =>
  sessionStorage.setItem('authenticatedUser', JSON.stringify(username));

export const isUserLoggedIn = () =>
  sessionStorage.getItem('authenticatedUser') ? true : false;

export const getLoggedInUser = () =>
  sessionStorage.getItem('authenticatedUser');
