'use server';

import axios from '../api/axios';
import { CreateGuestHouseFormData } from '../types';
import { redirect } from 'next/navigation';

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

export async function createGuestHouse(guestHouse: CreateGuestHouseFormData) {
  try {
    const res = await axios.post('commodities/guesthouses/', {
      ...guestHouse,
      food_type: 'VE',
    });
    console.log('ok');
  } catch (error) {
    console.log(error);
  }
  redirect('/services/guest-houses');
}
