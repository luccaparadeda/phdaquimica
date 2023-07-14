'use client';
import CourseContent from '@/components/CourseContent';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import { cardKeyType } from '@/hooks/cardContent';
import {
	ArrowBigRight,
	ArrowRight,
	ArrowRightCircle,
	ArrowRightFromLine,
	Book,
	Check,
	ChevronRight,
	Coffee,
	LucideIcon,
	MoveRight,
	TreePine
} from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

interface pageProps {}

interface CourseContentInterface {
	text: cardKeyType;
	Icon: LucideIcon;
}

const page: FC<pageProps> = ({}) => {
	const year = new Date().getFullYear();

	const courseContent: CourseContentInterface[] = [
		{
			text: 'Química Geral',
			Icon: TreePine
		},
		{
			text: 'Físico-Química',
			Icon: TreePine
		},
		{
			text: 'Química Orgânica',
			Icon: TreePine
		},
		{
			text: 'Química Ambiental',
			Icon: TreePine
		}
	];

	return (
		<div className='flex flex-col gap-32 w-full text-white'>
			<section className=' mt-32 flex flex-col items-center gap-16 justify-center md:gap-32'>
				<h1 className='animate-text bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 bg-clip-text text-transparent text-4xl font-sans w-10/12 font-black text-center sm:text-5xl md:text-6xl lg:text-7xl'>
					Extensivo Química {year}
				</h1>
				<p className='text-gray-400 drop-shadow-xl text-center font-semibold text-xl md:text-2xl'>
					O curso mais completo da atualidade
				</p>
				<Button className='animate-text bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-700 md:text-lg'>
					Quero fazer parte da turma
				</Button>
			</section>
			<CourseContent content={courseContent} />
			<section className='flex flex-col items-center gap-4 md:flex-row md:gap-16 md:justify-center md:my-24'>
				<p className='text-2xl text-center'>
					<span className='font-semibold'>Início:</span> <br /> 13/03/{year}
				</p>
				<ArrowRight className='text-white w-16 h-16 hidden md:block' />
				<p className='text-2xl text-center'>
					<span className='font-semibold'>Término:</span>
					<br /> vestibular da UFRGS
				</p>
			</section>
			<section className='flex flex-col items-center gap-10 md:my-16 md:gap-32'>
				<p className='text-center text-xl px-10 font-bold md:text-3xl lg:text-4xl'>
					O que você recebe ao se inscrever no curso?
				</p>
				<div className='flex flex-wrap gap-12 items-center justify-center md:gap-32'>
					<div className='h-36 w-36 flex flex-col justify-center items-center shadow-inner shadow-black  bg-gray-800 rounded-3xl md:w-64 md:h-64 md:justify-evenly'>
						<Book className='flex-1 w-10 h-10 md:w-20 md:h-20 md:flex-initial' />
						<p className='flex-1 text-center animate-text bg-gradient-to-l from-teal-500 via-blue-500 to-red-500 bg-clip-text text-transparent font-semibold px-5 md:flex-initial md:text-xl'>
							3 E-books em PDF
						</p>
					</div>
					<div className='h-36 w-36 flex flex-col justify-center items-center shadow-inner shadow-black  bg-gray-800 rounded-3xl md:w-64 md:h-64 md:justify-evenly'>
						<Coffee className='flex-1 w-10 h-10 md:w-20 md:h-20 md:flex-initial' />
						<p className='flex-1 text-center animate-text bg-gradient-to-l from-teal-500 via-blue-500 to-red-500 bg-clip-text text-transparent  font-semibold px-5 md:flex-initial md:text-xl'>
							1 Caneca do Curso
						</p>
					</div>
				</div>
			</section>
			<section className='flex flex-col items-center gap-24'>
				<p className='text-2xl text-center animate-text bg-gradient-to-r from-teal-500 via-green-500 to-orange-500 bg-clip-text text-transparent font-black lg:text-4xl'>
					Investimento
				</p>
				<div className='flex flex-wrap px-5 gap-16 justify-center md:px-0 md:gap-32'>
					<div className='h-52 w-52 flex flex-col justify-evenly items-center shadow-2xl shadow-indigo-800/25 border-x-2 rounded-3xl px-2 md:h-72 md:w-72 lg:h-96 lg:w-96'>
						<p className=' text-center text-xl'>À vista</p>
						<p className='text-xl font-semibold font-mono md:font-black md:text-2xl'>
							R$1199,20
						</p>
						<Link
							href={
								'https://wa.me/5551993467771?text=Ol%C3%A1+vim+a+procura+do+curso+Extensivo.'
							}
							target='_blank'>
							<Button
								variant={'ghost'}
								size={'lg'}
								className='shadow-xl rounded-full font-bold shadow-green-400/50'>
								Comprar{' '}
								<ArrowRightCircle
									size={20}
									className='ml-2'
								/>
							</Button>
						</Link>
					</div>
					<div className='h-52 w-52 flex flex-col justify-evenly items-center shadow-2xl shadow-indigo-800/25 border-x-2 rounded-3xl px-2 md:h-72 md:w-72 lg:h-96 lg:w-96'>
						<p className=' text-center text-xl'>Parcelado</p>
						<div className='flex flex-col gap-1 items-center'>
							<p className='text-xl font-semibold font-mono md:font-black md:text-2xl'>
								10x R$149,90
							</p>
							<span className='text-center text-gray-200'>
								Total: R$1499,00
							</span>
						</div>
						<Link
							href={
								'https://wa.me/5551993467771?text=Ol%C3%A1+vim+a+procura+do+curso+Extensivo.'
							}
							target='_blank'>
							<Button
								variant={'ghost'}
								className='shadow-xl rounded-full font-bold shadow-green-400/50'
								size={'lg'}>
								Comprar{' '}
								<ArrowRightCircle
									size={20}
									className='ml-2'
								/>
							</Button>
						</Link>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default page;
