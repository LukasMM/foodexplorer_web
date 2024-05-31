import 'keen-slider/keen-slider.min.css'

import { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'

import { useSearch } from '../../hooks/search'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Card } from '../../components/Card'

import ImgMenu from '../../assets/imgMenu.png'

import { Banner, Content } from './styles'

export function Home() {
  const [dishes, setDishes] = useState([])
  const { search } = useSearch()

  const [sliderRef] = useKeenSlider({
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 1.8, spacing: 16 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 3.4, spacing: 28 },
      },
    },
    slides: { perView: 6 },
  })

  useEffect(() => {
    async function getDishes() {
      const response = await api.get(`/dishes?search=${search}`)
      setDishes(response.data)
    }

    getDishes()
  }, [search])

  return (
    <>
      <Header />

      <Banner>
        <div className="banner">
          <img src={ImgMenu} alt="Imagem de Comida" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
          </div>
        </div>
      </Banner>

      <Content>
        <Section title="Refeições">
          <div ref={sliderRef} className="keen-slider">
            {
              dishes && dishes.map((dish, index) => {
                if (dish.type == 'refeicoes') {
                  return (
                    <div key={dish.id.toString()} className={`keen-slider__slide number-slide${index + 1}`}>
                      <Card
                        id={dish.id}
                        img={dish.img}
                        title={dish.name}
                        description={dish.description}
                        price={dish.price}
                      />
                    </div>
                  )
                }
              })
            }
          </div>
        </Section>

        <Section title="Sobremesas">
          {
            dishes && dishes.map((dish, index) => {
              if (dish.type == 'sobremesas') {
                return (
                  <div key={dish.id.toString()} className={`keen-slider__slide number-slide${index + 1}`}>
                    <Card
                      id={dish.id}
                      img={dish.img}
                      title={dish.name}
                      description={dish.description}
                      price={dish.price}
                    />
                  </div>
                )
              }
            })
          }
        </Section>

        <Section title="Bebidas">
          {
            dishes && dishes.map((dish, index) => {
              if (dish.type == 'bebidas') {
                return (
                  <div key={dish.id.toString()} className={`keen-slider__slide number-slide${index + 1}`}>
                    <Card
                      id={dish.id}
                      img={dish.img}
                      title={dish.name}
                      description={dish.description}
                      price={dish.price}
                    />
                  </div>
                )
              }
            })
          }
        </Section>
      </Content>

      <Footer />
    </>
  )
}