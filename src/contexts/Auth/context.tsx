import { createContext } from 'react';

type SampleContextFields = {
	text?: string;
};

export const SampleContext = createContext<SampleContextFields>({});
