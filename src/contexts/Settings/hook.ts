import { useContext } from 'react';
import { SettingContext } from './context';

export function useSetting() {
	return useContext(SettingContext);
}
