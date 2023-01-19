import { Airplay } from 'react-feather'
import styles from '../styles/components/card.module.scss'

export interface ICard {
    text?: string
    icon?: JSX.Element
    width?: string
    height?: string
}

export const Card = ({ text, icon, width, height }: ICard) => {
    return (
        <div className={styles.cardWrapper} style={{ width, height }}>
            {icon}
            <p>{text}</p>
        </div>
    )
}
