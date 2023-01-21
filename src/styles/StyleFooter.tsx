import styled from 'styled-components'
import footerbg from '../assets/footer/bgfooter.png'

export const ContainerFooter = styled.div`
  width: 100%;
  background-image: url(${footerbg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-width: 1550px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const Container = styled.div`
  overflow-x: hidden;
  max-width: 1550px;
  margin-left: 20px;
  @media (min-width: 740px) {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 740px) {
    display: flex;
    justify-content: space-between;
  }
`
export const TextFooter = styled.div`
  max-width: 299px;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 50px;
  P {
    font-weight: 700;
    font-size: 28px;
    color: #ffffff;
    margin-bottom: 30px;
  }
  @media (min-width: 930px) {
    margin-left: 100px;
  }
  @media (min-width: 1118px) {
    margin-left: 190px;
  }

  @media (min-width: 1200px) {
    margin-left: 50px;
    margin-top: 100px;
    max-width: 320px;
  }
`
export const TextIcon = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  color: #bcc0ca;
  margin-bottom: 25px;
  img {
    margin-right: 16px;
  }
`

export const Linkfooter = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #e5e5e5;
  img {
    margin-right: 10px;
  }
  span > a {
    color: #e5e5e5;
  }
`

export const ImgLogo = styled.img`
  width: 133px;
  height: 16px;
  margin-bottom: 30px;
`
export const BtnFooter = styled.button`
  transition: transform 0.2s ease-in-out;
  width: 266px;
  display: flex;
  justify-content: center;
  padding: 9px 32px 14px 23px;
  margin-bottom: 40px;
  margin-top: 17px;
  background: #00aeff;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  align-items: center;
  color: #ffffff;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  img {
    margin-right: 10px;
  }
  div {
    margin-top: 5px;
  }
`
export const Ftimg1 = styled.img`
  position: absolute;
  right: 0;
  @media (min-width: 700px) {
    display: none;
  }
`
export const Ftimg2 = styled.img`
  position: absolute;
  right: 0;
  display: none;
  @media (min-width: 700px) {
    display: flex;
  }
  @media (min-width: 1200px) {
    display: none;
  }
`
export const Ftimg3 = styled.img`
  position: absolute;
  right: 0;
  display: none;
  @media (min-width: 1200px) {
    display: flex;
  }
  @media (min-width: 1550px) {
    display: none;
  }
`
export const Ftimg4 = styled.img`
  display: none;
  @media (min-width: 1550px) {
    display: flex;
  }
`

export const ImgFooter = styled.div`
  display: flex;
  overflow-x: hidden;
  img {
    margin: 0px 0px 0px auto;
  }
`
