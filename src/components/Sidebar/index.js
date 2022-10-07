import React from 'react';
import { FaChild } from 'react-icons/fa';
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarLink, SidebarRoute, SidebarWrapper, SidebarMenu, SideBtnProfile } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
      <Icon onClick = {toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to = "about" onClick = {toggle}>
            Novinky
          </SidebarLink>
          <SidebarLink to = "discover" onClick = {toggle}>
            Informácie
          </SidebarLink>
          <SidebarLink to = "services" onClick = {toggle}>
            Eshop
          </SidebarLink>
          <SidebarLink to = "signup" onClick = {toggle}>
            Mapa školy
          </SidebarLink>
        </SidebarMenu>
        <SideBtnProfile>
          <FaChild />
        </SideBtnProfile>
        <SideBtnWrap>
          <SidebarRoute to = "/signin">Zaregistrujte sa</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
