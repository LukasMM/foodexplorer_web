import styled from 'styled-components'

import { breakpoints } from '../../styles/breakpoints'
import { mixins } from '../../styles/mixins'

export const Banner = styled.div`
  display: flex;
  justify-content: center;

  .banner {
    height: 12rem;
    max-width: 112rem;

    background: ${({ theme }) => theme.colors.gradients_200};

    margin: 4.4rem 1.6rem 6.2rem 3.6rem;

    border-radius: 0.8rem;

    > img {
      position: absolute;
      
      width: 19.1rem;
      height: 14.9rem;

      margin-top: -3rem;
      margin-left: -3rem;
    }

    > div {
      padding: 3.4rem 0 0 15.4rem;

      > h1 {
        color: ${({ theme }) => theme.colors.light_300};

        ${mixins.fonts.poppinsMedium400}
        font-weight: 600;
        font-size: 1.8rem;

        margin-bottom: 0.5rem;
      }

      > span {
        color: ${({ theme }) => theme.colors.light_300};

        ${mixins.fonts.poppinsRegular300}
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    .banner {
      height: 24rem;

      padding-right: 10rem;
      margin: 16.4rem 12.4rem 6.2rem;

      > img {
        width: 65.6rem;
        height: 41.2rem;

        margin-top: -14rem;
        margin-left: -5.5rem;
      }

      > div {
        padding: 8.8rem 0 0 59.8rem;

        > h1 {
          ${mixins.fonts.poppinsMedium500}

          margin-bottom: 0.5rem;
        }

        > span {
          ${mixins.fonts.robotoRegularSmall}
        }
      }
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;

  margin: 0 2rem 4.8rem;
`