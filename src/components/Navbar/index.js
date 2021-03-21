import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './navbarElements';

const Navbar = ( toggle ) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>TETON VALLEY MEATS</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar;
