import styled from 'styled-components'

import { breakpoints } from '../../styles/breakpoints'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  place-content: center;
  gap: 7.2rem;

  padding: 0 6.4rem;

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  text-wrap: nowrap;

  > img {
    height: 4.2rem;
    width: 4.2rem;
  }

  > h1 {
    ${mixins.fonts.robotoBoldGiant}

    font-size: 3.2rem;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    > img {
      height: 5rem;
      width: 5rem;
    }

    > h1 {
      font-size: 4.2rem;
    }
  }
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > h1 {
    display: none;

    ${mixins.fonts.poppinsMedium400}
  }

  > a {
    color: ${({ theme }) => theme.colors.light_100};
    text-align: center;

    ${mixins.fonts.poppinsMedium100}
    text-decoration: none;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    max-height: 62rem;
    max-width: 47.6rem;
    background-color: ${({ theme }) => theme.colors.dark_700};

    padding: 6.4rem;
    border-radius: 1.6rem;

    > h1 {
      display: block;
    }
  }
`