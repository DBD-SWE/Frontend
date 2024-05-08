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

export async function getMe() {
  try {
    const res = await fetch('http://localhost:8000/auth/userinfo/', {
      headers: {
        Authorization: `Bearer ${cookies().get('access')?.value}`,
      },
    });
    return res.status;
  } catch (err) {
    console.log(err);
    return null;
  }
}

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

    if (err.response.status === 401) {
      return {
        error: 'Invalid credentials, please try again.',
        message: 'error',
      };
    }

    return {
      error: 'An error occurred, please try again.',
      message: 'error',
    };
  }
}
