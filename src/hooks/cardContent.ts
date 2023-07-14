import { useState } from "react"

export type cardKeyType = "Química Geral" | "Físico-Química" | "Química Orgânica" | "Química Ambiental"

const cardInfo = {
    "Química Geral": "Sistemas Materiais e Análise Imediata • Estrutura Atômica • Ligações Químicas • Cálculo Estequiométrico ",
    "Físico-Química" : "Soluções Químicas • Termoquímica • Cinética e Equilíbrio • Eletroquímica",
    "Química Orgânica" : "Cadeias Carbônicas • Funções Orgânicas • Isomeria Plana e Espacial • Reações Orgânicas",
    "Química Ambiental" : "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem"
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