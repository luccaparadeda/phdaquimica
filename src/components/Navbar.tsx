'use client';

import { FC } from 'react';
import MenuHamburguer from './MenuHamburguer';
import Link from 'next/link';
import { FlaskRound } from 'lucide-react';
import { usePathname } from 'next/navigation';

export interface MenuItem {
	name: string;
	href: string;
}

const menudata: MenuItem[] = [
	{
		name: 'Home',
		href: '/'
	},
	{
		name: 'Intensivo',
		href: '/intensivo'
	},
	{
		name: 'Extensivo',
		href: '/extensivo'
	}
];

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	const pathname = usePathname();
	return (
		<div className='fixed z-50 shadow-sm w-full mx-auto'>
			<nav className='grid grid-cols-2 w-full p-4 items-center relative backdrop-blur-md lg:grid-cols-3'>
				<div className='flex items-center'>
					<FlaskRound color='white' />
					<h1 className='text-2xl ml-2 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-black'>
						pHdaQuímica
					</h1>
				</div>
				<div className='hidden items-end gap-6 justify-end sm:flex lg:justify-between'>
					{menudata.map(({ href, name }) => (
						<Link
							key={name}
							className={`${
								href === pathname
									? 'text-slate-500 cursor-default'
									: 'text-white'
							} tracking-widest text-sm font-semibold group transition duration-500`}
							href={href}>
							{name}
							{href !== pathname ? (
								<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-teal-600 via-blue-600 to-cyan-600'></span>
							) : null}
						</Link>
					))}
				</div>
				<MenuHamburguer
					menuItems={menudata}
					pathname={pathname}
				/>
			</nav>
		</div>
	);
};

export default Navbar;
