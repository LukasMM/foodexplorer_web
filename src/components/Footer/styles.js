import styled from 'styled-components'

import { breakpoints } from '../../styles/breakpoints'
import { mixins } from '../../styles/mixins'

export const Container = styled.footer`
  height: 7.7rem;
  
  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.colors.dark_600};

  padding: 2.4rem;

  @media screen and (min-width: ${breakpoints.md}) {
    justify-content: space-between;

    padding: 2.4rem 12.3rem;
  }
`

export const Hero = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  text-wrap: nowrap;

  > img {
    height: 1.8rem;
    width: 2.2rem;
  }

  > h1 {
    color: ${({ theme }) => theme.colors.light_700};
    font-size: 1.5rem;
  } 

  @media screen and (min-width: ${breakpoints.md}) {
    gap: 1rem;

    > img {
      height: 3rem;
      width: 3rem;
    }
  }
`

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.light_200};

  ${mixins.fonts.robotoRegularSmaller}
  font-size: 1.2rem;

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 1.4rem;
  }
`