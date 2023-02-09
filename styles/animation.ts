export const fadeIn = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 }
  };

  export const leftToRight = {
    visible: { transition: { duration: 1.5 }, x: 0 },
    hidden: { x: -50 }
  }

  export const rightToLeft = {
    visible: { transition: { duration: 1.5 } , x: 0 },
    hidden: { x: 50 }
  }