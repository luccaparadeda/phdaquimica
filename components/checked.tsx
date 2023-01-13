import { CheckCircle } from 'react-feather'
import styles from '../styles/components/checked.module.scss'

export const Checked = ({ text }: { text: string }) => (
    <div className={styles.checkedWrapper}>
        <CheckCircle color="green" /> <p>{text}</p>
    </div>
)
