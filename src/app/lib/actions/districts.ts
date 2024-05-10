'use server';

import axios from '../api/axios';

export async function getAllDistricts() {
  console.log('Hi');
  try {
    const response = await axios.get(
      'commodities/districts/?limit=10&offset=0',
    );
    const data = response.data.results;
    console.log(data);
    return {
      status: 'ok',
      data: {
        districts: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      status: 'error',
      message: 'An error occurred while fetching data',
    };
  }
}
