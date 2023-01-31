import curso from '../styles/curso/curso.module.scss'
import firstView from '../styles/curso/firstView.module.scss'
import secondView from '../styles/curso/secondView.module.scss'
import thirdView from '../styles/curso/thirdView.module.scss'
import fourthView from '../styles/curso/fourthView.module.scss'

import Image from 'next/image'
import Link from 'next/link'
import { Anchor, BookOpen, CheckCircle, Coffee, Instagram } from 'react-feather'
import { Card } from '../components/card'
import { Checks } from '../views/checks'
import { useEffect, useRef, useState } from 'react'
import useElementOnScreen from '../hooks/useElementOnScreen'
import { motion } from 'framer-motion'

const Curso = () => {
    const fromLeft = {
        visible: { opacity: 1, transition: { duration: 2 } },
        hidden: { opacity: 0 }
      };
      const fromRight = {
        visible: { opacity: 1, transition: { duration: 2 } },
        hidden: { opacity: 0 }
      };
    return (
        <>
            <motion.nav   initial="hidden"
  whileInView="visible" variants={fromLeft} viewport={{amount: "all"}} className={curso.navbar}>
                <Image
                    src={'/LogoImage.png'}
                    alt="Logo"
                    width={60}
                    height={60}
                    className={curso.logo}
                />
                <Link
                    className={curso.socialMediaWrapper}
                    href={'https://www.instagram.com/phdaquimica/'}
                    target={'_blank'}
                >
                    <Instagram width={20} height={20} />
                    <p>Instagram</p>
                </Link>
            </motion.nav>

            <div className={curso.container}>
                <div className={firstView.firstView}>
                    <motion.div initial="hidden"
  whileInView="visible" variants={fromLeft} viewport={{amount: "some"}}     className={firstView.titleWrapper} id="firstViewport">
                        <h1 className={firstView.title}>EXTENSIVO QUIMICA</h1>
                        <h1 className={firstView.titleBackgroundColor}>
                            ENEM <>{new Date().getFullYear()}</>
                        </h1>
                        <p className={firstView.subtitle}>
                            Não deixe a química ser um obstáculo no seu caminho
                            para entrar na faculdade dos seus sonhos.
                            <br />
                            Prepare-se agora com o curso que leva você do básico
                            ao avançado.
                        </p>
                        <Link
                            href={'#bePartOf'}
                            className={firstView.leadToPrice}
                        >
                            QUERO FAZER PARTE DA TURMA
                        </Link>
                    </motion.div>
                    <div className={firstView.viewCross}>
                        <Image
                            src={'/LogoImage.png'}
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
                <div className={secondView.secondView}>
                    <h2>
                        Quais conteúdos serão abordados ao longo da nossa
                        jornada?
                    </h2>
                    <div className={secondView.cardsWrapper}>
                        <Card>
                            <div className={secondView.card}>
                                <p>Teste</p> <Anchor />
                            </div>
                        </Card>
                        <Card>
                            <div className={secondView.card}>
                                <p>Teste</p> <Anchor />
                            </div>
                        </Card>
                        <Card>
                            <div className={secondView.card}>
                                <p>Teste</p> <Anchor />
                            </div>
                        </Card>
                        <Card>
                            <div className={secondView.card}>
                                <p>Teste</p> <Anchor />
                            </div>
                        </Card>
                    </div>
                    <div className={secondView.cardsWrapper}>
                        <Card>
                            <div className={secondView.card}>
                                <p>Teste</p> <Anchor />
                            </div>
                        </Card>
                        <Card>
                            <div className={secondView.card}>
                                <p>Teste</p> <Anchor />
                            </div>
                        </Card>
                        <Card>
                            <div className={secondView.card}>
                                <p>Teste</p> <Anchor />
                            </div>
                        </Card>
                    </div>
                </div>
                <div className={thirdView.thirdView}>
                    <div>
                        <h2>
                            Por quê você deve investir no curso 
                        </h2>
                        <h2 className={curso.textPink}>
                            EXTENSIVO QUÍMICA
                            ENEM 2023?
                        </h2>
                    </div>
                    <Checks
                        image="/LogoImage.png"
                        icon={<CheckCircle color="green" />}
                        items={[
                            'Metodologia de ensino eficiente, para compreender e aplicar os conceitos químicos.',
                            'Aulas interativas e exercícios práticos para fixar o conteúdo, te preparando para questões do ENEM.',
                            'Com o curso, você estará apto para desenvolver as 30 habilidades relacionadas a Química do ENEM!',
                            'Materiais exclusivos e atualizados, de acordo com as exigências dos vestibulares.',
                        ]}
                    />
                </div>
                <div className={curso.subjectsAbordedWrapper}>
                    <div className={curso.subjectCard}>
                        <h2 id="bePartOf" className={curso.bePartOf}>
                            QUERO FAZER PARTE DA TURMA
                        </h2>
                        <h2 className={curso.waranty}>GARANTIA DE 7 DIAS!</h2>
                        <p>
                            Se você não gostar do curso, devolveremos o valor
                            integral para você, sem perguntas e sem
                            ressentimentos. Porém, garantimos que você não irá
                            se arrepender ao adquirir o curso. Nos últimos 2
                            anos, todos os alunos que se matricularam em cursos
                            do pH permaneceram até o dia do PRÉ PROVA!
                        </p>
                    </div>
                </div>
                <div className={curso.prizes}>
                    <h2>O que você recebe ao se inscrever no curso?</h2>
                    <div className={curso.card}>
                        <h2>3 Ebooks PDF</h2>
                        <BookOpen width={100} height={100} />
                    </div>
                    <div className={curso.card}>
                        <h2>1 Caneca do Curso</h2>
                        <Coffee width={100} height={100} />
                    </div>
                </div>
                <div className={fourthView.fourthView}>
                    <h2>INVESTIMENTO</h2>
                    <div className={fourthView.card}>
                        <h2>1 LOTE</h2>
                        <h2>12x 12,99</h2>
                        <span>Á vista 2.237,99</span>
                    </div>
                    <div className={fourthView.card}>
                        <h2>2 LOTE</h2>
                        <h2>12x 12,99</h2>
                        <span>Á vista 2.237,99</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Curso
