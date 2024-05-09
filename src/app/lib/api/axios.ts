import axios from 'axios';
import { cookies } from 'next/headers';

const BASE_URL = process.env.BACKEND_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  function (request) {
    const accessToken = cookies().get('access')?.value;
    request.headers.Authorization = `Bearer ${accessToken}`;
    return request;
  },
  function (error) {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  },
);

export default api;
