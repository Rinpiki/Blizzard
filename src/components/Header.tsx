import { useState } from 'react'
import blizzard from '../assets/icons/blizzard.svg'
import { Logo, Headerr, Btns, BtnOne } from '../style'
import DropMenu from './microcomponents/DropMenu'
import LoginModal from './microcomponents/LoginModal'
import Menu from './microcomponents/Menu'
import MenuMobile from './microcomponents/MenuMobile'

function Header() {
  return (
    <Headerr>
      <Logo>
        <img src={blizzard} alt="logo blizzard" />
        <DropMenu />
        <Btns>
          <BtnOne>
            <p>Criar Conta</p>
          </BtnOne>
          <LoginModal />
          <Menu />
        </Btns>
        <MenuMobile />
      </Logo>
    </Headerr>
  )
}

export default Header
