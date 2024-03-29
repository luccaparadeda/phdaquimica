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
	let year = new Date().getFullYear();
	if (new Date().getMonth() > 10) {
		year += 1;
	}
	return (
		<div className=' flex flex-col items-center'>
			<div className=' h-full flex flex-col'>
				<div className='flex flex-col items-center mb-16 mt-32 justify-center w-full gap-20'>
					<h1 className='text-4xl font-sans w-10/12 font-bold text-white text-center sm:text-5xl md:px-10 md:text-6xl lg:text-7xl lg:w-8/12'>
						Está pronto para conhecer os melhores cursos de{' '}
						<span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-black'>
							Química?
						</span>
					</h1>
					<iframe
						className='w-11/12 h-96 md:w-10/12 md:h-96 lg:w-8/12 lg:h-96'
						src='https://www.youtube.com/embed/pvQVQKdlgTo'></iframe>
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
					<p className='text-3xl w-10/12 font-sans font-medium text-gray-100 text-center sm:text-3xl md:text-4xl lg:text-5xl  lg:px-64'>
						Olá, eu sou o PH e serei seu professor durante essa trajetória.
					</p>
				</div>
				<section className='text-white my-32 flex flex-col items-center gap-6 md:gap-12'>
					<p className='text-2xl font-semibold text-center px-10 md:text-3xl lg:text-4xl'>
						Por que você deve investir nos cursos{' '}
						<span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-black'>
							Química do pH {year}?
						</span>
					</p>
					<ul className='flex flex-col w-9/12 gap-4 sm:w-1/2 md:w-fit md:gap-8'>
						<li className='flex gap-2 md:gap-6 lg:gap-12'>
							<Check className='text-white w-8 md:w-10 md:h-10' />
							<p className='text-xl md:text-2xl lg:text-3xl'>
								Metodologia Eficiente
							</p>
						</li>
						<li className='flex gap-2 md:gap-6 lg:gap-12'>
							<Check className='text-white w-8 md:w-10 md:h-10' />
							<p className='text-xl md:text-2xl lg:text-3xl'>
								Aplicação dos conceitos
							</p>
						</li>
						<li className='flex gap-2 md:gap-6 lg:gap-12'>
							<Check className='text-white md:w-10 md:h-10 w-8' />
							<p className='text-xl md:text-2xl lg:text-3xl'>
								Aulas Interativas
							</p>
						</li>
						<li className='flex gap-2 md:gap-6 lg:gap-12'>
							<Check className='text-white md:w-10 md:h-10 w-8' />
							<p className='text-xl md:text-2xl lg:text-3xl'>
								Exercícios Práticos
							</p>
						</li>
						<li className='flex gap-2 md:gap-6 lg:gap-12'>
							<Check className='text-white md:w-10 md:h-10 w-8' />
							<p className='text-xl md:text-2xl lg:text-3xl'>
								Materiais exclusivos atualizados
							</p>
						</li>
						<li className='flex gap-2 md:gap-6 lg:gap-12'>
							<Check className='text-white md:w-10 md:h-10 w-8' />
							<p className='text-xl md:text-2xl lg:text-3xl'>
								Exemplos práticos
							</p>
						</li>
					</ul>
				</section>
				<section className='text-white mb-20 flex flex-col items-center gap-16 md:gap-24'>
					<p className='text-2xl text-center font-semibold underline underline-offset-8 md:text-3xl lg:text-4xl'>
						Seu Investimento Seguro
					</p>

					<div className='px-2 flex flex-col justify-evenly items-center gap-2 w-64 h-52 shadow-2xl border-t-2 border-white rounded-xl shadow-blue-950 md:w-80 md:h-64 md:justify-center md:gap-16'>
						<p className='text-xl text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-black md:text-2xl lg:text-3xl'>
							Garantia de 30 dias.
						</p>
						<p className='text-center text-md text-white font-semibold w-9/12 md:text-lg lg:text-xl'>
							Nos últimos {year - 2021} anos todos os alunos matriculados
							ficaram até o dia do pré-prova!
						</p>
					</div>
				</section>
				<section className='flex min-h-screen flex-wrap gap-8 w-full justify-center mt-10'>
					<h2 className='text-white font-semibold text-3xl w-full text-center'>
						Cursos
					</h2>
					<div className='flex gap-10 w-60 md:w-96 flex-col p-10 items-center shadow-2xl border-t-2 shadow-blue-950 rounded-3xl'>
						<p className='text-3xl text-center px-4 py-2 text-white'>
							Presencial
						</p>
						<ul className='flex flex-col gap-4 items-center'>
							<li className='flex items-center gap-4'>
								<p className='text-white text-lg text-center'>
									Conteúdo programatico completo
								</p>
							</li>
							<li className='flex items-center gap-4'>
								<p className='text-white text-lg text-center'>
									3 livros físicos
								</p>
							</li>
							<li className='flex items-center gap-4'>
								<p className='text-white text-lg text-center'>
									Plantões Individuais e em Grupo
								</p>
							</li>
							<li className='flex items-center gap-4'>
								<p className='text-white text-lg text-center'>
									Simulados Autorais
								</p>
							</li>
							<li>
								<p className='text-gray-400 text-4xl w-full text-center'>...</p>
							</li>
						</ul>
						<Link href={'/presencial'}>
							<Button
								variant={'ghost'}
								className='text-md text-green-400 border-2 border-green-200 rounded-2xl hover:bg-green-900 hover:text-green-200'>
								Quero esse <ArrowRightCircle className='ml-2 text-green-200' />
							</Button>
						</Link>
					</div>
					<div className='flex gap-10 w-60 md:w-96 flex-col p-10 items-center shadow-2xl border-t-2 shadow-blue-950 rounded-3xl'>
						<p className='text-3xl text-center px-4 py-2 text-white'>Online</p>
						<ul className='flex flex-col gap-4 items-center'>
							<li className='flex items-center gap-4'>
								<p className='text-white text-lg text-center'>
									100+ Listas Extras para aprofundar seu conhecimento
								</p>
							</li>
							<li className='flex items-center gap-4'>
								<p className='text-white text-lg text-center'>E-books em PDF</p>
							</li>
							<li className='flex items-center gap-4'>
								<p className='text-white text-lg text-center'>
									Plantões em grupo
								</p>
							</li>
							<li className='flex items-center gap-4'>
								<p className='text-white text-lg text-center'>
									Aulas via Google Meets
								</p>
							</li>
							<li className='flex items-center gap-4'>
								<p className='text-gray-400 text-4xl w-full text-center'>...</p>
							</li>
						</ul>
						<Link href={'/online'}>
							<Button
								variant={'ghost'}
								className='text-md text-gray-400 border-gray-400 border-2 rounded-2xl hover:bg-gray-900 hover:text-gray-200'>
								Quero esse <ArrowRightCircle className='ml-2 text-gray-400 ' />
							</Button>
						</Link>
					</div>
				</section>
				<Footer />
			</div>
		</div>
	);
}
