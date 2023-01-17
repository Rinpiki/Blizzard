import React from 'react'
import listicon1 from '../../assets/icons/listicon1.svg'
import listicon2 from '../../assets/icons/listicon2.svg'
import listicon3 from '../../assets/icons/listicon3.png'
import listicon4 from '../../assets/icons/listicon4.svg'
import listicon5 from '../../assets/icons/listicon5.svg'
import { ImgIconMb, ListOne, ListTwo, ModalContainer } from '../../style'
//o modal usa o valor do useState para abrir e fechar.
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
        <div>
          <ImgIconMb src={listicon1} />
          Ver todos os jogos
        </div>
        <div>
          <ImgIconMb src={listicon2} />
          Aplicativo Battle.net
        </div>
        <div>
          <ImgIconMb src={listicon3} />
          Downloads
        </div>
        <div>
          <ImgIconMb src={listicon4} />
          Fórum dos jogos
        </div>
        <div>
          <ImgIconMb src={listicon5} />
          Torneios da comunidade
        </div>
      </ListTwo>
    </ModalContainer>
  )
}

export default Modal
