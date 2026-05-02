import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { HiOutlineMail, HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

import { useThemeMode } from '../../styles/theme';
import {
  BottomRow,
  Brand,
  Container,
  NavLink,
  ResumeLink,
  SocialLink,
  Socials,
  ThemeToggle,
  TopRow,
} from './HeaderStyles';

const Header = () => {
  const { mode, toggle } = useThemeMode();

  return (
    <Container>
      <TopRow>
        <Link href="/">
          <Brand>Prashish Paudel</Brand>
        </Link>
        <Socials>
          <SocialLink href="mailto:prashishpaudel@gmail.com" aria-label="Email">
            <HiOutlineMail size="1.8rem" />
          </SocialLink>
          <SocialLink href="https://github.com/prashishpaudel" target="_blank" rel="noreferrer" aria-label="GitHub">
            <AiFillGithub size="1.8rem" />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/prashishpaudel" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <AiFillLinkedin size="1.8rem" />
          </SocialLink>
          <SocialLink href="https://instagram.com/prashishpaudel" target="_blank" rel="noreferrer" aria-label="Instagram">
            <AiFillInstagram size="1.8rem" />
          </SocialLink>
          <ThemeToggle onClick={toggle} aria-label="Toggle theme">
            {mode === 'dark' ? <HiOutlineSun size="1.6rem" /> : <HiOutlineMoon size="1.6rem" />}
          </ThemeToggle>
        </Socials>
      </TopRow>
      <BottomRow>
        <NavLink href="#research">Research</NavLink>
        <NavLink href="#work">Work</NavLink>
        <NavLink href="#tech">Tech</NavLink>
        <NavLink href="#about">About</NavLink>
        <ResumeLink href="/files/Resume-PrashishPaudel.pdf" download>
          Resume ↓
        </ResumeLink>
      </BottomRow>
    </Container>
  );
};

export default Header;
