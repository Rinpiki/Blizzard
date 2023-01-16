import styled, { keyframes } from 'styled-components'
import logar from './assets/icons/logar.png'
import listicon1 from './assets/icons/listicon1.svg'
import listicon2 from './assets/icons/listicon2.svg'
import listicon3 from './assets/icons/listicon3.png'
import listicon4 from './assets/icons/listicon4.svg'
import listicon5 from './assets/icons/listicon5.svg'
import loginModal from './assets/banner/login-bg.webp'

//animaçao geral
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
export const Logo = styled.div`
  animation: ${fadeIn} 0.5s ease-in;
  background: transparent;
  display: flex;
  padding: 24px;
  justify-content: space-between;
  width: 100%;
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
  @media (min-width: 1010px) {
    &::after {
      top: 90px;
    }
    & {
      width: 90%;
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
  display: flex;
  align-items: center;
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
  margin-left: 80px;
  @media (min-width: 900px) {
    & {
      display: none;
    }
  }
`
export const MenuContainerMobile = styled(MenuCointainer)`
  margin-left: 0px;
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
  z-index: 5;
  width: 100%;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
`

export const ModalContainer = styled.div`
  animation: ${fadeIn} 0.5s ease-in;
  display: flex;
  flex-direction: column;
  width: 100vw;
  z-index: -5;
  background: rgb(14, 17, 23);
  background: linear-gradient(
    180deg,
    rgba(14, 17, 23, 1) 0%,
    rgba(13, 13, 19, 1) 35%,
    rgba(2, 2, 0, 1) 100%
  );
  position: absolute;
  left: 0%;
  top: 0%;
`
export const ListOne = styled.ul`
  font-size: 20px;
  color: #ffff;
  margin-top: 100px;
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
//modal de login

export const ContainerModalLogin = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
`
export const ModalLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 696px;
  height: 598px;
  margin: 50px auto;
  z-index: 25;
  opacity: 1;
  background: url('${loginModal}');
  background-repeat: no-repeat;
  & > div {
    width: 16px;
    height: 16px;
    position: relative;
    left: 308px;
    top: 28px;
    cursor: pointer;
    z-index: 30;
  }
  & > img {
    z-index: 15;
    width: 166px;
    height: 20px;
    margin-top: 46px;
    margin-bottom: 40px;
  }
`

//formulario
export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.4s ease-in;
  input:nth-child(1) {
    width: 426px;
    height: 48px;
    border-radius: 4px;
    border: none;
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 15px;
    color: #363842;
    padding: 12px 0px 12px 16px;
  }
  input:nth-child(2) {
    width: 426px;
    height: 48px;
    border-radius: 4px;
    border: none;
    margin-bottom: 16px;
    font-size: 15px;
    font-weight: 600;
    color: #363842;
    padding: 12px 0px 12px 16px;
  }
  input:nth-child(3) {
    width: 426px;
    height: 48px;
    border-radius: 4px;
    border: none;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    background: #00aeff;
    margin-bottom: 41px;
    cursor: pointer;
    &:hover {
      background: #0594d6;
    }
  }
`
export const TextAndicons = styled.div`
  align-items: center;
  text-align: center;
  div:nth-child(1) {
    color: white;
    font-size: 14px;
    margin-bottom: 16px;
  }
  div:nth-child(2) {
    img {
      margin-right: 16px;
      transition: transform 0.2s ease-in-out;
      cursor: pointer;
    }
    img + img {
      margin-right: 16px;
    }
    img:hover {
      transform: scale(1.1);
    }
  }
  div:nth-child(3) {
    font-size: 16px;
    color: white;
    margin-top: 35px;

    span {
      color: #00aeff;
      margin-right: 5px;
      cursor: pointer;
    }
    div {
      color: #00aeff;
      margin-top: 16px;
      cursor: pointer;
    }
  }
`
