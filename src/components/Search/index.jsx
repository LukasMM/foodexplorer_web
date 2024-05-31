import { FaSearch } from 'react-icons/fa'

import { useSearch } from '../../hooks/search'

import { Container } from './styles'

export function Search({ ...rest }) {
  const { search, setSearch } = useSearch()

  return (
    <Container {...rest}>
      <FaSearch />
      <input
        value={search}
        placeholder="Busque por pratos ou ingredientes"
        onChange={e => setSearch(e.target.value)}
      />
    </Container>
  )
}