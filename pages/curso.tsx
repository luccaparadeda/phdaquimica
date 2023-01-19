import { Instagram } from 'react-feather'
import styles from '../styles/Curso.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Curso = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Image
                    src={'/../public/LogoImage.png'}
                    alt="Logo"
                    width={60}
                    height={60}
                    className={styles.logo}
                />
                <Link
                    className={styles.socialMediaWrapper}
                    href={'https://www.instagram.com/phdaquimica/'}
                    target={'_blank'}
                >
                    <Instagram width={20} height={20} />
                    <p>Instagram</p>
                </Link>
            </nav>
        </div>
    )
}

export default Curso
