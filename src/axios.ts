import axios from 'axios';

const baseURL = 'http://158.160.61.231:8080/';

export const api = axios.create({
  baseURL,
});
