import PropTypes from 'prop-types'

import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6'
import { PiReceiptLight } from 'react-icons/pi'

import { Button } from '../Button'

import { Container, Content } from './styles'

export function DisplayDish({ price }) {
  const [qtd, setQtd] = useState(1)
  const [cost, setCost] = useState(parseFloat(price.replace(',', '.')))
  
  function handleAdd() {
    const qtdDish = qtd + 1

    setQtd(qtdDish)
    setCost(parseFloat(price.replace(',', '.')) * qtdDish)
  }

  function handleRemove() {
    if (qtd > 1) {
      const qtdDish = qtd - 1

      setQtd(qtdDish)
      setCost(parseFloat(price.replace(',', '.')) * qtdDish)
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
        <PiReceiptLight />
        pedir {cost.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </Button>
    </Container>
  )
}

DisplayDish.propTypes = {
  price: PropTypes.string,
}