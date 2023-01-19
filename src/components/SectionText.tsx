import React from 'react'
import icons from '../assets/icons-text-section/logos_bs.png'
import icontext from '../assets/icons/listicon1.svg'
import {
  ContainerGeral,
  IconText,
  ImgIcons,
  TextOne,
  TextTwo,
} from 'src/styles/StyledTextSection'

function SectionText() {
  return (
    <ContainerGeral>
      <TextOne>GAMES</TextOne>
      <TextTwo>Jogos exclusivos</TextTwo>
      <ImgIcons src={icons} />
      <IconText>
        <img src={icontext} />
        Ver todos jogos
      </IconText>
    </ContainerGeral>
  )
}

export default SectionText
