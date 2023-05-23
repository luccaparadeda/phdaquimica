import Image from 'next/image'
import styles from '../styles/landing/landing.module.scss'
import Link from 'next/link'

const Landing = () => {
    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.wideHeader}>
                    <h1>Professor PH</h1>
                    <Link href='/landing' className={styles.active}>Home</Link>
                    <Link href="/aa">Extensivo</Link>
                    <Link href="/bb">Intensivo</Link>
                </div>
                <div className={styles.smallHeader}>
                    <svg viewBox="0 0 100 80" width="40" height="20">
                        <rect width="100" height="5"></rect>
                        <rect y="30" width="100" height="5"></rect>
                        <rect y="60" width="100" height="5"></rect>
                    </svg>
                    <h1>Professor PH</h1>
                </div>
            </header>        
            <div className={styles.body}>
                <section className={styles.presentation}>
                    <Image className={styles.smallImage} src="/cabecaPH.svg" alt="Prof PH" width={150} height={150} />
                    <div className={styles.text}>
                        <p>Olá,</p>
                        <h2 className={styles.title}>Eu sou o PH</h2>
                        <span>Professor de química</span>
                        <p className={styles.subtitle}>Hello, I am an aspiring UI/UX designer with the ability to translate the designs into functional Front-end</p>
                        <button className={styles.button}>Me conheça</button>
                    </div>
                </section>
                <Image className={styles.phImage} src="/PH.svg" alt="Prof PH" width={500} height={800} />
                <Image className={styles.circleImage} src="/circle.svg" alt="Picture of the author" width={700} height={500} />
            </div>

        </div>
    )
}

export default Landing