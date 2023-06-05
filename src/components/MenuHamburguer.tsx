'use client';
import { FC, useState } from 'react';
import { MenuItem } from '@/components/Navbar';
import Link from 'next/link';

import { Menu, X } from 'lucide-react';

interface MenuHamburguerProps {
	menuItems: MenuItem[];
}

const MenuHamburguer: FC<MenuHamburguerProps> = ({ menuItems }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='relative justify-self-end sm:hidden'>
			{isOpen ? (
				<X
					color='white'
					onClick={() => setIsOpen(false)}
				/>
			) : (
				<Menu
					color='white'
					onClick={() => setIsOpen(true)}
				/>
			)}
			<div
				className={`${
					!isOpen && 'hidden'
				} absolute -right-2 z-10 bg-slate-950  shadow-inner shadow-blue-950   rounded-xl p-4 flex flex-col gap-y-6 top-11`}>
				{menuItems.map(({ name, href }) => (
					<div
						key={name}
						className='flex justify-end w-28 items-center'>
						<Link
							className='text-white tracking-widest text-sm font-semibold'
							href={href}>
							{name}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default MenuHamburguer;
