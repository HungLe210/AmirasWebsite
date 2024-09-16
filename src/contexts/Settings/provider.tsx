'use client';

import { SettingContext } from './context';

type SettingProviderProps = {
	children: React.ReactNode;
};

export function SettingProvider({ children }: SettingProviderProps) {
	return <SettingContext.Provider value={{}}>{children}</SettingContext.Provider>;
}
