import styled from 'styled-components'
import logar from './assets/icons/logar.png'

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
      top: 92px;
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
  @media (min-width: 0px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`
export const BtnOne = styled.div`
  font-size: 14px;
  padding: 8px 20px;
  text-align: center;
  margin-right: 10px;
  color: #ffffff;
  border: solid 2px #ffffff;
  border-radius: 5px;
  &:hover {
    background: #ffffff;
    color: #202a2d;
    cursor: pointer;
  }
`
export const BtnTwo = styled(BtnOne)`
  background: #00aeff;
  border-color: #00aeff;
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
  width: 100vw;
  border-bottom: 2px solid #313236;
  z-index: 2;
`
