import * as crypto from 'crypto';

export const CRYPTO = {
	ALGORITHM: 'aes-256-cbc',
	KEY: crypto.randomBytes(32),
	IV: crypto.randomBytes(16),
};
