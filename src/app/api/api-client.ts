import axios from 'axios';

// @ts-ignore
export const apiClient = axios.create({
  baseURL: 'http://localhost:8080'
});
