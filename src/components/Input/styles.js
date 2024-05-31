import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.light_400};
`

export const Textfield = styled.input`
  height: 4.8rem;
  width: 100%;

  padding: 1.2rem 1.4rem;

  color: ${({ theme }) => theme.colors.light_100};
  background-color: ${({ theme }) => theme.colors.dark_900};
  border: 0;
  border-radius: 0.8rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.light_500};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.light_100};
  }
`