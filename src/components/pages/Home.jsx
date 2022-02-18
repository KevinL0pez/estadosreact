import React from 'react';
import Navegation from '../UI/Navegation'
import { Imagen } from '../UI/images/Imagen'
import FooterHome from '../UI/FooterHome';

export const Home = () => {
    return (
        <div>
            <Navegation page1="Home" page2="AboutUs" page3="Contact"/>
            <Imagen/>
            <FooterHome link1="Estados" link2="Vision" link3="Contact"/>
        </div>
    )
}
