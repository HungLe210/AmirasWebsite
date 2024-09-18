import { Footer, Header, Newsletter } from '@shared-components';

// import { Header } from '@shared-components';
// import Newsletter from '@shared-components/Newsletter/Newsletter';
import '@styles/globals.sass';
import '@styles/color.sass';


export const metadata = {
	title: 'Next.js',
	description: 'Generated by Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (

		<html lang='en'>
			<body suppressHydrationWarning className='main-layout'>
				<Header />
				{children}
				<Newsletter />
				<Footer />
			</body>
		</html>
	);
}
