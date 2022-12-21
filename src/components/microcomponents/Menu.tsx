import React, { useState } from 'react'
import iconMenu from '../../assets/icons/menu.svg'
import iconX from '../../assets/icons/menux.png'
import Menux from '../../style'

function Menu() {
  const [menu, setMenu] = useState(true)
  const click = () => {
    setMenu(!menu)
    console.log(menu)
  }
  return (
    <div>
      {menu ? (
        <img src={iconMenu} onClick={click} alt="icone Menu" />
      ) : (
        <Menux onClick={click}>
          <img src={iconX} alt="icone menu x" />
        </Menux>
      )}
    </div>
  )
}
export default Menu
