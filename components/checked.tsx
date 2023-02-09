import { motion } from 'framer-motion'
import { CheckCircle } from 'react-feather'
import { fadeIn } from '../styles/animation'
import styles from '../styles/components/checked.module.scss'

interface IChecked {
    text: string
    icon: JSX.Element
}

export const Checked = ({ text, icon }: IChecked) => (
    <motion.div       
    initial="hidden"
    whileInView="visible" variants={fadeIn} viewport={{amount: "some"}} className={styles.checkedWrapper}>
        {icon} <p>{text}</p>
    </motion.div>
)
