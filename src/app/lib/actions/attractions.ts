'use server';

import axios from '../api/axios';

export async function getAttractionsData() {
  try {
    const response = await axios.get('commodities/attractions');
    const data = response.data;
    return {
      status: 'ok',
      data: {
        attractions: data.results,
      },
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'An error occurred while fetching data',
    };
  }
}
