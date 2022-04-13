import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
}
from './Sidebar.elements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='home' onClick={toggle}>Home</SidebarLink>
          <SidebarLink to='about' onClick={toggle}>Sobre nós</SidebarLink>
          <SidebarLink to='service' onClick={toggle}>Serviços</SidebarLink>
          <SidebarLink to='portfolio' onClick={toggle}>Portfolio</SidebarLink>
          <SidebarLink to='pricing' onClick={toggle}>Orçamneto</SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>Contato</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/contact'>Me chame</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar