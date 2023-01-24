import { Checked } from '../components/checked'
import styles from '../styles/views/checks.module.scss'
import Image from 'next/image'

interface IChecks {
    image?: string
    items: string[]
}

export const Checks = ({ image, items }: IChecks) => (
    <div className={styles.container}>
        {image && <Image src={image} alt={''} width={100} height={100} />}
        <div className={styles.checksWrapper}>
            {items.map((item) => (
                <Checked key={item} text={item} />
            ))}
        </div>
    </div>
)
