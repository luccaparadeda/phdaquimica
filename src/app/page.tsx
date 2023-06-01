import {
	AlertTriangle,
	ArrowDownNarrowWide,
	ArrowRightCircle,
	ChevronDown,
	ChevronsDown,
	Circle,
	Dumbbell,
	FlaskConical,
	FlaskRound,
	HomeIcon,
	Info,
	Instagram,
	Mail,
	MoveRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MenuHamburguer from '@/components/MenuHamburguer';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';

export interface MenuItem {
	name: string;
	href: string;
}

const menudata: MenuItem[] = [
	{
		name: 'Home',
		href: '#'
	},
	{
		name: 'Sobre',
		href: '#'
	},
	{
		name: 'Extensivo',
		href: '#'
	},
	{
		name: 'Intensivo',
		href: '#'
	}
];

export default function Home() {
	return (
		<div className='w-full min-h-screen bg-slate-950 flex flex-col items-center'>
			<div className='container h-full flex flex-col'>
				<nav className='grid grid-cols-2  items-center p-4 lg:grid-cols-3'>
					<div className='flex items-center'>
						<FlaskRound color='white' />
						<h1 className='text-2xl font-bold text-white ml-2'>PHdaquimica</h1>
					</div>
					<div className='hidden items-end h-full w-full gap-4 justify-end sm:flex lg:justify-between'>
						{menudata.map(({ href, name }) => (
							<Link
								key={name}
								className='text-white tracking-widest text-sm font-semibold group transition duration-500'
								href={href}>
								{name}
								<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-500'></span>
							</Link>
						))}
					</div>
					<MenuHamburguer menuItems={menudata} />
				</nav>

				<div className='flex flex-col items-center h-screen	 w-full justify-evenly'>
					<h1 className='text-4xl font-sans font-bold px-10 text-white text-center sm:text-5xl md:text-6xl lg:text-7xl'>
						Está pronto para conhecer os melhores cursos de{' '}
						<span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black'>
							Quimica?
						</span>
					</h1>
					<ChevronsDown
						color='white'
						className='animate-bounce'
						size={60}
					/>
				</div>
				<div className='flex w-full gap-16 flex-col items-center justify-evenly'>
					<Circle
						size={80}
						color='white'
					/>
					<p className='text-3xl w-10/12 font-sans font-medium animate-text bg-gradient-to-t from-teal-500 via-purple-500 to-blue-500  bg-clip-text text-transparent text-left sm:text-3xl md:text-4xl lg:text-5xl '>
						Olá eu sou o PH e serei seu professor durante essa trajetória
					</p>
				</div>
				<section className='flex min-h-screen gap-20 w-full flex-col items-center mt-20	p-10'>
					<h2 className='text-white font-semibold text-3xl w-full text-center'>
						Cursos
					</h2>
					<div className='flex gap-10 flex-col p-10 items-center shadow-2xl shadow-blue-950 rounded-3xl'>
						<p className='text-3xl text-center px-4 py-2 text-white'>
							Intensivo
						</p>
						<Button
							variant={'ghost'}
							className='text-md text-blue-200'>
							Quero esse <ArrowRightCircle className='ml-2 text-blue-200' />
						</Button>
					</div>
					<div className='flex gap-10 flex-col p-10 items-center shadow-2xl shadow-blue-950 rounded-3xl'>
						<p className='text-3xl text-center px-4 py-2 text-white'>
							Extensivo
						</p>
						<Button
							variant={'ghost'}
							className='text-md text-blue-200'>
							Quero esse <ArrowRightCircle className='ml-2 text-blue-200' />
						</Button>
					</div>
				</section>
				<Footer />
			</div>
		</div>
	);
}
