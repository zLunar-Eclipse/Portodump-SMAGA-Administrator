import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>TEelp</LinkTitle>
          <LinkItem href="tel:314-343-3432">+62 815-6822-1023</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:edwinjordanwilliam@gmail.com">
            edwinjordanwilliam@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Belajar, Uji, Istirahat & Konsisten. Selamat, Berjuang, Sukses.</Slogan>
        </CompanyContainer>  
        <SocialContainer>
          <SocialIcons href="https://github.com/zLunar-Eclipse">
            <AiFillGithub size="3rem" /> 
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/lunar_eclipse.mda/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}
export default Footer;