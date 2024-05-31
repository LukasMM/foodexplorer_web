import PropTypes from 'prop-types'
import { FiUpload } from 'react-icons/fi'

import { Container, Content, Input, Label } from './styles'

export function FileUpload({ id, label, ...rest }) {
  return (
    <Container>
      <Label>Imagem do prato</Label>
      <Content htmlFor={id}>
        <FiUpload />
        <span>{label}</span>

        <Input 
          id={id}
          type='file'
          {...rest}
        />
      </Content>
    </Container>
  )
}

FileUpload.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}