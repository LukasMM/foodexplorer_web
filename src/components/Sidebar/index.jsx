import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { FaTimes } from 'react-icons/fa'

import { useAuth } from '../../hooks/auth'

import { Search } from '../Search'
import { Footer } from '../Footer'

import { Container, Header, Content, Brand } from './styles'

export function Sidebar({ active, sidebarClick, onLogout }) {
  const { user } = useAuth()

  return (
    <Container $isactive={active.toString()}>
      <Header onClick={sidebarClick}>
        <FaTimes />
        <span>Menu</span>
      </Header>

      <Content>
        <Search />

        {user.admin == 1 ? (
          <div className="buttons">
            <Link to="/new">Novo prato</Link>
            <Link to="/" onClick={onLogout}>Sair</Link>
          </div>
        ): (
          <div className="buttons">
            <Link to="/" onClick={onLogout}>Sair</Link>
          </div>
        )}
      </Content>

      <Brand>
        <Footer />
      </Brand>
    </Container>
  )
}

Sidebar.propTypes = {
  active: PropTypes.bool.isRequired,
  sidebarClick: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
}