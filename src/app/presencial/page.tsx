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
	TreePine,
	Dot
} from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

interface pageProps {}

interface CourseContentInterface {
	text: cardKeyType;
	Icon: LucideIcon;
}

const page: FC<pageProps> = ({}) => {
	let year = new Date().getFullYear();
	if (new Date().getMonth() > 10) {
		year += 1;
	}

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
					Presencial Química {year}
				</h1>
				<p className='text-gray-400 drop-shadow-xl text-center font-semibold text-xl md:text-2xl'>
					Este curso é para estudantes que desejam ser aprovados em
					<b> universidades de alto nível</b>
				</p>
				<p className='text-gray-500 drop-shadow-xl text-center font-semibold text-lg md:text-xl'>
					Av. Independência, 601 - sala 301 - Porto Alegre
				</p>
				<Button className='animate-text bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-700 md:text-lg'>
					<a href={'#investimento'}>Quero fazer parte da turma</a>
				</Button>
			</section>
			{/* <CourseContent content={courseContent} /> */}
			<section className='flex flex-col items-center gap-4 md:gap-16 md:justify-center md:my-24'>
				<p className='text-md md:text-lg lg:text-xl text-center'>
					Este é um curso anual, você terá acesso a todo conteúdo programático
					dos mais diversos vestibulares do Brasil (incluindo ENEM).
				</p>
				<div className='flex flex-col gap-4'>
					<li className='flex w-full items-start gap-2 md:gap-6 lg:gap-12'>
						<Dot className='text-white h-8 w-8' />
						<p className='text-lg md:text-2xl'>Aulas semanais de 2 horas.</p>
					</li>
					<li className='flex w-full items-start gap-2 md:gap-6 lg:gap-12'>
						<Dot className='text-white h-8 w-8' />
						<p className='text-lg md:text-2xl'>TERÇA-FEIRA: 10h às 12h</p>
					</li>
					<li className='flex w-full items-start gap-2 md:gap-6 lg:gap-12'>
						<Dot className='text-white h-8 w-8' />
						<p className='text-lg md:text-2xl'>TERÇA-FEIRA: 14h às 16h</p>
					</li>
				</div>
			</section>
			<section className='flex flex-col items-center gap-4 md:flex-row md:gap-16 md:justify-center md:my-24'>
				<p className='text-2xl text-center'>
					<span className='font-semibold'>Início:</span> <br /> 19/02/{year}
				</p>
				<ArrowRight className='text-white w-16 h-16 hidden md:block' />
				<p className='text-2xl text-center'>
					<span className='font-semibold'>Término:</span>
					<br /> 11/11/{year}
				</p>
			</section>
			<section className='flex flex-col items-center gap-6 md:gap-12'>
				<p className='text-2xl font-semibold text-center px-10 md:text-3xl lg:text-4xl'>
					Porquê você deve investir no curso{' '}
					<span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-black'>
						Presencial Química {year}
					</span>
				</p>
				<ul className='flex flex-col w-9/12 gap-4 sm:w-1/2 md:w-fit md:gap-8'>
					<li className='flex gap-2 md:gap-6 lg:gap-12'>
						<Check className='text-white w-8 md:w-10 md:h-10' />
						<p className='text-xl md:text-2xl lg:text-3xl'>
							Suporte via Whatsapp (grupo exclusivo)
						</p>
					</li>
					<li className='flex gap-2 md:gap-6 lg:gap-12'>
						<Check className='text-white w-8 md:w-10 md:h-10' />
						<p className='text-xl md:text-2xl lg:text-3xl'>
							Plantões Individuais e em Grupo
						</p>
					</li>
					<li className='flex gap-2 md:gap-6 lg:gap-12'>
						<Check className='text-white md:w-10 md:h-10 w-8' />
						<p className='text-xl md:text-2xl lg:text-3xl'>
							100+ Listas Extras para aprofundar seu conhecimento
						</p>
					</li>
					<li className='flex gap-2 md:gap-6 lg:gap-12'>
						<Check className='text-white md:w-10 md:h-10 w-8' />
						<p className='text-xl md:text-2xl lg:text-3xl'>
							Acesso ao Classroom
						</p>
					</li>
					<li className='flex gap-2 md:gap-6 lg:gap-12'>
						<Check className='text-white md:w-10 md:h-10 w-8' />
						<p className='text-xl md:text-2xl lg:text-3xl'>
							Simulados Autorais
						</p>
					</li>
					<li className='flex gap-2 md:gap-6 lg:gap-12'>
						<Check className='text-white md:w-10 md:h-10 w-8' />
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
				<div className='flex flex-col gap-12 items-center justify-center md:gap-32'>
					<div className='h-36 w-36 flex flex-col justify-center items-center shadow-inner shadow-black  bg-gray-800 rounded-3xl md:w-64 md:h-64 md:justify-evenly'>
						<Book className='flex-1 w-10 h-10 md:w-20 md:h-20 md:flex-initial' />
						<p className='flex-1 text-center animate-text bg-gradient-to-l from-teal-500 via-blue-500 to-red-500 bg-clip-text text-transparent font-semibold px-5 md:flex-initial md:text-xl'>
							3 E-book em PDF
						</p>
					</div>
					<div className='flex flex-col gap-5'>
						<li className='flex items-center gap-2 md:gap-6 lg:gap-12'>
							<Dot className='text-white w-8' />
							<p className='text-lg md:text-2xl'>Livro 01: Química Geral</p>
						</li>
						<li className='flex gap-2 md:gap-6 lg:gap-12'>
							<Dot className='text-white w-8' />
							<p className='text-lg md:text-2xl'>Livro 02: Físico-Química</p>
						</li>
						<li className='flex gap-2 md:gap-6 lg:gap-12'>
							<Dot className='text-white w-8' />
							<p className='text-lg md:text-2xl'>Livro 03: Química Orgânica</p>
						</li>
						<li className='flex gap-2 md:gap-6 lg:gap-12'>
							<Dot className='text-white w-8' />
							<p className='text-lg md:text-2xl'>Caneca do curso</p>
						</li>
					</div>
				</div>
			</section>
			<section className='flex flex-col items-center gap-10 md:my-16 md:gap-32'>
				<p className='text-center text-xl px-10 font-bold md:text-3xl lg:text-4xl'>
					E não para por aí... vou te dar um bônus exclusivo em 2024:
				</p>
				<div className='flex flex-col gap-5'>
					<li className='flex items-center gap-2 md:gap-6 lg:gap-12'>
						<Dot className='text-white h-8 w-8' />
						<p className='text-lg md:text-2xl'>
							Mentoria Online APROVA+: uma mentoria totalmente focada em
							acelerar teus resultados e qualificar tuas notas!
						</p>
					</li>
					<li className='flex gap-2 md:gap-6 lg:gap-12'>
						<Dot className='text-white h-8 w-8' />
						<p className='text-lg md:text-2xl'>
							Curso Online PRÁTICA EM PROVAS ENEM: o curso que vai te ensinar a
							pensar como a banca dos vestibulares
						</p>
					</li>
					<li className='flex gap-2 md:gap-6 lg:gap-12'>
						<Dot className='text-white h-8 w-8' />
						<p className='text-lg md:text-2xl'>
							10+ Vídeos extra para te acompanhar nessa jornada
						</p>
					</li>
				</div>
			</section>
			<section
				className='flex flex-col items-center gap-16'
				id='investimento'>
				<p className='text-2xl text-center animate-text bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 bg-clip-text text-transparent font-black lg:text-4xl'>
					Investimento
				</p>
				<div className='flex flex-wrap px-5 gap-16 justify-center md:px-0 md:gap-32'>
					<div className='h-52 w-52 flex flex-col justify-evenly items-center shadow-2xl shadow-indigo-800/25 border-x-2 rounded-3xl px-2 md:h-72 md:w-72 lg:h-96 lg:w-96'>
						<p className=' text-center text-xl'>À vista</p>
						<p className='text-xl font-semibold font-mono md:font-black md:text-2xl'>
							R$1799,00
						</p>
						<Link
							href={'https://mpago.la/1L2ZzMz '}
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
								10x R$185,90*
							</p>
						</div>
						<Link
							href={'https://mpago.la/1L2ZzMz '}
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
				<p className='text-gray-400 text-xs text-center font-semibold font-mono md:font-black md:text-md'>
					+ taxa de matrícula 12x R$13,68 ou R$135,00 à vista
				</p>
			</section>
			<Footer />
		</div>
	);
};

export default page;
