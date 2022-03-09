import React from "react";
import './Footer.css';
import { NavLink } from 'react-router-dom';

export default function Propiedades (props) {
    return(
        <footer className="BotLinks">
            <NavLink to='/status'>Estados</NavLink>
            <NavLink to='/contact'>UseEffect</NavLink>
            <a href="">Indefinido</a>
        </footer>
    );
}