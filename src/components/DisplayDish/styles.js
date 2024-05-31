import styled from 'styled-components'

import { mixins } from '../../styles/mixins'
import { breakpoints } from '../../styles/breakpoints'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  .btnAdd {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    max-width: 18.8rem;

    ${mixins.fonts.poppinsMedium200}
    font-size: 1rem;

    > svg {
      height: 2.1rem;
      width: 2.1rem;
    }
  }
  
  @media screen and (min-width: ${breakpoints.md}) {
    .btnAdd {
      ${mixins.fonts.poppinsMedium100}

      > svg {
        display: none;
      }
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  
  > span {
    color: ${({ theme }) => theme.colors.light_300};

    ${mixins.fonts.robotoBoldBig}
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
`