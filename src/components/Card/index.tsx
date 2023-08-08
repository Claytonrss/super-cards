import { useEffect, useRef } from 'react'

import { useCardHover } from 'hooks/useCardHover'
import { CardElementProps } from 'types/cards'

import * as S from './styles'

export const Card = ({
  color1,
  color2,
  imgFront,
  hoverStyle
}: CardElementProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null)

  const { handleMove, handleOut } = useCardHover()

  useEffect(() => {
    const card = cardRef.current

    if (!card) return

    card?.addEventListener('mousemove', handleMove)
    card?.addEventListener('touchmove', handleMove)
    card?.addEventListener('mouseout', handleOut)
    card?.addEventListener('touchend', handleOut)
    card?.addEventListener('touchcancel', handleOut)

    return () => {
      card?.removeEventListener('mousemove', handleMove)
      card?.removeEventListener('touchmove', handleMove)
      card?.removeEventListener('mouseout', handleOut)
      card?.removeEventListener('touchend', handleOut)
      card?.removeEventListener('touchcancel', handleOut)
    }
  }, [handleMove, handleOut])

  return (
    <S.Wrapper
      color1={color1}
      color2={color2}
      imgFront={imgFront}
      hoverStyle={hoverStyle}
      className={`card ${hoverStyle} animated`}
      ref={cardRef}
    />
  )
}
