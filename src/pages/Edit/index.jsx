import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AiOutlineLeft } from 'react-icons/ai'

import { api } from '../../services/api'

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from '../../components/input';
import { Select } from '../../components/Select';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { FileUpload } from '../../components/FileUpload';
import { Ingredients } from '../../components/Ingredients';

import { Container, Content } from "./styles";

export function Edit() {
  const [food, setFood] = useState([])

  const [img, setImg] = useState(null)
  const [imgName, setImgName] = useState("Selecione imagem")
  const [name, setName] = useState('')
  const [type, setType] = useState('refeicoes')
  const [ingredients, setIngredients] = useState([])
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const params = useParams()
  const navigate = useNavigate()

  function handleImgChange(event) {
    const file = event.target.files[0]
    const fileUpload = new FormData()

    setImgName(event.target.files[0].name)

    fileUpload.append('img', file)
    setImg(fileUpload)
  }

  async function handleDelete() {
    await api.delete(`/dishes/${params.id}`)
    
    alert('Prato deletado com sucesso!')

    navigate('/')
  }

  async function handlePut() {
    if(!name) {
      return alert('Necessário informar o nome do prato!')
    }

    if(ingredients == "") {
      return alert('Necessário informar um ingrediente do prato!')
    }

    if(!price) {
      return alert('Necessário informar o preço do prato!')
    }

    if(!description) {
      return alert('Necessário informar a descrição do prato!')
    }

    await api.put(`/dishes/${params.id}`, {
      name,
      type,
      ingredients,
      price,
      description
    })

    if (img) {
      await api.patch(`/dishes/${params.id}`, img)
    }
    
    alert('Prato alterado com sucesso!')

    navigate(`/dish/${params.id}`)
  }

  useEffect(() => {
    async function getDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setFood(response.data)

      setImgName(response.data.img)
      setName(response.data.name)
      setType(response.data.type)
      setIngredients(response.data.ingredients)
      setPrice(response.data.price)
      setDescription(response.data.description)
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

        <h1>
          Editar prato
        </h1>

        <div className='first'>
          <FileUpload
            id="img"
            label={imgName}
            onChange={handleImgChange}
          />
          
          <Input
            id="name"
            label="Nome"
            placeholder="Ex.: Salada Ceasar"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <Select
            id="type"
            label="Categoria"
            value={type}
            onChange={e => setType(e.target.value)}
          />
        </div>

        <div className='second'>
          <Ingredients
            items={ingredients}
            setItems={setIngredients}
          />
          
          <Input
            id="price"
            label="Preço"
            placeholder="R$ 00,00"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>

        <TextArea
          id="description"
          label="Descrição"
          defaultValue={description}
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          onChange={e => setDescription(e.target.value)}
        />

        <div className='buttons'>
          <Button className='btnDelete' onClick={handleDelete}>
            Excluir prato
          </Button>

          <Button className='btnAdd' onClick={handlePut}>
            Salvar alterações
          </Button>
        </div>
      </Content>

      <Footer />
    </Container>
  )
}