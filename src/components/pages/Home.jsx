import React from 'react';
import Navegation from '../UI/Navegation'
import { Imagen } from '../UI/images/Imagen'
import FooterHome from '../UI/FooterHome';

export const Home = () => {
    return (
        <div>
            <Navegation/>
            <Imagen/>
            <FooterHome/>
        </div>
    )
}
