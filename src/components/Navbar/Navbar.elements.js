import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { device } from '../../responsive';
//import { Container } from '../../globalStyles';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : '#000')};
  height: 80px;
  //margin-top: -80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media ${device.tablet} {
    transition: 0.8s all ease;
  }

  @media ${device.mobileS} {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  margin: 0 20px;
  max-width: 1140px;

  @media ${device.tablet} {
    max-width: 620px;
    margin: 0;
  }
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #01BF71;
  }

  @media ${device.mobileS} {
    padding-left: 0;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }

  @media ${device.mobileS} {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -20px;

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.mobileS} {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavItemBtn = styled.nav`
  display: flex;
  align-items: center;
  padding-right: 20px;

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.mobileS} {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 20px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;