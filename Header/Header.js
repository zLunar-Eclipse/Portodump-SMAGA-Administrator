import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
const Header = () =>  (
  <Container>
    <Div1 />
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Proyek</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About Me & Pencapaian Personal</NavLink> 
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/zLunar-Eclipse">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/lunar_eclipse.mda/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>  
);
export default Header;










































































//117 lines cuz kenapa not not