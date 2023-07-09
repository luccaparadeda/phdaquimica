'use client';
import { FC, useState } from 'react';
import { MenuItem } from '@/components/Navbar';
import Link from 'next/link';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet';

import { Menu } from 'lucide-react';

interface MenuHamburguerProps {
	menuItems: MenuItem[];
	pathname: string;
}

const MenuHamburguer: FC<MenuHamburguerProps> = ({ menuItems, pathname }) => {
	return (
		<Sheet>
			<SheetTrigger
				asChild
				className='block sm:hidden justify-self-end'>
				<Menu color='white' />
			</SheetTrigger>
			<SheetContent
				side={'right'}
				className='bg-black/80 flex flex-col gap-20'>
				<SheetHeader>
					<SheetTitle className='text-white font-black'>Menu</SheetTitle>
					<SheetDescription className='flex flex-col gap-10 text-gray-200'>
						selecione o melhor curso para o seu aprendizado
					</SheetDescription>
				</SheetHeader>
				<div className='flex flex-col gap-10 w-full items-center'>
					{menuItems.map(({ href, name }) => (
						<Link
							key={name}
							className={`${
								href === pathname
									? 'text-slate-500 cursor-default'
									: 'text-white'
							} tracking-widest text-sm font-semibold group transition duration-500`}
							href={href}>
							{name}
						</Link>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MenuHamburguer;
