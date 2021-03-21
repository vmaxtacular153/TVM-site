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

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>Sausages</SidebarLink>
                <SidebarLink to='/'>Beef</SidebarLink>
                <SidebarLink to='/'>Pork</SidebarLink>
            </SidebarMenu>    
            <SideBtnWrap>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
};

export default Sidebar;
