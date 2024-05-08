'use server';
import z from 'zod';
import axios from '../api/axios';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

// Input validation schema
const loginSchma = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function login(prevState: any, formData: FormData) {
  try {
    // Parse and validate input
    const { email, password } = loginSchma.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    const res = await axios.post('/auth/login/', { email, password });

    cookies().set('refresh', res.data.refresh);
    cookies().set('access', res.data.access);

    redirect('../');

    return { message: 'success' };
  } catch (err: any) {
    // To override NEXT_REDIRECT bug when wrapped in try catch.
    if (err.message === 'NEXT_REDIRECT') {
      redirect('../');
    }

    // Temporary because backend returns 500 on validation error.
    return {
      error: 'Invalid credentials, please try again.',
      message: 'error',
    };
  }
}
