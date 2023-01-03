import React, { useState } from 'react'
import { Iclouse, Iopen, MenuContainerMobile } from '../../style'
import iconMenu from '../../assets/icons/menu.svg'
import iconX from '../../assets/icons/menux.png'
import Modal from './Modal'

function MenuMobile() {
  const [menu, setMenu] = useState(true)
  const click = () => {
    setMenu(!menu)
    console.log(menu)
  }
  return (
    <MenuContainerMobile>
      {menu ? (
        <Iopen>
          <img src={iconMenu} onClick={click} alt="icone Menu" />
        </Iopen>
      ) : (
        <Iclouse onClick={click}>
          <img src={iconX} alt="icone menu x" />
          <Modal />
        </Iclouse>
      )}
    </MenuContainerMobile>
  )
}

export default MenuMobile
