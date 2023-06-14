import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineDownload } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#publications">
          Publications
        </NavLink>
      </li>
      <li>
        <NavLink href="#projects">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink href="#tech">
          Technologies
        </NavLink>
      </li>
      <li>
        <NavLink href="#about">
          About
        </NavLink>
      </li>
      <li>
      <NavLink href="/files/Resume-PrashishPaudel.pdf" download style={{ display:'flex',alighItems:'center', textDecoration: 'none' }}>
       Resume <AiOutlineDownload size = "2rem" style={{ marginTop: '5px' ,marginLeft: '5px'}}/>
      </NavLink>
    </li>

    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/prashishpaudel" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/prashishpaudel" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/prashishpaudel" target="_blank">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>

);

export default Header;
