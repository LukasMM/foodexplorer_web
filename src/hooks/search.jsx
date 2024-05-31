import { createContext, useContext, useState } from 'react'

import PropTypes from 'prop-types'

const SearchContext = createContext({})

function SearchProvider({ children }) {
  const [search, setSearch] = useState([])
  
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired
}

function useSearch() {
  const context = useContext(SearchContext)

  return context
}

export { SearchProvider, useSearch }