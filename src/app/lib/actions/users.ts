'use server';

import axios from '../api/axios';

export async function getUsers() {
  try {
    const response = await axios.get('users/users');
    const data = response.data;
    return {
      status: 'ok',
      data: {
        users: data.results,
      },
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'An error occurred while fetching data',
    };
  }
}
