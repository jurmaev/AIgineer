import axios from 'axios';

const baseURL = 'http://aigineer.ru:8080/';

export const api = axios.create({
  baseURL,
});
