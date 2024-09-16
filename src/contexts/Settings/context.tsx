import { createContext } from 'react';

type SettingContextFields = {
	setting?: string;
};

export const SettingContext = createContext<SettingContextFields>({});
