import { Story, Meta } from '@storybook/react'
import { CardsContainer } from 'components/CardsContainer'

import { Card } from '.'

export const Basic: Story = (args) => (
  <CardsContainer>
    <Card
      color1="rgba(0, 231, 255)"
      color2="rgba(255, 0, 231)"
      imgFront="img/card-front.jpg"
      {...args}
    />
  </CardsContainer>
)

export default {
  title: 'Card',
  component: Card,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta
