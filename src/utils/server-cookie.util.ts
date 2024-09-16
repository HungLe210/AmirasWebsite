'use server';

import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

export async function createCookie(options: ResponseCookie) {
  cookies().set(options);
}

export async function deleteCookie(name: string) {
  cookies().delete(name);
}
