import styled from 'styled-components'

export const Wrapper = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    perspective: 2000px;
    position: relative;
    z-index: 1;
    gap: 4em;
    padding: 4rem;
    transform: translate3d(0.1px, 0.1px, 0.1px);
  }

  @media screen and (min-width: 600px) {
    & {
      flex-direction: row;
    }
  }
`
