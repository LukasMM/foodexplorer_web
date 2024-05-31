import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Button } from '../../components/Button'
import { Input } from '../../components/input'

import HeroImg from '../../assets/hero.svg'

import { Container, Hero, Form } from './styles'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  
  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Favor preencher todos os campos!')
    }

    api.post('/users', { name, email, password })
      .then(() => {
        alert('Usuário criado com sucesso!')

        navigate('/')
      }).catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Não foi possível realizar o cadastro.')
        }
      })
  }

  return (
    <Container>
      <Hero>
        <img src={HeroImg} alt="logo do food explorer" />
        <h1>food explorer</h1>
      </Hero>

      <Form>
        <h1>Crie sua conta</h1>

        <Input
          id="name"
          type="text"
          label="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          onChange={e => setName(e.target.value)}
        />

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
        
        <Button onClick={handleSignUp}>
          Criar conta
        </Button>
        
        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}