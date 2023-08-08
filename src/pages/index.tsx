import { useEffect, useState } from 'react'

import { CardsContainer } from 'components/CardsContainer'
import useFetch from 'hooks/useFetch'
import { CardDataProps, CardsResponseProps } from 'types/cards'
import { getRandomElement } from 'utils/array'

import { Card } from '../components/Card'

export default function Home() {
  const { data, error } = useFetch<CardsResponseProps>('/api/cards')
  const [cards, setCards] = useState<CardDataProps[]>([])

  const effects = ['holo1', 'holo2', 'holo3']

  useEffect(() => {
    if (data?.cards) {
      setCards(data.cards)
    }
  }, [data])

  if (error) return <p>There is an error.</p>
  if (!data) return <p>Loading...</p>

  return (
    <main id="app">
      {cards.slice(0, 5).map((card) => (
        <CardsContainer key={card.id}>
          <Card
            color1="rgba(0, 231, 255)"
            color2="rgba(255, 0, 231)"
            imgFront={`img/cards/${card.id}.jpg`}
            hoverStyle={getRandomElement(effects)}
          />
        </CardsContainer>
      ))}
    </main>
  )
}
