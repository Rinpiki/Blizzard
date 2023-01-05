import React, { useState } from 'react'
import { ContainerAcorddion, Ul, DropM } from 'src/styles/styleaccordion'
import baixo from '../../assets/icons/setabaixo.svg'
import cima from '../../assets/icons/setacima.svg'
import SectionMenuModal from './SectionMenuModal'
import SectionMenuModalTwo from './SectionMenuModalTwo'

function DropMenu() {
  const [open, setOpen] = useState(true)
  const [openTwo, setOpenTwo] = useState(true)
  const openMenu = () => {
    setOpen(!open)
    setOpenTwo(true)
  }
  const openMenuTwo = () => {
    setOpenTwo(!openTwo)
    setOpen(true)
  }
  return (
    <ContainerAcorddion>
      <DropM onClick={openMenu}>
        Jogos
        {open ? (
          <img onClick={openMenu} src={baixo} alt="seta pra baixo" />
        ) : (
          <img onClick={openMenu} src={cima} alt="seta pra cima" />
        )}
      </DropM>
      <DropM onClick={openMenuTwo}>
        Esportes
        {openTwo ? (
          <img onClick={openMenuTwo} src={baixo} alt="seta pra baixo" />
        ) : (
          <img onClick={openMenuTwo} src={cima} alt="seta pra cima" />
        )}
      </DropM>
      <Ul>
        <li>Loja</li>
        <li>Notícias</li>
        <li>Suporte</li>
      </Ul>
      {open ? null : <SectionMenuModal />}
      {openTwo ? null : <SectionMenuModalTwo />}
    </ContainerAcorddion>
  )
}

export default DropMenu
