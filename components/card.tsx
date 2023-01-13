import { Airplay } from 'react-feather'
import styles from '../styles/components/card.module.scss'

export interface ICard {
    text?: string
    icon?: JSX.Element
}

export const Card = ({ text, icon }: ICard) => {
    return (
        <div className={styles.cardWrapper}>
            {icon}
            <p>{text}</p>
        </div>
    )
}
