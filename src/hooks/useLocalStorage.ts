/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from 'react';

export function useLocalStorage<V>(
	key: string,
	fallbackValue?: V,
): [V | null, (newValue: V | null) => void] {
	const [value, setValue] = useState<V | null>(fallbackValue || null);

	const changeValue = useCallback(
		(newValue: V | null) => {
			setValue(newValue);
			localStorage.setItem(key, JSON.stringify(newValue));
		},
		[key, setValue],
	);

	useEffect(() => {
		try {
			setValue(JSON.parse(localStorage.getItem(key) || 'null'));
		} catch (err) {
			setValue(fallbackValue || null);
		}
	}, [key, fallbackValue]);

	return [value, changeValue];
}
