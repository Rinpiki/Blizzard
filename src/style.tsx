import styled from 'styled-components'
import logar from './assets/icons/logar.png'
import listicon1 from './assets/icons/listicon1.svg'
import listicon2 from './assets/icons/listicon2.svg'
import listicon3 from './assets/icons/listicon3.png'
import listicon4 from './assets/icons/listicon4.svg'
import listicon5 from './assets/icons/listicon5.svg'

export const Logo = styled.div`
  background: transparent;
  display: flex;
  padding: 24px;
  justify-content: space-between;
  width: 100vw;
  max-width: 1300px;
  align-items: center;
  &::after {
    content: '';
    position: absolute;
    top: 80px;
    width: 42px;
    height: 2px;
    background: #01aefe;
  }
  @media (min-width: 768px) {
    &::after {
      top: 90px;
    }
  }

  & > :first-child {
    @media (min-width: 300px) {
      width: 70px;
      height: 32px;
    }
    @media (min-width: 768px) {
      width: 79px;
      height: 40px;
    }
  }
`

export const Btns = styled.div`
  @media (min-width: 0px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`
export const BtnOne = styled.div`
  font-size: 14px;
  text-align: center;
  margin-right: 10px;
  color: #ffffff;
  border: solid 1px #ffffff;
  border-radius: 5px;
  & > p {
    margin: 10px 20px 8px 20px;
  }
  &:hover {
    background: #ffffff;
    color: #202a2d;
    cursor: pointer;
  }
`
export const BtnTwo = styled(BtnOne)`
  background: #00aeff;
  border-color: #00aeff;
  padding: 8px 20px 8px 20px;
  &:hover {
    background: #0594d6;
    border-color: #0594d6;
    color: #ffff;
  }
  &::before {
    content: '';
    display: inline-block;
    justify-items: center;
    background-image: url('${logar}');
    margin-right: 8px;
    height: 18px;
    width: 18px;
  }
`

export const Iclouse = styled.div`
  height: 28px;
  width: 28px;
  cursor: pointer;
`

export const Iopen = styled.div`
  height: 18px;
  width: 28px;
  cursor: pointer;
`
export const MenuCointainer = styled.div`
  @media (min-width: 768px) {
    & {
      display: none;
    }
  }
`

export const Headerr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  border-bottom: 2px solid #313236;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  z-index: -2;
  background: #000001;
  position: absolute;
  left: 0%;
  top: 0%;
`
export const ListOne = styled.ul`
  font-size: 20px;
  color: #ffff;
  margin-top: 90px;
  margin-left: 20px;
  list-style: none;
  li {
    margin-bottom: 10px;
  }
  li + li {
    margin-bottom: 10px;
  }
  li:hover {
    color: #00aeff;
  }
`
export const ListTwo = styled(ListOne)`
  font-size: 16px;
  margin-top: 45px;
  margin-left: 45px;
  li:nth-child(1) {
    list-style-image: url('${listicon1}');
    margin-left: -8px;
  }
  li:nth-child(2) {
    list-style-image: url('${listicon2}');
  }
  li:nth-child(3) {
    list-style-image: url('${listicon3}');
  }
  li:nth-child(4) {
    list-style-image: url('${listicon4}');
  }
  li:nth-child(5) {
    list-style-image: url('${listicon5}');
  }
`
