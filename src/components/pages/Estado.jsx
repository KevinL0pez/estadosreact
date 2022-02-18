import React from 'react';
import Navegation from '../UI/Navegation';
import FooterHome from '../UI/FooterHome';
import {EstadosHead} from '../layouts/EstadosHead'

export const Estado = () => {
  return (
    <>
        <Navegation page1="Home" page2="AboutUs" page3="Contact"/>
        <EstadosHead/>
        <FooterHome link1="Estados" link2="Vision" link3="Contact"/>
    </>
  )
}
