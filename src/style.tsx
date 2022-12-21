import styled from 'styled-components'
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
      top: 88px;
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
  & > :nth-child(2) {
    @media (min-width: 768px) {
      display: none;
    }
  }
`

export const Btns = styled.button`
  @media (min-width: 0px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`
export const menux = styled.div`
  height: 32px;
`

export const Headerr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  border-bottom: 2px solid #313236;
  z-index: 2;
`
