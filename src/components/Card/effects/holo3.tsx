import { css } from 'styled-components'

export const holo3Style = css`
  &.holo3:before {
    mix-blend-mode: color-dodge;
    background-blend-mode: exclusion, hue, hard-light;
    background-size: 50%, 200% 700%, 300%, 200%;
    background-position: center, 0% 50%, 50% 50%, 50% 50%;
    background-repeat: repeat;
    filter: brightness(calc((0 * 0.3) + 0.5)) contrast(2) saturate(1.5);
    background-image: repeating-linear-gradient(
      0deg,
      rgb(255, 119, 115) calc(5% * 1),
      rgba(255, 237, 95, 1) calc(5% * 2),
      rgba(168, 255, 95, 1) calc(5% * 3),
      rgba(131, 255, 247, 1) calc(5% * 4),
      rgba(120, 148, 255, 1) calc(5% * 5),
      rgb(216, 117, 255) calc(5% * 6),
      rgb(255, 119, 115) calc(5% * 7)
    );
    background-size: 200% 700%;
    background-position: var(--boxBeforePositionX, 0)
      var(--boxBeforePositionY, 50%);
    opacity: 0.3;
  }

  &.holo3.moved:before {
    background-image: repeating-linear-gradient(
      0deg,
      rgb(255, 119, 115) calc(5% * 1),
      rgba(255, 237, 95, 1) calc(5% * 2),
      rgba(168, 255, 95, 1) calc(5% * 3),
      rgba(131, 255, 247, 1) calc(5% * 4),
      rgba(120, 148, 255, 1) calc(5% * 5),
      rgb(216, 117, 255) calc(5% * 6),
      rgb(255, 119, 115) calc(5% * 7)
    );
    background-size: 200% 700%;
    background-position: center, 0% var(--boxBeforePositionX, 50%),
      var(--boxBeforePositionX, 50%) var(--boxBeforePositionY, 50%),
      var(--boxBeforePositionX, 50%) var(--boxBeforePositionY, 50%);
    opacity: calc(var(--boxBeforeOpacity, 0.5) - 0.5);
  }

  &.holo3:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-repeat: no-repeat;
    opacity: 0.5;
    mix-blend-mode: color-dodge;
    transition: all 0.33s ease;
    background-image: url('https://assets.codepen.io/13471/sparkles.gif'),
      url(https://assets.codepen.io/13471/holo.png),
      linear-gradient(
        125deg,
        #ff008450 15%,
        #fca40040 30%,
        #ffff0030 40%,
        #00ff8a20 60%,
        #00cfff40 70%,
        #cc4cfa50 85%
      );
    background-position: 50% 50%;
    background-size: 160%;
    background-blend-mode: overlay;
    z-index: 2;
    filter: brightness(1) contrast(1);
    transition: all 0.33s ease;
    mix-blend-mode: color-dodge;
  }
`
