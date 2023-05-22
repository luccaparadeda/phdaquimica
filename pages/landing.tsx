import Image from 'next/image'
import styles from '../styles/landing/landing.module.scss'
import Link from 'next/link'

const Landing = () => {
    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Professor PH</h1>
                <Link href='/landing' className={styles.active}>Home</Link>
                <Link href="/aa">About</Link>
                <Link href="/bb">Projects</Link>
            </header>        
            <div className={styles.body}>
                <section className={styles.presentation}>
                    <p>Olá,</p>
                    <h2>Eu sou o PH</h2>
                    <span>Professor de química</span>
                    <p>Hello, I am an aspiring UI/UX designer with the ability to translate the designs into functional Front-end</p>
                    <button>Me conheça</button>
                </section>
                <section className={styles.imagesContainer}>
                    <Image src="/circle.svg" alt="Picture of the author" width={700} height={500} />
                    <Image src="/PH.svg" alt="Prof PH" width={500} height={800} />
                </section>
            </div>

        </div>
    )
}

export default Landing