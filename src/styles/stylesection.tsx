import styled, { keyframes } from 'styled-components'

interface TypeProps {
  backgroundImage: string
}
interface TypePropsFilter {
  filter?: string
  animation?: boolean
}

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
export const fadeIn2 = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
export const ContainerImg = styled.section<TypeProps>`
  width: 100%;
  height: 736px;
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
  width: 90%;
  max-width: 1300px;
  margin: 131px auto 0px auto;
  @media (min-width: 1000px) {
    & {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
      width: 93%;
    }
  }
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
  transition: transform 0.3s ease-in-out;
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
  &:hover {
    transform: scale(1.05);
  }
`

export const UlIcons = styled.div`
  display: flex;
  margin-top: 48px;
  img + img {
    margin-right: 16px;
  }
  @media (min-width: 1000px) {
    & {
      display: flex;
      flex-direction: column;
      margin-top: 25px;
      img {
        margin-bottom: 20px;
      }
      img + img {
        margin-bottom: 20px;
      }
    }
  }
`

export const StyledImg = styled.img<TypePropsFilter>`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  filter: ${(props) => props.filter};
  cursor: pointer;
`