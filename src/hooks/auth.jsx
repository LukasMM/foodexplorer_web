import { createContext, useContext, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState([])

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodexplorer:token', token)
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, data })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível realizar o acesso!')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@foodexplorer:token');
    localStorage.removeItem('@foodexplorer:user');

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token")
    const user = localStorage.getItem('@foodexplorer:user')

    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])
  
  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }