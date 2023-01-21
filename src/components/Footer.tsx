import React from 'react'

import { Slide } from 'react-awesome-reveal'
import {
  BtnFooter,
  Container,
  ContainerFooter,
  Ftimg1,
  Ftimg2,
  Ftimg3,
  Ftimg4,
  ImgFooter,
  ImgLogo,
  Linkfooter,
  TextFooter,
  TextIcon,
} from 'src/styles/StyleFooter'
import logobattlenet from '../assets/footer/logonet.svg'
import icon1 from '../assets/footer/icon1.svg'
import icon2 from '../assets/footer/icon2.svg'
import icon3 from '../assets/footer/icon3.svg'
import apple from '../assets/footer/apple.svg'
import cell from '../assets/footer/cell.svg'
import bord from '../assets/footer/bord.png'
import bord2 from '../assets/footer/bord2.png'
import bord3 from '../assets/footer/bord3.png'
import bord4 from '../assets/footer/bord4.png'

function Footer() {
  return (
    <ContainerFooter>
      <Container>
        <Slide>
          <TextFooter>
            <ImgLogo src={logobattlenet} alt="btnet" />
            <p>Baixe agora o battle.net</p>
            <TextIcon>
              <img src={icon1} alt="btnet" />
              Seus jogos em um só lugar
            </TextIcon>
            <TextIcon>
              <img src={icon2} alt="btnet" />
              Conecte-se aos seus amigos
            </TextIcon>
            <TextIcon>
              <img src={icon3} alt="btnet" />
              Compre jogos e itens digitais
            </TextIcon>
            <BtnFooter>
              <img src={apple} alt="btnet" />
              <div>Baixar para o MacOS</div>
            </BtnFooter>
            <Linkfooter>
              <img src={cell} alt="icone de celular" />
              <span>
                Também disponível como<br></br> <a href="#">aplicativo móvel</a>
              </span>
            </Linkfooter>
          </TextFooter>
        </Slide>
        <ImgFooter>
          <Ftimg1 src={bord} alt="imagem de um dashbord" />
          <Ftimg2 src={bord2} alt="imagem de um dashbord" />
          <Ftimg3 src={bord3} alt="imagem de um dashbord" />
          <Ftimg4 src={bord4} alt="imagem de um dashbord" />
        </ImgFooter>
      </Container>
    </ContainerFooter>
  )
}

export default Footer
