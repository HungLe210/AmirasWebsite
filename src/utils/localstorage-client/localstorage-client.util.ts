/* eslint-disable no-unused-vars */

export class LocalStorageClient {
	// Get an item in Local Storage
	static getItem(
		key: string,
		encrypt?: (plain: string) => string,
		decrypt?: (cipher: string) => string,
	) {
		const item = localStorage.getItem(encrypt ? encrypt(key) : key);
		return item ? (decrypt ? decrypt(item) : item) : null;
	}

	// Set an item in Local Storage
	static SetItem(key: string, value: string, encrypt?: (plain: string) => string) {
		localStorage.setItem(encrypt ? encrypt(key) : key, encrypt ? encrypt(value) : value);
	}

	// Remove an item in Local Storage
	static RemoveItem(key: string, encrypt?: (plain: string) => string) {
		localStorage.removeItem(encrypt ? encrypt(key) : key);
	}

	// Clear all items
	static Clear() {
		localStorage.clear();
	}

	// Get a key name by its index
	static GetKeyName(index: number, decrypt?: (cipher: string) => string) {
		const key = localStorage.key(index);
		return key ? (decrypt ? decrypt(key) : key) : null;
	}

	// Get the lenght of Local Storage
	static Length() {
		return localStorage.length;
	}
}
