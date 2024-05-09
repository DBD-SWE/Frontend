import axios from 'axios';
import { cookies } from 'next/headers';

const BASE_URL = process.env.BACKEND_URL || 'http://localhost:8000';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  },
);
