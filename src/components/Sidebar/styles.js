import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: 
  "header"
  "content"
  "brand";

  background-color: ${({ theme }) => theme.colors.dark_400};

  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  left: ${({ $isactive }) => $isactive == 'true' ? '0' : '-100%'};
  z-index: 2;
`

export const Header = styled.div`
  grid-area: header;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  padding: 5.6rem 0 0 2.8rem;

  background-color: ${({ theme }) => theme.colors.dark_700};

  cursor: pointer;

  > svg {
    width: 1.8rem;
    height: 1.8rem;
  }

  > span {
    color: ${({ theme }) => theme.colors.light_100};

    ${mixins.fonts.robotoRegularSmall}
    font-size: 2rem;
  }

  &:hover {
    > svg {
      color: ${({ theme }) => theme.colors.tomato_200};
    }

    > span {
    color: ${({ theme }) => theme.colors.light_500};
    }
  }
`

export const Content = styled.div`
  grid-area: content;

  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  padding: 0 2.8rem;
  margin-top: 3.6rem;

  .buttons{
    display: flex;
    flex-direction: column;

    > a {
      color: ${({ theme }) => theme.colors.light_300};

      ${mixins.fonts.poppinsRegular300}
      text-decoration: none;

      border-bottom: 1px solid ${({ theme }) => theme.colors.dark_1000};

      padding: 1rem;

      &:hover {
        color: ${({ theme }) => theme.colors.light_500};
      }
    }
  }
`

export const Brand = styled.div`
  grid-area: brand;
`
