import { ReactNode } from 'react'

import * as S from './styles'

type CardsContainerProps = {
  children: ReactNode
}

export const CardsContainer = ({ children }: CardsContainerProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)
