'use server';

import { redirect } from 'next/navigation';
import axios from '../api/axios';
import { CreateAttractionFormData } from '../types';

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

export async function createAttraction(attraction: CreateAttractionFormData) {
  try {
    const res = await axios.post('commodities/attractions/', attraction);
  } catch (error) {}
  redirect(`/services/attractions/`);
}

export async function getAttraction(id: number) {
  try {
    const response = await axios.get(`commodities/attractions/${id}`);
    return {
      status: 'ok',
      data: response.data,
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'An error occurred while fetching data',
    };
  }
}
