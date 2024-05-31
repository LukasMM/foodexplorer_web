import PropTypes from 'prop-types'

import { Container, Textfield, Label } from './styles'

export function Input({ id, label, ...rest }) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>

      <Textfield id={id} {...rest} />
    </Container>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}