import React from 'react';
import  { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink  } from './FooterElements'; 
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
      scroll.scrollToTop();
    }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          {/* <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to = "/signin">How it works</FooterLink>
                <FooterLink to = "/signin">Test</FooterLink>
                <FooterLink to = "/signin">Careers</FooterLink>
                <FooterLink to = "/signin">Investors</FooterLink>
                <FooterLink to = "/signin">xxxxxx</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to = "/signin">How it works</FooterLink>
                <FooterLink to = "/signin">Test</FooterLink>
                <FooterLink to = "/signin">Careers</FooterLink>
                <FooterLink to = "/signin">Investors</FooterLink>
                <FooterLink to = "/signin">xxxxxx</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper> */}
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Web stránka</FooterLinkTitle>
                <FooterLink to = "/">Novinky</FooterLink>
                <FooterLink to = "/">Promo</FooterLink>
                <FooterLink to = "/">Eshop</FooterLink>
                <FooterLink to = "/">Mapa školy</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Kontakty</FooterLinkTitle>
                <FooterLink>Súkromná stredná odborná škola, Ul. 29. augusta 4812, 058 01 Poprad</FooterLink>
                <FooterLink>riaditel@tatranskaakademia.sk</FooterLink>
                <FooterLink>sekreteriát : 0918 345 990 riaditeľka : 0905 298 655 zriaďovateľ : 0905 716 376</FooterLink>
                <FooterLink>Ul. 29. augusta 4812, 058 01 Poprad Slovakia</FooterLink>
                
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to = "/" onClick = {toggleHome}>
              SSOSTA
            </SocialLogo>
            <WebsiteRights> jsmk © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href = "https://www.facebook.com/ssostapoprad/" target = "_blank" aria-label = "Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href = "https://www.instagram.com/ssostapoprad/" target = "_blank" aria-label = "Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href = "https://www.youtube.com/c/ssostaTV" target = "_blank" aria-label = "Youtube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
