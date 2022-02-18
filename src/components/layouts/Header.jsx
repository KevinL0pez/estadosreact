import React from 'react';
import { NavLink } from 'react-router-dom';
import Navegation from '../UI/Navegation';
import '../UI/Navegation.css'

export const Header = (props) => {
    return(
        <>
            <div className="NavUp">
                <NavLink to='/'><li><a href="" >{props.page1}</a></li></NavLink>
                <NavLink to='/aboutus'>{props.page2}</NavLink>
            </div>
        </>
    )
}
