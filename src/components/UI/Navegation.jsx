import React from 'react';
import './Navegation.css'
import { NavLink } from 'react-router-dom';

export default function Navegation (props) {
    return(
        <div className="NavUp"> 
            <NavLink to='/'>{props.page1}</NavLink>
            <NavLink to='/aboutus'>{props.page2}</NavLink>
            <NavLink to='/contact'>{props.page3}</NavLink>
        </div>
    );
}
