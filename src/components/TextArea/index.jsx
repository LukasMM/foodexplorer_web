import PropTypes from 'prop-types'

import { Container, TextAreaInput, Label } from './styles'

export function TextArea({ id, label, value, ...rest }) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>

      <TextAreaInput htmlFor={id} {...rest}>
        {value}
      </TextAreaInput>
    </Container>
  )
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
}