import React from 'react'
import img1 from '../../assets/icons-modal/img1.png'
import img2 from '../../assets/icons-modal/img2.png'
import img3 from '../../assets/icons-modal/img3.png'
import img4 from '../../assets/icons-modal/img4.png'
import img5 from '../../assets/icons-modal/img5.png'
import img6 from '../../assets/icons-modal/img6.png'
import img7 from '../../assets/icons-modal/img7.png'
import img8 from '../../assets/icons-modal/img8.png'
import img9 from '../../assets/icons-modal/img9.png'
import img10 from '../../assets/icons-modal/img10.png'
import img11 from '../../assets/icons-modal/img11.png'
import img12 from '../../assets/icons-modal/img12.png'
import listicon1 from '../../assets/icons/listicon1.svg'
import listicon2 from '../../assets/icons/listicon2.svg'
import listicon3 from '../../assets/icons/listicon3.png'
import listicon4 from '../../assets/icons/listicon4.svg'
import {
  ContainerModalMenu,
  Text,
  ContainerIcons,
  Icons,
  Footer,
  StyledUl,
} from 'src/styles/styleaccordion'

function SectionMenuModal() {
  const images = [
    {
      src: img1,
      text: 'Diablo® II ressurected',
    },
    {
      src: img2,
      text: 'Overwatch® 2',
    },
    {
      src: img3,
      text: 'World of Warcraft®',
    },
    {
      src: img4,
      text: 'Hearthstone®',
    },
    {
      src: img5,
      text: 'Heroes of the storm®',
    },
    {
      src: img6,
      text: 'Warcraft® III Reforged',
    },
    {
      src: img7,
      text: 'Diablo® IV',
    },
    {
      src: img8,
      text: 'Diablo® Immortal',
    },
    {
      src: img9,
      text: 'Diablo® III',
    },
    {
      src: img10,
      text: 'StarCraft® II',
    },
    {
      src: img11,
      text: 'StarCraft® Remastered',
    },
    {
      src: img12,
      text: 'Arcade da Blizzard®',
    },
  ]
  return (
    <ContainerModalMenu>
      <ContainerIcons>
        {images.map((image, index) => (
          <Icons key={index}>
            <img src={image.src} alt="icone" />
            <Text>{image.text}</Text>
          </Icons>
        ))}
      </ContainerIcons>
      <Footer>
        <StyledUl>
          <div>
            <img src={listicon1} alt="icone" />
            Ver todos jogos
          </div>
          <div>
            <img src={listicon2} alt="icone" />
            Aplicativo Battle.net
          </div>
          <div>
            <img src={listicon3} alt="icone" />
            Downloads
          </div>
          <div>
            <img src={listicon4} alt="icone" />
            Fóruns dos jogos
          </div>
        </StyledUl>
      </Footer>
    </ContainerModalMenu>
  )
}

export default SectionMenuModal
