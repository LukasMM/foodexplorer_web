import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.light_400};
`

export const IngredientsContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1.6rem;

  border-radius: 0.8rem;
  padding: 0.8rem;

  background-color: ${({ theme }) => theme.colors.dark_900};
`

export const Content = styled.div`
  display: flex;
  align-items: center;

  padding: 0.8rem 1.6rem;

  background-color: ${({ theme, isnew }) => isnew ? 'transparent' : theme.colors.light_600};

  border: ${({ theme, isnew }) => isnew ? `1px dashed ${theme.colors.light_500}` : 'none'};
  border-radius: 0.8rem;

  > input {
    width: 8rem;

    background-color: transparent;
    color: ${({ theme, isnew }) => isnew ? theme.colors.light_500 : theme.colors.light_100};

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }
  }

  > button {
    display: flex;

    height: 1.4rem;

    border: none;
    background: none;

    > svg {
      height: 100%;
      width: 100%;

      color: ${({ theme, isnew }) => isnew ? theme.colors.light_500 : theme.colors.light_100};
    }
  }
`