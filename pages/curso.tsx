import curso from '../styles/curso/curso.module.scss'
import firstView from '../styles/curso/firstView.module.scss'
import secondView from '../styles/curso/secondView.module.scss'
import thirdView from '../styles/curso/thirdView.module.scss'

import Image from 'next/image'
import Link from 'next/link'
import { Anchor, Instagram } from 'react-feather'
import { Cards } from '../views/cards'
import { Card } from '../components/card'

const Curso = () => {
    return (
        <>
            <nav className={curso.navbar}>
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
            </nav>

            <div className={curso.container}>
                <div className={firstView.firstView}>
                    <div className={firstView.titleWrapper} id="firstViewport">
                        <h1 className={firstView.title}>EXTENSIVO QUIMICA</h1>
                        <h1 className={firstView.titleBackgroundColor}>
                            ENEM 2023
                        </h1>
                        <p className={firstView.subtitle}>
                            Não deixe a química ser um obstáculo no seu caminho
                            para entrar na faculdade dos seus sonhos.
                            <br />
                            Prepare-se agora com o curso que leva você do básico
                            ao avançado.
                        </p>
                        <Link href={''} className={firstView.leadToPrice}>
                            QUERO FAZER PARTE DA TURMA
                        </Link>
                    </div>
                </div>
                <div className={secondView.secondView}>
                    <h2>
                        Ao final do nosso extensivo, você saberá fazer questões
                        sobre:
                    </h2>
                    <div className={secondView.cardsWrapper}>
                        <Card text="Teste" icon={<Anchor />} />
                        <Card text="Teste" icon={<Anchor />} />
                        <Card text="Teste" icon={<Anchor />} />
                        <Card text="Teste" icon={<Anchor />} />
                    </div>
                    <div className={secondView.cardsWrapper}>
                        <Card text="Teste" icon={<Anchor />} />
                        <Card text="Teste" icon={<Anchor />} />
                        <Card text="Teste" icon={<Anchor />} />
                    </div>
                </div>
                <div className={thirdView.thirdView}>
                    <h2>
                        Ao final do nosso extensivo, você saberá fazer questões
                        sobre:
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Curso
