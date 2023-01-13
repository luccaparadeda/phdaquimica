import { Card, ICard } from '../components/card'
import styles from '../styles/views/cards.module.scss'

export interface ICards {
    cards: ICard[]
}

export const Cards = ({ cards }: ICards) => (
    <div className={styles.cardsWrapper}>
        {cards.map(({ text, icon }) => (
            <Card key={text} text={text} icon={icon} />
        ))}
    </div>
)
