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
  async function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = cookies().get('refresh')?.value;
      if (refreshToken) {
        try {
          const refreshResponse = await axios.post(
            `${BASE_URL}/auth/token/refresh/`,
            {
              refresh: refreshToken,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            },
          );

          if (refreshResponse.status === 200) {
            const { access: newAccessToken } = refreshResponse.data;
            cookies().set('access', newAccessToken); // Update the access token in the cookies
            api.defaults.headers.common['Authorization'] =
              `Bearer ${newAccessToken}`; // Update the access token in axios defaults
            originalRequest.headers['Authorization'] =
              `Bearer ${newAccessToken}`; // Update the access token in the original request
            return api(originalRequest); // retry the original request with the new token
          }
        } catch (refreshError) {
          console.error('Error during token refresh', refreshError);
          // Handle a failed refresh (e.g., redirect to login or throw an error)
        }
      }
    }
    return Promise.reject(error);
  },
);

export default api;
