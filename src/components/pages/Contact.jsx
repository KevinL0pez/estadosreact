import React from 'react';
import Navegation from '../UI/Navegation'
import Counter from '../layouts/Counter';
import FooterHome from '../UI/FooterHome';
import { Perfil } from '../UI/images/Perfil'

export const Contact = () => {
    return (
        <>
            {true&&<Navegation page1="Home" page2="AboutUs" page3="UseEffect"/>}
            <Counter/>
            <Perfil/>
            {false&&<FooterHome link1="Estados" link2="Vision" link3="Contact"/>}
        </>
    )
    
}