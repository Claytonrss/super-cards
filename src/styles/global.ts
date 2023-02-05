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



html,
body {
  height: 100%;
  background-color: #333844;
  padding: 0;
  z-index: 1;
  transform: translate3d(0, 0, 0.1px);
}
body {
  color: white;
  background-color: #333844;
  font-family: "Heebo", sans-serif;
  text-align: center;
}
h1 {
  display: block;
  margin: 30px 0;
}
p {
  margin-top: 5px;
  font-weight: 200;
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
