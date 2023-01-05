import React from 'react'
import {
  ContainerIconsTwo,
  ContainerModalMenu,
  ContainerModalMenuTwo,
  Footer,
  Icons,
  StyledUl,
  TextTwo,
} from 'src/styles/styleaccordion'
import img1 from '../../assets/icons-modal/icons-modal-two/img1.png'
import img2 from '../../assets/icons-modal/icons-modal-two/img2.png'
import img3 from '../../assets/icons-modal/icons-modal-two/img3.png'
import img4 from '../../assets/icons-modal/icons-modal-two/img4.png'
import img5 from '../../assets/icons-modal/icons-modal-two/img5.png'
import icon from '../../assets/icons/listicon5.svg'

function SectionMenuModalTwo() {
  const images = [
    {
      src: img1,
      text: 'Hearthstone® masters',
    },
    {
      src: img2,
      text: 'Campeonato Mundial de Arena WoW®',
    },
    {
      src: img3,
      text: 'StarCraft® II WCS',
    },
    {
      src: img4,
      text: 'Copa Mundial de Overwatch®',
    },
    {
      src: img5,
      text: 'Liga de Overwatch®',
    },
  ]
  return (
    <ContainerModalMenuTwo>
      <ContainerIconsTwo>
        {images.map((image, index) => (
          <Icons key={index}>
            <img src={image.src} alt="icone" />
            <TextTwo>{image.text}</TextTwo>
          </Icons>
        ))}
      </ContainerIconsTwo>
      <Footer>
        <StyledUl>
          <div>
            <img src={icon} alt="icone de trofeu" />
            Torneio Da comunidade
          </div>
        </StyledUl>
      </Footer>
    </ContainerModalMenuTwo>
  )
}

export default SectionMenuModalTwo
