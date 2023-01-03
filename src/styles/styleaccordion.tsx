import styled from 'styled-components'

export const ContainerAcorddion = styled.div`
  display: none;
  @media (min-width: 768px) {
    & {
      display: none;
    }
  }
`

export const DropM = styled.div`
  color: white;
  font-size: 12px;
  margin-right: 34px;
`

export const Ul = styled.ul`
  display: flex;
  li {
    margin-right: 34px;
    list-style: none;
    font-size: 12px;
  }
  li + li {
    margin-right: 34px;
  }
  color: white;
`
