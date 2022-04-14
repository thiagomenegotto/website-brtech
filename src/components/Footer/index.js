import React from 'react';
import { animateScroll as scroll} from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

import { 
  FooterContainer, 
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  WebsiteRights
} from './Footer.elements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre nós</FooterLinkTitle>
                <FooterLink to='/'>Onde estamos</FooterLink>
                <FooterLink to='/'>Depoimentos</FooterLink>
                <FooterLink to='/'>Carreira</FooterLink>
                <FooterLink to='/'>Projetos</FooterLink>
                <FooterLink to='/'>Termo de Serviço</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contato</FooterLinkTitle>
                <FooterLink to='/'>Contato</FooterLink>
                <FooterLink to='/'>Suporte</FooterLink>
                <FooterLink to='/'>Endereço</FooterLink>
                <FooterLink to='/'>Patrocínio</FooterLink>
                <FooterLink to='/'>Whatsapp</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to='/'>Submit Video</FooterLink>
                <FooterLink to='/'>Youtube</FooterLink>
                <FooterLink to='/'>Agência</FooterLink>
                <FooterLink to='/'>Influencer</FooterLink>
                <FooterLink to='/'>Social Motion</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink href="https://www.instagram.com/thiago.menegotto/" target="_blank">Instagram</FooterLink>
                <FooterLink href="https://www.facebook.com/brtech.net.br" target="_blank">Facebook</FooterLink>
                <FooterLink href="https://wa.me/5542988044920" target="_blank">Whatsapp</FooterLink>
                <FooterLink to='/'>Youtuber</FooterLink>
                <FooterLink href="https://www.linkedin.com/in/thiago-menegotto-5715a99b/" target="_blank">LinkedIn</FooterLink>
            </FooterLinkItems>  
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>BRTECH</SocialLogo>
            <WebsiteRights>BRTECH c {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://www.facebook.com/brtech.net.br" target="_blank" aria-label="Facebook">
                <FaFacebook/>
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/thiago.menegotto/" target="_blank" aria-label="Instagram">
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href="https://wa.me/5542988044920" target="_blank" aria-label="Whatsapp">
                <FaWhatsapp/>
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube/>
              </SocialIconLink>
              <SocialIconLink href="https://www.linkedin.com/in/thiago-menegotto-5715a99b/" target="_blank" aria-label="Linkedin">
                <FaLinkedin/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer