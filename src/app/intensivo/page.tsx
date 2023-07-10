'use client';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import {
	ArrowBigRight,
	ArrowRight,
	ArrowRightCircle,
	ArrowRightFromLine,
	Book,
	Check,
	ChevronRight,
	Coffee,
	MoveRight,
	TreePine
} from 'lucide-react';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
	const year = new Date().getFullYear();

	return (
		<div className='flex flex-col gap-32 w-full text-white'>
			<section className=' mt-32 flex flex-col items-center gap-16 justify-center md:gap-32'>
				<h1 className='animate-text bg-gradient-to-r from-orange-500 via-blue-500 to-red-500 bg-clip-text text-transparent text-4xl font-sans w-10/12 font-black text-center sm:text-5xl md:text-6xl lg:text-7xl'>
					Intensivo Química {year}
				</h1>
				<p className='text-gray-400 drop-shadow-xl text-center font-semibold text-xl md:text-2xl'>
					O curso que vai te preparar para o vestibular
				</p>
				<Button className='animate-text shadow-lg shadow-blue-700 bg-blue-500 hover:bg-blue-900 md:text-lg'>
					Quero fazer parte da turma
				</Button>
			</section>
			<section className='flex flex-wrap items-center w-full justify-evenly gap-16'>
				<h2 className='w-full text-center text-2xl font-semibold md:text-3xl lg:text-4xl'>
					Conteúdos abordados
				</h2>
				<div className='h-36 w-36 flex flex-col justify-center items-center shadow-2xl border-t-2 shadow-blue-950 rounded-3xl px-2 md:h-48 md:w-48'>
					<TreePine
						color='white'
						className='flex-1 md:h-10 md:w-10'
					/>
					<p className='flex-1 text-center md:text-lg'>Química Geral</p>
				</div>
				<div className='h-36 w-36 flex flex-col justify-center items-center shadow-2xl border-t-2 shadow-blue-950 rounded-3xl px-2 md:h-48 md:w-48'>
					<TreePine
						color='white'
						className='flex-1 md:h-10 md:w-10'
					/>
					<p className='flex-1 text-center md:text-lg'>Físico-Química</p>
				</div>
				<div className='h-36 w-36 flex flex-col justify-center items-center shadow-2xl border-t-2 shadow-blue-950 rounded-3xl px-2 md:h-48 md:w-48'>
					<TreePine
						color='white'
						className='flex-1 md:h-10 md:w-10'
					/>
					<p className='flex-1 text-center md:text-lg'>Química Orgânica</p>
				</div>
			</section>
			<section className='flex flex-col items-center gap-4 md:flex-row md:gap-16 md:justify-center md:my-24'>
				<p className='text-2xl text-center'>
					<span className='font-semibold'>Início:</span> <br /> 01/08/{year}
				</p>
				<ArrowRight className='text-white w-16 h-16 hidden md:block' />
				<p className='text-2xl text-center'>
					<span className='font-semibold'>Término:</span>
					<br /> 21/11/{year}
				</p>
			</section>
			<section className='flex flex-col items-center gap-6 md:gap-12'>
				<p className='text-2xl font-semibold text-center px-10 md:text-3xl lg:text-4xl'>
					Porque você deve investir no curso{' '}
					<span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black'>
						Extensivo Química {year}
					</span>
				</p>
				<ul className='flex flex-col w-9/12 gap-4 sm:w-1/2 md:w-fit md:gap-8'>
					<li className='flex gap-2 md:gap-6 lg:gap-12'>
						<Check className='text-white min-w-fit md:w-10 md:h-10' />
						<p className='text-xl md:text-2xl lg:text-3xl'>
							Metodologia Eficiente
						</p>
					</li>
					<li className='flex gap-2 md:gap-6 lg:gap-12'>
						<Check className='text-white min-w-fit md:w-10 md:h-10' />
						<p className='text-xl md:text-2xl lg:text-3xl'>
							Aplicação dos conceitos
						</p>
					</li>
					<li className='flex gap-2 md:gap-6 lg:gap-12'>
						<Check className='text-white min-w-fit md:w-10 md:h-10' />
						<p className='text-xl md:text-2xl lg:text-3xl'>Aulas Interativas</p>
					</li>
					<li className='flex gap-2 md:gap-6 lg:gap-12'>
						<Check className='text-white min-w-fit md:w-10 md:h-10' />
						<p className='text-xl md:text-2xl lg:text-3xl'>
							Exercícios Práticos
						</p>
					</li>
					<li className='flex gap-2 md:gap-6 lg:gap-12'>
						<Check className='text-white min-w-fit md:w-10 md:h-10' />
						<p className='text-xl md:text-2xl lg:text-3xl'>
							Materiais exclusivos atualizados
						</p>
					</li>
					<li className='flex gap-2 md:gap-6 lg:gap-12'>
						<Check className='text-white min-w-fit md:w-10 md:h-10' />
						<p className='text-xl md:text-2xl lg:text-3xl'>
							Grupo de atendimento exclusivo
						</p>
					</li>
				</ul>
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
						<p className=' text-center text-xl'>Pix, Boleto ou Crédito</p>
						<div className='flex flex-col gap-2 items-center'>
							<p className='text-xl font-semibold font-mono md:font-black md:text-2xl'>
								497,00 <span>R$</span>
							</p>
							<p className='text-gray-400'>em até 12x</p>
						</div>
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
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default page;
