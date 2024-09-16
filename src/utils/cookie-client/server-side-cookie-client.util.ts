import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

export class ServerSideCookieClient {
	static getAll(): {
		[key: string]: string;
	} {
		const cookie: {
			[key: string]: string;
		} = {};
		for (const [key, value] of Object.entries(cookies().getAll())) {
			cookie[key] = value.value;
		}
		return cookie;
	}

	static get(key: string): string | null {
		const cookieItem = cookies().get(key);

		return cookieItem?.value || null;
	}

	static set(key: string, value: string, options?: Partial<ResponseCookie> | undefined) {
		cookies().set(key, value, options);
	}

	static remove(key: string) {
		cookies().delete(key);
	}
}
