import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink,
    SideBtnWrap, 
    SidebarRoute
} from './sidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>Sausages</SidebarLink>
                <SidebarLink to='/'>Breakfast Meats</SidebarLink>
                <SidebarLink to='/'>Beef Cuts</SidebarLink>
                <SidebarLink to='/'>Pork Cuts</SidebarLink>
                <SidebarLink to='/'>Poultry</SidebarLink>
            </SidebarMenu>    
            <SideBtnWrap>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
};

export default Sidebar;
