import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import {
	ArrowRightCircle,
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
		<div className='flex flex-col gap-32'>
			<section className=' mt-32 flex flex-col items-center gap-16 justify-center md:gap-28'>
				<h1 className='text-white text-4xl font-sans w-10/12 font-black px-10 text-center sm:text-5xl md:text-6xl lg:text-7xl'>
					Extensivo Química {year}
				</h1>
				<p className='text-gray-300 drop-shadow-xl text-center font-semibold text-xl'>
					O curso mais completo da atualidade
				</p>
				<Button className='animate-text bg-gradient-to-r from-blue-700 via-emerald-700 to-orange-700'>
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
				<div className='h-36 w-36 flex flex-col justify-center items-center shadow-2xl border-t-2 shadow-blue-950 rounded-3xl px-2 md:h-48 md:w-48'>
					<TreePine
						color='white'
						className='flex-1 md:h-10 md:w-10'
					/>
					<p className='flex-1 text-center lg:text-lg'>Química Ambiental</p>
				</div>
			</section>
			<section className='flex flex-col items-center gap-4'>
				<p className='text-2xl text-center'>
					<span className='font-semibold'>Início:</span> <br /> 13/03/{year}
				</p>
				<p className='text-2xl text-center'>
					<span className='font-semibold'>Término:</span>
					<br /> vestibular da UFRGS
				</p>
			</section>
			<section className='flex flex-col items-center gap-6'>
				<p className='text-2xl font-semibold text-center px-10'>
					Porque você deve investir no curso{' '}
					<span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black'>
						Extensivo Química {year}
					</span>
				</p>
				<ul className='flex flex-col w-9/12 gap-4 sm:w-1/2 '>
					<li className='flex gap-2'>
						<Check className='text-white min-w-fit' />
						<p className='text-xl md:text-2xl'>Metodologia Eficiente</p>
					</li>
					<li className='flex gap-2'>
						<Check className='text-white min-w-fit' />
						<p className='text-xl md:text-2xl'>Aplicação dos conceitos</p>
					</li>
					<li className='flex gap-2'>
						<Check className='text-white min-w-fit' />
						<p className='text-xl md:text-2xl'>Aulas Interativas</p>
					</li>
					<li className='flex gap-2'>
						<Check className='text-white min-w-fit' />
						<p className='text-xl md:text-2xl'>Exercícios Práticos</p>
					</li>
					<li className='flex gap-2'>
						<Check className='text-white min-w-fit' />
						<p className='text-xl md:text-2xl'>
							Materiais exclusivos atualizados
						</p>
					</li>
					<li className='flex gap-2'>
						<Check className='text-white min-w-fit' />
						<p className='text-xl'>Grupo de atendimento exclusivo</p>
					</li>
				</ul>
			</section>
			<section className='flex flex-col items-center gap-16'>
				<p className='text-2xl font-semibold underline underline-offset-8'>
					Seu Investimento Seguro
				</p>

				<div className='px-2 flex flex-col justify-evenly items-center gap-2 w-64 h-52 shadow-2xl border-t-2 border-white rounded-xl shadow-blue-950 '>
					<p className='text-xl text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black'>
						Garantia de 7 dias.
					</p>
					<p className='text-center text-md text-white font-semibold w-9/12 '>
						Nos ultimos {year - 2021} anos todos os alunos matriculados ficaram
						até o dia do pré prova!
					</p>
				</div>
			</section>
			<section className='flex flex-col items-center gap-10'>
				<p className='text-center text-xl px-10 font-bold'>
					O que você recebe ao se inscrever no curso?
				</p>
				<div className='h-36 w-36 flex flex-col justify-center items-center shadow-inner shadow-blue-950  bg-white rounded-3xl'>
					<Book className='flex-1 text-blue-800 w-10 h-10' />
					<p className='flex-1 text-center text-slate-900 font-semibold px-5'>
						3 E-books em PDF
					</p>
				</div>
				<div className='h-36 w-36 flex flex-col justify-center items-center shadow-inner shadow-blue-950  bg-white rounded-3xl'>
					<Coffee className='flex-1 text-blue-800 w-10 h-10' />
					<p className='flex-1 text-center text-slate-900  font-semibold px-5'>
						1 Caneca do Curso
					</p>
				</div>
			</section>
			<section className='flex flex-col items-center gap-16'>
				<p className='text-2xl text-center animate-text bg-gradient-to-r from-teal-500 via-green-500 to-orange-500 bg-clip-text text-transparent font-black'>
					Investimento
				</p>
				<div className='h-52 w-52 flex flex-col justify-evenly items-center shadow-2xl border-x-2 rounded-3xl px-2'>
					<p className=' text-center text-xl'>À vista</p>
					<p className='text-xl font-semibold font-mono'>R$1199,20</p>
					<Button
						variant={'ghost'}
						className='shadow-xl rounded-full font-bold shadow-green-700/50'>
						Comprar{' '}
						<ArrowRightCircle
							size={20}
							className='ml-2'
						/>
					</Button>
				</div>
				<div className='h-52 w-52 flex flex-col justify-evenly items-center shadow-2xl border-x-2 rounded-3xl px-2'>
					<p className=' text-center text-xl'>Parcelado</p>
					<div className='flex flex-col gap-1 items-center'>
						<p className='text-xl font-semibold font-mono'>10x R$149,90</p>
						<span className='text-center text-gray-200'>Total: R$1499,00</span>
					</div>
					<Button
						variant={'ghost'}
						className='shadow-xl rounded-full font-bold shadow-green-700/50'>
						Comprar{' '}
						<ArrowRightCircle
							size={20}
							className='ml-2'
						/>
					</Button>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default page;
