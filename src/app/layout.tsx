import Providers from '@/components/Providers';
import './globals.css';
import { Quicksand } from 'next/font/google';
import Navbar from '@/components/Navbar';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata = {
	title: 'PhdaQuimica',
	description: 'Generated by create next app'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pt-BR'>
			<body className={`${quicksand.className} bg-slate-950`}>
				<Navbar />
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
