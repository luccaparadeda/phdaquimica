import { useState } from "react"

export type cardKeyType = "Química Geral" | "Físico-Química" | "Química Orgânica" | "Química Ambiental"

const cardInfo = {
    "Química Geral": "",
    "Físico-Química" : "",
    "Química Orgânica" : "",
    "Química Ambiental" : ""
}

interface cardContentInterface {
    infoKey: cardKeyType,
    infoValue: string
}

const useCardContent = () => {
    const [cardContent, setCardContent] = useState<cardContentInterface>({infoKey: "Química Geral", infoValue: cardInfo["Química Geral"]})

    const cardInfoKeys = Object.keys(cardInfo) as cardKeyType[]

    const handleCardInfo = (cardKey: cardKeyType) => {
        setCardContent({infoKey: cardKey, infoValue: cardInfo[cardKey]})
    }

    return {cardContent, handleCardInfo, cardInfoKeys}
}

export default useCardContent