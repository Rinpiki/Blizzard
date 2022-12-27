import React, { useState } from 'react'
import { BtnTwo } from 'src/style'

function LoginModal() {
  const [loginModal, setLoginModal] = useState(true)
  const login = () => {
    setLoginModal(!loginModal)
    console.log(loginModal)
  }
  return <BtnTwo onClick={login}>Logar</BtnTwo>
}

export default LoginModal
