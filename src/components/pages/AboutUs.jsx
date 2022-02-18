import React from 'react'
import Navegation from '../UI/Navegation'
import { HeadAbt } from '../UI/images/HeadAbt'
import FooterHome from '../UI/FooterHome';

export const AboutUs = () => {
    return (
        <>
            <Navegation page1="Home" page2="AboutUs" page3="Contact"/>
            <HeadAbt/>
            <FooterHome link1="Estados" link2="Vision" link3="Contact"/>
        </>
    )
}