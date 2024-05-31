import styled from 'styled-components'

import { breakpoints } from '../../styles/breakpoints'
import { mixins } from '../../styles/mixins'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.dark_700};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;

  padding: 5.6rem 2.8rem 2.4rem;

  > a {
    display: none;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    justify-content: center;
    gap: 3.2rem;

    padding: 2.4rem 12.3rem;

    > a {
      display: block;

      height: 3.2rem;

      > svg {
        height: 3.2rem;
        width: 3.2rem;

        color: ${({ theme }) => theme.colors.light_100};
      }
    }
  }
`

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: ${breakpoints.md}) {
    width: 25%;
  }
`

export const Menu = styled.button`
  height: 2.4rem;
  width: 2.4rem;

  background: none;
  border: none;

  > svg {
    height: 100%;
    width: 100%;
    
    color: ${({ theme }) => theme.colors.light_100};
  }

  @media screen and (min-width: ${breakpoints.md}) {
    display: none;
  }
`

export const Hero = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    text-wrap: nowrap;

    > img {
      height: 2.4rem;
      width: 2.4rem;
    }

    > h1 {
      ${mixins.fonts.robotoBoldBigger}
      font-size: 2rem;
    }
  }

  > small {
    color: ${({ theme }) => theme.colors.cake_200};

    ${mixins.fonts.robotoRegularSmallest}
  }

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: column;
    
    > div {
      > img {
        height: 3rem;
        width: 3rem;
      }

      > h1 {
        font-size: 2.4rem;
      }
    }

    > small {
      margin-top: -1.5rem;
    }
  }
`

export const SearchDiv = styled.div`
  display: none;
  
  @media screen and (min-width: ${breakpoints.md}) {
    display: block;

    width: 100%;
  }
`

export const Order = styled.button`
  height: 3.2rem;
  width: 3.2rem;

  background: none;
  border: none;
  position: relative;

  > svg {
    height: 100%;
    width: 100%;

    color: ${({ theme }) => theme.colors.light_100};
  }

  > span {
    ${mixins.fonts.poppinsMedium100}

    background-color: ${({ theme }) => theme.colors.tomato_200};
    color: ${({ theme }) => theme.colors.light_100};

    height: 2.2rem;
    width: 2rem;

    position: absolute;
    top: -0.6rem;
    right: -0.6rem;

    border-radius: 100%;
  }
  
  @media screen and (min-width: ${breakpoints.md}) {
    display: none;
  }
`

export const NewOrder = styled(Link)`
  display: none;
  
  @media screen and (min-width: ${breakpoints.md}) {
    background-color: ${({ theme }) => theme.colors.tomato_100};
    color: ${({ theme }) => theme.colors.light_100};

    height: 5.6rem;
    width: 21.6rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    border-radius: 0.5rem;

    ${mixins.fonts.poppinsMedium100}
    text-decoration: none;

    > svg {
      height: 3.2rem;
      width: 3.2rem;
    }
  }
`