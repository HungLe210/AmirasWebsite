import { createContext } from 'react';

type AuthContextFields = {
	state?: string;
};

export const AuthContext = createContext<AuthContextFields>({});
