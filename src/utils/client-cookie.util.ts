'use client';

import { cookies } from 'next/headers';

export function getAllCookiesByName(name: string) {
  return cookies().getAll(name);
}

export function getAllCookies() {
  return cookies().getAll();
}

export function getCookie(name: string) {
  return cookies().get(name);
}

export function hasCookie(name: string): boolean {
  return cookies().has(name);
}
