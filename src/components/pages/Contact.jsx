import React from 'react';
import Navegation from '../UI/Navegation'
import Counter from '../layouts/Counter';
import FooterHome from '../UI/FooterHome';
import { Perfil } from '../UI/images/Perfil'

export const Contact = () => {
    return (
        <>
            {true&&<Navegation/>}
            <Counter/>
            <Perfil/>
            {true&&<FooterHome/>}
        </>
    )
    
}