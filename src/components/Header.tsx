import blizzard from '../assets/icons/blizzard.svg'
import { Logo, Headerr, Btns, BtnOne, BtnTwo } from '../style'
import Menu from './microcomponents/Menu'

function Header() {
  return (
    <Headerr>
      <Logo>
        <img src={blizzard} alt="logo blizzard" />
        <Btns>
          <BtnOne>
            <p>Criar Conta</p>
          </BtnOne>
          <BtnTwo>Logar</BtnTwo>
        </Btns>
        <Menu />
      </Logo>
    </Headerr>
  )
}

export default Header
