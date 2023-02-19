import { css } from 'styled-components'

export const holo2Style = css`
  &.holo2:before {
    mix-blend-mode: overlay;
    background-image: repeating-linear-gradient(
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
    background-size: 200% 700%, 300%, 200%;
    background-blend-mode: hue, hard-light, exclusion;
    background-position: 0% 50%, 50% 50%, 50% 50%;
  }

  &.holo2.moved:before {
    background-image: repeating-linear-gradient(
        var(--boxBeforeRotationY, 0deg),
        rgb(255, 119, 115) calc(var(--boxBeforeSparkX, 5%) * 1),
        rgba(255, 237, 95, 1) calc(var(--boxBeforeSparkX, 5%) * 2),
        rgba(168, 255, 95, 1) calc(var(--boxBeforeSparkX, 5%) * 3),
        rgba(131, 255, 247, 1) calc(var(--boxBeforeSparkX, 5%) * 4),
        rgba(120, 148, 255, 1) calc(var(--boxBeforeSparkY, 5%) * 5),
        rgb(216, 117, 255) calc(var(--boxBeforeSparkY, 5%) * 6),
        rgb(255, 119, 115) calc(var(--boxBeforeSparkY, 5%) * 7)
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
    opacity: calc(var(--boxBeforeOpacity, 0.5) - 0.3);
  }
`
