import PropTypes from 'prop-types'

import { useState } from 'react'
import { GoPlus, GoX } from 'react-icons/go'

import { Container, Label, IngredientsContent, Content } from './styles'

export function Ingredients({ items, setItems }) {
  const [newItem, setNewItem] = useState([]);
  
  function handleAdd() {
    setItems(prevState => [...prevState, newItem]);
    setNewItem("");
}

  function handleRemove(deleted) {
    setItems(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  return (
    <Container>
      <Label>Ingredientes</Label>

      <IngredientsContent>
        {
          items.map((ingredient, index) => (
            <Content key={String(index)}>
              <input type="text" value={ingredient} readOnly />
    
              <button onClick={() => handleRemove(ingredient)}>
                <GoX />
              </button>
            </Content>
          ))
        }

        <Content isnew="true">
          <input 
            type="text"
            placeholder="Adicionar"
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
          />

          <button onClick={handleAdd}>
            <GoPlus />
          </button>
        </Content>
      </IngredientsContent>
    </Container>
  )
}

Ingredients.propTypes = {
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
}