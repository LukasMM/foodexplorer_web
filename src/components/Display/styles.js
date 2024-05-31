import styled from 'styled-components'

import { mixins } from '../../styles/mixins'
import { breakpoints } from '../../styles/breakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;

  .btnAdd {
    height: 3.2rem;
    width: 16.2rem;

    padding: 0;
  }
  
  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    align-items: center;

    .btnAdd {
      height: 4.8rem;
      width: 9.2rem;
    }
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;

  > span {
    color: ${({ theme }) => theme.colors.light_300};

    ${mixins.fonts.robotoRegularSmall}
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    
    border: none;
    background: none;

    > svg {
      height: 2.4rem;
      width: 2.4rem;

      cursor: pointer;

      color: ${({ theme }) => theme.colors.light_100};

      &:hover {
        color: ${({ theme }) => theme.colors.light_400};
      }
    }
  }
  
  @media screen and (min-width: ${breakpoints.md}) {
    > span {
      ${mixins.fonts.robotoBoldBig}
    }
  }
`