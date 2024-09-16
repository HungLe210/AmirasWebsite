'use client';

import { SampleContext } from './context';

type SampleProviderProps = {
	children: React.ReactNode;
};

export function SampleProvider({ children }: SampleProviderProps) {
	return (
		<SampleContext.Provider
			value={{
				text: '',
			}}
		>
			{children}
		</SampleContext.Provider>
	);
}
