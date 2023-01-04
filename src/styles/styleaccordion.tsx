import styled from 'styled-components'

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
