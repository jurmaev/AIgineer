import axios from 'axios';

const baseURL = 'https://aigineer.ru/api';

export const api = axios.create({ baseURL, withCredentials: true });
