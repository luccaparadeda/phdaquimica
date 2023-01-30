import { CheckCircle } from 'react-feather'
import styles from '../styles/components/checked.module.scss'

interface IChecked {
    text: string
    icon: JSX.Element
}

export const Checked = ({ text, icon }: IChecked) => (
    <div className={styles.checkedWrapper}>
        {icon} <p>{text}</p>
    </div>
)
