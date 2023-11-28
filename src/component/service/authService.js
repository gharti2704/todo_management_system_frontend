import axios from 'axios';

const BASED_API_URL = 'http://localhost:8080/api/auth';

export const registerUser = (user) => {
  return axios.post(`${BASED_API_URL}/register`, user);
};

export const login = (user) => {
  return axios.post(`${BASED_API_URL}/login`, user);
};

export const logout = () => {
  return axios.get(`${BASED_API_URL}/logout`);
};
