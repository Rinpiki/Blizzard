import styled, { keyframes } from 'styled-components'
import listicon1 from '../assets/icons/listicon1.svg'
import listicon2 from '../assets/icons/listicon2.svg'
import listicon3 from '../assets/icons/listicon3.png'
import listicon4 from '../assets/icons/listicon4.svg'

//animaçao geral
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const ContainerAcorddion = styled.div`
  display: none;
  @media (min-width: 900px) {
    & {
      display: flex;
    }
  }
`

export const DropM = styled.div`
  color: white;
  font-size: 14px;
  margin-right: 34px;
  cursor: pointer;

  img {
    margin-left: 14px;
    cursor: pointer;
  }
`

export const Ul = styled.ul`
  display: flex;
  li {
    margin-right: 34px;
    list-style: none;
    font-size: 14px;
    cursor: pointer;
  }
  li + li {
    margin-right: 34px;
  }
  color: white;
`

export const ContainerModalMenu = styled.div`
  animation: ${fadeIn} 0.4s ease-in;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 600px;
  z-index: -2;
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

export const ContainerIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 168px auto 0px auto;
  justify-content: center;
  max-width: 1400px;
  width: 100%;
  height: 447px;
  justify-content: space-between;
`

export const Icons = styled.div`
  text-align: center;
`

export const Text = styled.div`
  width: 90px;
  font-size: 14px;
  color: #9d9d9d;
  margin: 0px auto;
`

export const StyledUl = styled.div`
  display: flex;
  margin: 2px auto;
  color: white;
  div {
    display: flex;
    align-items: center;
    margin-right: 64px;
  }

  div > img {
    margin-right: 10px;
  }

  div + div {
    margin-right: 64px;
  }
`

export const Footer = styled.div`
  background: #15171b;
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
`