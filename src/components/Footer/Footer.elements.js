import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../responsive';

export const FooterContainer = styled.footer`
  background-color: var(--secondary-dark);
`;

export const FooterWrap = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;

  @media ${device.tablet} {
    padding: 40px 20px;
  }

  @media ${device.mobileS} {
    padding: 40px 0px;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1000px;
  width: 100%;


  @media ${device.mobileS} {
    padding-top: 40px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1000px;
  width: 100%;

  @media ${device.mobileS} {
    flex-direction: column;
    align-items: flex-end;
    margin-left: 20px;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
  text-align: left;
  max-width: 160px;
  width: 100%;
  box-sizing: border-box;
  color: var(--white);

  @media ${device.tablet} {
    margin: 10px;
    align-items: center;
  }

  @media ${device.mobileS} {
    margin: 0 0 20px 0;
    padding: 0;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const FooterLink = styled.a`
  color: var(--white);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: var(--primary);
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  padding: 0 20px;

  @media ${device.tablet} {
    margin: 40px 10px 0 10px;
  }

  @media ${device.mobileS} {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: var(--white);
  justify-content: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;

  &:hover {
    color: var(--primary);
  }
`;

export const WebsiteRights = styled.small`
  color: var(--white);
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: var(--white);
  font-size: 24px;

  &:hover {
    color: var(--primary);
  }
`;