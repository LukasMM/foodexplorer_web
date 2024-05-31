import PropTypes from 'prop-types'

import { Container, SelectInput, Label } from './styles'

export function Select({ id, label, ...rest }) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>

      <SelectInput htmlFor={id} {...rest}>
        <option value="refeicoes">Refeições</option>
        <option value="sobremesas">Sobremesas</option>
        <option value="bebidas">Bebidas</option>
      </SelectInput>
    </Container>
  )
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}