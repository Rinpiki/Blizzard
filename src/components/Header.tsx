import blizzard from '../assets/icons/blizzard.svg'
import { Logo, Headerr, Btns } from '../style'
import Menu from './microcomponents/Menu'
function Header() {
  return (
    <Headerr>
      <Logo>
        <img src={blizzard} alt="logo blizzard" />
        <Btns>
          <button>Login</button>
          <button>cadastrar</button>
        </Btns>
        <Menu />
      </Logo>
    </Headerr>
  )
}

export default Header
