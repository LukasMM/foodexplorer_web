import styled from 'styled-components'

import { breakpoints } from '../../styles/breakpoints'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin: auto 3.2rem;
  margin-top: 1.2rem;
  margin-bottom: 5.4rem;

  > a {
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.light_300};

    ${mixins.fonts.poppinsMedium500}
    font-size: 1.6rem;
    text-decoration: none;
  }

  > h1 {
    color: ${({ theme }) => theme.colors.light_300};

    ${mixins.fonts.poppinsMedium400}
  }

  .first {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .second {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  > button {
    background-color: ${({ theme }) => theme.colors.tomato_400};
  }

  @media screen and (min-width: ${breakpoints.md}) {
    margin: 4rem 12rem auto;

    .first {
      display: grid;
      grid-template-columns: 23rem auto 36rem;
      gap: 3.2rem;
    }

    .second {
      display: grid;
      grid-template-columns: auto 25rem;
      gap: 3.2rem;
    }

    > button {
      width: 17.2rem;
      margin-left: auto;
    }
  }
`