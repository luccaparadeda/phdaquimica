'use client';
import { Instagram, Mail } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { toast } from 'react-hot-toast';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
	const copyEmail = () => {
		navigator.clipboard.writeText('contato@phdaquimica.com.br');
		toast.success('Email copiado para área de transferência', {
			style: {
				backgroundColor: '#1f2937',
				color: 'white'
			}
		});
	};
	return (
		<footer className='flex flex-col items-center justify-center border-t-[1px] border-t-slate-600 mt-10 p-10'>
			<div className='flex justify-evenly w-full'>
				<Link
					href='https://www.instagram.com/phdaquimica/'
					target='_blank'>
					<Instagram className='text-white' />
				</Link>
				<Mail
					className='text-white'
					onClick={copyEmail}
				/>
			</div>
		</footer>
	);
};

export default Footer;
