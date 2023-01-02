import React, { useState } from 'react'
import {
  BtnTwo,
  ContainerModalLogin,
  ModalLogin,
  FormStyled,
  TextAndicons,
} from '../../style'

import baa from '../../assets/icons/baa.png'
import xblue from '../../assets/icons/xblue.png'
import google from '../../assets/icons/logingoogle.svg'
import apple from '../../assets/icons/loginapple.svg'
import facebook from '../../assets/icons/loginfacebook.svg'

function LoginModal() {
  const [loginModal, setLoginModal] = useState(false)
  const login = () => {
    setLoginModal(!loginModal)
    console.log(loginModal)
  }
  return (
    <>
      <BtnTwo onClick={login}>Logar</BtnTwo>
      {loginModal ? (
        <ContainerModalLogin>
          <ModalLogin>
            <div onClick={login}>
              <img src={xblue} alt="um X" />
            </div>
            <img src={baa} alt="logo de titulo da battlenet" />
            <FormStyled>
              <input
                type="email"
                name="name"
                placeholder="E-mail ou telefone"
              />
              <input type="password" name="senha" placeholder="Senha" />
              <input type="submit" value="Conectar-se" />
              <TextAndicons>
                <div>ou conecte-se com</div>
                <div>
                  <img src={google} alt="icone do google" />
                  <img src={apple} alt="icone da apple" />
                  <img src={facebook} alt="icone do facebook" />
                </div>
                <div>
                  <span>Crie uma conta</span>Battle.net de graça
                  <div>Não consegue logar? </div>
                </div>
              </TextAndicons>
            </FormStyled>
          </ModalLogin>
        </ContainerModalLogin>
      ) : null}
    </>
  )
}

export default LoginModal
