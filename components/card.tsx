import { Airplay } from 'react-feather'
import styles from '../styles/components/card.module.scss'

export interface ICard {
    children: JSX.Element
    width?: string
    height?: string
}

export const Card = ({ children, width, height }: ICard) => {
    return (
        <div className={styles.cardWrapper} style={{ width, height }}>
            {children}
        </div>
    )
}
