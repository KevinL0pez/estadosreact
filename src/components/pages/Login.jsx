import React from 'react'
import Navegation from '../UI/Navegation'
import { FormLogin } from '../layouts/FormLogin'
import { FormRegister } from '../layouts/FormRegister'
import FooterHome from '../UI/FooterHome';

export const Login = () => {
  return (
    <>
        <Navegation/>
        <FormLogin/>
        <FooterHome/>
    </>
  )
}
