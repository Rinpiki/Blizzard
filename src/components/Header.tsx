import { useState } from 'react'
import blizzard from '../assets/icons/blizzard.svg'
import { Logo, Headerr, Btns, BtnOne, BtnTwo } from '../style'
import LoginModal from './microcomponents/LoginModal'
import Menu from './microcomponents/Menu'

function Header() {
  const [loginModal, setLoginModal] = useState(true)
  const login = () => {
    setLoginModal(!loginModal)
    console.log(loginModal)
  }
  return (
    <Headerr>
      <Logo>
        <img src={blizzard} alt="logo blizzard" />
        <Btns>
          <BtnOne>
            <p>Criar Conta</p>
          </BtnOne>
          <LoginModal />
        </Btns>
        <Menu />
      </Logo>
    </Headerr>
  )
}

export default Header
