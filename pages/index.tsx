import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { leftToRight } from '../styles/animation'

export default function Home() {
    return (
        <>
            <Head>
                <title>pH da química</title>
                <meta name="description" content="Química pura e simples" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="keywords"
                    content="Química, Enem, Vestibular, Prova, Enem 2022, Enem 2023"
                ></meta>
                <meta name="author" content="Lucca Paradeda"></meta>
                <link rel="parent" hrefLang="pt"></link>
                <link rel="icon" href="/logoImage.png" />
            </Head>
            <div className={styles.container}>
                <Image
                    src={'/logoWhite.png'}
                    alt="logo"
                    width={400}
                    height={400}
                    className={styles.logo}
                />
                <motion.a
                    initial="hidden"
                    whileInView="visible"
                    variants={leftToRight}
                    viewport={{ amount: 'some' }}
                    href="/curso"
                    className={styles.loginButton}
                >
                    ENTRAR
                </motion.a>
            </div>
        </>
    )
}
