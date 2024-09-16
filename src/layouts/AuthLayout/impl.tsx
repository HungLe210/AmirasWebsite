'use client';

import { BaseLayout } from '@layouts/BaseLayout';
import { AuthLayoutProps } from './types';

export function AuthLayout({ children }: AuthLayoutProps) {
	return <BaseLayout>{children}</BaseLayout>;
}
