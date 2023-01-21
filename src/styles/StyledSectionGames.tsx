import styled from 'styled-components'

export const ContainerGames = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-bottom: 189px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 80px;
    grid-column-gap: 30px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 100px;
  }
`
export const Cards = styled.div`
  width: 156px;
  height: 213px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    transition: 0.2s ease-in-out;
  }
  img:hover {
    transform: scale(105%);
  }
  @media (min-width: 726px) {
    width: 210px;
    height: 275px;
  }
  @media (min-width: 1200px) {
    height: 384px;
    width: 280px;
  }
`
export const TextStyled = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const TextOne = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #e5e5e5;
`

export const TextTwo = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #8f9199;
`
