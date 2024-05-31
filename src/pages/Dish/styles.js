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
  gap: 1.6rem;

  margin: auto 5.4rem;

  > a {
    display: flex;
    align-items: center;
    
    margin-top: 3.6rem;

    color: ${({ theme }) => theme.colors.light_300};

    ${mixins.fonts.poppinsMedium400}
    font-size: 2.4rem;

    text-decoration: none;

    > svg {
      height: 3.2rem;
      width: 3.2rem;
    }
  }
  
  @media screen and (min-width: ${breakpoints.md}) {
    max-width: 111.2rem;

    gap: 4.2rem;

    margin: auto;
    margin-top: 0;
  }
`

export const DishContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  
  margin-bottom: 3.6rem;

  > img {
    height: 26.4rem;
    width: 26.4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
  }
  
  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 4.8rem;

    > img {
      height: 39rem;
      width: 39rem;
    }

    > div {
      align-items: flex-start;
    }
    
    .btnEdit {
      width: 13.1rem;
    }
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  > h1 {
    ${mixins.fonts.poppinsMedium400}
    font-size: 2.7rem;
  }

  > p {
    text-align: center;

    ${mixins.fonts.poppinsRegular300}
    font-size: 1.6rem;
  }

  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.4rem;
  }
  
  @media screen and (min-width: ${breakpoints.md}) {
    align-items: start;

    > h1 {
      ${mixins.fonts.poppinsMedium500}
    }

    > p {
      text-align: start;

      ${mixins.fonts.poppinsRegular300}
    }
  }
`

export const Ingredient = styled.button`
  background-color: ${({ theme }) => theme.colors.dark_1000};
  color: ${({ theme }) => theme.colors.light_100};

  border: 0;
  border-radius: 0.5rem;
  padding: 0.4rem 0.8rem;

  ${mixins.fonts.poppinsMedium100}
`