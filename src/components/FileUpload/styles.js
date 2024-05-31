import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.light_400};
`

export const Content = styled.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  height: 4.8rem;
  width: 100%;

  padding: 1.2rem 1.4rem;

  color: ${({ theme }) => theme.colors.light_100};
  background-color: ${({ theme }) => theme.colors.dark_900};
  border: 0;
  border-radius: 0.8rem;

  > svg {
    height: 2.4rem;
    width: 2.4rem;
  }

  > span {
    ${mixins.fonts.poppinsMedium100}
  }
`

export const Input = styled.input`
  display: none;
`