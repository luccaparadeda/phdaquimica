import {
	AlertTriangle,
	ArrowDownNarrowWide,
	ArrowRightCircle,
	Check,
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

export default function Home() {
	return (
		<div className='w-full min-h-scree flex flex-col items-center'>
			<div className='container h-full flex flex-col'>
				<div className='flex flex-col items-center mb-16 mt-32 justify-center w-full gap-20'>
					<h1 className='text-4xl font-sans w-10/12 font-bold px-10 text-white text-center sm:text-5xl md:text-6xl lg:text-7xl lg:w-8/12'>
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
					<Image
						src={'/ph.svg'}
						alt='professor ph'
						width={250}
						height={250}
						className='rounded-full border-2 border-white'
						priority
						loading='eager'
					/>
					<p className='text-3xl w-10/12 font-sans font-medium animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500  bg-clip-text text-transparent text-center sm:text-3xl md:text-4xl lg:text-5xl '>
						Olá eu sou o PH e serei seu professor durante essa trajetória
					</p>
				</div>
				<section className='flex min-h-screen flex-wrap gap-8 w-full justify-center mt-10	p-10'>
					<h2 className='text-white font-semibold text-3xl w-full text-center'>
						Cursos
					</h2>
					<div className='flex gap-10 w-96 flex-col p-10 items-center shadow-2xl border-t-2 shadow-blue-950 rounded-3xl'>
						<p className='text-3xl text-center px-4 py-2 text-white'>
							Intensivo
						</p>
						<ul className='flex flex-col gap-4'>
							<li className='flex items-center gap-4'>
								<Check
									color='white'
									size={30}
								/>
								<p className='text-white text-lg'>Conteúdo completo</p>
							</li>
							<li className='flex items-center gap-4'>
								<Check
									color='white'
									size={30}
								/>
								<p className='text-white text-lg'>Rapido aprendizado</p>
							</li>
							<li className='flex items-center gap-4'>
								<Check
									color='white'
									size={30}
								/>
								<p className='text-white text-lg'>Exercicios Pontuais</p>
							</li>
							<li className='flex items-center gap-4'>
								<Check
									color='white'
									size={30}
								/>
								<p className='text-white text-lg'>Plantão de dúvidas</p>
							</li>
							<li>
								<p className='text-white text-4xl w-full text-center'>...</p>
							</li>
						</ul>
						<Button
							variant={'ghost'}
							className='text-md text-blue-200'>
							Quero esse <ArrowRightCircle className='ml-2 text-blue-200' />
						</Button>
					</div>
					<div className='flex gap-10 w-96 flex-col p-10 items-center shadow-2xl border-t-2 shadow-blue-950 rounded-3xl'>
						<p className='text-3xl text-center px-4 py-2 text-white'>
							Extensivo
						</p>
						<ul className='flex flex-col gap-4'>
							<li className='flex items-center gap-4'>
								<Check
									color='white'
									size={30}
								/>
								<p className='text-white text-lg'>Conteúdo completo</p>
							</li>
							<li className='flex items-center gap-4'>
								<Check
									color='white'
									size={30}
								/>
								<p className='text-white text-lg'>Conhecimento aprofundado</p>
							</li>
							<li className='flex items-center gap-4'>
								<Check
									color='white'
									size={30}
								/>
								<p className='text-white text-lg'>Exercicios Gerais</p>
							</li>
							<li className='flex items-center gap-4'>
								<Check
									color='white'
									size={30}
								/>
								<p className='text-white text-lg'>Plantão de dúvidas</p>
							</li>
							<li>
								<p className='text-white text-4xl w-full text-center'>...</p>
							</li>
						</ul>
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
