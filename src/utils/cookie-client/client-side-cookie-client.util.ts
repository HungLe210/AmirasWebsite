'use client';
import Cookies from 'js-cookie';

export class ClientSideCookieClient {
	static getAll(): {
		[key: string]: string;
	} {
		return Cookies.get();
	}

	static get(key: string): string | null {
		return Cookies.get(key) || null;
	}

	static set(name: string, value: string, options?: Cookies.CookieAttributes) {
		Cookies.set(name, value, options);
	}

	static remove(name: string, options?: Cookies.CookieAttributes) {
		Cookies.remove(name, options);
	}
}
