import { useEffect, useRef, useState } from "react"

const useElementOnScreen = (options: any) => {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const intersectionCallback = (entries: any) => {
        const [entry] =  entries
        setIsVisible(entry.isIntersecting)
        if(entry.isIntersecting) {
            entry.target.classList.add("fadeIn")
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(intersectionCallback, options)

        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])

    return [containerRef, isVisible]
}

export default useElementOnScreen