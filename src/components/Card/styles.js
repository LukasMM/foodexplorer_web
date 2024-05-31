import styled from 'styled-components'

import { mixins } from '../../styles/mixins'
import { breakpoints } from '../../styles/breakpoints'

export const Container = styled.div`
  width: 21rem;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 1.6rem;

  background-color: ${({ theme }) => theme.colors.dark_200};

  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.dark_300};

  @media screen and (min-width: ${breakpoints.md}) {
    width: 30.4rem;
  }
`

export const EditButton = styled.button`
  width: 2.4rem;
  
  display: flex;

  margin-left: auto;

  border: 0;
  background: none;

  .like {
    color: ${({ theme }) => theme.colors.mint_100};
  }

  > svg {
    height: 2.4rem;
    width: 2.4rem;

    cursor: pointer;

    color: ${({ theme }) => theme.colors.light_300};

    &:hover {
      color: ${({ theme }) => theme.colors.mint_100};
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  margin-bottom: 1.5rem;

  cursor: pointer;

  > span {
    color: ${({ theme }) => theme.colors.light_300};

    ${mixins.fonts.poppinsMedium100}
  }

  > p {
    display: none;
  }

  > h1 {
    color: ${({ theme }) => theme.colors.cake_200};

    ${mixins.fonts.robotoRegularSmall}
  }

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (min-width: ${breakpoints.md}) {
    > span {
      ${mixins.fonts.poppinsBold300}
    }

    > p {
      display: block;

      text-align: center;
      ${mixins.fonts.robotoRegularSmaller}
    }

    > h1 {
      ${mixins.fonts.robotoRegularBiggest}
    }
  }
`

export const Image = styled.img`
  height: 8.8rem;
  width: 8.8rem;

  @media screen and (min-width: ${breakpoints.md}) {
    height: 17.6rem;
    width: 17.6rem;
  }
`
