import styled from 'styled-components'

import { holo1Style } from './effects/holo1'
import { holo2Style } from './effects/holo2'
import { CardProps } from './types'

export const CardStyle = styled.div<CardProps>`
  --color1: ${(props) => props.color1};
  --color2: ${(props) => props.color2};
  --imgFront: ${(props) => `url('${props.imgFront}')`};

  width: 500px;
  height: 700px;
  position: relative;
  overflow: hidden;
  margin: 20px;
  z-index: 10;

  border-radius: 5% / 3.5%;
  box-shadow: -5px -5px 5px -5px var(--color1), 5px 5px 5px -5px var(--color2),
    -7px -7px 10px -5px transparent, 7px 7px 10px -5px transparent,
    0 0 5px 0px rgba(255, 255, 255, 0), 0 55px 35px -20px rgba(0, 0, 0, 0.5);

  animation: none;
  transition: all 0.1s ease-out;
  will-change: transform, filter, box-shadow;

  background-image: var(--imgFront);
  background-size: cover;
  transform-origin: center;

  &:hover {
    box-shadow: -20px -20px 30px -25px var(--color1),
      20px 20px 30px -25px var(--color2), -7px -7px 10px -5px var(--color1),
      7px 7px 10px -5px var(--color2), 0 0 13px 4px rgba(255, 255, 255, 0.3),
      0 55px 35px -20px rgba(0, 0, 0, 0.5);
  }

  &:before {
    content: '';
    width: 100%;
    aspect-ratio: 0.714;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-repeat: no-repeat;
    opacity: 0.5;
    transition: all 0.33s ease;
  }

  &.moved {
    transform: rotateX(var(--boxBeforeRotationY, 0))
      rotateY(var(--boxBeforeRotationX, 0));
  }
`
export const Wrapper = styled(CardStyle)`
  ${holo1Style}
  ${holo2Style}
`
