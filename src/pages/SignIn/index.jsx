import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import HeroImg from '../../assets/hero.svg'

import { Container, Hero, Form } from './styles'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Hero>
        <img src={HeroImg} alt="logo do food explorer" />
        <h1>food explorer</h1>
      </Hero>

      <Form>
        <h1>Faça login</h1>

        <Input
          id="email"
          type="text"
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={e => setEmail(e.target.value)}
        />
        
        <Input
          id="password"
          type="password"
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          onChange={e => setPassword(e.target.value)}
        />
        
        <Button onClick={handleSignIn}>
          Entrar
        </Button>
        
        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>
    </Container>
  )
}