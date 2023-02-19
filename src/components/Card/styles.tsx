import styled from 'styled-components'

import { holo1Style } from './effects/holo1'
import { holo2Style } from './effects/holo2'
import { CardProps } from './types'

export const CardStyle = styled.div<CardProps>`
  --color1: ${(props) => props.color1};
  --color2: ${(props) => props.color2};
  --imgFront: ${(props) => `url('${props.imgFront}')`};

  border-radius: 5% / 3.5%;
  box-shadow: -5px -5px 5px -5px var(--color1), 5px 5px 5px -5px var(--color2),
    -7px -7px 10px -5px transparent, 7px 7px 10px -5px transparent,
    0 0 5px 0px rgba(255, 255, 255, 0), 0 55px 35px -20px rgba(0, 0, 0, 0.5);

  background-image: var(--imgFront);

  &:hover {
    box-shadow: -20px -20px 30px -25px var(--color1),
      20px 20px 30px -25px var(--color2), -7px -7px 10px -5px var(--color1),
      7px 7px 10px -5px var(--color2), 0 0 13px 4px rgba(255, 255, 255, 0.3),
      0 55px 35px -20px rgba(0, 0, 0, 0.5);
  }

  &.moved {
    transform: rotateX(var(--boxBeforeRotationY, 0))
      rotateY(var(--boxBeforeRotationX, 0));
  }
`
export const Wrapper = styled(CardStyle)`
  ${({ hoverStyle }) => {
    if (hoverStyle === 'holo1') {
      return holo1Style
    }
    if (hoverStyle === 'holo2') {
      return holo2Style
    }
  }}
`
