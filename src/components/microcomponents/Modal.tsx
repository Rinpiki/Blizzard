import React from 'react'

import { ListOne, ListTwo, ModalContainer } from '../../style'
//o modal usa o valor do useState para abrir e fechar
function Modal() {
  return (
    <ModalContainer>
      <ListOne>
        <li>Loja</li>
        <li>Notocias</li>
        <li>Suporte</li>
        <li>Entrar</li>
      </ListOne>
      <ListTwo>
        <li>Ver todos os jogos</li>
        <li>Aplicativo Battle.net</li>
        <li>Downloads</li>
        <li>Fórum dos jogos</li>
        <li>Torneios da comunidade</li>
      </ListTwo>
    </ModalContainer>
  )
}

export default Modal
