import { NextApiRequest, NextApiResponse } from 'next'

import cardsJson from 'data/cards.json'
import { CardsResponseProps } from 'types/cards'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardsResponseProps>
) {
  if (req.method === 'GET') {
    res.status(200).json({ cards: cardsJson })
  } else {
    res.status(405).json({ error: 405, message: 'Method not allowed' })
  }
}
