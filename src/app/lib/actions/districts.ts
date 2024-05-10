'use server';

import axios from '../api/axios';

export async function getAllDistricts() {
  try {
    const response = await axios.get(
      'commodities/districts/?limit=10&offset=0',
    );
    const data = response.data.results;
    return {
      status: 'ok',
      data: {
        districts: data,
      },
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'An error occurred while fetching data',
    };
  }
}
