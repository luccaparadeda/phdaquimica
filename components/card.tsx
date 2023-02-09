import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { fadeIn } from '../styles/animation'
import styles from '../styles/components/card.module.scss'

export interface ICard {
    children: JSX.Element
    width?: string
    height?: string
}

const squareVariants = {
    visible: { opacity: 1, transition: { duration: 10 } },
    hidden: { opacity: 0 }
  };


export const Card = ({ children, width, height }: ICard) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
        <motion.div       
        initial="hidden"
        whileInView="visible" variants={fadeIn} viewport={{amount: "some"}}
         className={styles.cardWrapper} style={{ width, height }}>
            {children}
        </motion.div>
    )
}
