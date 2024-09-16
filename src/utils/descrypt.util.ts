import { CRYPTO } from '@configs';
import * as crypto from 'crypto';

export function decrypt(encryptedText: string): string {
	const decipher = crypto.createDecipheriv(CRYPTO.ALGORITHM, CRYPTO.KEY, CRYPTO.IV);
	let decrypted = decipher.update(encryptedText, 'hex', 'utf-8');
	decrypted += decipher.final('utf-8');
	return decrypted;
}
