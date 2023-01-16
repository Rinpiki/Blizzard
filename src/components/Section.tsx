import React, { useState } from 'react'
import {
  Container,
  ContainerImg,
  ContainerLogoVideo,
  ContainerTextVideo,
  Logo,
  StyledButton,
  StyledImg,
  StyledP,
  Text,
  TextoH1,
  UlIcons,
  Video,
} from 'src/styles/stylesection'
import banner1 from '../assets/banner/banner1.jpg'
import banner2 from '../assets/banner/banner2.jpg'
import banner3 from '../assets/banner/banner3.jpg'
import banner4 from '../assets/banner/banner4.jpg'
import banner5 from '../assets/banner/banner5.jpg'

import icon1 from '../assets/icons-first-section/icon1.png'
import icon2 from '../assets/icons-first-section/icon2.png'
import icon3 from '../assets/icons-first-section/icon3.png'
import icon4 from '../assets/icons-first-section/icon4.png'
import icon5 from '../assets/icons-first-section/icon5.png'

import logo1 from '../assets/icons-first-section/logo&video/logo1.png'
import logo2 from '../assets/icons-first-section/logo&video/logo2.png'
import logo3 from '../assets/icons-first-section/logo&video/logo3.png'

import preview1 from '../assets/icons-first-section/logo&video/video-preview1.png'
import preview2 from '../assets/icons-first-section/logo&video/video-preview2.png'
import preview3 from '../assets/icons-first-section/logo&video/video-preview3.png'

import previewHover1 from '../assets/icons-first-section/logo&video/video-preview-hover1.png'
import previewHover2 from '../assets/icons-first-section/logo&video/video-preview-hover2.png'
import previewhover3 from '../assets/icons-first-section/logo&video/video-preview-hover3.png'

function Section() {
  const [imgSrc1, setImgSrc1] = useState(preview1)
  const filters = ['grayscale(100%)', 'none']
  const [filter1, setFilter1] = useState(filters[1])
  const [filter2, setFilter2] = useState(filters[0])
  const [filter3, setFilter3] = useState(filters[0])
  const [filter4, setFilter4] = useState(filters[0])
  const [filter5, setFilter5] = useState(filters[0])
  const [banner, setBanner] = useState(banner1)
  const [text, setText] = useState('Retorne à escuridão com o game Diablo IV')
  const [styledP, setStyledp] = useState(
    'O retorno de Lilith traz uma era de escuridão e sofrimento',
  )
  const [btnText, setbtnText] = useState('Jogue Agora')
  const setOption = (event: React.MouseEvent<HTMLImageElement>) => {
    const value = event.currentTarget.id
    if (value == 'icon1') {
      setBanner(banner1)
      setFilter1(filters[1])
      setFilter2(filters[0])
      setFilter3(filters[0])
      setFilter4(filters[0])
      setFilter5(filters[0])
      setText('Retorne à escuridão com o game Diablo IV')
      setStyledp('O retorno de Lilith traz uma era de escuridão e sofrimento')
      setbtnText('Jogue agora')
    } else if (value == 'icon2') {
      setBanner(banner2)
      setFilter1(filters[0])
      setFilter2(filters[1])
      setFilter3(filters[0])
      setFilter4(filters[0])
      setFilter5(filters[0])
      setText('Novo pacote de expansão de Hearthstone')
      setStyledp(
        'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
      )
      setbtnText('Reserve agora na pré-venda')
    } else if (value == 'icon3') {
      setBanner(banner3)
      setFilter1(filters[0])
      setFilter2(filters[0])
      setFilter3(filters[1])
      setFilter4(filters[0])
      setFilter5(filters[0])
      setText('Desbrave as Terras Sombrias em Shadowlands! ')
      setStyledp('O que jaz além do mundo que você conhece?')
      setbtnText('Reserve agora na pré-venda')
    } else if (value == 'icon4') {
      setBanner(banner4)
      setFilter1(filters[0])
      setFilter2(filters[0])
      setFilter3(filters[0])
      setFilter4(filters[1])
      setFilter5(filters[0])
      setText('Matança de demônios em qualquer lugar')
      setStyledp('Salve Santuário nos dispositivos móveis e PC')
      setbtnText('Jogue agora')
    }
    if (value == 'icon5') {
      setBanner(banner5)
      setFilter1(filters[0])
      setFilter2(filters[0])
      setFilter3(filters[0])
      setFilter4(filters[0])
      setFilter5(filters[1])
      setText('O supremo jogo de estratégia em tempo real')
      setStyledp('Conquiste a galáxia como terrano, zerg ou protoss')
      setbtnText('Jogue agora')
    }
  }

  const icons = [
    { src: icon1, alt: 'primeiro icone', filter: filter1, id: 'icon1' },
    { src: icon2, alt: 'segundo icone', filter: filter2, id: 'icon2' },
    { src: icon3, alt: 'terceiro icone', filter: filter3, id: 'icon3' },
    { src: icon4, alt: 'quarto icone', filter: filter4, id: 'icon4' },
    { src: icon5, alt: 'quinto icone', filter: filter5, id: 'icon5' },
  ]
  function generateProps(icon: any) {
    return {
      filter: icon.filter,
      id: icon.id,
      onClick: setOption,
      src: icon.src,
      alt: icon.alt,
    }
  }

  return (
    <ContainerImg backgroundImage={banner}>
      <Container>
        <div>
          <TextoH1>{text}</TextoH1>
          <StyledP> {styledP}</StyledP>
          <StyledButton>{btnText}</StyledButton>
        </div>
        <UlIcons>
          {icons.map((icon, i) => (
            <StyledImg key={i} {...generateProps(icon)} />
          ))}
        </UlIcons>
      </Container>
      <ContainerLogoVideo>
        {}
        <Logo src={logo1} />
        <ContainerTextVideo>
          <Video
            src={imgSrc1}
            onMouseOver={() => setImgSrc1(previewHover1)}
            onMouseOut={() => setImgSrc1(preview1)}
          />
        </ContainerTextVideo>
      </ContainerLogoVideo>
    </ContainerImg>
  )
}

export default Section
