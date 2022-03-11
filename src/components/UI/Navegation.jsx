import React from 'react';
import './Navegation.css'
import { NavLink } from 'react-router-dom';

export default function Navegation (props) {
    return(
        <div className="NavUp"> 
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/aboutus'>AboutUs</NavLink>
            <NavLink to='/rick-morty'>Api R&M</NavLink>
            <NavLink to='/contactar'>Contact</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
        </div>
    );
}
