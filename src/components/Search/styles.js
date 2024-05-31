import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  color: ${({ theme }) => theme.colors.light_500};
  background-color: ${({ theme }) => theme.colors.dark_900};

  border-radius: 0.5rem;

  padding: 1.4rem 1.2rem;

  > input {
    width: 60%;

    color: ${({ theme }) => theme.colors.light_100};
    background: transparent;
    border: none;
      
    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.light_100};
    }
  }

  > svg {
    color: ${({ theme }) => theme.colors.light_400};

    height: 2.4rem;
    width: 2.4rem;
  }
`