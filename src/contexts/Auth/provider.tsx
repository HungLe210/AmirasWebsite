'use client';

import { AuthContext } from './context';

type AuthProviderProps = {
	children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
	return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
