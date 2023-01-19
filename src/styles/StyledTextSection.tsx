import styled from 'styled-components'

export const ContainerGeral = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 76px 0px;
`

export const TextOne = styled.p`
  display: none;
  font-weight: 600;
  font-size: 15px;
  color: #8f9199;
  @media (min-width: 1140px) {
    display: flex;
  }
`

export const TextTwo = styled.p`
  font-weight: 700;
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`

export const ImgIcons = styled.img`
  display: none;
  width: 159.9px;
  height: 22px;
  @media (min-width: 768px) {
    display: flex;
  }
`

export const IconText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  color: #00aeff;
  img {
    margin-right: 12px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
`
