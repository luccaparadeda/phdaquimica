import Providers from '@/components/Providers';
import './globals.css';
import { Quicksand } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'PhdaQuimica',
	description: 'Generated by create next app',
	generator: 'Next.js',
	applicationName: 'PhdaQuimica',
	referrer: 'origin-when-cross-origin',
	keywords: [
		'Química',
		'Curso de Química',
		'Química para o Enem',
		'Enem',
		'phdaquimica'
	],
	authors: [{ name: 'Lucca', url: 'luccaparadeda.com' }],
	colorScheme: 'dark',
	creator: 'PhDaquimica',
	publisher: 'Lucca Tisser Paradeda',
	category: 'Química',
	classification: 'Química'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pt-BR'>
			<body className={`${quicksand.className} bg-black/90`}>
				<Navbar />
				<div className='container'>
					<Providers>{children}</Providers>
					<Analytics />
				</div>
			</body>
		</html>
	);
}
