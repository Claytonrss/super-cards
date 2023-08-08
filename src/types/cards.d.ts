export interface CardDataProps {
  id: string
}

export interface CardsResponseProps {
  cards?: CardDataProps[]
  error?: number
  message?: string
}

export interface CardElementProps {
  color1: string
  color2: string
  imgFront: string
  hoverStyle: EffectList
}

export const EffectList = 'holo1' | 'holo2' | 'holo3'
