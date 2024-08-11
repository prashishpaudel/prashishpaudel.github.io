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
        A software engineer at Blink Voice with a Master's in Computer Science from the University of Toledo, I specialize in full-stack development, NLP, and AI. My work spans from innovative communication solutions to medical simulation assessment platforms. I'm passionate about leveraging technology to enhance user experiences and solve complex problems.
        </SectionText>
        <SectionText>
        Currently, I'm exploring the intersection of VoIP and AI to revolutionize digital communication.
        </SectionText>
        <NavLink href="#tech">
        <Button onClick={props.handleClick}>Learn More</Button>
        </NavLink>
      </LeftSection>
    </Section>
  </>
);
export default Hero;