import styled from 'styled-components'

import { mixins } from '../../styles/mixins'
import { breakpoints } from '../../styles/breakpoints'

export const Container = styled.section`
  max-width: 112rem;
  width: 100%;

  > h2 {
    color: ${({ theme }) => theme.colors.light_300};

    margin-bottom: 2.4rem;

    ${mixins.fonts.poppinsMedium400}
    font-size: 1.8rem;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    > h2 {
      font-size: 3.2rem;
    }
  }
`
