import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  .card{
    width: 500px;
    height: 700px;
    position: relative;
    overflow: hidden;
    margin: 20px;
    z-index: 10;
    animation: none;
    transition: all 0.1s ease-out;
    will-change: transform, filter, box-shadow;
    background-size: cover;
    transform-origin: center;

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
  }


  html,
  body {
    height: 100%;
    background-color: #333844;
    padding: 0;
    z-index: 1;
    transform: translate3d(0, 0, 0.1px);
  }

  #app {
    position: relative;
  }


  html,
  body,
  main {
    min-height: 100%;
  }

`

export default GlobalStyles
