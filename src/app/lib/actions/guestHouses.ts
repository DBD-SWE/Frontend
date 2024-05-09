'use server';

import axios from '../api/axios';
import { z } from 'zod';
import { CreateGuestHouseFormData, GuestHouse } from '../types';
import { RedirectType, redirect } from 'next/navigation';

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
  console.log(guestHouse);
  redirect('/services/guesthouses', RedirectType.replace);
}
