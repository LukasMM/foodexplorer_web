import { Container, Hero, Span } from './styles'

import HeroImg from '../../assets/hero_2.svg'

export function Footer() {
  return (
    <Container>
      <Hero>
        <img src={HeroImg} alt="logo do food explorer" />
        <h1>food explorer</h1>
      </Hero>

      <Span>© 2023 - Todos os direitos reservados.</Span>
    </Container>
  )
}