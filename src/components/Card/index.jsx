import PropTypes from 'prop-types'

import { useNavigate } from 'react-router-dom'
import { GoPencil } from 'react-icons/go'
import { FaRegHeart } from 'react-icons/fa'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Display } from '../Display'

import { Container, EditButton, Content, Image } from './styles'
import { useState } from 'react'

export function Card({ id, img, title, description, price }) {
  const [like, setLike] = useState(false)

  const { user } = useAuth()
  const navigate = useNavigate()

  const toDishes = () => {
    navigate(`/dish/${id}`)
  }

  const toDishesEdit = () => {
    navigate(`/edit/${id}`)
  }

  const toDishLike = () => {
    setLike(!like)
  }

  return (
    <Container>
      <EditButton>
        {user.admin == true ? (
          <GoPencil onClick={() => toDishesEdit()} />
        ) : (
          <FaRegHeart className={`${like ? 'like' : ''}`} onClick={() => toDishLike()} />
        )}
      </EditButton>

      <Content onClick={() => toDishes()}>
        <Image
          src={`${api.defaults.baseURL}/files/${img}`}
          alt="foto do prato"
        />

        <span>{title} {">"}</span>
        <p>{description.slice(0, 65)}{description.length > 65 ? '...' : ''}</p>
        <h1>R$ {price}</h1>
      </Content>

      {user.admin == false && (
        <Display value={price} />
      )}
    </Container>
  )
}

Card.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string
}