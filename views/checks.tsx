import { Checked } from '../components/checked'
import styles from '../styles/views/checks.module.scss'
import Image from 'next/image'

interface IChecks {
    items: string[]
    icon: JSX.Element
}

export const Checks = ({ items, icon }: IChecks) => (
    <div className={styles.container}>
        <Image src="/logoImage.png" alt={''} width={100} height={100} />
        <div className={styles.checksWrapper}>
            {items.map((item) => (
                <Checked key={item} text={item} icon={icon} />
            ))}
        </div>
    </div>
)
