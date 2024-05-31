import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6'

import { Button } from '../Button'

import { Container, Content } from './styles'

export function Display() {
  const [qtd, setQtd] = useState(1)
  
  function handleAdd() {
    setQtd(qtd + 1)
  }

  function handleRemove() {
    if (qtd > 1) {
      setQtd(qtd - 1)
    }
  }

  return (
    <Container>
      <Content>
        <button onClick={() => handleRemove()}>
          <FaMinus />
        </button>

        <span>{qtd.toString().padStart(2, '0')}</span>

        <button onClick={() => handleAdd()}>
          <FaPlus />
        </button>
      </Content>

      <Button className="btnAdd">
        incluir
      </Button>
    </Container>
  )
}