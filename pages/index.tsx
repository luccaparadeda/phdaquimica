import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { leftToRight } from '../styles/animation'

export default function Home() {
    return (
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
    )
}
