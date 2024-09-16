import { CRYPTO } from '@configs';
import * as crypto from 'crypto';

export function encrypt(text: string): string {
	const cipher = crypto.createCipheriv(CRYPTO.ALGORITHM, CRYPTO.KEY, CRYPTO.IV);
	let encrypted = cipher.update(text, 'utf-8', 'hex');
	encrypted += cipher.final('hex');
	return encrypted;
}
