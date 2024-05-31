import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiReceiptLight, PiListBold } from 'react-icons/pi'
import { LuLogOut } from 'react-icons/lu'

import { useAuth } from '../../hooks/auth'

import HeroImg from '../../assets/hero.svg'

import { Search } from '../Search'

import { Container, Content, Menu, Hero, SearchDiv, NewOrder, Order } from './styles'
import { Sidebar } from '../Sidebar'

export function Header() {
  const [sidebar, setSidebar] = useState(false)

  const { user, signOut } = useAuth()

  const showSidebar = () => setSidebar(!sidebar)

  function handleLogout() {
    signOut()
  }

  return (
    <Container>
      <Content>
        {user.admin == true ? (
          <>
            <Menu>
              <PiListBold className="faBar" onClick={showSidebar} />
            </Menu>

            {sidebar && <Sidebar active={sidebar} sidebarClick={showSidebar} onLogout={handleLogout} />}

            <Hero>
              <div>
                <img src={HeroImg} alt="logo do food explorer" />
                <h1>food explorer</h1>
              </div>
              <small>admin</small>
            </Hero>
          </>
        ) : (
          <>
            <Menu>
              <PiListBold className="faBar" onClick={showSidebar} />
            </Menu>

            {sidebar && <Sidebar active={sidebar} sidebarClick={showSidebar} onLogout={handleLogout} />}

            <Hero>
              <div>
                <img src={HeroImg} alt="logo do food explorer" />
                <h1>food explorer</h1>
              </div>
            </Hero>
            
            <Order>
              <PiReceiptLight />
              <span>0</span>
            </Order>
          </>
        )}
      </Content>

      <SearchDiv>
        <Search />
      </SearchDiv>

      <div>
        {user.admin == 1 ? (
          <NewOrder to="/new">
            Novo prato
          </NewOrder>
        ) : (
          <NewOrder to="/cart">
            <PiReceiptLight /> Pedidos (0)
          </NewOrder>
        )}
      </div>

      <Link onClick={handleLogout} to="/">
        <LuLogOut />
      </Link>
    </Container>
  )
}