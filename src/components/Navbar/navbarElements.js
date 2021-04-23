import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Logo from '../../images/TetonValleyMeats.jpg';

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 600;
`;

export const NavLogo = styled.img`
    position: absolute;
    margin: 20px;
    left: 0;
    top: 0;
    height: 80px;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 30px;
    right: 10px;
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`;

export const Bars = styled(FaShoppingCart)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`;