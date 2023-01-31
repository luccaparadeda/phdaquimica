import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from '../styles/components/card.module.scss'

export interface ICard {
    children: JSX.Element
    width?: string
    height?: string
}

const squareVariants = {
    visible: { opacity: 1, transition: { duration: 1 } },
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
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
         className={styles.cardWrapper} style={{ width, height }}>
            {children}
        </motion.div>
    )
}
