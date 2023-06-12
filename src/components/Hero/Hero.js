import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection,NavLink } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi There! I'm <br />
          Prashish Paudel
        </SectionTitle>
        <SectionText>
        A Computer Science Masters student at the University of Toledo, I specialize in software development, NLP, and machine learning, and have contributed to research in medical simulations and health care.
        </SectionText>
        <SectionText>
        I'm currently seeking new opportunities to apply my technical expertise and academic insights to tackle new challenges in the field of computer science.
        </SectionText>
        <NavLink href="#tech">
        <Button onClick={props.handleClick}>Learn More</Button>
        </NavLink>
      </LeftSection>
    </Section>
  </>
);
export default Hero;