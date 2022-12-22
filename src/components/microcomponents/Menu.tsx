import React, { useState } from 'react'
import iconMenu from '../../assets/icons/menu.svg'
import iconX from '../../assets/icons/menux.png'
import { MenuCointainer, Iopen, Iclouse } from '../../style'

function Menu() {
  const [menu, setMenu] = useState(true)
  const click = () => {
    setMenu(!menu)
    console.log(menu)
  }
  return (
    <MenuCointainer>
      {menu ? (
        <Iopen>
          <img src={iconMenu} onClick={click} alt="icone Menu" />
        </Iopen>
      ) : (
        <Iclouse onClick={click}>
          <img src={iconX} alt="icone menu x" />
        </Iclouse>
      )}
    </MenuCointainer>
  )
}
export default Menu
