import React from "react";
import './Footer.css';
import { NavLink } from 'react-router-dom';

export default function Propiedades (props) {
    return(
        <footer className="BotLinks">
            <NavLink to='/status'>{props.link1}</NavLink>
            <li><a href="">{props.link2}</a></li>
            {true&&<li><a href="">{props.link3}</a></li>}
        </footer>
    );
}