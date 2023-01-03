import React from 'react'
import { ContainerAcorddion, Ul, DropM } from 'src/styles/styleaccordion'
import baixo from '../../assets/icons/setabaixo.svg'

function DropMenu() {
  return (
    <ContainerAcorddion>
      <DropM>
        Jogos
        <img src={baixo} alt="seta pra baixo" />
      </DropM>
      <DropM>
        Esportes
        <img src={baixo} alt="seta pra baixo" />
      </DropM>
      <Ul>
        <li>Loja</li>
        <li>Notícias</li>
        <li>Suporte</li>
      </Ul>
    </ContainerAcorddion>
  )
}

export default DropMenu
