'use server';
import z from 'zod';
import axios from '../api/axios';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { image } from '@nextui-org/theme';
const BACKEND_URL = process.env.BACKEND_URL;

// Input validation schema
const loginSchma = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function login(prevState: any, formData: FormData) {
  'use server';
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

const fillUserInfoSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  image: z.string().optional(),
});

export async function fillUserInfo(formData: FormData) {
  'use server';
  try {
    const userInfo = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      image: formData.get('image'),
    };

    fillUserInfoSchema.parse(userInfo);

    const res = await axios.post('/auth/userinfo/', userInfo);

    console.log('User profile created successfully.', res.data);
    return {
      message: 'User profile created successfully.',
      error: '',
    };
  } catch (err: any) {
    console.error('Error creating user profile:', err);
    if (err.response && err.response.status === 401) {
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

export async function uploadImage(formData: FormData) {
  'use server';
  try {
    const res = await axios.post('/images/upload/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(res.data);

    if (res.data && res.data.image_url) {
      return {
        message: 'Image uploaded successfully.',
        image_id: res.data.image_id,
      };
    }

    return {
      error: 'Failed to upload image.',
      message: 'error',
    };
  } catch (err: any) {
    console.error('Error uploading image:', err);
    return {
      error: 'An error occurred, please try again.',
      message: 'error',
    };
  }
}

export async function getMe() {
  'use server';

  const accessToken = cookies().get('access');

  try {
    const response = await fetch(`${BACKEND_URL}/auth/userinfo/`, {
      headers: {
        Authorization: `Bearer ${accessToken?.value}`,
      },
    });
    return response.json();
  } catch (err) {
    return null;
  }
}
