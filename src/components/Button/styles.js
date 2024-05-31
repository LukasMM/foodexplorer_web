import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tomato_100};
  color: ${({ theme }) => theme.colors.light_100};

  height: 4.8rem;
  border: 0;
  padding: 1.2rem 2.4rem;
  border-radius: 0.6rem;

  ${mixins.fonts.poppinsMedium100}

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tomato_200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.tomato_400};
  }
`
