import styled from 'styled-components'

import { CardProps } from './types'

export const Wrapper = styled.div<CardProps>`
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

    mix-blend-mode: color-dodge;
    background-image: url(https://res.cloudinary.com/simey/image/upload/Dev/PokemonCards/illusion.webp),
      repeating-linear-gradient(
        0deg,
        rgb(255, 119, 115) calc(5% * 1),
        rgba(255, 237, 95, 1) calc(5% * 2),
        rgba(168, 255, 95, 1) calc(5% * 3),
        rgba(131, 255, 247, 1) calc(5% * 4),
        rgba(120, 148, 255, 1) calc(5% * 5),
        rgb(216, 117, 255) calc(5% * 6),
        rgb(255, 119, 115) calc(5% * 7)
      ),
      repeating-linear-gradient(
        133deg,
        #0e152e 0%,
        hsl(180, 10%, 60%) 3.8%,
        hsl(180, 29%, 66%) 4.5%,
        hsl(180, 10%, 60%) 5.2%,
        #0e152e 10%,
        #0e152e 12%
      ),
      radial-gradient(
        farthest-corner circle at 50% 50%,
        rgba(0, 0, 0, 0.1) 12%,
        rgba(0, 0, 0, 0.15) 20%,
        rgba(0, 0, 0, 0.25) 120%
      );
    background-blend-mode: exclusion, hue, hard-light;
    background-size: 50%, 200% 700%, 300%, 200%;
    background-position: center, 0% 50%, 50% 50%, 50% 50%;
    background-repeat: repeat;
    filter: brightness(calc((0 * 0.3) + 0.5)) contrast(2) saturate(1.5);
    -webkit-filter: brightness(calc((0 * 0.3) + 0.5)) contrast(2) saturate(1.5);
    transition: all 0.33s ease;
  }

  &.moved {
    transform: rotateX(var(--boxBeforeRotationY, 0))
      rotateY(var(--boxBeforeRotationX, 0));
    &:before {
      background-image: url(https://res.cloudinary.com/simey/image/upload/Dev/PokemonCards/illusion.webp),
        repeating-linear-gradient(
          0deg,
          rgb(255, 119, 115) calc(5% * 1),
          rgba(255, 237, 95, 1) calc(5% * 2),
          rgba(168, 255, 95, 1) calc(5% * 3),
          rgba(131, 255, 247, 1) calc(5% * 4),
          rgba(120, 148, 255, 1) calc(5% * 5),
          rgb(216, 117, 255) calc(5% * 6),
          rgb(255, 119, 115) calc(5% * 7)
        ),
        repeating-linear-gradient(
          133deg,
          #0e152e 0%,
          hsl(180, 10%, 60%) 3.8%,
          hsl(180, 29%, 66%) 4.5%,
          hsl(180, 10%, 60%) 5.2%,
          #0e152e 10%,
          #0e152e 12%
        ),
        radial-gradient(
          farthest-corner circle at var(--boxBeforePositionX, 50%)
            var(--boxBeforePositionY, 50%),
          rgba(0, 0, 0, 0.1) 12%,
          rgba(0, 0, 0, 0.15) 20%,
          rgba(0, 0, 0, 0.25) 120%
        );
      background-position: center, 0% var(--boxBeforePositionX, 50%),
        var(--boxBeforePositionX, 50%) var(--boxBeforePositionY, 50%),
        var(--boxBeforePositionX, 50%) var(--boxBeforePositionY, 50%);
      opacity: var(--boxBeforeOpacity, 0.5);
    }
  }
`
