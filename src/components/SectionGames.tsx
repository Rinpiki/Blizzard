import React from 'react'
import {
  Cards,
  ContainerGames,
  TextOne,
  TextStyled,
  TextTwo,
} from 'src/styles/StyledSectionGames'
import game1 from '../assets/img-games/game1.png'
import game2 from '../assets/img-games/game2.png'
import game3 from '../assets/img-games/game3.png'
import game4 from '../assets/img-games/game4.png'
import game5 from '../assets/img-games/game5.png'
import game6 from '../assets/img-games/game6.png'
import game7 from '../assets/img-games/game7.png'
import game8 from '../assets/img-games/game8.png'
import game9 from '../assets/img-games/game9.png'
import game10 from '../assets/img-games/game10.png'
import game11 from '../assets/img-games/game11.png'
import moregames from '../assets/img-games/moregames.png'

function SectionGames() {
  const data = [
    {
      img: game1,
      h1: 'Diablo II: Resurrected',
      p: 'RPG de ação',
    },
    {
      img: game2,
      h1: 'Overwatch',
      p: 'Ação em equipe',
    },
    {
      img: game3,
      h1: 'Overwatch 2',
      p: 'Ação em equipe',
    },
    {
      img: game4,
      h1: 'World of Warcraft classic',
      p: 'RPG multijogador em massa',
    },
    {
      img: game5,
      h1: 'Hearthstone',
      p: 'Jogo de cards estratégicos',
    },
    {
      img: game6,
      h1: 'Heroes of storm',
      p: 'RPG de ação',
    },
    {
      img: game7,
      h1: 'Diablo IV',
      p: 'RPG de ação',
    },
    {
      img: game8,
      h1: 'Warcraft III Reforged',
      p: 'RPG de ação',
    },
    {
      img: game9,
      h1: 'Diablo III',
      p: 'RPG de ação',
    },
    {
      img: game10,
      h1: 'StarCraft II',
      p: 'RPG de ação',
    },
    {
      img: game11,
      h1: 'StarCraft Remastered',
      p: 'RPG de ação',
    },
    {
      img: moregames,
    },
  ]

  return (
    <ContainerGames>
      {data.map((item, i) => (
        <Cards key={i}>
          <img src={item.img} alt={item.h1} />
          <TextStyled>
            <TextOne>{item.h1}</TextOne>
            <TextTwo>{item.p}</TextTwo>
          </TextStyled>
        </Cards>
      ))}
    </ContainerGames>
  )
}

export default SectionGames
