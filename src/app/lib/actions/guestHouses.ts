'use server';

import axios from '../api/axios';

export async function getGuestHousesData() {
  try {
    const response = await axios.get('commodities/guesthouses');
    const data = response.data;
    return {
      status: 'ok',
      data: {
        guestHouses: data.results,
      },
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'An error occurred while fetching data',
    };
  }
}
