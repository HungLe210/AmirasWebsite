'use client';

import { SmlProvider } from '@core';
import { BaseLayoutProps } from './types';

export function BaseLayout({ children }: BaseLayoutProps) {
	return <SmlProvider>{children}</SmlProvider>;
}
