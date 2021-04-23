import React from 'react';
import { Nav, NavLogo, NavLink, NavIcon, Bars } from './navbarElements';
import Logo from '../../images/TetonValleyMeats.jpg';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLogo src={Logo} alt='logo' />
                <NavLink to='/'>Teton Valley Meats</NavLink>
                <NavIcon onClick={toggle}>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar;
