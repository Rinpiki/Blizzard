import styled, { keyframes } from 'styled-components'
import banner1 from '../assets/banner/banner1.jpg'
import banner2 from '../assets/banner/banner2.jpg'
import banner3 from '../assets/banner/banner3.jpg'
import banner4 from '../assets/banner/banner4.jpg'
import banner5 from '../assets/banner/banner5.jpg'

interface TypeProps {
  backgroundImage: string
}
interface TypePropsFilter {
  filter: string
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
export const ContainerImg = styled.section<TypeProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: center;
  margin-top: -92px;
  z-index: 1;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
export const Container = styled.div`
  width: 95%;
  max-width: 1300px;
  margin: 131px auto 0px auto;
`

export const TextoH1 = styled.h1`
  width: 297px;
  color: white;
  font-weight: 700;
  font-size: 40px;
  line-height: 110.2%;
  @media (min-width: 768px) {
    & {
      font-size: 64px;
      width: 630px;
    }
  }
`
export const StyledP = styled.p`
  width: 90%;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  margin-top: 16px;
  letter-spacing: -0.005em;
  color: #ffffff;
`

export const StyledButton = styled.button`
  animation: ${fadeIn} 0.5s ease-in;
  padding: 14px 32px;
  background: #00aeff;
  margin-top: 32px;
  border: none;
  border-radius: 4px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`

export const UlIcons = styled.div`
  display: flex;
  margin-top: 48px;
  img + img {
    margin-right: 16px;
  }
`

export const StyledImg = styled.img<TypePropsFilter>`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  filter: ${(props) => props.filter};
  cursor: pointer;
  animation: ${fadeIn} 0.5s ease-in;
`
