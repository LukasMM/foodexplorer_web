import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AiOutlineLeft } from 'react-icons/ai'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { DisplayDish } from '../../components/DisplayDish'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, Content, DishContent, Description, Ingredient } from './styles'
import { Button } from '../../components/Button'

export function Dish() {
  const [food, setFood] = useState([])

  const { user } = useAuth()
  const params = useParams()
  const navigate = useNavigate()

  const toEdit = () => {
    navigate(`/edit/${params.id}`)
  }

  useEffect(() => {
    async function getDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setFood(response.data)
    }

    getDish()
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <Link to="/">
          <AiOutlineLeft />
          voltar
        </Link>

        {
          food && (
            <DishContent key={food.name}>
              <img alt='foto do prato' src={`${api.defaults.baseURL}/files/${food.img}`} />

              <div>
                <Description>
                  <h1>{food.name}</h1>
                  <p>{food.description}</p>
                  
                  <div>
                    {
                      food.ingredients && food.ingredients.map((ingredient) => (
                        <Ingredient key={ingredient}>
                          {ingredient}
                        </Ingredient>
                      ))
                    }
                  </div>
                </Description>

                {user.admin == true ? (
                  <Button className="btnEdit" onClick={() => toEdit()}>
                    Editar prato
                  </Button>
                ) : (
                  <DisplayDish price={food.price} />
                )}
              </div>
            </DishContent>
          )
        }
      </Content>

      <Footer />
    </Container>
  )
}