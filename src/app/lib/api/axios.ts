import axios from 'axios';
import { cookies } from 'next/headers';
import { getRefreshToken } from './auth/requests';

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
    console.log('fired');
    const prevRequest = error.config;
    if (error.response.status === 401 && !prevRequest.sent) {
      prevRequest.sent = true;
      const refreshToken = cookies().get('refresh')?.value as string;
      const newAccessToken = await getRefreshToken(refreshToken);
      if (newAccessToken) {
        cookies().set('access', newAccessToken);
      }
      return Promise.reject(error);
    }
  },
);
