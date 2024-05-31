import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineLeft } from 'react-icons/ai'

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { Container, Content } from "./styles";
import { Input } from '../../components/input';
import { Select } from '../../components/Select';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { FileUpload } from '../../components/FileUpload';
import { Ingredients } from '../../components/Ingredients';
import { api } from '../../services/api';

export function New() {
  const navigate = useNavigate()

  const [img, setImg] = useState(null)
  const [imgName, setImgName] = useState("Selecione imagem")
  const [name, setName] = useState('')
  const [type, setType] = useState('refeicoes')
  const [ingredients, setIngredients] = useState([])
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  function handleImgChange(event) {
    const file = event.target.files[0]
    const fileUpload = new FormData()

    setImgName(event.target.files[0].name)

    fileUpload.append('img', file)
    setImg(fileUpload)
  }

  async function handleNew() {
    if(!img) {
      return alert('Necessário selecionar a imagem do prato!')
    }

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

    const response = await api.post('/dishes', {
      name,
      type,
      ingredients,
      price,
      description
    })

    await api.patch(`/dishes/${response.data.id}`, img)
    
    alert('Prato criado com sucesso!')

    navigate('/')
  }

  return (
    <Container>
      <Header />

      <Content>
        <Link to="/">
          <AiOutlineLeft />
          voltar
        </Link>

        <h1>
          Adicionar prato
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
            onChange={e => setPrice(e.target.value)}
          />
        </div>

        <TextArea
          id="description"
          label="Descrição"
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          onChange={e => setDescription(e.target.value)}
        />

        <Button onClick={handleNew}>
          Salvar alterações
        </Button>
      </Content>

      <Footer />
    </Container>
  )
}