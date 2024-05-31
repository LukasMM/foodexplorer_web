import PropTypes from 'prop-types'

import { Container } from './styles'

export function Button({ children, ...rest  }) {
  return (
    <Container type="button" {...rest}>
      { children }
    </Container>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired
}