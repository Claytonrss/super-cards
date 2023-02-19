import { CardsContainer } from 'components/CardsContainer'

import { Card } from '../components/Card'

export default function Home() {
  return (
    <main id="app">
      <CardsContainer>
        <Card
          color1="rgba(0, 231, 255)"
          color2="rgba(255, 0, 231)"
          imgFront="img/card-front.jpg"
          hoverStyle="holo1"
        />
      </CardsContainer>
      <CardsContainer>
        <Card
          color1="rgba(0, 231, 255)"
          color2="rgba(255, 0, 231)"
          imgFront="img/card-front.jpg"
          hoverStyle="holo2"
        />
      </CardsContainer>
    </main>
  )
}
